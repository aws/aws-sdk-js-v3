// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import type { CreateDeploymentRequest, CreateDeploymentResponse } from "../models/models_0";
import { CreateDeployment } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateDeploymentCommand}.
 */
export interface CreateDeploymentCommandInput extends CreateDeploymentRequest {}
/**
 * @public
 *
 * The output of {@link CreateDeploymentCommand}.
 */
export interface CreateDeploymentCommandOutput extends CreateDeploymentResponse, __MetadataBearer {}

/**
 * Creates a deployment. ''CreateDeployment'' requests are idempotent with respect to the ''X-Amzn-Client-Token'' token and the request parameters.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, CreateDeploymentCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, CreateDeploymentCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * // import type { GreengrassClientConfig } from "@aws-sdk/client-greengrass";
 * const config = {}; // type is GreengrassClientConfig
 * const client = new GreengrassClient(config);
 * const input = { // CreateDeploymentRequest
 *   AmznClientToken: "STRING_VALUE",
 *   DeploymentId: "STRING_VALUE",
 *   DeploymentType: "NewDeployment" || "Redeployment" || "ResetDeployment" || "ForceResetDeployment", // required
 *   GroupId: "STRING_VALUE", // required
 *   GroupVersionId: "STRING_VALUE",
 * };
 * const command = new CreateDeploymentCommand(input);
 * const response = await client.send(command);
 * // { // CreateDeploymentResponse
 * //   DeploymentArn: "STRING_VALUE",
 * //   DeploymentId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateDeploymentCommandInput - {@link CreateDeploymentCommandInput}
 * @returns {@link CreateDeploymentCommandOutput}
 * @see {@link CreateDeploymentCommandInput} for command's `input` shape.
 * @see {@link CreateDeploymentCommandOutput} for command's `response` shape.
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
export class CreateDeploymentCommand extends $Command
  .classBuilder<
    CreateDeploymentCommandInput,
    CreateDeploymentCommandOutput,
    GreengrassClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GreengrassClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Greengrass", "CreateDeployment", {})
  .n("GreengrassClient", "CreateDeploymentCommand")
  .sc(CreateDeployment)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDeploymentRequest;
      output: CreateDeploymentResponse;
    };
    sdk: {
      input: CreateDeploymentCommandInput;
      output: CreateDeploymentCommandOutput;
    };
  };
}
