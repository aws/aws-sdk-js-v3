// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeDataSharesForConsumerMessage, DescribeDataSharesForConsumerResult } from "../models/models_1";
import {
  de_DescribeDataSharesForConsumerCommand,
  se_DescribeDataSharesForConsumerCommand,
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
 * The input for {@link DescribeDataSharesForConsumerCommand}.
 */
export interface DescribeDataSharesForConsumerCommandInput extends DescribeDataSharesForConsumerMessage {}
/**
 * @public
 *
 * The output of {@link DescribeDataSharesForConsumerCommand}.
 */
export interface DescribeDataSharesForConsumerCommandOutput
  extends DescribeDataSharesForConsumerResult,
    __MetadataBearer {}

/**
 * <p>Returns a list of datashares where the account identifier being called is a consumer account identifier.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeDataSharesForConsumerCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeDataSharesForConsumerCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // DescribeDataSharesForConsumerMessage
 *   ConsumerArn: "STRING_VALUE",
 *   Status: "ACTIVE" || "AVAILABLE",
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeDataSharesForConsumerCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDataSharesForConsumerResult
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
 * @param DescribeDataSharesForConsumerCommandInput - {@link DescribeDataSharesForConsumerCommandInput}
 * @returns {@link DescribeDataSharesForConsumerCommandOutput}
 * @see {@link DescribeDataSharesForConsumerCommandInput} for command's `input` shape.
 * @see {@link DescribeDataSharesForConsumerCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link InvalidNamespaceFault} (client fault)
 *  <p>The namespace isn't valid because the namespace doesn't exist. Provide a valid namespace.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 *
 * @public
 */
export class DescribeDataSharesForConsumerCommand extends $Command
  .classBuilder<
    DescribeDataSharesForConsumerCommandInput,
    DescribeDataSharesForConsumerCommandOutput,
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
  .s("RedshiftServiceVersion20121201", "DescribeDataSharesForConsumer", {})
  .n("RedshiftClient", "DescribeDataSharesForConsumerCommand")
  .f(void 0, void 0)
  .ser(se_DescribeDataSharesForConsumerCommand)
  .de(de_DescribeDataSharesForConsumerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDataSharesForConsumerMessage;
      output: DescribeDataSharesForConsumerResult;
    };
    sdk: {
      input: DescribeDataSharesForConsumerCommandInput;
      output: DescribeDataSharesForConsumerCommandOutput;
    };
  };
}
