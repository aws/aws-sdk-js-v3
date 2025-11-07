// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppRunnerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppRunnerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteVpcConnectorRequest, DeleteVpcConnectorResponse } from "../models/models_0";
import { DeleteVpcConnector } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteVpcConnectorCommand}.
 */
export interface DeleteVpcConnectorCommandInput extends DeleteVpcConnectorRequest {}
/**
 * @public
 *
 * The output of {@link DeleteVpcConnectorCommand}.
 */
export interface DeleteVpcConnectorCommandOutput extends DeleteVpcConnectorResponse, __MetadataBearer {}

/**
 * <p>Delete an App Runner VPC connector resource. You can't delete a
 *       connector that's used by one or more App Runner services.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppRunnerClient, DeleteVpcConnectorCommand } from "@aws-sdk/client-apprunner"; // ES Modules import
 * // const { AppRunnerClient, DeleteVpcConnectorCommand } = require("@aws-sdk/client-apprunner"); // CommonJS import
 * // import type { AppRunnerClientConfig } from "@aws-sdk/client-apprunner";
 * const config = {}; // type is AppRunnerClientConfig
 * const client = new AppRunnerClient(config);
 * const input = { // DeleteVpcConnectorRequest
 *   VpcConnectorArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteVpcConnectorCommand(input);
 * const response = await client.send(command);
 * // { // DeleteVpcConnectorResponse
 * //   VpcConnector: { // VpcConnector
 * //     VpcConnectorName: "STRING_VALUE",
 * //     VpcConnectorArn: "STRING_VALUE",
 * //     VpcConnectorRevision: Number("int"),
 * //     Subnets: [ // StringList
 * //       "STRING_VALUE",
 * //     ],
 * //     SecurityGroups: [
 * //       "STRING_VALUE",
 * //     ],
 * //     Status: "ACTIVE" || "INACTIVE",
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     DeletedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteVpcConnectorCommandInput - {@link DeleteVpcConnectorCommandInput}
 * @returns {@link DeleteVpcConnectorCommandOutput}
 * @see {@link DeleteVpcConnectorCommandInput} for command's `input` shape.
 * @see {@link DeleteVpcConnectorCommandOutput} for command's `response` shape.
 * @see {@link AppRunnerClientResolvedConfig | config} for AppRunnerClient's `config` shape.
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>An unexpected service exception occurred.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>One or more input parameters aren't valid. Refer to the API action's document page, correct the input parameters, and try the action again.</p>
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
export class DeleteVpcConnectorCommand extends $Command
  .classBuilder<
    DeleteVpcConnectorCommandInput,
    DeleteVpcConnectorCommandOutput,
    AppRunnerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppRunnerClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AppRunner", "DeleteVpcConnector", {})
  .n("AppRunnerClient", "DeleteVpcConnectorCommand")
  .sc(DeleteVpcConnector)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteVpcConnectorRequest;
      output: DeleteVpcConnectorResponse;
    };
    sdk: {
      input: DeleteVpcConnectorCommandInput;
      output: DeleteVpcConnectorCommandOutput;
    };
  };
}
