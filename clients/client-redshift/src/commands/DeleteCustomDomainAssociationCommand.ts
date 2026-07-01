// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteCustomDomainAssociationMessage } from "../models/models_0";
import { DeleteCustomDomainAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export class DeleteCustomDomainAssociationCommand extends command<DeleteCustomDomainAssociationCommandInput, DeleteCustomDomainAssociationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteCustomDomainAssociation",
  DeleteCustomDomainAssociation$
) {
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
