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
import { AddFlowMediaStreamsRequest, AddFlowMediaStreamsResponse } from "../models/models_0";
import { de_AddFlowMediaStreamsCommand, se_AddFlowMediaStreamsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AddFlowMediaStreamsCommand}.
 */
export interface AddFlowMediaStreamsCommandInput extends AddFlowMediaStreamsRequest {}
/**
 * @public
 *
 * The output of {@link AddFlowMediaStreamsCommand}.
 */
export interface AddFlowMediaStreamsCommandOutput extends AddFlowMediaStreamsResponse, __MetadataBearer {}

/**
 * @public
 * Adds media streams to an existing flow. After you add a media stream to a flow, you can associate it with a source and/or an output that uses the ST 2110 JPEG XS or CDI protocol.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, AddFlowMediaStreamsCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, AddFlowMediaStreamsCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const input = { // AddFlowMediaStreamsRequest
 *   FlowArn: "STRING_VALUE", // required
 *   MediaStreams: [ // __listOfAddMediaStreamRequest // required
 *     { // AddMediaStreamRequest
 *       Attributes: { // MediaStreamAttributesRequest
 *         Fmtp: { // FmtpRequest
 *           ChannelOrder: "STRING_VALUE",
 *           Colorimetry: "BT601" || "BT709" || "BT2020" || "BT2100" || "ST2065-1" || "ST2065-3" || "XYZ",
 *           ExactFramerate: "STRING_VALUE",
 *           Par: "STRING_VALUE",
 *           Range: "NARROW" || "FULL" || "FULLPROTECT",
 *           ScanMode: "progressive" || "interlace" || "progressive-segmented-frame",
 *           Tcs: "SDR" || "PQ" || "HLG" || "LINEAR" || "BT2100LINPQ" || "BT2100LINHLG" || "ST2065-1" || "ST428-1" || "DENSITY",
 *         },
 *         Lang: "STRING_VALUE",
 *       },
 *       ClockRate: Number("int"),
 *       Description: "STRING_VALUE",
 *       MediaStreamId: Number("int"), // required
 *       MediaStreamName: "STRING_VALUE", // required
 *       MediaStreamType: "video" || "audio" || "ancillary-data", // required
 *       VideoFormat: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new AddFlowMediaStreamsCommand(input);
 * const response = await client.send(command);
 * // { // AddFlowMediaStreamsResponse
 * //   FlowArn: "STRING_VALUE",
 * //   MediaStreams: [ // __listOfMediaStream
 * //     { // MediaStream
 * //       Attributes: { // MediaStreamAttributes
 * //         Fmtp: { // Fmtp
 * //           ChannelOrder: "STRING_VALUE",
 * //           Colorimetry: "BT601" || "BT709" || "BT2020" || "BT2100" || "ST2065-1" || "ST2065-3" || "XYZ",
 * //           ExactFramerate: "STRING_VALUE",
 * //           Par: "STRING_VALUE",
 * //           Range: "NARROW" || "FULL" || "FULLPROTECT",
 * //           ScanMode: "progressive" || "interlace" || "progressive-segmented-frame",
 * //           Tcs: "SDR" || "PQ" || "HLG" || "LINEAR" || "BT2100LINPQ" || "BT2100LINHLG" || "ST2065-1" || "ST428-1" || "DENSITY",
 * //         },
 * //         Lang: "STRING_VALUE",
 * //       },
 * //       ClockRate: Number("int"),
 * //       Description: "STRING_VALUE",
 * //       Fmt: Number("int"), // required
 * //       MediaStreamId: Number("int"), // required
 * //       MediaStreamName: "STRING_VALUE", // required
 * //       MediaStreamType: "video" || "audio" || "ancillary-data", // required
 * //       VideoFormat: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param AddFlowMediaStreamsCommandInput - {@link AddFlowMediaStreamsCommandInput}
 * @returns {@link AddFlowMediaStreamsCommandOutput}
 * @see {@link AddFlowMediaStreamsCommandInput} for command's `input` shape.
 * @see {@link AddFlowMediaStreamsCommandOutput} for command's `response` shape.
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
export class AddFlowMediaStreamsCommand extends $Command<
  AddFlowMediaStreamsCommandInput,
  AddFlowMediaStreamsCommandOutput,
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
  constructor(readonly input: AddFlowMediaStreamsCommandInput) {
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
  ): Handler<AddFlowMediaStreamsCommandInput, AddFlowMediaStreamsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AddFlowMediaStreamsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaConnectClient";
    const commandName = "AddFlowMediaStreamsCommand";
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
  private serialize(input: AddFlowMediaStreamsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AddFlowMediaStreamsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AddFlowMediaStreamsCommandOutput> {
    return de_AddFlowMediaStreamsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
