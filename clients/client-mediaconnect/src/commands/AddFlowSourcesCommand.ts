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
import { AddFlowSourcesRequest, AddFlowSourcesResponse } from "../models/models_0";
import {
  deserializeAws_restJson1AddFlowSourcesCommand,
  serializeAws_restJson1AddFlowSourcesCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link AddFlowSourcesCommand}.
 */
export interface AddFlowSourcesCommandInput extends AddFlowSourcesRequest {}
/**
 * @public
 *
 * The output of {@link AddFlowSourcesCommand}.
 */
export interface AddFlowSourcesCommandOutput extends AddFlowSourcesResponse, __MetadataBearer {}

/**
 * @public
 * Adds Sources to flow
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, AddFlowSourcesCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, AddFlowSourcesCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const input = {
 *   FlowArn: "STRING_VALUE", // required
 *   Sources: [ // required
 *     {
 *       Decryption: {
 *         Algorithm: "aes128" || "aes192" || "aes256",
 *         ConstantInitializationVector: "STRING_VALUE",
 *         DeviceId: "STRING_VALUE",
 *         KeyType: "speke" || "static-key" || "srt-password",
 *         Region: "STRING_VALUE",
 *         ResourceId: "STRING_VALUE",
 *         RoleArn: "STRING_VALUE", // required
 *         SecretArn: "STRING_VALUE",
 *         Url: "STRING_VALUE",
 *       },
 *       Description: "STRING_VALUE",
 *       EntitlementArn: "STRING_VALUE",
 *       IngestPort: Number("int"),
 *       MaxBitrate: Number("int"),
 *       MaxLatency: Number("int"),
 *       MaxSyncBuffer: Number("int"),
 *       MediaStreamSourceConfigurations: [
 *         {
 *           EncodingName: "jxsv" || "raw" || "smpte291" || "pcm", // required
 *           InputConfigurations: [
 *             {
 *               InputPort: Number("int"), // required
 *               Interface: {
 *                 Name: "STRING_VALUE", // required
 *               },
 *             },
 *           ],
 *           MediaStreamName: "STRING_VALUE", // required
 *         },
 *       ],
 *       MinLatency: Number("int"),
 *       Name: "STRING_VALUE",
 *       Protocol: "zixi-push" || "rtp-fec" || "rtp" || "zixi-pull" || "rist" || "st2110-jpegxs" || "cdi" || "srt-listener" || "srt-caller" || "fujitsu-qos",
 *       SenderControlPort: Number("int"),
 *       SenderIpAddress: "STRING_VALUE",
 *       SourceListenerAddress: "STRING_VALUE",
 *       SourceListenerPort: Number("int"),
 *       StreamId: "STRING_VALUE",
 *       VpcInterfaceName: "STRING_VALUE",
 *       WhitelistCidr: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new AddFlowSourcesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param AddFlowSourcesCommandInput - {@link AddFlowSourcesCommandInput}
 * @returns {@link AddFlowSourcesCommandOutput}
 * @see {@link AddFlowSourcesCommandInput} for command's `input` shape.
 * @see {@link AddFlowSourcesCommandOutput} for command's `response` shape.
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
export class AddFlowSourcesCommand extends $Command<
  AddFlowSourcesCommandInput,
  AddFlowSourcesCommandOutput,
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
  constructor(readonly input: AddFlowSourcesCommandInput) {
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
  ): Handler<AddFlowSourcesCommandInput, AddFlowSourcesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AddFlowSourcesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaConnectClient";
    const commandName = "AddFlowSourcesCommand";
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
  private serialize(input: AddFlowSourcesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1AddFlowSourcesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddFlowSourcesCommandOutput> {
    return deserializeAws_restJson1AddFlowSourcesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
