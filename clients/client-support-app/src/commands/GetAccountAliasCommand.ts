// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAccountAliasRequest, GetAccountAliasResult } from "../models/models_0";
import { GetAccountAlias$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAccountAliasCommand}.
 */
export interface GetAccountAliasCommandInput extends GetAccountAliasRequest {}
/**
 * @public
 *
 * The output of {@link GetAccountAliasCommand}.
 */
export interface GetAccountAliasCommandOutput extends GetAccountAliasResult, __MetadataBearer {}

/**
 * <p>Retrieves the alias from an Amazon Web Services account ID. The alias appears in the Amazon Web Services Support App page of
 *       the Amazon Web Services Support Center. The alias also appears in Slack messages from the Amazon Web Services Support App.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SupportAppClient, GetAccountAliasCommand } from "@aws-sdk/client-support-app"; // ES Modules import
 * // const { SupportAppClient, GetAccountAliasCommand } = require("@aws-sdk/client-support-app"); // CommonJS import
 * // import type { SupportAppClientConfig } from "@aws-sdk/client-support-app";
 * const config = {}; // type is SupportAppClientConfig
 * const client = new SupportAppClient(config);
 * const input = {};
 * const command = new GetAccountAliasCommand(input);
 * const response = await client.send(command);
 * // { // GetAccountAliasResult
 * //   accountAlias: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetAccountAliasCommandInput - {@link GetAccountAliasCommandInput}
 * @returns {@link GetAccountAliasCommandOutput}
 * @see {@link GetAccountAliasCommandInput} for command's `input` shape.
 * @see {@link GetAccountAliasCommandOutput} for command's `response` shape.
 * @see {@link SupportAppClientResolvedConfig | config} for SupportAppClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>We can’t process your request right now because of a server issue. Try again later.</p>
 *
 * @throws {@link SupportAppServiceException}
 * <p>Base exception class for all service exceptions from SupportApp service.</p>
 *
 *
 * @public
 */
export class GetAccountAliasCommand extends command<GetAccountAliasCommandInput, GetAccountAliasCommandOutput>(
  _ep0,
  _mw0,
  "GetAccountAlias",
  GetAccountAlias$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetAccountAliasResult;
    };
    sdk: {
      input: GetAccountAliasCommandInput;
      output: GetAccountAliasCommandOutput;
    };
  };
}
