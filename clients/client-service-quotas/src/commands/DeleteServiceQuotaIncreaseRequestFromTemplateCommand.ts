// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DeleteServiceQuotaIncreaseRequestFromTemplateRequest,
  DeleteServiceQuotaIncreaseRequestFromTemplateResponse,
} from "../models/models_0";
import { DeleteServiceQuotaIncreaseRequestFromTemplate } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, ServiceQuotasClientResolvedConfig } from "../ServiceQuotasClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteServiceQuotaIncreaseRequestFromTemplateCommand}.
 */
export interface DeleteServiceQuotaIncreaseRequestFromTemplateCommandInput
  extends DeleteServiceQuotaIncreaseRequestFromTemplateRequest {}
/**
 * @public
 *
 * The output of {@link DeleteServiceQuotaIncreaseRequestFromTemplateCommand}.
 */
export interface DeleteServiceQuotaIncreaseRequestFromTemplateCommandOutput
  extends DeleteServiceQuotaIncreaseRequestFromTemplateResponse,
    __MetadataBearer {}

/**
 * <p>Deletes the quota increase request for the specified quota from your quota request
 *             template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceQuotasClient, DeleteServiceQuotaIncreaseRequestFromTemplateCommand } from "@aws-sdk/client-service-quotas"; // ES Modules import
 * // const { ServiceQuotasClient, DeleteServiceQuotaIncreaseRequestFromTemplateCommand } = require("@aws-sdk/client-service-quotas"); // CommonJS import
 * // import type { ServiceQuotasClientConfig } from "@aws-sdk/client-service-quotas";
 * const config = {}; // type is ServiceQuotasClientConfig
 * const client = new ServiceQuotasClient(config);
 * const input = { // DeleteServiceQuotaIncreaseRequestFromTemplateRequest
 *   ServiceCode: "STRING_VALUE", // required
 *   QuotaCode: "STRING_VALUE", // required
 *   AwsRegion: "STRING_VALUE", // required
 * };
 * const command = new DeleteServiceQuotaIncreaseRequestFromTemplateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteServiceQuotaIncreaseRequestFromTemplateCommandInput - {@link DeleteServiceQuotaIncreaseRequestFromTemplateCommandInput}
 * @returns {@link DeleteServiceQuotaIncreaseRequestFromTemplateCommandOutput}
 * @see {@link DeleteServiceQuotaIncreaseRequestFromTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteServiceQuotaIncreaseRequestFromTemplateCommandOutput} for command's `response` shape.
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
 * @throws {@link IllegalArgumentException} (client fault)
 *  <p>Invalid input was provided.</p>
 *
 * @throws {@link NoAvailableOrganizationException} (client fault)
 *  <p>The Amazon Web Services account making this call is not a member of an organization.</p>
 *
 * @throws {@link NoSuchResourceException} (client fault)
 *  <p>The specified resource does not exist.</p>
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
export class DeleteServiceQuotaIncreaseRequestFromTemplateCommand extends $Command
  .classBuilder<
    DeleteServiceQuotaIncreaseRequestFromTemplateCommandInput,
    DeleteServiceQuotaIncreaseRequestFromTemplateCommandOutput,
    ServiceQuotasClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceQuotasClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ServiceQuotasV20190624", "DeleteServiceQuotaIncreaseRequestFromTemplate", {})
  .n("ServiceQuotasClient", "DeleteServiceQuotaIncreaseRequestFromTemplateCommand")
  .sc(DeleteServiceQuotaIncreaseRequestFromTemplate)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteServiceQuotaIncreaseRequestFromTemplateRequest;
      output: {};
    };
    sdk: {
      input: DeleteServiceQuotaIncreaseRequestFromTemplateCommandInput;
      output: DeleteServiceQuotaIncreaseRequestFromTemplateCommandOutput;
    };
  };
}
