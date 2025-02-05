// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { ListLayerVersionsRequest, ListLayerVersionsResponse } from "../models/models_0";
import { de_ListLayerVersionsCommand, se_ListLayerVersionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListLayerVersionsCommand}.
 */
export interface ListLayerVersionsCommandInput extends ListLayerVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListLayerVersionsCommand}.
 */
export interface ListLayerVersionsCommandOutput extends ListLayerVersionsResponse, __MetadataBearer {}

/**
 * <p>Lists the versions of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda
 *         layer</a>. Versions that have been deleted aren't listed. Specify a <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">runtime identifier</a> to list only
 *       versions that indicate that they're compatible with that runtime. Specify a compatible architecture to include only
 *       layer versions that are compatible with that architecture.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, ListLayerVersionsCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, ListLayerVersionsCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new LambdaClient(config);
 * const input = { // ListLayerVersionsRequest
 *   CompatibleRuntime: "nodejs" || "nodejs4.3" || "nodejs6.10" || "nodejs8.10" || "nodejs10.x" || "nodejs12.x" || "nodejs14.x" || "nodejs16.x" || "java8" || "java8.al2" || "java11" || "python2.7" || "python3.6" || "python3.7" || "python3.8" || "python3.9" || "dotnetcore1.0" || "dotnetcore2.0" || "dotnetcore2.1" || "dotnetcore3.1" || "dotnet6" || "dotnet8" || "nodejs4.3-edge" || "go1.x" || "ruby2.5" || "ruby2.7" || "provided" || "provided.al2" || "nodejs18.x" || "python3.10" || "java17" || "ruby3.2" || "ruby3.3" || "python3.11" || "nodejs20.x" || "provided.al2023" || "python3.12" || "java21" || "python3.13" || "nodejs22.x",
 *   LayerName: "STRING_VALUE", // required
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 *   CompatibleArchitecture: "x86_64" || "arm64",
 * };
 * const command = new ListLayerVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListLayerVersionsResponse
 * //   NextMarker: "STRING_VALUE",
 * //   LayerVersions: [ // LayerVersionsList
 * //     { // LayerVersionsListItem
 * //       LayerVersionArn: "STRING_VALUE",
 * //       Version: Number("long"),
 * //       Description: "STRING_VALUE",
 * //       CreatedDate: "STRING_VALUE",
 * //       CompatibleRuntimes: [ // CompatibleRuntimes
 * //         "nodejs" || "nodejs4.3" || "nodejs6.10" || "nodejs8.10" || "nodejs10.x" || "nodejs12.x" || "nodejs14.x" || "nodejs16.x" || "java8" || "java8.al2" || "java11" || "python2.7" || "python3.6" || "python3.7" || "python3.8" || "python3.9" || "dotnetcore1.0" || "dotnetcore2.0" || "dotnetcore2.1" || "dotnetcore3.1" || "dotnet6" || "dotnet8" || "nodejs4.3-edge" || "go1.x" || "ruby2.5" || "ruby2.7" || "provided" || "provided.al2" || "nodejs18.x" || "python3.10" || "java17" || "ruby3.2" || "ruby3.3" || "python3.11" || "nodejs20.x" || "provided.al2023" || "python3.12" || "java21" || "python3.13" || "nodejs22.x",
 * //       ],
 * //       LicenseInfo: "STRING_VALUE",
 * //       CompatibleArchitectures: [ // CompatibleArchitectures
 * //         "x86_64" || "arm64",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListLayerVersionsCommandInput - {@link ListLayerVersionsCommandInput}
 * @returns {@link ListLayerVersionsCommandOutput}
 * @see {@link ListLayerVersionsCommandInput} for command's `input` shape.
 * @see {@link ListLayerVersionsCommandOutput} for command's `response` shape.
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
 * @example To list versions of a layer
 * ```javascript
 * // The following example displays information about the versions for the layer named blank-java-lib
 * const input = {
 *   "LayerName": "blank-java-lib"
 * };
 * const command = new ListLayerVersionsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "LayerVersions": [
 *     {
 *       "CompatibleRuntimes": [
 *         "java8"
 *       ],
 *       "CreatedDate": "2020-03-18T23:38:42.284+0000",
 *       "Description": "Dependencies for the blank-java sample app.",
 *       "LayerVersionArn": "arn:aws:lambda:us-east-2:123456789012:layer:blank-java-lib:7",
 *       "Version": 7
 *     },
 *     {
 *       "CompatibleRuntimes": [
 *         "java8"
 *       ],
 *       "CreatedDate": "2020-03-17T07:24:21.960+0000",
 *       "Description": "Dependencies for the blank-java sample app.",
 *       "LayerVersionArn": "arn:aws:lambda:us-east-2:123456789012:layer:blank-java-lib:6",
 *       "Version": 6
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-list-versions-of-a-layer-1586490857297
 * ```
 *
 */
export class ListLayerVersionsCommand extends $Command
  .classBuilder<
    ListLayerVersionsCommandInput,
    ListLayerVersionsCommandOutput,
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
  .s("AWSGirApiService", "ListLayerVersions", {})
  .n("LambdaClient", "ListLayerVersionsCommand")
  .f(void 0, void 0)
  .ser(se_ListLayerVersionsCommand)
  .de(de_ListLayerVersionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListLayerVersionsRequest;
      output: ListLayerVersionsResponse;
    };
    sdk: {
      input: ListLayerVersionsCommandInput;
      output: ListLayerVersionsCommandOutput;
    };
  };
}
