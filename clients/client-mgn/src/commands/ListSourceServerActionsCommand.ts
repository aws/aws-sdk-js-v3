// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import { ListSourceServerActionsRequest, ListSourceServerActionsResponse } from "../models/models_0";
import { de_ListSourceServerActionsCommand, se_ListSourceServerActionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSourceServerActionsCommand}.
 */
export interface ListSourceServerActionsCommandInput extends ListSourceServerActionsRequest {}
/**
 * @public
 *
 * The output of {@link ListSourceServerActionsCommand}.
 */
export interface ListSourceServerActionsCommandOutput extends ListSourceServerActionsResponse, __MetadataBearer {}

/**
 * <p>List source server post migration custom actions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, ListSourceServerActionsCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, ListSourceServerActionsCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const input = { // ListSourceServerActionsRequest
 *   sourceServerID: "STRING_VALUE", // required
 *   filters: { // SourceServerActionsRequestFilters
 *     actionIDs: [ // ActionIDs
 *       "STRING_VALUE",
 *     ],
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   accountID: "STRING_VALUE",
 * };
 * const command = new ListSourceServerActionsCommand(input);
 * const response = await client.send(command);
 * // { // ListSourceServerActionsResponse
 * //   items: [ // SourceServerActionDocuments
 * //     { // SourceServerActionDocument
 * //       actionID: "STRING_VALUE",
 * //       actionName: "STRING_VALUE",
 * //       documentIdentifier: "STRING_VALUE",
 * //       order: Number("int"),
 * //       documentVersion: "STRING_VALUE",
 * //       active: true || false,
 * //       timeoutSeconds: Number("int"),
 * //       mustSucceedForCutover: true || false,
 * //       parameters: { // SsmDocumentParameters
 * //         "<keys>": [ // SsmParameterStoreParameters
 * //           { // SsmParameterStoreParameter
 * //             parameterType: "STRING_VALUE", // required
 * //             parameterName: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //       externalParameters: { // SsmDocumentExternalParameters
 * //         "<keys>": { // SsmExternalParameter Union: only one key present
 * //           dynamicPath: "STRING_VALUE",
 * //         },
 * //       },
 * //       description: "STRING_VALUE",
 * //       category: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSourceServerActionsCommandInput - {@link ListSourceServerActionsCommandInput}
 * @returns {@link ListSourceServerActionsCommandOutput}
 * @see {@link ListSourceServerActionsCommandInput} for command's `input` shape.
 * @see {@link ListSourceServerActionsCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found exception.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>Uninitialized account exception.</p>
 *
 * @throws {@link MgnServiceException}
 * <p>Base exception class for all service exceptions from Mgn service.</p>
 *
 *
 * @public
 */
export class ListSourceServerActionsCommand extends $Command
  .classBuilder<
    ListSourceServerActionsCommandInput,
    ListSourceServerActionsCommandOutput,
    MgnClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MgnClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ApplicationMigrationService", "ListSourceServerActions", {})
  .n("MgnClient", "ListSourceServerActionsCommand")
  .f(void 0, void 0)
  .ser(se_ListSourceServerActionsCommand)
  .de(de_ListSourceServerActionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSourceServerActionsRequest;
      output: ListSourceServerActionsResponse;
    };
    sdk: {
      input: ListSourceServerActionsCommandInput;
      output: ListSourceServerActionsCommandOutput;
    };
  };
}
