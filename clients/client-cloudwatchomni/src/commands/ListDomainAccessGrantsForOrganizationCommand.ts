// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListDomainAccessGrantsForOrganizationInput,
  ListDomainAccessGrantsForOrganizationOutput,
} from "../models/models_0";
import { ListDomainAccessGrantsForOrganization$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListDomainAccessGrantsForOrganizationCommand}.
 */
export interface ListDomainAccessGrantsForOrganizationCommandInput extends ListDomainAccessGrantsForOrganizationInput {}
/**
 * @public
 *
 * The output of {@link ListDomainAccessGrantsForOrganizationCommand}.
 */
export interface ListDomainAccessGrantsForOrganizationCommandOutput extends ListDomainAccessGrantsForOrganizationOutput, __MetadataBearer {}

/**
 * Returns organization-level domain access grants, with optional filtering by
 * domain, principal, or permission. A grant is returned only when it matches
 * every filter supplied. With no filters, returns the grants for the caller's
 * organization.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchOmniClient, ListDomainAccessGrantsForOrganizationCommand } from "@aws-sdk/client-cloudwatchomni"; // ES Modules import
 * // const { CloudWatchOmniClient, ListDomainAccessGrantsForOrganizationCommand } = require("@aws-sdk/client-cloudwatchomni"); // CommonJS import
 * // import type { CloudWatchOmniClientConfig } from "@aws-sdk/client-cloudwatchomni";
 * const config = {}; // type is CloudWatchOmniClientConfig
 * const client = new CloudWatchOmniClient(config);
 * const input = { // ListDomainAccessGrantsForOrganizationInput
 *   domainId: "STRING_VALUE",
 *   principalId: "STRING_VALUE",
 *   principalType: "IDC_USER" || "IDC_GROUP" || "IAM_USER" || "IAM_ROLE" || "IAM_ROOT",
 *   permission: "ADMIN",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListDomainAccessGrantsForOrganizationCommand(input);
 * const response = await client.send(command);
 * // { // ListDomainAccessGrantsForOrganizationOutput
 * //   items: [ // OrganizationAccessGrantSummaryList // required
 * //     { // OrganizationAccessGrantSummary
 * //       grantId: "STRING_VALUE", // required
 * //       grantArn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE",
 * //       domainId: "STRING_VALUE", // required
 * //       principal: { // OrganizationAccessGrantPrincipal
 * //         principalType: "IDC_USER" || "IDC_GROUP" || "IAM_USER" || "IAM_ROLE" || "IAM_ROOT", // required
 * //         principalId: "STRING_VALUE",
 * //         principalAttributes: [ // AccessGrantPrincipalAttributeList
 * //           { // AccessGrantPrincipalAttribute
 * //             key: "STRING_VALUE", // required
 * //             value: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //       permission: "ADMIN", // required
 * //       grantType: "SERVICE_MANAGED" || "CUSTOMER_MANAGED", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDomainAccessGrantsForOrganizationCommandInput - {@link ListDomainAccessGrantsForOrganizationCommandInput}
 * @returns {@link ListDomainAccessGrantsForOrganizationCommandOutput}
 * @see {@link ListDomainAccessGrantsForOrganizationCommandInput} for command's `input` shape.
 * @see {@link ListDomainAccessGrantsForOrganizationCommandOutput} for command's `response` shape.
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
 * @example List organization domain access grants
 * ```javascript
 * // The following example lists the first page of organization domain access grants and returns a nextToken to retrieve the next page. Payloads are shown as JSON; on the wire they are CBOR-encoded.
 * const input = {
 *   domainId: "d-1a2b3c4d5e",
 *   maxResults: 50
 * };
 * const command = new ListDomainAccessGrantsForOrganizationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   items: [
 *     {
 *       createdAt: "2026-09-16T14:22:31Z",
 *       domainId: "d-1a2b3c4d5e",
 *       grantArn: "arn:aws:cloudwatch:us-east-1:123456789012:organization-access-grant/7f3e9d21-4c8b-4f6a-b1d2-3e4f5a6b7c8d",
 *       grantId: "7f3e9d21-4c8b-4f6a-b1d2-3e4f5a6b7c8d",
 *       grantType: "CUSTOMER_MANAGED",
 *       name: "org-domain-admin",
 *       permission: "ADMIN",
 *       principal: {
 *         principalId: "94b6c7d8-1a2b-4c3d-9e4f-5a6b7c8d9e0f",
 *         principalType: "IDC_USER"
 *       },
 *       updatedAt: "2026-09-16T14:22:31Z"
 *     },
 *     {
 *       createdAt: "2026-09-16T14:22:31Z",
 *       domainId: "d-1a2b3c4d5e",
 *       grantArn: "arn:aws:cloudwatch:us-east-1:123456789012:organization-access-grant/8a1b2c3d-4e5f-4a6b-8c7d-9e0f1a2b3c4d",
 *       grantId: "8a1b2c3d-4e5f-4a6b-8c7d-9e0f1a2b3c4d",
 *       grantType: "CUSTOMER_MANAGED",
 *       name: "org-domain-admin-group",
 *       permission: "ADMIN",
 *       principal: {
 *         principalId: "2f5a8c1b-6d3e-4f7a-8b9c-0d1e2f3a4b5c",
 *         principalType: "IDC_GROUP"
 *       },
 *       updatedAt: "2026-09-16T14:22:31Z"
 *     }
 *   ],
 *   nextToken: "eyJvZmZzZXQiOjIwfQ=="
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListDomainAccessGrantsForOrganizationCommand extends command<ListDomainAccessGrantsForOrganizationCommandInput, ListDomainAccessGrantsForOrganizationCommandOutput>(
  _ep0,
  _mw0,
  "ListDomainAccessGrantsForOrganization",
  ListDomainAccessGrantsForOrganization$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDomainAccessGrantsForOrganizationInput;
      output: ListDomainAccessGrantsForOrganizationOutput;
    };
    sdk: {
      input: ListDomainAccessGrantsForOrganizationCommandInput;
      output: ListDomainAccessGrantsForOrganizationCommandOutput;
    };
  };
}
