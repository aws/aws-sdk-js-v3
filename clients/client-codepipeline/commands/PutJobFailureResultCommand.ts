import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { PutJobFailureResultInput } from "../models/models_0";
import {
  deserializeAws_json1_1PutJobFailureResultCommand,
  serializeAws_json1_1PutJobFailureResultCommand,
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

export type PutJobFailureResultCommandInput = PutJobFailureResultInput;
export type PutJobFailureResultCommandOutput = __MetadataBearer;

/**
 * <p>Represents the failure of a job as returned to the pipeline by a job worker. Used
 *             for custom actions only.</p>
 */
export class PutJobFailureResultCommand extends $Command<
  PutJobFailureResultCommandInput,
  PutJobFailureResultCommandOutput,
  CodePipelineClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutJobFailureResultCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodePipelineClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutJobFailureResultCommandInput, PutJobFailureResultCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodePipelineClient";
    const commandName = "PutJobFailureResultCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutJobFailureResultInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutJobFailureResultCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutJobFailureResultCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutJobFailureResultCommandOutput> {
    return deserializeAws_json1_1PutJobFailureResultCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
