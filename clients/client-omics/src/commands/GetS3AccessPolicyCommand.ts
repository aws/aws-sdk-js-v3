// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetS3AccessPolicyRequest, GetS3AccessPolicyResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { de_GetS3AccessPolicyCommand, se_GetS3AccessPolicyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetS3AccessPolicyCommand}.
 */
export interface GetS3AccessPolicyCommandInput extends GetS3AccessPolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetS3AccessPolicyCommand}.
 */
export interface GetS3AccessPolicyCommandOutput extends GetS3AccessPolicyResponse, __MetadataBearer {}

/**
 * <p>Retrieves details about an access policy on a given store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, GetS3AccessPolicyCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, GetS3AccessPolicyCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * const client = new OmicsClient(config);
 * const input = { // GetS3AccessPolicyRequest
 *   s3AccessPointArn: "STRING_VALUE", // required
 * };
 * const command = new GetS3AccessPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetS3AccessPolicyResponse
 * //   s3AccessPointArn: "STRING_VALUE",
 * //   storeId: "STRING_VALUE",
 * //   storeType: "SEQUENCE_STORE" || "REFERENCE_STORE",
 * //   updateTime: new Date("TIMESTAMP"),
 * //   s3AccessPolicy: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetS3AccessPolicyCommandInput - {@link GetS3AccessPolicyCommandInput}
 * @returns {@link GetS3AccessPolicyCommandOutput}
 * @see {@link GetS3AccessPolicyCommandInput} for command's `input` shape.
 * @see {@link GetS3AccessPolicyCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred. Try the request again.</p>
 *
 * @throws {@link NotSupportedOperationException} (client fault)
 *  <p>
 *       The operation is not supported by Amazon Omics, or the API does not exist.
 *     </p>
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *  <p>The request timed out.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The target resource was not found in the current Region.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeds a service quota.</p>
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
export class GetS3AccessPolicyCommand extends $Command
  .classBuilder<
    GetS3AccessPolicyCommandInput,
    GetS3AccessPolicyCommandOutput,
    OmicsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OmicsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Omics", "GetS3AccessPolicy", {})
  .n("OmicsClient", "GetS3AccessPolicyCommand")
  .f(void 0, void 0)
  .ser(se_GetS3AccessPolicyCommand)
  .de(de_GetS3AccessPolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetS3AccessPolicyRequest;
      output: GetS3AccessPolicyResponse;
    };
    sdk: {
      input: GetS3AccessPolicyCommandInput;
      output: GetS3AccessPolicyCommandOutput;
    };
  };
}
