// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsMLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsMLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetAudienceGenerationJobRequest, GetAudienceGenerationJobResponse } from "../models/models_0";
import { de_GetAudienceGenerationJobCommand, se_GetAudienceGenerationJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAudienceGenerationJobCommand}.
 */
export interface GetAudienceGenerationJobCommandInput extends GetAudienceGenerationJobRequest {}
/**
 * @public
 *
 * The output of {@link GetAudienceGenerationJobCommand}.
 */
export interface GetAudienceGenerationJobCommandOutput extends GetAudienceGenerationJobResponse, __MetadataBearer {}

/**
 * <p>Returns information about an audience generation job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsMLClient, GetAudienceGenerationJobCommand } from "@aws-sdk/client-cleanroomsml"; // ES Modules import
 * // const { CleanRoomsMLClient, GetAudienceGenerationJobCommand } = require("@aws-sdk/client-cleanroomsml"); // CommonJS import
 * const client = new CleanRoomsMLClient(config);
 * const input = { // GetAudienceGenerationJobRequest
 *   audienceGenerationJobArn: "STRING_VALUE", // required
 * };
 * const command = new GetAudienceGenerationJobCommand(input);
 * const response = await client.send(command);
 * // { // GetAudienceGenerationJobResponse
 * //   createTime: new Date("TIMESTAMP"), // required
 * //   updateTime: new Date("TIMESTAMP"), // required
 * //   audienceGenerationJobArn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   status: "CREATE_PENDING" || "CREATE_IN_PROGRESS" || "CREATE_FAILED" || "ACTIVE" || "DELETE_PENDING" || "DELETE_IN_PROGRESS" || "DELETE_FAILED", // required
 * //   statusDetails: { // StatusDetails
 * //     statusCode: "STRING_VALUE",
 * //     message: "STRING_VALUE",
 * //   },
 * //   configuredAudienceModelArn: "STRING_VALUE", // required
 * //   seedAudience: { // AudienceGenerationJobDataSource
 * //     dataSource: { // S3ConfigMap
 * //       s3Uri: "STRING_VALUE", // required
 * //     },
 * //     roleArn: "STRING_VALUE", // required
 * //   },
 * //   includeSeedInOutput: true || false,
 * //   collaborationId: "STRING_VALUE",
 * //   metrics: { // AudienceQualityMetrics
 * //     relevanceMetrics: [ // RelevanceMetrics // required
 * //       { // RelevanceMetric
 * //         audienceSize: { // AudienceSize
 * //           type: "ABSOLUTE" || "PERCENTAGE", // required
 * //           value: Number("int"), // required
 * //         },
 * //         score: Number("double"),
 * //       },
 * //     ],
 * //     recallMetric: Number("double"),
 * //   },
 * //   startedBy: "STRING_VALUE",
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAudienceGenerationJobCommandInput - {@link GetAudienceGenerationJobCommandInput}
 * @returns {@link GetAudienceGenerationJobCommandOutput}
 * @see {@link GetAudienceGenerationJobCommandInput} for command's `input` shape.
 * @see {@link GetAudienceGenerationJobCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsMLClientResolvedConfig | config} for CleanRoomsMLClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you are requesting does not exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request parameters for this request are incorrect.</p>
 *
 * @throws {@link CleanRoomsMLServiceException}
 * <p>Base exception class for all service exceptions from CleanRoomsML service.</p>
 *
 * @public
 */
export class GetAudienceGenerationJobCommand extends $Command
  .classBuilder<
    GetAudienceGenerationJobCommandInput,
    GetAudienceGenerationJobCommandOutput,
    CleanRoomsMLClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsMLClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSStarkControlService", "GetAudienceGenerationJob", {})
  .n("CleanRoomsMLClient", "GetAudienceGenerationJobCommand")
  .f(void 0, void 0)
  .ser(se_GetAudienceGenerationJobCommand)
  .de(de_GetAudienceGenerationJobCommand)
  .build() {}
