// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListServiceQuotaIncreaseRequestsInTemplateRequest,
  ListServiceQuotaIncreaseRequestsInTemplateResponse,
} from "../models/models_0";
import {
  de_ListServiceQuotaIncreaseRequestsInTemplateCommand,
  se_ListServiceQuotaIncreaseRequestsInTemplateCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, ServiceQuotasClientResolvedConfig } from "../ServiceQuotasClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListServiceQuotaIncreaseRequestsInTemplateCommand}.
 */
export interface ListServiceQuotaIncreaseRequestsInTemplateCommandInput
  extends ListServiceQuotaIncreaseRequestsInTemplateRequest {}
/**
 * @public
 *
 * The output of {@link ListServiceQuotaIncreaseRequestsInTemplateCommand}.
 */
export interface ListServiceQuotaIncreaseRequestsInTemplateCommandOutput
  extends ListServiceQuotaIncreaseRequestsInTemplateResponse,
    __MetadataBearer {}

/**
 * <p>Lists the quota increase requests in the specified quota request template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceQuotasClient, ListServiceQuotaIncreaseRequestsInTemplateCommand } from "@aws-sdk/client-service-quotas"; // ES Modules import
 * // const { ServiceQuotasClient, ListServiceQuotaIncreaseRequestsInTemplateCommand } = require("@aws-sdk/client-service-quotas"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 * @public
 */
export class ListServiceQuotaIncreaseRequestsInTemplateCommand extends $Command
  .classBuilder<
    ListServiceQuotaIncreaseRequestsInTemplateCommandInput,
    ListServiceQuotaIncreaseRequestsInTemplateCommandOutput,
    ServiceQuotasClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceQuotasClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ServiceQuotasV20190624", "ListServiceQuotaIncreaseRequestsInTemplate", {})
  .n("ServiceQuotasClient", "ListServiceQuotaIncreaseRequestsInTemplateCommand")
  .f(void 0, void 0)
  .ser(se_ListServiceQuotaIncreaseRequestsInTemplateCommand)
  .de(de_ListServiceQuotaIncreaseRequestsInTemplateCommand)
  .build() {
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
