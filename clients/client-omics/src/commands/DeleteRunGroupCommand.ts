// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteRunGroupRequest } from "../models/models_0";
import type { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { DeleteRunGroup } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteRunGroupCommand}.
 */
export interface DeleteRunGroupCommandInput extends DeleteRunGroupRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRunGroupCommand}.
 */
export interface DeleteRunGroupCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a run group and returns a response with no body if the operation is successful.</p> <p>To verify that the run group is deleted:</p> <ul> <li> <p>Use <code>ListRunGroups</code> to confirm the workflow no longer appears in the list.</p> </li> <li> <p>Use <code>GetRunGroup</code> to verify the workflow cannot be found.</p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, DeleteRunGroupCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, DeleteRunGroupCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // DeleteRunGroupRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new DeleteRunGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRunGroupCommandInput - {@link DeleteRunGroupCommandInput}
 * @returns {@link DeleteRunGroupCommandOutput}
 * @see {@link DeleteRunGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteRunGroupCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeds a service quota.</p>
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
export class DeleteRunGroupCommand extends $Command
  .classBuilder<
    DeleteRunGroupCommandInput,
    DeleteRunGroupCommandOutput,
    OmicsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OmicsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Omics", "DeleteRunGroup", {})
  .n("OmicsClient", "DeleteRunGroupCommand")
  .sc(DeleteRunGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRunGroupRequest;
      output: {};
    };
    sdk: {
      input: DeleteRunGroupCommandInput;
      output: DeleteRunGroupCommandOutput;
    };
  };
}
