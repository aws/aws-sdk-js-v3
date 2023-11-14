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

import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { CreateBridgeRequest, CreateBridgeResponse } from "../models/models_0";
import { de_CreateBridgeCommand, se_CreateBridgeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateBridgeCommand}.
 */
export interface CreateBridgeCommandInput extends CreateBridgeRequest {}
/**
 * @public
 *
 * The output of {@link CreateBridgeCommand}.
 */
export interface CreateBridgeCommandOutput extends CreateBridgeResponse, __MetadataBearer {}

/**
 * @public
 * Creates a new bridge. The request must include one source.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, CreateBridgeCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, CreateBridgeCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const input = { // CreateBridgeRequest
 *   EgressGatewayBridge: { // AddEgressGatewayBridgeRequest
 *     MaxBitrate: Number("int"), // required
 *   },
 *   IngressGatewayBridge: { // AddIngressGatewayBridgeRequest
 *     MaxBitrate: Number("int"), // required
 *     MaxOutputs: Number("int"), // required
 *   },
 *   Name: "STRING_VALUE", // required
 *   Outputs: [ // __listOfAddBridgeOutputRequest
 *     { // AddBridgeOutputRequest
 *       NetworkOutput: { // AddBridgeNetworkOutputRequest
 *         IpAddress: "STRING_VALUE", // required
 *         Name: "STRING_VALUE", // required
 *         NetworkName: "STRING_VALUE", // required
 *         Port: Number("int"), // required
 *         Protocol: "zixi-push" || "rtp-fec" || "rtp" || "zixi-pull" || "rist" || "st2110-jpegxs" || "cdi" || "srt-listener" || "srt-caller" || "fujitsu-qos" || "udp", // required
 *         Ttl: Number("int"), // required
 *       },
 *     },
 *   ],
 *   PlacementArn: "STRING_VALUE", // required
 *   SourceFailoverConfig: { // FailoverConfig
 *     FailoverMode: "MERGE" || "FAILOVER",
 *     RecoveryWindow: Number("int"),
 *     SourcePriority: { // SourcePriority
 *       PrimarySource: "STRING_VALUE",
 *     },
 *     State: "ENABLED" || "DISABLED",
 *   },
 *   Sources: [ // __listOfAddBridgeSourceRequest // required
 *     { // AddBridgeSourceRequest
 *       FlowSource: { // AddBridgeFlowSourceRequest
 *         FlowArn: "STRING_VALUE", // required
 *         FlowVpcInterfaceAttachment: { // VpcInterfaceAttachment
 *           VpcInterfaceName: "STRING_VALUE",
 *         },
 *         Name: "STRING_VALUE", // required
 *       },
 *       NetworkSource: { // AddBridgeNetworkSourceRequest
 *         MulticastIp: "STRING_VALUE", // required
 *         Name: "STRING_VALUE", // required
 *         NetworkName: "STRING_VALUE", // required
 *         Port: Number("int"), // required
 *         Protocol: "zixi-push" || "rtp-fec" || "rtp" || "zixi-pull" || "rist" || "st2110-jpegxs" || "cdi" || "srt-listener" || "srt-caller" || "fujitsu-qos" || "udp", // required
 *       },
 *     },
 *   ],
 * };
 * const command = new CreateBridgeCommand(input);
 * const response = await client.send(command);
 * // { // CreateBridgeResponse
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
 * @param CreateBridgeCommandInput - {@link CreateBridgeCommandInput}
 * @returns {@link CreateBridgeCommandOutput}
 * @see {@link CreateBridgeCommandInput} for command's `input` shape.
 * @see {@link CreateBridgeCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for MediaConnectClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link ConflictException} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link CreateBridge420Exception} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link ForbiddenException} (client fault)
 *  Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 *
 * @throws {@link InternalServerErrorException} (server fault)
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
export class CreateBridgeCommand extends $Command<
  CreateBridgeCommandInput,
  CreateBridgeCommandOutput,
  MediaConnectClientResolvedConfig
> {
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
  constructor(readonly input: CreateBridgeCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateBridgeCommandInput, CreateBridgeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateBridgeCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaConnectClient";
    const commandName = "CreateBridgeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "MediaConnect",
        operation: "CreateBridge",
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
  private serialize(input: CreateBridgeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateBridgeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateBridgeCommandOutput> {
    return de_CreateBridgeCommand(output, context);
  }
}
