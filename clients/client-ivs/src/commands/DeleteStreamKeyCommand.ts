// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteStreamKeyRequest } from "../models/models_0";
import { DeleteStreamKey$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteStreamKeyCommand}.
 */
export interface DeleteStreamKeyCommandInput extends DeleteStreamKeyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteStreamKeyCommand}.
 */
export interface DeleteStreamKeyCommandOutput extends __MetadataBearer {}

/**
 * Deletes the stream key for the specified ARN, so it can no longer be used to stream.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, DeleteStreamKeyCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, DeleteStreamKeyCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * // import type { IvsClientConfig } from "@aws-sdk/client-ivs";
 * const config = {}; // type is IvsClientConfig
 * const client = new IvsClient(config);
 * const input = { // DeleteStreamKeyRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new DeleteStreamKeyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteStreamKeyCommandInput - {@link DeleteStreamKeyCommandInput}
 * @returns {@link DeleteStreamKeyCommandOutput}
 * @see {@link DeleteStreamKeyCommandInput} for command's `input` shape.
 * @see {@link DeleteStreamKeyCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for IvsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User does not have sufficient access to perform this action.
 *
 * @throws {@link PendingVerification} (client fault)
 *
 * Your account is pending verification.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Request references a resource which does not exist.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link IvsServiceException}
 *
 * Base exception class for all service exceptions from Ivs service.
 *
 * @public
 */
export class DeleteStreamKeyCommand extends command<DeleteStreamKeyCommandInput, DeleteStreamKeyCommandOutput>(
  _ep0,
  _mw0,
  "DeleteStreamKey",
  DeleteStreamKey$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteStreamKeyRequest;
      output: {};
    };
    sdk: {
      input: DeleteStreamKeyCommandInput;
      output: DeleteStreamKeyCommandOutput;
    };
  };
}
