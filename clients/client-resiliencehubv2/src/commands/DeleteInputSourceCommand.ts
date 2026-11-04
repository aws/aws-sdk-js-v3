// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteInputSourceRequest, DeleteInputSourceResponse } from "../models/models_0";
import { DeleteInputSource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteInputSourceCommand}.
 */
export interface DeleteInputSourceCommandInput extends DeleteInputSourceRequest {}
/**
 * @public
 *
 * The output of {@link DeleteInputSourceCommand}.
 */
export interface DeleteInputSourceCommandOutput extends DeleteInputSourceResponse, __MetadataBearer {}

/**
 * Deletes an input source.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Resiliencehubv2Client, DeleteInputSourceCommand } from "@aws-sdk/client-resiliencehubv2"; // ES Modules import
 * // const { Resiliencehubv2Client, DeleteInputSourceCommand } = require("@aws-sdk/client-resiliencehubv2"); // CommonJS import
 * // import type { Resiliencehubv2ClientConfig } from "@aws-sdk/client-resiliencehubv2";
 * const config = {}; // type is Resiliencehubv2ClientConfig
 * const client = new Resiliencehubv2Client(config);
 * const input = { // DeleteInputSourceRequest
 *   serviceArn: "STRING_VALUE", // required
 *   inputSourceId: "STRING_VALUE", // required
 * };
 * const command = new DeleteInputSourceCommand(input);
 * const response = await client.send(command);
 * // { // DeleteInputSourceResponse
 * //   serviceArn: "STRING_VALUE", // required
 * //   inputSourceId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteInputSourceCommandInput - {@link DeleteInputSourceCommandInput}
 * @returns {@link DeleteInputSourceCommandOutput}
 * @see {@link DeleteInputSourceCommandInput} for command's `input` shape.
 * @see {@link DeleteInputSourceCommandOutput} for command's `response` shape.
 * @see {@link Resiliencehubv2ClientResolvedConfig | config} for Resiliencehubv2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access denied — caller lacks required permissions.
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
export class DeleteInputSourceCommand extends command<DeleteInputSourceCommandInput, DeleteInputSourceCommandOutput>(
  _ep0,
  _mw0,
  "DeleteInputSource",
  DeleteInputSource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteInputSourceRequest;
      output: DeleteInputSourceResponse;
    };
    sdk: {
      input: DeleteInputSourceCommandInput;
      output: DeleteInputSourceCommandOutput;
    };
  };
}
