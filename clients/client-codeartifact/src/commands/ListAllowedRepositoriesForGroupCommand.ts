// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListAllowedRepositoriesForGroupRequest, ListAllowedRepositoriesForGroupResult } from "../models/models_0";
import {
  de_ListAllowedRepositoriesForGroupCommand,
  se_ListAllowedRepositoriesForGroupCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAllowedRepositoriesForGroupCommand}.
 */
export interface ListAllowedRepositoriesForGroupCommandInput extends ListAllowedRepositoriesForGroupRequest {}
/**
 * @public
 *
 * The output of {@link ListAllowedRepositoriesForGroupCommand}.
 */
export interface ListAllowedRepositoriesForGroupCommandOutput
  extends ListAllowedRepositoriesForGroupResult,
    __MetadataBearer {}

/**
 * <p>Lists the repositories in the added repositories list of the specified restriction type for a package group. For more information about restriction types
 *       and added repository lists, see <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/package-group-origin-controls.html">Package group origin controls</a> in the <i>CodeArtifact User Guide</i>.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, ListAllowedRepositoriesForGroupCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, ListAllowedRepositoriesForGroupCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CodeartifactClient(config);
 * const input = { // ListAllowedRepositoriesForGroupRequest
 *   domain: "STRING_VALUE", // required
 *   domainOwner: "STRING_VALUE",
 *   packageGroup: "STRING_VALUE", // required
 *   originRestrictionType: "EXTERNAL_UPSTREAM" || "INTERNAL_UPSTREAM" || "PUBLISH", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListAllowedRepositoriesForGroupCommand(input);
 * const response = await client.send(command);
 * // { // ListAllowedRepositoriesForGroupResult
 * //   allowedRepositories: [ // RepositoryNameList
 * //     "STRING_VALUE",
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAllowedRepositoriesForGroupCommandInput - {@link ListAllowedRepositoriesForGroupCommandInput}
 * @returns {@link ListAllowedRepositoriesForGroupCommandOutput}
 * @see {@link ListAllowedRepositoriesForGroupCommandInput} for command's `input` shape.
 * @see {@link ListAllowedRepositoriesForGroupCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for CodeartifactClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>
 *         The operation did not succeed because of an unauthorized access attempt.
 *       </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p> The operation did not succeed because of an error that occurred inside CodeArtifact. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>
 *       The operation did not succeed because the resource requested is not found in the service.
 *     </p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>
 *         The operation did not succeed because it would have exceeded a service limit for your account.
 *       </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>
 *       The operation did not succeed because too many requests are sent to the service.
 *     </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>
 *       The operation did not succeed because a parameter in the request was sent with an invalid value.
 *     </p>
 *
 * @throws {@link CodeartifactServiceException}
 * <p>Base exception class for all service exceptions from Codeartifact service.</p>
 *
 * @public
 */
export class ListAllowedRepositoriesForGroupCommand extends $Command
  .classBuilder<
    ListAllowedRepositoriesForGroupCommandInput,
    ListAllowedRepositoriesForGroupCommandOutput,
    CodeartifactClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeartifactClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeArtifactControlPlaneService", "ListAllowedRepositoriesForGroup", {})
  .n("CodeartifactClient", "ListAllowedRepositoriesForGroupCommand")
  .f(void 0, void 0)
  .ser(se_ListAllowedRepositoriesForGroupCommand)
  .de(de_ListAllowedRepositoriesForGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAllowedRepositoriesForGroupRequest;
      output: ListAllowedRepositoriesForGroupResult;
    };
    sdk: {
      input: ListAllowedRepositoriesForGroupCommandInput;
      output: ListAllowedRepositoriesForGroupCommandOutput;
    };
  };
}
