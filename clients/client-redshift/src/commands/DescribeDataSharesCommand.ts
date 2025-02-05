// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeDataSharesMessage, DescribeDataSharesResult } from "../models/models_1";
import { de_DescribeDataSharesCommand, se_DescribeDataSharesCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDataSharesCommand}.
 */
export interface DescribeDataSharesCommandInput extends DescribeDataSharesMessage {}
/**
 * @public
 *
 * The output of {@link DescribeDataSharesCommand}.
 */
export interface DescribeDataSharesCommandOutput extends DescribeDataSharesResult, __MetadataBearer {}

/**
 * <p>Shows the status of any inbound or outbound datashares available in the specified
 *             account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeDataSharesCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeDataSharesCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new RedshiftClient(config);
 * const input = { // DescribeDataSharesMessage
 *   DataShareArn: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeDataSharesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDataSharesResult
 * //   DataShares: [ // DataShareList
 * //     { // DataShare
 * //       DataShareArn: "STRING_VALUE",
 * //       ProducerArn: "STRING_VALUE",
 * //       AllowPubliclyAccessibleConsumers: true || false,
 * //       DataShareAssociations: [ // DataShareAssociationList
 * //         { // DataShareAssociation
 * //           ConsumerIdentifier: "STRING_VALUE",
 * //           Status: "ACTIVE" || "PENDING_AUTHORIZATION" || "AUTHORIZED" || "DEAUTHORIZED" || "REJECTED" || "AVAILABLE",
 * //           ConsumerRegion: "STRING_VALUE",
 * //           CreatedDate: new Date("TIMESTAMP"),
 * //           StatusChangeDate: new Date("TIMESTAMP"),
 * //           ProducerAllowedWrites: true || false,
 * //           ConsumerAcceptedWrites: true || false,
 * //         },
 * //       ],
 * //       ManagedBy: "STRING_VALUE",
 * //       DataShareType: "INTERNAL",
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeDataSharesCommandInput - {@link DescribeDataSharesCommandInput}
 * @returns {@link DescribeDataSharesCommandOutput}
 * @see {@link DescribeDataSharesCommandInput} for command's `input` shape.
 * @see {@link DescribeDataSharesCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link InvalidDataShareFault} (client fault)
 *  <p>There is an error with the datashare.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 * @public
 */
export class DescribeDataSharesCommand extends $Command
  .classBuilder<
    DescribeDataSharesCommandInput,
    DescribeDataSharesCommandOutput,
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
  .s("RedshiftServiceVersion20121201", "DescribeDataShares", {})
  .n("RedshiftClient", "DescribeDataSharesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeDataSharesCommand)
  .de(de_DescribeDataSharesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDataSharesMessage;
      output: DescribeDataSharesResult;
    };
    sdk: {
      input: DescribeDataSharesCommandInput;
      output: DescribeDataSharesCommandOutput;
    };
  };
}
