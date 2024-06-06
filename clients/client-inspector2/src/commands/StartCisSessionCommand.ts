// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import { StartCisSessionRequest, StartCisSessionResponse } from "../models/models_1";
import { de_StartCisSessionCommand, se_StartCisSessionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartCisSessionCommand}.
 */
export interface StartCisSessionCommandInput extends StartCisSessionRequest {}
/**
 * @public
 *
 * The output of {@link StartCisSessionCommand}.
 */
export interface StartCisSessionCommandOutput extends StartCisSessionResponse, __MetadataBearer {}

/**
 * <p>
 *          Starts a CIS session.
 *          This API is used by the Amazon Inspector SSM plugin to communicate with the Amazon Inspector service.
 *          The Amazon Inspector SSM plugin calls this API to start a CIS scan session for the scan ID supplied by the service.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, StartCisSessionCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, StartCisSessionCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * const client = new Inspector2Client(config);
 * const input = { // StartCisSessionRequest
 *   scanJobId: "STRING_VALUE", // required
 *   message: { // StartCisSessionMessage
 *     sessionToken: "STRING_VALUE", // required
 *   },
 * };
 * const command = new StartCisSessionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartCisSessionCommandInput - {@link StartCisSessionCommandInput}
 * @returns {@link StartCisSessionCommandOutput}
 * @see {@link StartCisSessionCommandInput} for command's `input` shape.
 * @see {@link StartCisSessionCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A conflict occurred.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal failure of the Amazon Inspector service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation due to missing required fields or having invalid
 *          inputs.</p>
 *
 * @throws {@link Inspector2ServiceException}
 * <p>Base exception class for all service exceptions from Inspector2 service.</p>
 *
 * @public
 */
export class StartCisSessionCommand extends $Command
  .classBuilder<
    StartCisSessionCommandInput,
    StartCisSessionCommandOutput,
    Inspector2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: Inspector2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Inspector2", "StartCisSession", {})
  .n("Inspector2Client", "StartCisSessionCommand")
  .f(void 0, void 0)
  .ser(se_StartCisSessionCommand)
  .de(de_StartCisSessionCommand)
  .build() {}
