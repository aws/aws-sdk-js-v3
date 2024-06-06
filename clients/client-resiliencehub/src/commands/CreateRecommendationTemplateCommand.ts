// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateRecommendationTemplateRequest,
  CreateRecommendationTemplateRequestFilterSensitiveLog,
  CreateRecommendationTemplateResponse,
  CreateRecommendationTemplateResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_CreateRecommendationTemplateCommand,
  se_CreateRecommendationTemplateCommand,
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
 * The input for {@link CreateRecommendationTemplateCommand}.
 */
export interface CreateRecommendationTemplateCommandInput extends CreateRecommendationTemplateRequest {}
/**
 * @public
 *
 * The output of {@link CreateRecommendationTemplateCommand}.
 */
export interface CreateRecommendationTemplateCommandOutput
  extends CreateRecommendationTemplateResponse,
    __MetadataBearer {}

/**
 * <p>Creates a new recommendation template for the Resilience Hub application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, CreateRecommendationTemplateCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, CreateRecommendationTemplateCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * const client = new ResiliencehubClient(config);
 * const input = { // CreateRecommendationTemplateRequest
 *   recommendationIds: [ // RecommendationIdList
 *     "STRING_VALUE",
 *   ],
 *   format: "STRING_VALUE",
 *   recommendationTypes: [ // RenderRecommendationTypeList
 *     "STRING_VALUE",
 *   ],
 *   assessmentArn: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   bucketName: "STRING_VALUE",
 * };
 * const command = new CreateRecommendationTemplateCommand(input);
 * const response = await client.send(command);
 * // { // CreateRecommendationTemplateResponse
 * //   recommendationTemplate: { // RecommendationTemplate
 * //     templatesLocation: { // S3Location
 * //       bucket: "STRING_VALUE",
 * //       prefix: "STRING_VALUE",
 * //     },
 * //     assessmentArn: "STRING_VALUE", // required
 * //     appArn: "STRING_VALUE",
 * //     recommendationIds: [ // RecommendationIdList
 * //       "STRING_VALUE",
 * //     ],
 * //     recommendationTypes: [ // RenderRecommendationTypeList // required
 * //       "STRING_VALUE",
 * //     ],
 * //     format: "STRING_VALUE", // required
 * //     recommendationTemplateArn: "STRING_VALUE", // required
 * //     message: "STRING_VALUE",
 * //     status: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     startTime: new Date("TIMESTAMP"),
 * //     endTime: new Date("TIMESTAMP"),
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     needsReplacements: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateRecommendationTemplateCommandInput - {@link CreateRecommendationTemplateCommandInput}
 * @returns {@link CreateRecommendationTemplateCommandOutput}
 * @see {@link CreateRecommendationTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateRecommendationTemplateCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>This exception occurs when you have exceeded your service quota. To perform the requested action, remove some of the
 *       relevant resources, or use Service Quotas to request a service quota increase.</p>
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
export class CreateRecommendationTemplateCommand extends $Command
  .classBuilder<
    CreateRecommendationTemplateCommandInput,
    CreateRecommendationTemplateCommandOutput,
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
  .s("AwsResilienceHub", "CreateRecommendationTemplate", {})
  .n("ResiliencehubClient", "CreateRecommendationTemplateCommand")
  .f(CreateRecommendationTemplateRequestFilterSensitiveLog, CreateRecommendationTemplateResponseFilterSensitiveLog)
  .ser(se_CreateRecommendationTemplateCommand)
  .de(de_CreateRecommendationTemplateCommand)
  .build() {}
