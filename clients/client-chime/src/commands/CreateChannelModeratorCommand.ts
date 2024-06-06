// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateChannelModeratorRequest,
  CreateChannelModeratorResponse,
  CreateChannelModeratorResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateChannelModeratorCommand, se_CreateChannelModeratorCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateChannelModeratorCommand}.
 */
export interface CreateChannelModeratorCommandInput extends CreateChannelModeratorRequest {}
/**
 * @public
 *
 * The output of {@link CreateChannelModeratorCommand}.
 */
export interface CreateChannelModeratorCommandOutput extends CreateChannelModeratorResponse, __MetadataBearer {}

/**
 * <p>Creates a new <code>ChannelModerator</code>. A channel moderator can:</p>
 *          <ul>
 *             <li>
 *                <p>Add and remove other members of the channel.</p>
 *             </li>
 *             <li>
 *                <p>Add and remove other moderators of the channel.</p>
 *             </li>
 *             <li>
 *                <p>Add and remove user bans for the channel.</p>
 *             </li>
 *             <li>
 *                <p>Redact messages in the channel.</p>
 *             </li>
 *             <li>
 *                <p>List messages in the channel.</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
 *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
 *             the header.</p>
 *          </note>
 *          <important>
 *             <p>
 *                <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_CreateChannelModerator.html">CreateChannelModerator</a>, in the Amazon Chime SDK.</p>
 *             <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to
 *                <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the
 *                <i>Amazon Chime SDK Developer Guide</i>.</p>
 *          </important>
 *
 * @deprecated Replaced by CreateChannelModerator in the Amazon Chime SDK Messaging Namespace
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, CreateChannelModeratorCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, CreateChannelModeratorCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const input = { // CreateChannelModeratorRequest
 *   ChannelArn: "STRING_VALUE", // required
 *   ChannelModeratorArn: "STRING_VALUE", // required
 *   ChimeBearer: "STRING_VALUE",
 * };
 * const command = new CreateChannelModeratorCommand(input);
 * const response = await client.send(command);
 * // { // CreateChannelModeratorResponse
 * //   ChannelArn: "STRING_VALUE",
 * //   ChannelModerator: { // Identity
 * //     Arn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateChannelModeratorCommandInput - {@link CreateChannelModeratorCommandInput}
 * @returns {@link CreateChannelModeratorCommandOutput}
 * @see {@link CreateChannelModeratorCommandInput} for command's `input` shape.
 * @see {@link CreateChannelModeratorCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the
 *          resource.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>The request exceeds the resource limit.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 * @throws {@link ChimeServiceException}
 * <p>Base exception class for all service exceptions from Chime service.</p>
 *
 * @public
 */
export class CreateChannelModeratorCommand extends $Command
  .classBuilder<
    CreateChannelModeratorCommandInput,
    CreateChannelModeratorCommandOutput,
    ChimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ChimeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("UCBuzzConsoleService", "CreateChannelModerator", {})
  .n("ChimeClient", "CreateChannelModeratorCommand")
  .f(void 0, CreateChannelModeratorResponseFilterSensitiveLog)
  .ser(se_CreateChannelModeratorCommand)
  .de(de_CreateChannelModeratorCommand)
  .build() {}
