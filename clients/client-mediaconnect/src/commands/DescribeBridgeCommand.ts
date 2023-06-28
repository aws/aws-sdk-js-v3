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

import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { DescribeBridgeRequest, DescribeBridgeResponse } from "../models/models_0";
import { de_DescribeBridgeCommand, se_DescribeBridgeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeBridgeCommand}.
 */
export interface DescribeBridgeCommandInput extends DescribeBridgeRequest {}
/**
 * @public
 *
 * The output of {@link DescribeBridgeCommand}.
 */
export interface DescribeBridgeCommandOutput extends DescribeBridgeResponse, __MetadataBearer {}

/**
 * @public
 * Displays the details of a bridge.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, DescribeBridgeCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, DescribeBridgeCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const input = { // DescribeBridgeRequest
 *   BridgeArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeBridgeCommand(input);
 * const response = await client.send(command);
 * // { // DescribeBridgeResponse
 * //   Bridge: { // Bridge
 * //     BridgeArn: "STRING_VALUE", // required
 * //     BridgeMessages: [ // __listOfMessageDetail
 * //       { // MessageDetail
 * //         Code: "STRING_VALUE", // required
 * //         Message: "STRING_VALUE", // required
 * //         ResourceName: "STRING_VALUE",
 * //       },
 * //     ],
 * //     BridgeState: "CREATING" || "STANDBY" || "STARTING" || "DEPLOYING" || "ACTIVE" || "STOPPING" || "DELETING" || "DELETED" || "START_FAILED" || "START_PENDING" || "STOP_FAILED" || "UPDATING", // required
 * //     EgressGatewayBridge: { // EgressGatewayBridge
 * //       InstanceId: "STRING_VALUE",
 * //       MaxBitrate: Number("int"), // required
 * //     },
 * //     IngressGatewayBridge: { // IngressGatewayBridge
 * //       InstanceId: "STRING_VALUE",
 * //       MaxBitrate: Number("int"), // required
 * //       MaxOutputs: Number("int"), // required
 * //     },
 * //     Name: "STRING_VALUE", // required
 * //     Outputs: [ // __listOfBridgeOutput
 * //       { // BridgeOutput
 * //         FlowOutput: { // BridgeFlowOutput
 * //           FlowArn: "STRING_VALUE", // required
 * //           FlowSourceArn: "STRING_VALUE", // required
 * //           Name: "STRING_VALUE", // required
 * //         },
 * //         NetworkOutput: { // BridgeNetworkOutput
 * //           IpAddress: "STRING_VALUE", // required
 * //           Name: "STRING_VALUE", // required
 * //           NetworkName: "STRING_VALUE", // required
 * //           Port: Number("int"), // required
 * //           Protocol: "zixi-push" || "rtp-fec" || "rtp" || "zixi-pull" || "rist" || "st2110-jpegxs" || "cdi" || "srt-listener" || "srt-caller" || "fujitsu-qos" || "udp", // required
 * //           Ttl: Number("int"), // required
 * //         },
 * //       },
 * //     ],
 * //     PlacementArn: "STRING_VALUE", // required
 * //     SourceFailoverConfig: { // FailoverConfig
 * //       FailoverMode: "MERGE" || "FAILOVER",
 * //       RecoveryWindow: Number("int"),
 * //       SourcePriority: { // SourcePriority
 * //         PrimarySource: "STRING_VALUE",
 * //       },
 * //       State: "ENABLED" || "DISABLED",
 * //     },
 * //     Sources: [ // __listOfBridgeSource
 * //       { // BridgeSource
 * //         FlowSource: { // BridgeFlowSource
 * //           FlowArn: "STRING_VALUE", // required
 * //           FlowVpcInterfaceAttachment: { // VpcInterfaceAttachment
 * //             VpcInterfaceName: "STRING_VALUE",
 * //           },
 * //           Name: "STRING_VALUE", // required
 * //           OutputArn: "STRING_VALUE",
 * //         },
 * //         NetworkSource: { // BridgeNetworkSource
 * //           MulticastIp: "STRING_VALUE", // required
 * //           Name: "STRING_VALUE", // required
 * //           NetworkName: "STRING_VALUE", // required
 * //           Port: Number("int"), // required
 * //           Protocol: "zixi-push" || "rtp-fec" || "rtp" || "zixi-pull" || "rist" || "st2110-jpegxs" || "cdi" || "srt-listener" || "srt-caller" || "fujitsu-qos" || "udp", // required
 * //         },
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeBridgeCommandInput - {@link DescribeBridgeCommandInput}
 * @returns {@link DescribeBridgeCommandOutput}
 * @see {@link DescribeBridgeCommandInput} for command's `input` shape.
 * @see {@link DescribeBridgeCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for MediaConnectClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link ConflictException} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link ForbiddenException} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link NotFoundException} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link MediaConnectServiceException}
 * <p>Base exception class for all service exceptions from MediaConnect service.</p>
 *
 */
export class DescribeBridgeCommand extends $Command<
  DescribeBridgeCommandInput,
  DescribeBridgeCommandOutput,
  MediaConnectClientResolvedConfig
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
  constructor(readonly input: DescribeBridgeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeBridgeCommandInput, DescribeBridgeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeBridgeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaConnectClient";
    const commandName = "DescribeBridgeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: DescribeBridgeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeBridgeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeBridgeCommandOutput> {
    return de_DescribeBridgeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
