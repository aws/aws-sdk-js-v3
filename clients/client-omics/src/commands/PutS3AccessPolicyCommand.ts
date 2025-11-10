// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PutS3AccessPolicyRequest, PutS3AccessPolicyResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { PutS3AccessPolicy } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutS3AccessPolicyCommand}.
 */
export interface PutS3AccessPolicyCommandInput extends PutS3AccessPolicyRequest {}
/**
 * @public
 *
 * The output of {@link PutS3AccessPolicyCommand}.
 */
export interface PutS3AccessPolicyCommandOutput extends PutS3AccessPolicyResponse, __MetadataBearer {}

/**
 * <p>Adds an access policy to the specified store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, PutS3AccessPolicyCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, PutS3AccessPolicyCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // PutS3AccessPolicyRequest
 *   s3AccessPointArn: "STRING_VALUE", // required
 *   s3AccessPolicy: "STRING_VALUE", // required
 * };
 * const command = new PutS3AccessPolicyCommand(input);
 * const response = await client.send(command);
 * // { // PutS3AccessPolicyResponse
 * //   s3AccessPointArn: "STRING_VALUE",
 * //   storeId: "STRING_VALUE",
 * //   storeType: "SEQUENCE_STORE" || "REFERENCE_STORE",
 * // };
 *
 * ```
 *
 * @param PutS3AccessPolicyCommandInput - {@link PutS3AccessPolicyCommandInput}
 * @returns {@link PutS3AccessPolicyCommandOutput}
 * @see {@link PutS3AccessPolicyCommandInput} for command's `input` shape.
 * @see {@link PutS3AccessPolicyCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred. Try the request again.</p>
 *
 * @throws {@link NotSupportedOperationException} (client fault)
 *  <p> The operation is not supported by Amazon Omics, or the API does not exist. </p>
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *  <p>The request timed out.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The target resource was not found in the current Region.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link OmicsServiceException}
 * <p>Base exception class for all service exceptions from Omics service.</p>
 *
 *
 * @public
 */
export class PutS3AccessPolicyCommand extends $Command
  .classBuilder<
    PutS3AccessPolicyCommandInput,
    PutS3AccessPolicyCommandOutput,
    OmicsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OmicsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Omics", "PutS3AccessPolicy", {})
  .n("OmicsClient", "PutS3AccessPolicyCommand")
  .sc(PutS3AccessPolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutS3AccessPolicyRequest;
      output: PutS3AccessPolicyResponse;
    };
    sdk: {
      input: PutS3AccessPolicyCommandInput;
      output: PutS3AccessPolicyCommandOutput;
    };
  };
}
