// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PartnerIntegrationInputMessage, PartnerIntegrationOutputMessage } from "../models/models_0";
import { de_DeletePartnerCommand, se_DeletePartnerCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeletePartnerCommand}.
 */
export interface DeletePartnerCommandInput extends PartnerIntegrationInputMessage {}
/**
 * @public
 *
 * The output of {@link DeletePartnerCommand}.
 */
export interface DeletePartnerCommandOutput extends PartnerIntegrationOutputMessage, __MetadataBearer {}

/**
 * <p>Deletes a partner integration from a cluster. Data can still flow to the cluster until the integration is deleted at the partner's website.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DeletePartnerCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DeletePartnerCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // PartnerIntegrationInputMessage
 *   AccountId: "STRING_VALUE", // required
 *   ClusterIdentifier: "STRING_VALUE", // required
 *   DatabaseName: "STRING_VALUE", // required
 *   PartnerName: "STRING_VALUE", // required
 * };
 * const command = new DeletePartnerCommand(input);
 * const response = await client.send(command);
 * // { // PartnerIntegrationOutputMessage
 * //   DatabaseName: "STRING_VALUE",
 * //   PartnerName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeletePartnerCommandInput - {@link DeletePartnerCommandInput}
 * @returns {@link DeletePartnerCommandOutput}
 * @see {@link DeletePartnerCommandInput} for command's `input` shape.
 * @see {@link DeletePartnerCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ClusterNotFoundFault} (client fault)
 *  <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster.
 *         </p>
 *
 * @throws {@link PartnerNotFoundFault} (client fault)
 *  <p>The name of the partner was not found.</p>
 *
 * @throws {@link UnauthorizedPartnerIntegrationFault} (client fault)
 *  <p>The partner integration is not authorized.</p>
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
export class DeletePartnerCommand extends $Command
  .classBuilder<
    DeletePartnerCommandInput,
    DeletePartnerCommandOutput,
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
  .s("RedshiftServiceVersion20121201", "DeletePartner", {})
  .n("RedshiftClient", "DeletePartnerCommand")
  .f(void 0, void 0)
  .ser(se_DeletePartnerCommand)
  .de(de_DeletePartnerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PartnerIntegrationInputMessage;
      output: PartnerIntegrationOutputMessage;
    };
    sdk: {
      input: DeletePartnerCommandInput;
      output: DeletePartnerCommandOutput;
    };
  };
}
