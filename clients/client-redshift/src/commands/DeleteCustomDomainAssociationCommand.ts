// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteCustomDomainAssociationMessage } from "../models/models_0";
import {
  de_DeleteCustomDomainAssociationCommand,
  se_DeleteCustomDomainAssociationCommand,
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
 * The input for {@link DeleteCustomDomainAssociationCommand}.
 */
export interface DeleteCustomDomainAssociationCommandInput extends DeleteCustomDomainAssociationMessage {}
/**
 * @public
 *
 * The output of {@link DeleteCustomDomainAssociationCommand}.
 */
export interface DeleteCustomDomainAssociationCommandOutput extends __MetadataBearer {}

/**
 * <p>Contains information about deleting a custom domain association for a cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DeleteCustomDomainAssociationCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DeleteCustomDomainAssociationCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // DeleteCustomDomainAssociationMessage
 *   ClusterIdentifier: "STRING_VALUE", // required
 *   CustomDomainName: "STRING_VALUE", // required
 * };
 * const command = new DeleteCustomDomainAssociationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteCustomDomainAssociationCommandInput - {@link DeleteCustomDomainAssociationCommandInput}
 * @returns {@link DeleteCustomDomainAssociationCommandOutput}
 * @see {@link DeleteCustomDomainAssociationCommandInput} for command's `input` shape.
 * @see {@link DeleteCustomDomainAssociationCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ClusterNotFoundFault} (client fault)
 *  <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster.
 *         </p>
 *
 * @throws {@link CustomCnameAssociationFault} (client fault)
 *  <p>An error occurred when an attempt was made to change the custom domain association.</p>
 *
 * @throws {@link CustomDomainAssociationNotFoundFault} (client fault)
 *  <p>An error occurred. The custom domain name couldn't be found.</p>
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
export class DeleteCustomDomainAssociationCommand extends $Command
  .classBuilder<
    DeleteCustomDomainAssociationCommandInput,
    DeleteCustomDomainAssociationCommandOutput,
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
  .s("RedshiftServiceVersion20121201", "DeleteCustomDomainAssociation", {})
  .n("RedshiftClient", "DeleteCustomDomainAssociationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteCustomDomainAssociationCommand)
  .de(de_DeleteCustomDomainAssociationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCustomDomainAssociationMessage;
      output: {};
    };
    sdk: {
      input: DeleteCustomDomainAssociationCommandInput;
      output: DeleteCustomDomainAssociationCommandOutput;
    };
  };
}
