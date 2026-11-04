// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListEnvironmentsRequest, ListEnvironmentsResponse } from "../models/models_0";
import { ListEnvironments$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Lists all of the environments that can produce connections that will land in the called AWS region.
 *
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
 *
 * The calling principal is not allowed to access the specified resource, or the resource does not exist.
 *
 * @throws {@link InterconnectClientException} (client fault)
 *
 * The request was denied due to incorrect client supplied parameters.
 *
 * @throws {@link InterconnectServerException} (server fault)
 *
 * The request resulted in an exception internal to the service.
 *
 * @throws {@link InterconnectValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request specifies a resource that does not exist on the server.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The requested operation would result in the calling principal exceeding their allotted quota.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link InterconnectServiceException}
 *
 * Base exception class for all service exceptions from Interconnect service.
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
export class ListEnvironmentsCommand extends command<ListEnvironmentsCommandInput, ListEnvironmentsCommandOutput>(
  _ep0,
  _mw0,
  "ListEnvironments",
  ListEnvironments$
) {
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
