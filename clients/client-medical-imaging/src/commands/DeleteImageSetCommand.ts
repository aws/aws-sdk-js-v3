// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MedicalImagingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MedicalImagingClient";
import { DeleteImageSetRequest, DeleteImageSetResponse } from "../models/models_0";
import { de_DeleteImageSetCommand, se_DeleteImageSetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteImageSetCommand}.
 */
export interface DeleteImageSetCommandInput extends DeleteImageSetRequest {}
/**
 * @public
 *
 * The output of {@link DeleteImageSetCommand}.
 */
export interface DeleteImageSetCommandOutput extends DeleteImageSetResponse, __MetadataBearer {}

/**
 * <p>Delete an image set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MedicalImagingClient, DeleteImageSetCommand } from "@aws-sdk/client-medical-imaging"; // ES Modules import
 * // const { MedicalImagingClient, DeleteImageSetCommand } = require("@aws-sdk/client-medical-imaging"); // CommonJS import
 * const client = new MedicalImagingClient(config);
 * const input = { // DeleteImageSetRequest
 *   datastoreId: "STRING_VALUE", // required
 *   imageSetId: "STRING_VALUE", // required
 * };
 * const command = new DeleteImageSetCommand(input);
 * const response = await client.send(command);
 * // { // DeleteImageSetResponse
 * //   datastoreId: "STRING_VALUE", // required
 * //   imageSetId: "STRING_VALUE", // required
 * //   imageSetState: "ACTIVE" || "LOCKED" || "DELETED", // required
 * //   imageSetWorkflowStatus: "CREATED" || "COPIED" || "COPYING" || "COPYING_WITH_READ_ONLY_ACCESS" || "COPY_FAILED" || "UPDATING" || "UPDATED" || "UPDATE_FAILED" || "DELETING" || "DELETED", // required
 * // };
 *
 * ```
 *
 * @param DeleteImageSetCommandInput - {@link DeleteImageSetCommandInput}
 * @returns {@link DeleteImageSetCommandOutput}
 * @see {@link DeleteImageSetCommandInput} for command's `input` shape.
 * @see {@link DeleteImageSetCommandOutput} for command's `response` shape.
 * @see {@link MedicalImagingClientResolvedConfig | config} for MedicalImagingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during processing of the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints set by the service.</p>
 *
 * @throws {@link MedicalImagingServiceException}
 * <p>Base exception class for all service exceptions from MedicalImaging service.</p>
 *
 *
 * @public
 */
export class DeleteImageSetCommand extends $Command
  .classBuilder<
    DeleteImageSetCommandInput,
    DeleteImageSetCommandOutput,
    MedicalImagingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MedicalImagingClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AHIGatewayService", "DeleteImageSet", {})
  .n("MedicalImagingClient", "DeleteImageSetCommand")
  .f(void 0, void 0)
  .ser(se_DeleteImageSetCommand)
  .de(de_DeleteImageSetCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteImageSetRequest;
      output: DeleteImageSetResponse;
    };
    sdk: {
      input: DeleteImageSetCommandInput;
      output: DeleteImageSetCommandOutput;
    };
  };
}
