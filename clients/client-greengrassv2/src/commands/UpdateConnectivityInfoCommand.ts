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

import { GreengrassV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassV2Client";
import { UpdateConnectivityInfoRequest, UpdateConnectivityInfoResponse } from "../models/models_0";
import { de_UpdateConnectivityInfoCommand, se_UpdateConnectivityInfoCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateConnectivityInfoCommand}.
 */
export interface UpdateConnectivityInfoCommandInput extends UpdateConnectivityInfoRequest {}
/**
 * @public
 *
 * The output of {@link UpdateConnectivityInfoCommand}.
 */
export interface UpdateConnectivityInfoCommandOutput extends UpdateConnectivityInfoResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates connectivity information for a Greengrass core device.</p>
 *          <p>Connectivity information includes endpoints and ports where client devices
 *       can connect to an MQTT broker on the core device. When a client device
 *       calls the <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-discover-api.html">IoT Greengrass discovery API</a>,
 *       IoT Greengrass returns connectivity information for all of the core devices where the client device can
 *       connect. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/connect-client-devices.html">Connect client devices to
 *         core devices</a> in the <i>IoT Greengrass Version 2 Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassV2Client, UpdateConnectivityInfoCommand } from "@aws-sdk/client-greengrassv2"; // ES Modules import
 * // const { GreengrassV2Client, UpdateConnectivityInfoCommand } = require("@aws-sdk/client-greengrassv2"); // CommonJS import
 * const client = new GreengrassV2Client(config);
 * const input = { // UpdateConnectivityInfoRequest
 *   thingName: "STRING_VALUE", // required
 *   connectivityInfo: [ // connectivityInfoList // required
 *     { // ConnectivityInfo
 *       id: "STRING_VALUE",
 *       hostAddress: "STRING_VALUE",
 *       portNumber: Number("int"),
 *       metadata: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new UpdateConnectivityInfoCommand(input);
 * const response = await client.send(command);
 * // { // UpdateConnectivityInfoResponse
 * //   version: "STRING_VALUE",
 * //   message: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateConnectivityInfoCommandInput - {@link UpdateConnectivityInfoCommandInput}
 * @returns {@link UpdateConnectivityInfoCommandOutput}
 * @see {@link UpdateConnectivityInfoCommandInput} for command's `input` shape.
 * @see {@link UpdateConnectivityInfoCommandOutput} for command's `response` shape.
 * @see {@link GreengrassV2ClientResolvedConfig | config} for GreengrassV2Client's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>IoT Greengrass can't process your request right now. Try again later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *       unsupported characters.</p>
 *
 * @throws {@link GreengrassV2ServiceException}
 * <p>Base exception class for all service exceptions from GreengrassV2 service.</p>
 *
 */
export class UpdateConnectivityInfoCommand extends $Command<
  UpdateConnectivityInfoCommandInput,
  UpdateConnectivityInfoCommandOutput,
  GreengrassV2ClientResolvedConfig
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
  constructor(readonly input: UpdateConnectivityInfoCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateConnectivityInfoCommandInput, UpdateConnectivityInfoCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateConnectivityInfoCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassV2Client";
    const commandName = "UpdateConnectivityInfoCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "GreengrassV2",
        operation: "UpdateConnectivityInfo",
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
  private serialize(input: UpdateConnectivityInfoCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateConnectivityInfoCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateConnectivityInfoCommandOutput> {
    return de_UpdateConnectivityInfoCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
