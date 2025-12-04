// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListPermissionSetsRequest, ListPermissionSetsResponse } from "../models/models_0";
import { ListPermissionSets } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SSOAdminClientResolvedConfig } from "../SSOAdminClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPermissionSetsCommand}.
 */
export interface ListPermissionSetsCommandInput extends ListPermissionSetsRequest {}
/**
 * @public
 *
 * The output of {@link ListPermissionSetsCommand}.
 */
export interface ListPermissionSetsCommandOutput extends ListPermissionSetsResponse, __MetadataBearer {}

/**
 * <p>Lists the <a>PermissionSet</a>s in an IAM Identity Center instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, ListPermissionSetsCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, ListPermissionSetsCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * // import type { SSOAdminClientConfig } from "@aws-sdk/client-sso-admin";
 * const config = {}; // type is SSOAdminClientConfig
 * const client = new SSOAdminClient(config);
 * const input = { // ListPermissionSetsRequest
 *   InstanceArn: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListPermissionSetsCommand(input);
 * const response = await client.send(command);
 * // { // ListPermissionSetsResponse
 * //   PermissionSets: [ // PermissionSetList
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPermissionSetsCommandInput - {@link ListPermissionSetsCommandInput}
 * @returns {@link ListPermissionSetsCommandOutput}
 * @see {@link ListPermissionSetsCommandInput} for command's `input` shape.
 * @see {@link ListPermissionSetsCommandOutput} for command's `response` shape.
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
export class ListPermissionSetsCommand extends $Command
  .classBuilder<
    ListPermissionSetsCommandInput,
    ListPermissionSetsCommandOutput,
    SSOAdminClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSOAdminClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SWBExternalService", "ListPermissionSets", {})
  .n("SSOAdminClient", "ListPermissionSetsCommand")
  .sc(ListPermissionSets)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPermissionSetsRequest;
      output: ListPermissionSetsResponse;
    };
    sdk: {
      input: ListPermissionSetsCommandInput;
      output: ListPermissionSetsCommandOutput;
    };
  };
}
