// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListConnectorsV2Request, ListConnectorsV2Response } from "../models/models_2";
import { ListConnectorsV2$ } from "../schemas/schemas_0";
import type { SecurityHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityHubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListConnectorsV2Command}.
 */
export interface ListConnectorsV2CommandInput extends ListConnectorsV2Request {}
/**
 * @public
 *
 * The output of {@link ListConnectorsV2Command}.
 */
export interface ListConnectorsV2CommandOutput extends ListConnectorsV2Response, __MetadataBearer {}

/**
 * <p>Grants permission to retrieve a list of connectorsV2 and their metadata for the calling account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityHubClient, ListConnectorsV2Command } from "@aws-sdk/client-securityhub"; // ES Modules import
 * // const { SecurityHubClient, ListConnectorsV2Command } = require("@aws-sdk/client-securityhub"); // CommonJS import
 * // import type { SecurityHubClientConfig } from "@aws-sdk/client-securityhub";
 * const config = {}; // type is SecurityHubClientConfig
 * const client = new SecurityHubClient(config);
 * const input = { // ListConnectorsV2Request
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   ProviderName: "JIRA_CLOUD" || "SERVICENOW",
 *   ConnectorStatus: "CONNECTED" || "FAILED_TO_CONNECT" || "PENDING_CONFIGURATION" || "PENDING_AUTHORIZATION",
 * };
 * const command = new ListConnectorsV2Command(input);
 * const response = await client.send(command);
 * // { // ListConnectorsV2Response
 * //   NextToken: "STRING_VALUE",
 * //   Connectors: [ // ConnectorSummaryList // required
 * //     { // ConnectorSummary
 * //       ConnectorArn: "STRING_VALUE",
 * //       ConnectorId: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //       Description: "STRING_VALUE",
 * //       ProviderSummary: { // ProviderSummary
 * //         ProviderName: "JIRA_CLOUD" || "SERVICENOW",
 * //         ConnectorStatus: "CONNECTED" || "FAILED_TO_CONNECT" || "PENDING_CONFIGURATION" || "PENDING_AUTHORIZATION",
 * //       },
 * //       CreatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListConnectorsV2CommandInput - {@link ListConnectorsV2CommandInput}
 * @returns {@link ListConnectorsV2CommandOutput}
 * @see {@link ListConnectorsV2CommandInput} for command's `input` shape.
 * @see {@link ListConnectorsV2CommandOutput} for command's `response` shape.
 * @see {@link SecurityHubClientResolvedConfig | config} for SecurityHubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action specified in the request.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request causes conflict with the current state of the service resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>
 *          The request has failed due to an internal failure of the service.
 *       </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request was rejected because we can't find the specified resource.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>
 *          The limit on the number of requests per second was exceeded.
 *       </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation because it's missing required fields or has invalid inputs.</p>
 *
 * @throws {@link SecurityHubServiceException}
 * <p>Base exception class for all service exceptions from SecurityHub service.</p>
 *
 *
 * @public
 */
export class ListConnectorsV2Command extends $Command
  .classBuilder<
    ListConnectorsV2CommandInput,
    ListConnectorsV2CommandOutput,
    SecurityHubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityHubClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityHubAPIService", "ListConnectorsV2", {})
  .n("SecurityHubClient", "ListConnectorsV2Command")
  .sc(ListConnectorsV2$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListConnectorsV2Request;
      output: ListConnectorsV2Response;
    };
    sdk: {
      input: ListConnectorsV2CommandInput;
      output: ListConnectorsV2CommandOutput;
    };
  };
}
