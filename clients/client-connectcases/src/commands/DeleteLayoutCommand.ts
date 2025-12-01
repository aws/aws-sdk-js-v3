// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectCasesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectCasesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteLayoutRequest, DeleteLayoutResponse } from "../models/models_0";
import { DeleteLayout } from "../schemas/schemas_0";

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
 * <p>Deletes a layout from a cases template. You can delete up to 100 layouts per domain.</p> <p>After a layout is deleted:</p> <ul> <li> <p>You can still retrieve the layout by calling <code>GetLayout</code>.</p> </li> <li> <p>You cannot update a deleted layout by calling <code>UpdateLayout</code>; it throws a <code>ValidationException</code>.</p> </li> <li> <p>Deleted layouts are not included in the <code>ListLayouts</code> response.</p> </li> </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCasesClient, DeleteLayoutCommand } from "@aws-sdk/client-connectcases"; // ES Modules import
 * // const { ConnectCasesClient, DeleteLayoutCommand } = require("@aws-sdk/client-connectcases"); // CommonJS import
 * // import type { ConnectCasesClientConfig } from "@aws-sdk/client-connectcases";
 * const config = {}; // type is ConnectCasesClientConfig
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
 *  <p>The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request. See the accompanying error message for details.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>We couldn't process your request because of an issue with the server. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>We couldn't find the requested resource. Check that your resources exists and were created in the same Amazon Web Services Region as your request, and try your request again.</p>
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectCases", "DeleteLayout", {})
  .n("ConnectCasesClient", "DeleteLayoutCommand")
  .sc(DeleteLayout)
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
