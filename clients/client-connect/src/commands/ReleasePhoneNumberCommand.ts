// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ReleasePhoneNumberRequest } from "../models/models_2";
import { ReleasePhoneNumber } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ReleasePhoneNumberCommand}.
 */
export interface ReleasePhoneNumberCommandInput extends ReleasePhoneNumberRequest {}
/**
 * @public
 *
 * The output of {@link ReleasePhoneNumberCommand}.
 */
export interface ReleasePhoneNumberCommandOutput extends __MetadataBearer {}

/**
 * <p>Releases a phone number previously claimed to an Amazon Connect instance or traffic distribution group. You can call this API
 *    only in the Amazon Web Services Region where the number was claimed.</p>
 *          <important>
 *             <p>To release phone numbers from a traffic distribution group, use the <code>ReleasePhoneNumber</code> API, not the Amazon Connect admin website.</p>
 *             <p>After releasing a phone number, the phone number enters into a cooldown period for up to 180 days. It cannot be
 *     searched for or claimed again until the period has ended. If you accidentally release a phone number, contact
 *      Amazon Web Services Support.</p>
 *          </important>
 *          <p>If you plan to claim and release numbers frequently,
 *                 contact us for a service quota exception. Otherwise, it is possible you will be blocked from
 *                 claiming and releasing any more numbers until up to 180 days past the oldest number
 *                 released has expired.</p>
 *          <p>By default you can claim and release up to 200% of your maximum number of active
 *                 phone numbers. If you claim and release phone numbers using
 *                 the UI or API during a rolling 180 day cycle that exceeds 200% of your phone number
 *                 service level quota, you will be blocked from claiming any more numbers until 180
 *                 days past the oldest number released has expired. </p>
 *          <p>For example, if you already have 99 claimed numbers and a service level quota of 99 phone numbers, and in any 180
 *                 day period you release 99, claim 99, and then release 99, you will have exceeded the
 *                 200% limit. At that point you are blocked from claiming any more numbers until you
 *                 open an Amazon Web Services support ticket.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ReleasePhoneNumberCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ReleasePhoneNumberCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // ReleasePhoneNumberRequest
 *   PhoneNumberId: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new ReleasePhoneNumberCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ReleasePhoneNumberCommandInput - {@link ReleasePhoneNumberCommandInput}
 * @returns {@link ReleasePhoneNumberCommandOutput}
 * @see {@link ReleasePhoneNumberCommandInput} for command's `input` shape.
 * @see {@link ReleasePhoneNumberCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link IdempotencyException} (client fault)
 *  <p>An entity with the same name already exists.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>That resource is already in use (for example, you're trying to add a record with the same name as an existing
 *    record). If you are trying to delete a resource (for example, DeleteHoursOfOperation or DeletePredefinedAttribute),
 *    remove its reference from related resources and then try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class ReleasePhoneNumberCommand extends $Command
  .classBuilder<
    ReleasePhoneNumberCommandInput,
    ReleasePhoneNumberCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "ReleasePhoneNumber", {})
  .n("ConnectClient", "ReleasePhoneNumberCommand")
  .sc(ReleasePhoneNumber)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ReleasePhoneNumberRequest;
      output: {};
    };
    sdk: {
      input: ReleasePhoneNumberCommandInput;
      output: ReleasePhoneNumberCommandOutput;
    };
  };
}
