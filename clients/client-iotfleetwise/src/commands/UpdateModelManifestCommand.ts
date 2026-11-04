// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateModelManifestRequest, UpdateModelManifestResponse } from "../models/models_0";
import { UpdateModelManifest$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateModelManifestCommand}.
 */
export interface UpdateModelManifestCommandInput extends UpdateModelManifestRequest {}
/**
 * @public
 *
 * The output of {@link UpdateModelManifestCommand}.
 */
export interface UpdateModelManifestCommandOutput extends UpdateModelManifestResponse, __MetadataBearer {}

/**
 * Updates a vehicle model (model manifest). If created vehicles are associated with a vehicle model, it can't be updated.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, UpdateModelManifestCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, UpdateModelManifestCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * // import type { IoTFleetWiseClientConfig } from "@aws-sdk/client-iotfleetwise";
 * const config = {}; // type is IoTFleetWiseClientConfig
 * const client = new IoTFleetWiseClient(config);
 * const input = { // UpdateModelManifestRequest
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   nodesToAdd: [ // NodePaths
 *     "STRING_VALUE",
 *   ],
 *   nodesToRemove: [
 *     "STRING_VALUE",
 *   ],
 *   status: "ACTIVE" || "DRAFT" || "INVALID" || "VALIDATING",
 * };
 * const command = new UpdateModelManifestCommand(input);
 * const response = await client.send(command);
 * // { // UpdateModelManifestResponse
 * //   name: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateModelManifestCommandInput - {@link UpdateModelManifestCommandInput}
 * @returns {@link UpdateModelManifestCommandOutput}
 * @see {@link UpdateModelManifestCommandInput} for command's `input` shape.
 * @see {@link UpdateModelManifestCommandOutput} for command's `response` shape.
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
 * @throws {@link InternalServerException} (server fault)
 *
 * The request couldn't be completed because the server temporarily failed.
 *
 * @throws {@link InvalidSignalsException} (client fault)
 *
 * The request couldn't be completed because it contains signals that aren't valid.
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
export class UpdateModelManifestCommand extends command<UpdateModelManifestCommandInput, UpdateModelManifestCommandOutput>(
  _ep0,
  _mw0,
  "UpdateModelManifest",
  UpdateModelManifest$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateModelManifestRequest;
      output: UpdateModelManifestResponse;
    };
    sdk: {
      input: UpdateModelManifestCommandInput;
      output: UpdateModelManifestCommandOutput;
    };
  };
}
