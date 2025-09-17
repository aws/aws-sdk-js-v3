// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  BatchGetCalculatedAttributeForProfileRequest,
  BatchGetCalculatedAttributeForProfileRequestFilterSensitiveLog,
  BatchGetCalculatedAttributeForProfileResponse,
  BatchGetCalculatedAttributeForProfileResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_BatchGetCalculatedAttributeForProfileCommand,
  se_BatchGetCalculatedAttributeForProfileCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchGetCalculatedAttributeForProfileCommand}.
 */
export interface BatchGetCalculatedAttributeForProfileCommandInput
  extends BatchGetCalculatedAttributeForProfileRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetCalculatedAttributeForProfileCommand}.
 */
export interface BatchGetCalculatedAttributeForProfileCommandOutput
  extends BatchGetCalculatedAttributeForProfileResponse,
    __MetadataBearer {}

/**
 * <p>Fetch the possible attribute values given the attribute name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, BatchGetCalculatedAttributeForProfileCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, BatchGetCalculatedAttributeForProfileCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // BatchGetCalculatedAttributeForProfileRequest
 *   CalculatedAttributeName: "STRING_VALUE", // required
 *   DomainName: "STRING_VALUE", // required
 *   ProfileIds: [ // BatchGetCalculatedAttributeForProfileIdList // required
 *     "STRING_VALUE",
 *   ],
 *   ConditionOverrides: { // ConditionOverrides
 *     Range: { // RangeOverride
 *       Start: Number("int"), // required
 *       End: Number("int"),
 *       Unit: "DAYS", // required
 *     },
 *   },
 * };
 * const command = new BatchGetCalculatedAttributeForProfileCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetCalculatedAttributeForProfileResponse
 * //   Errors: [ // BatchGetCalculatedAttributeForProfileErrorList
 * //     { // BatchGetCalculatedAttributeForProfileError
 * //       Code: "STRING_VALUE", // required
 * //       Message: "STRING_VALUE", // required
 * //       ProfileId: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   CalculatedAttributeValues: [ // CalculatedAttributeValueList
 * //     { // CalculatedAttributeValue
 * //       CalculatedAttributeName: "STRING_VALUE",
 * //       DisplayName: "STRING_VALUE",
 * //       IsDataPartial: "STRING_VALUE",
 * //       ProfileId: "STRING_VALUE",
 * //       Value: "STRING_VALUE",
 * //       LastObjectTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   ConditionOverrides: { // ConditionOverrides
 * //     Range: { // RangeOverride
 * //       Start: Number("int"), // required
 * //       End: Number("int"),
 * //       Unit: "DAYS", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param BatchGetCalculatedAttributeForProfileCommandInput - {@link BatchGetCalculatedAttributeForProfileCommandInput}
 * @returns {@link BatchGetCalculatedAttributeForProfileCommandOutput}
 * @see {@link BatchGetCalculatedAttributeForProfileCommandInput} for command's `input` shape.
 * @see {@link BatchGetCalculatedAttributeForProfileCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for CustomerProfilesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource does not exist, or access was denied.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>You exceeded the maximum number of requests.</p>
 *
 * @throws {@link CustomerProfilesServiceException}
 * <p>Base exception class for all service exceptions from CustomerProfiles service.</p>
 *
 *
 * @public
 */
export class BatchGetCalculatedAttributeForProfileCommand extends $Command
  .classBuilder<
    BatchGetCalculatedAttributeForProfileCommandInput,
    BatchGetCalculatedAttributeForProfileCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CustomerProfiles_20200815", "BatchGetCalculatedAttributeForProfile", {})
  .n("CustomerProfilesClient", "BatchGetCalculatedAttributeForProfileCommand")
  .f(
    BatchGetCalculatedAttributeForProfileRequestFilterSensitiveLog,
    BatchGetCalculatedAttributeForProfileResponseFilterSensitiveLog
  )
  .ser(se_BatchGetCalculatedAttributeForProfileCommand)
  .de(de_BatchGetCalculatedAttributeForProfileCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchGetCalculatedAttributeForProfileRequest;
      output: BatchGetCalculatedAttributeForProfileResponse;
    };
    sdk: {
      input: BatchGetCalculatedAttributeForProfileCommandInput;
      output: BatchGetCalculatedAttributeForProfileCommandOutput;
    };
  };
}
