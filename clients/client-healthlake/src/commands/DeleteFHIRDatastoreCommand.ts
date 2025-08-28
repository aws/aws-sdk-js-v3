// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { HealthLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthLakeClient";
import { DeleteFHIRDatastoreRequest, DeleteFHIRDatastoreResponse } from "../models/models_0";
import { de_DeleteFHIRDatastoreCommand, se_DeleteFHIRDatastoreCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteFHIRDatastoreCommand}.
 */
export interface DeleteFHIRDatastoreCommandInput extends DeleteFHIRDatastoreRequest {}
/**
 * @public
 *
 * The output of {@link DeleteFHIRDatastoreCommand}.
 */
export interface DeleteFHIRDatastoreCommandOutput extends DeleteFHIRDatastoreResponse, __MetadataBearer {}

/**
 * <p>Delete a FHIR-enabled data store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthLakeClient, DeleteFHIRDatastoreCommand } from "@aws-sdk/client-healthlake"; // ES Modules import
 * // const { HealthLakeClient, DeleteFHIRDatastoreCommand } = require("@aws-sdk/client-healthlake"); // CommonJS import
 * const client = new HealthLakeClient(config);
 * const input = { // DeleteFHIRDatastoreRequest
 *   DatastoreId: "STRING_VALUE", // required
 * };
 * const command = new DeleteFHIRDatastoreCommand(input);
 * const response = await client.send(command);
 * // { // DeleteFHIRDatastoreResponse
 * //   DatastoreId: "STRING_VALUE", // required
 * //   DatastoreArn: "STRING_VALUE", // required
 * //   DatastoreStatus: "CREATING" || "ACTIVE" || "DELETING" || "DELETED" || "CREATE_FAILED", // required
 * //   DatastoreEndpoint: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteFHIRDatastoreCommandInput - {@link DeleteFHIRDatastoreCommandInput}
 * @returns {@link DeleteFHIRDatastoreCommandOutput}
 * @see {@link DeleteFHIRDatastoreCommandInput} for command's `input` shape.
 * @see {@link DeleteFHIRDatastoreCommandOutput} for command's `response` shape.
 * @see {@link HealthLakeClientResolvedConfig | config} for HealthLakeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access is denied. Your account is not authorized to perform this operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The data store is in a transition state and the user requested action cannot be
 *          performed.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unknown internal error occurred in the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested data store was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The user has exceeded their maximum number of allowed calls to the given API. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The user input parameter was invalid.</p>
 *
 * @throws {@link HealthLakeServiceException}
 * <p>Base exception class for all service exceptions from HealthLake service.</p>
 *
 *
 * @public
 */
export class DeleteFHIRDatastoreCommand extends $Command
  .classBuilder<
    DeleteFHIRDatastoreCommandInput,
    DeleteFHIRDatastoreCommandOutput,
    HealthLakeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: HealthLakeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("HealthLake", "DeleteFHIRDatastore", {})
  .n("HealthLakeClient", "DeleteFHIRDatastoreCommand")
  .f(void 0, void 0)
  .ser(se_DeleteFHIRDatastoreCommand)
  .de(de_DeleteFHIRDatastoreCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteFHIRDatastoreRequest;
      output: DeleteFHIRDatastoreResponse;
    };
    sdk: {
      input: DeleteFHIRDatastoreCommandInput;
      output: DeleteFHIRDatastoreCommandOutput;
    };
  };
}
