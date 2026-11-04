// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { EnableAWSOrganizationsAccessInput, EnableAWSOrganizationsAccessOutput } from "../models/models_0";
import { EnableAWSOrganizationsAccess$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link EnableAWSOrganizationsAccessCommand}.
 */
export interface EnableAWSOrganizationsAccessCommandInput extends EnableAWSOrganizationsAccessInput {}
/**
 * @public
 *
 * The output of {@link EnableAWSOrganizationsAccessCommand}.
 */
export interface EnableAWSOrganizationsAccessCommandOutput extends EnableAWSOrganizationsAccessOutput, __MetadataBearer {}

/**
 * Enable portfolio sharing feature through Organizations. This API will allow Service Catalog to receive updates on your organization in order to sync your shares with the current structure. This API can only be called by the management account in the organization.
 *
 * When you call this API, Service Catalog calls `organizations:EnableAWSServiceAccess` on your behalf so that your shares stay in sync with any changes in your Organizations structure.
 *
 * Note that a delegated administrator is not authorized to invoke `EnableAWSOrganizationsAccess`.
 *
 * > **Important:** If you have previously disabled Organizations access for Service Catalog, and then enable access again, the portfolio access permissions might not sync with the latest changes to the organization structure. Specifically, accounts that you removed from the organization after disabling Service Catalog access, and before you enabled access again, can retain access to the previously shared portfolio. As a result, an account that has been removed from the organization might still be able to create or manage Amazon Web Services resources when it is no longer authorized to do so. Amazon Web Services is working to resolve this issue.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, EnableAWSOrganizationsAccessCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, EnableAWSOrganizationsAccessCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // import type { ServiceCatalogClientConfig } from "@aws-sdk/client-service-catalog";
 * const config = {}; // type is ServiceCatalogClientConfig
 * const client = new ServiceCatalogClient(config);
 * const input = {};
 * const command = new EnableAWSOrganizationsAccessCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param EnableAWSOrganizationsAccessCommandInput - {@link EnableAWSOrganizationsAccessCommandInput}
 * @returns {@link EnableAWSOrganizationsAccessCommandOutput}
 * @see {@link EnableAWSOrganizationsAccessCommandInput} for command's `input` shape.
 * @see {@link EnableAWSOrganizationsAccessCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link InvalidStateException} (client fault)
 *
 * An attempt was made to modify a resource that is in a state that is not valid. Check your resources to ensure that they are in valid states before retrying the operation.
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *
 * The operation is not supported.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ServiceCatalogServiceException}
 *
 * Base exception class for all service exceptions from ServiceCatalog service.
 *
 * @public
 */
export class EnableAWSOrganizationsAccessCommand extends command<EnableAWSOrganizationsAccessCommandInput, EnableAWSOrganizationsAccessCommandOutput>(
  _ep0,
  _mw0,
  "EnableAWSOrganizationsAccess",
  EnableAWSOrganizationsAccess$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: EnableAWSOrganizationsAccessCommandInput;
      output: EnableAWSOrganizationsAccessCommandOutput;
    };
  };
}
