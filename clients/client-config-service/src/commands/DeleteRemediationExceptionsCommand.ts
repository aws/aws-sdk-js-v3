// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteRemediationExceptionsRequest, DeleteRemediationExceptionsResponse } from "../models/models_0";
import { de_DeleteRemediationExceptionsCommand, se_DeleteRemediationExceptionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteRemediationExceptionsCommand}.
 */
export interface DeleteRemediationExceptionsCommandInput extends DeleteRemediationExceptionsRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRemediationExceptionsCommand}.
 */
export interface DeleteRemediationExceptionsCommandOutput
  extends DeleteRemediationExceptionsResponse,
    __MetadataBearer {}

/**
 * <p>Deletes one or more remediation exceptions mentioned in the resource keys.</p>
 *          <note>
 *             <p>Config generates a remediation exception when a problem occurs executing a remediation action to a specific resource.
 * 			Remediation exceptions blocks auto-remediation until the exception is cleared.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DeleteRemediationExceptionsCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DeleteRemediationExceptionsCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const input = { // DeleteRemediationExceptionsRequest
 *   ConfigRuleName: "STRING_VALUE", // required
 *   ResourceKeys: [ // RemediationExceptionResourceKeys // required
 *     { // RemediationExceptionResourceKey
 *       ResourceType: "STRING_VALUE",
 *       ResourceId: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new DeleteRemediationExceptionsCommand(input);
 * const response = await client.send(command);
 * // { // DeleteRemediationExceptionsResponse
 * //   FailedBatches: [ // FailedDeleteRemediationExceptionsBatches
 * //     { // FailedDeleteRemediationExceptionsBatch
 * //       FailureMessage: "STRING_VALUE",
 * //       FailedItems: [ // RemediationExceptionResourceKeys
 * //         { // RemediationExceptionResourceKey
 * //           ResourceType: "STRING_VALUE",
 * //           ResourceId: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DeleteRemediationExceptionsCommandInput - {@link DeleteRemediationExceptionsCommandInput}
 * @returns {@link DeleteRemediationExceptionsCommandOutput}
 * @see {@link DeleteRemediationExceptionsCommandInput} for command's `input` shape.
 * @see {@link DeleteRemediationExceptionsCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link NoSuchRemediationExceptionException} (client fault)
 *  <p>You tried to delete a remediation exception that does not exist.</p>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 *
 * @public
 */
export class DeleteRemediationExceptionsCommand extends $Command
  .classBuilder<
    DeleteRemediationExceptionsCommandInput,
    DeleteRemediationExceptionsCommandOutput,
    ConfigServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConfigServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("StarlingDoveService", "DeleteRemediationExceptions", {})
  .n("ConfigServiceClient", "DeleteRemediationExceptionsCommand")
  .f(void 0, void 0)
  .ser(se_DeleteRemediationExceptionsCommand)
  .de(de_DeleteRemediationExceptionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRemediationExceptionsRequest;
      output: DeleteRemediationExceptionsResponse;
    };
    sdk: {
      input: DeleteRemediationExceptionsCommandInput;
      output: DeleteRemediationExceptionsCommandOutput;
    };
  };
}
