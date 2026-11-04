// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DeleteServiceQuotaIncreaseRequestFromTemplateRequest,
  DeleteServiceQuotaIncreaseRequestFromTemplateResponse,
} from "../models/models_0";
import { DeleteServiceQuotaIncreaseRequestFromTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteServiceQuotaIncreaseRequestFromTemplateCommand}.
 */
export interface DeleteServiceQuotaIncreaseRequestFromTemplateCommandInput extends DeleteServiceQuotaIncreaseRequestFromTemplateRequest {}
/**
 * @public
 *
 * The output of {@link DeleteServiceQuotaIncreaseRequestFromTemplateCommand}.
 */
export interface DeleteServiceQuotaIncreaseRequestFromTemplateCommandOutput extends DeleteServiceQuotaIncreaseRequestFromTemplateResponse, __MetadataBearer {}

/**
 * Deletes the quota increase request for the specified quota from your quota request template.
 *
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
 *
 * You do not have sufficient permission to perform this action.
 *
 * @throws {@link AWSServiceAccessNotEnabledException} (client fault)
 *
 * The action you attempted is not allowed unless Service Access with Service Quotas is enabled in your organization.
 *
 * @throws {@link DependencyAccessDeniedException} (client fault)
 *
 * You can't perform this action because a dependency does not have access.
 *
 * @throws {@link IllegalArgumentException} (client fault)
 *
 * Invalid input was provided.
 *
 * @throws {@link NoAvailableOrganizationException} (client fault)
 *
 * The Amazon Web Services account making this call is not a member of an organization.
 *
 * @throws {@link NoSuchResourceException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ServiceException} (server fault)
 *
 * Something went wrong.
 *
 * @throws {@link TemplatesNotAvailableInRegionException} (client fault)
 *
 * The Service Quotas template is not available in this Amazon Web Services Region.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * Due to throttling, the request was denied. Slow down the rate of request calls, or request an increase for this quota.
 *
 * @throws {@link ServiceQuotasServiceException}
 *
 * Base exception class for all service exceptions from ServiceQuotas service.
 *
 * @public
 */
export class DeleteServiceQuotaIncreaseRequestFromTemplateCommand extends command<DeleteServiceQuotaIncreaseRequestFromTemplateCommandInput, DeleteServiceQuotaIncreaseRequestFromTemplateCommandOutput>(
  _ep0,
  _mw0,
  "DeleteServiceQuotaIncreaseRequestFromTemplate",
  DeleteServiceQuotaIncreaseRequestFromTemplate$
) {
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
