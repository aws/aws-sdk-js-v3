import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { RevokeFlowEntitlementRequest, RevokeFlowEntitlementResponse } from "../models/models_0";
import {
  deserializeAws_restJson1RevokeFlowEntitlementCommand,
  serializeAws_restJson1RevokeFlowEntitlementCommand,
} from "../protocols/Aws_restJson1";
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

export type RevokeFlowEntitlementCommandInput = RevokeFlowEntitlementRequest;
export type RevokeFlowEntitlementCommandOutput = RevokeFlowEntitlementResponse & __MetadataBearer;

/**
 * Revokes an entitlement from a flow. Once an entitlement is revoked, the content becomes unavailable to the subscriber and the associated output is removed.
 */
export class RevokeFlowEntitlementCommand extends $Command<
  RevokeFlowEntitlementCommandInput,
  RevokeFlowEntitlementCommandOutput,
  MediaConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RevokeFlowEntitlementCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RevokeFlowEntitlementCommandInput, RevokeFlowEntitlementCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaConnectClient";
    const commandName = "RevokeFlowEntitlementCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RevokeFlowEntitlementRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RevokeFlowEntitlementResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RevokeFlowEntitlementCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RevokeFlowEntitlementCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RevokeFlowEntitlementCommandOutput> {
    return deserializeAws_restJson1RevokeFlowEntitlementCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
