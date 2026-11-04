// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetEntitiesRequest, GetEntitiesResponse } from "../models/models_0";
import { GetEntities$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetEntitiesCommand}.
 */
export interface GetEntitiesCommandInput extends GetEntitiesRequest {}
/**
 * @public
 *
 * The output of {@link GetEntitiesCommand}.
 */
export interface GetEntitiesCommandOutput extends GetEntitiesResponse, __MetadataBearer {}

/**
 * Gets definitions of the specified entities. Uses the latest version of the user's namespace by default. This API returns the following TDM entities.
 *
 * - Properties
 * - States
 * - Events
 * - Actions
 * - Capabilities
 * - Mappings
 * - Devices
 * - Device Models
 * - Services
 *
 * This action doesn't return definitions for systems, flows, and deployments.
 *
 * @deprecated since: 2022-08-30.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, GetEntitiesCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, GetEntitiesCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * // import type { IoTThingsGraphClientConfig } from "@aws-sdk/client-iotthingsgraph";
 * const config = {}; // type is IoTThingsGraphClientConfig
 * const client = new IoTThingsGraphClient(config);
 * const input = { // GetEntitiesRequest
 *   ids: [ // Urns // required
 *     "STRING_VALUE",
 *   ],
 *   namespaceVersion: Number("long"),
 * };
 * const command = new GetEntitiesCommand(input);
 * const response = await client.send(command);
 * // { // GetEntitiesResponse
 * //   descriptions: [ // EntityDescriptions
 * //     { // EntityDescription
 * //       id: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       type: "DEVICE" || "SERVICE" || "DEVICE_MODEL" || "CAPABILITY" || "STATE" || "ACTION" || "EVENT" || "PROPERTY" || "MAPPING" || "ENUM",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       definition: { // DefinitionDocument
 * //         language: "GRAPHQL", // required
 * //         text: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetEntitiesCommandInput - {@link GetEntitiesCommandInput}
 * @returns {@link GetEntitiesCommandOutput}
 * @see {@link GetEntitiesCommandInput} for command's `input` shape.
 * @see {@link GetEntitiesCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for IoTThingsGraphClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * @throws {@link IoTThingsGraphServiceException}
 *
 * Base exception class for all service exceptions from IoTThingsGraph service.
 *
 * @public
 */
export class GetEntitiesCommand extends command<GetEntitiesCommandInput, GetEntitiesCommandOutput>(
  _ep0,
  _mw0,
  "GetEntities",
  GetEntities$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEntitiesRequest;
      output: GetEntitiesResponse;
    };
    sdk: {
      input: GetEntitiesCommandInput;
      output: GetEntitiesCommandOutput;
    };
  };
}
