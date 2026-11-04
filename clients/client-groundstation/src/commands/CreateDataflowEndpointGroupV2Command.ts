// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateDataflowEndpointGroupV2Request, CreateDataflowEndpointGroupV2Response } from "../models/models_0";
import { CreateDataflowEndpointGroupV2$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateDataflowEndpointGroupV2Command}.
 */
export interface CreateDataflowEndpointGroupV2CommandInput extends CreateDataflowEndpointGroupV2Request {}
/**
 * @public
 *
 * The output of {@link CreateDataflowEndpointGroupV2Command}.
 */
export interface CreateDataflowEndpointGroupV2CommandOutput extends CreateDataflowEndpointGroupV2Response, __MetadataBearer {}

/**
 * Creates a `DataflowEndpoint` group containing the specified list of Ground Station Agent based endpoints.
 *
 * The `name` field in each endpoint is used in your mission profile `DataflowEndpointConfig` to specify which endpoints to use during a contact.
 *
 * When a contact uses multiple `DataflowEndpointConfig` objects, each `Config` must match a `DataflowEndpoint` in the same group.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, CreateDataflowEndpointGroupV2Command } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, CreateDataflowEndpointGroupV2Command } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * // import type { GroundStationClientConfig } from "@aws-sdk/client-groundstation";
 * const config = {}; // type is GroundStationClientConfig
 * const client = new GroundStationClient(config);
 * const input = { // CreateDataflowEndpointGroupV2Request
 *   endpoints: [ // CreateEndpointDetailsList // required
 *     { // CreateEndpointDetails Union: only one key present
 *       uplinkAwsGroundStationAgentEndpoint: { // UplinkAwsGroundStationAgentEndpoint
 *         name: "STRING_VALUE", // required
 *         dataflowDetails: { // UplinkDataflowDetails Union: only one key present
 *           agentConnectionDetails: { // UplinkConnectionDetails
 *             ingressAddressAndPort: { // ConnectionDetails
 *               socketAddress: { // SocketAddress
 *                 name: "STRING_VALUE", // required
 *                 port: Number("int"), // required
 *               },
 *               mtu: Number("int"),
 *             },
 *             agentIpAndPortAddress: { // RangedConnectionDetails
 *               socketAddress: { // RangedSocketAddress
 *                 name: "STRING_VALUE", // required
 *                 portRange: { // IntegerRange
 *                   minimum: Number("int"), // required
 *                   maximum: Number("int"), // required
 *                 },
 *               },
 *               mtu: Number("int"),
 *             },
 *           },
 *         },
 *       },
 *       downlinkAwsGroundStationAgentEndpoint: { // DownlinkAwsGroundStationAgentEndpoint
 *         name: "STRING_VALUE", // required
 *         dataflowDetails: { // DownlinkDataflowDetails Union: only one key present
 *           agentConnectionDetails: { // DownlinkConnectionDetails
 *             agentIpAndPortAddress: {
 *               socketAddress: {
 *                 name: "STRING_VALUE", // required
 *                 portRange: {
 *                   minimum: Number("int"), // required
 *                   maximum: Number("int"), // required
 *                 },
 *               },
 *               mtu: Number("int"),
 *             },
 *             egressAddressAndPort: {
 *               socketAddress: {
 *                 name: "STRING_VALUE", // required
 *                 port: Number("int"), // required
 *               },
 *               mtu: Number("int"),
 *             },
 *           },
 *         },
 *       },
 *     },
 *   ],
 *   contactPrePassDurationSeconds: Number("int"),
 *   contactPostPassDurationSeconds: Number("int"),
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateDataflowEndpointGroupV2Command(input);
 * const response = await client.send(command);
 * // { // CreateDataflowEndpointGroupV2Response
 * //   dataflowEndpointGroupId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateDataflowEndpointGroupV2CommandInput - {@link CreateDataflowEndpointGroupV2CommandInput}
 * @returns {@link CreateDataflowEndpointGroupV2CommandOutput}
 * @see {@link CreateDataflowEndpointGroupV2CommandInput} for command's `input` shape.
 * @see {@link CreateDataflowEndpointGroupV2CommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for GroundStationClient's `config` shape.
 *
 * @throws {@link DependencyException} (server fault)
 *
 * Dependency encountered an error.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more parameters are not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Resource was not found.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * Request would cause a service quota to be exceeded.
 *
 * @throws {@link GroundStationServiceException}
 *
 * Base exception class for all service exceptions from GroundStation service.
 *
 * @public
 */
export class CreateDataflowEndpointGroupV2Command extends command<CreateDataflowEndpointGroupV2CommandInput, CreateDataflowEndpointGroupV2CommandOutput>(
  _ep0,
  _mw0,
  "CreateDataflowEndpointGroupV2",
  CreateDataflowEndpointGroupV2$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDataflowEndpointGroupV2Request;
      output: CreateDataflowEndpointGroupV2Response;
    };
    sdk: {
      input: CreateDataflowEndpointGroupV2CommandInput;
      output: CreateDataflowEndpointGroupV2CommandOutput;
    };
  };
}
