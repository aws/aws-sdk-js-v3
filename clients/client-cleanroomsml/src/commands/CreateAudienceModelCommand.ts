// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsMLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsMLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateAudienceModelRequest, CreateAudienceModelResponse } from "../models/models_0";
import { de_CreateAudienceModelCommand, se_CreateAudienceModelCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAudienceModelCommand}.
 */
export interface CreateAudienceModelCommandInput extends CreateAudienceModelRequest {}
/**
 * @public
 *
 * The output of {@link CreateAudienceModelCommand}.
 */
export interface CreateAudienceModelCommandOutput extends CreateAudienceModelResponse, __MetadataBearer {}

/**
 * <p>Defines the information necessary to create an audience model. An audience model is a machine learning model that Clean Rooms ML trains to measure similarity between users. Clean Rooms ML manages training and storing the audience model. The audience model can be used in multiple calls to the <a>StartAudienceGenerationJob</a> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsMLClient, CreateAudienceModelCommand } from "@aws-sdk/client-cleanroomsml"; // ES Modules import
 * // const { CleanRoomsMLClient, CreateAudienceModelCommand } = require("@aws-sdk/client-cleanroomsml"); // CommonJS import
 * // import type { CleanRoomsMLClientConfig } from "@aws-sdk/client-cleanroomsml";
 * const config = {}; // type is CleanRoomsMLClientConfig
 * const client = new CleanRoomsMLClient(config);
 * const input = { // CreateAudienceModelRequest
 *   trainingDataStartTime: new Date("TIMESTAMP"),
 *   trainingDataEndTime: new Date("TIMESTAMP"),
 *   name: "STRING_VALUE", // required
 *   trainingDatasetArn: "STRING_VALUE", // required
 *   kmsKeyArn: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   description: "STRING_VALUE",
 * };
 * const command = new CreateAudienceModelCommand(input);
 * const response = await client.send(command);
 * // { // CreateAudienceModelResponse
 * //   audienceModelArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateAudienceModelCommandInput - {@link CreateAudienceModelCommandInput}
 * @returns {@link CreateAudienceModelCommandOutput}
 * @see {@link CreateAudienceModelCommandInput} for command's `input` shape.
 * @see {@link CreateAudienceModelCommandOutput} for command's `response` shape.
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
export class CreateAudienceModelCommand extends $Command
  .classBuilder<
    CreateAudienceModelCommandInput,
    CreateAudienceModelCommandOutput,
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
  .s("AWSStarkControlService", "CreateAudienceModel", {})
  .n("CleanRoomsMLClient", "CreateAudienceModelCommand")
  .f(void 0, void 0)
  .ser(se_CreateAudienceModelCommand)
  .de(de_CreateAudienceModelCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAudienceModelRequest;
      output: CreateAudienceModelResponse;
    };
    sdk: {
      input: CreateAudienceModelCommandInput;
      output: CreateAudienceModelCommandOutput;
    };
  };
}
