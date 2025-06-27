// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CancelClusterRequest, CancelClusterResult } from "../models/models_0";
import { de_CancelClusterCommand, se_CancelClusterCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelClusterCommand}.
 */
export interface CancelClusterCommandInput extends CancelClusterRequest {}
/**
 * @public
 *
 * The output of {@link CancelClusterCommand}.
 */
export interface CancelClusterCommandOutput extends CancelClusterResult, __MetadataBearer {}

/**
 * <p>Cancels a cluster job. You can only cancel a cluster job while it's in the
 *         <code>AwaitingQuorum</code> status. You'll have at least an hour after creating a cluster
 *       job to cancel it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, CancelClusterCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, CancelClusterCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const input = { // CancelClusterRequest
 *   ClusterId: "STRING_VALUE", // required
 * };
 * const command = new CancelClusterCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CancelClusterCommandInput - {@link CancelClusterCommandInput}
 * @returns {@link CancelClusterCommandOutput}
 * @see {@link CancelClusterCommandInput} for command's `input` shape.
 * @see {@link CancelClusterCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for SnowballClient's `config` shape.
 *
 * @throws {@link InvalidJobStateException} (client fault)
 *  <p>The action can't be performed because the job's current state doesn't allow that action
 *       to be performed.</p>
 *
 * @throws {@link InvalidResourceException} (client fault)
 *  <p>The specified resource can't be found. Check the information you provided in your last
 *       request, and try again.</p>
 *
 * @throws {@link KMSRequestFailedException} (client fault)
 *  <p>The provided Key Management Service key lacks the permissions to perform the specified
 *         <a>CreateJob</a> or <a>UpdateJob</a> action.</p>
 *
 * @throws {@link SnowballServiceException}
 * <p>Base exception class for all service exceptions from Snowball service.</p>
 *
 *
 * @example To cancel a cluster job
 * ```javascript
 * // This operation cancels a cluster job. You can only cancel a cluster job while it's in the AwaitingQuorum status.
 * const input = {
 *   ClusterId: "CID123e4567-e89b-12d3-a456-426655440000"
 * };
 * const command = new CancelClusterCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class CancelClusterCommand extends $Command
  .classBuilder<
    CancelClusterCommandInput,
    CancelClusterCommandOutput,
    SnowballClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SnowballClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIESnowballJobManagementService", "CancelCluster", {})
  .n("SnowballClient", "CancelClusterCommand")
  .f(void 0, void 0)
  .ser(se_CancelClusterCommand)
  .de(de_CancelClusterCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelClusterRequest;
      output: {};
    };
    sdk: {
      input: CancelClusterCommandInput;
      output: CancelClusterCommandOutput;
    };
  };
}
