// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SendCisSessionHealthRequest, SendCisSessionHealthResponse } from "../models/models_1";
import { SendCisSessionHealth$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SendCisSessionHealthCommand}.
 */
export interface SendCisSessionHealthCommandInput extends SendCisSessionHealthRequest {}
/**
 * @public
 *
 * The output of {@link SendCisSessionHealthCommand}.
 */
export interface SendCisSessionHealthCommandOutput extends SendCisSessionHealthResponse, __MetadataBearer {}

/**
 * Sends a CIS session health. This API is used by the Amazon Inspector SSM plugin to communicate with the Amazon Inspector service. The Amazon Inspector SSM plugin calls this API to start a CIS scan session for the scan ID supplied by the service.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, SendCisSessionHealthCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, SendCisSessionHealthCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * // import type { Inspector2ClientConfig } from "@aws-sdk/client-inspector2";
 * const config = {}; // type is Inspector2ClientConfig
 * const client = new Inspector2Client(config);
 * const input = { // SendCisSessionHealthRequest
 *   scanJobId: "STRING_VALUE", // required
 *   sessionToken: "STRING_VALUE", // required
 * };
 * const command = new SendCisSessionHealthCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SendCisSessionHealthCommandInput - {@link SendCisSessionHealthCommandInput}
 * @returns {@link SendCisSessionHealthCommandOutput}
 * @see {@link SendCisSessionHealthCommandInput} for command's `input` shape.
 * @see {@link SendCisSessionHealthCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * For `Enable`, you receive this error if you attempt to use a feature in an unsupported Amazon Web Services Region.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * A conflict occurred. This exception occurs when the same resource is being modified by concurrent requests.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed due to an internal failure of the Amazon Inspector service.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The limit on the number of requests per second was exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request has failed validation due to missing required fields or having invalid inputs.
 *
 * @throws {@link Inspector2ServiceException}
 *
 * Base exception class for all service exceptions from Inspector2 service.
 *
 * @example Sample SendCisSessionHealth Call
 * ```javascript
 * //
 * const input = {
 *   scanJobId: "624b746d-e080-44ae-8c1d-48e653365a38",
 *   sessionToken: "624b746d-e080-44ae-8c1d-48e653365a31"
 * };
 * const command = new SendCisSessionHealthCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class SendCisSessionHealthCommand extends command<SendCisSessionHealthCommandInput, SendCisSessionHealthCommandOutput>(
  _ep0,
  _mw0,
  "SendCisSessionHealth",
  SendCisSessionHealth$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SendCisSessionHealthRequest;
      output: {};
    };
    sdk: {
      input: SendCisSessionHealthCommandInput;
      output: SendCisSessionHealthCommandOutput;
    };
  };
}
