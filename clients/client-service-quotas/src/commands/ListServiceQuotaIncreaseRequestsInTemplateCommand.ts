// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListServiceQuotaIncreaseRequestsInTemplateRequest,
  ListServiceQuotaIncreaseRequestsInTemplateResponse,
} from "../models/models_0";
import { ListServiceQuotaIncreaseRequestsInTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListServiceQuotaIncreaseRequestsInTemplateCommand}.
 */
export interface ListServiceQuotaIncreaseRequestsInTemplateCommandInput extends ListServiceQuotaIncreaseRequestsInTemplateRequest {}
/**
 * @public
 *
 * The output of {@link ListServiceQuotaIncreaseRequestsInTemplateCommand}.
 */
export interface ListServiceQuotaIncreaseRequestsInTemplateCommandOutput extends ListServiceQuotaIncreaseRequestsInTemplateResponse, __MetadataBearer {}

/**
 * Lists the quota increase requests in the specified quota request template.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceQuotasClient, ListServiceQuotaIncreaseRequestsInTemplateCommand } from "@aws-sdk/client-service-quotas"; // ES Modules import
 * // const { ServiceQuotasClient, ListServiceQuotaIncreaseRequestsInTemplateCommand } = require("@aws-sdk/client-service-quotas"); // CommonJS import
 * // import type { ServiceQuotasClientConfig } from "@aws-sdk/client-service-quotas";
 * const config = {}; // type is ServiceQuotasClientConfig
 * const client = new ServiceQuotasClient(config);
 * const input = { // ListServiceQuotaIncreaseRequestsInTemplateRequest
 *   ServiceCode: "STRING_VALUE",
 *   AwsRegion: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListServiceQuotaIncreaseRequestsInTemplateCommand(input);
 * const response = await client.send(command);
 * // { // ListServiceQuotaIncreaseRequestsInTemplateResponse
 * //   ServiceQuotaIncreaseRequestInTemplateList: [ // ServiceQuotaIncreaseRequestInTemplateList
 * //     { // ServiceQuotaIncreaseRequestInTemplate
 * //       ServiceCode: "STRING_VALUE",
 * //       ServiceName: "STRING_VALUE",
 * //       QuotaCode: "STRING_VALUE",
 * //       QuotaName: "STRING_VALUE",
 * //       DesiredValue: Number("double"),
 * //       AwsRegion: "STRING_VALUE",
 * //       Unit: "STRING_VALUE",
 * //       GlobalQuota: true || false,
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListServiceQuotaIncreaseRequestsInTemplateCommandInput - {@link ListServiceQuotaIncreaseRequestsInTemplateCommandInput}
 * @returns {@link ListServiceQuotaIncreaseRequestsInTemplateCommandOutput}
 * @see {@link ListServiceQuotaIncreaseRequestsInTemplateCommandInput} for command's `input` shape.
 * @see {@link ListServiceQuotaIncreaseRequestsInTemplateCommandOutput} for command's `response` shape.
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
export class ListServiceQuotaIncreaseRequestsInTemplateCommand extends command<ListServiceQuotaIncreaseRequestsInTemplateCommandInput, ListServiceQuotaIncreaseRequestsInTemplateCommandOutput>(
  _ep0,
  _mw0,
  "ListServiceQuotaIncreaseRequestsInTemplate",
  ListServiceQuotaIncreaseRequestsInTemplate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListServiceQuotaIncreaseRequestsInTemplateRequest;
      output: ListServiceQuotaIncreaseRequestsInTemplateResponse;
    };
    sdk: {
      input: ListServiceQuotaIncreaseRequestsInTemplateCommandInput;
      output: ListServiceQuotaIncreaseRequestsInTemplateCommandOutput;
    };
  };
}
