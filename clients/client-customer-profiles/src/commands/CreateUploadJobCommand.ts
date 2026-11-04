// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateUploadJobRequest, CreateUploadJobResponse } from "../models/models_0";
import { CreateUploadJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates an Upload job to ingest data for segment imports. The metadata is created for the job with the provided field mapping and unique key.
 *
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input you provided is invalid.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource does not exist, or access was denied.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * You exceeded the maximum number of requests.
 *
 * @throws {@link CustomerProfilesServiceException}
 *
 * Base exception class for all service exceptions from CustomerProfiles service.
 *
 * @public
 */
export class CreateUploadJobCommand extends command<CreateUploadJobCommandInput, CreateUploadJobCommandOutput>(
  _ep0,
  _mw0,
  "CreateUploadJob",
  CreateUploadJob$
) {
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
