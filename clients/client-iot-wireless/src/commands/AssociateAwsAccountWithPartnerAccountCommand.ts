// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import {
  AssociateAwsAccountWithPartnerAccountRequest,
  AssociateAwsAccountWithPartnerAccountRequestFilterSensitiveLog,
  AssociateAwsAccountWithPartnerAccountResponse,
  AssociateAwsAccountWithPartnerAccountResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_AssociateAwsAccountWithPartnerAccountCommand,
  se_AssociateAwsAccountWithPartnerAccountCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AssociateAwsAccountWithPartnerAccountCommand}.
 */
export interface AssociateAwsAccountWithPartnerAccountCommandInput
  extends AssociateAwsAccountWithPartnerAccountRequest {}
/**
 * @public
 *
 * The output of {@link AssociateAwsAccountWithPartnerAccountCommand}.
 */
export interface AssociateAwsAccountWithPartnerAccountCommandOutput
  extends AssociateAwsAccountWithPartnerAccountResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Associates a partner account with your AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, AssociateAwsAccountWithPartnerAccountCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, AssociateAwsAccountWithPartnerAccountCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const input = { // AssociateAwsAccountWithPartnerAccountRequest
 *   Sidewalk: { // SidewalkAccountInfo
 *     AmazonId: "STRING_VALUE",
 *     AppServerPrivateKey: "STRING_VALUE",
 *   },
 *   ClientRequestToken: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new AssociateAwsAccountWithPartnerAccountCommand(input);
 * const response = await client.send(command);
 * // { // AssociateAwsAccountWithPartnerAccountResponse
 * //   Sidewalk: { // SidewalkAccountInfo
 * //     AmazonId: "STRING_VALUE",
 * //     AppServerPrivateKey: "STRING_VALUE",
 * //   },
 * //   Arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AssociateAwsAccountWithPartnerAccountCommandInput - {@link AssociateAwsAccountWithPartnerAccountCommandInput}
 * @returns {@link AssociateAwsAccountWithPartnerAccountCommandOutput}
 * @see {@link AssociateAwsAccountWithPartnerAccountCommandInput} for command's `input` shape.
 * @see {@link AssociateAwsAccountWithPartnerAccountCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have permission to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Adding, updating, or deleting the resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing a request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because it exceeded the allowed API request rate.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input did not meet the specified constraints.</p>
 *
 * @throws {@link IoTWirelessServiceException}
 * <p>Base exception class for all service exceptions from IoTWireless service.</p>
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

  /**
   * @public
   */
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

  /**
   * @internal
   */
  private serialize(
    input: AssociateAwsAccountWithPartnerAccountCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_AssociateAwsAccountWithPartnerAccountCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateAwsAccountWithPartnerAccountCommandOutput> {
    return de_AssociateAwsAccountWithPartnerAccountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
