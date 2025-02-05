// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetAssociationForServiceQuotaTemplateRequest,
  GetAssociationForServiceQuotaTemplateResponse,
} from "../models/models_0";
import {
  de_GetAssociationForServiceQuotaTemplateCommand,
  se_GetAssociationForServiceQuotaTemplateCommand,
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
 * The input for {@link GetAssociationForServiceQuotaTemplateCommand}.
 */
export interface GetAssociationForServiceQuotaTemplateCommandInput
  extends GetAssociationForServiceQuotaTemplateRequest {}
/**
 * @public
 *
 * The output of {@link GetAssociationForServiceQuotaTemplateCommand}.
 */
export interface GetAssociationForServiceQuotaTemplateCommandOutput
  extends GetAssociationForServiceQuotaTemplateResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves the status of the association for the quota request template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceQuotasClient, GetAssociationForServiceQuotaTemplateCommand } from "@aws-sdk/client-service-quotas"; // ES Modules import
 * // const { ServiceQuotasClient, GetAssociationForServiceQuotaTemplateCommand } = require("@aws-sdk/client-service-quotas"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ServiceQuotasClient(config);
 * const input = {};
 * const command = new GetAssociationForServiceQuotaTemplateCommand(input);
 * const response = await client.send(command);
 * // { // GetAssociationForServiceQuotaTemplateResponse
 * //   ServiceQuotaTemplateAssociationStatus: "ASSOCIATED" || "DISASSOCIATED",
 * // };
 *
 * ```
 *
 * @param GetAssociationForServiceQuotaTemplateCommandInput - {@link GetAssociationForServiceQuotaTemplateCommandInput}
 * @returns {@link GetAssociationForServiceQuotaTemplateCommandOutput}
 * @see {@link GetAssociationForServiceQuotaTemplateCommandInput} for command's `input` shape.
 * @see {@link GetAssociationForServiceQuotaTemplateCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetAssociationForServiceQuotaTemplateCommand extends $Command
  .classBuilder<
    GetAssociationForServiceQuotaTemplateCommandInput,
    GetAssociationForServiceQuotaTemplateCommandOutput,
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
  .s("ServiceQuotasV20190624", "GetAssociationForServiceQuotaTemplate", {})
  .n("ServiceQuotasClient", "GetAssociationForServiceQuotaTemplateCommand")
  .f(void 0, void 0)
  .ser(se_GetAssociationForServiceQuotaTemplateCommand)
  .de(de_GetAssociationForServiceQuotaTemplateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetAssociationForServiceQuotaTemplateResponse;
    };
    sdk: {
      input: GetAssociationForServiceQuotaTemplateCommandInput;
      output: GetAssociationForServiceQuotaTemplateCommandOutput;
    };
  };
}
