// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { BatchLookupUserUnameRequest, BatchLookupUserUnameResponse } from "../models/models_0";
import { BatchLookupUserUname$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, WickrClientResolvedConfig } from "../WickrClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchLookupUserUnameCommand}.
 */
export interface BatchLookupUserUnameCommandInput extends BatchLookupUserUnameRequest {}
/**
 * @public
 *
 * The output of {@link BatchLookupUserUnameCommand}.
 */
export interface BatchLookupUserUnameCommandOutput extends BatchLookupUserUnameResponse, __MetadataBearer {}

/**
 * <p>Looks up multiple user usernames from their unique username hashes (unames). This operation allows you to retrieve the email addresses associated with a list of username hashes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WickrClient, BatchLookupUserUnameCommand } from "@aws-sdk/client-wickr"; // ES Modules import
 * // const { WickrClient, BatchLookupUserUnameCommand } = require("@aws-sdk/client-wickr"); // CommonJS import
 * // import type { WickrClientConfig } from "@aws-sdk/client-wickr";
 * const config = {}; // type is WickrClientConfig
 * const client = new WickrClient(config);
 * const input = { // BatchLookupUserUnameRequest
 *   networkId: "STRING_VALUE", // required
 *   unames: [ // Unames // required
 *     "STRING_VALUE",
 *   ],
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new BatchLookupUserUnameCommand(input);
 * const response = await client.send(command);
 * // { // BatchLookupUserUnameResponse
 * //   message: "STRING_VALUE",
 * //   successful: [ // BatchUnameSuccessResponseItems
 * //     { // BatchUnameSuccessResponseItem
 * //       uname: "STRING_VALUE", // required
 * //       username: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   failed: [ // BatchUnameErrorResponseItems
 * //     { // BatchUnameErrorResponseItem
 * //       field: "STRING_VALUE",
 * //       reason: "STRING_VALUE",
 * //       uname: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchLookupUserUnameCommandInput - {@link BatchLookupUserUnameCommandInput}
 * @returns {@link BatchLookupUserUnameCommandOutput}
 * @see {@link BatchLookupUserUnameCommandInput} for command's `input` shape.
 * @see {@link BatchLookupUserUnameCommandOutput} for command's `response` shape.
 * @see {@link WickrClientResolvedConfig | config} for WickrClient's `config` shape.
 *
 * @throws {@link BadRequestError} (client fault)
 *  <p>The request was invalid or malformed. This error occurs when the request parameters do not meet the API requirements, such as invalid field values, missing required parameters, or improperly formatted data.</p>
 *
 * @throws {@link ForbiddenError} (client fault)
 *  <p>Access to the requested resource is forbidden. This error occurs when the authenticated user does not have the necessary permissions to perform the requested operation, even though they are authenticated.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An unexpected error occurred on the server while processing the request. This indicates a problem with the Wickr service itself rather than with the request. If this error persists, contact Amazon Web Services Support.</p>
 *
 * @throws {@link RateLimitError} (client fault)
 *  <p>The request was throttled because too many requests were sent in a short period of time. Wait a moment and retry the request. Consider implementing exponential backoff in your application.</p>
 *
 * @throws {@link ResourceNotFoundError} (client fault)
 *  <p>The requested resource could not be found. This error occurs when you try to access or modify a network, user, bot, security group, or other resource that doesn't exist or has been deleted.</p>
 *
 * @throws {@link UnauthorizedError} (client fault)
 *  <p>The request was not authenticated or the authentication credentials were invalid. This error occurs when the request lacks valid authentication credentials or the credentials have expired.</p>
 *
 * @throws {@link ValidationError} (client fault)
 *  <p>One or more fields in the request failed validation. This error provides detailed information about which fields were invalid and why, allowing you to correct the request and retry.</p>
 *
 * @throws {@link WickrServiceException}
 * <p>Base exception class for all service exceptions from Wickr service.</p>
 *
 *
 * @example Lookup multiple user unames
 * ```javascript
 * //
 * const input = {
 *   clientToken: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
 *   networkId: "12345678",
 *   unames: [
 *     "a1b2c3d4e5f6",
 *     "g7h8i9j0k1l2"
 *   ]
 * };
 * const command = new BatchLookupUserUnameCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   failed:   [],
 *   message: "success",
 *   successful: [
 *     {
 *       uname: "a1b2c3d4e5f6",
 *       username: "john.doe@example.com"
 *     },
 *     {
 *       uname: "g7h8i9j0k1l2",
 *       username: "john.doe2@example.com"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @example Partial failure - uname not found
 * ```javascript
 * //
 * const input = {
 *   networkId: "12345678",
 *   unames: [
 *     "a1b2c3d4e5f6",
 *     "invaliduname"
 *   ]
 * };
 * const command = new BatchLookupUserUnameCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   failed: [
 *     {
 *       field: "uname",
 *       reason: "Uname not found",
 *       uname: "invaliduname"
 *     }
 *   ],
 *   message: "partial success",
 *   successful: [
 *     {
 *       uname: "a1b2c3d4e5f6",
 *       username: "john.doe@example.com"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class BatchLookupUserUnameCommand extends $Command
  .classBuilder<
    BatchLookupUserUnameCommandInput,
    BatchLookupUserUnameCommandOutput,
    WickrClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WickrClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WickrAdminApi", "BatchLookupUserUname", {})
  .n("WickrClient", "BatchLookupUserUnameCommand")
  .sc(BatchLookupUserUname$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchLookupUserUnameRequest;
      output: BatchLookupUserUnameResponse;
    };
    sdk: {
      input: BatchLookupUserUnameCommandInput;
      output: BatchLookupUserUnameCommandOutput;
    };
  };
}
