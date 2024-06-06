// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { SendInvitesInput, SendInvitesInputFilterSensitiveLog } from "../models/models_0";
import { de_SendInvitesCommand, se_SendInvitesCommand } from "../protocols/Aws_restJson1";
import { RepostspaceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RepostspaceClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SendInvitesCommand}.
 */
export interface SendInvitesCommandInput extends SendInvitesInput {}
/**
 * @public
 *
 * The output of {@link SendInvitesCommand}.
 */
export interface SendInvitesCommandOutput extends __MetadataBearer {}

/**
 * <p>Sends an invitation email to selected users and groups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RepostspaceClient, SendInvitesCommand } from "@aws-sdk/client-repostspace"; // ES Modules import
 * // const { RepostspaceClient, SendInvitesCommand } = require("@aws-sdk/client-repostspace"); // CommonJS import
 * const client = new RepostspaceClient(config);
 * const input = { // SendInvitesInput
 *   spaceId: "STRING_VALUE", // required
 *   accessorIds: [ // AccessorIdList // required
 *     "STRING_VALUE",
 *   ],
 *   title: "STRING_VALUE", // required
 *   body: "STRING_VALUE", // required
 * };
 * const command = new SendInvitesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SendInvitesCommandInput - {@link SendInvitesCommandInput}
 * @returns {@link SendInvitesCommandOutput}
 * @see {@link SendInvitesCommandInput} for command's `input` shape.
 * @see {@link SendInvitesCommandOutput} for command's `response` shape.
 * @see {@link RepostspaceClientResolvedConfig | config} for RepostspaceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link RepostspaceServiceException}
 * <p>Base exception class for all service exceptions from Repostspace service.</p>
 *
 * @public
 */
export class SendInvitesCommand extends $Command
  .classBuilder<
    SendInvitesCommandInput,
    SendInvitesCommandOutput,
    RepostspaceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: RepostspaceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RepostSpace", "SendInvites", {})
  .n("RepostspaceClient", "SendInvitesCommand")
  .f(SendInvitesInputFilterSensitiveLog, void 0)
  .ser(se_SendInvitesCommand)
  .de(de_SendInvitesCommand)
  .build() {}
