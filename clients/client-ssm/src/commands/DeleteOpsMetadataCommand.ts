// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteOpsMetadataRequest, DeleteOpsMetadataResult } from "../models/models_0";
import { de_DeleteOpsMetadataCommand, se_DeleteOpsMetadataCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteOpsMetadataCommand}.
 */
export interface DeleteOpsMetadataCommandInput extends DeleteOpsMetadataRequest {}
/**
 * @public
 *
 * The output of {@link DeleteOpsMetadataCommand}.
 */
export interface DeleteOpsMetadataCommandOutput extends DeleteOpsMetadataResult, __MetadataBearer {}

/**
 * <p>Delete OpsMetadata related to an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DeleteOpsMetadataCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DeleteOpsMetadataCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // DeleteOpsMetadataRequest
 *   OpsMetadataArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteOpsMetadataCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteOpsMetadataCommandInput - {@link DeleteOpsMetadataCommandInput}
 * @returns {@link DeleteOpsMetadataCommandOutput}
 * @see {@link DeleteOpsMetadataCommandInput} for command's `input` shape.
 * @see {@link DeleteOpsMetadataCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link OpsMetadataInvalidArgumentException} (client fault)
 *  <p>One of the arguments passed is invalid. </p>
 *
 * @throws {@link OpsMetadataNotFoundException} (client fault)
 *  <p>The OpsMetadata object doesn't exist. </p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class DeleteOpsMetadataCommand extends $Command
  .classBuilder<
    DeleteOpsMetadataCommandInput,
    DeleteOpsMetadataCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonSSM", "DeleteOpsMetadata", {})
  .n("SSMClient", "DeleteOpsMetadataCommand")
  .f(void 0, void 0)
  .ser(se_DeleteOpsMetadataCommand)
  .de(de_DeleteOpsMetadataCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteOpsMetadataRequest;
      output: {};
    };
    sdk: {
      input: DeleteOpsMetadataCommandInput;
      output: DeleteOpsMetadataCommandOutput;
    };
  };
}
