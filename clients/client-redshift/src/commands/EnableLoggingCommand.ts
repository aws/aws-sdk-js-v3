// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EnableLoggingMessage, LoggingStatus } from "../models/models_1";
import { de_EnableLoggingCommand, se_EnableLoggingCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link EnableLoggingCommand}.
 */
export interface EnableLoggingCommandInput extends EnableLoggingMessage {}
/**
 * @public
 *
 * The output of {@link EnableLoggingCommand}.
 */
export interface EnableLoggingCommandOutput extends LoggingStatus, __MetadataBearer {}

/**
 * <p>Starts logging information, such as queries and connection attempts, for the
 *             specified Amazon Redshift cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, EnableLoggingCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, EnableLoggingCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // EnableLoggingMessage
 *   ClusterIdentifier: "STRING_VALUE", // required
 *   BucketName: "STRING_VALUE",
 *   S3KeyPrefix: "STRING_VALUE",
 *   LogDestinationType: "s3" || "cloudwatch",
 *   LogExports: [ // LogTypeList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new EnableLoggingCommand(input);
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
 * @param EnableLoggingCommandInput - {@link EnableLoggingCommandInput}
 * @returns {@link EnableLoggingCommandOutput}
 * @see {@link EnableLoggingCommandInput} for command's `input` shape.
 * @see {@link EnableLoggingCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link BucketNotFoundFault} (client fault)
 *  <p>Could not find the specified S3 bucket.</p>
 *
 * @throws {@link ClusterNotFoundFault} (client fault)
 *  <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster.
 *         </p>
 *
 * @throws {@link InsufficientS3BucketPolicyFault} (client fault)
 *  <p>The cluster does not have read bucket or put object permissions on the S3 bucket
 *             specified when enabling logging.</p>
 *
 * @throws {@link InvalidClusterStateFault} (client fault)
 *  <p>The specified cluster is not in the <code>available</code> state. </p>
 *
 * @throws {@link InvalidS3BucketNameFault} (client fault)
 *  <p>The S3 bucket name is invalid. For more information about naming rules, go to
 *                 <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/BucketRestrictions.html">Bucket
 *                 Restrictions and Limitations</a> in the Amazon Simple Storage Service (S3)
 *             Developer Guide.</p>
 *
 * @throws {@link InvalidS3KeyPrefixFault} (client fault)
 *  <p>The string specified for the logging S3 key prefix does not comply with the
 *             documented constraints.</p>
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
export class EnableLoggingCommand extends $Command
  .classBuilder<
    EnableLoggingCommandInput,
    EnableLoggingCommandOutput,
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
  .s("RedshiftServiceVersion20121201", "EnableLogging", {})
  .n("RedshiftClient", "EnableLoggingCommand")
  .f(void 0, void 0)
  .ser(se_EnableLoggingCommand)
  .de(de_EnableLoggingCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EnableLoggingMessage;
      output: LoggingStatus;
    };
    sdk: {
      input: EnableLoggingCommandInput;
      output: EnableLoggingCommandOutput;
    };
  };
}
