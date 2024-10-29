// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaPackageV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageV2Client";
import { CancelHarvestJobRequest, CancelHarvestJobResponse } from "../models/models_0";
import { de_CancelHarvestJobCommand, se_CancelHarvestJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelHarvestJobCommand}.
 */
export interface CancelHarvestJobCommandInput extends CancelHarvestJobRequest {}
/**
 * @public
 *
 * The output of {@link CancelHarvestJobCommand}.
 */
export interface CancelHarvestJobCommandOutput extends CancelHarvestJobResponse, __MetadataBearer {}

/**
 * <p>Cancels an in-progress harvest job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageV2Client, CancelHarvestJobCommand } from "@aws-sdk/client-mediapackagev2"; // ES Modules import
 * // const { MediaPackageV2Client, CancelHarvestJobCommand } = require("@aws-sdk/client-mediapackagev2"); // CommonJS import
 * const client = new MediaPackageV2Client(config);
 * const input = { // CancelHarvestJobRequest
 *   ChannelGroupName: "STRING_VALUE", // required
 *   ChannelName: "STRING_VALUE", // required
 *   OriginEndpointName: "STRING_VALUE", // required
 *   HarvestJobName: "STRING_VALUE", // required
 *   ETag: "STRING_VALUE",
 * };
 * const command = new CancelHarvestJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CancelHarvestJobCommandInput - {@link CancelHarvestJobCommandInput}
 * @returns {@link CancelHarvestJobCommandOutput}
 * @see {@link CancelHarvestJobCommandInput} for command's `input` shape.
 * @see {@link CancelHarvestJobCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageV2ClientResolvedConfig | config} for MediaPackageV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see Access Management in the IAM User Guide.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting this resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Indicates that an error from the service occurred while trying to process a request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request throughput limit was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to meet the constraints specified by the AWS service.</p>
 *
 * @throws {@link MediaPackageV2ServiceException}
 * <p>Base exception class for all service exceptions from MediaPackageV2 service.</p>
 *
 * @public
 * @example Cancel a Harvest Job
 * ```javascript
 * //
 * const input = {
 *   "ChannelGroupName": "exampleChannelGroup",
 *   "ChannelName": "exampleChannelName",
 *   "HarvestJobName": "HarvestJobName",
 *   "OriginEndpointName": "exampleOriginEndpointName"
 * };
 * const command = new CancelHarvestJobCommand(input);
 * await client.send(command);
 * // example id: example-1
 * ```
 *
 */
export class CancelHarvestJobCommand extends $Command
  .classBuilder<
    CancelHarvestJobCommandInput,
    CancelHarvestJobCommandOutput,
    MediaPackageV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaPackageV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("mediapackagev2", "CancelHarvestJob", {})
  .n("MediaPackageV2Client", "CancelHarvestJobCommand")
  .f(void 0, void 0)
  .ser(se_CancelHarvestJobCommand)
  .de(de_CancelHarvestJobCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelHarvestJobRequest;
      output: {};
    };
    sdk: {
      input: CancelHarvestJobCommandInput;
      output: CancelHarvestJobCommandOutput;
    };
  };
}
