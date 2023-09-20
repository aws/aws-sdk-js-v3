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
  DeactivateDeviceIdentifierRequest,
  DeactivateDeviceIdentifierResponse,
  DeactivateDeviceIdentifierResponseFilterSensitiveLog,
} from "../models/models_0";
import { PrivateNetworksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PrivateNetworksClient";
import { de_DeactivateDeviceIdentifierCommand, se_DeactivateDeviceIdentifierCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeactivateDeviceIdentifierCommand}.
 */
export interface DeactivateDeviceIdentifierCommandInput extends DeactivateDeviceIdentifierRequest {}
/**
 * @public
 *
 * The output of {@link DeactivateDeviceIdentifierCommand}.
 */
export interface DeactivateDeviceIdentifierCommandOutput extends DeactivateDeviceIdentifierResponse, __MetadataBearer {}

/**
 * @public
 * <p>Deactivates the specified device identifier.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PrivateNetworksClient, DeactivateDeviceIdentifierCommand } from "@aws-sdk/client-privatenetworks"; // ES Modules import
 * // const { PrivateNetworksClient, DeactivateDeviceIdentifierCommand } = require("@aws-sdk/client-privatenetworks"); // CommonJS import
 * const client = new PrivateNetworksClient(config);
 * const input = { // DeactivateDeviceIdentifierRequest
 *   deviceIdentifierArn: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new DeactivateDeviceIdentifierCommand(input);
 * const response = await client.send(command);
 * // { // DeactivateDeviceIdentifierResponse
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
 * // };
 *
 * ```
 *
 * @param DeactivateDeviceIdentifierCommandInput - {@link DeactivateDeviceIdentifierCommandInput}
 * @returns {@link DeactivateDeviceIdentifierCommandOutput}
 * @see {@link DeactivateDeviceIdentifierCommandInput} for command's `input` shape.
 * @see {@link DeactivateDeviceIdentifierCommandOutput} for command's `response` shape.
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
export class DeactivateDeviceIdentifierCommand extends $Command<
  DeactivateDeviceIdentifierCommandInput,
  DeactivateDeviceIdentifierCommandOutput,
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
  constructor(readonly input: DeactivateDeviceIdentifierCommandInput) {
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
  ): Handler<DeactivateDeviceIdentifierCommandInput, DeactivateDeviceIdentifierCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeactivateDeviceIdentifierCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PrivateNetworksClient";
    const commandName = "DeactivateDeviceIdentifierCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: DeactivateDeviceIdentifierResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "E5GNetworkControllerLambda",
        operation: "DeactivateDeviceIdentifier",
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
  private serialize(input: DeactivateDeviceIdentifierCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeactivateDeviceIdentifierCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeactivateDeviceIdentifierCommandOutput> {
    return de_DeactivateDeviceIdentifierCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
