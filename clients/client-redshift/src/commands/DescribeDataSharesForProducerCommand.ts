// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeDataSharesForProducerMessage, DescribeDataSharesForProducerResult } from "../models/models_1";
import {
  de_DescribeDataSharesForProducerCommand,
  se_DescribeDataSharesForProducerCommand,
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
 * The input for {@link DescribeDataSharesForProducerCommand}.
 */
export interface DescribeDataSharesForProducerCommandInput extends DescribeDataSharesForProducerMessage {}
/**
 * @public
 *
 * The output of {@link DescribeDataSharesForProducerCommand}.
 */
export interface DescribeDataSharesForProducerCommandOutput
  extends DescribeDataSharesForProducerResult,
    __MetadataBearer {}

/**
 * <p>Returns a list of datashares when the account identifier being called is a producer account identifier.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeDataSharesForProducerCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeDataSharesForProducerCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // DescribeDataSharesForProducerMessage
 *   ProducerArn: "STRING_VALUE",
 *   Status: "ACTIVE" || "AUTHORIZED" || "PENDING_AUTHORIZATION" || "DEAUTHORIZED" || "REJECTED",
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeDataSharesForProducerCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDataSharesForProducerResult
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
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeDataSharesForProducerCommandInput - {@link DescribeDataSharesForProducerCommandInput}
 * @returns {@link DescribeDataSharesForProducerCommandOutput}
 * @see {@link DescribeDataSharesForProducerCommandInput} for command's `input` shape.
 * @see {@link DescribeDataSharesForProducerCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link InvalidNamespaceFault} (client fault)
 *  <p>The namespace isn't valid because the namespace doesn't exist. Provide a valid namespace.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 * @public
 */
export class DescribeDataSharesForProducerCommand extends $Command
  .classBuilder<
    DescribeDataSharesForProducerCommandInput,
    DescribeDataSharesForProducerCommandOutput,
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
  .s("RedshiftServiceVersion20121201", "DescribeDataSharesForProducer", {})
  .n("RedshiftClient", "DescribeDataSharesForProducerCommand")
  .f(void 0, void 0)
  .ser(se_DescribeDataSharesForProducerCommand)
  .de(de_DescribeDataSharesForProducerCommand)
  .build() {}
