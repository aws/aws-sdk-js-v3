import { MigrationHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubClient";
import { DescribeMigrationTaskRequest, DescribeMigrationTaskResult } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeMigrationTaskCommand,
  serializeAws_json1_1DescribeMigrationTaskCommand,
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

export type DescribeMigrationTaskCommandInput = DescribeMigrationTaskRequest;
export type DescribeMigrationTaskCommandOutput = DescribeMigrationTaskResult & __MetadataBearer;

/**
 * <p>Retrieves a list of all attributes associated with a specific migration task.</p>
 */
export class DescribeMigrationTaskCommand extends $Command<
  DescribeMigrationTaskCommandInput,
  DescribeMigrationTaskCommandOutput,
  MigrationHubClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeMigrationTaskCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MigrationHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeMigrationTaskCommandInput, DescribeMigrationTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MigrationHubClient";
    const commandName = "DescribeMigrationTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeMigrationTaskRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeMigrationTaskResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeMigrationTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeMigrationTaskCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeMigrationTaskCommandOutput> {
    return deserializeAws_json1_1DescribeMigrationTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
