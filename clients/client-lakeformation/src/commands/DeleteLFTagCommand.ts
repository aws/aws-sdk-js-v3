// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import type { DeleteLFTagRequest, DeleteLFTagResponse } from "../models/models_0";
import { DeleteLFTag$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteLFTagCommand}.
 */
export interface DeleteLFTagCommandInput extends DeleteLFTagRequest {}
/**
 * @public
 *
 * The output of {@link DeleteLFTagCommand}.
 */
export interface DeleteLFTagCommandOutput extends DeleteLFTagResponse, __MetadataBearer {}

/**
 * <p> Deletes an LF-tag by its key name. The operation fails if the specified tag key doesn't
 *       exist. When you delete an LF-Tag: </p>
 *          <ul>
 *             <li>
 *                <p>The associated LF-Tag policy becomes invalid.</p>
 *             </li>
 *             <li>
 *                <p>
 *      Resources that had this tag assigned will no longer have the tag policy applied to
 *      them.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, DeleteLFTagCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, DeleteLFTagCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * // import type { LakeFormationClientConfig } from "@aws-sdk/client-lakeformation";
 * const config = {}; // type is LakeFormationClientConfig
 * const client = new LakeFormationClient(config);
 * const input = { // DeleteLFTagRequest
 *   CatalogId: "STRING_VALUE",
 *   TagKey: "STRING_VALUE", // required
 * };
 * const command = new DeleteLFTagCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteLFTagCommandInput - {@link DeleteLFTagCommandInput}
 * @returns {@link DeleteLFTagCommandOutput}
 * @see {@link DeleteLFTagCommandInput} for command's `input` shape.
 * @see {@link DeleteLFTagCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link LakeFormationServiceException}
 * <p>Base exception class for all service exceptions from LakeFormation service.</p>
 *
 *
 * @public
 */
export class DeleteLFTagCommand extends $Command
  .classBuilder<
    DeleteLFTagCommandInput,
    DeleteLFTagCommandOutput,
    LakeFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LakeFormationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSLakeFormation", "DeleteLFTag", {})
  .n("LakeFormationClient", "DeleteLFTagCommand")
  .sc(DeleteLFTag$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteLFTagRequest;
      output: {};
    };
    sdk: {
      input: DeleteLFTagCommandInput;
      output: DeleteLFTagCommandOutput;
    };
  };
}
