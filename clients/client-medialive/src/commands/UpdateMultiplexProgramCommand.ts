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

import { MediaLiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaLiveClient";
import { UpdateMultiplexProgramRequest, UpdateMultiplexProgramResponse } from "../models/models_2";
import { de_UpdateMultiplexProgramCommand, se_UpdateMultiplexProgramCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateMultiplexProgramCommand}.
 */
export interface UpdateMultiplexProgramCommandInput extends UpdateMultiplexProgramRequest {}
/**
 * @public
 *
 * The output of {@link UpdateMultiplexProgramCommand}.
 */
export interface UpdateMultiplexProgramCommandOutput extends UpdateMultiplexProgramResponse, __MetadataBearer {}

/**
 * @public
 * Update a program in a multiplex.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaLiveClient, UpdateMultiplexProgramCommand } from "@aws-sdk/client-medialive"; // ES Modules import
 * // const { MediaLiveClient, UpdateMultiplexProgramCommand } = require("@aws-sdk/client-medialive"); // CommonJS import
 * const client = new MediaLiveClient(config);
 * const input = { // UpdateMultiplexProgramRequest
 *   MultiplexId: "STRING_VALUE", // required
 *   MultiplexProgramSettings: { // MultiplexProgramSettings
 *     PreferredChannelPipeline: "CURRENTLY_ACTIVE" || "PIPELINE_0" || "PIPELINE_1",
 *     ProgramNumber: Number("int"), // required
 *     ServiceDescriptor: { // MultiplexProgramServiceDescriptor
 *       ProviderName: "STRING_VALUE", // required
 *       ServiceName: "STRING_VALUE", // required
 *     },
 *     VideoSettings: { // MultiplexVideoSettings
 *       ConstantBitrate: Number("int"),
 *       StatmuxSettings: { // MultiplexStatmuxVideoSettings
 *         MaximumBitrate: Number("int"),
 *         MinimumBitrate: Number("int"),
 *         Priority: Number("int"),
 *       },
 *     },
 *   },
 *   ProgramName: "STRING_VALUE", // required
 * };
 * const command = new UpdateMultiplexProgramCommand(input);
 * const response = await client.send(command);
 * // { // UpdateMultiplexProgramResponse
 * //   MultiplexProgram: { // MultiplexProgram
 * //     ChannelId: "STRING_VALUE",
 * //     MultiplexProgramSettings: { // MultiplexProgramSettings
 * //       PreferredChannelPipeline: "CURRENTLY_ACTIVE" || "PIPELINE_0" || "PIPELINE_1",
 * //       ProgramNumber: Number("int"), // required
 * //       ServiceDescriptor: { // MultiplexProgramServiceDescriptor
 * //         ProviderName: "STRING_VALUE", // required
 * //         ServiceName: "STRING_VALUE", // required
 * //       },
 * //       VideoSettings: { // MultiplexVideoSettings
 * //         ConstantBitrate: Number("int"),
 * //         StatmuxSettings: { // MultiplexStatmuxVideoSettings
 * //           MaximumBitrate: Number("int"),
 * //           MinimumBitrate: Number("int"),
 * //           Priority: Number("int"),
 * //         },
 * //       },
 * //     },
 * //     PacketIdentifiersMap: { // MultiplexProgramPacketIdentifiersMap
 * //       AudioPids: [ // __listOf__integer
 * //         Number("int"),
 * //       ],
 * //       DvbSubPids: [
 * //         Number("int"),
 * //       ],
 * //       DvbTeletextPid: Number("int"),
 * //       EtvPlatformPid: Number("int"),
 * //       EtvSignalPid: Number("int"),
 * //       KlvDataPids: [
 * //         Number("int"),
 * //       ],
 * //       PcrPid: Number("int"),
 * //       PmtPid: Number("int"),
 * //       PrivateMetadataPid: Number("int"),
 * //       Scte27Pids: [
 * //         Number("int"),
 * //       ],
 * //       Scte35Pid: Number("int"),
 * //       TimedMetadataPid: Number("int"),
 * //       VideoPid: Number("int"),
 * //     },
 * //     PipelineDetails: [ // __listOfMultiplexProgramPipelineDetail
 * //       { // MultiplexProgramPipelineDetail
 * //         ActiveChannelPipeline: "STRING_VALUE",
 * //         PipelineId: "STRING_VALUE",
 * //       },
 * //     ],
 * //     ProgramName: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateMultiplexProgramCommandInput - {@link UpdateMultiplexProgramCommandInput}
 * @returns {@link UpdateMultiplexProgramCommandOutput}
 * @see {@link UpdateMultiplexProgramCommandInput} for command's `input` shape.
 * @see {@link UpdateMultiplexProgramCommandOutput} for command's `response` shape.
 * @see {@link MediaLiveClientResolvedConfig | config} for MediaLiveClient's `config` shape.
 *
 * @throws {@link BadGatewayException} (server fault)
 *  Placeholder documentation for BadGatewayException
 *
 * @throws {@link BadRequestException} (client fault)
 *  Placeholder documentation for BadRequestException
 *
 * @throws {@link ConflictException} (client fault)
 *  Placeholder documentation for ConflictException
 *
 * @throws {@link ForbiddenException} (client fault)
 *  Placeholder documentation for ForbiddenException
 *
 * @throws {@link GatewayTimeoutException} (server fault)
 *  Placeholder documentation for GatewayTimeoutException
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  Placeholder documentation for InternalServerErrorException
 *
 * @throws {@link NotFoundException} (client fault)
 *  Placeholder documentation for NotFoundException
 *
 * @throws {@link UnprocessableEntityException} (client fault)
 *  Placeholder documentation for UnprocessableEntityException
 *
 * @throws {@link MediaLiveServiceException}
 * <p>Base exception class for all service exceptions from MediaLive service.</p>
 *
 */
export class UpdateMultiplexProgramCommand extends $Command<
  UpdateMultiplexProgramCommandInput,
  UpdateMultiplexProgramCommandOutput,
  MediaLiveClientResolvedConfig
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
  constructor(readonly input: UpdateMultiplexProgramCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaLiveClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateMultiplexProgramCommandInput, UpdateMultiplexProgramCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateMultiplexProgramCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaLiveClient";
    const commandName = "UpdateMultiplexProgramCommand";
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
  private serialize(input: UpdateMultiplexProgramCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateMultiplexProgramCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateMultiplexProgramCommandOutput> {
    return de_UpdateMultiplexProgramCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
