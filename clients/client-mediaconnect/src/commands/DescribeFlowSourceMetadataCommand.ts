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
import { DescribeFlowSourceMetadataRequest, DescribeFlowSourceMetadataResponse } from "../models/models_0";
import { de_DescribeFlowSourceMetadataCommand, se_DescribeFlowSourceMetadataCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeFlowSourceMetadataCommand}.
 */
export interface DescribeFlowSourceMetadataCommandInput extends DescribeFlowSourceMetadataRequest {}
/**
 * @public
 *
 * The output of {@link DescribeFlowSourceMetadataCommand}.
 */
export interface DescribeFlowSourceMetadataCommandOutput extends DescribeFlowSourceMetadataResponse, __MetadataBearer {}

/**
 * @public
 * Displays details of the flow's source stream. The response contains information about the contents of the stream and its programs.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, DescribeFlowSourceMetadataCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, DescribeFlowSourceMetadataCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * const client = new MediaConnectClient(config);
 * const input = { // DescribeFlowSourceMetadataRequest
 *   FlowArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeFlowSourceMetadataCommand(input);
 * const response = await client.send(command);
 * // { // DescribeFlowSourceMetadataResponse
 * //   FlowArn: "STRING_VALUE",
 * //   Messages: [ // __listOfMessageDetail
 * //     { // MessageDetail
 * //       Code: "STRING_VALUE", // required
 * //       Message: "STRING_VALUE", // required
 * //       ResourceName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Timestamp: new Date("TIMESTAMP"),
 * //   TransportMediaInfo: { // TransportMediaInfo
 * //     Programs: [ // __listOfTransportStreamProgram // required
 * //       { // TransportStreamProgram
 * //         PcrPid: Number("int"), // required
 * //         ProgramName: "STRING_VALUE",
 * //         ProgramNumber: Number("int"), // required
 * //         ProgramPid: Number("int"), // required
 * //         Streams: [ // __listOfTransportStream // required
 * //           { // TransportStream
 * //             Channels: Number("int"),
 * //             Codec: "STRING_VALUE",
 * //             FrameRate: "STRING_VALUE",
 * //             FrameResolution: { // FrameResolution
 * //               FrameHeight: Number("int"), // required
 * //               FrameWidth: Number("int"), // required
 * //             },
 * //             Pid: Number("int"), // required
 * //             SampleRate: Number("int"),
 * //             SampleSize: Number("int"),
 * //             StreamType: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeFlowSourceMetadataCommandInput - {@link DescribeFlowSourceMetadataCommandInput}
 * @returns {@link DescribeFlowSourceMetadataCommandOutput}
 * @see {@link DescribeFlowSourceMetadataCommandInput} for command's `input` shape.
 * @see {@link DescribeFlowSourceMetadataCommandOutput} for command's `response` shape.
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
export class DescribeFlowSourceMetadataCommand extends $Command<
  DescribeFlowSourceMetadataCommandInput,
  DescribeFlowSourceMetadataCommandOutput,
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
  constructor(readonly input: DescribeFlowSourceMetadataCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MediaConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeFlowSourceMetadataCommandInput, DescribeFlowSourceMetadataCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeFlowSourceMetadataCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MediaConnectClient";
    const commandName = "DescribeFlowSourceMetadataCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "MediaConnect",
        operation: "DescribeFlowSourceMetadata",
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
  private serialize(input: DescribeFlowSourceMetadataCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeFlowSourceMetadataCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeFlowSourceMetadataCommandOutput> {
    return de_DescribeFlowSourceMetadataCommand(output, context);
  }
}
