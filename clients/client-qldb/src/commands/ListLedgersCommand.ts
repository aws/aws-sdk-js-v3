// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListLedgersRequest, ListLedgersResponse } from "../models/models_0";
import { QLDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QLDBClient";
import { ListLedgers } from "../schemas/schemas_1_Ledger";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListLedgersCommand}.
 */
export interface ListLedgersCommandInput extends ListLedgersRequest {}
/**
 * @public
 *
 * The output of {@link ListLedgersCommand}.
 */
export interface ListLedgersCommandOutput extends ListLedgersResponse, __MetadataBearer {}

/**
 * <p>Returns all ledgers that are associated with the current Amazon Web Services account and
 *          Region.</p>
 *          <p>This action returns a maximum of <code>MaxResults</code> items and is paginated so that
 *          you can retrieve all the items by calling <code>ListLedgers</code> multiple times.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QLDBClient, ListLedgersCommand } from "@aws-sdk/client-qldb"; // ES Modules import
 * // const { QLDBClient, ListLedgersCommand } = require("@aws-sdk/client-qldb"); // CommonJS import
 * // import type { QLDBClientConfig } from "@aws-sdk/client-qldb";
 * const config = {}; // type is QLDBClientConfig
 * const client = new QLDBClient(config);
 * const input = { // ListLedgersRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListLedgersCommand(input);
 * const response = await client.send(command);
 * // { // ListLedgersResponse
 * //   Ledgers: [ // LedgerList
 * //     { // LedgerSummary
 * //       Name: "STRING_VALUE",
 * //       State: "CREATING" || "ACTIVE" || "DELETING" || "DELETED",
 * //       CreationDateTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLedgersCommandInput - {@link ListLedgersCommandInput}
 * @returns {@link ListLedgersCommandOutput}
 * @see {@link ListLedgersCommandInput} for command's `input` shape.
 * @see {@link ListLedgersCommandOutput} for command's `response` shape.
 * @see {@link QLDBClientResolvedConfig | config} for QLDBClient's `config` shape.
 *
 * @throws {@link QLDBServiceException}
 * <p>Base exception class for all service exceptions from QLDB service.</p>
 *
 *
 * @public
 */
export class ListLedgersCommand extends $Command
  .classBuilder<
    ListLedgersCommandInput,
    ListLedgersCommandOutput,
    QLDBClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QLDBClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonQLDB", "ListLedgers", {})
  .n("QLDBClient", "ListLedgersCommand")
  .sc(ListLedgers)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListLedgersRequest;
      output: ListLedgersResponse;
    };
    sdk: {
      input: ListLedgersCommandInput;
      output: ListLedgersCommandOutput;
    };
  };
}
