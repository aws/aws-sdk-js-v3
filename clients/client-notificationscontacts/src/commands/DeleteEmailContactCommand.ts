// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteEmailContactRequest, DeleteEmailContactResponse } from "../models/models_0";
import {
  NotificationsContactsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../NotificationsContactsClient";
import { de_DeleteEmailContactCommand, se_DeleteEmailContactCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteEmailContactCommand}.
 */
export interface DeleteEmailContactCommandInput extends DeleteEmailContactRequest {}
/**
 * @public
 *
 * The output of {@link DeleteEmailContactCommand}.
 */
export interface DeleteEmailContactCommandOutput extends DeleteEmailContactResponse, __MetadataBearer {}

/**
 * <p>Deletes an email contact.</p>
 *          <note>
 *             <p>Deleting an email contact removes it from all associated notification configurations.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NotificationsContactsClient, DeleteEmailContactCommand } from "@aws-sdk/client-notificationscontacts"; // ES Modules import
 * // const { NotificationsContactsClient, DeleteEmailContactCommand } = require("@aws-sdk/client-notificationscontacts"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new NotificationsContactsClient(config);
 * const input = { // DeleteEmailContactRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new DeleteEmailContactCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteEmailContactCommandInput - {@link DeleteEmailContactCommandInput}
 * @returns {@link DeleteEmailContactCommandOutput}
 * @see {@link DeleteEmailContactCommandInput} for command's `input` shape.
 * @see {@link DeleteEmailContactCommandOutput} for command's `response` shape.
 * @see {@link NotificationsContactsClientResolvedConfig | config} for NotificationsContactsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Your request references a resource which does not exist. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link NotificationsContactsServiceException}
 * <p>Base exception class for all service exceptions from NotificationsContacts service.</p>
 *
 * @public
 */
export class DeleteEmailContactCommand extends $Command
  .classBuilder<
    DeleteEmailContactCommandInput,
    DeleteEmailContactCommandOutput,
    NotificationsContactsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NotificationsContactsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("NotificationsContacts", "DeleteEmailContact", {})
  .n("NotificationsContactsClient", "DeleteEmailContactCommand")
  .f(void 0, void 0)
  .ser(se_DeleteEmailContactCommand)
  .de(de_DeleteEmailContactCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEmailContactRequest;
      output: {};
    };
    sdk: {
      input: DeleteEmailContactCommandInput;
      output: DeleteEmailContactCommandOutput;
    };
  };
}
