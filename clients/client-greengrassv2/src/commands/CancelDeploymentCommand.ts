// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassV2Client";
import { CancelDeploymentRequest, CancelDeploymentResponse } from "../models/models_0";
import { CancelDeployment } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelDeploymentCommand}.
 */
export interface CancelDeploymentCommandInput extends CancelDeploymentRequest {}
/**
 * @public
 *
 * The output of {@link CancelDeploymentCommand}.
 */
export interface CancelDeploymentCommandOutput extends CancelDeploymentResponse, __MetadataBearer {}

/**
 * <p>Cancels a deployment. This operation cancels the deployment for devices that haven't yet
 *       received it. If a device already received the deployment, this operation doesn't change
 *       anything for that device.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassV2Client, CancelDeploymentCommand } from "@aws-sdk/client-greengrassv2"; // ES Modules import
 * // const { GreengrassV2Client, CancelDeploymentCommand } = require("@aws-sdk/client-greengrassv2"); // CommonJS import
 * // import type { GreengrassV2ClientConfig } from "@aws-sdk/client-greengrassv2";
 * const config = {}; // type is GreengrassV2ClientConfig
 * const client = new GreengrassV2Client(config);
 * const input = { // CancelDeploymentRequest
 *   deploymentId: "STRING_VALUE", // required
 * };
 * const command = new CancelDeploymentCommand(input);
 * const response = await client.send(command);
 * // { // CancelDeploymentResponse
 * //   message: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CancelDeploymentCommandInput - {@link CancelDeploymentCommandInput}
 * @returns {@link CancelDeploymentCommandOutput}
 * @see {@link CancelDeploymentCommandInput} for command's `input` shape.
 * @see {@link CancelDeploymentCommandOutput} for command's `response` shape.
 * @see {@link GreengrassV2ClientResolvedConfig | config} for GreengrassV2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform the action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Your request has conflicting operations. This can occur if you're trying to perform more
 *       than one operation on the same resource at the same time.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>IoT Greengrass can't process your request right now. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request exceeded a request rate quota. For example, you might have exceeded the
 *       amount of times that you can retrieve device or deployment status per second.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *       unsupported characters.</p>
 *
 * @throws {@link GreengrassV2ServiceException}
 * <p>Base exception class for all service exceptions from GreengrassV2 service.</p>
 *
 *
 * @public
 */
export class CancelDeploymentCommand extends $Command
  .classBuilder<
    CancelDeploymentCommandInput,
    CancelDeploymentCommandOutput,
    GreengrassV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GreengrassV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GreengrassV2", "CancelDeployment", {})
  .n("GreengrassV2Client", "CancelDeploymentCommand")
  .sc(CancelDeployment)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelDeploymentRequest;
      output: CancelDeploymentResponse;
    };
    sdk: {
      input: CancelDeploymentCommandInput;
      output: CancelDeploymentCommandOutput;
    };
  };
}
