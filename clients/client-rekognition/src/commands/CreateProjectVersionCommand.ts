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

import { CreateProjectVersionRequest, CreateProjectVersionResponse } from "../models/models_0";
import { de_CreateProjectVersionCommand, se_CreateProjectVersionCommand } from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateProjectVersionCommand}.
 */
export interface CreateProjectVersionCommandInput extends CreateProjectVersionRequest {}
/**
 * @public
 *
 * The output of {@link CreateProjectVersionCommand}.
 */
export interface CreateProjectVersionCommandOutput extends CreateProjectVersionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new version of Amazon Rekognition project (like a Custom Labels model or a custom adapter)
 *          and begins training. Models and adapters are managed as part of a Rekognition project. The
 *          response from <code>CreateProjectVersion</code> is an Amazon Resource Name (ARN) for the
 *          project version. </p>
 *          <p>The FeatureConfig operation argument allows you to configure specific model or adapter
 *          settings. You can provide a description to the project version by using the
 *          VersionDescription argment. Training can take a while to complete. You can get the current
 *          status by calling <a>DescribeProjectVersions</a>. Training completed
 *          successfully if the value of the <code>Status</code> field is
 *             <code>TRAINING_COMPLETED</code>. Once training has successfully completed, call <a>DescribeProjectVersions</a> to get the training results and evaluate the
 *          model.</p>
 *          <p>This operation requires permissions to perform the
 *             <code>rekognition:CreateProjectVersion</code> action.</p>
 *          <note>
 *             <p>
 *                <i>The following applies only to projects with Amazon Rekognition Custom Labels as the chosen
 *                feature:</i>
 *             </p>
 *             <p>You can train a model in a project that doesn't have associated datasets by specifying manifest files in the
 *          <code>TrainingData</code> and <code>TestingData</code> fields.
 *          </p>
 *             <p>If you open the console after training a model with manifest files, Amazon Rekognition Custom Labels creates
 *             the datasets for you using the most recent manifest files. You can no longer train
 *             a model version for the project by specifying manifest files. </p>
 *             <p>Instead of training with a project without associated datasets,
 *             we recommend that you use the manifest
 *             files to create training and test datasets for the project.</p>
 *          </note>
 *          <p></p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, CreateProjectVersionCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, CreateProjectVersionCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const input = { // CreateProjectVersionRequest
 *   ProjectArn: "STRING_VALUE", // required
 *   VersionName: "STRING_VALUE", // required
 *   OutputConfig: { // OutputConfig
 *     S3Bucket: "STRING_VALUE",
 *     S3KeyPrefix: "STRING_VALUE",
 *   },
 *   TrainingData: { // TrainingData
 *     Assets: [ // Assets
 *       { // Asset
 *         GroundTruthManifest: { // GroundTruthManifest
 *           S3Object: { // S3Object
 *             Bucket: "STRING_VALUE",
 *             Name: "STRING_VALUE",
 *             Version: "STRING_VALUE",
 *           },
 *         },
 *       },
 *     ],
 *   },
 *   TestingData: { // TestingData
 *     Assets: [
 *       {
 *         GroundTruthManifest: {
 *           S3Object: {
 *             Bucket: "STRING_VALUE",
 *             Name: "STRING_VALUE",
 *             Version: "STRING_VALUE",
 *           },
 *         },
 *       },
 *     ],
 *     AutoCreate: true || false,
 *   },
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   KmsKeyId: "STRING_VALUE",
 *   VersionDescription: "STRING_VALUE",
 *   FeatureConfig: { // CustomizationFeatureConfig
 *     ContentModeration: { // CustomizationFeatureContentModerationConfig
 *       ConfidenceThreshold: Number("float"),
 *     },
 *   },
 * };
 * const command = new CreateProjectVersionCommand(input);
 * const response = await client.send(command);
 * // { // CreateProjectVersionResponse
 * //   ProjectVersionArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateProjectVersionCommandInput - {@link CreateProjectVersionCommandInput}
 * @returns {@link CreateProjectVersionCommandOutput}
 * @see {@link CreateProjectVersionCommandInput} for command's `input` shape.
 * @see {@link CreateProjectVersionCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform the action.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Amazon Rekognition experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Input parameter violated a constraint. Validate your parameter before calling the API
 *       operation again.</p>
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
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The specified resource is already being used.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request cannot be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p></p>
 *          <p>The size of the collection exceeds the allowed limit. For more information,
 *       see Guidelines and quotas in Amazon Rekognition in the Amazon Rekognition Developer Guide. </p>
 *
 * @throws {@link ThrottlingException} (server fault)
 *  <p>Amazon Rekognition is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link RekognitionServiceException}
 * <p>Base exception class for all service exceptions from Rekognition service.</p>
 *
 * @example To train an Amazon Rekognition Custom Labels model
 * ```javascript
 * // Trains a version of an Amazon Rekognition Custom Labels model.
 * const input = {
 *   "OutputConfig": {
 *     "S3Bucket": "output_bucket",
 *     "S3KeyPrefix": "output_folder"
 *   },
 *   "ProjectArn": "arn:aws:rekognition:us-east-1:111122223333:project/my-project/1690474772815",
 *   "VersionName": "1"
 * };
 * const command = new CreateProjectVersionCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ProjectVersionArn": "arn:aws:rekognition:us-east-1:111122223333:project/my-project/version/1/1690556751958"
 * }
 * *\/
 * // example id: to-train-an-amazon-rekognition-custom-labels-model-1690555832843
 * ```
 *
 */
export class CreateProjectVersionCommand extends $Command<
  CreateProjectVersionCommandInput,
  CreateProjectVersionCommandOutput,
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
  constructor(readonly input: CreateProjectVersionCommandInput) {
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
  ): Handler<CreateProjectVersionCommandInput, CreateProjectVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateProjectVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionClient";
    const commandName = "CreateProjectVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "RekognitionService",
        operation: "CreateProjectVersion",
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
  private serialize(input: CreateProjectVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateProjectVersionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateProjectVersionCommandOutput> {
    return de_CreateProjectVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
