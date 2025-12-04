// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DisassociateAwsTrainingCertificationEmailDomainRequest,
  DisassociateAwsTrainingCertificationEmailDomainResponse,
} from "../models/models_0";
import type {
  PartnerCentralAccountClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartnerCentralAccountClient";
import { DisassociateAwsTrainingCertificationEmailDomain } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateAwsTrainingCertificationEmailDomainCommand}.
 */
export interface DisassociateAwsTrainingCertificationEmailDomainCommandInput
  extends DisassociateAwsTrainingCertificationEmailDomainRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateAwsTrainingCertificationEmailDomainCommand}.
 */
export interface DisassociateAwsTrainingCertificationEmailDomainCommandOutput
  extends DisassociateAwsTrainingCertificationEmailDomainResponse,
    __MetadataBearer {}

/**
 * <p>Removes the association between an email domain and AWS training and certification for the partner account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralAccountClient, DisassociateAwsTrainingCertificationEmailDomainCommand } from "@aws-sdk/client-partnercentral-account"; // ES Modules import
 * // const { PartnerCentralAccountClient, DisassociateAwsTrainingCertificationEmailDomainCommand } = require("@aws-sdk/client-partnercentral-account"); // CommonJS import
 * // import type { PartnerCentralAccountClientConfig } from "@aws-sdk/client-partnercentral-account";
 * const config = {}; // type is PartnerCentralAccountClientConfig
 * const client = new PartnerCentralAccountClient(config);
 * const input = { // DisassociateAwsTrainingCertificationEmailDomainRequest
 *   Catalog: "STRING_VALUE", // required
 *   Identifier: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 *   DomainName: "STRING_VALUE", // required
 * };
 * const command = new DisassociateAwsTrainingCertificationEmailDomainCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateAwsTrainingCertificationEmailDomainCommandInput - {@link DisassociateAwsTrainingCertificationEmailDomainCommandInput}
 * @returns {@link DisassociateAwsTrainingCertificationEmailDomainCommandOutput}
 * @see {@link DisassociateAwsTrainingCertificationEmailDomainCommandInput} for command's `input` shape.
 * @see {@link DisassociateAwsTrainingCertificationEmailDomainCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralAccountClientResolvedConfig | config} for PartnerCentralAccountClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied due to insufficient permissions. The caller does not have the required permissions to perform this operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the resource. This typically occurs when trying to create a resource that already exists or modify a resource that has been changed by another process.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be found. This may occur when referencing a resource that does not exist or has been deleted.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled due to too many requests being sent in a short period of time. The client should implement exponential backoff and retry the request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed validation. One or more input parameters are invalid, missing, or do not meet the required format or constraints.</p>
 *
 * @throws {@link PartnerCentralAccountServiceException}
 * <p>Base exception class for all service exceptions from PartnerCentralAccount service.</p>
 *
 *
 * @public
 */
export class DisassociateAwsTrainingCertificationEmailDomainCommand extends $Command
  .classBuilder<
    DisassociateAwsTrainingCertificationEmailDomainCommandInput,
    DisassociateAwsTrainingCertificationEmailDomainCommandOutput,
    PartnerCentralAccountClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PartnerCentralAccountClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PartnerCentralAccount", "DisassociateAwsTrainingCertificationEmailDomain", {})
  .n("PartnerCentralAccountClient", "DisassociateAwsTrainingCertificationEmailDomainCommand")
  .sc(DisassociateAwsTrainingCertificationEmailDomain)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateAwsTrainingCertificationEmailDomainRequest;
      output: {};
    };
    sdk: {
      input: DisassociateAwsTrainingCertificationEmailDomainCommandInput;
      output: DisassociateAwsTrainingCertificationEmailDomainCommandOutput;
    };
  };
}
