// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RegisterAdminInput } from "../models/models_0";
import { RegisterAdmin$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RegisterAdminCommand}.
 */
export interface RegisterAdminCommandInput extends RegisterAdminInput {}
/**
 * @public
 *
 * The output of {@link RegisterAdminCommand}.
 */
export interface RegisterAdminCommandOutput extends __MetadataBearer {}

/**
 * Adds a user or group to the list of administrators of the private re:Post.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RepostspaceClient, RegisterAdminCommand } from "@aws-sdk/client-repostspace"; // ES Modules import
 * // const { RepostspaceClient, RegisterAdminCommand } = require("@aws-sdk/client-repostspace"); // CommonJS import
 * // import type { RepostspaceClientConfig } from "@aws-sdk/client-repostspace";
 * const config = {}; // type is RepostspaceClientConfig
 * const client = new RepostspaceClient(config);
 * const input = { // RegisterAdminInput
 *   spaceId: "STRING_VALUE", // required
 *   adminId: "STRING_VALUE", // required
 * };
 * const command = new RegisterAdminCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RegisterAdminCommandInput - {@link RegisterAdminCommandInput}
 * @returns {@link RegisterAdminCommandOutput}
 * @see {@link RegisterAdminCommandInput} for command's `input` shape.
 * @see {@link RegisterAdminCommandOutput} for command's `response` shape.
 * @see {@link RepostspaceClientResolvedConfig | config} for RepostspaceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User does not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Unexpected error during processing of request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Request references a resource which does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an AWS service.
 *
 * @throws {@link RepostspaceServiceException}
 *
 * Base exception class for all service exceptions from Repostspace service.
 *
 * @public
 */
export class RegisterAdminCommand extends command<RegisterAdminCommandInput, RegisterAdminCommandOutput>(
  _ep0,
  _mw0,
  "RegisterAdmin",
  RegisterAdmin$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RegisterAdminInput;
      output: {};
    };
    sdk: {
      input: RegisterAdminCommandInput;
      output: RegisterAdminCommandOutput;
    };
  };
}
