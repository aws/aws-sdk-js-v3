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
import { CreateRecordingConfigurationRequest, CreateRecordingConfigurationResponse } from "../models/models_0";
import {
  de_CreateRecordingConfigurationCommand,
  se_CreateRecordingConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateRecordingConfigurationCommand}.
 */
export interface CreateRecordingConfigurationCommandInput extends CreateRecordingConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CreateRecordingConfigurationCommand}.
 */
export interface CreateRecordingConfigurationCommandOutput
  extends CreateRecordingConfigurationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Creates a new recording configuration, used to enable recording to Amazon S3.</p>
 *          <p>
 *             <b>Known issue:</b> In the us-east-1 region, if you use the
 *         Amazon Web Services CLI to create a recording configuration, it returns success even if the
 *       S3 bucket is in a different region. In this case, the <code>state</code> of the recording
 *       configuration is <code>CREATE_FAILED</code> (instead of <code>ACTIVE</code>). (In other
 *       regions, the CLI correctly returns failure if the bucket is in a different region.)</p>
 *          <p>
 *             <b>Workaround:</b> Ensure that your S3 bucket is in the same
 *       region as the recording configuration. If you create a recording configuration in a different
 *       region as your S3 bucket, delete that recording configuration and create a new one with an S3
 *       bucket from the correct region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, CreateRecordingConfigurationCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, CreateRecordingConfigurationCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * const client = new IvsClient(config);
 * const input = { // CreateRecordingConfigurationRequest
 *   name: "STRING_VALUE",
 *   destinationConfiguration: { // DestinationConfiguration
 *     s3: { // S3DestinationConfiguration
 *       bucketName: "STRING_VALUE", // required
 *     },
 *   },
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 *   thumbnailConfiguration: { // ThumbnailConfiguration
 *     recordingMode: "STRING_VALUE",
 *     targetIntervalSeconds: Number("long"),
 *     resolution: "STRING_VALUE",
 *     storage: [ // ThumbnailConfigurationStorageList
 *       "STRING_VALUE",
 *     ],
 *   },
 *   recordingReconnectWindowSeconds: Number("int"),
 *   renditionConfiguration: { // RenditionConfiguration
 *     renditionSelection: "STRING_VALUE",
 *     renditions: [ // RenditionConfigurationRenditionList
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new CreateRecordingConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // CreateRecordingConfigurationResponse
 * //   recordingConfiguration: { // RecordingConfiguration
 * //     arn: "STRING_VALUE", // required
 * //     name: "STRING_VALUE",
 * //     destinationConfiguration: { // DestinationConfiguration
 * //       s3: { // S3DestinationConfiguration
 * //         bucketName: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     state: "STRING_VALUE", // required
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     thumbnailConfiguration: { // ThumbnailConfiguration
 * //       recordingMode: "STRING_VALUE",
 * //       targetIntervalSeconds: Number("long"),
 * //       resolution: "STRING_VALUE",
 * //       storage: [ // ThumbnailConfigurationStorageList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     recordingReconnectWindowSeconds: Number("int"),
 * //     renditionConfiguration: { // RenditionConfiguration
 * //       renditionSelection: "STRING_VALUE",
 * //       renditions: [ // RenditionConfigurationRenditionList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateRecordingConfigurationCommandInput - {@link CreateRecordingConfigurationCommandInput}
 * @returns {@link CreateRecordingConfigurationCommandOutput}
 * @see {@link CreateRecordingConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateRecordingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for IvsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p/>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p/>
 *
 * @throws {@link PendingVerification} (client fault)
 *  <p/>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link IvsServiceException}
 * <p>Base exception class for all service exceptions from Ivs service.</p>
 *
 */
export class CreateRecordingConfigurationCommand extends $Command<
  CreateRecordingConfigurationCommandInput,
  CreateRecordingConfigurationCommandOutput,
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
  constructor(readonly input: CreateRecordingConfigurationCommandInput) {
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
  ): Handler<CreateRecordingConfigurationCommandInput, CreateRecordingConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateRecordingConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IvsClient";
    const commandName = "CreateRecordingConfigurationCommand";
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
  private serialize(input: CreateRecordingConfigurationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateRecordingConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateRecordingConfigurationCommandOutput> {
    return de_CreateRecordingConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
