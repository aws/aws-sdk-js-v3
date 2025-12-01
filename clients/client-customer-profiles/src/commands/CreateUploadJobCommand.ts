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
import type { CreateUploadJobRequest, CreateUploadJobResponse } from "../models/models_0";
import { CreateUploadJob } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateUploadJobCommand}.
 */
export interface CreateUploadJobCommandInput extends CreateUploadJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateUploadJobCommand}.
 */
export interface CreateUploadJobCommandOutput extends CreateUploadJobResponse, __MetadataBearer {}

/**
 * <p>Creates an Upload job to ingest data for segment imports. The metadata is created for
 *          the job with the provided field mapping and unique key. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, CreateUploadJobCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, CreateUploadJobCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // CreateUploadJobRequest
 *   DomainName: "STRING_VALUE", // required
 *   DisplayName: "STRING_VALUE", // required
 *   Fields: { // FieldMap // required
 *     "<keys>": { // ObjectTypeField
 *       Source: "STRING_VALUE",
 *       Target: "STRING_VALUE",
 *       ContentType: "STRING" || "NUMBER" || "PHONE_NUMBER" || "EMAIL_ADDRESS" || "NAME",
 *     },
 *   },
 *   UniqueKey: "STRING_VALUE", // required
 *   DataExpiry: Number("int"),
 * };
 * const command = new CreateUploadJobCommand(input);
 * const response = await client.send(command);
 * // { // CreateUploadJobResponse
 * //   JobId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateUploadJobCommandInput - {@link CreateUploadJobCommandInput}
 * @returns {@link CreateUploadJobCommandOutput}
 * @see {@link CreateUploadJobCommandInput} for command's `input` shape.
 * @see {@link CreateUploadJobCommandOutput} for command's `response` shape.
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
export class CreateUploadJobCommand extends $Command
  .classBuilder<
    CreateUploadJobCommandInput,
    CreateUploadJobCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CustomerProfiles_20200815", "CreateUploadJob", {})
  .n("CustomerProfilesClient", "CreateUploadJobCommand")
  .sc(CreateUploadJob)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateUploadJobRequest;
      output: CreateUploadJobResponse;
    };
    sdk: {
      input: CreateUploadJobCommandInput;
      output: CreateUploadJobCommandOutput;
    };
  };
}
