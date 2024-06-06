// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteRecommendationTemplateRequest, DeleteRecommendationTemplateResponse } from "../models/models_0";
import {
  de_DeleteRecommendationTemplateCommand,
  se_DeleteRecommendationTemplateCommand,
} from "../protocols/Aws_restJson1";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";

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
 * const client = new ResiliencehubClient(config);
 * const input = { // DeleteRecommendationTemplateRequest
 *   recommendationTemplateArn: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new DeleteRecommendationTemplateCommand(input);
 * const response = await client.send(command);
 * // { // DeleteRecommendationTemplateResponse
 * //   recommendationTemplateArn: "STRING_VALUE", // required
 * //   status: "STRING_VALUE", // required
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
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ResiliencehubClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsResilienceHub", "DeleteRecommendationTemplate", {})
  .n("ResiliencehubClient", "DeleteRecommendationTemplateCommand")
  .f(void 0, void 0)
  .ser(se_DeleteRecommendationTemplateCommand)
  .de(de_DeleteRecommendationTemplateCommand)
  .build() {}
