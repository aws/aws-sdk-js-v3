// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteRemediationExceptionsRequest, DeleteRemediationExceptionsResponse } from "../models/models_0";
import { DeleteRemediationExceptions } from "../schemas/schemas_0";

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
 * // import type { ConfigServiceClientConfig } from "@aws-sdk/client-config-service";
 * const config = {}; // type is ConfigServiceClientConfig
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("StarlingDoveService", "DeleteRemediationExceptions", {})
  .n("ConfigServiceClient", "DeleteRemediationExceptionsCommand")
  .sc(DeleteRemediationExceptions)
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
