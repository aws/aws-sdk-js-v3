// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAssociatedPackagesRequest, ListAssociatedPackagesResult } from "../models/models_0";
import { ListAssociatedPackages$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns a list of packages associated with the requested package group. For information package group association and matching, see [Package group definition syntax and matching behavior](https://docs.aws.amazon.com/codeartifact/latest/ug/package-group-definition-syntax-matching-behavior.html) in the *CodeArtifact User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, ListAssociatedPackagesCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, ListAssociatedPackagesCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * // import type { CodeartifactClientConfig } from "@aws-sdk/client-codeartifact";
 * const config = {}; // type is CodeartifactClientConfig
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
 *
 * The operation did not succeed because of an unauthorized access attempt.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The operation did not succeed because of an error that occurred inside CodeArtifact.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The operation did not succeed because the resource requested is not found in the service.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The operation did not succeed because a parameter in the request was sent with an invalid value.
 *
 * @throws {@link CodeartifactServiceException}
 *
 * Base exception class for all service exceptions from Codeartifact service.
 *
 * @public
 */
export class ListAssociatedPackagesCommand extends command<ListAssociatedPackagesCommandInput, ListAssociatedPackagesCommandOutput>(
  _ep0,
  _mw0,
  "ListAssociatedPackages",
  ListAssociatedPackages$
) {
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
