// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateModelManifestRequest, CreateModelManifestResponse } from "../models/models_0";
import { CreateModelManifest$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateModelManifestCommand}.
 */
export interface CreateModelManifestCommandInput extends CreateModelManifestRequest {}
/**
 * @public
 *
 * The output of {@link CreateModelManifestCommand}.
 */
export interface CreateModelManifestCommandOutput extends CreateModelManifestResponse, __MetadataBearer {}

/**
 * Creates a vehicle model (model manifest) that specifies signals (attributes, branches, sensors, and actuators).
 *
 * For more information, see [Vehicle models](https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/vehicle-models.html) in the *Amazon Web Services IoT FleetWise Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, CreateModelManifestCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, CreateModelManifestCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * // import type { IoTFleetWiseClientConfig } from "@aws-sdk/client-iotfleetwise";
 * const config = {}; // type is IoTFleetWiseClientConfig
 * const client = new IoTFleetWiseClient(config);
 * const input = { // CreateModelManifestRequest
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   nodes: [ // listOfStrings // required
 *     "STRING_VALUE",
 *   ],
 *   signalCatalogArn: "STRING_VALUE", // required
 *   tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateModelManifestCommand(input);
 * const response = await client.send(command);
 * // { // CreateModelManifestResponse
 * //   name: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateModelManifestCommandInput - {@link CreateModelManifestCommandInput}
 * @returns {@link CreateModelManifestCommandOutput}
 * @see {@link CreateModelManifestCommandInput} for command's `input` shape.
 * @see {@link CreateModelManifestCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetWiseClientResolvedConfig | config} for IoTFleetWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient permission to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request has conflicting operations. This can occur if you're trying to perform more than one operation on the same resource at the same time.
 *
 * @throws {@link InvalidSignalsException} (client fault)
 *
 * The request couldn't be completed because it contains signals that aren't valid.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * A service quota was exceeded.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource wasn't found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request couldn't be completed due to throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request couldn't be completed because the server temporarily failed.
 *
 * @throws {@link IoTFleetWiseServiceException}
 *
 * Base exception class for all service exceptions from IoTFleetWise service.
 *
 * @public
 */
export class CreateModelManifestCommand extends command<CreateModelManifestCommandInput, CreateModelManifestCommandOutput>(
  _ep0,
  _mw0,
  "CreateModelManifest",
  CreateModelManifest$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateModelManifestRequest;
      output: CreateModelManifestResponse;
    };
    sdk: {
      input: CreateModelManifestCommandInput;
      output: CreateModelManifestCommandOutput;
    };
  };
}
