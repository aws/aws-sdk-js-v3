// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateOneTimeDeepLinkCodeInput, CreateOneTimeDeepLinkCodeOutput } from "../models/models_0";
import { CreateOneTimeDeepLinkCode$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateOneTimeDeepLinkCodeCommand}.
 */
export interface CreateOneTimeDeepLinkCodeCommandInput extends CreateOneTimeDeepLinkCodeInput {}
/**
 * @public
 *
 * The output of {@link CreateOneTimeDeepLinkCodeCommand}.
 */
export interface CreateOneTimeDeepLinkCodeCommandOutput extends CreateOneTimeDeepLinkCodeOutput, __MetadataBearer {}

/**
 * Generates a one-time code for deep-link authentication.
 *
 * Direct the user's browser to the returned deepLinkUrl before it expires. The code is
 * exchanged for an authenticated, domain-scoped session and can be used only once.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchOmniClient, CreateOneTimeDeepLinkCodeCommand } from "@aws-sdk/client-cloudwatchomni"; // ES Modules import
 * // const { CloudWatchOmniClient, CreateOneTimeDeepLinkCodeCommand } = require("@aws-sdk/client-cloudwatchomni"); // CommonJS import
 * // import type { CloudWatchOmniClientConfig } from "@aws-sdk/client-cloudwatchomni";
 * const config = {}; // type is CloudWatchOmniClientConfig
 * const client = new CloudWatchOmniClient(config);
 * const input = { // CreateOneTimeDeepLinkCodeInput
 *   domainId: "STRING_VALUE", // required
 *   ttlSeconds: Number("int"),
 *   redirectUrl: "STRING_VALUE",
 * };
 * const command = new CreateOneTimeDeepLinkCodeCommand(input);
 * const response = await client.send(command);
 * // { // CreateOneTimeDeepLinkCodeOutput
 * //   code: "STRING_VALUE", // required
 * //   deepLinkUrl: "STRING_VALUE", // required
 * //   expiresAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param CreateOneTimeDeepLinkCodeCommandInput - {@link CreateOneTimeDeepLinkCodeCommandInput}
 * @returns {@link CreateOneTimeDeepLinkCodeCommandOutput}
 * @see {@link CreateOneTimeDeepLinkCodeCommandInput} for command's `input` shape.
 * @see {@link CreateOneTimeDeepLinkCodeCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchOmniClientResolvedConfig | config} for CloudWatchOmniClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  The caller is not authorized to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *  An unexpected error occurred while processing the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The specified resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  The request was throttled due to exceeding the allowed request rate.
 *
 * @throws {@link ValidationException} (client fault)
 *  A parameter is specified incorrectly.
 *
 * @throws {@link CloudWatchOmniServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchOmni service.</p>
 *
 *
 * @example Create a one-time deep-link code
 * ```javascript
 * // The following example creates a one-time deep-link code for a domain that remains valid for 300 seconds and, once used, redirects the browser to the domain's /auth/callback path. Direct the user's browser to the returned deepLinkUrl before it expires; the code can be used only once. Payloads are shown as JSON; on the wire they are CBOR-encoded.
 * const input = {
 *   domainId: "d-1a2b3c4d5e",
 *   redirectUrl: "https://d-1a2b3c4d5e.cloudwatch-omni.global.app.aws/auth/callback",
 *   ttlSeconds: 300
 * };
 * const command = new CreateOneTimeDeepLinkCodeCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   code: "dlc-EXAMPLE1234567890",
 *   deepLinkUrl: "https://d-1a2b3c4d5e.cloudwatch-omni.global.app.aws/deeplink?code=EXAMPLE1234567890",
 *   expiresAt: "2026-09-16T14:27:31Z"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateOneTimeDeepLinkCodeCommand extends command<CreateOneTimeDeepLinkCodeCommandInput, CreateOneTimeDeepLinkCodeCommandOutput>(
  _ep0,
  _mw0,
  "CreateOneTimeDeepLinkCode",
  CreateOneTimeDeepLinkCode$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateOneTimeDeepLinkCodeInput;
      output: CreateOneTimeDeepLinkCodeOutput;
    };
    sdk: {
      input: CreateOneTimeDeepLinkCodeCommandInput;
      output: CreateOneTimeDeepLinkCodeCommandOutput;
    };
  };
}
