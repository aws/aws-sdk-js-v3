// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsMLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsMLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateConfiguredAudienceModelRequest, UpdateConfiguredAudienceModelResponse } from "../models/models_0";
import {
  de_UpdateConfiguredAudienceModelCommand,
  se_UpdateConfiguredAudienceModelCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateConfiguredAudienceModelCommand}.
 */
export interface UpdateConfiguredAudienceModelCommandInput extends UpdateConfiguredAudienceModelRequest {}
/**
 * @public
 *
 * The output of {@link UpdateConfiguredAudienceModelCommand}.
 */
export interface UpdateConfiguredAudienceModelCommandOutput
  extends UpdateConfiguredAudienceModelResponse,
    __MetadataBearer {}

/**
 * <p>Provides the information necessary to update a configured audience model. Updates that impact audience generation jobs take effect when a new job starts, but do not impact currently running jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsMLClient, UpdateConfiguredAudienceModelCommand } from "@aws-sdk/client-cleanroomsml"; // ES Modules import
 * // const { CleanRoomsMLClient, UpdateConfiguredAudienceModelCommand } = require("@aws-sdk/client-cleanroomsml"); // CommonJS import
 * // import type { CleanRoomsMLClientConfig } from "@aws-sdk/client-cleanroomsml";
 * const config = {}; // type is CleanRoomsMLClientConfig
 * const client = new CleanRoomsMLClient(config);
 * const input = { // UpdateConfiguredAudienceModelRequest
 *   configuredAudienceModelArn: "STRING_VALUE", // required
 *   outputConfig: { // ConfiguredAudienceModelOutputConfig
 *     destination: { // AudienceDestination
 *       s3Destination: { // S3ConfigMap
 *         s3Uri: "STRING_VALUE", // required
 *       },
 *     },
 *     roleArn: "STRING_VALUE", // required
 *   },
 *   audienceModelArn: "STRING_VALUE",
 *   sharedAudienceMetrics: [ // MetricsList
 *     "ALL" || "NONE",
 *   ],
 *   minMatchingSeedSize: Number("int"),
 *   audienceSizeConfig: { // AudienceSizeConfig
 *     audienceSizeType: "ABSOLUTE" || "PERCENTAGE", // required
 *     audienceSizeBins: [ // AudienceSizeBins // required
 *       Number("int"),
 *     ],
 *   },
 *   description: "STRING_VALUE",
 * };
 * const command = new UpdateConfiguredAudienceModelCommand(input);
 * const response = await client.send(command);
 * // { // UpdateConfiguredAudienceModelResponse
 * //   configuredAudienceModelArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateConfiguredAudienceModelCommandInput - {@link UpdateConfiguredAudienceModelCommandInput}
 * @returns {@link UpdateConfiguredAudienceModelCommandOutput}
 * @see {@link UpdateConfiguredAudienceModelCommandInput} for command's `input` shape.
 * @see {@link UpdateConfiguredAudienceModelCommandOutput} for command's `response` shape.
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
 * @throws {@link ValidationException} (client fault)
 *  <p>The request parameters for this request are incorrect.</p>
 *
 * @throws {@link CleanRoomsMLServiceException}
 * <p>Base exception class for all service exceptions from CleanRoomsML service.</p>
 *
 *
 * @public
 */
export class UpdateConfiguredAudienceModelCommand extends $Command
  .classBuilder<
    UpdateConfiguredAudienceModelCommandInput,
    UpdateConfiguredAudienceModelCommandOutput,
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
  .s("AWSStarkControlService", "UpdateConfiguredAudienceModel", {})
  .n("CleanRoomsMLClient", "UpdateConfiguredAudienceModelCommand")
  .f(void 0, void 0)
  .ser(se_UpdateConfiguredAudienceModelCommand)
  .de(de_UpdateConfiguredAudienceModelCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateConfiguredAudienceModelRequest;
      output: UpdateConfiguredAudienceModelResponse;
    };
    sdk: {
      input: UpdateConfiguredAudienceModelCommandInput;
      output: UpdateConfiguredAudienceModelCommandOutput;
    };
  };
}
