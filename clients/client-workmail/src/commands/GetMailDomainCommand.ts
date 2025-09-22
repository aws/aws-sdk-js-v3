// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetMailDomainRequest, GetMailDomainResponse } from "../models/models_0";
import { GetMailDomain } from "../schemas/schemas_13_Mail";
import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMailDomainCommand}.
 */
export interface GetMailDomainCommandInput extends GetMailDomainRequest {}
/**
 * @public
 *
 * The output of {@link GetMailDomainCommand}.
 */
export interface GetMailDomainCommandOutput extends GetMailDomainResponse, __MetadataBearer {}

/**
 * <p>Gets details for a mail domain, including domain records required to configure your domain with recommended security.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkMailClient, GetMailDomainCommand } from "@aws-sdk/client-workmail"; // ES Modules import
 * // const { WorkMailClient, GetMailDomainCommand } = require("@aws-sdk/client-workmail"); // CommonJS import
 * // import type { WorkMailClientConfig } from "@aws-sdk/client-workmail";
 * const config = {}; // type is WorkMailClientConfig
 * const client = new WorkMailClient(config);
 * const input = { // GetMailDomainRequest
 *   OrganizationId: "STRING_VALUE", // required
 *   DomainName: "STRING_VALUE", // required
 * };
 * const command = new GetMailDomainCommand(input);
 * const response = await client.send(command);
 * // { // GetMailDomainResponse
 * //   Records: [ // DnsRecords
 * //     { // DnsRecord
 * //       Type: "STRING_VALUE",
 * //       Hostname: "STRING_VALUE",
 * //       Value: "STRING_VALUE",
 * //     },
 * //   ],
 * //   IsTestDomain: true || false,
 * //   IsDefault: true || false,
 * //   OwnershipVerificationStatus: "PENDING" || "VERIFIED" || "FAILED",
 * //   DkimVerificationStatus: "PENDING" || "VERIFIED" || "FAILED",
 * // };
 *
 * ```
 *
 * @param GetMailDomainCommandInput - {@link GetMailDomainCommandInput}
 * @returns {@link GetMailDomainCommandOutput}
 * @see {@link GetMailDomainCommandInput} for command's `input` shape.
 * @see {@link GetMailDomainCommandOutput} for command's `response` shape.
 * @see {@link WorkMailClientResolvedConfig | config} for WorkMailClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link MailDomainNotFoundException} (client fault)
 *  <p>The domain specified is not found in your organization.</p>
 *
 * @throws {@link OrganizationNotFoundException} (client fault)
 *  <p>An operation received a valid organization identifier that either doesn't belong or
 *          exist in the system.</p>
 *
 * @throws {@link OrganizationStateException} (client fault)
 *  <p>The organization must have a valid state to perform certain
 *          operations on the organization or its members.</p>
 *
 * @throws {@link WorkMailServiceException}
 * <p>Base exception class for all service exceptions from WorkMail service.</p>
 *
 *
 * @public
 */
export class GetMailDomainCommand extends $Command
  .classBuilder<
    GetMailDomainCommandInput,
    GetMailDomainCommandOutput,
    WorkMailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WorkMailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WorkMailService", "GetMailDomain", {})
  .n("WorkMailClient", "GetMailDomainCommand")
  .sc(GetMailDomain)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMailDomainRequest;
      output: GetMailDomainResponse;
    };
    sdk: {
      input: GetMailDomainCommandInput;
      output: GetMailDomainCommandOutput;
    };
  };
}
