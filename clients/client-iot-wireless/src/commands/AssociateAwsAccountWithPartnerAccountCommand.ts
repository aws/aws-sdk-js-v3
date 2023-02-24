// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import {
  AssociateAwsAccountWithPartnerAccountRequest,
  AssociateAwsAccountWithPartnerAccountRequestFilterSensitiveLog,
  AssociateAwsAccountWithPartnerAccountResponse,
  AssociateAwsAccountWithPartnerAccountResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1AssociateAwsAccountWithPartnerAccountCommand,
  serializeAws_restJson1AssociateAwsAccountWithPartnerAccountCommand,
} from "../protocols/Aws_restJson1";

export interface AssociateAwsAccountWithPartnerAccountCommandInput
  extends AssociateAwsAccountWithPartnerAccountRequest {}
export interface AssociateAwsAccountWithPartnerAccountCommandOutput
  extends AssociateAwsAccountWithPartnerAccountResponse,
    __MetadataBearer {}

/**
 * <p>Associates a partner account with your AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, AssociateAwsAccountWithPartnerAccountCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, AssociateAwsAccountWithPartnerAccountCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new AssociateAwsAccountWithPartnerAccountCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateAwsAccountWithPartnerAccountCommandInput} for command's `input` shape.
 * @see {@link AssociateAwsAccountWithPartnerAccountCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 */
export class AssociateAwsAccountWithPartnerAccountCommand extends $Command<
  AssociateAwsAccountWithPartnerAccountCommandInput,
  AssociateAwsAccountWithPartnerAccountCommandOutput,
  IoTWirelessClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateAwsAccountWithPartnerAccountCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "AssociateAwsAccountWithPartnerAccountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateAwsAccountWithPartnerAccountRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AssociateAwsAccountWithPartnerAccountResponseFilterSensitiveLog,
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
