// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListTagsForResourceRequest, ListTagsForResourceResponse } from "../models/models_0";
import {
  NotificationsContactsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../NotificationsContactsClient";
import { ListTagsForResource } from "../schemas/schemas_1_Email";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTagsForResourceCommand}.
 */
export interface ListTagsForResourceCommandInput extends ListTagsForResourceRequest {}
/**
 * @public
 *
 * The output of {@link ListTagsForResourceCommand}.
 */
export interface ListTagsForResourceCommandOutput extends ListTagsForResourceResponse, __MetadataBearer {}

/**
 * <p>Lists all of the tags associated with the Amazon Resource Name (ARN) that you specify. The resource can be a user, server, or role.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NotificationsContactsClient, ListTagsForResourceCommand } from "@aws-sdk/client-notificationscontacts"; // ES Modules import
 * // const { NotificationsContactsClient, ListTagsForResourceCommand } = require("@aws-sdk/client-notificationscontacts"); // CommonJS import
 * // import type { NotificationsContactsClientConfig } from "@aws-sdk/client-notificationscontacts";
 * const config = {}; // type is NotificationsContactsClientConfig
 * const client = new NotificationsContactsClient(config);
 * const input = { // ListTagsForResourceRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new ListTagsForResourceCommand(input);
 * const response = await client.send(command);
 * // { // ListTagsForResourceResponse
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ListTagsForResourceCommandInput - {@link ListTagsForResourceCommandInput}
 * @returns {@link ListTagsForResourceCommandOutput}
 * @see {@link ListTagsForResourceCommandInput} for command's `input` shape.
 * @see {@link ListTagsForResourceCommandOutput} for command's `response` shape.
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
export class ListTagsForResourceCommand extends $Command
  .classBuilder<
    ListTagsForResourceCommandInput,
    ListTagsForResourceCommandOutput,
    NotificationsContactsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NotificationsContactsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NotificationsContacts", "ListTagsForResource", {})
  .n("NotificationsContactsClient", "ListTagsForResourceCommand")
  .sc(ListTagsForResource)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTagsForResourceRequest;
      output: ListTagsForResourceResponse;
    };
    sdk: {
      input: ListTagsForResourceCommandInput;
      output: ListTagsForResourceCommandOutput;
    };
  };
}
