// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteMeteredProductRequest, DeleteMeteredProductResponse } from "../models/models_1";
import { DeleteMeteredProduct$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteMeteredProductCommand}.
 */
export interface DeleteMeteredProductCommandInput extends DeleteMeteredProductRequest {}
/**
 * @public
 *
 * The output of {@link DeleteMeteredProductCommand}.
 */
export interface DeleteMeteredProductCommandOutput extends DeleteMeteredProductResponse, __MetadataBearer {}

/**
 * Deletes a metered product.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeadlineClient, DeleteMeteredProductCommand } from "@aws-sdk/client-deadline"; // ES Modules import
 * // const { DeadlineClient, DeleteMeteredProductCommand } = require("@aws-sdk/client-deadline"); // CommonJS import
 * // import type { DeadlineClientConfig } from "@aws-sdk/client-deadline";
 * const config = {}; // type is DeadlineClientConfig
 * const client = new DeadlineClient(config);
 * const input = { // DeleteMeteredProductRequest
 *   licenseEndpointId: "STRING_VALUE", // required
 *   productId: "STRING_VALUE", // required
 * };
 * const command = new DeleteMeteredProductCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteMeteredProductCommandInput - {@link DeleteMeteredProductCommandInput}
 * @returns {@link DeleteMeteredProductCommandOutput}
 * @see {@link DeleteMeteredProductCommandInput} for command's `input` shape.
 * @see {@link DeleteMeteredProductCommandOutput} for command's `response` shape.
 * @see {@link DeadlineClientResolvedConfig | config} for DeadlineClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  You don't have permission to perform the action.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  Deadline Cloud can't process your request right now. Try again later.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The requested resource can't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  Your request exceeded a request rate quota.
 *
 * @throws {@link ValidationException} (client fault)
 *  The request isn't valid. This can occur if your request contains malformed JSON or unsupported characters.
 *
 * @throws {@link DeadlineServiceException}
 * <p>Base exception class for all service exceptions from Deadline service.</p>
 *
 *
 * @public
 */
export class DeleteMeteredProductCommand extends command<DeleteMeteredProductCommandInput, DeleteMeteredProductCommandOutput>(
  _ep0,
  _mw0,
  "DeleteMeteredProduct",
  DeleteMeteredProduct$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteMeteredProductRequest;
      output: {};
    };
    sdk: {
      input: DeleteMeteredProductCommandInput;
      output: DeleteMeteredProductCommandOutput;
    };
  };
}
