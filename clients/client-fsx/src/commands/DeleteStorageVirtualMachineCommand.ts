// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import { DeleteStorageVirtualMachineRequest, DeleteStorageVirtualMachineResponse } from "../models/models_0";
import { de_DeleteStorageVirtualMachineCommand, se_DeleteStorageVirtualMachineCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteStorageVirtualMachineCommand}.
 */
export interface DeleteStorageVirtualMachineCommandInput extends DeleteStorageVirtualMachineRequest {}
/**
 * @public
 *
 * The output of {@link DeleteStorageVirtualMachineCommand}.
 */
export interface DeleteStorageVirtualMachineCommandOutput
  extends DeleteStorageVirtualMachineResponse,
    __MetadataBearer {}

/**
 * <p>Deletes an existing Amazon FSx for ONTAP storage virtual machine (SVM). Prior
 *         to deleting an SVM, you must delete all non-root volumes in the SVM, otherwise the operation will fail.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, DeleteStorageVirtualMachineCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, DeleteStorageVirtualMachineCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new FSxClient(config);
 * const input = { // DeleteStorageVirtualMachineRequest
 *   ClientRequestToken: "STRING_VALUE",
 *   StorageVirtualMachineId: "STRING_VALUE", // required
 * };
 * const command = new DeleteStorageVirtualMachineCommand(input);
 * const response = await client.send(command);
 * // { // DeleteStorageVirtualMachineResponse
 * //   StorageVirtualMachineId: "STRING_VALUE",
 * //   Lifecycle: "CREATED" || "CREATING" || "DELETING" || "FAILED" || "MISCONFIGURED" || "PENDING",
 * // };
 *
 * ```
 *
 * @param DeleteStorageVirtualMachineCommandInput - {@link DeleteStorageVirtualMachineCommandInput}
 * @returns {@link DeleteStorageVirtualMachineCommandOutput}
 * @see {@link DeleteStorageVirtualMachineCommandInput} for command's `input` shape.
 * @see {@link DeleteStorageVirtualMachineCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for FSxClient's `config` shape.
 *
 * @throws {@link BadRequest} (client fault)
 *  <p>A generic error indicating a failure with a client request.</p>
 *
 * @throws {@link IncompatibleParameterError} (client fault)
 *  <p>The error returned when a second request is received with the same client request
 *             token but different parameters settings. A client request token should always uniquely
 *             identify a single request.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>A generic error indicating a server-side failure.</p>
 *
 * @throws {@link StorageVirtualMachineNotFound} (client fault)
 *  <p>No FSx for ONTAP SVMs were found based upon the supplied parameters.</p>
 *
 * @throws {@link FSxServiceException}
 * <p>Base exception class for all service exceptions from FSx service.</p>
 *
 * @public
 */
export class DeleteStorageVirtualMachineCommand extends $Command
  .classBuilder<
    DeleteStorageVirtualMachineCommandInput,
    DeleteStorageVirtualMachineCommandOutput,
    FSxClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FSxClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSSimbaAPIService_v20180301", "DeleteStorageVirtualMachine", {})
  .n("FSxClient", "DeleteStorageVirtualMachineCommand")
  .f(void 0, void 0)
  .ser(se_DeleteStorageVirtualMachineCommand)
  .de(de_DeleteStorageVirtualMachineCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteStorageVirtualMachineRequest;
      output: DeleteStorageVirtualMachineResponse;
    };
    sdk: {
      input: DeleteStorageVirtualMachineCommandInput;
      output: DeleteStorageVirtualMachineCommandOutput;
    };
  };
}
