import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import {
  AssociateAwsAccountWithPartnerAccountRequest,
  AssociateAwsAccountWithPartnerAccountResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1AssociateAwsAccountWithPartnerAccountCommand,
  serializeAws_restJson1AssociateAwsAccountWithPartnerAccountCommand,
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

export type AssociateAwsAccountWithPartnerAccountCommandInput = AssociateAwsAccountWithPartnerAccountRequest;
export type AssociateAwsAccountWithPartnerAccountCommandOutput = AssociateAwsAccountWithPartnerAccountResponse &
  __MetadataBearer;

/**
 * <p>Associates a partner account with your AWS account.</p>
 */
export class AssociateAwsAccountWithPartnerAccountCommand extends $Command<
  AssociateAwsAccountWithPartnerAccountCommandInput,
  AssociateAwsAccountWithPartnerAccountCommandOutput,
  IoTWirelessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateAwsAccountWithPartnerAccountCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTWirelessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateAwsAccountWithPartnerAccountCommandInput, AssociateAwsAccountWithPartnerAccountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "AssociateAwsAccountWithPartnerAccountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateAwsAccountWithPartnerAccountRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateAwsAccountWithPartnerAccountResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AssociateAwsAccountWithPartnerAccountCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1AssociateAwsAccountWithPartnerAccountCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateAwsAccountWithPartnerAccountCommandOutput> {
    return deserializeAws_restJson1AssociateAwsAccountWithPartnerAccountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
