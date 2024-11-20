// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import {
  PublishLayerVersionRequest,
  PublishLayerVersionRequestFilterSensitiveLog,
  PublishLayerVersionResponse,
} from "../models/models_0";
import { de_PublishLayerVersionCommand, se_PublishLayerVersionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PublishLayerVersionCommand}.
 */
export interface PublishLayerVersionCommandInput extends PublishLayerVersionRequest {}
/**
 * @public
 *
 * The output of {@link PublishLayerVersionCommand}.
 */
export interface PublishLayerVersionCommandOutput extends PublishLayerVersionResponse, __MetadataBearer {}

/**
 * <p>Creates an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda
 *         layer</a> from a ZIP archive. Each time you call <code>PublishLayerVersion</code> with the same
 *       layer name, a new version is created.</p>
 *          <p>Add layers to your function with <a>CreateFunction</a> or <a>UpdateFunctionConfiguration</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, PublishLayerVersionCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, PublishLayerVersionCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const input = { // PublishLayerVersionRequest
 *   LayerName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Content: { // LayerVersionContentInput
 *     S3Bucket: "STRING_VALUE",
 *     S3Key: "STRING_VALUE",
 *     S3ObjectVersion: "STRING_VALUE",
 *     ZipFile: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *   },
 *   CompatibleRuntimes: [ // CompatibleRuntimes
 *     "nodejs" || "nodejs4.3" || "nodejs6.10" || "nodejs8.10" || "nodejs10.x" || "nodejs12.x" || "nodejs14.x" || "nodejs16.x" || "java8" || "java8.al2" || "java11" || "python2.7" || "python3.6" || "python3.7" || "python3.8" || "python3.9" || "dotnetcore1.0" || "dotnetcore2.0" || "dotnetcore2.1" || "dotnetcore3.1" || "dotnet6" || "dotnet8" || "nodejs4.3-edge" || "go1.x" || "ruby2.5" || "ruby2.7" || "provided" || "provided.al2" || "nodejs18.x" || "python3.10" || "java17" || "ruby3.2" || "ruby3.3" || "python3.11" || "nodejs20.x" || "provided.al2023" || "python3.12" || "java21" || "python3.13" || "nodejs22.x",
 *   ],
 *   LicenseInfo: "STRING_VALUE",
 *   CompatibleArchitectures: [ // CompatibleArchitectures
 *     "x86_64" || "arm64",
 *   ],
 * };
 * const command = new PublishLayerVersionCommand(input);
 * const response = await client.send(command);
 * // { // PublishLayerVersionResponse
 * //   Content: { // LayerVersionContentOutput
 * //     Location: "STRING_VALUE",
 * //     CodeSha256: "STRING_VALUE",
 * //     CodeSize: Number("long"),
 * //     SigningProfileVersionArn: "STRING_VALUE",
 * //     SigningJobArn: "STRING_VALUE",
 * //   },
 * //   LayerArn: "STRING_VALUE",
 * //   LayerVersionArn: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   CreatedDate: "STRING_VALUE",
 * //   Version: Number("long"),
 * //   CompatibleRuntimes: [ // CompatibleRuntimes
 * //     "nodejs" || "nodejs4.3" || "nodejs6.10" || "nodejs8.10" || "nodejs10.x" || "nodejs12.x" || "nodejs14.x" || "nodejs16.x" || "java8" || "java8.al2" || "java11" || "python2.7" || "python3.6" || "python3.7" || "python3.8" || "python3.9" || "dotnetcore1.0" || "dotnetcore2.0" || "dotnetcore2.1" || "dotnetcore3.1" || "dotnet6" || "dotnet8" || "nodejs4.3-edge" || "go1.x" || "ruby2.5" || "ruby2.7" || "provided" || "provided.al2" || "nodejs18.x" || "python3.10" || "java17" || "ruby3.2" || "ruby3.3" || "python3.11" || "nodejs20.x" || "provided.al2023" || "python3.12" || "java21" || "python3.13" || "nodejs22.x",
 * //   ],
 * //   LicenseInfo: "STRING_VALUE",
 * //   CompatibleArchitectures: [ // CompatibleArchitectures
 * //     "x86_64" || "arm64",
 * //   ],
 * // };
 *
 * ```
 *
 * @param PublishLayerVersionCommandInput - {@link PublishLayerVersionCommandInput}
 * @returns {@link PublishLayerVersionCommandOutput}
 * @see {@link PublishLayerVersionCommandInput} for command's `input` shape.
 * @see {@link PublishLayerVersionCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link CodeStorageExceededException} (client fault)
 *  <p>Your Amazon Web Services account has exceeded its maximum total code size. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html">Lambda quotas</a>.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One of the parameters in the request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request does not exist.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>The Lambda service encountered an internal error.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request throughput limit was exceeded. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html#api-requests">Lambda quotas</a>.</p>
 *
 * @throws {@link LambdaServiceException}
 * <p>Base exception class for all service exceptions from Lambda service.</p>
 *
 * @public
 * @example To create a Lambda layer version
 * ```javascript
 * // The following example creates a new Python library layer version. The command retrieves the layer content a file named layer.zip in the specified S3 bucket.
 * const input = {
 *   "CompatibleRuntimes": [
 *     "python3.6",
 *     "python3.7"
 *   ],
 *   "Content": {
 *     "S3Bucket": "lambda-layers-us-west-2-123456789012",
 *     "S3Key": "layer.zip"
 *   },
 *   "Description": "My Python layer",
 *   "LayerName": "my-layer",
 *   "LicenseInfo": "MIT"
 * };
 * const command = new PublishLayerVersionCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "CompatibleRuntimes": [
 *     "python3.6",
 *     "python3.7"
 *   ],
 *   "Content": {
 *     "CodeSha256": "tv9jJO+rPbXUUXuRKi7CwHzKtLDkDRJLB3cC3Z/ouXo=",
 *     "CodeSize": 169,
 *     "Location": "https://awslambda-us-west-2-layers.s3.us-west-2.amazonaws.com/snapshots/123456789012/my-layer-4aaa2fbb-ff77-4b0a-ad92-5b78a716a96a?versionId=27iWyA73cCAYqyH..."
 *   },
 *   "CreatedDate": "2018-11-14T23:03:52.894+0000",
 *   "Description": "My Python layer",
 *   "LayerArn": "arn:aws:lambda:us-west-2:123456789012:layer:my-layer",
 *   "LayerVersionArn": "arn:aws:lambda:us-west-2:123456789012:layer:my-layer:1",
 *   "LicenseInfo": "MIT",
 *   "Version": 1
 * }
 * *\/
 * // example id: to-create-a-lambda-layer-version-1586491213595
 * ```
 *
 */
export class PublishLayerVersionCommand extends $Command
  .classBuilder<
    PublishLayerVersionCommandInput,
    PublishLayerVersionCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LambdaClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGirApiService", "PublishLayerVersion", {})
  .n("LambdaClient", "PublishLayerVersionCommand")
  .f(PublishLayerVersionRequestFilterSensitiveLog, void 0)
  .ser(se_PublishLayerVersionCommand)
  .de(de_PublishLayerVersionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PublishLayerVersionRequest;
      output: PublishLayerVersionResponse;
    };
    sdk: {
      input: PublishLayerVersionCommandInput;
      output: PublishLayerVersionCommandOutput;
    };
  };
}
