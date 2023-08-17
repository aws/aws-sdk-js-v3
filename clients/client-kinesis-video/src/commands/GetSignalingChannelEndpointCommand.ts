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

import { KinesisVideoClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisVideoClient";
import { GetSignalingChannelEndpointInput, GetSignalingChannelEndpointOutput } from "../models/models_0";
import {
  de_GetSignalingChannelEndpointCommand,
  se_GetSignalingChannelEndpointCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetSignalingChannelEndpointCommand}.
 */
export interface GetSignalingChannelEndpointCommandInput extends GetSignalingChannelEndpointInput {}
/**
 * @public
 *
 * The output of {@link GetSignalingChannelEndpointCommand}.
 */
export interface GetSignalingChannelEndpointCommandOutput extends GetSignalingChannelEndpointOutput, __MetadataBearer {}

/**
 * @public
 * <p>Provides an endpoint for the specified signaling channel to send and receive messages.
 *             This API uses the <code>SingleMasterChannelEndpointConfiguration</code> input parameter,
 *             which consists of the <code>Protocols</code> and <code>Role</code> properties.</p>
 *          <p>
 *             <code>Protocols</code> is used to determine the communication mechanism. For example,
 *             if you specify <code>WSS</code> as the protocol, this API produces a secure websocket
 *             endpoint. If you specify <code>HTTPS</code> as the protocol, this API generates an HTTPS
 *             endpoint. </p>
 *          <p>
 *             <code>Role</code> determines the messaging permissions. A <code>MASTER</code> role
 *             results in this API generating an endpoint that a client can use to communicate with any
 *             of the viewers on the channel. A <code>VIEWER</code> role results in this API generating
 *             an endpoint that a client can use to communicate only with a <code>MASTER</code>.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisVideoClient, GetSignalingChannelEndpointCommand } from "@aws-sdk/client-kinesis-video"; // ES Modules import
 * // const { KinesisVideoClient, GetSignalingChannelEndpointCommand } = require("@aws-sdk/client-kinesis-video"); // CommonJS import
 * const client = new KinesisVideoClient(config);
 * const input = { // GetSignalingChannelEndpointInput
 *   ChannelARN: "STRING_VALUE", // required
 *   SingleMasterChannelEndpointConfiguration: { // SingleMasterChannelEndpointConfiguration
 *     Protocols: [ // ListOfProtocols
 *       "WSS" || "HTTPS" || "WEBRTC",
 *     ],
 *     Role: "MASTER" || "VIEWER",
 *   },
 * };
 * const command = new GetSignalingChannelEndpointCommand(input);
 * const response = await client.send(command);
 * // { // GetSignalingChannelEndpointOutput
 * //   ResourceEndpointList: [ // ResourceEndpointList
 * //     { // ResourceEndpointListItem
 * //       Protocol: "WSS" || "HTTPS" || "WEBRTC",
 * //       ResourceEndpoint: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetSignalingChannelEndpointCommandInput - {@link GetSignalingChannelEndpointCommandInput}
 * @returns {@link GetSignalingChannelEndpointCommandOutput}
 * @see {@link GetSignalingChannelEndpointCommandInput} for command's `input` shape.
 * @see {@link GetSignalingChannelEndpointCommandOutput} for command's `response` shape.
 * @see {@link KinesisVideoClientResolvedConfig | config} for KinesisVideoClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have required permissions to perform this operation.</p>
 *
 * @throws {@link ClientLimitExceededException} (client fault)
 *  <p>Kinesis Video Streams has throttled the request because you have exceeded the limit of
 *             allowed client calls. Try making the call later.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>The value for this input parameter is invalid.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>When the input <code>StreamARN</code> or <code>ChannelARN</code>
 *             in <code>CLOUD_STORAGE_MODE</code> is already mapped to a different
 *             Kinesis Video Stream resource, or if the provided input <code>StreamARN</code>
 *             or <code>ChannelARN</code> is not in Active status, try one of the following : </p>
 *          <ol>
 *             <li>
 *                <p>The <code>DescribeMediaStorageConfiguration</code> API to determine what the stream given channel is mapped to.
 *             </p>
 *             </li>
 *             <li>
 *                <p>The <code>DescribeMappedResourceConfiguration</code> API to determine the channel that the given stream is mapped to.
 *             </p>
 *             </li>
 *             <li>
 *                <p>The <code>DescribeStream</code> or <code>DescribeSignalingChannel</code> API to determine the status of the resource.
 *             </p>
 *             </li>
 *          </ol>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Amazon Kinesis Video Streams can't find the stream that you specified.</p>
 *
 * @throws {@link KinesisVideoServiceException}
 * <p>Base exception class for all service exceptions from KinesisVideo service.</p>
 *
 */
export class GetSignalingChannelEndpointCommand extends $Command<
  GetSignalingChannelEndpointCommandInput,
  GetSignalingChannelEndpointCommandOutput,
  KinesisVideoClientResolvedConfig
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
  constructor(readonly input: GetSignalingChannelEndpointCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisVideoClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSignalingChannelEndpointCommandInput, GetSignalingChannelEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSignalingChannelEndpointCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisVideoClient";
    const commandName = "GetSignalingChannelEndpointCommand";
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
  private serialize(input: GetSignalingChannelEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetSignalingChannelEndpointCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetSignalingChannelEndpointCommandOutput> {
    return de_GetSignalingChannelEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
