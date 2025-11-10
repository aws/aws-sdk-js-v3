// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Macie2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Macie2Client";
import { DeleteAllowListRequest, DeleteAllowListResponse } from "../models/models_0";
import { DeleteAllowList } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAllowListCommand}.
 */
export interface DeleteAllowListCommandInput extends DeleteAllowListRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAllowListCommand}.
 */
export interface DeleteAllowListCommandOutput extends DeleteAllowListResponse, __MetadataBearer {}

/**
 * <p>Deletes an allow list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Macie2Client, DeleteAllowListCommand } from "@aws-sdk/client-macie2"; // ES Modules import
 * // const { Macie2Client, DeleteAllowListCommand } = require("@aws-sdk/client-macie2"); // CommonJS import
 * // import type { Macie2ClientConfig } from "@aws-sdk/client-macie2";
 * const config = {}; // type is Macie2ClientConfig
 * const client = new Macie2Client(config);
 * const input = { // DeleteAllowListRequest
 *   id: "STRING_VALUE", // required
 *   ignoreJobChecks: "STRING_VALUE",
 * };
 * const command = new DeleteAllowListCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAllowListCommandInput - {@link DeleteAllowListCommandInput}
 * @returns {@link DeleteAllowListCommandOutput}
 * @see {@link DeleteAllowListCommandInput} for command's `input` shape.
 * @see {@link DeleteAllowListCommandOutput} for command's `response` shape.
 * @see {@link Macie2ClientResolvedConfig | config} for Macie2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Provides information about an error that occurred due to insufficient access to a specified resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Provides information about an error that occurred due to an unknown internal server error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Provides information about an error that occurred because a specified resource wasn't found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Provides information about an error that occurred because too many requests were sent during a certain amount of time.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Provides information about an error that occurred due to a syntax error in a request.</p>
 *
 * @throws {@link Macie2ServiceException}
 * <p>Base exception class for all service exceptions from Macie2 service.</p>
 *
 *
 * @public
 */
export class DeleteAllowListCommand extends $Command
  .classBuilder<
    DeleteAllowListCommandInput,
    DeleteAllowListCommandOutput,
    Macie2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Macie2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Macie2", "DeleteAllowList", {})
  .n("Macie2Client", "DeleteAllowListCommand")
  .sc(DeleteAllowList)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAllowListRequest;
      output: {};
    };
    sdk: {
      input: DeleteAllowListCommandInput;
      output: DeleteAllowListCommandOutput;
    };
  };
}
