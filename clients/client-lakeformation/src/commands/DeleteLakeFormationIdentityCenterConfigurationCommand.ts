// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import type {
  DeleteLakeFormationIdentityCenterConfigurationRequest,
  DeleteLakeFormationIdentityCenterConfigurationResponse,
} from "../models/models_0";
import { DeleteLakeFormationIdentityCenterConfiguration$ } from "../schemas/schemas_0";

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
 * // import type { LakeFormationClientConfig } from "@aws-sdk/client-lakeformation";
 * const config = {}; // type is LakeFormationClientConfig
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSLakeFormation", "DeleteLakeFormationIdentityCenterConfiguration", {})
  .n("LakeFormationClient", "DeleteLakeFormationIdentityCenterConfigurationCommand")
  .sc(DeleteLakeFormationIdentityCenterConfiguration$)
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
