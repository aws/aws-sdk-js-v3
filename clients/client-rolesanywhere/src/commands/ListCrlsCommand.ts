// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListCrlsResponse, ListRequest } from "../models/models_0";
import { RolesAnywhereClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RolesAnywhereClient";
import { ListCrls } from "../schemas/schemas_6_Crl";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCrlsCommand}.
 */
export interface ListCrlsCommandInput extends ListRequest {}
/**
 * @public
 *
 * The output of {@link ListCrlsCommand}.
 */
export interface ListCrlsCommandOutput extends ListCrlsResponse, __MetadataBearer {}

/**
 * <p>Lists all certificate revocation lists (CRL) in the authenticated account and Amazon Web Services Region.</p>
 *          <p>
 *             <b>Required permissions: </b>
 *             <code>rolesanywhere:ListCrls</code>.
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RolesAnywhereClient, ListCrlsCommand } from "@aws-sdk/client-rolesanywhere"; // ES Modules import
 * // const { RolesAnywhereClient, ListCrlsCommand } = require("@aws-sdk/client-rolesanywhere"); // CommonJS import
 * // import type { RolesAnywhereClientConfig } from "@aws-sdk/client-rolesanywhere";
 * const config = {}; // type is RolesAnywhereClientConfig
 * const client = new RolesAnywhereClient(config);
 * const input = { // ListRequest
 *   nextToken: "STRING_VALUE",
 *   pageSize: Number("int"),
 * };
 * const command = new ListCrlsCommand(input);
 * const response = await client.send(command);
 * // { // ListCrlsResponse
 * //   nextToken: "STRING_VALUE",
 * //   crls: [ // CrlDetails
 * //     { // CrlDetail
 * //       crlId: "STRING_VALUE",
 * //       crlArn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       enabled: true || false,
 * //       crlData: new Uint8Array(),
 * //       trustAnchorArn: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListCrlsCommandInput - {@link ListCrlsCommandInput}
 * @returns {@link ListCrlsCommandOutput}
 * @see {@link ListCrlsCommandInput} for command's `input` shape.
 * @see {@link ListCrlsCommandOutput} for command's `response` shape.
 * @see {@link RolesAnywhereClientResolvedConfig | config} for RolesAnywhereClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validation exception error.</p>
 *
 * @throws {@link RolesAnywhereServiceException}
 * <p>Base exception class for all service exceptions from RolesAnywhere service.</p>
 *
 *
 * @public
 */
export class ListCrlsCommand extends $Command
  .classBuilder<
    ListCrlsCommandInput,
    ListCrlsCommandOutput,
    RolesAnywhereClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RolesAnywhereClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RolesAnywhere", "ListCrls", {})
  .n("RolesAnywhereClient", "ListCrlsCommand")
  .sc(ListCrls)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRequest;
      output: ListCrlsResponse;
    };
    sdk: {
      input: ListCrlsCommandInput;
      output: ListCrlsCommandOutput;
    };
  };
}
