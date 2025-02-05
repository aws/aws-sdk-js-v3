// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppRunnerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteVpcIngressConnectionRequest, DeleteVpcIngressConnectionResponse } from "../models/models_0";
import { de_DeleteVpcIngressConnectionCommand, se_DeleteVpcIngressConnectionCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteVpcIngressConnectionCommand}.
 */
export interface DeleteVpcIngressConnectionCommandInput extends DeleteVpcIngressConnectionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteVpcIngressConnectionCommand}.
 */
export interface DeleteVpcIngressConnectionCommandOutput extends DeleteVpcIngressConnectionResponse, __MetadataBearer {}

/**
 * <p>Delete an App Runner VPC Ingress Connection resource that's associated with an App Runner service. The VPC Ingress Connection must be in one of the following states to be deleted:
 *     </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>AVAILABLE</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>FAILED_CREATION</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>FAILED_UPDATE</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>FAILED_DELETION</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, DeleteVpcIngressConnectionCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, DeleteVpcIngressConnectionCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new AppRunnerClient(config);
 * const input = { // DeleteVpcIngressConnectionRequest
 *   VpcIngressConnectionArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteVpcIngressConnectionCommand(input);
 * const response = await client.send(command);
 * // { // DeleteVpcIngressConnectionResponse
 * //   VpcIngressConnection: { // VpcIngressConnection
 * //     VpcIngressConnectionArn: "STRING_VALUE",
 * //     VpcIngressConnectionName: "STRING_VALUE",
 * //     ServiceArn: "STRING_VALUE",
 * //     Status: "AVAILABLE" || "PENDING_CREATION" || "PENDING_UPDATE" || "PENDING_DELETION" || "FAILED_CREATION" || "FAILED_UPDATE" || "FAILED_DELETION" || "DELETED",
 * //     AccountId: "STRING_VALUE",
 * //     DomainName: "STRING_VALUE",
 * //     IngressVpcConfiguration: { // IngressVpcConfiguration
 * //       VpcId: "STRING_VALUE",
 * //       VpcEndpointId: "STRING_VALUE",
 * //     },
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     DeletedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteVpcIngressConnectionCommandInput - {@link DeleteVpcIngressConnectionCommandInput}
 * @returns {@link DeleteVpcIngressConnectionCommandOutput}
 * @see {@link DeleteVpcIngressConnectionCommandInput} for command's `input` shape.
 * @see {@link DeleteVpcIngressConnectionCommandOutput} for command's `response` shape.
 * @see {@link AppRunnerClientResolvedConfig | config} for AppRunnerClient's `config` shape.
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>An unexpected service exception occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>One or more input parameters aren't valid. Refer to the API action's document page, correct the input parameters, and try the action again.</p>
 *
 * @throws {@link InvalidStateException} (client fault)
 *  <p>You can't perform this action when the resource is in its current state.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource doesn't exist for the specified Amazon Resource Name (ARN) in your Amazon Web Services account.</p>
 *
 * @throws {@link AppRunnerServiceException}
 * <p>Base exception class for all service exceptions from AppRunner service.</p>
 *
 * @public
 */
export class DeleteVpcIngressConnectionCommand extends $Command
  .classBuilder<
    DeleteVpcIngressConnectionCommandInput,
    DeleteVpcIngressConnectionCommandOutput,
    AppRunnerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppRunnerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AppRunner", "DeleteVpcIngressConnection", {})
  .n("AppRunnerClient", "DeleteVpcIngressConnectionCommand")
  .f(void 0, void 0)
  .ser(se_DeleteVpcIngressConnectionCommand)
  .de(de_DeleteVpcIngressConnectionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteVpcIngressConnectionRequest;
      output: DeleteVpcIngressConnectionResponse;
    };
    sdk: {
      input: DeleteVpcIngressConnectionCommandInput;
      output: DeleteVpcIngressConnectionCommandOutput;
    };
  };
}
