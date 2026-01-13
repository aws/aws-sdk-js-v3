// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteReferenceStoreRequest, DeleteReferenceStoreResponse } from "../models/models_0";
import type { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { DeleteReferenceStore$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteReferenceStoreCommand}.
 */
export interface DeleteReferenceStoreCommandInput extends DeleteReferenceStoreRequest {}
/**
 * @public
 *
 * The output of {@link DeleteReferenceStoreCommand}.
 */
export interface DeleteReferenceStoreCommandOutput extends DeleteReferenceStoreResponse, __MetadataBearer {}

/**
 * <p>Deletes a reference store and returns a response with no body if the operation is successful. You can only delete a reference store when it does not contain any reference genomes. To empty a reference store, use <code>DeleteReference</code>.</p> <p>For more information about your workflow status, see <a href="https://docs.aws.amazon.com/omics/latest/dev/deleting-reference-and-sequence-stores.html">Deleting HealthOmics reference and sequence stores</a> in the <i>Amazon Web Services HealthOmics User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, DeleteReferenceStoreCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, DeleteReferenceStoreCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // DeleteReferenceStoreRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new DeleteReferenceStoreCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteReferenceStoreCommandInput - {@link DeleteReferenceStoreCommandInput}
 * @returns {@link DeleteReferenceStoreCommandOutput}
 * @see {@link DeleteReferenceStoreCommandInput} for command's `input` shape.
 * @see {@link DeleteReferenceStoreCommandOutput} for command's `response` shape.
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
export class DeleteReferenceStoreCommand extends $Command
  .classBuilder<
    DeleteReferenceStoreCommandInput,
    DeleteReferenceStoreCommandOutput,
    OmicsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OmicsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Omics", "DeleteReferenceStore", {})
  .n("OmicsClient", "DeleteReferenceStoreCommand")
  .sc(DeleteReferenceStore$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteReferenceStoreRequest;
      output: {};
    };
    sdk: {
      input: DeleteReferenceStoreCommandInput;
      output: DeleteReferenceStoreCommandOutput;
    };
  };
}
