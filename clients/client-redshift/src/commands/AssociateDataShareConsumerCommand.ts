// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateDataShareConsumerMessage, DataShare } from "../models/models_0";
import { de_AssociateDataShareConsumerCommand, se_AssociateDataShareConsumerCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateDataShareConsumerCommand}.
 */
export interface AssociateDataShareConsumerCommandInput extends AssociateDataShareConsumerMessage {}
/**
 * @public
 *
 * The output of {@link AssociateDataShareConsumerCommand}.
 */
export interface AssociateDataShareConsumerCommandOutput extends DataShare, __MetadataBearer {}

/**
 * <p>From a datashare consumer account, associates a datashare with the
 *             account (AssociateEntireAccount) or the specified namespace (ConsumerArn). If you make this association, the consumer
 *             can consume the datashare.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, AssociateDataShareConsumerCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, AssociateDataShareConsumerCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // AssociateDataShareConsumerMessage
 *   DataShareArn: "STRING_VALUE", // required
 *   AssociateEntireAccount: true || false,
 *   ConsumerArn: "STRING_VALUE",
 *   ConsumerRegion: "STRING_VALUE",
 *   AllowWrites: true || false,
 * };
 * const command = new AssociateDataShareConsumerCommand(input);
 * const response = await client.send(command);
 * // { // DataShare
 * //   DataShareArn: "STRING_VALUE",
 * //   ProducerArn: "STRING_VALUE",
 * //   AllowPubliclyAccessibleConsumers: true || false,
 * //   DataShareAssociations: [ // DataShareAssociationList
 * //     { // DataShareAssociation
 * //       ConsumerIdentifier: "STRING_VALUE",
 * //       Status: "ACTIVE" || "PENDING_AUTHORIZATION" || "AUTHORIZED" || "DEAUTHORIZED" || "REJECTED" || "AVAILABLE",
 * //       ConsumerRegion: "STRING_VALUE",
 * //       CreatedDate: new Date("TIMESTAMP"),
 * //       StatusChangeDate: new Date("TIMESTAMP"),
 * //       ProducerAllowedWrites: true || false,
 * //       ConsumerAcceptedWrites: true || false,
 * //     },
 * //   ],
 * //   ManagedBy: "STRING_VALUE",
 * //   DataShareType: "INTERNAL",
 * // };
 *
 * ```
 *
 * @param AssociateDataShareConsumerCommandInput - {@link AssociateDataShareConsumerCommandInput}
 * @returns {@link AssociateDataShareConsumerCommandOutput}
 * @see {@link AssociateDataShareConsumerCommandInput} for command's `input` shape.
 * @see {@link AssociateDataShareConsumerCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link InvalidDataShareFault} (client fault)
 *  <p>There is an error with the datashare.</p>
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
export class AssociateDataShareConsumerCommand extends $Command
  .classBuilder<
    AssociateDataShareConsumerCommandInput,
    AssociateDataShareConsumerCommandOutput,
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
  .s("RedshiftServiceVersion20121201", "AssociateDataShareConsumer", {})
  .n("RedshiftClient", "AssociateDataShareConsumerCommand")
  .f(void 0, void 0)
  .ser(se_AssociateDataShareConsumerCommand)
  .de(de_AssociateDataShareConsumerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateDataShareConsumerMessage;
      output: DataShare;
    };
    sdk: {
      input: AssociateDataShareConsumerCommandInput;
      output: AssociateDataShareConsumerCommandOutput;
    };
  };
}
