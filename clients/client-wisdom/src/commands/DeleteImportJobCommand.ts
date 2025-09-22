// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteImportJobRequest, DeleteImportJobResponse } from "../models/models_0";
import { DeleteImportJob } from "../schemas/schemas_1_Create";
import { ServiceInputTypes, ServiceOutputTypes, WisdomClientResolvedConfig } from "../WisdomClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteImportJobCommand}.
 */
export interface DeleteImportJobCommandInput extends DeleteImportJobRequest {}
/**
 * @public
 *
 * The output of {@link DeleteImportJobCommand}.
 */
export interface DeleteImportJobCommandOutput extends DeleteImportJobResponse, __MetadataBearer {}

/**
 * <p>Deletes the quick response import job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WisdomClient, DeleteImportJobCommand } from "@aws-sdk/client-wisdom"; // ES Modules import
 * // const { WisdomClient, DeleteImportJobCommand } = require("@aws-sdk/client-wisdom"); // CommonJS import
 * // import type { WisdomClientConfig } from "@aws-sdk/client-wisdom";
 * const config = {}; // type is WisdomClientConfig
 * const client = new WisdomClient(config);
 * const input = { // DeleteImportJobRequest
 *   knowledgeBaseId: "STRING_VALUE", // required
 *   importJobId: "STRING_VALUE", // required
 * };
 * const command = new DeleteImportJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteImportJobCommandInput - {@link DeleteImportJobCommandInput}
 * @returns {@link DeleteImportJobCommandOutput}
 * @see {@link DeleteImportJobCommandInput} for command's `input` shape.
 * @see {@link DeleteImportJobCommandOutput} for command's `response` shape.
 * @see {@link WisdomClientResolvedConfig | config} for WisdomClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the
 *       resource. For example, if you're using a <code>Create</code> API (such as
 *         <code>CreateAssistant</code>) that accepts name, a conflicting resource (usually with the
 *       same name) is being created or mutated.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by a service.</p>
 *
 * @throws {@link WisdomServiceException}
 * <p>Base exception class for all service exceptions from Wisdom service.</p>
 *
 *
 * @public
 */
export class DeleteImportJobCommand extends $Command
  .classBuilder<
    DeleteImportJobCommandInput,
    DeleteImportJobCommandOutput,
    WisdomClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WisdomClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WisdomService", "DeleteImportJob", {})
  .n("WisdomClient", "DeleteImportJobCommand")
  .sc(DeleteImportJob)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteImportJobRequest;
      output: {};
    };
    sdk: {
      input: DeleteImportJobCommandInput;
      output: DeleteImportJobCommandOutput;
    };
  };
}
