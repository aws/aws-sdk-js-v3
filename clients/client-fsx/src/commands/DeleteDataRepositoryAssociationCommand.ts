// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import { DeleteDataRepositoryAssociationRequest, DeleteDataRepositoryAssociationResponse } from "../models/models_0";
import {
  de_DeleteDataRepositoryAssociationCommand,
  se_DeleteDataRepositoryAssociationCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDataRepositoryAssociationCommand}.
 */
export interface DeleteDataRepositoryAssociationCommandInput extends DeleteDataRepositoryAssociationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDataRepositoryAssociationCommand}.
 */
export interface DeleteDataRepositoryAssociationCommandOutput
  extends DeleteDataRepositoryAssociationResponse,
    __MetadataBearer {}

/**
 * <p>Deletes a data repository association on an Amazon FSx for Lustre
 *             file system. Deleting the data repository association unlinks the
 *             file system from the Amazon S3 bucket. When deleting a data repository
 *             association, you have the option of deleting the data in the file system
 *             that corresponds to the data repository association. Data repository
 *             associations are supported on all FSx for Lustre 2.12 and 2.15 file
 *             systems, excluding <code>scratch_1</code> deployment type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, DeleteDataRepositoryAssociationCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, DeleteDataRepositoryAssociationCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * // import type { FSxClientConfig } from "@aws-sdk/client-fsx";
 * const config = {}; // type is FSxClientConfig
 * const client = new FSxClient(config);
 * const input = { // DeleteDataRepositoryAssociationRequest
 *   AssociationId: "STRING_VALUE", // required
 *   ClientRequestToken: "STRING_VALUE",
 *   DeleteDataInFileSystem: true || false,
 * };
 * const command = new DeleteDataRepositoryAssociationCommand(input);
 * const response = await client.send(command);
 * // { // DeleteDataRepositoryAssociationResponse
 * //   AssociationId: "STRING_VALUE",
 * //   Lifecycle: "CREATING" || "AVAILABLE" || "MISCONFIGURED" || "UPDATING" || "DELETING" || "FAILED",
 * //   DeleteDataInFileSystem: true || false,
 * // };
 *
 * ```
 *
 * @param DeleteDataRepositoryAssociationCommandInput - {@link DeleteDataRepositoryAssociationCommandInput}
 * @returns {@link DeleteDataRepositoryAssociationCommandOutput}
 * @see {@link DeleteDataRepositoryAssociationCommandInput} for command's `input` shape.
 * @see {@link DeleteDataRepositoryAssociationCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for FSxClient's `config` shape.
 *
 * @throws {@link BadRequest} (client fault)
 *  <p>A generic error indicating a failure with a client request.</p>
 *
 * @throws {@link DataRepositoryAssociationNotFound} (client fault)
 *  <p>No data repository associations were found based upon the supplied parameters.</p>
 *
 * @throws {@link IncompatibleParameterError} (client fault)
 *  <p>The error returned when a second request is received with the same client request
 *             token but different parameters settings. A client request token should always uniquely
 *             identify a single request.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>A generic error indicating a server-side failure.</p>
 *
 * @throws {@link ServiceLimitExceeded} (client fault)
 *  <p>An error indicating that a particular service limit was exceeded. You can increase
 *             some service limits by contacting Amazon Web ServicesSupport.</p>
 *
 * @throws {@link FSxServiceException}
 * <p>Base exception class for all service exceptions from FSx service.</p>
 *
 *
 * @public
 */
export class DeleteDataRepositoryAssociationCommand extends $Command
  .classBuilder<
    DeleteDataRepositoryAssociationCommandInput,
    DeleteDataRepositoryAssociationCommandOutput,
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
  .s("AWSSimbaAPIService_v20180301", "DeleteDataRepositoryAssociation", {})
  .n("FSxClient", "DeleteDataRepositoryAssociationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteDataRepositoryAssociationCommand)
  .de(de_DeleteDataRepositoryAssociationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDataRepositoryAssociationRequest;
      output: DeleteDataRepositoryAssociationResponse;
    };
    sdk: {
      input: DeleteDataRepositoryAssociationCommandInput;
      output: DeleteDataRepositoryAssociationCommandOutput;
    };
  };
}
