// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListConnectionsRequest, ListConnectionsResponse } from "../models/models_0";
import { ListConnections$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListConnectionsCommand}.
 */
export interface ListConnectionsCommandInput extends ListConnectionsRequest {}
/**
 * @public
 *
 * The output of {@link ListConnectionsCommand}.
 */
export interface ListConnectionsCommandOutput extends ListConnectionsResponse, __MetadataBearer {}

/**
 * <p>Lists all connection objects to which the caller has access.</p> <p>Allows for optional filtering by the following properties:</p> <ul> <li> <p> <code>state</code> </p> </li> <li> <p> <code>environmentId</code> </p> </li> <li> <p> <code>provider</code> </p> </li> <li> <p> <code>attach point</code> </p> </li> </ul> <p>Only <a>Connection</a> objects matching all filters will be returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { InterconnectClient, ListConnectionsCommand } from "@aws-sdk/client-interconnect"; // ES Modules import
 * // const { InterconnectClient, ListConnectionsCommand } = require("@aws-sdk/client-interconnect"); // CommonJS import
 * // import type { InterconnectClientConfig } from "@aws-sdk/client-interconnect";
 * const config = {}; // type is InterconnectClientConfig
 * const client = new InterconnectClient(config);
 * const input = { // ListConnectionsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   state: "available" || "requested" || "pending" || "down" || "deleting" || "deleted" || "failed" || "updating",
 *   environmentId: "STRING_VALUE",
 *   provider: { // Provider Union: only one key present
 *     cloudServiceProvider: "STRING_VALUE",
 *     lastMileProvider: "STRING_VALUE",
 *   },
 *   attachPoint: { // AttachPoint Union: only one key present
 *     directConnectGateway: "STRING_VALUE",
 *     arn: "STRING_VALUE",
 *   },
 * };
 * const command = new ListConnectionsCommand(input);
 * const response = await client.send(command);
 * // { // ListConnectionsResponse
 * //   connections: [ // ConnectionSummariesList
 * //     { // ConnectionSummary
 * //       id: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       description: "STRING_VALUE", // required
 * //       bandwidth: "STRING_VALUE", // required
 * //       attachPoint: { // AttachPoint Union: only one key present
 * //         directConnectGateway: "STRING_VALUE",
 * //         arn: "STRING_VALUE",
 * //       },
 * //       environmentId: "STRING_VALUE", // required
 * //       provider: { // Provider Union: only one key present
 * //         cloudServiceProvider: "STRING_VALUE",
 * //         lastMileProvider: "STRING_VALUE",
 * //       },
 * //       location: "STRING_VALUE", // required
 * //       type: "STRING_VALUE", // required
 * //       state: "available" || "requested" || "pending" || "down" || "deleting" || "deleted" || "failed" || "updating", // required
 * //       sharedId: "STRING_VALUE", // required
 * //       billingTier: Number("int"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListConnectionsCommandInput - {@link ListConnectionsCommandInput}
 * @returns {@link ListConnectionsCommandOutput}
 * @see {@link ListConnectionsCommandInput} for command's `input` shape.
 * @see {@link ListConnectionsCommandOutput} for command's `response` shape.
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
 * @example List All Connections
 * ```javascript
 * //
 * const input = { /* empty *\/ };
 * const command = new ListConnectionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   connections: [
 *     {
 *       arn: "arn:aws:interconnect:us-east-1:000000000000:connection/mcc-abc12345",
 *       attachPoint: {
 *         directConnectGateway: "90392BE3-219C-47FD-BBA5-03DF76D2542A"
 *       },
 *       bandwidth: "1Gbps",
 *       description: "My MultiCloud Connection",
 *       environmentId: "mce-aws-acme-1",
 *       id: "mcc-abc12345",
 *       location: "acme-east",
 *       provider: {
 *         cloudServiceProvider: "acme"
 *       },
 *       sharedId: "B0615F4D-E588-47AD-9D04-1449EAA61C91",
 *       state: "available",
 *       type: "Multicloud"
 *     },
 *     {
 *       arn: "arn:aws:interconnect:us-east-1:000000000000:connection/lmcc-xyz98765",
 *       attachPoint: {
 *         directConnectGateway: "244FB7E5-3C56-4F7D-AAB9-E35F70764154"
 *       },
 *       bandwidth: "1Gbps",
 *       description: "My LastMile  Connection",
 *       environmentId: "mce-aws-lastmile-1",
 *       id: "lmcc-xyz98765",
 *       location: "lastmile-east",
 *       provider: {
 *         lastMileProvider: "lastmile"
 *       },
 *       sharedId: "27C2CDD8-8FDF-402D-9DFF-92F66ED7C7FC",
 *       state: "pending",
 *       type: "LastMile"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example List Connections in available state
 * ```javascript
 * //
 * const input = {
 *   state: "available"
 * };
 * const command = new ListConnectionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   connections: [
 *     {
 *       arn: "arn:aws:interconnect:us-east-1:000000000000:connection/mcc-abc12345",
 *       attachPoint: {
 *         directConnectGateway: "90392BE3-219C-47FD-BBA5-03DF76D2542A"
 *       },
 *       bandwidth: "1Gbps",
 *       description: "My MultiCloud Connection",
 *       environmentId: "mce-aws-acme-1",
 *       id: "mcc-abc12345",
 *       location: "acme-east",
 *       provider: {
 *         cloudServiceProvider: "acme"
 *       },
 *       sharedId: "B0615F4D-E588-47AD-9D04-1449EAA61C91",
 *       state: "available",
 *       type: "Multicloud"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example List Connections on specific Environment
 * ```javascript
 * //
 * const input = {
 *   environmentId: "mce-aws-acme-1"
 * };
 * const command = new ListConnectionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   connections: [
 *     {
 *       arn: "arn:aws:interconnect:us-east-1:000000000000:connection/lmcc-xyz98765",
 *       attachPoint: {
 *         directConnectGateway: "244FB7E5-3C56-4F7D-AAB9-E35F70764154"
 *       },
 *       bandwidth: "1Gbps",
 *       description: "My LastMile  Connection",
 *       environmentId: "mce-aws-lastmile-1",
 *       id: "lmcc-xyz98765",
 *       location: "lastmile-east",
 *       provider: {
 *         lastMileProvider: "lastmile"
 *       },
 *       sharedId: "27C2CDD8-8FDF-402D-9DFF-92F66ED7C7FC",
 *       state: "pending",
 *       type: "LastMile"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListConnectionsCommand extends command<ListConnectionsCommandInput, ListConnectionsCommandOutput>(
  _ep0,
  _mw0,
  "ListConnections",
  ListConnections$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListConnectionsRequest;
      output: ListConnectionsResponse;
    };
    sdk: {
      input: ListConnectionsCommandInput;
      output: ListConnectionsCommandOutput;
    };
  };
}
