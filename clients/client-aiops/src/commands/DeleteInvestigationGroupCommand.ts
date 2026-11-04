// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteInvestigationGroupRequest } from "../models/models_0";
import { DeleteInvestigationGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes the specified investigation group from your account. You can currently have one investigation group per Region in your account. After you delete an investigation group, you can later create a new investigation group in the same Region.
 *
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
 *
 * You don't have sufficient permissions to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. You can try again later.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource doesn't exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was throttled because of quota limits. You can try again later.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * This operation couldn't be completed because of a conflict in resource states.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * Access id denied for this operation, or this operation is not valid for the specified resource.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * This operation or its parameters aren't formatted correctly.
 *
 * @throws {@link AIOpsServiceException}
 *
 * Base exception class for all service exceptions from AIOps service.
 *
 * @public
 */
export class DeleteInvestigationGroupCommand extends command<DeleteInvestigationGroupCommandInput, DeleteInvestigationGroupCommandOutput>(
  _ep0,
  _mw0,
  "DeleteInvestigationGroup",
  DeleteInvestigationGroup$
) {
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
