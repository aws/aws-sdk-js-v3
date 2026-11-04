// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CopyProjectVersionRequest, CopyProjectVersionResponse } from "../models/models_0";
import { CopyProjectVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CopyProjectVersionCommand}.
 */
export interface CopyProjectVersionCommandInput extends CopyProjectVersionRequest {}
/**
 * @public
 *
 * The output of {@link CopyProjectVersionCommand}.
 */
export interface CopyProjectVersionCommandOutput extends CopyProjectVersionResponse, __MetadataBearer {}

/**
 * > **Note:** This operation applies only to Amazon Rekognition Custom Labels.
 *
 * Copies a version of an Amazon Rekognition Custom Labels model from a source project to a destination project. The source and destination projects can be in different AWS accounts but must be in the same AWS Region. You can't copy a model to another AWS service.
 *
 * To copy a model version to a different AWS account, you need to create a resource-based policy known as a *project policy*. You attach the project policy to the source project by calling PutProjectPolicy. The project policy gives permission to copy the model version from a trusting AWS account to a trusted account.
 *
 * For more information creating and attaching a project policy, see Attaching a project policy (SDK) in the *Amazon Rekognition Custom Labels Developer Guide*.
 *
 * If you are copying a model version to a project in the same AWS account, you don't need to create a project policy.
 *
 * > **Note:**
 * >
 * > Copying project versions is supported only for Custom Labels models.
 * >
 * > To copy a model, the destination project, source project, and source model version must already exist.
 *
 * Copying a model version takes a while to complete. To get the current status, call DescribeProjectVersions and check the value of `Status` in the ProjectVersionDescription object. The copy operation has finished when the value of `Status` is `COPYING_COMPLETED`.
 *
 * This operation requires permissions to perform the `rekognition:CopyProjectVersion` action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RekognitionClient, CopyProjectVersionCommand } from "@aws-sdk/client-rekognition"; // ES Modules import
 * // const { RekognitionClient, CopyProjectVersionCommand } = require("@aws-sdk/client-rekognition"); // CommonJS import
 * // import type { RekognitionClientConfig } from "@aws-sdk/client-rekognition";
 * const config = {}; // type is RekognitionClientConfig
 * const client = new RekognitionClient(config);
 * const input = { // CopyProjectVersionRequest
 *   SourceProjectArn: "STRING_VALUE", // required
 *   SourceProjectVersionArn: "STRING_VALUE", // required
 *   DestinationProjectArn: "STRING_VALUE", // required
 *   VersionName: "STRING_VALUE", // required
 *   OutputConfig: { // OutputConfig
 *     S3Bucket: "STRING_VALUE",
 *     S3KeyPrefix: "STRING_VALUE",
 *   },
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   KmsKeyId: "STRING_VALUE",
 * };
 * const command = new CopyProjectVersionCommand(input);
 * const response = await client.send(command);
 * // { // CopyProjectVersionResponse
 * //   ProjectVersionArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CopyProjectVersionCommandInput - {@link CopyProjectVersionCommandInput}
 * @returns {@link CopyProjectVersionCommandOutput}
 * @see {@link CopyProjectVersionCommandInput} for command's `input` shape.
 * @see {@link CopyProjectVersionCommandOutput} for command's `response` shape.
 * @see {@link RekognitionClientResolvedConfig | config} for RekognitionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You are not authorized to perform the action.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * Amazon Rekognition experienced a service issue. Try your call again.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * Input parameter violated a constraint. Validate your parameter before calling the API operation again.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * An Amazon Rekognition service limit was exceeded. For example, if you start too many jobs concurrently, subsequent calls to start operations (ex: `StartLabelDetection`) will raise a `LimitExceededException` exception (HTTP status code: 400) until the number of concurrently running jobs is below the Amazon Rekognition service limit.
 *
 * @throws {@link ProvisionedThroughputExceededException} (client fault)
 *
 * The number of requests exceeded your throughput limit. If you want to increase this limit, contact Amazon Rekognition.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * The specified resource is already being used.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource specified in the request cannot be found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The size of the collection exceeds the allowed limit. For more information, see Guidelines and quotas in Amazon Rekognition in the Amazon Rekognition Developer Guide.
 *
 * @throws {@link ThrottlingException} (server fault)
 *
 * Amazon Rekognition is temporarily unable to process the request. Try your call again.
 *
 * @throws {@link RekognitionServiceException}
 *
 * Base exception class for all service exceptions from Rekognition service.
 *
 * @example CopyProjectVersion
 * ```javascript
 * // Copies a version of an Amazon Rekognition Custom Labels model from a source project to a destination project.
 * const input = {
 *   DestinationProjectArn: "arn:aws:rekognition:us-east-1:555555555555:project/DestinationProject/1656705098765",
 *   KmsKeyId: "arn:1234abcd-12ab-34cd-56ef-1234567890ab",
 *   OutputConfig: {
 *     S3Bucket: "bucket-name",
 *     S3KeyPrefix: "path_to_folder"
 *   },
 *   SourceProjectArn: "arn:aws:rekognition:us-east-1:111122223333:project/SourceProject/16565123456",
 *   SourceProjectVersionArn: "arn:aws:rekognition:us-east-1:111122223333:project/SourceProject/version/model_1/1656611123456",
 *   Tags: {
 *     key1: "val1"
 *   },
 *   VersionName: "DestinationVersionName_cross_account"
 * };
 * const command = new CopyProjectVersionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ProjectVersionArn: "arn:aws:rekognition:us-east-1:555555555555:project/DestinationProject/version/DestinationVersionName_cross_account/16567050987651"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CopyProjectVersionCommand extends command<CopyProjectVersionCommandInput, CopyProjectVersionCommandOutput>(
  _ep0,
  _mw0,
  "CopyProjectVersion",
  CopyProjectVersion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CopyProjectVersionRequest;
      output: CopyProjectVersionResponse;
    };
    sdk: {
      input: CopyProjectVersionCommandInput;
      output: CopyProjectVersionCommandOutput;
    };
  };
}
