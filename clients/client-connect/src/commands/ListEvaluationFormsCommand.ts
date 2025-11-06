// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListEvaluationFormsRequest, ListEvaluationFormsResponse } from "../models/models_2";
import { de_ListEvaluationFormsCommand, se_ListEvaluationFormsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEvaluationFormsCommand}.
 */
export interface ListEvaluationFormsCommandInput extends ListEvaluationFormsRequest {}
/**
 * @public
 *
 * The output of {@link ListEvaluationFormsCommand}.
 */
export interface ListEvaluationFormsCommandOutput extends ListEvaluationFormsResponse, __MetadataBearer {}

/**
 * <p>Lists evaluation forms in the specified Amazon Connect instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListEvaluationFormsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListEvaluationFormsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // ListEvaluationFormsRequest
 *   InstanceId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListEvaluationFormsCommand(input);
 * const response = await client.send(command);
 * // { // ListEvaluationFormsResponse
 * //   EvaluationFormSummaryList: [ // EvaluationFormSummaryList // required
 * //     { // EvaluationFormSummary
 * //       EvaluationFormId: "STRING_VALUE", // required
 * //       EvaluationFormArn: "STRING_VALUE", // required
 * //       Title: "STRING_VALUE", // required
 * //       CreatedTime: new Date("TIMESTAMP"), // required
 * //       CreatedBy: "STRING_VALUE", // required
 * //       LastModifiedTime: new Date("TIMESTAMP"), // required
 * //       LastModifiedBy: "STRING_VALUE", // required
 * //       LastActivatedTime: new Date("TIMESTAMP"),
 * //       LastActivatedBy: "STRING_VALUE",
 * //       LatestVersion: Number("int"), // required
 * //       ActiveVersion: Number("int"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEvaluationFormsCommandInput - {@link ListEvaluationFormsCommandInput}
 * @returns {@link ListEvaluationFormsCommandOutput}
 * @see {@link ListEvaluationFormsCommandInput} for command's `input` shape.
 * @see {@link ListEvaluationFormsCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class ListEvaluationFormsCommand extends $Command
  .classBuilder<
    ListEvaluationFormsCommandInput,
    ListEvaluationFormsCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "ListEvaluationForms", {})
  .n("ConnectClient", "ListEvaluationFormsCommand")
  .f(void 0, void 0)
  .ser(se_ListEvaluationFormsCommand)
  .de(de_ListEvaluationFormsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEvaluationFormsRequest;
      output: ListEvaluationFormsResponse;
    };
    sdk: {
      input: ListEvaluationFormsCommandInput;
      output: ListEvaluationFormsCommandOutput;
    };
  };
}
