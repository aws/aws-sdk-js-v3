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
  GlobalAcceleratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GlobalAcceleratorClient";
import { DescribeEndpointGroupRequest, DescribeEndpointGroupResponse } from "../models/models_0";
import { de_DescribeEndpointGroupCommand, se_DescribeEndpointGroupCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeEndpointGroupCommand}.
 */
export interface DescribeEndpointGroupCommandInput extends DescribeEndpointGroupRequest {}
/**
 * @public
 *
 * The output of {@link DescribeEndpointGroupCommand}.
 */
export interface DescribeEndpointGroupCommandOutput extends DescribeEndpointGroupResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describe an endpoint group. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, DescribeEndpointGroupCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, DescribeEndpointGroupCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * const client = new GlobalAcceleratorClient(config);
 * const input = { // DescribeEndpointGroupRequest
 *   EndpointGroupArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeEndpointGroupCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEndpointGroupResponse
 * //   EndpointGroup: { // EndpointGroup
 * //     EndpointGroupArn: "STRING_VALUE",
 * //     EndpointGroupRegion: "STRING_VALUE",
 * //     EndpointDescriptions: [ // EndpointDescriptions
 * //       { // EndpointDescription
 * //         EndpointId: "STRING_VALUE",
 * //         Weight: Number("int"),
 * //         HealthState: "INITIAL" || "HEALTHY" || "UNHEALTHY",
 * //         HealthReason: "STRING_VALUE",
 * //         ClientIPPreservationEnabled: true || false,
 * //       },
 * //     ],
 * //     TrafficDialPercentage: Number("float"),
 * //     HealthCheckPort: Number("int"),
 * //     HealthCheckProtocol: "TCP" || "HTTP" || "HTTPS",
 * //     HealthCheckPath: "STRING_VALUE",
 * //     HealthCheckIntervalSeconds: Number("int"),
 * //     ThresholdCount: Number("int"),
 * //     PortOverrides: [ // PortOverrides
 * //       { // PortOverride
 * //         ListenerPort: Number("int"),
 * //         EndpointPort: Number("int"),
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeEndpointGroupCommandInput - {@link DescribeEndpointGroupCommandInput}
 * @returns {@link DescribeEndpointGroupCommandOutput}
 * @see {@link DescribeEndpointGroupCommandInput} for command's `input` shape.
 * @see {@link DescribeEndpointGroupCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
 *
 * @throws {@link EndpointGroupNotFoundException} (client fault)
 *  <p>The endpoint group that you specified doesn't exist.</p>
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>There was an internal error for Global Accelerator.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>An argument that you specified is invalid.</p>
 *
 * @throws {@link GlobalAcceleratorServiceException}
 * <p>Base exception class for all service exceptions from GlobalAccelerator service.</p>
 *
 */
export class DescribeEndpointGroupCommand extends $Command<
  DescribeEndpointGroupCommandInput,
  DescribeEndpointGroupCommandOutput,
  GlobalAcceleratorClientResolvedConfig
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
  constructor(readonly input: DescribeEndpointGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlobalAcceleratorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeEndpointGroupCommandInput, DescribeEndpointGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeEndpointGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlobalAcceleratorClient";
    const commandName = "DescribeEndpointGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "GlobalAccelerator_V20180706",
        operation: "DescribeEndpointGroup",
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
  private serialize(input: DescribeEndpointGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeEndpointGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeEndpointGroupCommandOutput> {
    return de_DescribeEndpointGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
