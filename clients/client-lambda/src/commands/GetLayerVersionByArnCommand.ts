// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { GetLayerVersionByArnRequest, GetLayerVersionResponse } from "../models/models_0";
import { GetLayerVersionByArn } from "../schemas/com.amazonaws.lambda";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetLayerVersionByArnCommand}.
 */
export interface GetLayerVersionByArnCommandInput extends GetLayerVersionByArnRequest {}
/**
 * @public
 *
 * The output of {@link GetLayerVersionByArnCommand}.
 */
export interface GetLayerVersionByArnCommandOutput extends GetLayerVersionResponse, __MetadataBearer {}

/**
 * <p>Returns information about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda
 *         layer</a>, with a link to download the layer archive
 *         that's valid for 10 minutes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, GetLayerVersionByArnCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, GetLayerVersionByArnCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const input = { // GetLayerVersionByArnRequest
 *   Arn: "STRING_VALUE", // required
 * };
 * const command = new GetLayerVersionByArnCommand(input);
 * const response = await client.send(command);
 * // { // GetLayerVersionResponse
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
 * @param GetLayerVersionByArnCommandInput - {@link GetLayerVersionByArnCommandInput}
 * @returns {@link GetLayerVersionByArnCommandOutput}
 * @see {@link GetLayerVersionByArnCommandInput} for command's `input` shape.
 * @see {@link GetLayerVersionByArnCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
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
 * @example To get information about a Lambda layer version
 * ```javascript
 * // The following example returns information about the layer version with the specified Amazon Resource Name (ARN).
 * const input = {
 *   "Arn": "arn:aws:lambda:ca-central-1:123456789012:layer:blank-python-lib:3"
 * };
 * const command = new GetLayerVersionByArnCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "CompatibleRuntimes": [
 *     "python3.8"
 *   ],
 *   "Content": {
 *     "CodeSha256": "6x+xmpl/M3BnQUk7gS9sGmfeFsR/npojXoA3fZUv4eU=",
 *     "CodeSize": 9529009,
 *     "Location": "https://awslambda-us-east-2-layers.s3.us-east-2.amazonaws.com/snapshots/123456789012/blank-python-lib-e5212378-xmpl-44ee-8398-9d8ec5113949?versionId=WbZnvf..."
 *   },
 *   "CreatedDate": "2020-03-31T00:35:18.949+0000",
 *   "Description": "Dependencies for the blank-python sample app.",
 *   "LayerArn": "arn:aws:lambda:us-east-2:123456789012:layer:blank-python-lib",
 *   "LayerVersionArn": "arn:aws:lambda:us-east-2:123456789012:layer:blank-python-lib:3",
 *   "Version": 3
 * }
 * *\/
 * // example id: to-get-information-about-a-lambda-layer-version-1586481457839
 * ```
 *
 */
export class GetLayerVersionByArnCommand extends $Command
  .classBuilder<
    GetLayerVersionByArnCommandInput,
    GetLayerVersionByArnCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LambdaClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGirApiService", "GetLayerVersionByArn", {})
  .n("LambdaClient", "GetLayerVersionByArnCommand")
  .f(void 0, void 0)
  .sc(GetLayerVersionByArn)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLayerVersionByArnRequest;
      output: GetLayerVersionResponse;
    };
    sdk: {
      input: GetLayerVersionByArnCommandInput;
      output: GetLayerVersionByArnCommandOutput;
    };
  };
}
