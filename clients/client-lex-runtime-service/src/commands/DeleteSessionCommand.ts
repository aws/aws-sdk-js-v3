// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteSessionRequest, DeleteSessionResponse } from "../models/models_0";
import { DeleteSession$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteSessionCommand}.
 */
export interface DeleteSessionCommandInput extends DeleteSessionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSessionCommand}.
 */
export interface DeleteSessionCommandOutput extends DeleteSessionResponse, __MetadataBearer {}

/**
 * Removes session information for a specified bot, alias, and user ID.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexRuntimeServiceClient, DeleteSessionCommand } from "@aws-sdk/client-lex-runtime-service"; // ES Modules import
 * // const { LexRuntimeServiceClient, DeleteSessionCommand } = require("@aws-sdk/client-lex-runtime-service"); // CommonJS import
 * // import type { LexRuntimeServiceClientConfig } from "@aws-sdk/client-lex-runtime-service";
 * const config = {}; // type is LexRuntimeServiceClientConfig
 * const client = new LexRuntimeServiceClient(config);
 * const input = { // DeleteSessionRequest
 *   botName: "STRING_VALUE", // required
 *   botAlias: "STRING_VALUE", // required
 *   userId: "STRING_VALUE", // required
 * };
 * const command = new DeleteSessionCommand(input);
 * const response = await client.send(command);
 * // { // DeleteSessionResponse
 * //   botName: "STRING_VALUE",
 * //   botAlias: "STRING_VALUE",
 * //   userId: "STRING_VALUE",
 * //   sessionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteSessionCommandInput - {@link DeleteSessionCommandInput}
 * @returns {@link DeleteSessionCommandOutput}
 * @see {@link DeleteSessionCommandInput} for command's `input` shape.
 * @see {@link DeleteSessionCommandOutput} for command's `response` shape.
 * @see {@link LexRuntimeServiceClientResolvedConfig | config} for LexRuntimeServiceClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * Request validation failed, there is no usable message in the context, or the bot build failed, is still in progress, or contains unbuilt changes.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Two clients are using the same AWS account, Amazon Lex bot, and user ID.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * Internal service error. Retry the call.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * Exceeded a limit.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The resource (such as the Amazon Lex bot or an alias) that is referred to is not found.
 *
 * @throws {@link LexRuntimeServiceServiceException}
 *
 * Base exception class for all service exceptions from LexRuntimeService service.
 *
 * @public
 */
export class DeleteSessionCommand extends command<DeleteSessionCommandInput, DeleteSessionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteSession",
  DeleteSession$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSessionRequest;
      output: DeleteSessionResponse;
    };
    sdk: {
      input: DeleteSessionCommandInput;
      output: DeleteSessionCommandOutput;
    };
  };
}
