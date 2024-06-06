// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import { ListTemplateActionsRequest, ListTemplateActionsResponse } from "../models/models_0";
import { de_ListTemplateActionsCommand, se_ListTemplateActionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTemplateActionsCommand}.
 */
export interface ListTemplateActionsCommandInput extends ListTemplateActionsRequest {}
/**
 * @public
 *
 * The output of {@link ListTemplateActionsCommand}.
 */
export interface ListTemplateActionsCommandOutput extends ListTemplateActionsResponse, __MetadataBearer {}

/**
 * <p>List template post migration custom actions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, ListTemplateActionsCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, ListTemplateActionsCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * const client = new MgnClient(config);
 * const input = { // ListTemplateActionsRequest
 *   launchConfigurationTemplateID: "STRING_VALUE", // required
 *   filters: { // TemplateActionsRequestFilters
 *     actionIDs: [ // ActionIDs
 *       "STRING_VALUE",
 *     ],
 *   },
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListTemplateActionsCommand(input);
 * const response = await client.send(command);
 * // { // ListTemplateActionsResponse
 * //   items: [ // TemplateActionDocuments
 * //     { // TemplateActionDocument
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
 * //       operatingSystem: "STRING_VALUE",
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
 * @param ListTemplateActionsCommandInput - {@link ListTemplateActionsCommandInput}
 * @returns {@link ListTemplateActionsCommandOutput}
 * @see {@link ListTemplateActionsCommandInput} for command's `input` shape.
 * @see {@link ListTemplateActionsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ListTemplateActionsCommand extends $Command
  .classBuilder<
    ListTemplateActionsCommandInput,
    ListTemplateActionsCommandOutput,
    MgnClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: MgnClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ApplicationMigrationService", "ListTemplateActions", {})
  .n("MgnClient", "ListTemplateActionsCommand")
  .f(void 0, void 0)
  .ser(se_ListTemplateActionsCommand)
  .de(de_ListTemplateActionsCommand)
  .build() {}
