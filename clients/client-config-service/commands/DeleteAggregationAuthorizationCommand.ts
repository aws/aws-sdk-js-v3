import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DeleteAggregationAuthorizationRequest } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteAggregationAuthorizationCommand,
  serializeAws_json1_1DeleteAggregationAuthorizationCommand,
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

export type DeleteAggregationAuthorizationCommandInput = DeleteAggregationAuthorizationRequest;
export type DeleteAggregationAuthorizationCommandOutput = __MetadataBearer;

/**
 * <p>Deletes the authorization granted to the specified
 * 			configuration aggregator account in a specified region.</p>
 */
export class DeleteAggregationAuthorizationCommand extends $Command<
  DeleteAggregationAuthorizationCommandInput,
  DeleteAggregationAuthorizationCommandOutput,
  ConfigServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteAggregationAuthorizationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConfigServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteAggregationAuthorizationCommandInput, DeleteAggregationAuthorizationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConfigServiceClient";
    const commandName = "DeleteAggregationAuthorizationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteAggregationAuthorizationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteAggregationAuthorizationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteAggregationAuthorizationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteAggregationAuthorizationCommandOutput> {
    return deserializeAws_json1_1DeleteAggregationAuthorizationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
