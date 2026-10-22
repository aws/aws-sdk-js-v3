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
 * Lists the integrations in your account in descending integrationId order.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ContinuumClient, ListIntegrationsCommand } from "@aws-sdk/client-continuum"; // ES Modules import
 * // const { ContinuumClient, ListIntegrationsCommand } = require("@aws-sdk/client-continuum"); // CommonJS import
 * // import type { ContinuumClientConfig } from "@aws-sdk/client-continuum";
 * const config = {}; // type is ContinuumClientConfig
 * const client = new ContinuumClient(config);
 * const input = { // ListIntegrationsInput
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListIntegrationsCommand(input);
 * const response = await client.send(command);
 * // { // ListIntegrationsOutput
 * //   items: [ // IntegrationSummaries // required
 * //     { // IntegrationSummary
 * //       integrationId: "STRING_VALUE", // required
 * //       integrationArn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       integrationType: "GITHUB" || "GITLAB" || "S3", // required
 * //       providerDetails: { // ProviderDetails Union: only one key present
 * //         github: { // GitHubDetails
 * //           organizationName: "STRING_VALUE",
 * //         },
 * //         gitlab: { // GitLabDetails
 * //           instanceUrl: "STRING_VALUE", // required
 * //           targetType: "GROUP" || "PROJECT", // required
 * //           targetPath: "STRING_VALUE", // required
 * //           tokenRotation: "AUTOMATIC" || "NONE", // required
 * //           expiresAt: new Date("TIMESTAMP"),
 * //         },
 * //         s3: { // S3Details
 * //           bucket: "STRING_VALUE", // required
 * //           roleArn: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
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
 * @see {@link ContinuumClientResolvedConfig | config} for ContinuumClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  The request is not authorized. Verify that your credentials and request signature are valid and that you have permission to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *  The request couldn't be processed because of an internal server issue. Try again later. If the problem persists, contact AWS Support.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * @throws {@link ContinuumServiceException}
 * <p>Base exception class for all service exceptions from Continuum service.</p>
 *
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
