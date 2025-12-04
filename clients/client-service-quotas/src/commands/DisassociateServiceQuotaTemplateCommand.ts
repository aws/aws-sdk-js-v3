// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DisassociateServiceQuotaTemplateRequest,
  DisassociateServiceQuotaTemplateResponse,
} from "../models/models_0";
import { DisassociateServiceQuotaTemplate } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, ServiceQuotasClientResolvedConfig } from "../ServiceQuotasClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateServiceQuotaTemplateCommand}.
 */
export interface DisassociateServiceQuotaTemplateCommandInput extends DisassociateServiceQuotaTemplateRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateServiceQuotaTemplateCommand}.
 */
export interface DisassociateServiceQuotaTemplateCommandOutput
  extends DisassociateServiceQuotaTemplateResponse,
    __MetadataBearer {}

/**
 * <p>Disables your quota request template. After a template is disabled, the quota increase
 *             requests in the template are not applied to new Amazon Web Services accounts in your organization.
 *             Disabling a quota request template does not apply its quota increase requests.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceQuotasClient, DisassociateServiceQuotaTemplateCommand } from "@aws-sdk/client-service-quotas"; // ES Modules import
 * // const { ServiceQuotasClient, DisassociateServiceQuotaTemplateCommand } = require("@aws-sdk/client-service-quotas"); // CommonJS import
 * // import type { ServiceQuotasClientConfig } from "@aws-sdk/client-service-quotas";
 * const config = {}; // type is ServiceQuotasClientConfig
 * const client = new ServiceQuotasClient(config);
 * const input = {};
 * const command = new DisassociateServiceQuotaTemplateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateServiceQuotaTemplateCommandInput - {@link DisassociateServiceQuotaTemplateCommandInput}
 * @returns {@link DisassociateServiceQuotaTemplateCommandOutput}
 * @see {@link DisassociateServiceQuotaTemplateCommandInput} for command's `input` shape.
 * @see {@link DisassociateServiceQuotaTemplateCommandOutput} for command's `response` shape.
 * @see {@link ServiceQuotasClientResolvedConfig | config} for ServiceQuotasClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permission to perform this action.</p>
 *
 * @throws {@link AWSServiceAccessNotEnabledException} (client fault)
 *  <p>The action you attempted is not allowed unless Service Access with Service Quotas is enabled in
 *             your organization.</p>
 *
 * @throws {@link DependencyAccessDeniedException} (client fault)
 *  <p>You can't perform this action because a dependency does not have access.</p>
 *
 * @throws {@link NoAvailableOrganizationException} (client fault)
 *  <p>The Amazon Web Services account making this call is not a member of an organization.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>Something went wrong.</p>
 *
 * @throws {@link ServiceQuotaTemplateNotInUseException} (client fault)
 *  <p>The quota request template is not associated with your organization.</p>
 *
 * @throws {@link TemplatesNotAvailableInRegionException} (client fault)
 *  <p>The Service Quotas template is not available in this Amazon Web Services Region.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Due to throttling, the request was denied. Slow down the rate of request calls, or
 *             request an increase for this quota.</p>
 *
 * @throws {@link ServiceQuotasServiceException}
 * <p>Base exception class for all service exceptions from ServiceQuotas service.</p>
 *
 *
 * @public
 */
export class DisassociateServiceQuotaTemplateCommand extends $Command
  .classBuilder<
    DisassociateServiceQuotaTemplateCommandInput,
    DisassociateServiceQuotaTemplateCommandOutput,
    ServiceQuotasClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceQuotasClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ServiceQuotasV20190624", "DisassociateServiceQuotaTemplate", {})
  .n("ServiceQuotasClient", "DisassociateServiceQuotaTemplateCommand")
  .sc(DisassociateServiceQuotaTemplate)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: DisassociateServiceQuotaTemplateCommandInput;
      output: DisassociateServiceQuotaTemplateCommandOutput;
    };
  };
}
