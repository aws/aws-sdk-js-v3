// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetDomainInput, GetDomainOutput } from "../models/models_0";
import { GetDomain$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetDomainCommand}.
 */
export interface GetDomainCommandInput extends GetDomainInput {}
/**
 * @public
 *
 * The output of {@link GetDomainCommand}.
 */
export interface GetDomainCommandOutput extends GetDomainOutput, __MetadataBearer {}

/**
 * Retrieves the details of a domain by ID.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchOmniClient, GetDomainCommand } from "@aws-sdk/client-cloudwatchomni"; // ES Modules import
 * // const { CloudWatchOmniClient, GetDomainCommand } = require("@aws-sdk/client-cloudwatchomni"); // CommonJS import
 * // import type { CloudWatchOmniClientConfig } from "@aws-sdk/client-cloudwatchomni";
 * const config = {}; // type is CloudWatchOmniClientConfig
 * const client = new CloudWatchOmniClient(config);
 * const input = { // GetDomainInput
 *   domainId: "STRING_VALUE", // required
 * };
 * const command = new GetDomainCommand(input);
 * const response = await client.send(command);
 * // { // GetDomainOutput
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
 * @param GetDomainCommandInput - {@link GetDomainCommandInput}
 * @returns {@link GetDomainCommandOutput}
 * @see {@link GetDomainCommandInput} for command's `input` shape.
 * @see {@link GetDomainCommandOutput} for command's `response` shape.
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
 * @example Get a domain
 * ```javascript
 * // The following example retrieves the configuration and status of an Identity Center domain by its ID. Payloads are shown as JSON; on the wire they are CBOR-encoded.
 * const input = {
 *   domainId: "d-1a2b3c4d5e"
 * };
 * const command = new GetDomainCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   domain: {
 *     createdAt: "2026-09-16T14:22:31Z",
 *     customEndpointUrls: [
 *       "https://prod-observability.cloudwatch-omni.global.app.aws"
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
 *     name: "prod-observability",
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
export class GetDomainCommand extends command<GetDomainCommandInput, GetDomainCommandOutput>(
  _ep0,
  _mw0,
  "GetDomain",
  GetDomain$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDomainInput;
      output: GetDomainOutput;
    };
    sdk: {
      input: GetDomainCommandInput;
      output: GetDomainCommandOutput;
    };
  };
}
