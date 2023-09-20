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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import {
  GetPartnerAccountRequest,
  GetPartnerAccountResponse,
  GetPartnerAccountResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetPartnerAccountCommand, se_GetPartnerAccountCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetPartnerAccountCommand}.
 */
export interface GetPartnerAccountCommandInput extends GetPartnerAccountRequest {}
/**
 * @public
 *
 * The output of {@link GetPartnerAccountCommand}.
 */
export interface GetPartnerAccountCommandOutput extends GetPartnerAccountResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about a partner account. If <code>PartnerAccountId</code> and
 *                 <code>PartnerType</code> are <code>null</code>, returns all partner accounts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, GetPartnerAccountCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, GetPartnerAccountCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const input = { // GetPartnerAccountRequest
 *   PartnerAccountId: "STRING_VALUE", // required
 *   PartnerType: "Sidewalk", // required
 * };
 * const command = new GetPartnerAccountCommand(input);
 * const response = await client.send(command);
 * // { // GetPartnerAccountResponse
 * //   Sidewalk: { // SidewalkAccountInfoWithFingerprint
 * //     AmazonId: "STRING_VALUE",
 * //     Fingerprint: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //   },
 * //   AccountLinked: true || false,
 * // };
 *
 * ```
 *
 * @param GetPartnerAccountCommandInput - {@link GetPartnerAccountCommandInput}
 * @returns {@link GetPartnerAccountCommandOutput}
 * @see {@link GetPartnerAccountCommandInput} for command's `input` shape.
 * @see {@link GetPartnerAccountCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
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
export class GetPartnerAccountCommand extends $Command<
  GetPartnerAccountCommandInput,
  GetPartnerAccountCommandOutput,
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
  constructor(readonly input: GetPartnerAccountCommandInput) {
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
  ): Handler<GetPartnerAccountCommandInput, GetPartnerAccountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetPartnerAccountCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "GetPartnerAccountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetPartnerAccountResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "iotwireless",
        operation: "GetPartnerAccount",
      },
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
  private serialize(input: GetPartnerAccountCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetPartnerAccountCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetPartnerAccountCommandOutput> {
    return de_GetPartnerAccountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
