// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  PutServiceQuotaIncreaseRequestIntoTemplateRequest,
  PutServiceQuotaIncreaseRequestIntoTemplateResponse,
} from "../models/models_0";
import { PutServiceQuotaIncreaseRequestIntoTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutServiceQuotaIncreaseRequestIntoTemplateCommand}.
 */
export interface PutServiceQuotaIncreaseRequestIntoTemplateCommandInput extends PutServiceQuotaIncreaseRequestIntoTemplateRequest {}
/**
 * @public
 *
 * The output of {@link PutServiceQuotaIncreaseRequestIntoTemplateCommand}.
 */
export interface PutServiceQuotaIncreaseRequestIntoTemplateCommandOutput extends PutServiceQuotaIncreaseRequestIntoTemplateResponse, __MetadataBearer {}

/**
 * Adds a quota increase request to your quota request template.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceQuotasClient, PutServiceQuotaIncreaseRequestIntoTemplateCommand } from "@aws-sdk/client-service-quotas"; // ES Modules import
 * // const { ServiceQuotasClient, PutServiceQuotaIncreaseRequestIntoTemplateCommand } = require("@aws-sdk/client-service-quotas"); // CommonJS import
 * // import type { ServiceQuotasClientConfig } from "@aws-sdk/client-service-quotas";
 * const config = {}; // type is ServiceQuotasClientConfig
 * const client = new ServiceQuotasClient(config);
 * const input = { // PutServiceQuotaIncreaseRequestIntoTemplateRequest
 *   QuotaCode: "STRING_VALUE", // required
 *   ServiceCode: "STRING_VALUE", // required
 *   AwsRegion: "STRING_VALUE", // required
 *   DesiredValue: Number("double"), // required
 * };
 * const command = new PutServiceQuotaIncreaseRequestIntoTemplateCommand(input);
 * const response = await client.send(command);
 * // { // PutServiceQuotaIncreaseRequestIntoTemplateResponse
 * //   ServiceQuotaIncreaseRequestInTemplate: { // ServiceQuotaIncreaseRequestInTemplate
 * //     ServiceCode: "STRING_VALUE",
 * //     ServiceName: "STRING_VALUE",
 * //     QuotaCode: "STRING_VALUE",
 * //     QuotaName: "STRING_VALUE",
 * //     DesiredValue: Number("double"),
 * //     AwsRegion: "STRING_VALUE",
 * //     Unit: "STRING_VALUE",
 * //     GlobalQuota: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param PutServiceQuotaIncreaseRequestIntoTemplateCommandInput - {@link PutServiceQuotaIncreaseRequestIntoTemplateCommandInput}
 * @returns {@link PutServiceQuotaIncreaseRequestIntoTemplateCommandOutput}
 * @see {@link PutServiceQuotaIncreaseRequestIntoTemplateCommandInput} for command's `input` shape.
 * @see {@link PutServiceQuotaIncreaseRequestIntoTemplateCommandOutput} for command's `response` shape.
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
 * @throws {@link QuotaExceededException} (client fault)
 *
 * You have exceeded your service quota. To perform the requested action, remove some of the relevant resources, or use Service Quotas to request a service quota increase.
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
export class PutServiceQuotaIncreaseRequestIntoTemplateCommand extends command<PutServiceQuotaIncreaseRequestIntoTemplateCommandInput, PutServiceQuotaIncreaseRequestIntoTemplateCommandOutput>(
  _ep0,
  _mw0,
  "PutServiceQuotaIncreaseRequestIntoTemplate",
  PutServiceQuotaIncreaseRequestIntoTemplate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutServiceQuotaIncreaseRequestIntoTemplateRequest;
      output: PutServiceQuotaIncreaseRequestIntoTemplateResponse;
    };
    sdk: {
      input: PutServiceQuotaIncreaseRequestIntoTemplateCommandInput;
      output: PutServiceQuotaIncreaseRequestIntoTemplateCommandOutput;
    };
  };
}
