// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PutAccessPointConfigurationForObjectLambdaRequest } from "../models/models_1";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";
import { PutAccessPointConfigurationForObjectLambda } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutAccessPointConfigurationForObjectLambdaCommand}.
 */
export interface PutAccessPointConfigurationForObjectLambdaCommandInput
  extends PutAccessPointConfigurationForObjectLambdaRequest {}
/**
 * @public
 *
 * The output of {@link PutAccessPointConfigurationForObjectLambdaCommand}.
 */
export interface PutAccessPointConfigurationForObjectLambdaCommandOutput extends __MetadataBearer {}

/**
 * <note>
 *             <p>This operation is not supported by directory buckets.</p>
 *          </note>
 *          <p>Replaces configuration for an Object Lambda Access Point.</p>
 *          <p>The following actions are related to
 *             <code>PutAccessPointConfigurationForObjectLambda</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointConfigurationForObjectLambda.html">GetAccessPointConfigurationForObjectLambda</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <important>
 *             <p>You must URL encode any signed header values that contain spaces. For example, if your header value is <code>my  file.txt</code>, containing two spaces after <code>my</code>, you must URL encode this value to <code>my%20%20file.txt</code>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, PutAccessPointConfigurationForObjectLambdaCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, PutAccessPointConfigurationForObjectLambdaCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * // import type { S3ControlClientConfig } from "@aws-sdk/client-s3-control";
 * const config = {}; // type is S3ControlClientConfig
 * const client = new S3ControlClient(config);
 * const input = { // PutAccessPointConfigurationForObjectLambdaRequest
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
 * const command = new PutAccessPointConfigurationForObjectLambdaCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutAccessPointConfigurationForObjectLambdaCommandInput - {@link PutAccessPointConfigurationForObjectLambdaCommandInput}
 * @returns {@link PutAccessPointConfigurationForObjectLambdaCommandOutput}
 * @see {@link PutAccessPointConfigurationForObjectLambdaCommandInput} for command's `input` shape.
 * @see {@link PutAccessPointConfigurationForObjectLambdaCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 *
 * @public
 */
export class PutAccessPointConfigurationForObjectLambdaCommand extends $Command
  .classBuilder<
    PutAccessPointConfigurationForObjectLambdaCommandInput,
    PutAccessPointConfigurationForObjectLambdaCommandOutput,
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions()), getProcessArnablesPlugin(config)];
  })
  .s("AWSS3ControlServiceV20180820", "PutAccessPointConfigurationForObjectLambda", {})
  .n("S3ControlClient", "PutAccessPointConfigurationForObjectLambdaCommand")
  .sc(PutAccessPointConfigurationForObjectLambda)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutAccessPointConfigurationForObjectLambdaRequest;
      output: {};
    };
    sdk: {
      input: PutAccessPointConfigurationForObjectLambdaCommandInput;
      output: PutAccessPointConfigurationForObjectLambdaCommandOutput;
    };
  };
}
