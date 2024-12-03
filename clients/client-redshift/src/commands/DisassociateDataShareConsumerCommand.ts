// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DataShare } from "../models/models_0";
import { DisassociateDataShareConsumerMessage } from "../models/models_1";
import {
  de_DisassociateDataShareConsumerCommand,
  se_DisassociateDataShareConsumerCommand,
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
 * The input for {@link DisassociateDataShareConsumerCommand}.
 */
export interface DisassociateDataShareConsumerCommandInput extends DisassociateDataShareConsumerMessage {}
/**
 * @public
 *
 * The output of {@link DisassociateDataShareConsumerCommand}.
 */
export interface DisassociateDataShareConsumerCommandOutput extends DataShare, __MetadataBearer {}

/**
 * <p>From a datashare consumer account, remove association for the specified datashare.
 *             </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DisassociateDataShareConsumerCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DisassociateDataShareConsumerCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // DisassociateDataShareConsumerMessage
 *   DataShareArn: "STRING_VALUE", // required
 *   DisassociateEntireAccount: true || false,
 *   ConsumerArn: "STRING_VALUE",
 *   ConsumerRegion: "STRING_VALUE",
 * };
 * const command = new DisassociateDataShareConsumerCommand(input);
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
 * @param DisassociateDataShareConsumerCommandInput - {@link DisassociateDataShareConsumerCommandInput}
 * @returns {@link DisassociateDataShareConsumerCommandOutput}
 * @see {@link DisassociateDataShareConsumerCommandInput} for command's `input` shape.
 * @see {@link DisassociateDataShareConsumerCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DisassociateDataShareConsumerCommand extends $Command
  .classBuilder<
    DisassociateDataShareConsumerCommandInput,
    DisassociateDataShareConsumerCommandOutput,
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
  .s("RedshiftServiceVersion20121201", "DisassociateDataShareConsumer", {})
  .n("RedshiftClient", "DisassociateDataShareConsumerCommand")
  .f(void 0, void 0)
  .ser(se_DisassociateDataShareConsumerCommand)
  .de(de_DisassociateDataShareConsumerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateDataShareConsumerMessage;
      output: DataShare;
    };
    sdk: {
      input: DisassociateDataShareConsumerCommandInput;
      output: DisassociateDataShareConsumerCommandOutput;
    };
  };
}
