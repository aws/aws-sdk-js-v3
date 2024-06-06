// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataExchangeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataExchangeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListDataSetRevisionsRequest, ListDataSetRevisionsResponse } from "../models/models_0";
import { de_ListDataSetRevisionsCommand, se_ListDataSetRevisionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDataSetRevisionsCommand}.
 */
export interface ListDataSetRevisionsCommandInput extends ListDataSetRevisionsRequest {}
/**
 * @public
 *
 * The output of {@link ListDataSetRevisionsCommand}.
 */
export interface ListDataSetRevisionsCommandOutput extends ListDataSetRevisionsResponse, __MetadataBearer {}

/**
 * <p>This operation lists a data set's revisions sorted by CreatedAt in descending order.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataExchangeClient, ListDataSetRevisionsCommand } from "@aws-sdk/client-dataexchange"; // ES Modules import
 * // const { DataExchangeClient, ListDataSetRevisionsCommand } = require("@aws-sdk/client-dataexchange"); // CommonJS import
 * const client = new DataExchangeClient(config);
 * const input = { // ListDataSetRevisionsRequest
 *   DataSetId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListDataSetRevisionsCommand(input);
 * const response = await client.send(command);
 * // { // ListDataSetRevisionsResponse
 * //   NextToken: "STRING_VALUE",
 * //   Revisions: [ // ListOfRevisionEntry
 * //     { // RevisionEntry
 * //       Arn: "STRING_VALUE", // required
 * //       Comment: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"), // required
 * //       DataSetId: "STRING_VALUE", // required
 * //       Finalized: true || false,
 * //       Id: "STRING_VALUE", // required
 * //       SourceId: "STRING_VALUE",
 * //       UpdatedAt: new Date("TIMESTAMP"), // required
 * //       RevocationComment: "STRING_VALUE",
 * //       Revoked: true || false,
 * //       RevokedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListDataSetRevisionsCommandInput - {@link ListDataSetRevisionsCommandInput}
 * @returns {@link ListDataSetRevisionsCommandOutput}
 * @see {@link ListDataSetRevisionsCommandInput} for command's `input` shape.
 * @see {@link ListDataSetRevisionsCommandOutput} for command's `response` shape.
 * @see {@link DataExchangeClientResolvedConfig | config} for DataExchangeClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An exception occurred with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource couldn't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request was invalid.</p>
 *
 * @throws {@link DataExchangeServiceException}
 * <p>Base exception class for all service exceptions from DataExchange service.</p>
 *
 * @public
 */
export class ListDataSetRevisionsCommand extends $Command
  .classBuilder<
    ListDataSetRevisionsCommandInput,
    ListDataSetRevisionsCommandOutput,
    DataExchangeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DataExchangeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DataExchange", "ListDataSetRevisions", {})
  .n("DataExchangeClient", "ListDataSetRevisionsCommand")
  .f(void 0, void 0)
  .ser(se_ListDataSetRevisionsCommand)
  .de(de_ListDataSetRevisionsCommand)
  .build() {}
