// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsMLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsMLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  StartAudienceGenerationJobRequest,
  StartAudienceGenerationJobRequestFilterSensitiveLog,
  StartAudienceGenerationJobResponse,
} from "../models/models_0";
import { de_StartAudienceGenerationJobCommand, se_StartAudienceGenerationJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartAudienceGenerationJobCommand}.
 */
export interface StartAudienceGenerationJobCommandInput extends StartAudienceGenerationJobRequest {}
/**
 * @public
 *
 * The output of {@link StartAudienceGenerationJobCommand}.
 */
export interface StartAudienceGenerationJobCommandOutput extends StartAudienceGenerationJobResponse, __MetadataBearer {}

/**
 * <p>Information necessary to start the audience generation job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsMLClient, StartAudienceGenerationJobCommand } from "@aws-sdk/client-cleanroomsml"; // ES Modules import
 * // const { CleanRoomsMLClient, StartAudienceGenerationJobCommand } = require("@aws-sdk/client-cleanroomsml"); // CommonJS import
 * const client = new CleanRoomsMLClient(config);
 * const input = { // StartAudienceGenerationJobRequest
 *   name: "STRING_VALUE", // required
 *   configuredAudienceModelArn: "STRING_VALUE", // required
 *   seedAudience: { // AudienceGenerationJobDataSource
 *     dataSource: { // S3ConfigMap
 *       s3Uri: "STRING_VALUE", // required
 *     },
 *     roleArn: "STRING_VALUE", // required
 *     sqlParameters: { // ProtectedQuerySQLParameters
 *       queryString: "STRING_VALUE",
 *       analysisTemplateArn: "STRING_VALUE",
 *       parameters: { // ParameterMap
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *     sqlComputeConfiguration: { // ComputeConfiguration Union: only one key present
 *       worker: { // WorkerComputeConfiguration
 *         type: "CR.1X" || "CR.4X",
 *         number: Number("int"),
 *       },
 *     },
 *   },
 *   includeSeedInOutput: true || false,
 *   collaborationId: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new StartAudienceGenerationJobCommand(input);
 * const response = await client.send(command);
 * // { // StartAudienceGenerationJobResponse
 * //   audienceGenerationJobArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param StartAudienceGenerationJobCommandInput - {@link StartAudienceGenerationJobCommandInput}
 * @returns {@link StartAudienceGenerationJobCommandOutput}
 * @see {@link StartAudienceGenerationJobCommandInput} for command's `input` shape.
 * @see {@link StartAudienceGenerationJobCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsMLClientResolvedConfig | config} for CleanRoomsMLClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>You can't complete this action because another resource depends on this resource.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you are requesting does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have exceeded your service quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request parameters for this request are incorrect.</p>
 *
 * @throws {@link CleanRoomsMLServiceException}
 * <p>Base exception class for all service exceptions from CleanRoomsML service.</p>
 *
 *
 * @public
 */
export class StartAudienceGenerationJobCommand extends $Command
  .classBuilder<
    StartAudienceGenerationJobCommandInput,
    StartAudienceGenerationJobCommandOutput,
    CleanRoomsMLClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsMLClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSStarkControlService", "StartAudienceGenerationJob", {})
  .n("CleanRoomsMLClient", "StartAudienceGenerationJobCommand")
  .f(StartAudienceGenerationJobRequestFilterSensitiveLog, void 0)
  .ser(se_StartAudienceGenerationJobCommand)
  .de(de_StartAudienceGenerationJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartAudienceGenerationJobRequest;
      output: StartAudienceGenerationJobResponse;
    };
    sdk: {
      input: StartAudienceGenerationJobCommandInput;
      output: StartAudienceGenerationJobCommandOutput;
    };
  };
}
