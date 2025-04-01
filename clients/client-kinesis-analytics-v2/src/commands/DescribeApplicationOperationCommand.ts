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
import { DescribeApplicationOperationRequest, DescribeApplicationOperationResponse } from "../models/models_0";
import {
  de_DescribeApplicationOperationCommand,
  se_DescribeApplicationOperationCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeApplicationOperationCommand}.
 */
export interface DescribeApplicationOperationCommandInput extends DescribeApplicationOperationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeApplicationOperationCommand}.
 */
export interface DescribeApplicationOperationCommandOutput
  extends DescribeApplicationOperationResponse,
    __MetadataBearer {}

/**
 * Returns information about a specific operation performed on a Managed Service for Apache Flink application
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, DescribeApplicationOperationCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, DescribeApplicationOperationCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * const client = new KinesisAnalyticsV2Client(config);
 * const input = { // DescribeApplicationOperationRequest
 *   ApplicationName: "STRING_VALUE", // required
 *   OperationId: "STRING_VALUE", // required
 * };
 * const command = new DescribeApplicationOperationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeApplicationOperationResponse
 * //   ApplicationOperationInfoDetails: { // ApplicationOperationInfoDetails
 * //     Operation: "STRING_VALUE", // required
 * //     StartTime: new Date("TIMESTAMP"), // required
 * //     EndTime: new Date("TIMESTAMP"), // required
 * //     OperationStatus: "IN_PROGRESS" || "CANCELLED" || "SUCCESSFUL" || "FAILED", // required
 * //     ApplicationVersionChangeDetails: { // ApplicationVersionChangeDetails
 * //       ApplicationVersionUpdatedFrom: Number("long"), // required
 * //       ApplicationVersionUpdatedTo: Number("long"), // required
 * //     },
 * //     OperationFailureDetails: { // OperationFailureDetails
 * //       RollbackOperationId: "STRING_VALUE",
 * //       ErrorInfo: { // ErrorInfo
 * //         ErrorString: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeApplicationOperationCommandInput - {@link DescribeApplicationOperationCommandInput}
 * @returns {@link DescribeApplicationOperationCommandOutput}
 * @see {@link DescribeApplicationOperationCommandInput} for command's `input` shape.
 * @see {@link DescribeApplicationOperationCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class DescribeApplicationOperationCommand extends $Command
  .classBuilder<
    DescribeApplicationOperationCommandInput,
    DescribeApplicationOperationCommandOutput,
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
  .s("KinesisAnalytics_20180523", "DescribeApplicationOperation", {})
  .n("KinesisAnalyticsV2Client", "DescribeApplicationOperationCommand")
  .f(void 0, void 0)
  .ser(se_DescribeApplicationOperationCommand)
  .de(de_DescribeApplicationOperationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeApplicationOperationRequest;
      output: DescribeApplicationOperationResponse;
    };
    sdk: {
      input: DescribeApplicationOperationCommandInput;
      output: DescribeApplicationOperationCommandOutput;
    };
  };
}
