// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteSystemRequest, DeleteSystemResponse } from "../models/models_0";
import { DeleteSystem$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteSystemCommand}.
 */
export interface DeleteSystemCommandInput extends DeleteSystemRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSystemCommand}.
 */
export interface DeleteSystemCommandOutput extends DeleteSystemResponse, __MetadataBearer {}

/**
 * Deletes a system.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Resiliencehubv2Client, DeleteSystemCommand } from "@aws-sdk/client-resiliencehubv2"; // ES Modules import
 * // const { Resiliencehubv2Client, DeleteSystemCommand } = require("@aws-sdk/client-resiliencehubv2"); // CommonJS import
 * // import type { Resiliencehubv2ClientConfig } from "@aws-sdk/client-resiliencehubv2";
 * const config = {}; // type is Resiliencehubv2ClientConfig
 * const client = new Resiliencehubv2Client(config);
 * const input = { // DeleteSystemRequest
 *   systemArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteSystemCommand(input);
 * const response = await client.send(command);
 * // { // DeleteSystemResponse
 * //   systemArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteSystemCommandInput - {@link DeleteSystemCommandInput}
 * @returns {@link DeleteSystemCommandOutput}
 * @see {@link DeleteSystemCommandInput} for command's `input` shape.
 * @see {@link DeleteSystemCommandOutput} for command's `response` shape.
 * @see {@link Resiliencehubv2ClientResolvedConfig | config} for Resiliencehubv2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access denied — caller lacks required permissions.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Conflict — resource already exists.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Internal service error.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Resource not found.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Validation error — invalid input parameters.
 *
 * @throws {@link Resiliencehubv2ServiceException}
 *
 * Base exception class for all service exceptions from Resiliencehubv2 service.
 *
 * @public
 */
export class DeleteSystemCommand extends command<DeleteSystemCommandInput, DeleteSystemCommandOutput>(
  _ep0,
  _mw0,
  "DeleteSystem",
  DeleteSystem$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSystemRequest;
      output: DeleteSystemResponse;
    };
    sdk: {
      input: DeleteSystemCommandInput;
      output: DeleteSystemCommandOutput;
    };
  };
}
