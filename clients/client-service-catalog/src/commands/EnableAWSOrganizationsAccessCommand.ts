// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { EnableAWSOrganizationsAccessInput, EnableAWSOrganizationsAccessOutput } from "../models/models_0";
import { EnableAWSOrganizationsAccess$ } from "../schemas/schemas_0";
import type {
  ServiceCatalogClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ServiceCatalogClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Enable portfolio sharing feature through Organizations. This API will allow Service Catalog to receive updates on your organization in order to sync your shares with the
 *          current structure. This API can only be called by the management account in the organization.</p>
 *          <p>When you call this API, Service Catalog calls <code>organizations:EnableAWSServiceAccess</code> on your behalf so that your shares stay in sync with any changes in your Organizations structure.</p>
 *          <p>Note that a delegated administrator is not authorized to invoke <code>EnableAWSOrganizationsAccess</code>.</p>
 *          <important>
 *             <p>If you have previously disabled Organizations access for Service Catalog, and then
 *          enable access again, the portfolio access permissions might not sync with the latest changes to
 *          the organization structure. Specifically, accounts that you removed from the organization after
 *          disabling Service Catalog access, and before you enabled access again, can retain access to the
 *          previously shared portfolio. As a result, an account that has been removed from the organization
 *          might still be able to create or manage Amazon Web Services resources when it is no longer
 *          authorized to do so. Amazon Web Services is working to resolve this issue.</p>
 *          </important>
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
 *  <p>An attempt was made to modify a resource that is in a state that is not valid.
 *          Check your resources to ensure that they are in valid states before retrying the operation.</p>
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *  <p>The operation is not supported.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ServiceCatalogServiceException}
 * <p>Base exception class for all service exceptions from ServiceCatalog service.</p>
 *
 *
 * @public
 */
export class EnableAWSOrganizationsAccessCommand extends $Command
  .classBuilder<
    EnableAWSOrganizationsAccessCommandInput,
    EnableAWSOrganizationsAccessCommandOutput,
    ServiceCatalogClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceCatalogClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWS242ServiceCatalogService", "EnableAWSOrganizationsAccess", {})
  .n("ServiceCatalogClient", "EnableAWSOrganizationsAccessCommand")
  .sc(EnableAWSOrganizationsAccess$)
  .build() {
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
