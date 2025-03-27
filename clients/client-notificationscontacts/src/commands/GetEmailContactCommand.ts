// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetEmailContactRequest,
  GetEmailContactResponse,
  GetEmailContactResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  NotificationsContactsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../NotificationsContactsClient";
import { de_GetEmailContactCommand, se_GetEmailContactCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetEmailContactCommand}.
 */
export interface GetEmailContactCommandInput extends GetEmailContactRequest {}
/**
 * @public
 *
 * The output of {@link GetEmailContactCommand}.
 */
export interface GetEmailContactCommandOutput extends GetEmailContactResponse, __MetadataBearer {}

/**
 * <p>Returns an email contact.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NotificationsContactsClient, GetEmailContactCommand } from "@aws-sdk/client-notificationscontacts"; // ES Modules import
 * // const { NotificationsContactsClient, GetEmailContactCommand } = require("@aws-sdk/client-notificationscontacts"); // CommonJS import
 * const client = new NotificationsContactsClient(config);
 * const input = { // GetEmailContactRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new GetEmailContactCommand(input);
 * const response = await client.send(command);
 * // { // GetEmailContactResponse
 * //   emailContact: { // EmailContact
 * //     arn: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     address: "STRING_VALUE", // required
 * //     status: "STRING_VALUE", // required
 * //     creationTime: new Date("TIMESTAMP"), // required
 * //     updateTime: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetEmailContactCommandInput - {@link GetEmailContactCommandInput}
 * @returns {@link GetEmailContactCommandOutput}
 * @see {@link GetEmailContactCommandInput} for command's `input` shape.
 * @see {@link GetEmailContactCommandOutput} for command's `response` shape.
 * @see {@link NotificationsContactsClientResolvedConfig | config} for NotificationsContactsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
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
 *
 * @public
 */
export class GetEmailContactCommand extends $Command
  .classBuilder<
    GetEmailContactCommandInput,
    GetEmailContactCommandOutput,
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
  .s("NotificationsContacts", "GetEmailContact", {})
  .n("NotificationsContactsClient", "GetEmailContactCommand")
  .f(void 0, GetEmailContactResponseFilterSensitiveLog)
  .ser(se_GetEmailContactCommand)
  .de(de_GetEmailContactCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEmailContactRequest;
      output: GetEmailContactResponse;
    };
    sdk: {
      input: GetEmailContactCommandInput;
      output: GetEmailContactCommandOutput;
    };
  };
}
