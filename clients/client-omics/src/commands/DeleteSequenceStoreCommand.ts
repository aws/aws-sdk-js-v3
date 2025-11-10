// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteSequenceStoreRequest, DeleteSequenceStoreResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { DeleteSequenceStore } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteSequenceStoreCommand}.
 */
export interface DeleteSequenceStoreCommandInput extends DeleteSequenceStoreRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSequenceStoreCommand}.
 */
export interface DeleteSequenceStoreCommandOutput extends DeleteSequenceStoreResponse, __MetadataBearer {}

/**
 * <p>Deletes a sequence store and returns a response with no body if the operation is successful. You can only delete a sequence store when it does not contain any read sets.</p> <p>Use the <code>BatchDeleteReadSet</code> API operation to ensure that all read sets in the sequence store are deleted. When a sequence store is deleted, all tags associated with the store are also deleted.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/omics/latest/dev/deleting-reference-and-sequence-stores.html">Deleting HealthOmics reference and sequence stores</a> in the <i>Amazon Web Services HealthOmics User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, DeleteSequenceStoreCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, DeleteSequenceStoreCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // DeleteSequenceStoreRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new DeleteSequenceStoreCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSequenceStoreCommandInput - {@link DeleteSequenceStoreCommandInput}
 * @returns {@link DeleteSequenceStoreCommandOutput}
 * @see {@link DeleteSequenceStoreCommandInput} for command's `input` shape.
 * @see {@link DeleteSequenceStoreCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request cannot be applied to the target resource in its current state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred. Try the request again.</p>
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *  <p>The request timed out.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The target resource was not found in the current Region.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link OmicsServiceException}
 * <p>Base exception class for all service exceptions from Omics service.</p>
 *
 *
 * @public
 */
export class DeleteSequenceStoreCommand extends $Command
  .classBuilder<
    DeleteSequenceStoreCommandInput,
    DeleteSequenceStoreCommandOutput,
    OmicsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OmicsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Omics", "DeleteSequenceStore", {})
  .n("OmicsClient", "DeleteSequenceStoreCommand")
  .sc(DeleteSequenceStore)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSequenceStoreRequest;
      output: {};
    };
    sdk: {
      input: DeleteSequenceStoreCommandInput;
      output: DeleteSequenceStoreCommandOutput;
    };
  };
}
