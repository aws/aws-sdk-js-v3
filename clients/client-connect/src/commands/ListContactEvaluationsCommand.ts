// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListContactEvaluationsRequest, ListContactEvaluationsResponse } from "../models/models_1";
import { de_ListContactEvaluationsCommand, se_ListContactEvaluationsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListContactEvaluationsCommand}.
 */
export interface ListContactEvaluationsCommandInput extends ListContactEvaluationsRequest {}
/**
 * @public
 *
 * The output of {@link ListContactEvaluationsCommand}.
 */
export interface ListContactEvaluationsCommandOutput extends ListContactEvaluationsResponse, __MetadataBearer {}

/**
 * <p>Lists contact evaluations in the specified Amazon Connect instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListContactEvaluationsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListContactEvaluationsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // ListContactEvaluationsRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ContactId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListContactEvaluationsCommand(input);
 * const response = await client.send(command);
 * // { // ListContactEvaluationsResponse
 * //   EvaluationSummaryList: [ // EvaluationSummaryList // required
 * //     { // EvaluationSummary
 * //       EvaluationId: "STRING_VALUE", // required
 * //       EvaluationArn: "STRING_VALUE", // required
 * //       EvaluationFormTitle: "STRING_VALUE", // required
 * //       EvaluationFormId: "STRING_VALUE", // required
 * //       Status: "DRAFT" || "SUBMITTED", // required
 * //       EvaluatorArn: "STRING_VALUE", // required
 * //       Score: { // EvaluationScore
 * //         Percentage: Number("double"),
 * //         NotApplicable: true || false,
 * //         AutomaticFail: true || false,
 * //       },
 * //       CreatedTime: new Date("TIMESTAMP"), // required
 * //       LastModifiedTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListContactEvaluationsCommandInput - {@link ListContactEvaluationsCommandInput}
 * @returns {@link ListContactEvaluationsCommandOutput}
 * @see {@link ListContactEvaluationsCommandInput} for command's `input` shape.
 * @see {@link ListContactEvaluationsCommandOutput} for command's `response` shape.
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
export class ListContactEvaluationsCommand extends $Command
  .classBuilder<
    ListContactEvaluationsCommandInput,
    ListContactEvaluationsCommandOutput,
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
  .s("AmazonConnectService", "ListContactEvaluations", {})
  .n("ConnectClient", "ListContactEvaluationsCommand")
  .f(void 0, void 0)
  .ser(se_ListContactEvaluationsCommand)
  .de(de_ListContactEvaluationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListContactEvaluationsRequest;
      output: ListContactEvaluationsResponse;
    };
    sdk: {
      input: ListContactEvaluationsCommandInput;
      output: ListContactEvaluationsCommandOutput;
    };
  };
}
