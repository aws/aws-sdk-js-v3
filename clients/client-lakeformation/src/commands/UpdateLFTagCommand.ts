// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { UpdateLFTagRequest, UpdateLFTagResponse } from "../models/models_0";
import { de_UpdateLFTagCommand, se_UpdateLFTagCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateLFTagCommand}.
 */
export interface UpdateLFTagCommandInput extends UpdateLFTagRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLFTagCommand}.
 */
export interface UpdateLFTagCommandOutput extends UpdateLFTagResponse, __MetadataBearer {}

/**
 * <p>Updates the list of possible values for the specified LF-tag key. If the LF-tag does not exist, the operation throws an EntityNotFoundException. The values in the delete key values will be deleted from list of possible values. If any value in the delete key values is attached to a resource, then API errors out with a 400 Exception - "Update not allowed". Untag the attribute before deleting the LF-tag key's value. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, UpdateLFTagCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, UpdateLFTagCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * // import type { LakeFormationClientConfig } from "@aws-sdk/client-lakeformation";
 * const config = {}; // type is LakeFormationClientConfig
 * const client = new LakeFormationClient(config);
 * const input = { // UpdateLFTagRequest
 *   CatalogId: "STRING_VALUE",
 *   TagKey: "STRING_VALUE", // required
 *   TagValuesToDelete: [ // TagValueList
 *     "STRING_VALUE",
 *   ],
 *   TagValuesToAdd: [
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateLFTagCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateLFTagCommandInput - {@link UpdateLFTagCommandInput}
 * @returns {@link UpdateLFTagCommandOutput}
 * @see {@link UpdateLFTagCommandInput} for command's `input` shape.
 * @see {@link UpdateLFTagCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Two processes are trying to modify a resource simultaneously.</p>
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
export class UpdateLFTagCommand extends $Command
  .classBuilder<
    UpdateLFTagCommandInput,
    UpdateLFTagCommandOutput,
    LakeFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LakeFormationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSLakeFormation", "UpdateLFTag", {})
  .n("LakeFormationClient", "UpdateLFTagCommand")
  .f(void 0, void 0)
  .ser(se_UpdateLFTagCommand)
  .de(de_UpdateLFTagCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateLFTagRequest;
      output: {};
    };
    sdk: {
      input: UpdateLFTagCommandInput;
      output: UpdateLFTagCommandOutput;
    };
  };
}
