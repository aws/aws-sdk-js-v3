// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { InterconnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InterconnectClient";
import type { ListEnvironmentsRequest, ListEnvironmentsResponse } from "../models/models_0";
import { ListEnvironments$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEnvironmentsCommand}.
 */
export interface ListEnvironmentsCommandInput extends ListEnvironmentsRequest {}
/**
 * @public
 *
 * The output of {@link ListEnvironmentsCommand}.
 */
export interface ListEnvironmentsCommandOutput extends ListEnvironmentsResponse, __MetadataBearer {}

/**
 * <p>Lists all of the environments that can produce connections that will land in the called AWS region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InterconnectClient, ListEnvironmentsCommand } from "@aws-sdk/client-interconnect"; // ES Modules import
 * // const { InterconnectClient, ListEnvironmentsCommand } = require("@aws-sdk/client-interconnect"); // CommonJS import
 * // import type { InterconnectClientConfig } from "@aws-sdk/client-interconnect";
 * const config = {}; // type is InterconnectClientConfig
 * const client = new InterconnectClient(config);
 * const input = { // ListEnvironmentsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   provider: { // Provider Union: only one key present
 *     cloudServiceProvider: "STRING_VALUE",
 *     lastMileProvider: "STRING_VALUE",
 *   },
 *   location: "STRING_VALUE",
 * };
 * const command = new ListEnvironmentsCommand(input);
 * const response = await client.send(command);
 * // { // ListEnvironmentsResponse
 * //   environments: [ // EnvironmentList // required
 * //     { // Environment
 * //       provider: { // Provider Union: only one key present
 * //         cloudServiceProvider: "STRING_VALUE",
 * //         lastMileProvider: "STRING_VALUE",
 * //       },
 * //       location: "STRING_VALUE", // required
 * //       environmentId: "STRING_VALUE", // required
 * //       state: "available" || "limited" || "unavailable", // required
 * //       bandwidths: { // Bandwidths
 * //         available: [ // BandwidthList
 * //           "STRING_VALUE",
 * //         ],
 * //         supported: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       type: "STRING_VALUE", // required
 * //       activationPageUrl: "STRING_VALUE",
 * //       remoteIdentifierType: "account" || "email",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEnvironmentsCommandInput - {@link ListEnvironmentsCommandInput}
 * @returns {@link ListEnvironmentsCommandOutput}
 * @see {@link ListEnvironmentsCommandInput} for command's `input` shape.
 * @see {@link ListEnvironmentsCommandOutput} for command's `response` shape.
 * @see {@link InterconnectClientResolvedConfig | config} for InterconnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The calling principal is not allowed to access the specified resource, or the resource does not exist.</p>
 *
 * @throws {@link InterconnectClientException} (client fault)
 *  <p>The request was denied due to incorrect client supplied parameters.</p>
 *
 * @throws {@link InterconnectServerException} (server fault)
 *  <p>The request resulted in an exception internal to the service.</p>
 *
 * @throws {@link InterconnectValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request specifies a resource that does not exist on the server.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The requested operation would result in the calling principal exceeding their allotted quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link InterconnectServiceException}
 * <p>Base exception class for all service exceptions from Interconnect service.</p>
 *
 *
 * @example List All Environments
 * ```javascript
 * //
 * const input = { /* empty *\/ };
 * const command = new ListEnvironmentsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   environments: [
 *     {
 *       bandwidths: {
 *         available: [
 *           "1Gbps"
 *         ],
 *         supported: [
 *           "1Gbps",
 *           "2Gbps"
 *         ]
 *       },
 *       environmentId: "mce-aws-acme-1",
 *       location: "acme-east",
 *       provider: {
 *         cloudServiceProvider: "acme"
 *       },
 *       state: "available",
 *       type: "Multicloud"
 *     },
 *     {
 *       bandwidths: {
 *         available: [
 *           "1Gbps"
 *         ],
 *         supported: [
 *           "1Gbps",
 *           "2Gbps"
 *         ]
 *       },
 *       environmentId: "mce-aws-lastmile-1",
 *       location: "lastmile-east",
 *       provider: {
 *         cloudServiceProvider: "acme"
 *       },
 *       state: "available",
 *       type: "LastMile"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListEnvironmentsCommand extends $Command
  .classBuilder<
    ListEnvironmentsCommandInput,
    ListEnvironmentsCommandOutput,
    InterconnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: InterconnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Interconnect", "ListEnvironments", {})
  .n("InterconnectClient", "ListEnvironmentsCommand")
  .sc(ListEnvironments$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEnvironmentsRequest;
      output: ListEnvironmentsResponse;
    };
    sdk: {
      input: ListEnvironmentsCommandInput;
      output: ListEnvironmentsCommandOutput;
    };
  };
}
