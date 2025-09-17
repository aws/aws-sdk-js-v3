// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ImportPhoneNumberRequest, ImportPhoneNumberResponse } from "../models/models_1";
import { de_ImportPhoneNumberCommand, se_ImportPhoneNumberCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ImportPhoneNumberCommand}.
 */
export interface ImportPhoneNumberCommandInput extends ImportPhoneNumberRequest {}
/**
 * @public
 *
 * The output of {@link ImportPhoneNumberCommand}.
 */
export interface ImportPhoneNumberCommandOutput extends ImportPhoneNumberResponse, __MetadataBearer {}

/**
 * <p>Imports a claimed phone number from an external service, such as Amazon Web Services End User
 *    Messaging, into an Amazon Connect instance. You can call this API only in the same Amazon Web Services Region where the Amazon Connect instance was created.</p>
 *          <important>
 *             <p>Call the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribePhoneNumber.html">DescribePhoneNumber</a> API
 *     to verify the status of a previous <code>ImportPhoneNumber</code> operation. </p>
 *          </important>
 *          <p>If you plan to claim or import numbers and then release numbers frequently, contact us for a
 *    service quota exception. Otherwise, it is possible you will be blocked from claiming and
 *    releasing any more numbers until up to 180 days past the oldest number released has expired. </p>
 *          <p> By default you can claim or import and then release up to 200% of your maximum number of
 *    active phone numbers. If you claim or import and then release phone numbers using the UI or API
 *    during a rolling 180 day cycle that exceeds 200% of your phone number service level quota, you
 *    will be blocked from claiming or importing any more numbers until 180 days past the oldest number
 *    released has expired. </p>
 *          <p>For example, if you already have 99 claimed or imported numbers and a service level quota of
 *    99 phone numbers, and in any 180 day period you release 99, claim 99, and then release 99, you
 *    will have exceeded the 200% limit. At that point you are blocked from claiming any more numbers
 *    until you open an Amazon Web Services Support ticket. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ImportPhoneNumberCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ImportPhoneNumberCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // ImportPhoneNumberRequest
 *   InstanceId: "STRING_VALUE", // required
 *   SourcePhoneNumberArn: "STRING_VALUE", // required
 *   PhoneNumberDescription: "STRING_VALUE",
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new ImportPhoneNumberCommand(input);
 * const response = await client.send(command);
 * // { // ImportPhoneNumberResponse
 * //   PhoneNumberId: "STRING_VALUE",
 * //   PhoneNumberArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ImportPhoneNumberCommandInput - {@link ImportPhoneNumberCommandInput}
 * @returns {@link ImportPhoneNumberCommandOutput}
 * @see {@link ImportPhoneNumberCommandInput} for command's `input` shape.
 * @see {@link ImportPhoneNumberCommandOutput} for command's `response` shape.
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
export class ImportPhoneNumberCommand extends $Command
  .classBuilder<
    ImportPhoneNumberCommandInput,
    ImportPhoneNumberCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "ImportPhoneNumber", {})
  .n("ConnectClient", "ImportPhoneNumberCommand")
  .f(void 0, void 0)
  .ser(se_ImportPhoneNumberCommand)
  .de(de_ImportPhoneNumberCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ImportPhoneNumberRequest;
      output: ImportPhoneNumberResponse;
    };
    sdk: {
      input: ImportPhoneNumberCommandInput;
      output: ImportPhoneNumberCommandOutput;
    };
  };
}
