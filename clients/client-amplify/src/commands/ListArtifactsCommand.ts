// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmplifyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListArtifactsRequest, ListArtifactsResult } from "../models/models_0";
import { de_ListArtifactsCommand, se_ListArtifactsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListArtifactsCommand}.
 */
export interface ListArtifactsCommandInput extends ListArtifactsRequest {}
/**
 * @public
 *
 * The output of {@link ListArtifactsCommand}.
 */
export interface ListArtifactsCommandOutput extends ListArtifactsResult, __MetadataBearer {}

/**
 * <p>Returns a list of artifacts for a specified app, branch, and job. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyClient, ListArtifactsCommand } from "@aws-sdk/client-amplify"; // ES Modules import
 * // const { AmplifyClient, ListArtifactsCommand } = require("@aws-sdk/client-amplify"); // CommonJS import
 * const client = new AmplifyClient(config);
 * const input = { // ListArtifactsRequest
 *   appId: "STRING_VALUE", // required
 *   branchName: "STRING_VALUE", // required
 *   jobId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListArtifactsCommand(input);
 * const response = await client.send(command);
 * // { // ListArtifactsResult
 * //   artifacts: [ // Artifacts // required
 * //     { // Artifact
 * //       artifactFileName: "STRING_VALUE", // required
 * //       artifactId: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListArtifactsCommandInput - {@link ListArtifactsCommandInput}
 * @returns {@link ListArtifactsCommandOutput}
 * @see {@link ListArtifactsCommandInput} for command's `input` shape.
 * @see {@link ListArtifactsCommandOutput} for command's `response` shape.
 * @see {@link AmplifyClientResolvedConfig | config} for AmplifyClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>A request contains unexpected data. </p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>The service failed to perform an operation due to an internal issue. </p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A resource could not be created because service quotas were exceeded. </p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>An operation failed due to a lack of access. </p>
 *
 * @throws {@link AmplifyServiceException}
 * <p>Base exception class for all service exceptions from Amplify service.</p>
 *
 * @public
 */
export class ListArtifactsCommand extends $Command
  .classBuilder<
    ListArtifactsCommandInput,
    ListArtifactsCommandOutput,
    AmplifyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AmplifyClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Amplify", "ListArtifacts", {})
  .n("AmplifyClient", "ListArtifactsCommand")
  .f(void 0, void 0)
  .ser(se_ListArtifactsCommand)
  .de(de_ListArtifactsCommand)
  .build() {}
