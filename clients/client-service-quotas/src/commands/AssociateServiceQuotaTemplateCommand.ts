// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateServiceQuotaTemplateRequest, AssociateServiceQuotaTemplateResponse } from "../models/models_0";
import { AssociateServiceQuotaTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateServiceQuotaTemplateCommand}.
 */
export interface AssociateServiceQuotaTemplateCommandInput extends AssociateServiceQuotaTemplateRequest {}
/**
 * @public
 *
 * The output of {@link AssociateServiceQuotaTemplateCommand}.
 */
export interface AssociateServiceQuotaTemplateCommandOutput extends AssociateServiceQuotaTemplateResponse, __MetadataBearer {}

/**
 * <p>Associates your quota request template with your organization. When a new
 *             Amazon Web Services account is created in your organization, the quota increase requests in the
 *             template are automatically applied to the account. You can add a quota increase request
 *             for any adjustable quota to your template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceQuotasClient, AssociateServiceQuotaTemplateCommand } from "@aws-sdk/client-service-quotas"; // ES Modules import
 * // const { ServiceQuotasClient, AssociateServiceQuotaTemplateCommand } = require("@aws-sdk/client-service-quotas"); // CommonJS import
 * // import type { ServiceQuotasClientConfig } from "@aws-sdk/client-service-quotas";
 * const config = {}; // type is ServiceQuotasClientConfig
 * const client = new ServiceQuotasClient(config);
 * const input = {};
 * const command = new AssociateServiceQuotaTemplateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateServiceQuotaTemplateCommandInput - {@link AssociateServiceQuotaTemplateCommandInput}
 * @returns {@link AssociateServiceQuotaTemplateCommandOutput}
 * @see {@link AssociateServiceQuotaTemplateCommandInput} for command's `input` shape.
 * @see {@link AssociateServiceQuotaTemplateCommandOutput} for command's `response` shape.
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
 * @throws {@link OrganizationNotInAllFeaturesModeException} (client fault)
 *  <p>The organization that your Amazon Web Services account belongs to is not in All Features
 *             mode.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>Something went wrong.</p>
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
export class AssociateServiceQuotaTemplateCommand extends command<AssociateServiceQuotaTemplateCommandInput, AssociateServiceQuotaTemplateCommandOutput>(
  _ep0,
  _mw0,
  "AssociateServiceQuotaTemplate",
  AssociateServiceQuotaTemplate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: {};
    };
    sdk: {
      input: AssociateServiceQuotaTemplateCommandInput;
      output: AssociateServiceQuotaTemplateCommandOutput;
    };
  };
}
