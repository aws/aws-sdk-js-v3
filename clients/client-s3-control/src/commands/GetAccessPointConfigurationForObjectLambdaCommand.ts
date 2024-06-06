// smithy-typescript generated code
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetAccessPointConfigurationForObjectLambdaRequest,
  GetAccessPointConfigurationForObjectLambdaResult,
} from "../models/models_0";
import {
  de_GetAccessPointConfigurationForObjectLambdaCommand,
  se_GetAccessPointConfigurationForObjectLambdaCommand,
} from "../protocols/Aws_restXml";
import { S3ControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../S3ControlClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAccessPointConfigurationForObjectLambdaCommand}.
 */
export interface GetAccessPointConfigurationForObjectLambdaCommandInput
  extends GetAccessPointConfigurationForObjectLambdaRequest {}
/**
 * @public
 *
 * The output of {@link GetAccessPointConfigurationForObjectLambdaCommand}.
 */
export interface GetAccessPointConfigurationForObjectLambdaCommandOutput
  extends GetAccessPointConfigurationForObjectLambdaResult,
    __MetadataBearer {}

/**
 * <note>
 *             <p>This operation is not supported by directory buckets.</p>
 *          </note>
 *          <p>Returns configuration for an Object Lambda Access Point.</p>
 *          <p>The following actions are related to
 *             <code>GetAccessPointConfigurationForObjectLambda</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutAccessPointConfigurationForObjectLambda.html">PutAccessPointConfigurationForObjectLambda</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, GetAccessPointConfigurationForObjectLambdaCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, GetAccessPointConfigurationForObjectLambdaCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const input = { // GetAccessPointConfigurationForObjectLambdaRequest
 *   AccountId: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new GetAccessPointConfigurationForObjectLambdaCommand(input);
 * const response = await client.send(command);
 * // { // GetAccessPointConfigurationForObjectLambdaResult
 * //   Configuration: { // ObjectLambdaConfiguration
 * //     SupportingAccessPoint: "STRING_VALUE", // required
 * //     CloudWatchMetricsEnabled: true || false,
 * //     AllowedFeatures: [ // ObjectLambdaAllowedFeaturesList
 * //       "GetObject-Range" || "GetObject-PartNumber" || "HeadObject-Range" || "HeadObject-PartNumber",
 * //     ],
 * //     TransformationConfigurations: [ // ObjectLambdaTransformationConfigurationsList // required
 * //       { // ObjectLambdaTransformationConfiguration
 * //         Actions: [ // ObjectLambdaTransformationConfigurationActionsList // required
 * //           "GetObject" || "HeadObject" || "ListObjects" || "ListObjectsV2",
 * //         ],
 * //         ContentTransformation: { // ObjectLambdaContentTransformation Union: only one key present
 * //           AwsLambda: { // AwsLambdaTransformation
 * //             FunctionArn: "STRING_VALUE", // required
 * //             FunctionPayload: "STRING_VALUE",
 * //           },
 * //         },
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAccessPointConfigurationForObjectLambdaCommandInput - {@link GetAccessPointConfigurationForObjectLambdaCommandInput}
 * @returns {@link GetAccessPointConfigurationForObjectLambdaCommandOutput}
 * @see {@link GetAccessPointConfigurationForObjectLambdaCommandInput} for command's `input` shape.
 * @see {@link GetAccessPointConfigurationForObjectLambdaCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for S3ControlClient's `config` shape.
 *
 * @throws {@link S3ControlServiceException}
 * <p>Base exception class for all service exceptions from S3Control service.</p>
 *
 * @public
 */
export class GetAccessPointConfigurationForObjectLambdaCommand extends $Command
  .classBuilder<
    GetAccessPointConfigurationForObjectLambdaCommandInput,
    GetAccessPointConfigurationForObjectLambdaCommandOutput,
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
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getProcessArnablesPlugin(config),
    ];
  })
  .s("AWSS3ControlServiceV20180820", "GetAccessPointConfigurationForObjectLambda", {})
  .n("S3ControlClient", "GetAccessPointConfigurationForObjectLambdaCommand")
  .f(void 0, void 0)
  .ser(se_GetAccessPointConfigurationForObjectLambdaCommand)
  .de(de_GetAccessPointConfigurationForObjectLambdaCommand)
  .build() {}
