// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  KinesisAnalyticsV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../KinesisAnalyticsV2Client";
import { ListApplicationOperationsRequest, ListApplicationOperationsResponse } from "../models/models_0";
import { de_ListApplicationOperationsCommand, se_ListApplicationOperationsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListApplicationOperationsCommand}.
 */
export interface ListApplicationOperationsCommandInput extends ListApplicationOperationsRequest {}
/**
 * @public
 *
 * The output of {@link ListApplicationOperationsCommand}.
 */
export interface ListApplicationOperationsCommandOutput extends ListApplicationOperationsResponse, __MetadataBearer {}

/**
 * Lists information about operations performed on a Managed Service for Apache Flink application
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, ListApplicationOperationsCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, ListApplicationOperationsCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * const client = new KinesisAnalyticsV2Client(config);
 * const input = { // ListApplicationOperationsRequest
 *   ApplicationName: "STRING_VALUE", // required
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Operation: "STRING_VALUE",
 *   OperationStatus: "IN_PROGRESS" || "CANCELLED" || "SUCCESSFUL" || "FAILED",
 * };
 * const command = new ListApplicationOperationsCommand(input);
 * const response = await client.send(command);
 * // { // ListApplicationOperationsResponse
 * //   ApplicationOperationInfoList: [ // ApplicationOperationInfoList
 * //     { // ApplicationOperationInfo
 * //       Operation: "STRING_VALUE",
 * //       OperationId: "STRING_VALUE",
 * //       StartTime: new Date("TIMESTAMP"),
 * //       EndTime: new Date("TIMESTAMP"),
 * //       OperationStatus: "IN_PROGRESS" || "CANCELLED" || "SUCCESSFUL" || "FAILED",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListApplicationOperationsCommandInput - {@link ListApplicationOperationsCommandInput}
 * @returns {@link ListApplicationOperationsCommandOutput}
 * @see {@link ListApplicationOperationsCommandInput} for command's `input` shape.
 * @see {@link ListApplicationOperationsCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for KinesisAnalyticsV2Client's `config` shape.
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>The specified input parameter value is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Specified application can't be found.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>The request was rejected because a specified parameter is not supported or a specified resource is not valid for this
 *       operation. </p>
 *
 * @throws {@link KinesisAnalyticsV2ServiceException}
 * <p>Base exception class for all service exceptions from KinesisAnalyticsV2 service.</p>
 *
 * @public
 */
export class ListApplicationOperationsCommand extends $Command
  .classBuilder<
    ListApplicationOperationsCommandInput,
    ListApplicationOperationsCommandOutput,
    KinesisAnalyticsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: KinesisAnalyticsV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("KinesisAnalytics_20180523", "ListApplicationOperations", {})
  .n("KinesisAnalyticsV2Client", "ListApplicationOperationsCommand")
  .f(void 0, void 0)
  .ser(se_ListApplicationOperationsCommand)
  .de(de_ListApplicationOperationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListApplicationOperationsRequest;
      output: ListApplicationOperationsResponse;
    };
    sdk: {
      input: ListApplicationOperationsCommandInput;
      output: ListApplicationOperationsCommandOutput;
    };
  };
}
