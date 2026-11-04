// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PartnerIntegrationInputMessage, PartnerIntegrationOutputMessage } from "../models/models_0";
import { DeletePartner$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes a partner integration from a cluster. Data can still flow to the cluster until the integration is deleted at the partner's website.
 *
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
 *
 * The `ClusterIdentifier` parameter does not refer to an existing cluster.
 *
 * @throws {@link PartnerNotFoundFault} (client fault)
 *
 * The name of the partner was not found.
 *
 * @throws {@link UnauthorizedPartnerIntegrationFault} (client fault)
 *
 * The partner integration is not authorized.
 *
 * @throws {@link UnsupportedOperationFault} (client fault)
 *
 * The requested operation isn't supported.
 *
 * @throws {@link RedshiftServiceException}
 *
 * Base exception class for all service exceptions from Redshift service.
 *
 * @public
 */
export class DeletePartnerCommand extends command<DeletePartnerCommandInput, DeletePartnerCommandOutput>(
  _ep0,
  _mw0,
  "DeletePartner",
  DeletePartner$
) {
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
