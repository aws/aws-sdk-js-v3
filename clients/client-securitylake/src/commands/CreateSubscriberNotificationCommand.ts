// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateSubscriberNotificationRequest, CreateSubscriberNotificationResponse } from "../models/models_0";
import { CreateSubscriberNotification$ } from "../schemas/schemas_0";
import type { SecurityLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityLakeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSubscriberNotificationCommand}.
 */
export interface CreateSubscriberNotificationCommandInput extends CreateSubscriberNotificationRequest {}
/**
 * @public
 *
 * The output of {@link CreateSubscriberNotificationCommand}.
 */
export interface CreateSubscriberNotificationCommandOutput
  extends CreateSubscriberNotificationResponse,
    __MetadataBearer {}

/**
 * <p>Notifies the subscriber when new data is written to the data lake for the sources that
 *          the subscriber consumes in Security Lake. You can create only one subscriber notification per
 *          subscriber.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityLakeClient, CreateSubscriberNotificationCommand } from "@aws-sdk/client-securitylake"; // ES Modules import
 * // const { SecurityLakeClient, CreateSubscriberNotificationCommand } = require("@aws-sdk/client-securitylake"); // CommonJS import
 * // import type { SecurityLakeClientConfig } from "@aws-sdk/client-securitylake";
 * const config = {}; // type is SecurityLakeClientConfig
 * const client = new SecurityLakeClient(config);
 * const input = { // CreateSubscriberNotificationRequest
 *   subscriberId: "STRING_VALUE", // required
 *   configuration: { // NotificationConfiguration Union: only one key present
 *     sqsNotificationConfiguration: {},
 *     httpsNotificationConfiguration: { // HttpsNotificationConfiguration
 *       endpoint: "STRING_VALUE", // required
 *       authorizationApiKeyName: "STRING_VALUE",
 *       authorizationApiKeyValue: "STRING_VALUE",
 *       httpMethod: "POST" || "PUT",
 *       targetRoleArn: "STRING_VALUE", // required
 *     },
 *   },
 * };
 * const command = new CreateSubscriberNotificationCommand(input);
 * const response = await client.send(command);
 * // { // CreateSubscriberNotificationResponse
 * //   subscriberEndpoint: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateSubscriberNotificationCommandInput - {@link CreateSubscriberNotificationCommandInput}
 * @returns {@link CreateSubscriberNotificationCommandOutput}
 * @see {@link CreateSubscriberNotificationCommandInput} for command's `input` shape.
 * @see {@link CreateSubscriberNotificationCommandOutput} for command's `response` shape.
 * @see {@link SecurityLakeClientResolvedConfig | config} for SecurityLakeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action. Access denied errors appear when Amazon Security Lake explicitly or implicitly denies an authorization
 *          request. An explicit denial occurs when a policy contains a Deny statement for the specific
 *          Amazon Web Services action. An implicit denial occurs when there is no applicable Deny statement and also
 *          no applicable Allow statement.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is malformed or contains an error such as an invalid parameter value or a missing required parameter.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Occurs when a conflict with a previous successful write is detected. This generally
 *          occurs when the previous write did not have time to propagate to the host serving the
 *          current request. A retry (with appropriate backoff logic) is the recommended response to
 *          this exception.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal service exceptions are sometimes caused by transient issues. Before you start
 *          troubleshooting, perform the operation again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link SecurityLakeServiceException}
 * <p>Base exception class for all service exceptions from SecurityLake service.</p>
 *
 *
 * @public
 */
export class CreateSubscriberNotificationCommand extends $Command
  .classBuilder<
    CreateSubscriberNotificationCommandInput,
    CreateSubscriberNotificationCommandOutput,
    SecurityLakeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityLakeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SecurityLake", "CreateSubscriberNotification", {})
  .n("SecurityLakeClient", "CreateSubscriberNotificationCommand")
  .sc(CreateSubscriberNotification$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSubscriberNotificationRequest;
      output: CreateSubscriberNotificationResponse;
    };
    sdk: {
      input: CreateSubscriberNotificationCommandInput;
      output: CreateSubscriberNotificationCommandOutput;
    };
  };
}
