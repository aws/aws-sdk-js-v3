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
import { UpdateBridgeSourceRequest, UpdateBridgeSourceResponse } from "../models/models_0";
import { de_UpdateBridgeSourceCommand, se_UpdateBridgeSourceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateBridgeSourceCommand}.
 */
export interface UpdateBridgeSourceCommandInput extends UpdateBridgeSourceRequest {}
/**
 * @public
 *
 * The output of {@link UpdateBridgeSourceCommand}.
 */
export interface UpdateBridgeSourceCommandOutput extends UpdateBridgeSourceResponse, __MetadataBearer {}

/**
 * @public
 * Updates an existing bridge source.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, UpdateBridgeSourceCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, UpdateBridgeSourceCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const input = { // UpdateBridgeSourceRequest
 *   BridgeArn: "STRING_VALUE", // required
 *   FlowSource: { // UpdateBridgeFlowSourceRequest
 *     FlowArn: "STRING_VALUE",
 *     FlowVpcInterfaceAttachment: { // VpcInterfaceAttachment
 *       VpcInterfaceName: "STRING_VALUE",
 *     },
 *   },
 *   NetworkSource: { // UpdateBridgeNetworkSourceRequest
 *     MulticastIp: "STRING_VALUE",
 *     NetworkName: "STRING_VALUE",
 *     Port: Number("int"),
 *     Protocol: "zixi-push" || "rtp-fec" || "rtp" || "zixi-pull" || "rist" || "st2110-jpegxs" || "cdi" || "srt-listener" || "srt-caller" || "fujitsu-qos" || "udp",
 *   },
 *   SourceName: "STRING_VALUE", // required
 * };
 * const command = new UpdateBridgeSourceCommand(input);
 * const response = await client.send(command);
 * // { // UpdateBridgeSourceResponse
 * //   BridgeArn: "STRING_VALUE",
 * //   Source: { // BridgeSource
 * //     FlowSource: { // BridgeFlowSource
 * //       FlowArn: "STRING_VALUE", // required
 * //       FlowVpcInterfaceAttachment: { // VpcInterfaceAttachment
 * //         VpcInterfaceName: "STRING_VALUE",
 * //       },
 * //       Name: "STRING_VALUE", // required
 * //       OutputArn: "STRING_VALUE",
 * //     },
 * //     NetworkSource: { // BridgeNetworkSource
 * //       MulticastIp: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //       NetworkName: "STRING_VALUE", // required
 * //       Port: Number("int"), // required
 * //       Protocol: "zixi-push" || "rtp-fec" || "rtp" || "zixi-pull" || "rist" || "st2110-jpegxs" || "cdi" || "srt-listener" || "srt-caller" || "fujitsu-qos" || "udp", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateBridgeSourceCommandInput - {@link UpdateBridgeSourceCommandInput}
 * @returns {@link UpdateBridgeSourceCommandOutput}
 * @see {@link UpdateBridgeSourceCommandInput} for command's `input` shape.
 * @see {@link UpdateBridgeSourceCommandOutput} for command's `response` shape.
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
export class UpdateBridgeSourceCommand extends $Command<
  UpdateBridgeSourceCommandInput,
  UpdateBridgeSourceCommandOutput,
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
  constructor(readonly input: UpdateBridgeSourceCommandInput) {
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
  ): Handler<UpdateBridgeSourceCommandInput, UpdateBridgeSourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateBridgeSourceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaConnectClient";
    const commandName = "UpdateBridgeSourceCommand";
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
  private serialize(input: UpdateBridgeSourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateBridgeSourceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateBridgeSourceCommandOutput> {
    return de_UpdateBridgeSourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
