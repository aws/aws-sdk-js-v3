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
import type { GetUploadJobPathRequest, GetUploadJobPathResponse } from "../models/models_0";
import { GetUploadJobPath } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>This API retrieves the pre-signed URL and client token for uploading the file associated
 *          with the upload job. </p>
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
export class GetUploadJobPathCommand extends $Command
  .classBuilder<
    GetUploadJobPathCommandInput,
    GetUploadJobPathCommandOutput,
    CustomerProfilesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CustomerProfilesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CustomerProfiles_20200815", "GetUploadJobPath", {})
  .n("CustomerProfilesClient", "GetUploadJobPathCommand")
  .sc(GetUploadJobPath)
  .build() {
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
