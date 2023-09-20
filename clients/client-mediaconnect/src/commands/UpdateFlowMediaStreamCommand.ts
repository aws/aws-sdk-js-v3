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
import { UpdateFlowMediaStreamRequest, UpdateFlowMediaStreamResponse } from "../models/models_0";
import { de_UpdateFlowMediaStreamCommand, se_UpdateFlowMediaStreamCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateFlowMediaStreamCommand}.
 */
export interface UpdateFlowMediaStreamCommandInput extends UpdateFlowMediaStreamRequest {}
/**
 * @public
 *
 * The output of {@link UpdateFlowMediaStreamCommand}.
 */
export interface UpdateFlowMediaStreamCommandOutput extends UpdateFlowMediaStreamResponse, __MetadataBearer {}

/**
 * @public
 * Updates an existing media stream.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, UpdateFlowMediaStreamCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, UpdateFlowMediaStreamCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const input = { // UpdateFlowMediaStreamRequest
 *   Attributes: { // MediaStreamAttributesRequest
 *     Fmtp: { // FmtpRequest
 *       ChannelOrder: "STRING_VALUE",
 *       Colorimetry: "BT601" || "BT709" || "BT2020" || "BT2100" || "ST2065-1" || "ST2065-3" || "XYZ",
 *       ExactFramerate: "STRING_VALUE",
 *       Par: "STRING_VALUE",
 *       Range: "NARROW" || "FULL" || "FULLPROTECT",
 *       ScanMode: "progressive" || "interlace" || "progressive-segmented-frame",
 *       Tcs: "SDR" || "PQ" || "HLG" || "LINEAR" || "BT2100LINPQ" || "BT2100LINHLG" || "ST2065-1" || "ST428-1" || "DENSITY",
 *     },
 *     Lang: "STRING_VALUE",
 *   },
 *   ClockRate: Number("int"),
 *   Description: "STRING_VALUE",
 *   FlowArn: "STRING_VALUE", // required
 *   MediaStreamName: "STRING_VALUE", // required
 *   MediaStreamType: "video" || "audio" || "ancillary-data",
 *   VideoFormat: "STRING_VALUE",
 * };
 * const command = new UpdateFlowMediaStreamCommand(input);
 * const response = await client.send(command);
 * // { // UpdateFlowMediaStreamResponse
 * //   FlowArn: "STRING_VALUE",
 * //   MediaStream: { // MediaStream
 * //     Attributes: { // MediaStreamAttributes
 * //       Fmtp: { // Fmtp
 * //         ChannelOrder: "STRING_VALUE",
 * //         Colorimetry: "BT601" || "BT709" || "BT2020" || "BT2100" || "ST2065-1" || "ST2065-3" || "XYZ",
 * //         ExactFramerate: "STRING_VALUE",
 * //         Par: "STRING_VALUE",
 * //         Range: "NARROW" || "FULL" || "FULLPROTECT",
 * //         ScanMode: "progressive" || "interlace" || "progressive-segmented-frame",
 * //         Tcs: "SDR" || "PQ" || "HLG" || "LINEAR" || "BT2100LINPQ" || "BT2100LINHLG" || "ST2065-1" || "ST428-1" || "DENSITY",
 * //       },
 * //       Lang: "STRING_VALUE",
 * //     },
 * //     ClockRate: Number("int"),
 * //     Description: "STRING_VALUE",
 * //     Fmt: Number("int"), // required
 * //     MediaStreamId: Number("int"), // required
 * //     MediaStreamName: "STRING_VALUE", // required
 * //     MediaStreamType: "video" || "audio" || "ancillary-data", // required
 * //     VideoFormat: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateFlowMediaStreamCommandInput - {@link UpdateFlowMediaStreamCommandInput}
 * @returns {@link UpdateFlowMediaStreamCommandOutput}
 * @see {@link UpdateFlowMediaStreamCommandInput} for command's `input` shape.
 * @see {@link UpdateFlowMediaStreamCommandOutput} for command's `response` shape.
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
 * @throws {@link MediaConnectServiceException}
 * <p>Base exception class for all service exceptions from MediaConnect service.</p>
 *
 */
export class UpdateFlowMediaStreamCommand extends $Command<
  UpdateFlowMediaStreamCommandInput,
  UpdateFlowMediaStreamCommandOutput,
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
  constructor(readonly input: UpdateFlowMediaStreamCommandInput) {
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
  ): Handler<UpdateFlowMediaStreamCommandInput, UpdateFlowMediaStreamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateFlowMediaStreamCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaConnectClient";
    const commandName = "UpdateFlowMediaStreamCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "MediaConnect",
        operation: "UpdateFlowMediaStream",
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
  private serialize(input: UpdateFlowMediaStreamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateFlowMediaStreamCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateFlowMediaStreamCommandOutput> {
    return de_UpdateFlowMediaStreamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
