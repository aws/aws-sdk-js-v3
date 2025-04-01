// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAnnotationStoreRequest, DeleteAnnotationStoreResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { de_DeleteAnnotationStoreCommand, se_DeleteAnnotationStoreCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAnnotationStoreCommand}.
 */
export interface DeleteAnnotationStoreCommandInput extends DeleteAnnotationStoreRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAnnotationStoreCommand}.
 */
export interface DeleteAnnotationStoreCommandOutput extends DeleteAnnotationStoreResponse, __MetadataBearer {}

/**
 * <p>Deletes an annotation store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, DeleteAnnotationStoreCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, DeleteAnnotationStoreCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * const client = new OmicsClient(config);
 * const input = { // DeleteAnnotationStoreRequest
 *   name: "STRING_VALUE", // required
 *   force: true || false,
 * };
 * const command = new DeleteAnnotationStoreCommand(input);
 * const response = await client.send(command);
 * // { // DeleteAnnotationStoreResponse
 * //   status: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteAnnotationStoreCommandInput - {@link DeleteAnnotationStoreCommandInput}
 * @returns {@link DeleteAnnotationStoreCommandOutput}
 * @see {@link DeleteAnnotationStoreCommandInput} for command's `input` shape.
 * @see {@link DeleteAnnotationStoreCommandOutput} for command's `response` shape.
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
export class DeleteAnnotationStoreCommand extends $Command
  .classBuilder<
    DeleteAnnotationStoreCommandInput,
    DeleteAnnotationStoreCommandOutput,
    OmicsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OmicsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Omics", "DeleteAnnotationStore", {})
  .n("OmicsClient", "DeleteAnnotationStoreCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAnnotationStoreCommand)
  .de(de_DeleteAnnotationStoreCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAnnotationStoreRequest;
      output: DeleteAnnotationStoreResponse;
    };
    sdk: {
      input: DeleteAnnotationStoreCommandInput;
      output: DeleteAnnotationStoreCommandOutput;
    };
  };
}
