// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribeReservedNodeExchangeStatusInputMessage,
  DescribeReservedNodeExchangeStatusOutputMessage,
} from "../models/models_0";
import { DescribeReservedNodeExchangeStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeReservedNodeExchangeStatusCommand}.
 */
export interface DescribeReservedNodeExchangeStatusCommandInput extends DescribeReservedNodeExchangeStatusInputMessage {}
/**
 * @public
 *
 * The output of {@link DescribeReservedNodeExchangeStatusCommand}.
 */
export interface DescribeReservedNodeExchangeStatusCommandOutput extends DescribeReservedNodeExchangeStatusOutputMessage, __MetadataBearer {}

/**
 * <p>Returns exchange status details and associated metadata for a reserved-node
 *             exchange. Statuses include such values as in progress and requested.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeReservedNodeExchangeStatusCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeReservedNodeExchangeStatusCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
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
export class DescribeReservedNodeExchangeStatusCommand extends command<DescribeReservedNodeExchangeStatusCommandInput, DescribeReservedNodeExchangeStatusCommandOutput>(
  _ep0,
  _mw0,
  "DescribeReservedNodeExchangeStatus",
  DescribeReservedNodeExchangeStatus$
) {
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
