// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CustomerProfilesClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CustomerProfilesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetProfileHistoryRecordRequest, GetProfileHistoryRecordResponse } from "../models/models_0";
import { GetProfileHistoryRecord } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetProfileHistoryRecordCommand}.
 */
export interface GetProfileHistoryRecordCommandInput extends GetProfileHistoryRecordRequest {}
/**
 * @public
 *
 * The output of {@link GetProfileHistoryRecordCommand}.
 */
export interface GetProfileHistoryRecordCommandOutput extends GetProfileHistoryRecordResponse, __MetadataBearer {}

/**
 * <p>Returns a history record for a specific profile, for a specific domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, GetProfileHistoryRecordCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, GetProfileHistoryRecordCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // GetProfileHistoryRecordRequest
 *   DomainName: "STRING_VALUE", // required
 *   ProfileId: "STRING_VALUE", // required
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new GetProfileHistoryRecordCommand(input);
 * const response = await client.send(command);
 * // { // GetProfileHistoryRecordResponse
 * //   Id: "STRING_VALUE", // required
 * //   ObjectTypeName: "STRING_VALUE", // required
 * //   CreatedAt: new Date("TIMESTAMP"), // required
 * //   LastUpdatedAt: new Date("TIMESTAMP"),
 * //   ActionType: "ADDED_PROFILE_KEY" || "DELETED_PROFILE_KEY" || "CREATED" || "UPDATED" || "INGESTED" || "DELETED_BY_CUSTOMER" || "EXPIRED" || "MERGED" || "DELETED_BY_MERGE", // required
 * //   ProfileObjectUniqueKey: "STRING_VALUE",
 * //   Content: "STRING_VALUE",
 * //   PerformedBy: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetProfileHistoryRecordCommandInput - {@link GetProfileHistoryRecordCommandInput}
 * @returns {@link GetProfileHistoryRecordCommandOutput}
 * @see {@link GetProfileHistoryRecordCommandInput} for command's `input` shape.
 * @see {@link GetProfileHistoryRecordCommandOutput} for command's `response` shape.
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
export class GetProfileHistoryRecordCommand extends $Command
  .classBuilder<
    GetProfileHistoryRecordCommandInput,
    GetProfileHistoryRecordCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CustomerProfiles_20200815", "GetProfileHistoryRecord", {})
  .n("CustomerProfilesClient", "GetProfileHistoryRecordCommand")
  .sc(GetProfileHistoryRecord)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetProfileHistoryRecordRequest;
      output: GetProfileHistoryRecordResponse;
    };
    sdk: {
      input: GetProfileHistoryRecordCommandInput;
      output: GetProfileHistoryRecordCommandOutput;
    };
  };
}
