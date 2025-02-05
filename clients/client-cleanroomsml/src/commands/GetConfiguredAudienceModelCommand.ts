// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsMLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsMLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetConfiguredAudienceModelRequest, GetConfiguredAudienceModelResponse } from "../models/models_0";
import { de_GetConfiguredAudienceModelCommand, se_GetConfiguredAudienceModelCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetConfiguredAudienceModelCommand}.
 */
export interface GetConfiguredAudienceModelCommandInput extends GetConfiguredAudienceModelRequest {}
/**
 * @public
 *
 * The output of {@link GetConfiguredAudienceModelCommand}.
 */
export interface GetConfiguredAudienceModelCommandOutput extends GetConfiguredAudienceModelResponse, __MetadataBearer {}

/**
 * <p>Returns information about a specified configured audience model.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsMLClient, GetConfiguredAudienceModelCommand } from "@aws-sdk/client-cleanroomsml"; // ES Modules import
 * // const { CleanRoomsMLClient, GetConfiguredAudienceModelCommand } = require("@aws-sdk/client-cleanroomsml"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CleanRoomsMLClient(config);
 * const input = { // GetConfiguredAudienceModelRequest
 *   configuredAudienceModelArn: "STRING_VALUE", // required
 * };
 * const command = new GetConfiguredAudienceModelCommand(input);
 * const response = await client.send(command);
 * // { // GetConfiguredAudienceModelResponse
 * //   createTime: new Date("TIMESTAMP"), // required
 * //   updateTime: new Date("TIMESTAMP"), // required
 * //   configuredAudienceModelArn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   audienceModelArn: "STRING_VALUE", // required
 * //   outputConfig: { // ConfiguredAudienceModelOutputConfig
 * //     destination: { // AudienceDestination
 * //       s3Destination: { // S3ConfigMap
 * //         s3Uri: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     roleArn: "STRING_VALUE", // required
 * //   },
 * //   description: "STRING_VALUE",
 * //   status: "ACTIVE", // required
 * //   sharedAudienceMetrics: [ // MetricsList // required
 * //     "ALL" || "NONE",
 * //   ],
 * //   minMatchingSeedSize: Number("int"),
 * //   audienceSizeConfig: { // AudienceSizeConfig
 * //     audienceSizeType: "ABSOLUTE" || "PERCENTAGE", // required
 * //     audienceSizeBins: [ // AudienceSizeBins // required
 * //       Number("int"),
 * //     ],
 * //   },
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   childResourceTagOnCreatePolicy: "FROM_PARENT_RESOURCE" || "NONE",
 * // };
 *
 * ```
 *
 * @param GetConfiguredAudienceModelCommandInput - {@link GetConfiguredAudienceModelCommandInput}
 * @returns {@link GetConfiguredAudienceModelCommandOutput}
 * @see {@link GetConfiguredAudienceModelCommandInput} for command's `input` shape.
 * @see {@link GetConfiguredAudienceModelCommandOutput} for command's `response` shape.
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
export class GetConfiguredAudienceModelCommand extends $Command
  .classBuilder<
    GetConfiguredAudienceModelCommandInput,
    GetConfiguredAudienceModelCommandOutput,
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
  .s("AWSStarkControlService", "GetConfiguredAudienceModel", {})
  .n("CleanRoomsMLClient", "GetConfiguredAudienceModelCommand")
  .f(void 0, void 0)
  .ser(se_GetConfiguredAudienceModelCommand)
  .de(de_GetConfiguredAudienceModelCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetConfiguredAudienceModelRequest;
      output: GetConfiguredAudienceModelResponse;
    };
    sdk: {
      input: GetConfiguredAudienceModelCommandInput;
      output: GetConfiguredAudienceModelCommandOutput;
    };
  };
}
