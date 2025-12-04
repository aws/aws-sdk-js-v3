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
import type { GetUploadJobRequest, GetUploadJobResponse } from "../models/models_0";
import { GetUploadJob } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetUploadJobCommand}.
 */
export interface GetUploadJobCommandInput extends GetUploadJobRequest {}
/**
 * @public
 *
 * The output of {@link GetUploadJobCommand}.
 */
export interface GetUploadJobCommandOutput extends GetUploadJobResponse, __MetadataBearer {}

/**
 * <p>This API retrieves the details of a specific upload job. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, GetUploadJobCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, GetUploadJobCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // GetUploadJobRequest
 *   DomainName: "STRING_VALUE", // required
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new GetUploadJobCommand(input);
 * const response = await client.send(command);
 * // { // GetUploadJobResponse
 * //   JobId: "STRING_VALUE",
 * //   DisplayName: "STRING_VALUE",
 * //   Status: "CREATED" || "IN_PROGRESS" || "PARTIALLY_SUCCEEDED" || "SUCCEEDED" || "FAILED" || "STOPPED",
 * //   StatusReason: "VALIDATION_FAILURE" || "INTERNAL_FAILURE",
 * //   CreatedAt: new Date("TIMESTAMP"),
 * //   CompletedAt: new Date("TIMESTAMP"),
 * //   Fields: { // FieldMap
 * //     "<keys>": { // ObjectTypeField
 * //       Source: "STRING_VALUE",
 * //       Target: "STRING_VALUE",
 * //       ContentType: "STRING" || "NUMBER" || "PHONE_NUMBER" || "EMAIL_ADDRESS" || "NAME",
 * //     },
 * //   },
 * //   UniqueKey: "STRING_VALUE",
 * //   ResultsSummary: { // ResultsSummary
 * //     UpdatedRecords: Number("long"),
 * //     CreatedRecords: Number("long"),
 * //     FailedRecords: Number("long"),
 * //   },
 * //   DataExpiry: Number("int"),
 * // };
 *
 * ```
 *
 * @param GetUploadJobCommandInput - {@link GetUploadJobCommandInput}
 * @returns {@link GetUploadJobCommandOutput}
 * @see {@link GetUploadJobCommandInput} for command's `input` shape.
 * @see {@link GetUploadJobCommandOutput} for command's `response` shape.
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
export class GetUploadJobCommand extends $Command
  .classBuilder<
    GetUploadJobCommandInput,
    GetUploadJobCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CustomerProfiles_20200815", "GetUploadJob", {})
  .n("CustomerProfilesClient", "GetUploadJobCommand")
  .sc(GetUploadJob)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetUploadJobRequest;
      output: GetUploadJobResponse;
    };
    sdk: {
      input: GetUploadJobCommandInput;
      output: GetUploadJobCommandOutput;
    };
  };
}
