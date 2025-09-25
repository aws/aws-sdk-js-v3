// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTFleetWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTFleetWiseClient";
import { UpdateModelManifestRequest, UpdateModelManifestResponse } from "../models/models_0";
import { UpdateModelManifest } from "../schemas/schemas_7_Update";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p> Updates a vehicle model (model manifest). If created vehicles are associated with a
 *             vehicle model, it can't be updated.</p>
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
 *  <p>You don't have sufficient permission to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request has conflicting operations. This can occur if you're trying to perform
 *             more than one operation on the same resource at the same time.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request couldn't be completed because the server temporarily failed.</p>
 *
 * @throws {@link InvalidSignalsException} (client fault)
 *  <p>The request couldn't be completed because it contains signals that aren't
 *             valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource wasn't found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request couldn't be completed due to throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link IoTFleetWiseServiceException}
 * <p>Base exception class for all service exceptions from IoTFleetWise service.</p>
 *
 *
 * @public
 */
export class UpdateModelManifestCommand extends $Command
  .classBuilder<
    UpdateModelManifestCommandInput,
    UpdateModelManifestCommandOutput,
    IoTFleetWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTFleetWiseClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IoTAutobahnControlPlane", "UpdateModelManifest", {})
  .n("IoTFleetWiseClient", "UpdateModelManifestCommand")
  .sc(UpdateModelManifest)
  .build() {
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
