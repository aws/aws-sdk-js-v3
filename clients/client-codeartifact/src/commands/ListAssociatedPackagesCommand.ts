// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListAssociatedPackagesRequest, ListAssociatedPackagesResult } from "../models/models_0";
import { de_ListAssociatedPackagesCommand, se_ListAssociatedPackagesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAssociatedPackagesCommand}.
 */
export interface ListAssociatedPackagesCommandInput extends ListAssociatedPackagesRequest {}
/**
 * @public
 *
 * The output of {@link ListAssociatedPackagesCommand}.
 */
export interface ListAssociatedPackagesCommandOutput extends ListAssociatedPackagesResult, __MetadataBearer {}

/**
 * <p>Returns a list of packages associated with the requested package group. For information package group association and matching, see
 *       <a href="https://docs.aws.amazon.com/codeartifact/latest/ug/package-group-definition-syntax-matching-behavior.html">Package group
 *         definition syntax and matching behavior</a> in the <i>CodeArtifact User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, ListAssociatedPackagesCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, ListAssociatedPackagesCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const input = { // ListAssociatedPackagesRequest
 *   domain: "STRING_VALUE", // required
 *   domainOwner: "STRING_VALUE",
 *   packageGroup: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   preview: true || false,
 * };
 * const command = new ListAssociatedPackagesCommand(input);
 * const response = await client.send(command);
 * // { // ListAssociatedPackagesResult
 * //   packages: [ // AssociatedPackageList
 * //     { // AssociatedPackage
 * //       format: "npm" || "pypi" || "maven" || "nuget" || "generic" || "ruby" || "swift" || "cargo",
 * //       namespace: "STRING_VALUE",
 * //       package: "STRING_VALUE",
 * //       associationType: "STRONG" || "WEAK",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAssociatedPackagesCommandInput - {@link ListAssociatedPackagesCommandInput}
 * @returns {@link ListAssociatedPackagesCommandOutput}
 * @see {@link ListAssociatedPackagesCommandInput} for command's `input` shape.
 * @see {@link ListAssociatedPackagesCommandOutput} for command's `response` shape.
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
 * @throws {@link ValidationException} (client fault)
 *  <p>
 *       The operation did not succeed because a parameter in the request was sent with an invalid value.
 *     </p>
 *
 * @throws {@link CodeartifactServiceException}
 * <p>Base exception class for all service exceptions from Codeartifact service.</p>
 *
 *
 * @public
 */
export class ListAssociatedPackagesCommand extends $Command
  .classBuilder<
    ListAssociatedPackagesCommandInput,
    ListAssociatedPackagesCommandOutput,
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
  .s("CodeArtifactControlPlaneService", "ListAssociatedPackages", {})
  .n("CodeartifactClient", "ListAssociatedPackagesCommand")
  .f(void 0, void 0)
  .ser(se_ListAssociatedPackagesCommand)
  .de(de_ListAssociatedPackagesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAssociatedPackagesRequest;
      output: ListAssociatedPackagesResult;
    };
    sdk: {
      input: ListAssociatedPackagesCommandInput;
      output: ListAssociatedPackagesCommandOutput;
    };
  };
}
