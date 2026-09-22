// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateDomainForOrganizationInput, UpdateDomainForOrganizationOutput } from "../models/models_0";
import { UpdateDomainForOrganization$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateDomainForOrganizationCommand}.
 */
export interface UpdateDomainForOrganizationCommandInput extends UpdateDomainForOrganizationInput {}
/**
 * @public
 *
 * The output of {@link UpdateDomainForOrganizationCommand}.
 */
export interface UpdateDomainForOrganizationCommandOutput extends UpdateDomainForOrganizationOutput, __MetadataBearer {}

/**
 * Updates an organization domain's name or identity provider configuration. Call this
 * operation in the Region where the domain was created.
 *
 * Only the provided fields are changed; omitted fields are left unchanged.
 * Renaming a domain also changes the endpoint URLs derived from its name.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchOmniClient, UpdateDomainForOrganizationCommand } from "@aws-sdk/client-cloudwatchomni"; // ES Modules import
 * // const { CloudWatchOmniClient, UpdateDomainForOrganizationCommand } = require("@aws-sdk/client-cloudwatchomni"); // CommonJS import
 * // import type { CloudWatchOmniClientConfig } from "@aws-sdk/client-cloudwatchomni";
 * const config = {}; // type is CloudWatchOmniClientConfig
 * const client = new CloudWatchOmniClient(config);
 * const input = { // UpdateDomainForOrganizationInput
 *   domainId: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   identityProviders: [ // IdentityProviderList
 *     "IAM" || "IDC",
 *   ],
 *   identityProviderConfiguration: { // IdentityProviderConfiguration
 *     identityCenterConfiguration: { // IdentityCenterConfiguration
 *       identityCenterInstanceArn: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new UpdateDomainForOrganizationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDomainForOrganizationOutput
 * //   organizationDomain: { // OrganizationDomain
 * //     domainId: "STRING_VALUE", // required
 * //     domainArn: "STRING_VALUE", // required
 * //     name: "STRING_VALUE",
 * //     domainEndpointUrl: "STRING_VALUE", // required
 * //     customEndpointUrls: [ // StringList
 * //       "STRING_VALUE",
 * //     ],
 * //     organizationId: "STRING_VALUE", // required
 * //     ownerAccountId: "STRING_VALUE", // required
 * //     identityProviders: [ // IdentityProviderList // required
 * //       "IAM" || "IDC",
 * //     ],
 * //     identityProviderConfiguration: { // IdentityProviderConfiguration
 * //       identityCenterConfiguration: { // IdentityCenterConfiguration
 * //         identityCenterInstanceArn: "STRING_VALUE",
 * //       },
 * //     },
 * //     identityCenterApplicationArn: "STRING_VALUE",
 * //     region: "STRING_VALUE", // required
 * //     status: "ACTIVE", // required
 * //     domainAccessRoleArn: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     updatedAt: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateDomainForOrganizationCommandInput - {@link UpdateDomainForOrganizationCommandInput}
 * @returns {@link UpdateDomainForOrganizationCommandOutput}
 * @see {@link UpdateDomainForOrganizationCommandInput} for command's `input` shape.
 * @see {@link UpdateDomainForOrganizationCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchOmniClientResolvedConfig | config} for CloudWatchOmniClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  The caller is not authorized to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *  The operation could not be completed because of a conflict with the current
 * state of the resource.
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
 * @example Rename an organization domain
 * ```javascript
 * // The following example performs a partial update that changes only the organization domain name; the omitted fields are left unchanged. The endpoint URLs derived from the name are updated, and updatedAt advances past createdAt. Payloads are shown as JSON; on the wire they are CBOR-encoded.
 * const input = {
 *   domainId: "d-9z8y7x6w5v",
 *   name: "prod-observability-org-metrics"
 * };
 * const command = new UpdateDomainForOrganizationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   organizationDomain: {
 *     createdAt: "2026-09-16T14:22:31Z",
 *     customEndpointUrls: [
 *       "https://prod-observability-org-metrics.cloudwatch-omni.global.app.aws"
 *     ],
 *     domainAccessRoleArn: "arn:aws:iam::123456789012:role/CloudWatchOrganizationDomainAccessRole",
 *     domainArn: "arn:aws:cloudwatch:us-east-1:123456789012:organization-domain/d-9z8y7x6w5v",
 *     domainEndpointUrl: "https://d-9z8y7x6w5v.cloudwatch-omni.global.app.aws",
 *     domainId: "d-9z8y7x6w5v",
 *     identityCenterApplicationArn: "arn:aws:sso::123456789012:application/ssoins-1234567890abcdef/apl-0f9e8d7c6b5a4938",
 *     identityProviderConfiguration: {
 *       identityCenterConfiguration: {
 *         identityCenterInstanceArn: "arn:aws:sso:::instance/ssoins-1234567890abcdef"
 *       }
 *     },
 *     identityProviders: [
 *       "IDC"
 *     ],
 *     name: "prod-observability-org-metrics",
 *     organizationId: "o-a1b2c3d4e5",
 *     ownerAccountId: "123456789012",
 *     region: "us-east-1",
 *     status: "ACTIVE",
 *     updatedAt: "2026-09-17T09:11:52Z"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateDomainForOrganizationCommand extends command<UpdateDomainForOrganizationCommandInput, UpdateDomainForOrganizationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateDomainForOrganization",
  UpdateDomainForOrganization$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDomainForOrganizationInput;
      output: UpdateDomainForOrganizationOutput;
    };
    sdk: {
      input: UpdateDomainForOrganizationCommandInput;
      output: UpdateDomainForOrganizationCommandOutput;
    };
  };
}
