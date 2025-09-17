// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { GetDeploymentStatusRequest, GetDeploymentStatusResponse } from "../models/models_0";
import { de_GetDeploymentStatusCommand, se_GetDeploymentStatusCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDeploymentStatusCommand}.
 */
export interface GetDeploymentStatusCommandInput extends GetDeploymentStatusRequest {}
/**
 * @public
 *
 * The output of {@link GetDeploymentStatusCommand}.
 */
export interface GetDeploymentStatusCommandOutput extends GetDeploymentStatusResponse, __MetadataBearer {}

/**
 * Returns the status of a deployment.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetDeploymentStatusCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetDeploymentStatusCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * // import type { GreengrassClientConfig } from "@aws-sdk/client-greengrass";
 * const config = {}; // type is GreengrassClientConfig
 * const client = new GreengrassClient(config);
 * const input = { // GetDeploymentStatusRequest
 *   DeploymentId: "STRING_VALUE", // required
 *   GroupId: "STRING_VALUE", // required
 * };
 * const command = new GetDeploymentStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetDeploymentStatusResponse
 * //   DeploymentStatus: "STRING_VALUE",
 * //   DeploymentType: "NewDeployment" || "Redeployment" || "ResetDeployment" || "ForceResetDeployment",
 * //   ErrorDetails: [ // ErrorDetails
 * //     { // ErrorDetail
 * //       DetailedErrorCode: "STRING_VALUE",
 * //       DetailedErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   ErrorMessage: "STRING_VALUE",
 * //   UpdatedAt: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDeploymentStatusCommandInput - {@link GetDeploymentStatusCommandInput}
 * @returns {@link GetDeploymentStatusCommandOutput}
 * @see {@link GetDeploymentStatusCommandInput} for command's `input` shape.
 * @see {@link GetDeploymentStatusCommandOutput} for command's `response` shape.
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
export class GetDeploymentStatusCommand extends $Command
  .classBuilder<
    GetDeploymentStatusCommandInput,
    GetDeploymentStatusCommandOutput,
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
  .s("Greengrass", "GetDeploymentStatus", {})
  .n("GreengrassClient", "GetDeploymentStatusCommand")
  .f(void 0, void 0)
  .ser(se_GetDeploymentStatusCommand)
  .de(de_GetDeploymentStatusCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDeploymentStatusRequest;
      output: GetDeploymentStatusResponse;
    };
    sdk: {
      input: GetDeploymentStatusCommandInput;
      output: GetDeploymentStatusCommandOutput;
    };
  };
}
