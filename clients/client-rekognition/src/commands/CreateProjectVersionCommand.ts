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

import { CreateProjectVersionRequest, CreateProjectVersionResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateProjectVersionCommand,
  serializeAws_json1_1CreateProjectVersionCommand,
} from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

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
 * <p>Creates a new version of a model and begins training.
 *          Models are managed as part of an Amazon Rekognition Custom Labels project.
 *          The response from <code>CreateProjectVersion</code>
 *          is an Amazon Resource Name (ARN) for the version of the model. </p>
 *          <p>Training uses the training and test datasets associated with the project.
 *          For more information, see Creating training and test dataset in the <i>Amazon Rekognition Custom Labels Developer Guide</i>.
 *       </p>
 *          <note>
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
 *          <p>Training takes a while to complete. You can get the current status by calling
 *          <a>DescribeProjectVersions</a>. Training completed successfully if
 *          the value of the <code>Status</code> field is <code>TRAINING_COMPLETED</code>.</p>
 *          <p>If training
 *          fails, see Debugging a failed model training in the <i>Amazon Rekognition Custom Labels</i> developer guide. </p>
 *          <p>Once training has successfully completed, call <a>DescribeProjectVersions</a> to
 *          get the training results and evaluate the model.  For more information, see Improving a trained Amazon Rekognition Custom Labels model
 *          in the <i>Amazon Rekognition Custom Labels</i> developers guide.
 *       </p>
 *          <p>After evaluating the model, you start the model
 *        by calling <a>StartProjectVersion</a>.</p>
 *          <p>This operation requires permissions to perform the <code>rekognition:CreateProjectVersion</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, CreateProjectVersionCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, CreateProjectVersionCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const input = {
 *   ProjectArn: "STRING_VALUE", // required
 *   VersionName: "STRING_VALUE", // required
 *   OutputConfig: {
 *     S3Bucket: "STRING_VALUE",
 *     S3KeyPrefix: "STRING_VALUE",
 *   },
 *   TrainingData: {
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
 *   },
 *   TestingData: {
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
 *   Tags: {
 *     "<keys>": "STRING_VALUE",
 *   },
 *   KmsKeyId: "STRING_VALUE",
 * };
 * const command = new CreateProjectVersionCommand(input);
 * const response = await client.send(command);
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
 *  <p>An Amazon Rekognition service limit was exceeded. For example, if you start too many Amazon Rekognition Video jobs concurrently, calls to start operations
 *             (<code>StartLabelDetection</code>, for example) will raise a <code>LimitExceededException</code> exception (HTTP status code: 400) until
 *             the number of concurrently running jobs is below the Amazon Rekognition service limit.  </p>
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
    return serializeAws_json1_1CreateProjectVersionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateProjectVersionCommandOutput> {
    return deserializeAws_json1_1CreateProjectVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
