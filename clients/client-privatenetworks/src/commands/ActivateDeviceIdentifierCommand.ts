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

import {
  ActivateDeviceIdentifierRequest,
  ActivateDeviceIdentifierResponse,
  ActivateDeviceIdentifierResponseFilterSensitiveLog,
} from "../models/models_0";
import { PrivateNetworksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PrivateNetworksClient";
import { de_ActivateDeviceIdentifierCommand, se_ActivateDeviceIdentifierCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ActivateDeviceIdentifierCommand}.
 */
export interface ActivateDeviceIdentifierCommandInput extends ActivateDeviceIdentifierRequest {}
/**
 * @public
 *
 * The output of {@link ActivateDeviceIdentifierCommand}.
 */
export interface ActivateDeviceIdentifierCommandOutput extends ActivateDeviceIdentifierResponse, __MetadataBearer {}

/**
 * @public
 * <p>Activates the specified device identifier.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PrivateNetworksClient, ActivateDeviceIdentifierCommand } from "@aws-sdk/client-privatenetworks"; // ES Modules import
 * // const { PrivateNetworksClient, ActivateDeviceIdentifierCommand } = require("@aws-sdk/client-privatenetworks"); // CommonJS import
 * const client = new PrivateNetworksClient(config);
 * const input = { // ActivateDeviceIdentifierRequest
 *   deviceIdentifierArn: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new ActivateDeviceIdentifierCommand(input);
 * const response = await client.send(command);
 * // { // ActivateDeviceIdentifierResponse
 * //   deviceIdentifier: { // DeviceIdentifier
 * //     deviceIdentifierArn: "STRING_VALUE",
 * //     trafficGroupArn: "STRING_VALUE",
 * //     networkArn: "STRING_VALUE",
 * //     imsi: "STRING_VALUE",
 * //     iccid: "STRING_VALUE",
 * //     vendor: "STRING_VALUE",
 * //     status: "STRING_VALUE",
 * //     orderArn: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //   },
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ActivateDeviceIdentifierCommandInput - {@link ActivateDeviceIdentifierCommandInput}
 * @returns {@link ActivateDeviceIdentifierCommandOutput}
 * @see {@link ActivateDeviceIdentifierCommandInput} for command's `input` shape.
 * @see {@link ActivateDeviceIdentifierCommandOutput} for command's `response` shape.
 * @see {@link PrivateNetworksClientResolvedConfig | config} for PrivateNetworksClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Information about an internal error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed validation.</p>
 *
 * @throws {@link PrivateNetworksServiceException}
 * <p>Base exception class for all service exceptions from PrivateNetworks service.</p>
 *
 */
export class ActivateDeviceIdentifierCommand extends $Command<
  ActivateDeviceIdentifierCommandInput,
  ActivateDeviceIdentifierCommandOutput,
  PrivateNetworksClientResolvedConfig
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
  constructor(readonly input: ActivateDeviceIdentifierCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PrivateNetworksClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ActivateDeviceIdentifierCommandInput, ActivateDeviceIdentifierCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ActivateDeviceIdentifierCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PrivateNetworksClient";
    const commandName = "ActivateDeviceIdentifierCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: ActivateDeviceIdentifierResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "E5GNetworkControllerLambda",
        operation: "ActivateDeviceIdentifier",
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
  private serialize(input: ActivateDeviceIdentifierCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ActivateDeviceIdentifierCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ActivateDeviceIdentifierCommandOutput> {
    return de_ActivateDeviceIdentifierCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
