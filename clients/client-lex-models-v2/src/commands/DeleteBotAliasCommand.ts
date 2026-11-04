// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteBotAliasRequest, DeleteBotAliasResponse } from "../models/models_0";
import { DeleteBotAlias$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteBotAliasCommand}.
 */
export interface DeleteBotAliasCommandInput extends DeleteBotAliasRequest {}
/**
 * @public
 *
 * The output of {@link DeleteBotAliasCommand}.
 */
export interface DeleteBotAliasCommandOutput extends DeleteBotAliasResponse, __MetadataBearer {}

/**
 * Deletes the specified bot alias.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DeleteBotAliasCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DeleteBotAliasCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * // import type { LexModelsV2ClientConfig } from "@aws-sdk/client-lex-models-v2";
 * const config = {}; // type is LexModelsV2ClientConfig
 * const client = new LexModelsV2Client(config);
 * const input = { // DeleteBotAliasRequest
 *   botAliasId: "STRING_VALUE", // required
 *   botId: "STRING_VALUE", // required
 *   skipResourceInUseCheck: true || false,
 * };
 * const command = new DeleteBotAliasCommand(input);
 * const response = await client.send(command);
 * // { // DeleteBotAliasResponse
 * //   botAliasId: "STRING_VALUE",
 * //   botId: "STRING_VALUE",
 * //   botAliasStatus: "Creating" || "Available" || "Deleting" || "Failed",
 * // };
 *
 * ```
 *
 * @param DeleteBotAliasCommandInput - {@link DeleteBotAliasCommandInput}
 * @returns {@link DeleteBotAliasCommandOutput}
 * @see {@link DeleteBotAliasCommandInput} for command's `input` shape.
 * @see {@link DeleteBotAliasCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The action that you tried to perform couldn't be completed because the resource is in a conflicting state. For example, deleting a bot that is in the CREATING state. Try your request again.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The service encountered an unexpected condition. Try your request again.
 *
 * @throws {@link PreconditionFailedException} (client fault)
 *
 * Your request couldn't be completed because one or more request fields aren't valid. Check the fields in your request and try again.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * You have reached a quota for your bot.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Your request rate is too high. Reduce the frequency of requests.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * One of the input parameters in your request isn't valid. Check the parameters and try your request again.
 *
 * @throws {@link LexModelsV2ServiceException}
 *
 * Base exception class for all service exceptions from LexModelsV2 service.
 *
 * @public
 */
export class DeleteBotAliasCommand extends command<DeleteBotAliasCommandInput, DeleteBotAliasCommandOutput>(
  _ep0,
  _mw0,
  "DeleteBotAlias",
  DeleteBotAlias$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteBotAliasRequest;
      output: DeleteBotAliasResponse;
    };
    sdk: {
      input: DeleteBotAliasCommandInput;
      output: DeleteBotAliasCommandOutput;
    };
  };
}
