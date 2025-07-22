// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { ListLayersRequest, ListLayersResponse } from "../models/models_0";
import { de_ListLayersCommand, se_ListLayersCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListLayersCommand}.
 */
export interface ListLayersCommandInput extends ListLayersRequest {}
/**
 * @public
 *
 * The output of {@link ListLayersCommand}.
 */
export interface ListLayersCommandOutput extends ListLayersResponse, __MetadataBearer {}

/**
 * <p>Lists <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-layers.html">Lambda layers</a> and shows information about the latest version of each. Specify a <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html">runtime identifier</a> to list only layers that indicate that they're compatible with that runtime. Specify a compatible architecture to include only layers that are compatible with that <a href="https://docs.aws.amazon.com/lambda/latest/dg/foundation-arch.html">instruction set architecture</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, ListLayersCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, ListLayersCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const input = { // ListLayersRequest
 *   CompatibleRuntime: "nodejs" || "nodejs4.3" || "nodejs6.10" || "nodejs8.10" || "nodejs10.x" || "nodejs12.x" || "nodejs14.x" || "nodejs16.x" || "java8" || "java8.al2" || "java11" || "python2.7" || "python3.6" || "python3.7" || "python3.8" || "python3.9" || "dotnetcore1.0" || "dotnetcore2.0" || "dotnetcore2.1" || "dotnetcore3.1" || "dotnet6" || "dotnet8" || "nodejs4.3-edge" || "go1.x" || "ruby2.5" || "ruby2.7" || "provided" || "provided.al2" || "nodejs18.x" || "python3.10" || "java17" || "ruby3.2" || "ruby3.3" || "ruby3.4" || "python3.11" || "nodejs20.x" || "provided.al2023" || "python3.12" || "java21" || "python3.13" || "nodejs22.x",
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 *   CompatibleArchitecture: "x86_64" || "arm64",
 * };
 * const command = new ListLayersCommand(input);
 * const response = await client.send(command);
 * // { // ListLayersResponse
 * //   NextMarker: "STRING_VALUE",
 * //   Layers: [ // LayersList
 * //     { // LayersListItem
 * //       LayerName: "STRING_VALUE",
 * //       LayerArn: "STRING_VALUE",
 * //       LatestMatchingVersion: { // LayerVersionsListItem
 * //         LayerVersionArn: "STRING_VALUE",
 * //         Version: Number("long"),
 * //         Description: "STRING_VALUE",
 * //         CreatedDate: "STRING_VALUE",
 * //         CompatibleRuntimes: [ // CompatibleRuntimes
 * //           "nodejs" || "nodejs4.3" || "nodejs6.10" || "nodejs8.10" || "nodejs10.x" || "nodejs12.x" || "nodejs14.x" || "nodejs16.x" || "java8" || "java8.al2" || "java11" || "python2.7" || "python3.6" || "python3.7" || "python3.8" || "python3.9" || "dotnetcore1.0" || "dotnetcore2.0" || "dotnetcore2.1" || "dotnetcore3.1" || "dotnet6" || "dotnet8" || "nodejs4.3-edge" || "go1.x" || "ruby2.5" || "ruby2.7" || "provided" || "provided.al2" || "nodejs18.x" || "python3.10" || "java17" || "ruby3.2" || "ruby3.3" || "ruby3.4" || "python3.11" || "nodejs20.x" || "provided.al2023" || "python3.12" || "java21" || "python3.13" || "nodejs22.x",
 * //         ],
 * //         LicenseInfo: "STRING_VALUE",
 * //         CompatibleArchitectures: [ // CompatibleArchitectures
 * //           "x86_64" || "arm64",
 * //         ],
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListLayersCommandInput - {@link ListLayersCommandInput}
 * @returns {@link ListLayersCommandOutput}
 * @see {@link ListLayersCommandInput} for command's `input` shape.
 * @see {@link ListLayersCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One of the parameters in the request is not valid.</p>
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
 * @example To list the layers that are compatible with your function's runtime
 * ```javascript
 * // The following example returns information about layers that are compatible with the Python 3.7 runtime.
 * const input = {
 *   CompatibleRuntime: "python3.7"
 * };
 * const command = new ListLayersCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Layers: [
 *     {
 *       LatestMatchingVersion: {
 *         CompatibleRuntimes: [
 *           "python3.6",
 *           "python3.7"
 *         ],
 *         CreatedDate: "2018-11-15T00:37:46.592+0000",
 *         Description: "My layer",
 *         LayerVersionArn: "arn:aws:lambda:us-east-2:123456789012:layer:my-layer:2",
 *         Version: 2
 *       },
 *       LayerArn: "arn:aws:lambda:us-east-2:123456789012:layer:my-layer",
 *       LayerName: "my-layer"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListLayersCommand extends $Command
  .classBuilder<
    ListLayersCommandInput,
    ListLayersCommandOutput,
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
  .s("AWSGirApiService", "ListLayers", {})
  .n("LambdaClient", "ListLayersCommand")
  .f(void 0, void 0)
  .ser(se_ListLayersCommand)
  .de(de_ListLayersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListLayersRequest;
      output: ListLayersResponse;
    };
    sdk: {
      input: ListLayersCommandInput;
      output: ListLayersCommandOutput;
    };
  };
}
