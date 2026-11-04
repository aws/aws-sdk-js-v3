// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteGraphRequest } from "../models/models_0";
import { DeleteGraph$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteGraphCommand}.
 */
export interface DeleteGraphCommandInput extends DeleteGraphRequest {}
/**
 * @public
 *
 * The output of {@link DeleteGraphCommand}.
 */
export interface DeleteGraphCommandOutput extends __MetadataBearer {}

/**
 * Disables the specified behavior graph and queues it to be deleted. This operation removes the behavior graph from each member account's list of behavior graphs.
 *
 * `DeleteGraph` can only be called by the administrator account for a behavior graph.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DetectiveClient, DeleteGraphCommand } from "@aws-sdk/client-detective"; // ES Modules import
 * // const { DetectiveClient, DeleteGraphCommand } = require("@aws-sdk/client-detective"); // CommonJS import
 * // import type { DetectiveClientConfig } from "@aws-sdk/client-detective";
 * const config = {}; // type is DetectiveClientConfig
 * const client = new DetectiveClient(config);
 * const input = { // DeleteGraphRequest
 *   GraphArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteGraphCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteGraphCommandInput - {@link DeleteGraphCommandInput}
 * @returns {@link DeleteGraphCommandOutput}
 * @see {@link DeleteGraphCommandInput} for command's `input` shape.
 * @see {@link DeleteGraphCommandOutput} for command's `response` shape.
 * @see {@link DetectiveClientResolvedConfig | config} for DetectiveClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The request issuer does not have permission to access this resource or perform this operation.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request was valid but failed because of a problem with the service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request refers to a nonexistent resource.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request parameters are invalid.
 *
 * @throws {@link DetectiveServiceException}
 *
 * Base exception class for all service exceptions from Detective service.
 *
 * @public
 */
export class DeleteGraphCommand extends command<DeleteGraphCommandInput, DeleteGraphCommandOutput>(
  _ep0,
  _mw0,
  "DeleteGraph",
  DeleteGraph$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteGraphRequest;
      output: {};
    };
    sdk: {
      input: DeleteGraphCommandInput;
      output: DeleteGraphCommandOutput;
    };
  };
}
