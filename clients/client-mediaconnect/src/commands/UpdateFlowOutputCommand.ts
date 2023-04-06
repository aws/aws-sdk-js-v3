// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { MediaConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConnectClient";
import { UpdateFlowOutputRequest, UpdateFlowOutputResponse } from "../models/models_0";
import { de_UpdateFlowOutputCommand, se_UpdateFlowOutputCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link UpdateFlowOutputCommand}.
 */
export interface UpdateFlowOutputCommandInput extends UpdateFlowOutputRequest {}
/**
 * @public
 *
 * The output of {@link UpdateFlowOutputCommand}.
 */
export interface UpdateFlowOutputCommandOutput extends UpdateFlowOutputResponse, __MetadataBearer {}

/**
 * @public
 * Updates an existing flow output.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, UpdateFlowOutputCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, UpdateFlowOutputCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const input = { // UpdateFlowOutputRequest
 *   CidrAllowList: [ // __listOf__string
 *     "STRING_VALUE",
 *   ],
 *   Description: "STRING_VALUE",
 *   Destination: "STRING_VALUE",
 *   Encryption: { // UpdateEncryption
 *     Algorithm: "aes128" || "aes192" || "aes256",
 *     ConstantInitializationVector: "STRING_VALUE",
 *     DeviceId: "STRING_VALUE",
 *     KeyType: "speke" || "static-key" || "srt-password",
 *     Region: "STRING_VALUE",
 *     ResourceId: "STRING_VALUE",
 *     RoleArn: "STRING_VALUE",
 *     SecretArn: "STRING_VALUE",
 *     Url: "STRING_VALUE",
 *   },
 *   FlowArn: "STRING_VALUE", // required
 *   MaxLatency: Number("int"),
 *   MediaStreamOutputConfigurations: [ // __listOfMediaStreamOutputConfigurationRequest
 *     { // MediaStreamOutputConfigurationRequest
 *       DestinationConfigurations: [ // __listOfDestinationConfigurationRequest
 *         { // DestinationConfigurationRequest
 *           DestinationIp: "STRING_VALUE", // required
 *           DestinationPort: Number("int"), // required
 *           Interface: { // InterfaceRequest
 *             Name: "STRING_VALUE", // required
 *           },
 *         },
 *       ],
 *       EncodingName: "jxsv" || "raw" || "smpte291" || "pcm", // required
 *       EncodingParameters: { // EncodingParametersRequest
 *         CompressionFactor: Number("double"), // required
 *         EncoderProfile: "main" || "high", // required
 *       },
 *       MediaStreamName: "STRING_VALUE", // required
 *     },
 *   ],
 *   MinLatency: Number("int"),
 *   OutputArn: "STRING_VALUE", // required
 *   Port: Number("int"),
 *   Protocol: "zixi-push" || "rtp-fec" || "rtp" || "zixi-pull" || "rist" || "st2110-jpegxs" || "cdi" || "srt-listener" || "srt-caller" || "fujitsu-qos",
 *   RemoteId: "STRING_VALUE",
 *   SenderControlPort: Number("int"),
 *   SenderIpAddress: "STRING_VALUE",
 *   SmoothingLatency: Number("int"),
 *   StreamId: "STRING_VALUE",
 *   VpcInterfaceAttachment: { // VpcInterfaceAttachment
 *     VpcInterfaceName: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateFlowOutputCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateFlowOutputCommandInput - {@link UpdateFlowOutputCommandInput}
 * @returns {@link UpdateFlowOutputCommandOutput}
 * @see {@link UpdateFlowOutputCommandInput} for command's `input` shape.
 * @see {@link UpdateFlowOutputCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for MediaConnectClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
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
 *
 */
export class UpdateFlowOutputCommand extends $Command<
  UpdateFlowOutputCommandInput,
  UpdateFlowOutputCommandOutput,
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
  constructor(readonly input: UpdateFlowOutputCommandInput) {
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
  ): Handler<UpdateFlowOutputCommandInput, UpdateFlowOutputCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateFlowOutputCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaConnectClient";
    const commandName = "UpdateFlowOutputCommand";
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
  private serialize(input: UpdateFlowOutputCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateFlowOutputCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateFlowOutputCommandOutput> {
    return de_UpdateFlowOutputCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
