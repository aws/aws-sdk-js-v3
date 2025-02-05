// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsMLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsMLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateConfiguredAudienceModelRequest, CreateConfiguredAudienceModelResponse } from "../models/models_0";
import {
  de_CreateConfiguredAudienceModelCommand,
  se_CreateConfiguredAudienceModelCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateConfiguredAudienceModelCommand}.
 */
export interface CreateConfiguredAudienceModelCommandInput extends CreateConfiguredAudienceModelRequest {}
/**
 * @public
 *
 * The output of {@link CreateConfiguredAudienceModelCommand}.
 */
export interface CreateConfiguredAudienceModelCommandOutput
  extends CreateConfiguredAudienceModelResponse,
    __MetadataBearer {}

/**
 * <p>Defines the information necessary to create a configured audience model.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsMLClient, CreateConfiguredAudienceModelCommand } from "@aws-sdk/client-cleanroomsml"; // ES Modules import
 * // const { CleanRoomsMLClient, CreateConfiguredAudienceModelCommand } = require("@aws-sdk/client-cleanroomsml"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CleanRoomsMLClient(config);
 * const input = { // CreateConfiguredAudienceModelRequest
 *   name: "STRING_VALUE", // required
 *   audienceModelArn: "STRING_VALUE", // required
 *   outputConfig: { // ConfiguredAudienceModelOutputConfig
 *     destination: { // AudienceDestination
 *       s3Destination: { // S3ConfigMap
 *         s3Uri: "STRING_VALUE", // required
 *       },
 *     },
 *     roleArn: "STRING_VALUE", // required
 *   },
 *   description: "STRING_VALUE",
 *   sharedAudienceMetrics: [ // MetricsList // required
 *     "ALL" || "NONE",
 *   ],
 *   minMatchingSeedSize: Number("int"),
 *   audienceSizeConfig: { // AudienceSizeConfig
 *     audienceSizeType: "ABSOLUTE" || "PERCENTAGE", // required
 *     audienceSizeBins: [ // AudienceSizeBins // required
 *       Number("int"),
 *     ],
 *   },
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   childResourceTagOnCreatePolicy: "FROM_PARENT_RESOURCE" || "NONE",
 * };
 * const command = new CreateConfiguredAudienceModelCommand(input);
 * const response = await client.send(command);
 * // { // CreateConfiguredAudienceModelResponse
 * //   configuredAudienceModelArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateConfiguredAudienceModelCommandInput - {@link CreateConfiguredAudienceModelCommandInput}
 * @returns {@link CreateConfiguredAudienceModelCommandOutput}
 * @see {@link CreateConfiguredAudienceModelCommandInput} for command's `input` shape.
 * @see {@link CreateConfiguredAudienceModelCommandOutput} for command's `response` shape.
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
 * @public
 */
export class CreateConfiguredAudienceModelCommand extends $Command
  .classBuilder<
    CreateConfiguredAudienceModelCommandInput,
    CreateConfiguredAudienceModelCommandOutput,
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
  .s("AWSStarkControlService", "CreateConfiguredAudienceModel", {})
  .n("CleanRoomsMLClient", "CreateConfiguredAudienceModelCommand")
  .f(void 0, void 0)
  .ser(se_CreateConfiguredAudienceModelCommand)
  .de(de_CreateConfiguredAudienceModelCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateConfiguredAudienceModelRequest;
      output: CreateConfiguredAudienceModelResponse;
    };
    sdk: {
      input: CreateConfiguredAudienceModelCommandInput;
      output: CreateConfiguredAudienceModelCommandOutput;
    };
  };
}
