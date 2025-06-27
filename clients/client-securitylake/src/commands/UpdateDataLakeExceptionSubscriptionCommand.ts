// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateDataLakeExceptionSubscriptionRequest,
  UpdateDataLakeExceptionSubscriptionResponse,
} from "../models/models_0";
import {
  de_UpdateDataLakeExceptionSubscriptionCommand,
  se_UpdateDataLakeExceptionSubscriptionCommand,
} from "../protocols/Aws_restJson1";
import { SecurityLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityLakeClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDataLakeExceptionSubscriptionCommand}.
 */
export interface UpdateDataLakeExceptionSubscriptionCommandInput extends UpdateDataLakeExceptionSubscriptionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDataLakeExceptionSubscriptionCommand}.
 */
export interface UpdateDataLakeExceptionSubscriptionCommandOutput
  extends UpdateDataLakeExceptionSubscriptionResponse,
    __MetadataBearer {}

/**
 * <p>Updates the specified notification subscription in Amazon Security Lake for the organization
 *          you specify.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityLakeClient, UpdateDataLakeExceptionSubscriptionCommand } from "@aws-sdk/client-securitylake"; // ES Modules import
 * // const { SecurityLakeClient, UpdateDataLakeExceptionSubscriptionCommand } = require("@aws-sdk/client-securitylake"); // CommonJS import
 * const client = new SecurityLakeClient(config);
 * const input = { // UpdateDataLakeExceptionSubscriptionRequest
 *   subscriptionProtocol: "STRING_VALUE", // required
 *   notificationEndpoint: "STRING_VALUE", // required
 *   exceptionTimeToLive: Number("long"),
 * };
 * const command = new UpdateDataLakeExceptionSubscriptionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateDataLakeExceptionSubscriptionCommandInput - {@link UpdateDataLakeExceptionSubscriptionCommandInput}
 * @returns {@link UpdateDataLakeExceptionSubscriptionCommandOutput}
 * @see {@link UpdateDataLakeExceptionSubscriptionCommandInput} for command's `input` shape.
 * @see {@link UpdateDataLakeExceptionSubscriptionCommandOutput} for command's `response` shape.
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
export class UpdateDataLakeExceptionSubscriptionCommand extends $Command
  .classBuilder<
    UpdateDataLakeExceptionSubscriptionCommandInput,
    UpdateDataLakeExceptionSubscriptionCommandOutput,
    SecurityLakeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SecurityLakeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SecurityLake", "UpdateDataLakeExceptionSubscription", {})
  .n("SecurityLakeClient", "UpdateDataLakeExceptionSubscriptionCommand")
  .f(void 0, void 0)
  .ser(se_UpdateDataLakeExceptionSubscriptionCommand)
  .de(de_UpdateDataLakeExceptionSubscriptionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDataLakeExceptionSubscriptionRequest;
      output: {};
    };
    sdk: {
      input: UpdateDataLakeExceptionSubscriptionCommandInput;
      output: UpdateDataLakeExceptionSubscriptionCommandOutput;
    };
  };
}
