// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import { SendCisSessionHealthRequest, SendCisSessionHealthResponse } from "../models/models_1";
import { de_SendCisSessionHealthCommand, se_SendCisSessionHealthCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>
 *          Sends a CIS session health.
 *          This API is used by the Amazon Inspector SSM plugin to communicate with the Amazon Inspector service.
 *          The Amazon Inspector SSM plugin calls this API to start a CIS scan session for the scan ID supplied by the service.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, SendCisSessionHealthCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, SendCisSessionHealthCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
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
export class SendCisSessionHealthCommand extends $Command
  .classBuilder<
    SendCisSessionHealthCommandInput,
    SendCisSessionHealthCommandOutput,
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
  .s("Inspector2", "SendCisSessionHealth", {})
  .n("Inspector2Client", "SendCisSessionHealthCommand")
  .f(void 0, void 0)
  .ser(se_SendCisSessionHealthCommand)
  .de(de_SendCisSessionHealthCommand)
  .build() {}
