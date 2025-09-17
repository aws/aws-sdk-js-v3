// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  BatchUpdatePhoneNumberRequest,
  BatchUpdatePhoneNumberRequestFilterSensitiveLog,
  BatchUpdatePhoneNumberResponse,
} from "../models/models_0";
import { de_BatchUpdatePhoneNumberCommand, se_BatchUpdatePhoneNumberCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchUpdatePhoneNumberCommand}.
 */
export interface BatchUpdatePhoneNumberCommandInput extends BatchUpdatePhoneNumberRequest {}
/**
 * @public
 *
 * The output of {@link BatchUpdatePhoneNumberCommand}.
 */
export interface BatchUpdatePhoneNumberCommandOutput extends BatchUpdatePhoneNumberResponse, __MetadataBearer {}

/**
 * <p>Updates phone number product types or calling names. You can update one attribute at a time for each <code>UpdatePhoneNumberRequestItem</code>. For example, you can update the product type or the calling name.</p>
 *          <p>For toll-free numbers, you cannot use the Amazon Chime Business Calling product type. For numbers outside the U.S., you must use the Amazon Chime SIP Media Application Dial-In product type.</p>
 *          <p>Updates to outbound calling names can take up to 72 hours to complete. Pending updates to outbound calling names must be complete before you can request another update.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, BatchUpdatePhoneNumberCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, BatchUpdatePhoneNumberCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * // import type { ChimeClientConfig } from "@aws-sdk/client-chime";
 * const config = {}; // type is ChimeClientConfig
 * const client = new ChimeClient(config);
 * const input = { // BatchUpdatePhoneNumberRequest
 *   UpdatePhoneNumberRequestItems: [ // UpdatePhoneNumberRequestItemList // required
 *     { // UpdatePhoneNumberRequestItem
 *       PhoneNumberId: "STRING_VALUE", // required
 *       ProductType: "BusinessCalling" || "VoiceConnector" || "SipMediaApplicationDialIn",
 *       CallingName: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new BatchUpdatePhoneNumberCommand(input);
 * const response = await client.send(command);
 * // { // BatchUpdatePhoneNumberResponse
 * //   PhoneNumberErrors: [ // PhoneNumberErrorList
 * //     { // PhoneNumberError
 * //       PhoneNumberId: "STRING_VALUE",
 * //       ErrorCode: "BadRequest" || "Conflict" || "Forbidden" || "NotFound" || "PreconditionFailed" || "ResourceLimitExceeded" || "ServiceFailure" || "AccessDenied" || "ServiceUnavailable" || "Throttled" || "Throttling" || "Unauthorized" || "Unprocessable" || "VoiceConnectorGroupAssociationsExist" || "PhoneNumberAssociationsExist",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchUpdatePhoneNumberCommandInput - {@link BatchUpdatePhoneNumberCommandInput}
 * @returns {@link BatchUpdatePhoneNumberCommandOutput}
 * @see {@link BatchUpdatePhoneNumberCommandInput} for command's `input` shape.
 * @see {@link BatchUpdatePhoneNumberCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system.</p>
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
 *
 * @public
 */
export class BatchUpdatePhoneNumberCommand extends $Command
  .classBuilder<
    BatchUpdatePhoneNumberCommandInput,
    BatchUpdatePhoneNumberCommandOutput,
    ChimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("UCBuzzConsoleService", "BatchUpdatePhoneNumber", {})
  .n("ChimeClient", "BatchUpdatePhoneNumberCommand")
  .f(BatchUpdatePhoneNumberRequestFilterSensitiveLog, void 0)
  .ser(se_BatchUpdatePhoneNumberCommand)
  .de(de_BatchUpdatePhoneNumberCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchUpdatePhoneNumberRequest;
      output: BatchUpdatePhoneNumberResponse;
    };
    sdk: {
      input: BatchUpdatePhoneNumberCommandInput;
      output: BatchUpdatePhoneNumberCommandOutput;
    };
  };
}
