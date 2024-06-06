// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeLoggingStatusMessage, LoggingStatus } from "../models/models_1";
import { de_DescribeLoggingStatusCommand, se_DescribeLoggingStatusCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeLoggingStatusCommand}.
 */
export interface DescribeLoggingStatusCommandInput extends DescribeLoggingStatusMessage {}
/**
 * @public
 *
 * The output of {@link DescribeLoggingStatusCommand}.
 */
export interface DescribeLoggingStatusCommandOutput extends LoggingStatus, __MetadataBearer {}

/**
 * <p>Describes whether information, such as queries and connection attempts, is being
 *             logged for the specified Amazon Redshift cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeLoggingStatusCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeLoggingStatusCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // DescribeLoggingStatusMessage
 *   ClusterIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DescribeLoggingStatusCommand(input);
 * const response = await client.send(command);
 * // { // LoggingStatus
 * //   LoggingEnabled: true || false,
 * //   BucketName: "STRING_VALUE",
 * //   S3KeyPrefix: "STRING_VALUE",
 * //   LastSuccessfulDeliveryTime: new Date("TIMESTAMP"),
 * //   LastFailureTime: new Date("TIMESTAMP"),
 * //   LastFailureMessage: "STRING_VALUE",
 * //   LogDestinationType: "s3" || "cloudwatch",
 * //   LogExports: [ // LogTypeList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeLoggingStatusCommandInput - {@link DescribeLoggingStatusCommandInput}
 * @returns {@link DescribeLoggingStatusCommandOutput}
 * @see {@link DescribeLoggingStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeLoggingStatusCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ClusterNotFoundFault} (client fault)
 *  <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster.
 *         </p>
 *
 * @throws {@link UnsupportedOperationFault} (client fault)
 *  <p>The requested operation isn't supported.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 * @public
 */
export class DescribeLoggingStatusCommand extends $Command
  .classBuilder<
    DescribeLoggingStatusCommandInput,
    DescribeLoggingStatusCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RedshiftServiceVersion20121201", "DescribeLoggingStatus", {})
  .n("RedshiftClient", "DescribeLoggingStatusCommand")
  .f(void 0, void 0)
  .ser(se_DescribeLoggingStatusCommand)
  .de(de_DescribeLoggingStatusCommand)
  .build() {}
