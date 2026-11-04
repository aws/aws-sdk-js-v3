// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateResourcePolicyRequest, CreateResourcePolicyResponse } from "../models/models_0";
import { CreateResourcePolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateResourcePolicyCommand}.
 */
export interface CreateResourcePolicyCommandInput extends CreateResourcePolicyRequest {}
/**
 * @public
 *
 * The output of {@link CreateResourcePolicyCommand}.
 */
export interface CreateResourcePolicyCommandOutput extends CreateResourcePolicyResponse, __MetadataBearer {}

/**
 * Creates a new resource policy with the specified policy statements.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, CreateResourcePolicyCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, CreateResourcePolicyCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * // import type { LexModelsV2ClientConfig } from "@aws-sdk/client-lex-models-v2";
 * const config = {}; // type is LexModelsV2ClientConfig
 * const client = new LexModelsV2Client(config);
 * const input = { // CreateResourcePolicyRequest
 *   resourceArn: "STRING_VALUE", // required
 *   policy: "STRING_VALUE", // required
 * };
 * const command = new CreateResourcePolicyCommand(input);
 * const response = await client.send(command);
 * // { // CreateResourcePolicyResponse
 * //   resourceArn: "STRING_VALUE",
 * //   revisionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateResourcePolicyCommandInput - {@link CreateResourcePolicyCommandInput}
 * @returns {@link CreateResourcePolicyCommandOutput}
 * @see {@link CreateResourcePolicyCommandInput} for command's `input` shape.
 * @see {@link CreateResourcePolicyCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The service encountered an unexpected condition. Try your request again.
 *
 * @throws {@link PreconditionFailedException} (client fault)
 *
 * Your request couldn't be completed because one or more request fields aren't valid. Check the fields in your request and try again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * You asked to describe a resource that doesn't exist. Check the resource that you are requesting and try again.
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
export class CreateResourcePolicyCommand extends command<CreateResourcePolicyCommandInput, CreateResourcePolicyCommandOutput>(
  _ep0,
  _mw0,
  "CreateResourcePolicy",
  CreateResourcePolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateResourcePolicyRequest;
      output: CreateResourcePolicyResponse;
    };
    sdk: {
      input: CreateResourcePolicyCommandInput;
      output: CreateResourcePolicyCommandOutput;
    };
  };
}
