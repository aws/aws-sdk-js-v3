// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListAppInputSourcesRequest, ListAppInputSourcesResponse } from "../models/models_0";
import { de_ListAppInputSourcesCommand, se_ListAppInputSourcesCommand } from "../protocols/Aws_restJson1";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAppInputSourcesCommand}.
 */
export interface ListAppInputSourcesCommandInput extends ListAppInputSourcesRequest {}
/**
 * @public
 *
 * The output of {@link ListAppInputSourcesCommand}.
 */
export interface ListAppInputSourcesCommandOutput extends ListAppInputSourcesResponse, __MetadataBearer {}

/**
 * <p>Lists all the input sources of the Resilience Hub application. For more
 *       information about the input sources supported by Resilience Hub, see <a href="https://docs.aws.amazon.com/resilience-hub/latest/userguide/discover-structure.html">Discover
 *         the structure and describe your Resilience Hub application</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, ListAppInputSourcesCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, ListAppInputSourcesCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * const client = new ResiliencehubClient(config);
 * const input = { // ListAppInputSourcesRequest
 *   appArn: "STRING_VALUE", // required
 *   appVersion: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAppInputSourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListAppInputSourcesResponse
 * //   appInputSources: [ // AppInputSourceList // required
 * //     { // AppInputSource
 * //       sourceName: "STRING_VALUE",
 * //       importType: "CfnStack" || "Resource" || "AppRegistryApp" || "ResourceGroup" || "Terraform" || "EKS", // required
 * //       sourceArn: "STRING_VALUE",
 * //       terraformSource: { // TerraformSource
 * //         s3StateFileUrl: "STRING_VALUE", // required
 * //       },
 * //       resourceCount: Number("int"),
 * //       eksSourceClusterNamespace: { // EksSourceClusterNamespace
 * //         eksClusterArn: "STRING_VALUE", // required
 * //         namespace: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAppInputSourcesCommandInput - {@link ListAppInputSourcesCommandInput}
 * @returns {@link ListAppInputSourcesCommandOutput}
 * @see {@link ListAppInputSourcesCommandInput} for command's `input` shape.
 * @see {@link ListAppInputSourcesCommandOutput} for command's `response` shape.
 * @see {@link ResiliencehubClientResolvedConfig | config} for ResiliencehubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation. The user or role that is
 *       making the request must have at least one IAM permissions policy attached that grants the
 *       required permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Resilience Hub
 *       service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception occurs when the specified resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This exception occurs when you have exceeded the limit on the number of requests per second.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>This exception occurs when a request is not valid.</p>
 *
 * @throws {@link ResiliencehubServiceException}
 * <p>Base exception class for all service exceptions from Resiliencehub service.</p>
 *
 *
 * @public
 */
export class ListAppInputSourcesCommand extends $Command
  .classBuilder<
    ListAppInputSourcesCommandInput,
    ListAppInputSourcesCommandOutput,
    ResiliencehubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResiliencehubClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsResilienceHub", "ListAppInputSources", {})
  .n("ResiliencehubClient", "ListAppInputSourcesCommand")
  .f(void 0, void 0)
  .ser(se_ListAppInputSourcesCommand)
  .de(de_ListAppInputSourcesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAppInputSourcesRequest;
      output: ListAppInputSourcesResponse;
    };
    sdk: {
      input: ListAppInputSourcesCommandInput;
      output: ListAppInputSourcesCommandOutput;
    };
  };
}
