// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetServiceQuotaIncreaseRequestFromTemplateRequest,
  GetServiceQuotaIncreaseRequestFromTemplateResponse,
} from "../models/models_0";
import {
  de_GetServiceQuotaIncreaseRequestFromTemplateCommand,
  se_GetServiceQuotaIncreaseRequestFromTemplateCommand,
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
 * The input for {@link GetServiceQuotaIncreaseRequestFromTemplateCommand}.
 */
export interface GetServiceQuotaIncreaseRequestFromTemplateCommandInput
  extends GetServiceQuotaIncreaseRequestFromTemplateRequest {}
/**
 * @public
 *
 * The output of {@link GetServiceQuotaIncreaseRequestFromTemplateCommand}.
 */
export interface GetServiceQuotaIncreaseRequestFromTemplateCommandOutput
  extends GetServiceQuotaIncreaseRequestFromTemplateResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves information about the specified quota increase request in your quota request
 *             template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceQuotasClient, GetServiceQuotaIncreaseRequestFromTemplateCommand } from "@aws-sdk/client-service-quotas"; // ES Modules import
 * // const { ServiceQuotasClient, GetServiceQuotaIncreaseRequestFromTemplateCommand } = require("@aws-sdk/client-service-quotas"); // CommonJS import
 * const client = new ServiceQuotasClient(config);
 * const input = { // GetServiceQuotaIncreaseRequestFromTemplateRequest
 *   ServiceCode: "STRING_VALUE", // required
 *   QuotaCode: "STRING_VALUE", // required
 *   AwsRegion: "STRING_VALUE", // required
 * };
 * const command = new GetServiceQuotaIncreaseRequestFromTemplateCommand(input);
 * const response = await client.send(command);
 * // { // GetServiceQuotaIncreaseRequestFromTemplateResponse
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
 * @param GetServiceQuotaIncreaseRequestFromTemplateCommandInput - {@link GetServiceQuotaIncreaseRequestFromTemplateCommandInput}
 * @returns {@link GetServiceQuotaIncreaseRequestFromTemplateCommandOutput}
 * @see {@link GetServiceQuotaIncreaseRequestFromTemplateCommandInput} for command's `input` shape.
 * @see {@link GetServiceQuotaIncreaseRequestFromTemplateCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetServiceQuotaIncreaseRequestFromTemplateCommand extends $Command
  .classBuilder<
    GetServiceQuotaIncreaseRequestFromTemplateCommandInput,
    GetServiceQuotaIncreaseRequestFromTemplateCommandOutput,
    ServiceQuotasClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ServiceQuotasClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ServiceQuotasV20190624", "GetServiceQuotaIncreaseRequestFromTemplate", {})
  .n("ServiceQuotasClient", "GetServiceQuotaIncreaseRequestFromTemplateCommand")
  .f(void 0, void 0)
  .ser(se_GetServiceQuotaIncreaseRequestFromTemplateCommand)
  .de(de_GetServiceQuotaIncreaseRequestFromTemplateCommand)
  .build() {}
