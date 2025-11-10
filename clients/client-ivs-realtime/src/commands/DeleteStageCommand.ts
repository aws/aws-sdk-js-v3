// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IVSRealTimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IVSRealTimeClient";
import { DeleteStageRequest, DeleteStageResponse } from "../models/models_0";
import { DeleteStage } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteStageCommand}.
 */
export interface DeleteStageCommandInput extends DeleteStageRequest {}
/**
 * @public
 *
 * The output of {@link DeleteStageCommand}.
 */
export interface DeleteStageCommandOutput extends DeleteStageResponse, __MetadataBearer {}

/**
 * <p>Shuts down and deletes the specified stage (disconnecting all participants). This operation also
 *             removes the <code>stageArn</code> from the associated <a>IngestConfiguration</a>, if there are participants
 * 	    using the IngestConfiguration to publish to the stage.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IVSRealTimeClient, DeleteStageCommand } from "@aws-sdk/client-ivs-realtime"; // ES Modules import
 * // const { IVSRealTimeClient, DeleteStageCommand } = require("@aws-sdk/client-ivs-realtime"); // CommonJS import
 * // import type { IVSRealTimeClientConfig } from "@aws-sdk/client-ivs-realtime";
 * const config = {}; // type is IVSRealTimeClientConfig
 * const client = new IVSRealTimeClient(config);
 * const input = { // DeleteStageRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new DeleteStageCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteStageCommandInput - {@link DeleteStageCommandInput}
 * @returns {@link DeleteStageCommandOutput}
 * @see {@link DeleteStageCommandInput} for command's `input` shape.
 * @see {@link DeleteStageCommandOutput} for command's `response` shape.
 * @see {@link IVSRealTimeClientResolvedConfig | config} for IVSRealTimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p/>
 *
 * @throws {@link PendingVerification} (client fault)
 *  <p/>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link IVSRealTimeServiceException}
 * <p>Base exception class for all service exceptions from IVSRealTime service.</p>
 *
 *
 * @public
 */
export class DeleteStageCommand extends $Command
  .classBuilder<
    DeleteStageCommandInput,
    DeleteStageCommandOutput,
    IVSRealTimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IVSRealTimeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonInteractiveVideoServiceRealTime", "DeleteStage", {})
  .n("IVSRealTimeClient", "DeleteStageCommand")
  .sc(DeleteStage)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteStageRequest;
      output: {};
    };
    sdk: {
      input: DeleteStageCommandInput;
      output: DeleteStageCommandOutput;
    };
  };
}
