// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListSourceEndpointsRequest, ListSourceEndpointsResponse } from "../models/models_1";
import { ListSourceEndpoints$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListSourceEndpointsCommand}.
 */
export interface ListSourceEndpointsCommandInput extends ListSourceEndpointsRequest {}
/**
 * @public
 *
 * The output of {@link ListSourceEndpointsCommand}.
 */
export interface ListSourceEndpointsCommandOutput extends ListSourceEndpointsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of the source endpoints in your account. The results are paginated. Use the NextToken value that's returned to retrieve additional results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, ListSourceEndpointsCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, ListSourceEndpointsCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * // import type { MediaConnectClientConfig } from "@aws-sdk/client-mediaconnect";
 * const config = {}; // type is MediaConnectClientConfig
 * const client = new MediaConnectClient(config);
 * const input = { // ListSourceEndpointsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Filters: [ // SourceEndpointFilterList
 *     { // SourceEndpointFilter Union: only one key present
 *       RegionNames: [ // StringList
 *         "STRING_VALUE",
 *       ],
 *       SourceTypes: [ // SourceEndpointTypeList
 *         "STANDARD" || "ROUTER_OUTPUT",
 *       ],
 *       NameContains: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new ListSourceEndpointsCommand(input);
 * const response = await client.send(command);
 * // { // ListSourceEndpointsResponse
 * //   SourceEndpoints: [ // ListedSourceEndpointList // required
 * //     { // ListedSourceEndpoint
 * //       Name: "STRING_VALUE", // required
 * //       Arn: "STRING_VALUE", // required
 * //       Id: "STRING_VALUE", // required
 * //       SourceType: "STANDARD" || "ROUTER_OUTPUT", // required
 * //       RegionName: "STRING_VALUE", // required
 * //       AvailabilityZone: "STRING_VALUE",
 * //       AvailabilityZoneId: "STRING_VALUE",
 * //       CreatedAt: new Date("TIMESTAMP"), // required
 * //       UpdatedAt: new Date("TIMESTAMP"), // required
 * //       LifecycleManagement: "MANAGED" || "UNMANAGED", // required
 * //       MessageCount: Number("int"), // required
 * //       ResourceShareOwnership: "OWNED" || "CONSUMED", // required
 * //       ResourceShareState: "SHARED" || "UNSHARED", // required
 * //       RegistrationState: "REGISTERED" || "REGISTERING" || "DEREGISTERING" || "REGISTRATION_FAILED", // required
 * //       ConnectionState: "CONNECTED" || "DISCONNECTED" || "CONNECTING" || "DISCONNECTING", // required
 * //       EncryptionType: "SECRETS_MANAGER" || "AUTOMATIC",
 * //       ConnectedDestinationCount: Number("int"), // required
 * //       AssociatedResourceArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSourceEndpointsCommandInput - {@link ListSourceEndpointsCommandInput}
 * @returns {@link ListSourceEndpointsCommandOutput}
 * @see {@link ListSourceEndpointsCommandInput} for command's `input` shape.
 * @see {@link ListSourceEndpointsCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for MediaConnectClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>This exception is thrown if the request contains a semantic error. The precise meaning depends on the API, and is documented in the error message. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request. </p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request. </p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable or busy. </p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request was denied due to request throttling. </p>
 *
 * @throws {@link MediaConnectServiceException}
 * <p>Base exception class for all service exceptions from MediaConnect service.</p>
 *
 *
 * @public
 */
export class ListSourceEndpointsCommand extends command<ListSourceEndpointsCommandInput, ListSourceEndpointsCommandOutput>(
  _ep0,
  _mw0,
  "ListSourceEndpoints",
  ListSourceEndpoints$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSourceEndpointsRequest;
      output: ListSourceEndpointsResponse;
    };
    sdk: {
      input: ListSourceEndpointsCommandInput;
      output: ListSourceEndpointsCommandOutput;
    };
  };
}
