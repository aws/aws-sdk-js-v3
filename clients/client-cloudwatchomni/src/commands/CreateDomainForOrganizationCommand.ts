// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateDomainForOrganizationInput, CreateDomainForOrganizationOutput } from "../models/models_0";
import { CreateDomainForOrganization$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateDomainForOrganizationCommand}.
 */
export interface CreateDomainForOrganizationCommandInput extends CreateDomainForOrganizationInput {}
/**
 * @public
 *
 * The output of {@link CreateDomainForOrganizationCommand}.
 */
export interface CreateDomainForOrganizationCommandOutput extends CreateDomainForOrganizationOutput, __MetadataBearer {}

/**
 * Creates an organization-scoped domain for the caller's AWS Organization.
 * Only the organization's management account can call this operation.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchOmniClient, CreateDomainForOrganizationCommand } from "@aws-sdk/client-cloudwatchomni"; // ES Modules import
 * // const { CloudWatchOmniClient, CreateDomainForOrganizationCommand } = require("@aws-sdk/client-cloudwatchomni"); // CommonJS import
 * // import type { CloudWatchOmniClientConfig } from "@aws-sdk/client-cloudwatchomni";
 * const config = {}; // type is CloudWatchOmniClientConfig
 * const client = new CloudWatchOmniClient(config);
 * const input = { // CreateDomainForOrganizationInput
 *   name: "STRING_VALUE", // required
 *   identityProviders: [ // IdentityProviderList // required
 *     "IAM" || "IDC",
 *   ],
 *   identityProviderConfiguration: { // IdentityProviderConfiguration
 *     identityCenterConfiguration: { // IdentityCenterConfiguration
 *       identityCenterInstanceArn: "STRING_VALUE",
 *     },
 *   },
 *   domainAccessRoleArn: "STRING_VALUE", // required
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateDomainForOrganizationCommand(input);
 * const response = await client.send(command);
 * // { // CreateDomainForOrganizationOutput
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
 * @param CreateDomainForOrganizationCommandInput - {@link CreateDomainForOrganizationCommandInput}
 * @returns {@link CreateDomainForOrganizationCommandOutput}
 * @see {@link CreateDomainForOrganizationCommandInput} for command's `input` shape.
 * @see {@link CreateDomainForOrganizationCommandOutput} for command's `response` shape.
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
 * @example Create an organization domain
 * ```javascript
 * // The following example creates an organization-scoped domain from the organization's management account, configures it with an Identity Center instance, and supplies an IAM role in the management account for domain access. Payloads are shown as JSON; on the wire they are CBOR-encoded.
 * const input = {
 *   clientToken: "3f2a9c1e-7b04-4d8a-9e15-6c2b8d0f4a73",
 *   domainAccessRoleArn: "arn:aws:iam::123456789012:role/CloudWatchOrganizationDomainAccessRole",
 *   identityProviderConfiguration: {
 *     identityCenterConfiguration: {
 *       identityCenterInstanceArn: "arn:aws:sso:::instance/ssoins-1234567890abcdef"
 *     }
 *   },
 *   identityProviders: [
 *     "IDC"
 *   ],
 *   name: "prod-observability-org",
 *   tags: {
 *     Team: "observability"
 *   }
 * };
 * const command = new CreateDomainForOrganizationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   organizationDomain: {
 *     createdAt: "2026-09-16T14:22:31Z",
 *     customEndpointUrls: [
 *       "https://prod-observability-org.cloudwatch-omni.global.app.aws"
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
 *     name: "prod-observability-org",
 *     organizationId: "o-a1b2c3d4e5",
 *     ownerAccountId: "123456789012",
 *     region: "us-east-1",
 *     status: "ACTIVE",
 *     updatedAt: "2026-09-16T14:22:31Z"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateDomainForOrganizationCommand extends command<CreateDomainForOrganizationCommandInput, CreateDomainForOrganizationCommandOutput>(
  _ep0,
  _mw0,
  "CreateDomainForOrganization",
  CreateDomainForOrganization$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDomainForOrganizationInput;
      output: CreateDomainForOrganizationOutput;
    };
    sdk: {
      input: CreateDomainForOrganizationCommandInput;
      output: CreateDomainForOrganizationCommandOutput;
    };
  };
}
