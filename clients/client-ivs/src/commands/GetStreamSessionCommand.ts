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

import { IvsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IvsClient";
import { GetStreamSessionRequest, GetStreamSessionResponse } from "../models/models_0";
import { de_GetStreamSessionCommand, se_GetStreamSessionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetStreamSessionCommand}.
 */
export interface GetStreamSessionCommandInput extends GetStreamSessionRequest {}
/**
 * @public
 *
 * The output of {@link GetStreamSessionCommand}.
 */
export interface GetStreamSessionCommandOutput extends GetStreamSessionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets metadata on a specified stream.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, GetStreamSessionCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, GetStreamSessionCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * const client = new IvsClient(config);
 * const input = { // GetStreamSessionRequest
 *   channelArn: "STRING_VALUE", // required
 *   streamId: "STRING_VALUE",
 * };
 * const command = new GetStreamSessionCommand(input);
 * const response = await client.send(command);
 * // { // GetStreamSessionResponse
 * //   streamSession: { // StreamSession
 * //     streamId: "STRING_VALUE",
 * //     startTime: new Date("TIMESTAMP"),
 * //     endTime: new Date("TIMESTAMP"),
 * //     channel: { // Channel
 * //       arn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       latencyMode: "STRING_VALUE",
 * //       type: "BASIC" || "STANDARD" || "ADVANCED_SD" || "ADVANCED_HD",
 * //       recordingConfigurationArn: "STRING_VALUE",
 * //       ingestEndpoint: "STRING_VALUE",
 * //       playbackUrl: "STRING_VALUE",
 * //       authorized: true || false,
 * //       tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       insecureIngest: true || false,
 * //       preset: "HIGHER_BANDWIDTH_DELIVERY" || "CONSTRAINED_BANDWIDTH_DELIVERY",
 * //     },
 * //     ingestConfiguration: { // IngestConfiguration
 * //       video: { // VideoConfiguration
 * //         avcProfile: "STRING_VALUE",
 * //         avcLevel: "STRING_VALUE",
 * //         codec: "STRING_VALUE",
 * //         encoder: "STRING_VALUE",
 * //         targetBitrate: Number("long"),
 * //         targetFramerate: Number("long"),
 * //         videoHeight: Number("long"),
 * //         videoWidth: Number("long"),
 * //       },
 * //       audio: { // AudioConfiguration
 * //         codec: "STRING_VALUE",
 * //         targetBitrate: Number("long"),
 * //         sampleRate: Number("long"),
 * //         channels: Number("long"),
 * //       },
 * //     },
 * //     recordingConfiguration: { // RecordingConfiguration
 * //       arn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE",
 * //       destinationConfiguration: { // DestinationConfiguration
 * //         s3: { // S3DestinationConfiguration
 * //           bucketName: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       state: "STRING_VALUE", // required
 * //       tags: {
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       thumbnailConfiguration: { // ThumbnailConfiguration
 * //         recordingMode: "STRING_VALUE",
 * //         targetIntervalSeconds: Number("long"),
 * //       },
 * //       recordingReconnectWindowSeconds: Number("int"),
 * //     },
 * //     truncatedEvents: [ // StreamEvents
 * //       { // StreamEvent
 * //         name: "STRING_VALUE",
 * //         type: "STRING_VALUE",
 * //         eventTime: new Date("TIMESTAMP"),
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetStreamSessionCommandInput - {@link GetStreamSessionCommandInput}
 * @returns {@link GetStreamSessionCommandOutput}
 * @see {@link GetStreamSessionCommandInput} for command's `input` shape.
 * @see {@link GetStreamSessionCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for IvsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link IvsServiceException}
 * <p>Base exception class for all service exceptions from Ivs service.</p>
 *
 */
export class GetStreamSessionCommand extends $Command<
  GetStreamSessionCommandInput,
  GetStreamSessionCommandOutput,
  IvsClientResolvedConfig
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
  constructor(readonly input: GetStreamSessionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IvsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetStreamSessionCommandInput, GetStreamSessionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetStreamSessionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IvsClient";
    const commandName = "GetStreamSessionCommand";
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
  private serialize(input: GetStreamSessionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetStreamSessionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetStreamSessionCommandOutput> {
    return de_GetStreamSessionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
