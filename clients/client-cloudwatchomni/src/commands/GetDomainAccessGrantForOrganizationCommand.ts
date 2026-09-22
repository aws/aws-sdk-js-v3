// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetDomainAccessGrantForOrganizationInput,
  GetDomainAccessGrantForOrganizationOutput,
} from "../models/models_0";
import { GetDomainAccessGrantForOrganization$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetDomainAccessGrantForOrganizationCommand}.
 */
export interface GetDomainAccessGrantForOrganizationCommandInput extends GetDomainAccessGrantForOrganizationInput {}
/**
 * @public
 *
 * The output of {@link GetDomainAccessGrantForOrganizationCommand}.
 */
export interface GetDomainAccessGrantForOrganizationCommandOutput extends GetDomainAccessGrantForOrganizationOutput, __MetadataBearer {}

/**
 * Retrieves the full detail of a single organization access grant by ID.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchOmniClient, GetDomainAccessGrantForOrganizationCommand } from "@aws-sdk/client-cloudwatchomni"; // ES Modules import
 * // const { CloudWatchOmniClient, GetDomainAccessGrantForOrganizationCommand } = require("@aws-sdk/client-cloudwatchomni"); // CommonJS import
 * // import type { CloudWatchOmniClientConfig } from "@aws-sdk/client-cloudwatchomni";
 * const config = {}; // type is CloudWatchOmniClientConfig
 * const client = new CloudWatchOmniClient(config);
 * const input = { // GetDomainAccessGrantForOrganizationInput
 *   grantId: "STRING_VALUE", // required
 * };
 * const command = new GetDomainAccessGrantForOrganizationCommand(input);
 * const response = await client.send(command);
 * // { // GetDomainAccessGrantForOrganizationOutput
 * //   accessGrant: { // OrganizationAccessGrant
 * //     grantId: "STRING_VALUE", // required
 * //     grantArn: "STRING_VALUE", // required
 * //     name: "STRING_VALUE",
 * //     domainId: "STRING_VALUE", // required
 * //     principal: { // OrganizationAccessGrantPrincipal
 * //       principalType: "IDC_USER" || "IDC_GROUP" || "IAM_USER" || "IAM_ROLE" || "IAM_ROOT", // required
 * //       principalId: "STRING_VALUE",
 * //       principalAttributes: [ // AccessGrantPrincipalAttributeList
 * //         { // AccessGrantPrincipalAttribute
 * //           key: "STRING_VALUE", // required
 * //           value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //     permission: "ADMIN", // required
 * //     grantType: "SERVICE_MANAGED" || "CUSTOMER_MANAGED", // required
 * //     createdBy: "STRING_VALUE", // required
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     updatedAt: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDomainAccessGrantForOrganizationCommandInput - {@link GetDomainAccessGrantForOrganizationCommandInput}
 * @returns {@link GetDomainAccessGrantForOrganizationCommandOutput}
 * @see {@link GetDomainAccessGrantForOrganizationCommandInput} for command's `input` shape.
 * @see {@link GetDomainAccessGrantForOrganizationCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchOmniClientResolvedConfig | config} for CloudWatchOmniClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  The caller is not authorized to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *  An unexpected error occurred while processing the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The specified resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was throttled due to exceeding the allowed request rate.
 *
 * @throws {@link ValidationException} (client fault)
 *  A parameter is specified incorrectly.
 *
 * @throws {@link CloudWatchOmniServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchOmni service.</p>
 *
 *
 * @example Get an organization domain access grant
 * ```javascript
 * // The following example retrieves the full detail of a single organization domain access grant by ID. Payloads are shown as JSON; on the wire they are CBOR-encoded.
 * const input = {
 *   grantId: "7f3e9d21-4c8b-4f6a-b1d2-3e4f5a6b7c8d"
 * };
 * const command = new GetDomainAccessGrantForOrganizationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   accessGrant: {
 *     createdAt: "2026-09-16T14:22:31Z",
 *     createdBy: "arn:aws:iam::123456789012:role/ObservabilityAdmin",
 *     domainId: "d-1a2b3c4d5e",
 *     grantArn: "arn:aws:cloudwatch:us-east-1:123456789012:organization-access-grant/7f3e9d21-4c8b-4f6a-b1d2-3e4f5a6b7c8d",
 *     grantId: "7f3e9d21-4c8b-4f6a-b1d2-3e4f5a6b7c8d",
 *     grantType: "CUSTOMER_MANAGED",
 *     name: "org-domain-admin",
 *     permission: "ADMIN",
 *     principal: {
 *       principalId: "94b6c7d8-1a2b-4c3d-9e4f-5a6b7c8d9e0f",
 *       principalType: "IDC_USER"
 *     },
 *     updatedAt: "2026-09-16T14:22:31Z"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetDomainAccessGrantForOrganizationCommand extends command<GetDomainAccessGrantForOrganizationCommandInput, GetDomainAccessGrantForOrganizationCommandOutput>(
  _ep0,
  _mw0,
  "GetDomainAccessGrantForOrganization",
  GetDomainAccessGrantForOrganization$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDomainAccessGrantForOrganizationInput;
      output: GetDomainAccessGrantForOrganizationOutput;
    };
    sdk: {
      input: GetDomainAccessGrantForOrganizationCommandInput;
      output: GetDomainAccessGrantForOrganizationCommandOutput;
    };
  };
}
