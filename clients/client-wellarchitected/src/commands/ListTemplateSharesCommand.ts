// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListTemplateSharesInput, ListTemplateSharesOutput } from "../models/models_0";
import { ListTemplateShares } from "../schemas/schemas_0";
import type {
  ServiceInputTypes,
  ServiceOutputTypes,
  WellArchitectedClientResolvedConfig,
} from "../WellArchitectedClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTemplateSharesCommand}.
 */
export interface ListTemplateSharesCommandInput extends ListTemplateSharesInput {}
/**
 * @public
 *
 * The output of {@link ListTemplateSharesCommand}.
 */
export interface ListTemplateSharesCommandOutput extends ListTemplateSharesOutput, __MetadataBearer {}

/**
 * <p>List review template shares.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, ListTemplateSharesCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, ListTemplateSharesCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // ListTemplateSharesInput
 *   TemplateArn: "STRING_VALUE", // required
 *   SharedWithPrefix: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Status: "ACCEPTED" || "REJECTED" || "PENDING" || "REVOKED" || "EXPIRED" || "ASSOCIATING" || "ASSOCIATED" || "FAILED",
 * };
 * const command = new ListTemplateSharesCommand(input);
 * const response = await client.send(command);
 * // { // ListTemplateSharesOutput
 * //   TemplateArn: "STRING_VALUE",
 * //   TemplateShareSummaries: [ // TemplateShareSummaries
 * //     { // TemplateShareSummary
 * //       ShareId: "STRING_VALUE",
 * //       SharedWith: "STRING_VALUE",
 * //       Status: "ACCEPTED" || "REJECTED" || "PENDING" || "REVOKED" || "EXPIRED" || "ASSOCIATING" || "ASSOCIATED" || "FAILED",
 * //       StatusMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTemplateSharesCommandInput - {@link ListTemplateSharesCommandInput}
 * @returns {@link ListTemplateSharesCommandOutput}
 * @see {@link ListTemplateSharesCommandInput} for command's `input` shape.
 * @see {@link ListTemplateSharesCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is a problem with the Well-Architected Tool API service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The user input is not valid.</p>
 *
 * @throws {@link WellArchitectedServiceException}
 * <p>Base exception class for all service exceptions from WellArchitected service.</p>
 *
 *
 * @public
 */
export class ListTemplateSharesCommand extends $Command
  .classBuilder<
    ListTemplateSharesCommandInput,
    ListTemplateSharesCommandOutput,
    WellArchitectedClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WellArchitectedClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WellArchitectedApiServiceLambda", "ListTemplateShares", {})
  .n("WellArchitectedClient", "ListTemplateSharesCommand")
  .sc(ListTemplateShares)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTemplateSharesInput;
      output: ListTemplateSharesOutput;
    };
    sdk: {
      input: ListTemplateSharesCommandInput;
      output: ListTemplateSharesCommandOutput;
    };
  };
}
