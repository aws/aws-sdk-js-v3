// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetUploadJobPathRequest, GetUploadJobPathResponse } from "../models/models_0";
import { GetUploadJobPath$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetUploadJobPathCommand}.
 */
export interface GetUploadJobPathCommandInput extends GetUploadJobPathRequest {}
/**
 * @public
 *
 * The output of {@link GetUploadJobPathCommand}.
 */
export interface GetUploadJobPathCommandOutput extends GetUploadJobPathResponse, __MetadataBearer {}

/**
 * This API retrieves the pre-signed URL and client token for uploading the file associated with the upload job.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, GetUploadJobPathCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, GetUploadJobPathCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * // import type { CustomerProfilesClientConfig } from "@aws-sdk/client-customer-profiles";
 * const config = {}; // type is CustomerProfilesClientConfig
 * const client = new CustomerProfilesClient(config);
 * const input = { // GetUploadJobPathRequest
 *   DomainName: "STRING_VALUE", // required
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new GetUploadJobPathCommand(input);
 * const response = await client.send(command);
 * // { // GetUploadJobPathResponse
 * //   Url: "STRING_VALUE", // required
 * //   ClientToken: "STRING_VALUE",
 * //   ValidUntil: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetUploadJobPathCommandInput - {@link GetUploadJobPathCommandInput}
 * @returns {@link GetUploadJobPathCommandOutput}
 * @see {@link GetUploadJobPathCommandInput} for command's `input` shape.
 * @see {@link GetUploadJobPathCommandOutput} for command's `response` shape.
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
export class GetUploadJobPathCommand extends command<GetUploadJobPathCommandInput, GetUploadJobPathCommandOutput>(
  _ep0,
  _mw0,
  "GetUploadJobPath",
  GetUploadJobPath$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetUploadJobPathRequest;
      output: GetUploadJobPathResponse;
    };
    sdk: {
      input: GetUploadJobPathCommandInput;
      output: GetUploadJobPathCommandOutput;
    };
  };
}
