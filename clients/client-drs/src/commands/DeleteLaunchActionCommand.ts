// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteLaunchActionRequest, DeleteLaunchActionResponse } from "../models/models_0";
import { DeleteLaunchAction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteLaunchActionCommand}.
 */
export interface DeleteLaunchActionCommandInput extends DeleteLaunchActionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteLaunchActionCommand}.
 */
export interface DeleteLaunchActionCommandOutput extends DeleteLaunchActionResponse, __MetadataBearer {}

/**
 * Deletes a resource launch action.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, DeleteLaunchActionCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, DeleteLaunchActionCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * // import type { DrsClientConfig } from "@aws-sdk/client-drs";
 * const config = {}; // type is DrsClientConfig
 * const client = new DrsClient(config);
 * const input = { // DeleteLaunchActionRequest
 *   resourceId: "STRING_VALUE", // required
 *   actionId: "STRING_VALUE", // required
 * };
 * const command = new DeleteLaunchActionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteLaunchActionCommandInput - {@link DeleteLaunchActionCommandInput}
 * @returns {@link DeleteLaunchActionCommandOutput}
 * @see {@link DeleteLaunchActionCommandInput} for command's `input` shape.
 * @see {@link DeleteLaunchActionCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource for this operation was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *
 * The account performing the request has not been initialized.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the AWS service.
 *
 * @throws {@link DrsServiceException}
 *
 * Base exception class for all service exceptions from Drs service.
 *
 * @public
 */
export class DeleteLaunchActionCommand extends command<DeleteLaunchActionCommandInput, DeleteLaunchActionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteLaunchAction",
  DeleteLaunchAction$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteLaunchActionRequest;
      output: {};
    };
    sdk: {
      input: DeleteLaunchActionCommandInput;
      output: DeleteLaunchActionCommandOutput;
    };
  };
}
