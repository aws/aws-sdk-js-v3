// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DisableAWSOrganizationsAccessInput, DisableAWSOrganizationsAccessOutput } from "../models/models_0";
import {
  de_DisableAWSOrganizationsAccessCommand,
  se_DisableAWSOrganizationsAccessCommand,
} from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisableAWSOrganizationsAccessCommand}.
 */
export interface DisableAWSOrganizationsAccessCommandInput extends DisableAWSOrganizationsAccessInput {}
/**
 * @public
 *
 * The output of {@link DisableAWSOrganizationsAccessCommand}.
 */
export interface DisableAWSOrganizationsAccessCommandOutput
  extends DisableAWSOrganizationsAccessOutput,
    __MetadataBearer {}

/**
 * <p>Disable portfolio sharing through the Organizations service. This command will not
 *          delete your current shares, but prevents you from creating new shares throughout your
 *          organization. Current shares are not kept in sync with your organization structure if the structure
 *          changes after calling this API. Only the management account in the organization can call this API.</p>
 *          <p>You cannot call this API if there are active delegated administrators in the organization.</p>
 *          <p>Note that a delegated administrator is not authorized to invoke <code>DisableAWSOrganizationsAccess</code>.</p>
 *          <important>
 *             <p>If you share an Service Catalog portfolio in an organization within
 *          Organizations, and then disable Organizations access for Service Catalog,
 *          the portfolio access permissions will not sync with the latest changes to the organization
 *          structure. Specifically, accounts that you removed from the organization after
 *          disabling Service Catalog access will retain access to the previously shared portfolio.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DisableAWSOrganizationsAccessCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DisableAWSOrganizationsAccessCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const input = {};
 * const command = new DisableAWSOrganizationsAccessCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisableAWSOrganizationsAccessCommandInput - {@link DisableAWSOrganizationsAccessCommandInput}
 * @returns {@link DisableAWSOrganizationsAccessCommandOutput}
 * @see {@link DisableAWSOrganizationsAccessCommandInput} for command's `input` shape.
 * @see {@link DisableAWSOrganizationsAccessCommandOutput} for command's `response` shape.
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
export class DisableAWSOrganizationsAccessCommand extends $Command
  .classBuilder<
    DisableAWSOrganizationsAccessCommandInput,
    DisableAWSOrganizationsAccessCommandOutput,
    ServiceCatalogClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceCatalogClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWS242ServiceCatalogService", "DisableAWSOrganizationsAccess", {})
  .n("ServiceCatalogClient", "DisableAWSOrganizationsAccessCommand")
  .f(void 0, void 0)
  .ser(se_DisableAWSOrganizationsAccessCommand)
  .de(de_DisableAWSOrganizationsAccessCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: DisableAWSOrganizationsAccessCommandInput;
      output: DisableAWSOrganizationsAccessCommandOutput;
    };
  };
}
