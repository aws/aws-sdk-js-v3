// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListApplicationAccessScopesRequest, ListApplicationAccessScopesResponse } from "../models/models_0";
import { ListApplicationAccessScopes } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListApplicationAccessScopesCommand}.
 */
export interface ListApplicationAccessScopesCommandInput extends ListApplicationAccessScopesRequest {}
/**
 * @public
 *
 * The output of {@link ListApplicationAccessScopesCommand}.
 */
export interface ListApplicationAccessScopesCommandOutput
  extends ListApplicationAccessScopesResponse,
    __MetadataBearer {}

/**
 * <p>Lists the access scopes and authorized targets associated with an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, ListApplicationAccessScopesCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, ListApplicationAccessScopesCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * // import type { SSOAdminClientConfig } from "@aws-sdk/client-sso-admin";
 * const config = {}; // type is SSOAdminClientConfig
 * const client = new SSOAdminClient(config);
 * const input = { // ListApplicationAccessScopesRequest
 *   ApplicationArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListApplicationAccessScopesCommand(input);
 * const response = await client.send(command);
 * // { // ListApplicationAccessScopesResponse
 * //   Scopes: [ // Scopes // required
 * //     { // ScopeDetails
 * //       Scope: "STRING_VALUE", // required
 * //       AuthorizedTargets: [ // ScopeTargets
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListApplicationAccessScopesCommandInput - {@link ListApplicationAccessScopesCommandInput}
 * @returns {@link ListApplicationAccessScopesCommandOutput}
 * @see {@link ListApplicationAccessScopesCommandInput} for command's `input` shape.
 * @see {@link ListApplicationAccessScopesCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for SSOAdminClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure with an internal server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Indicates that a requested resource is not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Indicates that the principal has crossed the throttling limits of the API operations.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed because it contains a syntax error.</p>
 *
 * @throws {@link SSOAdminServiceException}
 * <p>Base exception class for all service exceptions from SSOAdmin service.</p>
 *
 *
 * @public
 */
export class ListApplicationAccessScopesCommand extends $Command
  .classBuilder<
    ListApplicationAccessScopesCommandInput,
    ListApplicationAccessScopesCommandOutput,
    SSOAdminClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSOAdminClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SWBExternalService", "ListApplicationAccessScopes", {})
  .n("SSOAdminClient", "ListApplicationAccessScopesCommand")
  .sc(ListApplicationAccessScopes)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListApplicationAccessScopesRequest;
      output: ListApplicationAccessScopesResponse;
    };
    sdk: {
      input: ListApplicationAccessScopesCommandInput;
      output: ListApplicationAccessScopesCommandOutput;
    };
  };
}
