// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PartnerIntegrationOutputMessage } from "../models/models_0";
import type { UpdatePartnerStatusInputMessage } from "../models/models_1";
import { UpdatePartnerStatus$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdatePartnerStatusCommand}.
 */
export interface UpdatePartnerStatusCommandInput extends UpdatePartnerStatusInputMessage {}
/**
 * @public
 *
 * The output of {@link UpdatePartnerStatusCommand}.
 */
export interface UpdatePartnerStatusCommandOutput extends PartnerIntegrationOutputMessage, __MetadataBearer {}

/**
 * Updates the status of a partner integration.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, UpdatePartnerStatusCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, UpdatePartnerStatusCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // UpdatePartnerStatusInputMessage
 *   AccountId: "STRING_VALUE", // required
 *   ClusterIdentifier: "STRING_VALUE", // required
 *   DatabaseName: "STRING_VALUE", // required
 *   PartnerName: "STRING_VALUE", // required
 *   Status: "Active" || "Inactive" || "RuntimeFailure" || "ConnectionFailure", // required
 *   StatusMessage: "STRING_VALUE",
 * };
 * const command = new UpdatePartnerStatusCommand(input);
 * const response = await client.send(command);
 * // { // PartnerIntegrationOutputMessage
 * //   DatabaseName: "STRING_VALUE",
 * //   PartnerName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdatePartnerStatusCommandInput - {@link UpdatePartnerStatusCommandInput}
 * @returns {@link UpdatePartnerStatusCommandOutput}
 * @see {@link UpdatePartnerStatusCommandInput} for command's `input` shape.
 * @see {@link UpdatePartnerStatusCommandOutput} for command's `response` shape.
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
export class UpdatePartnerStatusCommand extends command<UpdatePartnerStatusCommandInput, UpdatePartnerStatusCommandOutput>(
  _ep0,
  _mw0,
  "UpdatePartnerStatus",
  UpdatePartnerStatus$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePartnerStatusInputMessage;
      output: PartnerIntegrationOutputMessage;
    };
    sdk: {
      input: UpdatePartnerStatusCommandInput;
      output: UpdatePartnerStatusCommandOutput;
    };
  };
}
