// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteS3AccessPolicyRequest, DeleteS3AccessPolicyResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { de_DeleteS3AccessPolicyCommand, se_DeleteS3AccessPolicyCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteS3AccessPolicyCommand}.
 */
export interface DeleteS3AccessPolicyCommandInput extends DeleteS3AccessPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteS3AccessPolicyCommand}.
 */
export interface DeleteS3AccessPolicyCommandOutput extends DeleteS3AccessPolicyResponse, __MetadataBearer {}

/**
 * <p>Deletes an access policy for the specified store.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, DeleteS3AccessPolicyCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, DeleteS3AccessPolicyCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new OmicsClient(config);
 * const input = { // DeleteS3AccessPolicyRequest
 *   s3AccessPointArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteS3AccessPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteS3AccessPolicyCommandInput - {@link DeleteS3AccessPolicyCommandInput}
 * @returns {@link DeleteS3AccessPolicyCommandOutput}
 * @see {@link DeleteS3AccessPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteS3AccessPolicyCommandOutput} for command's `response` shape.
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
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link OmicsServiceException}
 * <p>Base exception class for all service exceptions from Omics service.</p>
 *
 * @public
 */
export class DeleteS3AccessPolicyCommand extends $Command
  .classBuilder<
    DeleteS3AccessPolicyCommandInput,
    DeleteS3AccessPolicyCommandOutput,
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
  .s("Omics", "DeleteS3AccessPolicy", {})
  .n("OmicsClient", "DeleteS3AccessPolicyCommand")
  .f(void 0, void 0)
  .ser(se_DeleteS3AccessPolicyCommand)
  .de(de_DeleteS3AccessPolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteS3AccessPolicyRequest;
      output: {};
    };
    sdk: {
      input: DeleteS3AccessPolicyCommandInput;
      output: DeleteS3AccessPolicyCommandOutput;
    };
  };
}
