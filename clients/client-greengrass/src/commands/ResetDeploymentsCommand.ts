// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { ResetDeploymentsRequest, ResetDeploymentsResponse } from "../models/models_0";
import { ResetDeployments } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ResetDeploymentsCommand}.
 */
export interface ResetDeploymentsCommandInput extends ResetDeploymentsRequest {}
/**
 * @public
 *
 * The output of {@link ResetDeploymentsCommand}.
 */
export interface ResetDeploymentsCommandOutput extends ResetDeploymentsResponse, __MetadataBearer {}

/**
 * Resets a group's deployments.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, ResetDeploymentsCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, ResetDeploymentsCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * // import type { GreengrassClientConfig } from "@aws-sdk/client-greengrass";
 * const config = {}; // type is GreengrassClientConfig
 * const client = new GreengrassClient(config);
 * const input = { // ResetDeploymentsRequest
 *   AmznClientToken: "STRING_VALUE",
 *   Force: true || false,
 *   GroupId: "STRING_VALUE", // required
 * };
 * const command = new ResetDeploymentsCommand(input);
 * const response = await client.send(command);
 * // { // ResetDeploymentsResponse
 * //   DeploymentArn: "STRING_VALUE",
 * //   DeploymentId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ResetDeploymentsCommandInput - {@link ResetDeploymentsCommandInput}
 * @returns {@link ResetDeploymentsCommandOutput}
 * @see {@link ResetDeploymentsCommandInput} for command's `input` shape.
 * @see {@link ResetDeploymentsCommandOutput} for command's `response` shape.
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
export class ResetDeploymentsCommand extends $Command
  .classBuilder<
    ResetDeploymentsCommandInput,
    ResetDeploymentsCommandOutput,
    GreengrassClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GreengrassClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Greengrass", "ResetDeployments", {})
  .n("GreengrassClient", "ResetDeploymentsCommand")
  .sc(ResetDeployments)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ResetDeploymentsRequest;
      output: ResetDeploymentsResponse;
    };
    sdk: {
      input: ResetDeploymentsCommandInput;
      output: ResetDeploymentsCommandOutput;
    };
  };
}
