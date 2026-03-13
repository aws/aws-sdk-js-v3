// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MgnClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MgnClient";
import type {
  StartNetworkMigrationCodeGenerationRequest,
  StartNetworkMigrationCodeGenerationResponse,
} from "../models/models_0";
import { StartNetworkMigrationCodeGeneration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartNetworkMigrationCodeGenerationCommand}.
 */
export interface StartNetworkMigrationCodeGenerationCommandInput extends StartNetworkMigrationCodeGenerationRequest {}
/**
 * @public
 *
 * The output of {@link StartNetworkMigrationCodeGenerationCommand}.
 */
export interface StartNetworkMigrationCodeGenerationCommandOutput extends StartNetworkMigrationCodeGenerationResponse, __MetadataBearer {}

/**
 * <p>Starts a code generation job to convert network migration mappings into infrastructure-as-code templates.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MgnClient, StartNetworkMigrationCodeGenerationCommand } from "@aws-sdk/client-mgn"; // ES Modules import
 * // const { MgnClient, StartNetworkMigrationCodeGenerationCommand } = require("@aws-sdk/client-mgn"); // CommonJS import
 * // import type { MgnClientConfig } from "@aws-sdk/client-mgn";
 * const config = {}; // type is MgnClientConfig
 * const client = new MgnClient(config);
 * const input = { // StartNetworkMigrationCodeGenerationRequest
 *   networkMigrationExecutionID: "STRING_VALUE", // required
 *   networkMigrationDefinitionID: "STRING_VALUE", // required
 *   codeGenerationOutputFormatTypes: [ // CodeGenerationOutputFormatTypes
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new StartNetworkMigrationCodeGenerationCommand(input);
 * const response = await client.send(command);
 * // { // StartNetworkMigrationCodeGenerationResponse
 * //   jobID: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartNetworkMigrationCodeGenerationCommandInput - {@link StartNetworkMigrationCodeGenerationCommandInput}
 * @returns {@link StartNetworkMigrationCodeGenerationCommandOutput}
 * @see {@link StartNetworkMigrationCodeGenerationCommandInput} for command's `input` shape.
 * @see {@link StartNetworkMigrationCodeGenerationCommandOutput} for command's `response` shape.
 * @see {@link MgnClientResolvedConfig | config} for MgnClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Operating denied due to a file permission or access check error.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the target resource.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found exception.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request could not be completed because its exceeded the service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Reached throttling quota exception.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validate exception.</p>
 *
 * @throws {@link MgnServiceException}
 * <p>Base exception class for all service exceptions from Mgn service.</p>
 *
 *
 * @example Sample StartNetworkMigrationCodeGeneration call
 * ```javascript
 * //
 * const input = {
 *   networkMigrationDefinitionID: "nmd-01234567891234567",
 *   networkMigrationExecutionID: "01234567-abcd-abcd-abcd-0123456789ab"
 * };
 * const command = new StartNetworkMigrationCodeGenerationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   jobID: "01234567-abcd-abcd-efab-0123456789ab"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class StartNetworkMigrationCodeGenerationCommand extends $Command
  .classBuilder<
    StartNetworkMigrationCodeGenerationCommandInput,
    StartNetworkMigrationCodeGenerationCommandOutput,
    MgnClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MgnClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ApplicationMigrationService", "StartNetworkMigrationCodeGeneration", {})
  .n("MgnClient", "StartNetworkMigrationCodeGenerationCommand")
  .sc(StartNetworkMigrationCodeGeneration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartNetworkMigrationCodeGenerationRequest;
      output: StartNetworkMigrationCodeGenerationResponse;
    };
    sdk: {
      input: StartNetworkMigrationCodeGenerationCommandInput;
      output: StartNetworkMigrationCodeGenerationCommandOutput;
    };
  };
}
