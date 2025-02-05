// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import {
  DeleteLakeFormationIdentityCenterConfigurationRequest,
  DeleteLakeFormationIdentityCenterConfigurationResponse,
} from "../models/models_0";
import {
  de_DeleteLakeFormationIdentityCenterConfigurationCommand,
  se_DeleteLakeFormationIdentityCenterConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteLakeFormationIdentityCenterConfigurationCommand}.
 */
export interface DeleteLakeFormationIdentityCenterConfigurationCommandInput
  extends DeleteLakeFormationIdentityCenterConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteLakeFormationIdentityCenterConfigurationCommand}.
 */
export interface DeleteLakeFormationIdentityCenterConfigurationCommandOutput
  extends DeleteLakeFormationIdentityCenterConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Deletes an IAM Identity Center connection with Lake Formation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, DeleteLakeFormationIdentityCenterConfigurationCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, DeleteLakeFormationIdentityCenterConfigurationCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new LakeFormationClient(config);
 * const input = { // DeleteLakeFormationIdentityCenterConfigurationRequest
 *   CatalogId: "STRING_VALUE",
 * };
 * const command = new DeleteLakeFormationIdentityCenterConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteLakeFormationIdentityCenterConfigurationCommandInput - {@link DeleteLakeFormationIdentityCenterConfigurationCommandInput}
 * @returns {@link DeleteLakeFormationIdentityCenterConfigurationCommandOutput}
 * @see {@link DeleteLakeFormationIdentityCenterConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteLakeFormationIdentityCenterConfigurationCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Two processes are trying to modify a resource simultaneously.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link LakeFormationServiceException}
 * <p>Base exception class for all service exceptions from LakeFormation service.</p>
 *
 * @public
 */
export class DeleteLakeFormationIdentityCenterConfigurationCommand extends $Command
  .classBuilder<
    DeleteLakeFormationIdentityCenterConfigurationCommandInput,
    DeleteLakeFormationIdentityCenterConfigurationCommandOutput,
    LakeFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LakeFormationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSLakeFormation", "DeleteLakeFormationIdentityCenterConfiguration", {})
  .n("LakeFormationClient", "DeleteLakeFormationIdentityCenterConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteLakeFormationIdentityCenterConfigurationCommand)
  .de(de_DeleteLakeFormationIdentityCenterConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteLakeFormationIdentityCenterConfigurationRequest;
      output: {};
    };
    sdk: {
      input: DeleteLakeFormationIdentityCenterConfigurationCommandInput;
      output: DeleteLakeFormationIdentityCenterConfigurationCommandOutput;
    };
  };
}
