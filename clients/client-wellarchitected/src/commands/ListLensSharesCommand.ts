// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListLensSharesInput, ListLensSharesOutput } from "../models/models_0";
import { de_ListLensSharesCommand, se_ListLensSharesCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListLensSharesCommand}.
 */
export interface ListLensSharesCommandInput extends ListLensSharesInput {}
/**
 * @public
 *
 * The output of {@link ListLensSharesCommand}.
 */
export interface ListLensSharesCommandOutput extends ListLensSharesOutput, __MetadataBearer {}

/**
 * <p>List the lens shares associated with the lens.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, ListLensSharesCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, ListLensSharesCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // ListLensSharesInput
 *   LensAlias: "STRING_VALUE", // required
 *   SharedWithPrefix: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Status: "ACCEPTED" || "REJECTED" || "PENDING" || "REVOKED" || "EXPIRED" || "ASSOCIATING" || "ASSOCIATED" || "FAILED",
 * };
 * const command = new ListLensSharesCommand(input);
 * const response = await client.send(command);
 * // { // ListLensSharesOutput
 * //   LensShareSummaries: [ // LensShareSummaries
 * //     { // LensShareSummary
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
 * @param ListLensSharesCommandInput - {@link ListLensSharesCommandInput}
 * @returns {@link ListLensSharesCommandOutput}
 * @see {@link ListLensSharesCommandInput} for command's `input` shape.
 * @see {@link ListLensSharesCommandOutput} for command's `response` shape.
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
export class ListLensSharesCommand extends $Command
  .classBuilder<
    ListLensSharesCommandInput,
    ListLensSharesCommandOutput,
    WellArchitectedClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WellArchitectedClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WellArchitectedApiServiceLambda", "ListLensShares", {})
  .n("WellArchitectedClient", "ListLensSharesCommand")
  .f(void 0, void 0)
  .ser(se_ListLensSharesCommand)
  .de(de_ListLensSharesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListLensSharesInput;
      output: ListLensSharesOutput;
    };
    sdk: {
      input: ListLensSharesCommandInput;
      output: ListLensSharesCommandOutput;
    };
  };
}
