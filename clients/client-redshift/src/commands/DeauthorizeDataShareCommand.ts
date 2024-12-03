// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DataShare, DeauthorizeDataShareMessage } from "../models/models_0";
import { de_DeauthorizeDataShareCommand, se_DeauthorizeDataShareCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeauthorizeDataShareCommand}.
 */
export interface DeauthorizeDataShareCommandInput extends DeauthorizeDataShareMessage {}
/**
 * @public
 *
 * The output of {@link DeauthorizeDataShareCommand}.
 */
export interface DeauthorizeDataShareCommandOutput extends DataShare, __MetadataBearer {}

/**
 * <p>From a datashare producer account, removes authorization from the specified datashare. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DeauthorizeDataShareCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DeauthorizeDataShareCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // DeauthorizeDataShareMessage
 *   DataShareArn: "STRING_VALUE", // required
 *   ConsumerIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeauthorizeDataShareCommand(input);
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
 * @param DeauthorizeDataShareCommandInput - {@link DeauthorizeDataShareCommandInput}
 * @returns {@link DeauthorizeDataShareCommandOutput}
 * @see {@link DeauthorizeDataShareCommandInput} for command's `input` shape.
 * @see {@link DeauthorizeDataShareCommandOutput} for command's `response` shape.
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
export class DeauthorizeDataShareCommand extends $Command
  .classBuilder<
    DeauthorizeDataShareCommandInput,
    DeauthorizeDataShareCommandOutput,
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
  .s("RedshiftServiceVersion20121201", "DeauthorizeDataShare", {})
  .n("RedshiftClient", "DeauthorizeDataShareCommand")
  .f(void 0, void 0)
  .ser(se_DeauthorizeDataShareCommand)
  .de(de_DeauthorizeDataShareCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeauthorizeDataShareMessage;
      output: DataShare;
    };
    sdk: {
      input: DeauthorizeDataShareCommandInput;
      output: DeauthorizeDataShareCommandOutput;
    };
  };
}
