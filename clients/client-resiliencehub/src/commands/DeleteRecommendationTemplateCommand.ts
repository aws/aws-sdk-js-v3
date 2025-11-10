// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteRecommendationTemplateRequest, DeleteRecommendationTemplateResponse } from "../models/models_0";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";
import { DeleteRecommendationTemplate } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteRecommendationTemplateCommand}.
 */
export interface DeleteRecommendationTemplateCommandInput extends DeleteRecommendationTemplateRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRecommendationTemplateCommand}.
 */
export interface DeleteRecommendationTemplateCommandOutput
  extends DeleteRecommendationTemplateResponse,
    __MetadataBearer {}

/**
 * <p>Deletes a recommendation template. This is a destructive action that can't be
 *       undone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, DeleteRecommendationTemplateCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, DeleteRecommendationTemplateCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * // import type { ResiliencehubClientConfig } from "@aws-sdk/client-resiliencehub";
 * const config = {}; // type is ResiliencehubClientConfig
 * const client = new ResiliencehubClient(config);
 * const input = { // DeleteRecommendationTemplateRequest
 *   recommendationTemplateArn: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new DeleteRecommendationTemplateCommand(input);
 * const response = await client.send(command);
 * // { // DeleteRecommendationTemplateResponse
 * //   recommendationTemplateArn: "STRING_VALUE", // required
 * //   status: "Pending" || "InProgress" || "Failed" || "Success", // required
 * // };
 *
 * ```
 *
 * @param DeleteRecommendationTemplateCommandInput - {@link DeleteRecommendationTemplateCommandInput}
 * @returns {@link DeleteRecommendationTemplateCommandOutput}
 * @see {@link DeleteRecommendationTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteRecommendationTemplateCommandOutput} for command's `response` shape.
 * @see {@link ResiliencehubClientResolvedConfig | config} for ResiliencehubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation. The user or role that is
 *       making the request must have at least one IAM permissions policy attached that grants the
 *       required permissions.</p>
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
 *
 * @public
 */
export class DeleteRecommendationTemplateCommand extends $Command
  .classBuilder<
    DeleteRecommendationTemplateCommandInput,
    DeleteRecommendationTemplateCommandOutput,
    ResiliencehubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResiliencehubClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsResilienceHub", "DeleteRecommendationTemplate", {})
  .n("ResiliencehubClient", "DeleteRecommendationTemplateCommand")
  .sc(DeleteRecommendationTemplate)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRecommendationTemplateRequest;
      output: DeleteRecommendationTemplateResponse;
    };
    sdk: {
      input: DeleteRecommendationTemplateCommandInput;
      output: DeleteRecommendationTemplateCommandOutput;
    };
  };
}
