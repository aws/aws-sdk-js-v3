// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  CreateAccessPointForObjectLambdaRequest,
  CreateAccessPointForObjectLambdaResult,
} from "../models/models_0";
import type { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { CreateAccessPointForObjectLambda$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAccessPointForObjectLambdaCommand}.
 */
export interface CreateAccessPointForObjectLambdaCommandInput extends CreateAccessPointForObjectLambdaRequest {}
/**
 * @public
 *
 * The output of {@link CreateAccessPointForObjectLambdaCommand}.
 */
export interface CreateAccessPointForObjectLambdaCommandOutput extends CreateAccessPointForObjectLambdaResult, __MetadataBearer {}

/**
 * <note>
 *             <p>This operation is not supported by directory buckets.</p>
 *          </note>
 *          <p>Creates an Object Lambda Access Point. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/transforming-objects.html">Transforming objects with
 *             Object Lambda Access Points</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          <p>The following actions are related to
 *          <code>CreateAccessPointForObjectLambda</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPointForObjectLambda.html">DeleteAccessPointForObjectLambda</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointForObjectLambda.html">GetAccessPointForObjectLambda</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListAccessPointsForObjectLambda.html">ListAccessPointsForObjectLambda</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, CreateAccessPointForObjectLambdaCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, CreateAccessPointForObjectLambdaCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // CreateAccessPointForObjectLambdaRequest
 *   AccountId: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 *   Configuration: { // ObjectLambdaConfiguration
 *     SupportingAccessPoint: "STRING_VALUE", // required
 *     CloudWatchMetricsEnabled: true || false,
 *     AllowedFeatures: [ // ObjectLambdaAllowedFeaturesList
 *       "GetObject-Range" || "GetObject-PartNumber" || "HeadObject-Range" || "HeadObject-PartNumber",
 *     ],
 *     TransformationConfigurations: [ // ObjectLambdaTransformationConfigurationsList // required
 *       { // ObjectLambdaTransformationConfiguration
 *         Actions: [ // ObjectLambdaTransformationConfigurationActionsList // required
 *           "GetObject" || "HeadObject" || "ListObjects" || "ListObjectsV2",
 *         ],
 *         ContentTransformation: { // ObjectLambdaContentTransformation Union: only one key present
 *           AwsLambda: { // AwsLambdaTransformation
 *             FunctionArn: "STRING_VALUE", // required
 *             FunctionPayload: "STRING_VALUE",
 *           },
 *         },
 *       },
 *     ],
 *   },
 * };
 * const command = new CreateAccessPointForObjectLambdaCommand(input);
 * const response = await client.send(command);
 * // { // CreateAccessPointForObjectLambdaResult
 * //   ObjectLambdaAccessPointArn: "STRING_VALUE",
 * //   Alias: { // ObjectLambdaAccessPointAlias
 * //     Value: "STRING_VALUE",
 * //     Status: "PROVISIONING" || "READY",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateAccessPointForObjectLambdaCommandInput - {@link CreateAccessPointForObjectLambdaCommandInput}
 * @returns {@link CreateAccessPointForObjectLambdaCommandOutput}
 * @see {@link CreateAccessPointForObjectLambdaCommandInput} for command's `input` shape.
 * @see {@link CreateAccessPointForObjectLambdaCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 *
 * @public
 */
export class CreateAccessPointForObjectLambdaCommand extends $Command
  .classBuilder<
    CreateAccessPointForObjectLambdaCommandInput,
    CreateAccessPointForObjectLambdaCommandOutput,
    S3ControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
    RequiresAccountId: { type: "staticContextParams", value: true },
    AccountId: { type: "contextParams", name: "AccountId" },
  })
  .m(function (this: any, Command: any, cs: any, config: S3ControlClientResolvedConfig, o: any) {
    return [
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getProcessArnablesPlugin(config),
    ];
  })
  .s("AWSS3ControlServiceV20180820", "CreateAccessPointForObjectLambda", {})
  .n("S3ControlClient", "CreateAccessPointForObjectLambdaCommand")
  .sc(CreateAccessPointForObjectLambda$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAccessPointForObjectLambdaRequest;
      output: CreateAccessPointForObjectLambdaResult;
    };
    sdk: {
      input: CreateAccessPointForObjectLambdaCommandInput;
      output: CreateAccessPointForObjectLambdaCommandOutput;
    };
  };
}
