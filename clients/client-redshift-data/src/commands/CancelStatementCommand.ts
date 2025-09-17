// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CancelStatementRequest, CancelStatementResponse } from "../models/models_0";
import { de_CancelStatementCommand, se_CancelStatementCommand } from "../protocols/Aws_json1_1";
import { RedshiftDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftDataClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelStatementCommand}.
 */
export interface CancelStatementCommandInput extends CancelStatementRequest {}
/**
 * @public
 *
 * The output of {@link CancelStatementCommand}.
 */
export interface CancelStatementCommandOutput extends CancelStatementResponse, __MetadataBearer {}

/**
 * <p>Cancels a running query. To be canceled, a query must be running. </p>
 *          <p>For more information about the Amazon Redshift Data API and CLI usage examples, see
 *        <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html">Using the Amazon Redshift Data API</a> in the
 *        <i>Amazon Redshift Management Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftDataClient, CancelStatementCommand } from "@aws-sdk/client-redshift-data"; // ES Modules import
 * // const { RedshiftDataClient, CancelStatementCommand } = require("@aws-sdk/client-redshift-data"); // CommonJS import
 * // import type { RedshiftDataClientConfig } from "@aws-sdk/client-redshift-data";
 * const config = {}; // type is RedshiftDataClientConfig
 * const client = new RedshiftDataClient(config);
 * const input = { // CancelStatementRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new CancelStatementCommand(input);
 * const response = await client.send(command);
 * // { // CancelStatementResponse
 * //   Status: true || false,
 * // };
 *
 * ```
 *
 * @param CancelStatementCommandInput - {@link CancelStatementCommandInput}
 * @returns {@link CancelStatementCommandOutput}
 * @see {@link CancelStatementCommandInput} for command's `input` shape.
 * @see {@link CancelStatementCommandOutput} for command's `response` shape.
 * @see {@link RedshiftDataClientResolvedConfig | config} for RedshiftDataClient's `config` shape.
 *
 * @throws {@link DatabaseConnectionException} (server fault)
 *  <p>Connection to a database failed.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The Amazon Redshift Data API operation failed due to invalid input. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The Amazon Redshift Data API operation failed due to a missing resource. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The Amazon Redshift Data API operation failed due to invalid input. </p>
 *
 * @throws {@link RedshiftDataServiceException}
 * <p>Base exception class for all service exceptions from RedshiftData service.</p>
 *
 *
 * @public
 */
export class CancelStatementCommand extends $Command
  .classBuilder<
    CancelStatementCommandInput,
    CancelStatementCommandOutput,
    RedshiftDataClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftDataClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RedshiftData", "CancelStatement", {})
  .n("RedshiftDataClient", "CancelStatementCommand")
  .f(void 0, void 0)
  .ser(se_CancelStatementCommand)
  .de(de_CancelStatementCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelStatementRequest;
      output: CancelStatementResponse;
    };
    sdk: {
      input: CancelStatementCommandInput;
      output: CancelStatementCommandOutput;
    };
  };
}
