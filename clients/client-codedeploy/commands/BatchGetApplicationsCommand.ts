import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { BatchGetApplicationsInput, BatchGetApplicationsOutput } from "../models/models_0";
import {
  deserializeAws_json1_1BatchGetApplicationsCommand,
  serializeAws_json1_1BatchGetApplicationsCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type BatchGetApplicationsCommandInput = BatchGetApplicationsInput;
export type BatchGetApplicationsCommandOutput = BatchGetApplicationsOutput & __MetadataBearer;

/**
 * <p>Gets information about one or more applications. The maximum number of applications that can be returned is 100.</p>
 */
export class BatchGetApplicationsCommand extends $Command<
  BatchGetApplicationsCommandInput,
  BatchGetApplicationsCommandOutput,
  CodeDeployClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchGetApplicationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeDeployClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchGetApplicationsCommandInput, BatchGetApplicationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeDeployClient";
    const commandName = "BatchGetApplicationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchGetApplicationsInput.filterSensitiveLog,
      outputFilterSensitiveLog: BatchGetApplicationsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: BatchGetApplicationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1BatchGetApplicationsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchGetApplicationsCommandOutput> {
    return deserializeAws_json1_1BatchGetApplicationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
