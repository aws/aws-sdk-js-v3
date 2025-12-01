// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetTrustStoreRequest, GetTrustStoreResult } from "../models/models_1";
import { GetTrustStore } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTrustStoreCommand}.
 */
export interface GetTrustStoreCommandInput extends GetTrustStoreRequest {}
/**
 * @public
 *
 * The output of {@link GetTrustStoreCommand}.
 */
export interface GetTrustStoreCommandOutput extends GetTrustStoreResult, __MetadataBearer {}

/**
 * <p>Gets a trust store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetTrustStoreCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetTrustStoreCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // GetTrustStoreRequest
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new GetTrustStoreCommand(input);
 * const response = await client.send(command);
 * // { // GetTrustStoreResult
 * //   TrustStore: { // TrustStore
 * //     Id: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Status: "pending" || "active" || "failed",
 * //     NumberOfCaCertificates: Number("int"),
 * //     LastModifiedTime: new Date("TIMESTAMP"),
 * //     Reason: "STRING_VALUE",
 * //   },
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetTrustStoreCommandInput - {@link GetTrustStoreCommandInput}
 * @returns {@link GetTrustStoreCommandOutput}
 * @see {@link GetTrustStoreCommandInput} for command's `input` shape.
 * @see {@link GetTrustStoreCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link EntityNotFound} (client fault)
 *  <p>The entity was not found.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 *
 * @public
 */
export class GetTrustStoreCommand extends $Command
  .classBuilder<
    GetTrustStoreCommandInput,
    GetTrustStoreCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Cloudfront2020_05_31", "GetTrustStore", {})
  .n("CloudFrontClient", "GetTrustStoreCommand")
  .sc(GetTrustStore)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTrustStoreRequest;
      output: GetTrustStoreResult;
    };
    sdk: {
      input: GetTrustStoreCommandInput;
      output: GetTrustStoreCommandOutput;
    };
  };
}
