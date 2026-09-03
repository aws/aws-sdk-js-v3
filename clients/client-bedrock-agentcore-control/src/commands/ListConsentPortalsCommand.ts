// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListConsentPortalsRequest, ListConsentPortalsResponse } from "../models/models_0";
import { ListConsentPortals$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListConsentPortalsCommand}.
 */
export interface ListConsentPortalsCommandInput extends ListConsentPortalsRequest {}
/**
 * @public
 *
 * The output of {@link ListConsentPortalsCommand}.
 */
export interface ListConsentPortalsCommandOutput extends ListConsentPortalsResponse, __MetadataBearer {}

/**
 * <p>Lists all of the consent portals in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, ListConsentPortalsCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, ListConsentPortalsCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // ListConsentPortalsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListConsentPortalsCommand(input);
 * const response = await client.send(command);
 * // { // ListConsentPortalsResponse
 * //   consentPortals: [ // ConsentPortalSummaries // required
 * //     { // ConsentPortalSummary
 * //       sources: [ // ConsentPortalSources // required
 * //         { // ConsentPortalSource
 * //           identifier: "STRING_VALUE", // required
 * //           type: "agentcore-gateway", // required
 * //         },
 * //       ],
 * //       consentPortalArn: "STRING_VALUE", // required
 * //       consentPortalId: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       description: "STRING_VALUE",
 * //       name: "STRING_VALUE", // required
 * //       portalUrl: "STRING_VALUE",
 * //       status: "CREATING" || "ACTIVE" || "UPDATING" || "UPDATE_FAILED" || "DELETING" || "FAILED", // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListConsentPortalsCommandInput - {@link ListConsentPortalsCommandInput}
 * @returns {@link ListConsentPortalsCommandOutput}
 * @see {@link ListConsentPortalsCommandInput} for command's `input` shape.
 * @see {@link ListConsentPortalsCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreControlClientResolvedConfig | config} for BedrockAgentCoreControlClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This exception is thrown when a request is denied per access permissions</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown if there was an unexpected error during processing of request</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This exception is thrown when the number of requests exceeds the limit</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>This exception is thrown when the JWT bearer token is invalid or not found for OAuth bearer token based access</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link BedrockAgentCoreControlServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgentCoreControl service.</p>
 *
 *
 * @public
 */
export class ListConsentPortalsCommand extends command<ListConsentPortalsCommandInput, ListConsentPortalsCommandOutput>(
  _ep0,
  _mw0,
  "ListConsentPortals",
  ListConsentPortals$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListConsentPortalsRequest;
      output: ListConsentPortalsResponse;
    };
    sdk: {
      input: ListConsentPortalsCommandInput;
      output: ListConsentPortalsCommandOutput;
    };
  };
}
