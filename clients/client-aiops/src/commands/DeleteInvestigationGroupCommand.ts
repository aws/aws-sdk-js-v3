// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AIOpsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AIOpsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteInvestigationGroupRequest } from "../models/models_0";
import { DeleteInvestigationGroup } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteInvestigationGroupCommand}.
 */
export interface DeleteInvestigationGroupCommandInput extends DeleteInvestigationGroupRequest {}
/**
 * @public
 *
 * The output of {@link DeleteInvestigationGroupCommand}.
 */
export interface DeleteInvestigationGroupCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified investigation group from your account. You can currently have one investigation group per Region in your account. After you delete an investigation group, you can later create a new investigation group in the same Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AIOpsClient, DeleteInvestigationGroupCommand } from "@aws-sdk/client-aiops"; // ES Modules import
 * // const { AIOpsClient, DeleteInvestigationGroupCommand } = require("@aws-sdk/client-aiops"); // CommonJS import
 * // import type { AIOpsClientConfig } from "@aws-sdk/client-aiops";
 * const config = {}; // type is AIOpsClientConfig
 * const client = new AIOpsClient(config);
 * const input = { // DeleteInvestigationGroupRequest
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteInvestigationGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteInvestigationGroupCommandInput - {@link DeleteInvestigationGroupCommandInput}
 * @returns {@link DeleteInvestigationGroupCommandOutput}
 * @see {@link DeleteInvestigationGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteInvestigationGroupCommandOutput} for command's `response` shape.
 * @see {@link AIOpsClientResolvedConfig | config} for AIOpsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. You can try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled because of quota limits. You can try again later.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This operation couldn't be completed because of a conflict in resource states.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Access id denied for this operation, or this operation is not valid for the specified resource.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>This operation or its parameters aren't formatted correctly.</p>
 *
 * @throws {@link AIOpsServiceException}
 * <p>Base exception class for all service exceptions from AIOps service.</p>
 *
 *
 * @public
 */
export class DeleteInvestigationGroupCommand extends $Command
  .classBuilder<
    DeleteInvestigationGroupCommandInput,
    DeleteInvestigationGroupCommandOutput,
    AIOpsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AIOpsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AIOps", "DeleteInvestigationGroup", {})
  .n("AIOpsClient", "DeleteInvestigationGroupCommand")
  .sc(DeleteInvestigationGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteInvestigationGroupRequest;
      output: {};
    };
    sdk: {
      input: DeleteInvestigationGroupCommandInput;
      output: DeleteInvestigationGroupCommandOutput;
    };
  };
}
