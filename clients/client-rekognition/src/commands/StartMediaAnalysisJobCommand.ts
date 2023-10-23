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

import { StartMediaAnalysisJobRequest, StartMediaAnalysisJobResponse } from "../models/models_1";
import { de_StartMediaAnalysisJobCommand, se_StartMediaAnalysisJobCommand } from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartMediaAnalysisJobCommand}.
 */
export interface StartMediaAnalysisJobCommandInput extends StartMediaAnalysisJobRequest {}
/**
 * @public
 *
 * The output of {@link StartMediaAnalysisJobCommand}.
 */
export interface StartMediaAnalysisJobCommandOutput extends StartMediaAnalysisJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Initiates a new media analysis job. Accepts a manifest file in an Amazon S3 bucket. The
 *             output is a manifest file and a summary of the manifest stored in the Amazon S3 bucket.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, StartMediaAnalysisJobCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, StartMediaAnalysisJobCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const input = { // StartMediaAnalysisJobRequest
 *   ClientRequestToken: "STRING_VALUE",
 *   JobName: "STRING_VALUE",
 *   OperationsConfig: { // MediaAnalysisOperationsConfig
 *     DetectModerationLabels: { // MediaAnalysisDetectModerationLabelsConfig
 *       MinConfidence: Number("float"),
 *       ProjectVersion: "STRING_VALUE",
 *     },
 *   },
 *   Input: { // MediaAnalysisInput
 *     S3Object: { // S3Object
 *       Bucket: "STRING_VALUE",
 *       Name: "STRING_VALUE",
 *       Version: "STRING_VALUE",
 *     },
 *   },
 *   OutputConfig: { // MediaAnalysisOutputConfig
 *     S3Bucket: "STRING_VALUE", // required
 *     S3KeyPrefix: "STRING_VALUE",
 *   },
 *   KmsKeyId: "STRING_VALUE",
 * };
 * const command = new StartMediaAnalysisJobCommand(input);
 * const response = await client.send(command);
 * // { // StartMediaAnalysisJobResponse
 * //   JobId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param StartMediaAnalysisJobCommandInput - {@link StartMediaAnalysisJobCommandInput}
 * @returns {@link StartMediaAnalysisJobCommandOutput}
 * @see {@link StartMediaAnalysisJobCommandInput} for command's `input` shape.
 * @see {@link StartMediaAnalysisJobCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform the action.</p>
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *  <p>A <code>ClientRequestToken</code> input parameter was reused with an operation, but at least one of the other input
 *         parameters is different from the previous call to the operation.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Amazon Rekognition experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidManifestException} (client fault)
 *  <p>Indicates that a provided manifest file is empty or larger than the allowed limit.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Input parameter violated a constraint. Validate your parameter before calling the API
 *       operation again.</p>
 *
 * @throws {@link InvalidS3ObjectException} (client fault)
 *  <p>Amazon Rekognition is unable to access the S3 object specified in the request.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>An Amazon Rekognition service limit was exceeded. For example, if you start too many jobs
 *             concurrently, subsequent calls to start operations (ex:
 *             <code>StartLabelDetection</code>) will raise a <code>LimitExceededException</code>
 *             exception (HTTP status code: 400) until the number of concurrently running jobs is below
 *             the Amazon Rekognition service limit. </p>
 *
 * @throws {@link ProvisionedThroughputExceededException} (client fault)
 *  <p>The number of requests exceeded your throughput limit. If you want to increase this
 *       limit, contact Amazon Rekognition.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request cannot be found.</p>
 *
 * @throws {@link ResourceNotReadyException} (client fault)
 *  <p>The requested resource isn't ready. For example,
 *          this exception occurs when you call <code>DetectCustomLabels</code> with a
 *          model version that isn't deployed. </p>
 *
 * @throws {@link ThrottlingException} (server fault)
 *  <p>Amazon Rekognition is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link RekognitionServiceException}
 * <p>Base exception class for all service exceptions from Rekognition service.</p>
 *
 */
export class StartMediaAnalysisJobCommand extends $Command<
  StartMediaAnalysisJobCommandInput,
  StartMediaAnalysisJobCommandOutput,
  RekognitionClientResolvedConfig
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
  constructor(readonly input: StartMediaAnalysisJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RekognitionClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartMediaAnalysisJobCommandInput, StartMediaAnalysisJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartMediaAnalysisJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionClient";
    const commandName = "StartMediaAnalysisJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RekognitionService",
        operation: "StartMediaAnalysisJob",
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
  private serialize(input: StartMediaAnalysisJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartMediaAnalysisJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartMediaAnalysisJobCommandOutput> {
    return de_StartMediaAnalysisJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
