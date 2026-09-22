// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateDomainInput, UpdateDomainOutput } from "../models/models_0";
import { UpdateDomain$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateDomainCommand}.
 */
export interface UpdateDomainCommandInput extends UpdateDomainInput {}
/**
 * @public
 *
 * The output of {@link UpdateDomainCommand}.
 */
export interface UpdateDomainCommandOutput extends UpdateDomainOutput, __MetadataBearer {}

/**
 * Updates a domain's name or identity provider configuration.
 *
 * Only the provided fields are changed; omitted fields are left unchanged.
 * Renaming a domain also changes the endpoint URLs derived from its name.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchOmniClient, UpdateDomainCommand } from "@aws-sdk/client-cloudwatchomni"; // ES Modules import
 * // const { CloudWatchOmniClient, UpdateDomainCommand } = require("@aws-sdk/client-cloudwatchomni"); // CommonJS import
 * // import type { CloudWatchOmniClientConfig } from "@aws-sdk/client-cloudwatchomni";
 * const config = {}; // type is CloudWatchOmniClientConfig
 * const client = new CloudWatchOmniClient(config);
 * const input = { // UpdateDomainInput
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
 * const command = new UpdateDomainCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDomainOutput
 * //   domain: { // Domain
 * //     domainId: "STRING_VALUE", // required
 * //     domainArn: "STRING_VALUE", // required
 * //     name: "STRING_VALUE",
 * //     identityProviders: [ // IdentityProviderList // required
 * //       "IAM" || "IDC",
 * //     ],
 * //     identityProviderConfiguration: { // IdentityProviderConfiguration
 * //       identityCenterConfiguration: { // IdentityCenterConfiguration
 * //         identityCenterInstanceArn: "STRING_VALUE",
 * //       },
 * //     },
 * //     domainEndpointUrl: "STRING_VALUE", // required
 * //     customEndpointUrls: [ // StringList
 * //       "STRING_VALUE",
 * //     ],
 * //     identityCenterApplicationArn: "STRING_VALUE",
 * //     region: "STRING_VALUE", // required
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     updatedAt: new Date("TIMESTAMP"), // required
 * //     status: "ACTIVE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateDomainCommandInput - {@link UpdateDomainCommandInput}
 * @returns {@link UpdateDomainCommandOutput}
 * @see {@link UpdateDomainCommandInput} for command's `input` shape.
 * @see {@link UpdateDomainCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  A service quota was exceeded.
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
 * @example Rename a domain
 * ```javascript
 * // The following example performs a partial update that changes only the domain name; the omitted fields are left unchanged. Renaming the domain also updates the endpoint URLs derived from its name, and updatedAt advances past createdAt. Payloads are shown as JSON; on the wire they are CBOR-encoded.
 * const input = {
 *   domainId: "d-1a2b3c4d5e",
 *   name: "prod-observability-metrics"
 * };
 * const command = new UpdateDomainCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   domain: {
 *     createdAt: "2026-09-16T14:22:31Z",
 *     customEndpointUrls: [
 *       "https://prod-observability-metrics.cloudwatch-omni.global.app.aws"
 *     ],
 *     domainArn: "arn:aws:cloudwatch:us-east-1:123456789012:domain/d-1a2b3c4d5e",
 *     domainEndpointUrl: "https://d-1a2b3c4d5e.cloudwatch-omni.global.app.aws",
 *     domainId: "d-1a2b3c4d5e",
 *     identityCenterApplicationArn: "arn:aws:sso::123456789012:application/ssoins-1234567890abcdef/apl-0f9e8d7c6b5a4938",
 *     identityProviderConfiguration: {
 *       identityCenterConfiguration: {
 *         identityCenterInstanceArn: "arn:aws:sso:::instance/ssoins-1234567890abcdef"
 *       }
 *     },
 *     identityProviders: [
 *       "IDC"
 *     ],
 *     name: "prod-observability-metrics",
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
export class UpdateDomainCommand extends command<UpdateDomainCommandInput, UpdateDomainCommandOutput>(
  _ep0,
  _mw0,
  "UpdateDomain",
  UpdateDomain$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDomainInput;
      output: UpdateDomainOutput;
    };
    sdk: {
      input: UpdateDomainCommandInput;
      output: UpdateDomainCommandOutput;
    };
  };
}
