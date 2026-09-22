// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListDomainsInput, ListDomainsOutput } from "../models/models_0";
import { ListDomains$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListDomainsCommand}.
 */
export interface ListDomainsCommandInput extends ListDomainsInput {}
/**
 * @public
 *
 * The output of {@link ListDomainsCommand}.
 */
export interface ListDomainsCommandOutput extends ListDomainsOutput, __MetadataBearer {}

/**
 * Returns the caller's domains: the account-scoped domain and the
 * organization-scoped domain, if either exists. At most two domains are returned.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchOmniClient, ListDomainsCommand } from "@aws-sdk/client-cloudwatchomni"; // ES Modules import
 * // const { CloudWatchOmniClient, ListDomainsCommand } = require("@aws-sdk/client-cloudwatchomni"); // CommonJS import
 * // import type { CloudWatchOmniClientConfig } from "@aws-sdk/client-cloudwatchomni";
 * const config = {}; // type is CloudWatchOmniClientConfig
 * const client = new CloudWatchOmniClient(config);
 * const input = { // ListDomainsInput
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListDomainsCommand(input);
 * const response = await client.send(command);
 * // { // ListDomainsOutput
 * //   items: [ // DomainSummaryList // required
 * //     { // DomainSummary
 * //       domainId: "STRING_VALUE", // required
 * //       domainArn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       identityCenterInstanceArn: "STRING_VALUE",
 * //       region: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //       status: "ACTIVE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDomainsCommandInput - {@link ListDomainsCommandInput}
 * @returns {@link ListDomainsCommandOutput}
 * @see {@link ListDomainsCommandInput} for command's `input` shape.
 * @see {@link ListDomainsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchOmniClientResolvedConfig | config} for CloudWatchOmniClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  The caller is not authorized to perform this action.
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
 * @example List domains
 * ```javascript
 * // The following example lists the caller's domains. At most two are returned — the account-scoped domain and the organization-scoped domain — so there is no nextToken. Payloads are shown as JSON; on the wire they are CBOR-encoded.
 * const input = { /* empty *\/ };
 * const command = new ListDomainsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   items: [
 *     {
 *       createdAt: "2026-09-16T14:22:31Z",
 *       domainArn: "arn:aws:cloudwatch:us-east-1:123456789012:domain/d-1a2b3c4d5e",
 *       domainId: "d-1a2b3c4d5e",
 *       identityCenterInstanceArn: "arn:aws:sso:::instance/ssoins-1234567890abcdef",
 *       name: "prod-observability",
 *       region: "us-east-1",
 *       status: "ACTIVE",
 *       updatedAt: "2026-09-16T14:22:31Z"
 *     },
 *     {
 *       createdAt: "2026-09-16T14:22:31Z",
 *       domainArn: "arn:aws:cloudwatch:us-east-1:123456789012:organization-domain/d-9z8y7x6w5v",
 *       domainId: "d-9z8y7x6w5v",
 *       identityCenterInstanceArn: "arn:aws:sso:::instance/ssoins-1234567890abcdef",
 *       name: "prod-observability-org",
 *       region: "us-east-1",
 *       status: "ACTIVE",
 *       updatedAt: "2026-09-16T14:22:31Z"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListDomainsCommand extends command<ListDomainsCommandInput, ListDomainsCommandOutput>(
  _ep0,
  _mw0,
  "ListDomains",
  ListDomains$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDomainsInput;
      output: ListDomainsOutput;
    };
    sdk: {
      input: ListDomainsCommandInput;
      output: ListDomainsCommandOutput;
    };
  };
}
