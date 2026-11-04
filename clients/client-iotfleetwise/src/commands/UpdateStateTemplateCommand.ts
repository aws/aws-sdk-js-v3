// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateStateTemplateRequest, UpdateStateTemplateResponse } from "../models/models_0";
import { UpdateStateTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateStateTemplateCommand}.
 */
export interface UpdateStateTemplateCommandInput extends UpdateStateTemplateRequest {}
/**
 * @public
 *
 * The output of {@link UpdateStateTemplateCommand}.
 */
export interface UpdateStateTemplateCommandOutput extends UpdateStateTemplateResponse, __MetadataBearer {}

/**
 * Updates a state template.
 *
 * > **Important:** Access to certain Amazon Web Services IoT FleetWise features is currently gated. For more information, see [Amazon Web Services Region and feature availability](https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/fleetwise-regions.html) in the *Amazon Web Services IoT FleetWise Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, UpdateStateTemplateCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, UpdateStateTemplateCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * // import type { IoTFleetWiseClientConfig } from "@aws-sdk/client-iotfleetwise";
 * const config = {}; // type is IoTFleetWiseClientConfig
 * const client = new IoTFleetWiseClient(config);
 * const input = { // UpdateStateTemplateRequest
 *   identifier: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   stateTemplatePropertiesToAdd: [ // StateTemplateProperties
 *     "STRING_VALUE",
 *   ],
 *   stateTemplatePropertiesToRemove: [
 *     "STRING_VALUE",
 *   ],
 *   dataExtraDimensions: [ // StateTemplateDataExtraDimensionNodePathList
 *     "STRING_VALUE",
 *   ],
 *   metadataExtraDimensions: [ // StateTemplateMetadataExtraDimensionNodePathList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateStateTemplateCommand(input);
 * const response = await client.send(command);
 * // { // UpdateStateTemplateResponse
 * //   name: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   id: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateStateTemplateCommandInput - {@link UpdateStateTemplateCommandInput}
 * @returns {@link UpdateStateTemplateCommandOutput}
 * @see {@link UpdateStateTemplateCommandInput} for command's `input` shape.
 * @see {@link UpdateStateTemplateCommandOutput} for command's `response` shape.
 * @see {@link IoTFleetWiseClientResolvedConfig | config} for IoTFleetWiseClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient permission to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request couldn't be completed because the server temporarily failed.
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
 * @throws {@link IoTFleetWiseServiceException}
 *
 * Base exception class for all service exceptions from IoTFleetWise service.
 *
 * @public
 */
export class UpdateStateTemplateCommand extends command<UpdateStateTemplateCommandInput, UpdateStateTemplateCommandOutput>(
  _ep0,
  _mw0,
  "UpdateStateTemplate",
  UpdateStateTemplate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateStateTemplateRequest;
      output: UpdateStateTemplateResponse;
    };
    sdk: {
      input: UpdateStateTemplateCommandInput;
      output: UpdateStateTemplateCommandOutput;
    };
  };
}
