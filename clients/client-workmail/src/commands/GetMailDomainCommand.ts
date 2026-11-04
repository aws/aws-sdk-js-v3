// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetMailDomainRequest, GetMailDomainResponse } from "../models/models_0";
import { GetMailDomain$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Gets details for a mail domain, including domain records required to configure your domain with recommended security.
 *
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
 *
 * One or more of the input parameters don't match the service's restrictions.
 *
 * @throws {@link MailDomainNotFoundException} (client fault)
 *
 * The domain specified is not found in your organization.
 *
 * @throws {@link OrganizationNotFoundException} (client fault)
 *
 * An operation received a valid organization identifier that either doesn't belong or exist in the system.
 *
 * @throws {@link OrganizationStateException} (client fault)
 *
 * The organization must have a valid state to perform certain operations on the organization or its members.
 *
 * @throws {@link WorkMailServiceException}
 *
 * Base exception class for all service exceptions from WorkMail service.
 *
 * @public
 */
export class GetMailDomainCommand extends command<GetMailDomainCommandInput, GetMailDomainCommandOutput>(
  _ep0,
  _mw0,
  "GetMailDomain",
  GetMailDomain$
) {
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
