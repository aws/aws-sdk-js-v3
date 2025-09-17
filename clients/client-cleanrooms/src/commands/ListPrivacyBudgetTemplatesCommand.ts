// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListPrivacyBudgetTemplatesInput, ListPrivacyBudgetTemplatesOutput } from "../models/models_1";
import { de_ListPrivacyBudgetTemplatesCommand, se_ListPrivacyBudgetTemplatesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPrivacyBudgetTemplatesCommand}.
 */
export interface ListPrivacyBudgetTemplatesCommandInput extends ListPrivacyBudgetTemplatesInput {}
/**
 * @public
 *
 * The output of {@link ListPrivacyBudgetTemplatesCommand}.
 */
export interface ListPrivacyBudgetTemplatesCommandOutput extends ListPrivacyBudgetTemplatesOutput, __MetadataBearer {}

/**
 * <p>Returns detailed information about the privacy budget templates in a specified membership.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, ListPrivacyBudgetTemplatesCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, ListPrivacyBudgetTemplatesCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // ListPrivacyBudgetTemplatesInput
 *   membershipIdentifier: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListPrivacyBudgetTemplatesCommand(input);
 * const response = await client.send(command);
 * // { // ListPrivacyBudgetTemplatesOutput
 * //   nextToken: "STRING_VALUE",
 * //   privacyBudgetTemplateSummaries: [ // PrivacyBudgetTemplateSummaryList // required
 * //     { // PrivacyBudgetTemplateSummary
 * //       id: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       membershipId: "STRING_VALUE", // required
 * //       membershipArn: "STRING_VALUE", // required
 * //       collaborationId: "STRING_VALUE", // required
 * //       collaborationArn: "STRING_VALUE", // required
 * //       privacyBudgetType: "DIFFERENTIAL_PRIVACY", // required
 * //       createTime: new Date("TIMESTAMP"), // required
 * //       updateTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListPrivacyBudgetTemplatesCommandInput - {@link ListPrivacyBudgetTemplatesCommandInput}
 * @returns {@link ListPrivacyBudgetTemplatesCommandOutput}
 * @see {@link ListPrivacyBudgetTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListPrivacyBudgetTemplatesCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Caller does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the specified constraints.</p>
 *
 * @throws {@link CleanRoomsServiceException}
 * <p>Base exception class for all service exceptions from CleanRooms service.</p>
 *
 *
 * @public
 */
export class ListPrivacyBudgetTemplatesCommand extends $Command
  .classBuilder<
    ListPrivacyBudgetTemplatesCommandInput,
    ListPrivacyBudgetTemplatesCommandOutput,
    CleanRoomsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSBastionControlPlaneServiceLambda", "ListPrivacyBudgetTemplates", {})
  .n("CleanRoomsClient", "ListPrivacyBudgetTemplatesCommand")
  .f(void 0, void 0)
  .ser(se_ListPrivacyBudgetTemplatesCommand)
  .de(de_ListPrivacyBudgetTemplatesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPrivacyBudgetTemplatesInput;
      output: ListPrivacyBudgetTemplatesOutput;
    };
    sdk: {
      input: ListPrivacyBudgetTemplatesCommandInput;
      output: ListPrivacyBudgetTemplatesCommandOutput;
    };
  };
}
