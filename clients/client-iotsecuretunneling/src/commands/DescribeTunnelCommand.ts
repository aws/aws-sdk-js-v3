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
  IoTSecureTunnelingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoTSecureTunnelingClient";
import { DescribeTunnelRequest, DescribeTunnelResponse } from "../models/models_0";
import { de_DescribeTunnelCommand, se_DescribeTunnelCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeTunnelCommand}.
 */
export interface DescribeTunnelCommandInput extends DescribeTunnelRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTunnelCommand}.
 */
export interface DescribeTunnelCommandOutput extends DescribeTunnelResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about a tunnel identified by the unique tunnel id.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">DescribeTunnel</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSecureTunnelingClient, DescribeTunnelCommand } from "@aws-sdk/client-iotsecuretunneling"; // ES Modules import
 * // const { IoTSecureTunnelingClient, DescribeTunnelCommand } = require("@aws-sdk/client-iotsecuretunneling"); // CommonJS import
 * const client = new IoTSecureTunnelingClient(config);
 * const input = { // DescribeTunnelRequest
 *   tunnelId: "STRING_VALUE", // required
 * };
 * const command = new DescribeTunnelCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTunnelResponse
 * //   tunnel: { // Tunnel
 * //     tunnelId: "STRING_VALUE",
 * //     tunnelArn: "STRING_VALUE",
 * //     status: "OPEN" || "CLOSED",
 * //     sourceConnectionState: { // ConnectionState
 * //       status: "CONNECTED" || "DISCONNECTED",
 * //       lastUpdatedAt: new Date("TIMESTAMP"),
 * //     },
 * //     destinationConnectionState: {
 * //       status: "CONNECTED" || "DISCONNECTED",
 * //       lastUpdatedAt: new Date("TIMESTAMP"),
 * //     },
 * //     description: "STRING_VALUE",
 * //     destinationConfig: { // DestinationConfig
 * //       thingName: "STRING_VALUE",
 * //       services: [ // ServiceList // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     timeoutConfig: { // TimeoutConfig
 * //       maxLifetimeTimeoutMinutes: Number("int"),
 * //     },
 * //     tags: [ // TagList
 * //       { // Tag
 * //         key: "STRING_VALUE", // required
 * //         value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     createdAt: new Date("TIMESTAMP"),
 * //     lastUpdatedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeTunnelCommandInput - {@link DescribeTunnelCommandInput}
 * @returns {@link DescribeTunnelCommandOutput}
 * @see {@link DescribeTunnelCommandInput} for command's `input` shape.
 * @see {@link DescribeTunnelCommandOutput} for command's `response` shape.
 * @see {@link IoTSecureTunnelingClientResolvedConfig | config} for IoTSecureTunnelingClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Thrown when an operation is attempted on a resource that does not exist.</p>
 *
 * @throws {@link IoTSecureTunnelingServiceException}
 * <p>Base exception class for all service exceptions from IoTSecureTunneling service.</p>
 *
 */
export class DescribeTunnelCommand extends $Command<
  DescribeTunnelCommandInput,
  DescribeTunnelCommandOutput,
  IoTSecureTunnelingClientResolvedConfig
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
  constructor(readonly input: DescribeTunnelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTSecureTunnelingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeTunnelCommandInput, DescribeTunnelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeTunnelCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTSecureTunnelingClient";
    const commandName = "DescribeTunnelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "IoTSecuredTunneling",
        operation: "DescribeTunnel",
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
  private serialize(input: DescribeTunnelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeTunnelCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeTunnelCommandOutput> {
    return de_DescribeTunnelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
