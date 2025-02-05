// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeTableRestoreStatusMessage, TableRestoreStatusMessage } from "../models/models_1";
import { de_DescribeTableRestoreStatusCommand, se_DescribeTableRestoreStatusCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeTableRestoreStatusCommand}.
 */
export interface DescribeTableRestoreStatusCommandInput extends DescribeTableRestoreStatusMessage {}
/**
 * @public
 *
 * The output of {@link DescribeTableRestoreStatusCommand}.
 */
export interface DescribeTableRestoreStatusCommandOutput extends TableRestoreStatusMessage, __MetadataBearer {}

/**
 * <p>Lists the status of one or more table restore requests made using the <a>RestoreTableFromClusterSnapshot</a> API action. If you don't specify a value
 *             for the <code>TableRestoreRequestId</code> parameter, then
 *                 <code>DescribeTableRestoreStatus</code> returns the status of all table restore
 *             requests ordered by the date and time of the request in ascending order. Otherwise
 *                 <code>DescribeTableRestoreStatus</code> returns the status of the table specified by
 *                 <code>TableRestoreRequestId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeTableRestoreStatusCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeTableRestoreStatusCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new RedshiftClient(config);
 * const input = { // DescribeTableRestoreStatusMessage
 *   ClusterIdentifier: "STRING_VALUE",
 *   TableRestoreRequestId: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeTableRestoreStatusCommand(input);
 * const response = await client.send(command);
 * // { // TableRestoreStatusMessage
 * //   TableRestoreStatusDetails: [ // TableRestoreStatusList
 * //     { // TableRestoreStatus
 * //       TableRestoreRequestId: "STRING_VALUE",
 * //       Status: "PENDING" || "IN_PROGRESS" || "SUCCEEDED" || "FAILED" || "CANCELED",
 * //       Message: "STRING_VALUE",
 * //       RequestTime: new Date("TIMESTAMP"),
 * //       ProgressInMegaBytes: Number("long"),
 * //       TotalDataInMegaBytes: Number("long"),
 * //       ClusterIdentifier: "STRING_VALUE",
 * //       SnapshotIdentifier: "STRING_VALUE",
 * //       SourceDatabaseName: "STRING_VALUE",
 * //       SourceSchemaName: "STRING_VALUE",
 * //       SourceTableName: "STRING_VALUE",
 * //       TargetDatabaseName: "STRING_VALUE",
 * //       TargetSchemaName: "STRING_VALUE",
 * //       NewTableName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeTableRestoreStatusCommandInput - {@link DescribeTableRestoreStatusCommandInput}
 * @returns {@link DescribeTableRestoreStatusCommandOutput}
 * @see {@link DescribeTableRestoreStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeTableRestoreStatusCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ClusterNotFoundFault} (client fault)
 *  <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster.
 *         </p>
 *
 * @throws {@link TableRestoreNotFoundFault} (client fault)
 *  <p>The specified <code>TableRestoreRequestId</code> value was not found.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 * @public
 */
export class DescribeTableRestoreStatusCommand extends $Command
  .classBuilder<
    DescribeTableRestoreStatusCommandInput,
    DescribeTableRestoreStatusCommandOutput,
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
  .s("RedshiftServiceVersion20121201", "DescribeTableRestoreStatus", {})
  .n("RedshiftClient", "DescribeTableRestoreStatusCommand")
  .f(void 0, void 0)
  .ser(se_DescribeTableRestoreStatusCommand)
  .de(de_DescribeTableRestoreStatusCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTableRestoreStatusMessage;
      output: TableRestoreStatusMessage;
    };
    sdk: {
      input: DescribeTableRestoreStatusCommandInput;
      output: DescribeTableRestoreStatusCommandOutput;
    };
  };
}
