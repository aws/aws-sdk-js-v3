import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { DeleteGatewayGroupRequest, DeleteGatewayGroupResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteGatewayGroupCommand,
  serializeAws_json1_1DeleteGatewayGroupCommand,
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

export type DeleteGatewayGroupCommandInput = DeleteGatewayGroupRequest;
export type DeleteGatewayGroupCommandOutput = DeleteGatewayGroupResponse & __MetadataBearer;

/**
 * <p>Deletes a gateway group.</p>
 */
export class DeleteGatewayGroupCommand extends $Command<
  DeleteGatewayGroupCommandInput,
  DeleteGatewayGroupCommandOutput,
  AlexaForBusinessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteGatewayGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteGatewayGroupCommandInput, DeleteGatewayGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "DeleteGatewayGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteGatewayGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteGatewayGroupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteGatewayGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteGatewayGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteGatewayGroupCommandOutput> {
    return deserializeAws_json1_1DeleteGatewayGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
