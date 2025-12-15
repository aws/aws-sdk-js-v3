// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteBlueGreenDeploymentRequest, DeleteBlueGreenDeploymentResponse } from "../models/models_0";
import type { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DeleteBlueGreenDeployment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteBlueGreenDeploymentCommand}.
 */
export interface DeleteBlueGreenDeploymentCommandInput extends DeleteBlueGreenDeploymentRequest {}
/**
 * @public
 *
 * The output of {@link DeleteBlueGreenDeploymentCommand}.
 */
export interface DeleteBlueGreenDeploymentCommandOutput extends DeleteBlueGreenDeploymentResponse, __MetadataBearer {}

/**
 * <p>Deletes a blue/green deployment.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/blue-green-deployments.html">Using Amazon RDS
 *                 Blue/Green Deployments for database updates</a> in the <i>Amazon RDS User
 *                 Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/blue-green-deployments.html">Using Amazon RDS
 *                 Blue/Green Deployments for database updates</a> in the <i>Amazon Aurora
 *                 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DeleteBlueGreenDeploymentCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DeleteBlueGreenDeploymentCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // DeleteBlueGreenDeploymentRequest
 *   BlueGreenDeploymentIdentifier: "STRING_VALUE", // required
 *   DeleteTarget: true || false,
 * };
 * const command = new DeleteBlueGreenDeploymentCommand(input);
 * const response = await client.send(command);
 * // { // DeleteBlueGreenDeploymentResponse
 * //   BlueGreenDeployment: { // BlueGreenDeployment
 * //     BlueGreenDeploymentIdentifier: "STRING_VALUE",
 * //     BlueGreenDeploymentName: "STRING_VALUE",
 * //     Source: "STRING_VALUE",
 * //     Target: "STRING_VALUE",
 * //     SwitchoverDetails: [ // SwitchoverDetailList
 * //       { // SwitchoverDetail
 * //         SourceMember: "STRING_VALUE",
 * //         TargetMember: "STRING_VALUE",
 * //         Status: "STRING_VALUE",
 * //       },
 * //     ],
 * //     Tasks: [ // BlueGreenDeploymentTaskList
 * //       { // BlueGreenDeploymentTask
 * //         Name: "STRING_VALUE",
 * //         Status: "STRING_VALUE",
 * //       },
 * //     ],
 * //     Status: "STRING_VALUE",
 * //     StatusDetails: "STRING_VALUE",
 * //     CreateTime: new Date("TIMESTAMP"),
 * //     DeleteTime: new Date("TIMESTAMP"),
 * //     TagList: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteBlueGreenDeploymentCommandInput - {@link DeleteBlueGreenDeploymentCommandInput}
 * @returns {@link DeleteBlueGreenDeploymentCommandOutput}
 * @see {@link DeleteBlueGreenDeploymentCommandInput} for command's `input` shape.
 * @see {@link DeleteBlueGreenDeploymentCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link BlueGreenDeploymentNotFoundFault} (client fault)
 *  <p>
 *             <code>BlueGreenDeploymentIdentifier</code> doesn't refer to an existing blue/green deployment.</p>
 *
 * @throws {@link InvalidBlueGreenDeploymentStateFault} (client fault)
 *  <p>The blue/green deployment can't be switched over or deleted because there is an invalid configuration in
 *             the green environment.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @public
 */
export class DeleteBlueGreenDeploymentCommand extends $Command
  .classBuilder<
    DeleteBlueGreenDeploymentCommandInput,
    DeleteBlueGreenDeploymentCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "DeleteBlueGreenDeployment", {})
  .n("RDSClient", "DeleteBlueGreenDeploymentCommand")
  .sc(DeleteBlueGreenDeployment$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteBlueGreenDeploymentRequest;
      output: DeleteBlueGreenDeploymentResponse;
    };
    sdk: {
      input: DeleteBlueGreenDeploymentCommandInput;
      output: DeleteBlueGreenDeploymentCommandOutput;
    };
  };
}
