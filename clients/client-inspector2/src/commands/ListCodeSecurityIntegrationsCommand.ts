// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import { ListCodeSecurityIntegrationsRequest, ListCodeSecurityIntegrationsResponse } from "../models/models_1";
import { ListCodeSecurityIntegrations } from "../schemas/schemas_7_CodeSecurity";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCodeSecurityIntegrationsCommand}.
 */
export interface ListCodeSecurityIntegrationsCommandInput extends ListCodeSecurityIntegrationsRequest {}
/**
 * @public
 *
 * The output of {@link ListCodeSecurityIntegrationsCommand}.
 */
export interface ListCodeSecurityIntegrationsCommandOutput
  extends ListCodeSecurityIntegrationsResponse,
    __MetadataBearer {}

/**
 * <p>Lists all code security integrations in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, ListCodeSecurityIntegrationsCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, ListCodeSecurityIntegrationsCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * // import type { Inspector2ClientConfig } from "@aws-sdk/client-inspector2";
 * const config = {}; // type is Inspector2ClientConfig
 * const client = new Inspector2Client(config);
 * const input = { // ListCodeSecurityIntegrationsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListCodeSecurityIntegrationsCommand(input);
 * const response = await client.send(command);
 * // { // ListCodeSecurityIntegrationsResponse
 * //   integrations: [ // IntegrationSummaries
 * //     { // CodeSecurityIntegrationSummary
 * //       integrationArn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       type: "GITLAB_SELF_MANAGED" || "GITHUB", // required
 * //       status: "PENDING" || "IN_PROGRESS" || "ACTIVE" || "INACTIVE" || "DISABLING", // required
 * //       statusReason: "STRING_VALUE", // required
 * //       createdOn: new Date("TIMESTAMP"), // required
 * //       lastUpdateOn: new Date("TIMESTAMP"), // required
 * //       tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCodeSecurityIntegrationsCommandInput - {@link ListCodeSecurityIntegrationsCommandInput}
 * @returns {@link ListCodeSecurityIntegrationsCommandOutput}
 * @see {@link ListCodeSecurityIntegrationsCommandInput} for command's `input` shape.
 * @see {@link ListCodeSecurityIntegrationsCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *          <p> For <code>Enable</code>, you receive this error if you attempt to use a feature in an
 *          unsupported Amazon Web Services Region. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal failure of the Amazon Inspector service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation due to missing required fields or having invalid
 *          inputs.</p>
 *
 * @throws {@link Inspector2ServiceException}
 * <p>Base exception class for all service exceptions from Inspector2 service.</p>
 *
 *
 * @public
 */
export class ListCodeSecurityIntegrationsCommand extends $Command
  .classBuilder<
    ListCodeSecurityIntegrationsCommandInput,
    ListCodeSecurityIntegrationsCommandOutput,
    Inspector2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Inspector2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Inspector2", "ListCodeSecurityIntegrations", {})
  .n("Inspector2Client", "ListCodeSecurityIntegrationsCommand")
  .sc(ListCodeSecurityIntegrations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCodeSecurityIntegrationsRequest;
      output: ListCodeSecurityIntegrationsResponse;
    };
    sdk: {
      input: ListCodeSecurityIntegrationsCommandInput;
      output: ListCodeSecurityIntegrationsCommandOutput;
    };
  };
}
