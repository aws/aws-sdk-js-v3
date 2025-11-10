// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListContactEvaluationsRequest, ListContactEvaluationsResponse } from "../models/models_2";
import { ListContactEvaluations } from "../schemas/schemas_0";

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
 * //       CalibrationSessionId: "STRING_VALUE",
 * //       Status: "DRAFT" || "SUBMITTED", // required
 * //       AutoEvaluationEnabled: true || false,
 * //       AutoEvaluationStatus: "IN_PROGRESS" || "FAILED" || "SUCCEEDED",
 * //       EvaluatorArn: "STRING_VALUE", // required
 * //       Score: { // EvaluationScore
 * //         Percentage: Number("double"),
 * //         NotApplicable: true || false,
 * //         AutomaticFail: true || false,
 * //       },
 * //       Acknowledgement: { // EvaluationAcknowledgementSummary
 * //         AcknowledgedTime: new Date("TIMESTAMP"),
 * //         AcknowledgedBy: "STRING_VALUE",
 * //         AcknowledgerComment: "STRING_VALUE",
 * //       },
 * //       EvaluationType: "STANDARD" || "CALIBRATION",
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "ListContactEvaluations", {})
  .n("ConnectClient", "ListContactEvaluationsCommand")
  .sc(ListContactEvaluations)
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
