// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListIntegrationsInput, ListIntegrationsOutput } from "../models/models_0";
import { ListIntegrations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListIntegrationsCommand}.
 */
export interface ListIntegrationsCommandInput extends ListIntegrationsInput {}
/**
 * @public
 *
 * The output of {@link ListIntegrationsCommand}.
 */
export interface ListIntegrationsCommandOutput extends ListIntegrationsOutput, __MetadataBearer {}

/**
 * Lists the integrations in the account, optionally filtered by type, status,
 * or name. Results are paginated.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchOmniClient, ListIntegrationsCommand } from "@aws-sdk/client-cloudwatchomni"; // ES Modules import
 * // const { CloudWatchOmniClient, ListIntegrationsCommand } = require("@aws-sdk/client-cloudwatchomni"); // CommonJS import
 * // import type { CloudWatchOmniClientConfig } from "@aws-sdk/client-cloudwatchomni";
 * const config = {}; // type is CloudWatchOmniClientConfig
 * const client = new CloudWatchOmniClient(config);
 * const input = { // ListIntegrationsInput
 *   integrationType: "AWS_CONFIG_SLREC" || "SLACK" || "EXTERNAL_AGENT" || "AWS_INTEGRATION",
 *   status: "ACTIVE" || "DELETED" || "PENDING" || "PENDING_OAUTH" || "ERROR" || "FAILED",
 *   name: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListIntegrationsCommand(input);
 * const response = await client.send(command);
 * // { // ListIntegrationsOutput
 * //   items: [ // IntegrationList // required
 * //     { // Integration
 * //       integrationId: "STRING_VALUE", // required
 * //       integrationArn: "STRING_VALUE",
 * //       integrationType: "AWS_CONFIG_SLREC" || "SLACK" || "EXTERNAL_AGENT" || "AWS_INTEGRATION", // required
 * //       name: "STRING_VALUE", // required
 * //       status: "ACTIVE" || "DELETED" || "PENDING" || "PENDING_OAUTH" || "ERROR" || "FAILED", // required
 * //       authType: "NONE" || "OAUTH2" || "API_KEY",
 * //       credentialArn: "STRING_VALUE",
 * //       roleArn: "STRING_VALUE",
 * //       integrationAttributes: { // StringMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       authorizationUrl: "STRING_VALUE",
 * //       errorMessage: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       scope: "ACCOUNT" || "ORGANIZATION",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListIntegrationsCommandInput - {@link ListIntegrationsCommandInput}
 * @returns {@link ListIntegrationsCommandOutput}
 * @see {@link ListIntegrationsCommandInput} for command's `input` shape.
 * @see {@link ListIntegrationsCommandOutput} for command's `response` shape.
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
 * @example List integrations of a type
 * ```javascript
 * // The following example lists up to 20 AWS_INTEGRATION integrations in the account. Payloads are shown as JSON; on the wire they are CBOR-encoded.
 * const input = {
 *   integrationType: "AWS_INTEGRATION",
 *   maxResults: 20
 * };
 * const command = new ListIntegrationsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   items: [
 *     {
 *       createdAt: "2026-09-16T00:03:00Z",
 *       integrationArn: "arn:aws:cloudwatch:us-east-1:123456789012:integration/a1b2c3d4-5e6f-4a3b-8c9d-0e1f2a3b4c5d",
 *       integrationId: "a1b2c3d4-5e6f-4a3b-8c9d-0e1f2a3b4c5d",
 *       integrationType: "AWS_INTEGRATION",
 *       name: "my-aws-integration",
 *       status: "ACTIVE",
 *       updatedAt: "2026-09-16T00:03:00Z"
 *     }
 *   ],
 *   nextToken: "eyJvZmZzZXQiOjIwfQ=="
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListIntegrationsCommand extends command<ListIntegrationsCommandInput, ListIntegrationsCommandOutput>(
  _ep0,
  _mw0,
  "ListIntegrations",
  ListIntegrations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListIntegrationsInput;
      output: ListIntegrationsOutput;
    };
    sdk: {
      input: ListIntegrationsCommandInput;
      output: ListIntegrationsCommandOutput;
    };
  };
}
