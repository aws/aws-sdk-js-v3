// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeReservedNodeExchangeStatusInputMessage,
  DescribeReservedNodeExchangeStatusOutputMessage,
} from "../models/models_1";
import {
  de_DescribeReservedNodeExchangeStatusCommand,
  se_DescribeReservedNodeExchangeStatusCommand,
} from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeReservedNodeExchangeStatusCommand}.
 */
export interface DescribeReservedNodeExchangeStatusCommandInput
  extends DescribeReservedNodeExchangeStatusInputMessage {}
/**
 * @public
 *
 * The output of {@link DescribeReservedNodeExchangeStatusCommand}.
 */
export interface DescribeReservedNodeExchangeStatusCommandOutput
  extends DescribeReservedNodeExchangeStatusOutputMessage,
    __MetadataBearer {}

/**
 * <p>Returns exchange status details and associated metadata for a reserved-node
 *             exchange. Statuses include such values as in progress and requested.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeReservedNodeExchangeStatusCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeReservedNodeExchangeStatusCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // DescribeReservedNodeExchangeStatusInputMessage
 *   ReservedNodeId: "STRING_VALUE",
 *   ReservedNodeExchangeRequestId: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeReservedNodeExchangeStatusCommand(input);
 * const response = await client.send(command);
 * // { // DescribeReservedNodeExchangeStatusOutputMessage
 * //   ReservedNodeExchangeStatusDetails: [ // ReservedNodeExchangeStatusList
 * //     { // ReservedNodeExchangeStatus
 * //       ReservedNodeExchangeRequestId: "STRING_VALUE",
 * //       Status: "REQUESTED" || "PENDING" || "IN_PROGRESS" || "RETRYING" || "SUCCEEDED" || "FAILED",
 * //       RequestTime: new Date("TIMESTAMP"),
 * //       SourceReservedNodeId: "STRING_VALUE",
 * //       SourceReservedNodeType: "STRING_VALUE",
 * //       SourceReservedNodeCount: Number("int"),
 * //       TargetReservedNodeOfferingId: "STRING_VALUE",
 * //       TargetReservedNodeType: "STRING_VALUE",
 * //       TargetReservedNodeCount: Number("int"),
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeReservedNodeExchangeStatusCommandInput - {@link DescribeReservedNodeExchangeStatusCommandInput}
 * @returns {@link DescribeReservedNodeExchangeStatusCommandOutput}
 * @see {@link DescribeReservedNodeExchangeStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeReservedNodeExchangeStatusCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ReservedNodeExchangeNotFoundFault} (client fault)
 *  <p>The reserved-node exchange status wasn't found.</p>
 *
 * @throws {@link ReservedNodeNotFoundFault} (client fault)
 *  <p>The specified reserved compute node not found.</p>
 *
 * @throws {@link UnsupportedOperationFault} (client fault)
 *  <p>The requested operation isn't supported.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 *
 * @public
 */
export class DescribeReservedNodeExchangeStatusCommand extends $Command
  .classBuilder<
    DescribeReservedNodeExchangeStatusCommandInput,
    DescribeReservedNodeExchangeStatusCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RedshiftServiceVersion20121201", "DescribeReservedNodeExchangeStatus", {})
  .n("RedshiftClient", "DescribeReservedNodeExchangeStatusCommand")
  .f(void 0, void 0)
  .ser(se_DescribeReservedNodeExchangeStatusCommand)
  .de(de_DescribeReservedNodeExchangeStatusCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeReservedNodeExchangeStatusInputMessage;
      output: DescribeReservedNodeExchangeStatusOutputMessage;
    };
    sdk: {
      input: DescribeReservedNodeExchangeStatusCommandInput;
      output: DescribeReservedNodeExchangeStatusCommandOutput;
    };
  };
}
