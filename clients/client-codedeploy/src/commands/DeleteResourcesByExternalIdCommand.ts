// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CodeDeployClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeDeployClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteResourcesByExternalIdInput, DeleteResourcesByExternalIdOutput } from "../models/models_0";
import { de_DeleteResourcesByExternalIdCommand, se_DeleteResourcesByExternalIdCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteResourcesByExternalIdCommand}.
 */
export interface DeleteResourcesByExternalIdCommandInput extends DeleteResourcesByExternalIdInput {}
/**
 * @public
 *
 * The output of {@link DeleteResourcesByExternalIdCommand}.
 */
export interface DeleteResourcesByExternalIdCommandOutput extends DeleteResourcesByExternalIdOutput, __MetadataBearer {}

/**
 * <p>Deletes resources linked to an external ID. This action only applies if you have
 *             configured blue/green deployments through CloudFormation. </p>
 *          <note>
 *             <p>It is not necessary to call this action directly. CloudFormation calls it
 *                 on your behalf when it needs to delete stack resources. This action is offered
 *                 publicly in case you need to delete resources to comply with General Data Protection
 *                 Regulation (GDPR) requirements.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, DeleteResourcesByExternalIdCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, DeleteResourcesByExternalIdCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const input = { // DeleteResourcesByExternalIdInput
 *   externalId: "STRING_VALUE",
 * };
 * const command = new DeleteResourcesByExternalIdCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteResourcesByExternalIdCommandInput - {@link DeleteResourcesByExternalIdCommandInput}
 * @returns {@link DeleteResourcesByExternalIdCommandOutput}
 * @see {@link DeleteResourcesByExternalIdCommandInput} for command's `input` shape.
 * @see {@link DeleteResourcesByExternalIdCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for CodeDeployClient's `config` shape.
 *
 * @throws {@link CodeDeployServiceException}
 * <p>Base exception class for all service exceptions from CodeDeploy service.</p>
 *
 * @public
 */
export class DeleteResourcesByExternalIdCommand extends $Command
  .classBuilder<
    DeleteResourcesByExternalIdCommandInput,
    DeleteResourcesByExternalIdCommandOutput,
    CodeDeployClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CodeDeployClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CodeDeploy_20141006", "DeleteResourcesByExternalId", {})
  .n("CodeDeployClient", "DeleteResourcesByExternalIdCommand")
  .f(void 0, void 0)
  .ser(se_DeleteResourcesByExternalIdCommand)
  .de(de_DeleteResourcesByExternalIdCommand)
  .build() {}
