// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListDataProductRevisionsInput, ListDataProductRevisionsOutput } from "../models/models_1";
import { de_ListDataProductRevisionsCommand, se_ListDataProductRevisionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDataProductRevisionsCommand}.
 */
export interface ListDataProductRevisionsCommandInput extends ListDataProductRevisionsInput {}
/**
 * @public
 *
 * The output of {@link ListDataProductRevisionsCommand}.
 */
export interface ListDataProductRevisionsCommandOutput extends ListDataProductRevisionsOutput, __MetadataBearer {}

/**
 * <p>Lists data product revisions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, ListDataProductRevisionsCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, ListDataProductRevisionsCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // ListDataProductRevisionsInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListDataProductRevisionsCommand(input);
 * const response = await client.send(command);
 * // { // ListDataProductRevisionsOutput
 * //   items: [ // DataProductRevisions // required
 * //     { // DataProductRevision
 * //       domainId: "STRING_VALUE",
 * //       id: "STRING_VALUE",
 * //       revision: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       createdBy: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDataProductRevisionsCommandInput - {@link ListDataProductRevisionsCommandInput}
 * @returns {@link ListDataProductRevisionsCommandOutput}
 * @see {@link ListDataProductRevisionsCommandInput} for command's `input` shape.
 * @see {@link ListDataProductRevisionsCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the Amazon Web Services service.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link DataZoneServiceException}
 * <p>Base exception class for all service exceptions from DataZone service.</p>
 *
 *
 * @public
 */
export class ListDataProductRevisionsCommand extends $Command
  .classBuilder<
    ListDataProductRevisionsCommandInput,
    ListDataProductRevisionsCommandOutput,
    DataZoneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DataZoneClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DataZone", "ListDataProductRevisions", {})
  .n("DataZoneClient", "ListDataProductRevisionsCommand")
  .f(void 0, void 0)
  .ser(se_ListDataProductRevisionsCommand)
  .de(de_ListDataProductRevisionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDataProductRevisionsInput;
      output: ListDataProductRevisionsOutput;
    };
    sdk: {
      input: ListDataProductRevisionsCommandInput;
      output: ListDataProductRevisionsCommandOutput;
    };
  };
}
