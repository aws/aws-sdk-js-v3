// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { PartnerIntegrationInputMessage, PartnerIntegrationOutputMessage } from "../models/models_0";
import type { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { AddPartner$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AddPartnerCommand}.
 */
export interface AddPartnerCommandInput extends PartnerIntegrationInputMessage {}
/**
 * @public
 *
 * The output of {@link AddPartnerCommand}.
 */
export interface AddPartnerCommandOutput extends PartnerIntegrationOutputMessage, __MetadataBearer {}

/**
 * <p>Adds a partner integration to a cluster.
 *             This operation authorizes a partner to push status updates for the specified database.
 *             To complete the integration, you also set up the integration on the partner website.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, AddPartnerCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, AddPartnerCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // PartnerIntegrationInputMessage
 *   AccountId: "STRING_VALUE", // required
 *   ClusterIdentifier: "STRING_VALUE", // required
 *   DatabaseName: "STRING_VALUE", // required
 *   PartnerName: "STRING_VALUE", // required
 * };
 * const command = new AddPartnerCommand(input);
 * const response = await client.send(command);
 * // { // PartnerIntegrationOutputMessage
 * //   DatabaseName: "STRING_VALUE",
 * //   PartnerName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AddPartnerCommandInput - {@link AddPartnerCommandInput}
 * @returns {@link AddPartnerCommandOutput}
 * @see {@link AddPartnerCommandInput} for command's `input` shape.
 * @see {@link AddPartnerCommandOutput} for command's `response` shape.
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
export class AddPartnerCommand extends $Command
  .classBuilder<
    AddPartnerCommandInput,
    AddPartnerCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServiceVersion20121201", "AddPartner", {})
  .n("RedshiftClient", "AddPartnerCommand")
  .sc(AddPartner$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PartnerIntegrationInputMessage;
      output: PartnerIntegrationOutputMessage;
    };
    sdk: {
      input: AddPartnerCommandInput;
      output: AddPartnerCommandOutput;
    };
  };
}
