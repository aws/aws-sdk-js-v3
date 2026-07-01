// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PublishLayerVersionRequest, PublishLayerVersionResponse } from "../models/models_0";
import { PublishLayerVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * <p>Creates an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a> from a ZIP archive. Each time you call <code>PublishLayerVersion</code> with the same layer name, a new version is created.</p> <p>Add layers to your function with <a>CreateFunction</a> or <a>UpdateFunctionConfiguration</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, PublishLayerVersionCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, PublishLayerVersionCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * // import type { LambdaClientConfig } from "@aws-sdk/client-lambda";
 * const config = {}; // type is LambdaClientConfig
 * const client = new LambdaClient(config);
 * const input = { // PublishLayerVersionRequest
 *   LayerName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Content: { // LayerVersionContentInput
 *     S3Bucket: "STRING_VALUE",
 *     S3Key: "STRING_VALUE",
 *     S3ObjectVersion: "STRING_VALUE",
 *     S3ObjectStorageMode: "COPY" || "REFERENCE",
 *     ZipFile: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *   },
 *   CompatibleArchitectures: [ // CompatibleArchitectures
 *     "x86_64" || "arm64",
 *   ],
 *   CompatibleRuntimes: [ // CompatibleRuntimes
 *     "nodejs" || "nodejs4.3" || "nodejs6.10" || "nodejs8.10" || "nodejs10.x" || "nodejs12.x" || "nodejs14.x" || "nodejs16.x" || "nodejs18.x" || "nodejs20.x" || "nodejs22.x" || "nodejs24.x" || "java8" || "java8.al2" || "java11" || "java17" || "java21" || "java25" || "python2.7" || "python3.6" || "python3.7" || "python3.8" || "python3.9" || "python3.10" || "python3.11" || "python3.12" || "python3.13" || "python3.14" || "dotnetcore1.0" || "dotnetcore2.0" || "dotnetcore2.1" || "dotnetcore3.1" || "dotnet6" || "dotnet8" || "dotnet10" || "nodejs4.3-edge" || "go1.x" || "ruby2.5" || "ruby2.7" || "ruby3.2" || "ruby3.3" || "ruby3.4" || "ruby4.0" || "provided" || "provided.al2" || "provided.al2023",
 *   ],
 *   LicenseInfo: "STRING_VALUE",
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
 * //     ResolvedS3Object: { // ResolvedS3Object
 * //       S3Bucket: "STRING_VALUE",
 * //       S3Key: "STRING_VALUE",
 * //       S3ObjectVersion: "STRING_VALUE",
 * //     },
 * //   },
 * //   LayerArn: "STRING_VALUE",
 * //   LayerVersionArn: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   CreatedDate: "STRING_VALUE",
 * //   Version: Number("long"),
 * //   CompatibleArchitectures: [ // CompatibleArchitectures
 * //     "x86_64" || "arm64",
 * //   ],
 * //   CompatibleRuntimes: [ // CompatibleRuntimes
 * //     "nodejs" || "nodejs4.3" || "nodejs6.10" || "nodejs8.10" || "nodejs10.x" || "nodejs12.x" || "nodejs14.x" || "nodejs16.x" || "nodejs18.x" || "nodejs20.x" || "nodejs22.x" || "nodejs24.x" || "java8" || "java8.al2" || "java11" || "java17" || "java21" || "java25" || "python2.7" || "python3.6" || "python3.7" || "python3.8" || "python3.9" || "python3.10" || "python3.11" || "python3.12" || "python3.13" || "python3.14" || "dotnetcore1.0" || "dotnetcore2.0" || "dotnetcore2.1" || "dotnetcore3.1" || "dotnet6" || "dotnet8" || "dotnet10" || "nodejs4.3-edge" || "go1.x" || "ruby2.5" || "ruby2.7" || "ruby3.2" || "ruby3.3" || "ruby3.4" || "ruby4.0" || "provided" || "provided.al2" || "provided.al2023",
 * //   ],
 * //   LicenseInfo: "STRING_VALUE",
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
 *
 * @example To create a Lambda layer version
 * ```javascript
 * // The following example creates a new Python library layer version. The command retrieves the layer content a file named layer.zip in the specified S3 bucket.
 * const input = {
 *   CompatibleRuntimes: [
 *     "python3.6",
 *     "python3.7"
 *   ],
 *   Content: {
 *     S3Bucket: "lambda-layers-us-west-2-123456789012",
 *     S3Key: "layer.zip"
 *   },
 *   Description: "My Python layer",
 *   LayerName: "my-layer",
 *   LicenseInfo: "MIT"
 * };
 * const command = new PublishLayerVersionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   CompatibleRuntimes: [
 *     "python3.6",
 *     "python3.7"
 *   ],
 *   Content: {
 *     CodeSha256: "tv9jJO+rPbXUUXuRKi7CwHzKtLDkDRJLB3cC3Z/ouXo=",
 *     CodeSize: 169,
 *     Location: "https://awslambda-us-west-2-layers.s3.us-west-2.amazonaws.com/snapshots/123456789012/my-layer-4aaa2fbb-ff77-4b0a-ad92-5b78a716a96a?versionId=27iWyA73cCAYqyH..."
 *   },
 *   CreatedDate: "2018-11-14T23:03:52.894+0000",
 *   Description: "My Python layer",
 *   LayerArn: "arn:aws:lambda:us-west-2:123456789012:layer:my-layer",
 *   LayerVersionArn: "arn:aws:lambda:us-west-2:123456789012:layer:my-layer:1",
 *   LicenseInfo: "MIT",
 *   Version: 1
 * }
 * *\/
 * ```
 *
 * @public
 */
export class PublishLayerVersionCommand extends command<PublishLayerVersionCommandInput, PublishLayerVersionCommandOutput>(
  _ep0,
  _mw0,
  "PublishLayerVersion",
  PublishLayerVersion$
) {
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
