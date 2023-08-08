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

import { DescribeProjectVersionsRequest, DescribeProjectVersionsResponse } from "../models/models_0";
import { de_DescribeProjectVersionsCommand, se_DescribeProjectVersionsCommand } from "../protocols/Aws_json1_1";
import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeProjectVersionsCommand}.
 */
export interface DescribeProjectVersionsCommandInput extends DescribeProjectVersionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeProjectVersionsCommand}.
 */
export interface DescribeProjectVersionsCommandOutput extends DescribeProjectVersionsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists and describes the versions of a model in an Amazon Rekognition Custom Labels project. You
 *          can specify up to 10 model versions in <code>ProjectVersionArns</code>. If
 *          you don't specify a value, descriptions for all model versions in the project are returned.</p>
 *          <p>This operation requires permissions to perform the <code>rekognition:DescribeProjectVersions</code>
 *             action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, DescribeProjectVersionsCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, DescribeProjectVersionsCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * const client = new RekognitionClient(config);
 * const input = { // DescribeProjectVersionsRequest
 *   ProjectArn: "STRING_VALUE", // required
 *   VersionNames: [ // VersionNames
 *     "STRING_VALUE",
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeProjectVersionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeProjectVersionsResponse
 * //   ProjectVersionDescriptions: [ // ProjectVersionDescriptions
 * //     { // ProjectVersionDescription
 * //       ProjectVersionArn: "STRING_VALUE",
 * //       CreationTimestamp: new Date("TIMESTAMP"),
 * //       MinInferenceUnits: Number("int"),
 * //       Status: "TRAINING_IN_PROGRESS" || "TRAINING_COMPLETED" || "TRAINING_FAILED" || "STARTING" || "RUNNING" || "FAILED" || "STOPPING" || "STOPPED" || "DELETING" || "COPYING_IN_PROGRESS" || "COPYING_COMPLETED" || "COPYING_FAILED",
 * //       StatusMessage: "STRING_VALUE",
 * //       BillableTrainingTimeInSeconds: Number("long"),
 * //       TrainingEndTimestamp: new Date("TIMESTAMP"),
 * //       OutputConfig: { // OutputConfig
 * //         S3Bucket: "STRING_VALUE",
 * //         S3KeyPrefix: "STRING_VALUE",
 * //       },
 * //       TrainingDataResult: { // TrainingDataResult
 * //         Input: { // TrainingData
 * //           Assets: [ // Assets
 * //             { // Asset
 * //               GroundTruthManifest: { // GroundTruthManifest
 * //                 S3Object: { // S3Object
 * //                   Bucket: "STRING_VALUE",
 * //                   Name: "STRING_VALUE",
 * //                   Version: "STRING_VALUE",
 * //                 },
 * //               },
 * //             },
 * //           ],
 * //         },
 * //         Output: {
 * //           Assets: [
 * //             {
 * //               GroundTruthManifest: {
 * //                 S3Object: {
 * //                   Bucket: "STRING_VALUE",
 * //                   Name: "STRING_VALUE",
 * //                   Version: "STRING_VALUE",
 * //                 },
 * //               },
 * //             },
 * //           ],
 * //         },
 * //         Validation: { // ValidationData
 * //           Assets: [
 * //             {
 * //               GroundTruthManifest: {
 * //                 S3Object: {
 * //                   Bucket: "STRING_VALUE",
 * //                   Name: "STRING_VALUE",
 * //                   Version: "STRING_VALUE",
 * //                 },
 * //               },
 * //             },
 * //           ],
 * //         },
 * //       },
 * //       TestingDataResult: { // TestingDataResult
 * //         Input: { // TestingData
 * //           Assets: [
 * //             {
 * //               GroundTruthManifest: {
 * //                 S3Object: {
 * //                   Bucket: "STRING_VALUE",
 * //                   Name: "STRING_VALUE",
 * //                   Version: "STRING_VALUE",
 * //                 },
 * //               },
 * //             },
 * //           ],
 * //           AutoCreate: true || false,
 * //         },
 * //         Output: {
 * //           Assets: [
 * //             {
 * //               GroundTruthManifest: {
 * //                 S3Object: {
 * //                   Bucket: "STRING_VALUE",
 * //                   Name: "STRING_VALUE",
 * //                   Version: "STRING_VALUE",
 * //                 },
 * //               },
 * //             },
 * //           ],
 * //           AutoCreate: true || false,
 * //         },
 * //         Validation: {
 * //           Assets: "<Assets>",
 * //         },
 * //       },
 * //       EvaluationResult: { // EvaluationResult
 * //         F1Score: Number("float"),
 * //         Summary: { // Summary
 * //           S3Object: "<S3Object>",
 * //         },
 * //       },
 * //       ManifestSummary: "<GroundTruthManifest>",
 * //       KmsKeyId: "STRING_VALUE",
 * //       MaxInferenceUnits: Number("int"),
 * //       SourceProjectVersionArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeProjectVersionsCommandInput - {@link DescribeProjectVersionsCommandInput}
 * @returns {@link DescribeProjectVersionsCommandOutput}
 * @see {@link DescribeProjectVersionsCommandInput} for command's `input` shape.
 * @see {@link DescribeProjectVersionsCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform the action.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Amazon Rekognition experienced a service issue. Try your call again.</p>
 *
 * @throws {@link InvalidPaginationTokenException} (client fault)
 *  <p>Pagination token in the request is not valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Input parameter violated a constraint. Validate your parameter before calling the API
 *       operation again.</p>
 *
 * @throws {@link ProvisionedThroughputExceededException} (client fault)
 *  <p>The number of requests exceeded your throughput limit. If you want to increase this
 *       limit, contact Amazon Rekognition.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (server fault)
 *  <p>Amazon Rekognition is temporarily unable to process the request. Try your call again.</p>
 *
 * @throws {@link RekognitionServiceException}
 * <p>Base exception class for all service exceptions from Rekognition service.</p>
 *
 * @example To describe an Amazon Rekognition Custom Labels model
 * ```javascript
 * // Describes a version of an Amazon Rekognition Custom Labels model.
 * const input = {
 *   "ProjectArn": "arn:aws:rekognition:us-east-1:111122223333:project/my-project/1690474772815",
 *   "VersionNames": [
 *     "1"
 *   ]
 * };
 * const command = new DescribeProjectVersionsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "NextToken": "",
 *   "ProjectVersionDescriptions": [
 *     {
 *       "BillableTrainingTimeInSeconds": 1899,
 *       "CreationTimestamp": "2023-07-28T08:05:51.958000-07:00",
 *       "EvaluationResult": {
 *         "F1Score": 1,
 *         "Summary": {
 *           "S3Object": {
 *             "Bucket": "custom-labels-console-us-east-1-111111111",
 *             "Name": "my-model-output/EvaluationResultSummary-my-project-1.json"
 *           }
 *         }
 *       },
 *       "ManifestSummary": {
 *         "S3Object": {
 *           "Bucket": "custom-labels-console-us-east-1-111111111",
 *           "Name": "my-model-output/ManifestSummary-my-project-1.json"
 *         }
 *       },
 *       "OutputConfig": {
 *         "S3Bucket": "custom-labels-console-us-east-1-111111111",
 *         "S3KeyPrefix": "my-model-output"
 *       },
 *       "ProjectVersionArn": "arn:aws:rekognition:us-east-1:111122223333:project/my-project/version/1/1690556751958",
 *       "Status": "TRAINING_COMPLETED",
 *       "StatusMessage": "The model is ready to run.",
 *       "TestingDataResult": {
 *         "Input": {
 *           "AutoCreate": false
 *         },
 *         "Output": {
 *           "Assets": [
 *             {
 *               "GroundTruthManifest": {
 *                 "S3Object": {
 *                   "Bucket": "custom-labels-console-us-east-1-111111111",
 *                   "Name": "my-model-output/TestingGroundTruth-my-project-1.json"
 *                 }
 *               }
 *             }
 *           ],
 *           "AutoCreate": false
 *         },
 *         "Validation": {
 *           "Assets": [
 *             {
 *               "GroundTruthManifest": {
 *                 "S3Object": {
 *                   "Bucket": "custom-labels-console-us-east-1-111111111",
 *                   "Name": "my-model-output/TestingManifestWithValidation-my-project-1.json"
 *                 }
 *               }
 *             }
 *           ]
 *         }
 *       },
 *       "TrainingDataResult": {
 *         "Input": {},
 *         "Output": {
 *           "Assets": [
 *             {
 *               "GroundTruthManifest": {
 *                 "S3Object": {
 *                   "Bucket": "custom-labels-console-us-east-1-111111111",
 *                   "Name": "my-model-output/TrainingGroundTruth-my-project-1.json"
 *                 }
 *               }
 *             }
 *           ]
 *         },
 *         "Validation": {
 *           "Assets": [
 *             {
 *               "GroundTruthManifest": {
 *                 "S3Object": {
 *                   "Bucket": "custom-labels-console-us-east-1-111111111",
 *                   "Name": "my-model-output/TrainingManifestWithValidation-my-project-1.json"
 *                 }
 *               }
 *             }
 *           ]
 *         }
 *       },
 *       "TrainingEndTimestamp": "2023-07-28T08:33:10.827000-07:00"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describes-an-amazon-rekognition-custom-labels-model-1690558265950
 * ```
 *
 */
export class DescribeProjectVersionsCommand extends $Command<
  DescribeProjectVersionsCommandInput,
  DescribeProjectVersionsCommandOutput,
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
  constructor(readonly input: DescribeProjectVersionsCommandInput) {
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
  ): Handler<DescribeProjectVersionsCommandInput, DescribeProjectVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeProjectVersionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RekognitionClient";
    const commandName = "DescribeProjectVersionsCommand";
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
  private serialize(input: DescribeProjectVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeProjectVersionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeProjectVersionsCommandOutput> {
    return de_DescribeProjectVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
