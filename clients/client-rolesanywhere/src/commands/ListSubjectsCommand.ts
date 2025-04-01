// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListRequest, ListSubjectsResponse } from "../models/models_0";
import { de_ListSubjectsCommand, se_ListSubjectsCommand } from "../protocols/Aws_restJson1";
import { RolesAnywhereClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RolesAnywhereClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSubjectsCommand}.
 */
export interface ListSubjectsCommandInput extends ListRequest {}
/**
 * @public
 *
 * The output of {@link ListSubjectsCommand}.
 */
export interface ListSubjectsCommandOutput extends ListSubjectsResponse, __MetadataBearer {}

/**
 * <p>Lists the subjects in the authenticated account and Amazon Web Services Region.</p>
 *          <p>
 *             <b>Required permissions: </b>
 *             <code>rolesanywhere:ListSubjects</code>.
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RolesAnywhereClient, ListSubjectsCommand } from "@aws-sdk/client-rolesanywhere"; // ES Modules import
 * // const { RolesAnywhereClient, ListSubjectsCommand } = require("@aws-sdk/client-rolesanywhere"); // CommonJS import
 * const client = new RolesAnywhereClient(config);
 * const input = { // ListRequest
 *   nextToken: "STRING_VALUE",
 *   pageSize: Number("int"),
 * };
 * const command = new ListSubjectsCommand(input);
 * const response = await client.send(command);
 * // { // ListSubjectsResponse
 * //   subjects: [ // SubjectSummaries
 * //     { // SubjectSummary
 * //       subjectArn: "STRING_VALUE",
 * //       subjectId: "STRING_VALUE",
 * //       enabled: true || false,
 * //       x509Subject: "STRING_VALUE",
 * //       lastSeenAt: new Date("TIMESTAMP"),
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSubjectsCommandInput - {@link ListSubjectsCommandInput}
 * @returns {@link ListSubjectsCommandOutput}
 * @see {@link ListSubjectsCommandInput} for command's `input` shape.
 * @see {@link ListSubjectsCommandOutput} for command's `response` shape.
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
export class ListSubjectsCommand extends $Command
  .classBuilder<
    ListSubjectsCommandInput,
    ListSubjectsCommandOutput,
    RolesAnywhereClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RolesAnywhereClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RolesAnywhere", "ListSubjects", {})
  .n("RolesAnywhereClient", "ListSubjectsCommand")
  .f(void 0, void 0)
  .ser(se_ListSubjectsCommand)
  .de(de_ListSubjectsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRequest;
      output: ListSubjectsResponse;
    };
    sdk: {
      input: ListSubjectsCommandInput;
      output: ListSubjectsCommandOutput;
    };
  };
}
