// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsMLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsMLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetAudienceModelRequest, GetAudienceModelResponse } from "../models/models_0";
import { GetAudienceModel } from "../schemas/schemas_8_Model";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAudienceModelCommand}.
 */
export interface GetAudienceModelCommandInput extends GetAudienceModelRequest {}
/**
 * @public
 *
 * The output of {@link GetAudienceModelCommand}.
 */
export interface GetAudienceModelCommandOutput extends GetAudienceModelResponse, __MetadataBearer {}

/**
 * <p>Returns information about an audience model</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsMLClient, GetAudienceModelCommand } from "@aws-sdk/client-cleanroomsml"; // ES Modules import
 * // const { CleanRoomsMLClient, GetAudienceModelCommand } = require("@aws-sdk/client-cleanroomsml"); // CommonJS import
 * // import type { CleanRoomsMLClientConfig } from "@aws-sdk/client-cleanroomsml";
 * const config = {}; // type is CleanRoomsMLClientConfig
 * const client = new CleanRoomsMLClient(config);
 * const input = { // GetAudienceModelRequest
 *   audienceModelArn: "STRING_VALUE", // required
 * };
 * const command = new GetAudienceModelCommand(input);
 * const response = await client.send(command);
 * // { // GetAudienceModelResponse
 * //   createTime: new Date("TIMESTAMP"), // required
 * //   updateTime: new Date("TIMESTAMP"), // required
 * //   trainingDataStartTime: new Date("TIMESTAMP"),
 * //   trainingDataEndTime: new Date("TIMESTAMP"),
 * //   audienceModelArn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   trainingDatasetArn: "STRING_VALUE", // required
 * //   status: "CREATE_PENDING" || "CREATE_IN_PROGRESS" || "CREATE_FAILED" || "ACTIVE" || "DELETE_PENDING" || "DELETE_IN_PROGRESS" || "DELETE_FAILED", // required
 * //   statusDetails: { // StatusDetails
 * //     statusCode: "STRING_VALUE",
 * //     message: "STRING_VALUE",
 * //   },
 * //   kmsKeyArn: "STRING_VALUE",
 * //   tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   description: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetAudienceModelCommandInput - {@link GetAudienceModelCommandInput}
 * @returns {@link GetAudienceModelCommandOutput}
 * @see {@link GetAudienceModelCommandInput} for command's `input` shape.
 * @see {@link GetAudienceModelCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class GetAudienceModelCommand extends $Command
  .classBuilder<
    GetAudienceModelCommandInput,
    GetAudienceModelCommandOutput,
    CleanRoomsMLClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsMLClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSStarkControlService", "GetAudienceModel", {})
  .n("CleanRoomsMLClient", "GetAudienceModelCommand")
  .sc(GetAudienceModel)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAudienceModelRequest;
      output: GetAudienceModelResponse;
    };
    sdk: {
      input: GetAudienceModelCommandInput;
      output: GetAudienceModelCommandOutput;
    };
  };
}
