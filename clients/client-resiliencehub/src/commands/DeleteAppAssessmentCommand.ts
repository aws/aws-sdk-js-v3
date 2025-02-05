// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteAppAssessmentRequest, DeleteAppAssessmentResponse } from "../models/models_0";
import { de_DeleteAppAssessmentCommand, se_DeleteAppAssessmentCommand } from "../protocols/Aws_restJson1";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAppAssessmentCommand}.
 */
export interface DeleteAppAssessmentCommandInput extends DeleteAppAssessmentRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAppAssessmentCommand}.
 */
export interface DeleteAppAssessmentCommandOutput extends DeleteAppAssessmentResponse, __MetadataBearer {}

/**
 * <p>Deletes an Resilience Hub application assessment. This is a destructive action
 *       that can't be undone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, DeleteAppAssessmentCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, DeleteAppAssessmentCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ResiliencehubClient(config);
 * const input = { // DeleteAppAssessmentRequest
 *   assessmentArn: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new DeleteAppAssessmentCommand(input);
 * const response = await client.send(command);
 * // { // DeleteAppAssessmentResponse
 * //   assessmentArn: "STRING_VALUE", // required
 * //   assessmentStatus: "Pending" || "InProgress" || "Failed" || "Success", // required
 * // };
 *
 * ```
 *
 * @param DeleteAppAssessmentCommandInput - {@link DeleteAppAssessmentCommandInput}
 * @returns {@link DeleteAppAssessmentCommandOutput}
 * @see {@link DeleteAppAssessmentCommandInput} for command's `input` shape.
 * @see {@link DeleteAppAssessmentCommandOutput} for command's `response` shape.
 * @see {@link ResiliencehubClientResolvedConfig | config} for ResiliencehubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation. The user or role that is
 *       making the request must have at least one IAM permissions policy attached that grants the
 *       required permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This exception occurs when a conflict with a previous successful write is detected. This generally occurs
 *       when the previous write did not have time to propagate to the host serving the current
 *       request. A retry (with appropriate backoff logic) is the recommended response to this
 *       exception.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Resilience Hub
 *       service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception occurs when the specified resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This exception occurs when you have exceeded the limit on the number of requests per second.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>This exception occurs when a request is not valid.</p>
 *
 * @throws {@link ResiliencehubServiceException}
 * <p>Base exception class for all service exceptions from Resiliencehub service.</p>
 *
 * @public
 */
export class DeleteAppAssessmentCommand extends $Command
  .classBuilder<
    DeleteAppAssessmentCommandInput,
    DeleteAppAssessmentCommandOutput,
    ResiliencehubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResiliencehubClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsResilienceHub", "DeleteAppAssessment", {})
  .n("ResiliencehubClient", "DeleteAppAssessmentCommand")
  .f(void 0, void 0)
  .ser(se_DeleteAppAssessmentCommand)
  .de(de_DeleteAppAssessmentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAppAssessmentRequest;
      output: DeleteAppAssessmentResponse;
    };
    sdk: {
      input: DeleteAppAssessmentCommandInput;
      output: DeleteAppAssessmentCommandOutput;
    };
  };
}
