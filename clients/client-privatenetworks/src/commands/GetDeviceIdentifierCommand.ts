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
  GetDeviceIdentifierRequest,
  GetDeviceIdentifierResponse,
  GetDeviceIdentifierResponseFilterSensitiveLog,
} from "../models/models_0";
import { PrivateNetworksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PrivateNetworksClient";
import { de_GetDeviceIdentifierCommand, se_GetDeviceIdentifierCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetDeviceIdentifierCommand}.
 */
export interface GetDeviceIdentifierCommandInput extends GetDeviceIdentifierRequest {}
/**
 * @public
 *
 * The output of {@link GetDeviceIdentifierCommand}.
 */
export interface GetDeviceIdentifierCommandOutput extends GetDeviceIdentifierResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets the specified device identifier.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PrivateNetworksClient, GetDeviceIdentifierCommand } from "@aws-sdk/client-privatenetworks"; // ES Modules import
 * // const { PrivateNetworksClient, GetDeviceIdentifierCommand } = require("@aws-sdk/client-privatenetworks"); // CommonJS import
 * const client = new PrivateNetworksClient(config);
 * const input = { // GetDeviceIdentifierRequest
 *   deviceIdentifierArn: "STRING_VALUE", // required
 * };
 * const command = new GetDeviceIdentifierCommand(input);
 * const response = await client.send(command);
 * // { // GetDeviceIdentifierResponse
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
 * @param GetDeviceIdentifierCommandInput - {@link GetDeviceIdentifierCommandInput}
 * @returns {@link GetDeviceIdentifierCommandOutput}
 * @see {@link GetDeviceIdentifierCommandInput} for command's `input` shape.
 * @see {@link GetDeviceIdentifierCommandOutput} for command's `response` shape.
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
export class GetDeviceIdentifierCommand extends $Command<
  GetDeviceIdentifierCommandInput,
  GetDeviceIdentifierCommandOutput,
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
  constructor(readonly input: GetDeviceIdentifierCommandInput) {
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
  ): Handler<GetDeviceIdentifierCommandInput, GetDeviceIdentifierCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDeviceIdentifierCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PrivateNetworksClient";
    const commandName = "GetDeviceIdentifierCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetDeviceIdentifierResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "E5GNetworkControllerLambda",
        operation: "GetDeviceIdentifier",
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
  private serialize(input: GetDeviceIdentifierCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetDeviceIdentifierCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDeviceIdentifierCommandOutput> {
    return de_GetDeviceIdentifierCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
