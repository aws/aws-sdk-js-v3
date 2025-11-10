// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsMLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsMLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { StartAudienceExportJobRequest } from "../models/models_0";
import { StartAudienceExportJob } from "../schemas/schemas_0";

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
 * // import type { CleanRoomsMLClientConfig } from "@aws-sdk/client-cleanroomsml";
 * const config = {}; // type is CleanRoomsMLClientConfig
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
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsMLClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSStarkControlService", "StartAudienceExportJob", {})
  .n("CleanRoomsMLClient", "StartAudienceExportJobCommand")
  .sc(StartAudienceExportJob)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartAudienceExportJobRequest;
      output: {};
    };
    sdk: {
      input: StartAudienceExportJobCommandInput;
      output: StartAudienceExportJobCommandOutput;
    };
  };
}
