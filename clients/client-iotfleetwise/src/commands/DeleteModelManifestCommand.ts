// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IoTFleetWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTFleetWiseClient";
import { DeleteModelManifestRequest, DeleteModelManifestResponse } from "../models/models_0";
import { de_DeleteModelManifestCommand, se_DeleteModelManifestCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteModelManifestCommand}.
 */
export interface DeleteModelManifestCommandInput extends DeleteModelManifestRequest {}
/**
 * @public
 *
 * The output of {@link DeleteModelManifestCommand}.
 */
export interface DeleteModelManifestCommandOutput extends DeleteModelManifestResponse, __MetadataBearer {}

/**
 * <p> Deletes a vehicle model (model manifest).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, DeleteModelManifestCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, DeleteModelManifestCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * // import type { IoTFleetWiseClientConfig } from "@aws-sdk/client-iotfleetwise";
 * const config = {}; // type is IoTFleetWiseClientConfig
 * const client = new IoTFleetWiseClient(config);
 * const input = { // DeleteModelManifestRequest
 *   name: "STRING_VALUE", // required
 * };
 * const command = new DeleteModelManifestCommand(input);
 * const response = await client.send(command);
 * // { // DeleteModelManifestResponse
 * //   name: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteModelManifestCommandInput - {@link DeleteModelManifestCommandInput}
 * @returns {@link DeleteModelManifestCommandOutput}
 * @see {@link DeleteModelManifestCommandInput} for command's `input` shape.
 * @see {@link DeleteModelManifestCommandOutput} for command's `response` shape.
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
export class DeleteModelManifestCommand extends $Command
  .classBuilder<
    DeleteModelManifestCommandInput,
    DeleteModelManifestCommandOutput,
    IoTFleetWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTFleetWiseClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("IoTAutobahnControlPlane", "DeleteModelManifest", {})
  .n("IoTFleetWiseClient", "DeleteModelManifestCommand")
  .f(void 0, void 0)
  .ser(se_DeleteModelManifestCommand)
  .de(de_DeleteModelManifestCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteModelManifestRequest;
      output: DeleteModelManifestResponse;
    };
    sdk: {
      input: DeleteModelManifestCommandInput;
      output: DeleteModelManifestCommandOutput;
    };
  };
}
