// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { StopBulkDeploymentRequest, StopBulkDeploymentResponse } from "../models/models_0";
import { de_StopBulkDeploymentCommand, se_StopBulkDeploymentCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopBulkDeploymentCommand}.
 */
export interface StopBulkDeploymentCommandInput extends StopBulkDeploymentRequest {}
/**
 * @public
 *
 * The output of {@link StopBulkDeploymentCommand}.
 */
export interface StopBulkDeploymentCommandOutput extends StopBulkDeploymentResponse, __MetadataBearer {}

/**
 * Stops the execution of a bulk deployment. This action returns a status of ''Stopping'' until the deployment is stopped. You cannot start a new bulk deployment while a previous deployment is in the ''Stopping'' state. This action doesn't rollback completed deployments or cancel pending deployments.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, StopBulkDeploymentCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, StopBulkDeploymentCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * // import type { GreengrassClientConfig } from "@aws-sdk/client-greengrass";
 * const config = {}; // type is GreengrassClientConfig
 * const client = new GreengrassClient(config);
 * const input = { // StopBulkDeploymentRequest
 *   BulkDeploymentId: "STRING_VALUE", // required
 * };
 * const command = new StopBulkDeploymentCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StopBulkDeploymentCommandInput - {@link StopBulkDeploymentCommandInput}
 * @returns {@link StopBulkDeploymentCommandOutput}
 * @see {@link StopBulkDeploymentCommandInput} for command's `input` shape.
 * @see {@link StopBulkDeploymentCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for GreengrassClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  General error information.
 *
 * @throws {@link GreengrassServiceException}
 * <p>Base exception class for all service exceptions from Greengrass service.</p>
 *
 *
 * @public
 */
export class StopBulkDeploymentCommand extends $Command
  .classBuilder<
    StopBulkDeploymentCommandInput,
    StopBulkDeploymentCommandOutput,
    GreengrassClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GreengrassClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Greengrass", "StopBulkDeployment", {})
  .n("GreengrassClient", "StopBulkDeploymentCommand")
  .f(void 0, void 0)
  .ser(se_StopBulkDeploymentCommand)
  .de(de_StopBulkDeploymentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopBulkDeploymentRequest;
      output: {};
    };
    sdk: {
      input: StopBulkDeploymentCommandInput;
      output: StopBulkDeploymentCommandOutput;
    };
  };
}
