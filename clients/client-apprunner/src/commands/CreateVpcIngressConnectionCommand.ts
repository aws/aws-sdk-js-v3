// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppRunnerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateVpcIngressConnectionRequest, CreateVpcIngressConnectionResponse } from "../models/models_0";
import { de_CreateVpcIngressConnectionCommand, se_CreateVpcIngressConnectionCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateVpcIngressConnectionCommand}.
 */
export interface CreateVpcIngressConnectionCommandInput extends CreateVpcIngressConnectionRequest {}
/**
 * @public
 *
 * The output of {@link CreateVpcIngressConnectionCommand}.
 */
export interface CreateVpcIngressConnectionCommandOutput extends CreateVpcIngressConnectionResponse, __MetadataBearer {}

/**
 * <p>Create an App Runner VPC Ingress Connection resource. App Runner requires this resource when you want to associate your App Runner service with an Amazon VPC endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, CreateVpcIngressConnectionCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, CreateVpcIngressConnectionCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * const client = new AppRunnerClient(config);
 * const input = { // CreateVpcIngressConnectionRequest
 *   ServiceArn: "STRING_VALUE", // required
 *   VpcIngressConnectionName: "STRING_VALUE", // required
 *   IngressVpcConfiguration: { // IngressVpcConfiguration
 *     VpcId: "STRING_VALUE",
 *     VpcEndpointId: "STRING_VALUE",
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateVpcIngressConnectionCommand(input);
 * const response = await client.send(command);
 * // { // CreateVpcIngressConnectionResponse
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
 * @param CreateVpcIngressConnectionCommandInput - {@link CreateVpcIngressConnectionCommandInput}
 * @returns {@link CreateVpcIngressConnectionCommandOutput}
 * @see {@link CreateVpcIngressConnectionCommandInput} for command's `input` shape.
 * @see {@link CreateVpcIngressConnectionCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>App Runner can't create this resource. You've reached your account quota for this resource type.</p>
 *          <p>For App Runner per-resource quotas, see <a href="https://docs.aws.amazon.com/general/latest/gr/apprunner.html">App Runner endpoints and quotas</a> in the
 *         <i>Amazon Web Services General Reference</i>.</p>
 *
 * @throws {@link AppRunnerServiceException}
 * <p>Base exception class for all service exceptions from AppRunner service.</p>
 *
 *
 * @public
 */
export class CreateVpcIngressConnectionCommand extends $Command
  .classBuilder<
    CreateVpcIngressConnectionCommandInput,
    CreateVpcIngressConnectionCommandOutput,
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
  .s("AppRunner", "CreateVpcIngressConnection", {})
  .n("AppRunnerClient", "CreateVpcIngressConnectionCommand")
  .f(void 0, void 0)
  .ser(se_CreateVpcIngressConnectionCommand)
  .de(de_CreateVpcIngressConnectionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateVpcIngressConnectionRequest;
      output: CreateVpcIngressConnectionResponse;
    };
    sdk: {
      input: CreateVpcIngressConnectionCommandInput;
      output: CreateVpcIngressConnectionCommandOutput;
    };
  };
}
