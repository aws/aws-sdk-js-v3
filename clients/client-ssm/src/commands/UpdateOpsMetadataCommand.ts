// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateOpsMetadataRequest, UpdateOpsMetadataResult } from "../models/models_1";
import { UpdateOpsMetadata } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateOpsMetadataCommand}.
 */
export interface UpdateOpsMetadataCommandInput extends UpdateOpsMetadataRequest {}
/**
 * @public
 *
 * The output of {@link UpdateOpsMetadataCommand}.
 */
export interface UpdateOpsMetadataCommandOutput extends UpdateOpsMetadataResult, __MetadataBearer {}

/**
 * <p>Amazon Web Services Systems Manager calls this API operation when you edit OpsMetadata in Application Manager.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, UpdateOpsMetadataCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, UpdateOpsMetadataCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // UpdateOpsMetadataRequest
 *   OpsMetadataArn: "STRING_VALUE", // required
 *   MetadataToUpdate: { // MetadataMap
 *     "<keys>": { // MetadataValue
 *       Value: "STRING_VALUE",
 *     },
 *   },
 *   KeysToDelete: [ // MetadataKeysToDeleteList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateOpsMetadataCommand(input);
 * const response = await client.send(command);
 * // { // UpdateOpsMetadataResult
 * //   OpsMetadataArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateOpsMetadataCommandInput - {@link UpdateOpsMetadataCommandInput}
 * @returns {@link UpdateOpsMetadataCommandOutput}
 * @see {@link UpdateOpsMetadataCommandInput} for command's `input` shape.
 * @see {@link UpdateOpsMetadataCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link OpsMetadataInvalidArgumentException} (client fault)
 *  <p>One of the arguments passed is invalid. </p>
 *
 * @throws {@link OpsMetadataKeyLimitExceededException} (client fault)
 *  <p>The OpsMetadata object exceeds the maximum number of OpsMetadata keys that you can assign to
 *    an application in Application Manager.</p>
 *
 * @throws {@link OpsMetadataNotFoundException} (client fault)
 *  <p>The OpsMetadata object doesn't exist. </p>
 *
 * @throws {@link OpsMetadataTooManyUpdatesException} (client fault)
 *  <p>The system is processing too many concurrent updates. Wait a few moments and try
 *    again.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class UpdateOpsMetadataCommand extends $Command
  .classBuilder<
    UpdateOpsMetadataCommandInput,
    UpdateOpsMetadataCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSSM", "UpdateOpsMetadata", {})
  .n("SSMClient", "UpdateOpsMetadataCommand")
  .sc(UpdateOpsMetadata)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateOpsMetadataRequest;
      output: UpdateOpsMetadataResult;
    };
    sdk: {
      input: UpdateOpsMetadataCommandInput;
      output: UpdateOpsMetadataCommandOutput;
    };
  };
}
