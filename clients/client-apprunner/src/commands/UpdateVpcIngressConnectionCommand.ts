// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppRunnerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateVpcIngressConnectionRequest, UpdateVpcIngressConnectionResponse } from "../models/models_0";
import { UpdateVpcIngressConnection } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateVpcIngressConnectionCommand}.
 */
export interface UpdateVpcIngressConnectionCommandInput extends UpdateVpcIngressConnectionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateVpcIngressConnectionCommand}.
 */
export interface UpdateVpcIngressConnectionCommandOutput extends UpdateVpcIngressConnectionResponse, __MetadataBearer {}

/**
 * <p>Update an existing App Runner VPC Ingress Connection resource. The VPC Ingress Connection must be in one of the following states to be updated:</p>
 *          <ul>
 *             <li>
 *                <p>
 *           AVAILABLE
 *         </p>
 *             </li>
 *             <li>
 *                <p>
 *           FAILED_CREATION
 *         </p>
 *             </li>
 *             <li>
 *                <p>
 *           FAILED_UPDATE
 *         </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, UpdateVpcIngressConnectionCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, UpdateVpcIngressConnectionCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * // import type { AppRunnerClientConfig } from "@aws-sdk/client-apprunner";
 * const config = {}; // type is AppRunnerClientConfig
 * const client = new AppRunnerClient(config);
 * const input = { // UpdateVpcIngressConnectionRequest
 *   VpcIngressConnectionArn: "STRING_VALUE", // required
 *   IngressVpcConfiguration: { // IngressVpcConfiguration
 *     VpcId: "STRING_VALUE",
 *     VpcEndpointId: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateVpcIngressConnectionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateVpcIngressConnectionResponse
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
 * @param UpdateVpcIngressConnectionCommandInput - {@link UpdateVpcIngressConnectionCommandInput}
 * @returns {@link UpdateVpcIngressConnectionCommandOutput}
 * @see {@link UpdateVpcIngressConnectionCommandInput} for command's `input` shape.
 * @see {@link UpdateVpcIngressConnectionCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class UpdateVpcIngressConnectionCommand extends $Command
  .classBuilder<
    UpdateVpcIngressConnectionCommandInput,
    UpdateVpcIngressConnectionCommandOutput,
    AppRunnerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppRunnerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AppRunner", "UpdateVpcIngressConnection", {})
  .n("AppRunnerClient", "UpdateVpcIngressConnectionCommand")
  .sc(UpdateVpcIngressConnection)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateVpcIngressConnectionRequest;
      output: UpdateVpcIngressConnectionResponse;
    };
    sdk: {
      input: UpdateVpcIngressConnectionCommandInput;
      output: UpdateVpcIngressConnectionCommandOutput;
    };
  };
}
