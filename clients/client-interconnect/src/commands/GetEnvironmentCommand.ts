// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { InterconnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InterconnectClient";
import type { GetEnvironmentRequest, GetEnvironmentResponse } from "../models/models_0";
import { GetEnvironment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetEnvironmentCommand}.
 */
export interface GetEnvironmentCommandInput extends GetEnvironmentRequest {}
/**
 * @public
 *
 * The output of {@link GetEnvironmentCommand}.
 */
export interface GetEnvironmentCommandOutput extends GetEnvironmentResponse, __MetadataBearer {}

/**
 * <p>Describes a specific <a>Environment</a> </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InterconnectClient, GetEnvironmentCommand } from "@aws-sdk/client-interconnect"; // ES Modules import
 * // const { InterconnectClient, GetEnvironmentCommand } = require("@aws-sdk/client-interconnect"); // CommonJS import
 * // import type { InterconnectClientConfig } from "@aws-sdk/client-interconnect";
 * const config = {}; // type is InterconnectClientConfig
 * const client = new InterconnectClient(config);
 * const input = { // GetEnvironmentRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new GetEnvironmentCommand(input);
 * const response = await client.send(command);
 * // { // GetEnvironmentResponse
 * //   environment: { // Environment
 * //     provider: { // Provider Union: only one key present
 * //       cloudServiceProvider: "STRING_VALUE",
 * //       lastMileProvider: "STRING_VALUE",
 * //     },
 * //     location: "STRING_VALUE", // required
 * //     environmentId: "STRING_VALUE", // required
 * //     state: "available" || "limited" || "unavailable", // required
 * //     bandwidths: { // Bandwidths
 * //       available: [ // BandwidthList
 * //         "STRING_VALUE",
 * //       ],
 * //       supported: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     type: "STRING_VALUE", // required
 * //     activationPageUrl: "STRING_VALUE",
 * //     remoteIdentifierType: "account" || "email",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetEnvironmentCommandInput - {@link GetEnvironmentCommandInput}
 * @returns {@link GetEnvironmentCommandOutput}
 * @see {@link GetEnvironmentCommandInput} for command's `input` shape.
 * @see {@link GetEnvironmentCommandOutput} for command's `response` shape.
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
 * @example Get a specific environment
 * ```javascript
 * //
 * const input = {
 *   id: "mce-aws-acme-1"
 * };
 * const command = new GetEnvironmentCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   environment: {
 *     bandwidths: {
 *       available: [
 *         "1Gbps"
 *       ],
 *       supported: [
 *         "1Gbps",
 *         "2Gbps"
 *       ]
 *     },
 *     environmentId: "mce-aws-acme-1",
 *     location: "acme-east",
 *     provider: {
 *       cloudServiceProvider: "acme"
 *     },
 *     state: "available",
 *     type: "Multicloud"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetEnvironmentCommand extends $Command
  .classBuilder<
    GetEnvironmentCommandInput,
    GetEnvironmentCommandOutput,
    InterconnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: InterconnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Interconnect", "GetEnvironment", {})
  .n("InterconnectClient", "GetEnvironmentCommand")
  .sc(GetEnvironment$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEnvironmentRequest;
      output: GetEnvironmentResponse;
    };
    sdk: {
      input: GetEnvironmentCommandInput;
      output: GetEnvironmentCommandOutput;
    };
  };
}
