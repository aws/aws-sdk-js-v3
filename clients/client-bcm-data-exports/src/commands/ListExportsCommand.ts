// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BCMDataExportsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BCMDataExportsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListExportsRequest, ListExportsResponse } from "../models/models_0";
import { de_ListExportsCommand, se_ListExportsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListExportsCommand}.
 */
export interface ListExportsCommandInput extends ListExportsRequest {}
/**
 * @public
 *
 * The output of {@link ListExportsCommand}.
 */
export interface ListExportsCommandOutput extends ListExportsResponse, __MetadataBearer {}

/**
 * <p>Lists all data export definitions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BCMDataExportsClient, ListExportsCommand } from "@aws-sdk/client-bcm-data-exports"; // ES Modules import
 * // const { BCMDataExportsClient, ListExportsCommand } = require("@aws-sdk/client-bcm-data-exports"); // CommonJS import
 * // import type { BCMDataExportsClientConfig } from "@aws-sdk/client-bcm-data-exports";
 * const config = {}; // type is BCMDataExportsClientConfig
 * const client = new BCMDataExportsClient(config);
 * const input = { // ListExportsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListExportsCommand(input);
 * const response = await client.send(command);
 * // { // ListExportsResponse
 * //   Exports: [ // ExportReferenceList
 * //     { // ExportReference
 * //       ExportArn: "STRING_VALUE", // required
 * //       ExportName: "STRING_VALUE", // required
 * //       ExportStatus: { // ExportStatus
 * //         StatusCode: "HEALTHY" || "UNHEALTHY",
 * //         StatusReason: "INSUFFICIENT_PERMISSION" || "BILL_OWNER_CHANGED" || "INTERNAL_FAILURE",
 * //         CreatedAt: new Date("TIMESTAMP"),
 * //         LastUpdatedAt: new Date("TIMESTAMP"),
 * //         LastRefreshedAt: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListExportsCommandInput - {@link ListExportsCommandInput}
 * @returns {@link ListExportsCommandOutput}
 * @see {@link ListExportsCommandInput} for command's `input` shape.
 * @see {@link ListExportsCommandOutput} for command's `response` shape.
 * @see {@link BCMDataExportsClientResolvedConfig | config} for BCMDataExportsClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An error on the server occurred during the processing of your request. Try again
 *       later.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *       service.</p>
 *
 * @throws {@link BCMDataExportsServiceException}
 * <p>Base exception class for all service exceptions from BCMDataExports service.</p>
 *
 *
 * @public
 */
export class ListExportsCommand extends $Command
  .classBuilder<
    ListExportsCommandInput,
    ListExportsCommandOutput,
    BCMDataExportsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BCMDataExportsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSBillingAndCostManagementDataExports", "ListExports", {})
  .n("BCMDataExportsClient", "ListExportsCommand")
  .f(void 0, void 0)
  .ser(se_ListExportsCommand)
  .de(de_ListExportsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListExportsRequest;
      output: ListExportsResponse;
    };
    sdk: {
      input: ListExportsCommandInput;
      output: ListExportsCommandOutput;
    };
  };
}
