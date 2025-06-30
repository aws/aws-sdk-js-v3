// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MedicalImagingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MedicalImagingClient";
import { DeleteDatastoreRequest, DeleteDatastoreResponse } from "../models/models_0";
import { de_DeleteDatastoreCommand, se_DeleteDatastoreCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDatastoreCommand}.
 */
export interface DeleteDatastoreCommandInput extends DeleteDatastoreRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDatastoreCommand}.
 */
export interface DeleteDatastoreCommandOutput extends DeleteDatastoreResponse, __MetadataBearer {}

/**
 * <p>Delete a data store.</p> <note> <p>Before a data store can be deleted, you must first delete all image sets within it.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MedicalImagingClient, DeleteDatastoreCommand } from "@aws-sdk/client-medical-imaging"; // ES Modules import
 * // const { MedicalImagingClient, DeleteDatastoreCommand } = require("@aws-sdk/client-medical-imaging"); // CommonJS import
 * const client = new MedicalImagingClient(config);
 * const input = { // DeleteDatastoreRequest
 *   datastoreId: "STRING_VALUE", // required
 * };
 * const command = new DeleteDatastoreCommand(input);
 * const response = await client.send(command);
 * // { // DeleteDatastoreResponse
 * //   datastoreId: "STRING_VALUE", // required
 * //   datastoreStatus: "CREATING" || "CREATE_FAILED" || "ACTIVE" || "DELETING" || "DELETED", // required
 * // };
 *
 * ```
 *
 * @param DeleteDatastoreCommandInput - {@link DeleteDatastoreCommandInput}
 * @returns {@link DeleteDatastoreCommandOutput}
 * @see {@link DeleteDatastoreCommandInput} for command's `input` shape.
 * @see {@link DeleteDatastoreCommandOutput} for command's `response` shape.
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
export class DeleteDatastoreCommand extends $Command
  .classBuilder<
    DeleteDatastoreCommandInput,
    DeleteDatastoreCommandOutput,
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
  .s("AHIGatewayService", "DeleteDatastore", {})
  .n("MedicalImagingClient", "DeleteDatastoreCommand")
  .f(void 0, void 0)
  .ser(se_DeleteDatastoreCommand)
  .de(de_DeleteDatastoreCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDatastoreRequest;
      output: DeleteDatastoreResponse;
    };
    sdk: {
      input: DeleteDatastoreCommandInput;
      output: DeleteDatastoreCommandOutput;
    };
  };
}
