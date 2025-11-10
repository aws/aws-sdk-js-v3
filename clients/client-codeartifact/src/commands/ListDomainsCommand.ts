// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListDomainsRequest, ListDomainsResult } from "../models/models_0";
import { ListDomains } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDomainsCommand}.
 */
export interface ListDomainsCommandInput extends ListDomainsRequest {}
/**
 * @public
 *
 * The output of {@link ListDomainsCommand}.
 */
export interface ListDomainsCommandOutput extends ListDomainsResult, __MetadataBearer {}

/**
 * <p> Returns a list of <a href="https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_PackageVersionDescription.html">DomainSummary</a> objects for all domains owned by the Amazon Web Services account that makes
 *       this call. Each returned <code>DomainSummary</code> object contains information about a
 *       domain. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, ListDomainsCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, ListDomainsCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * // import type { CodeartifactClientConfig } from "@aws-sdk/client-codeartifact";
 * const config = {}; // type is CodeartifactClientConfig
 * const client = new CodeartifactClient(config);
 * const input = { // ListDomainsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListDomainsCommand(input);
 * const response = await client.send(command);
 * // { // ListDomainsResult
 * //   domains: [ // DomainSummaryList
 * //     { // DomainSummary
 * //       name: "STRING_VALUE",
 * //       owner: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       status: "Active" || "Deleted",
 * //       createdTime: new Date("TIMESTAMP"),
 * //       encryptionKey: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDomainsCommandInput - {@link ListDomainsCommandInput}
 * @returns {@link ListDomainsCommandOutput}
 * @see {@link ListDomainsCommandInput} for command's `input` shape.
 * @see {@link ListDomainsCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class ListDomainsCommand extends $Command
  .classBuilder<
    ListDomainsCommandInput,
    ListDomainsCommandOutput,
    CodeartifactClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CodeartifactClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CodeArtifactControlPlaneService", "ListDomains", {})
  .n("CodeartifactClient", "ListDomainsCommand")
  .sc(ListDomains)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDomainsRequest;
      output: ListDomainsResult;
    };
    sdk: {
      input: ListDomainsCommandInput;
      output: ListDomainsCommandOutput;
    };
  };
}
