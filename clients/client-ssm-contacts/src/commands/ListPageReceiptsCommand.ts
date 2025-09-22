// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListPageReceiptsRequest, ListPageReceiptsResult } from "../models/models_0";
import { ListPageReceipts } from "../schemas/schemas_2_List";
import { ServiceInputTypes, ServiceOutputTypes, SSMContactsClientResolvedConfig } from "../SSMContactsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPageReceiptsCommand}.
 */
export interface ListPageReceiptsCommandInput extends ListPageReceiptsRequest {}
/**
 * @public
 *
 * The output of {@link ListPageReceiptsCommand}.
 */
export interface ListPageReceiptsCommandOutput extends ListPageReceiptsResult, __MetadataBearer {}

/**
 * <p>Lists all of the engagements to contact channels that have been acknowledged.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, ListPageReceiptsCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, ListPageReceiptsCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * // import type { SSMContactsClientConfig } from "@aws-sdk/client-ssm-contacts";
 * const config = {}; // type is SSMContactsClientConfig
 * const client = new SSMContactsClient(config);
 * const input = { // ListPageReceiptsRequest
 *   PageId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListPageReceiptsCommand(input);
 * const response = await client.send(command);
 * // { // ListPageReceiptsResult
 * //   NextToken: "STRING_VALUE",
 * //   Receipts: [ // ReceiptsList
 * //     { // Receipt
 * //       ContactChannelArn: "STRING_VALUE",
 * //       ReceiptType: "DELIVERED" || "ERROR" || "READ" || "SENT" || "STOP", // required
 * //       ReceiptInfo: "STRING_VALUE",
 * //       ReceiptTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListPageReceiptsCommandInput - {@link ListPageReceiptsCommandInput}
 * @returns {@link ListPageReceiptsCommandOutput}
 * @see {@link ListPageReceiptsCommandInput} for command's `input` shape.
 * @see {@link ListPageReceiptsCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for SSMContactsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource that doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *          service.</p>
 *
 * @throws {@link SSMContactsServiceException}
 * <p>Base exception class for all service exceptions from SSMContacts service.</p>
 *
 *
 * @public
 */
export class ListPageReceiptsCommand extends $Command
  .classBuilder<
    ListPageReceiptsCommandInput,
    ListPageReceiptsCommandOutput,
    SSMContactsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMContactsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SSMContacts", "ListPageReceipts", {})
  .n("SSMContactsClient", "ListPageReceiptsCommand")
  .sc(ListPageReceipts)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPageReceiptsRequest;
      output: ListPageReceiptsResult;
    };
    sdk: {
      input: ListPageReceiptsCommandInput;
      output: ListPageReceiptsCommandOutput;
    };
  };
}
