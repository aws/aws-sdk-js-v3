// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListActionsInput, ListActionsOutput } from "../models/models_0";
import { ListActions$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SupportAuthZClientResolvedConfig } from "../SupportAuthZClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListActionsCommand}.
 */
export interface ListActionsCommandInput extends ListActionsInput {}
/**
 * @public
 *
 * The output of {@link ListActionsCommand}.
 */
export interface ListActionsCommandOutput extends ListActionsOutput, __MetadataBearer {}

/**
 * <p>Lists available support actions for a specified AWS service. Use pagination to ensure that the operation returns quickly and successfully.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupportAuthZClient, ListActionsCommand } from "@aws-sdk/client-supportauthz"; // ES Modules import
 * // const { SupportAuthZClient, ListActionsCommand } = require("@aws-sdk/client-supportauthz"); // CommonJS import
 * // import type { SupportAuthZClientConfig } from "@aws-sdk/client-supportauthz";
 * const config = {}; // type is SupportAuthZClientConfig
 * const client = new SupportAuthZClient(config);
 * const input = { // ListActionsInput
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   service: "STRING_VALUE", // required
 * };
 * const command = new ListActionsCommand(input);
 * const response = await client.send(command);
 * // { // ListActionsOutput
 * //   actionSummaries: [ // ActionSummaries // required
 * //     { // ActionSummary
 * //       action: "STRING_VALUE", // required
 * //       service: "STRING_VALUE", // required
 * //       description: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListActionsCommandInput - {@link ListActionsCommandInput}
 * @returns {@link ListActionsCommandOutput}
 * @see {@link ListActionsCommandInput} for command's `input` shape.
 * @see {@link ListActionsCommandOutput} for command's `response` shape.
 * @see {@link SupportAuthZClientResolvedConfig | config} for SupportAuthZClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permissions to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred. Try again later.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request rate exceeded the allowed limit. Try again later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link SupportAuthZServiceException}
 * <p>Base exception class for all service exceptions from SupportAuthZ service.</p>
 *
 *
 * @public
 */
export class ListActionsCommand extends $Command
  .classBuilder<
    ListActionsCommandInput,
    ListActionsCommandOutput,
    SupportAuthZClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SupportAuthZClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SupportAuthZ", "ListActions", {})
  .n("SupportAuthZClient", "ListActionsCommand")
  .sc(ListActions$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListActionsInput;
      output: ListActionsOutput;
    };
    sdk: {
      input: ListActionsCommandInput;
      output: ListActionsCommandOutput;
    };
  };
}
