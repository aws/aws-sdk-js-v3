// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectCasesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectCasesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteLayoutRequest, DeleteLayoutResponse } from "../models/models_0";
import { de_DeleteLayoutCommand, se_DeleteLayoutCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteLayoutCommand}.
 */
export interface DeleteLayoutCommandInput extends DeleteLayoutRequest {}
/**
 * @public
 *
 * The output of {@link DeleteLayoutCommand}.
 */
export interface DeleteLayoutCommandOutput extends DeleteLayoutResponse, __MetadataBearer {}

/**
 * <p>Deletes a layout from a cases template. You can delete up to 100 layouts per domain.</p>
 *
 *          <p>After a layout is deleted:</p>
 *          <ul>
 *             <li>
 *                <p>You can still retrieve the layout by calling <code>GetLayout</code>.</p>
 *             </li>
 *             <li>
 *                <p>You cannot update a deleted layout by calling <code>UpdateLayout</code>; it throws a
 *           <code>ValidationException</code>.</p>
 *             </li>
 *             <li>
 *                <p>Deleted layouts are not included in the <code>ListLayouts</code> response.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCasesClient, DeleteLayoutCommand } from "@aws-sdk/client-connectcases"; // ES Modules import
 * // const { ConnectCasesClient, DeleteLayoutCommand } = require("@aws-sdk/client-connectcases"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ConnectCasesClient(config);
 * const input = { // DeleteLayoutRequest
 *   domainId: "STRING_VALUE", // required
 *   layoutId: "STRING_VALUE", // required
 * };
 * const command = new DeleteLayoutCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteLayoutCommandInput - {@link DeleteLayoutCommandInput}
 * @returns {@link DeleteLayoutCommandOutput}
 * @see {@link DeleteLayoutCommandInput} for command's `input` shape.
 * @see {@link DeleteLayoutCommandOutput} for command's `response` shape.
 * @see {@link ConnectCasesClientResolvedConfig | config} for ConnectCasesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested operation would cause a conflict with the current state of a service
 *       resource associated with the request. Resolve the conflict before retrying this request. See
 *       the accompanying error message for details.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>We couldn't process your request because of an issue with the server. Try again
 *       later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>We couldn't find the requested resource. Check that your resources exists and were created
 *       in the same Amazon Web Services Region as your request, and try your request again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate has been exceeded for this API. Please try again after a few minutes.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. Check the syntax and try again.</p>
 *
 * @throws {@link ConnectCasesServiceException}
 * <p>Base exception class for all service exceptions from ConnectCases service.</p>
 *
 * @public
 */
export class DeleteLayoutCommand extends $Command
  .classBuilder<
    DeleteLayoutCommandInput,
    DeleteLayoutCommandOutput,
    ConnectCasesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectCasesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectCases", "DeleteLayout", {})
  .n("ConnectCasesClient", "DeleteLayoutCommand")
  .f(void 0, void 0)
  .ser(se_DeleteLayoutCommand)
  .de(de_DeleteLayoutCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteLayoutRequest;
      output: {};
    };
    sdk: {
      input: DeleteLayoutCommandInput;
      output: DeleteLayoutCommandOutput;
    };
  };
}
