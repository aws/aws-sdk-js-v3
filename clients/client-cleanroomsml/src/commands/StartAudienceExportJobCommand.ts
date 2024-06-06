// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsMLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsMLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartAudienceExportJobRequest } from "../models/models_0";
import { de_StartAudienceExportJobCommand, se_StartAudienceExportJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartAudienceExportJobCommand}.
 */
export interface StartAudienceExportJobCommandInput extends StartAudienceExportJobRequest {}
/**
 * @public
 *
 * The output of {@link StartAudienceExportJobCommand}.
 */
export interface StartAudienceExportJobCommandOutput extends __MetadataBearer {}

/**
 * <p>Export an audience of a specified size after you have generated an audience.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsMLClient, StartAudienceExportJobCommand } from "@aws-sdk/client-cleanroomsml"; // ES Modules import
 * // const { CleanRoomsMLClient, StartAudienceExportJobCommand } = require("@aws-sdk/client-cleanroomsml"); // CommonJS import
 * const client = new CleanRoomsMLClient(config);
 * const input = { // StartAudienceExportJobRequest
 *   name: "STRING_VALUE", // required
 *   audienceGenerationJobArn: "STRING_VALUE", // required
 *   audienceSize: { // AudienceSize
 *     type: "ABSOLUTE" || "PERCENTAGE", // required
 *     value: Number("int"), // required
 *   },
 *   description: "STRING_VALUE",
 * };
 * const command = new StartAudienceExportJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartAudienceExportJobCommandInput - {@link StartAudienceExportJobCommandInput}
 * @returns {@link StartAudienceExportJobCommandOutput}
 * @see {@link StartAudienceExportJobCommandInput} for command's `input` shape.
 * @see {@link StartAudienceExportJobCommandOutput} for command's `response` shape.
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
export class StartAudienceExportJobCommand extends $Command
  .classBuilder<
    StartAudienceExportJobCommandInput,
    StartAudienceExportJobCommandOutput,
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
  .s("AWSStarkControlService", "StartAudienceExportJob", {})
  .n("CleanRoomsMLClient", "StartAudienceExportJobCommand")
  .f(void 0, void 0)
  .ser(se_StartAudienceExportJobCommand)
  .de(de_StartAudienceExportJobCommand)
  .build() {}
