// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IoTFleetWiseClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTFleetWiseClient";
import type { DeleteDecoderManifestRequest, DeleteDecoderManifestResponse } from "../models/models_0";
import { DeleteDecoderManifest$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDecoderManifestCommand}.
 */
export interface DeleteDecoderManifestCommandInput extends DeleteDecoderManifestRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDecoderManifestCommand}.
 */
export interface DeleteDecoderManifestCommandOutput extends DeleteDecoderManifestResponse, __MetadataBearer {}

/**
 * <p> Deletes a decoder manifest. You can't delete a decoder manifest if it has vehicles
 *             associated with it. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTFleetWiseClient, DeleteDecoderManifestCommand } from "@aws-sdk/client-iotfleetwise"; // ES Modules import
 * // const { IoTFleetWiseClient, DeleteDecoderManifestCommand } = require("@aws-sdk/client-iotfleetwise"); // CommonJS import
 * // import type { IoTFleetWiseClientConfig } from "@aws-sdk/client-iotfleetwise";
 * const config = {}; // type is IoTFleetWiseClientConfig
 * const client = new IoTFleetWiseClient(config);
 * const input = { // DeleteDecoderManifestRequest
 *   name: "STRING_VALUE", // required
 * };
 * const command = new DeleteDecoderManifestCommand(input);
 * const response = await client.send(command);
 * // { // DeleteDecoderManifestResponse
 * //   name: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteDecoderManifestCommandInput - {@link DeleteDecoderManifestCommandInput}
 * @returns {@link DeleteDecoderManifestCommandOutput}
 * @see {@link DeleteDecoderManifestCommandInput} for command's `input` shape.
 * @see {@link DeleteDecoderManifestCommandOutput} for command's `response` shape.
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
export class DeleteDecoderManifestCommand extends $Command
  .classBuilder<
    DeleteDecoderManifestCommandInput,
    DeleteDecoderManifestCommandOutput,
    IoTFleetWiseClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IoTFleetWiseClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("IoTAutobahnControlPlane", "DeleteDecoderManifest", {})
  .n("IoTFleetWiseClient", "DeleteDecoderManifestCommand")
  .sc(DeleteDecoderManifest$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDecoderManifestRequest;
      output: DeleteDecoderManifestResponse;
    };
    sdk: {
      input: DeleteDecoderManifestCommandInput;
      output: DeleteDecoderManifestCommandOutput;
    };
  };
}
