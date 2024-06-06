// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetRestoreTestingInferredMetadataInput, GetRestoreTestingInferredMetadataOutput } from "../models/models_0";
import {
  de_GetRestoreTestingInferredMetadataCommand,
  se_GetRestoreTestingInferredMetadataCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRestoreTestingInferredMetadataCommand}.
 */
export interface GetRestoreTestingInferredMetadataCommandInput extends GetRestoreTestingInferredMetadataInput {}
/**
 * @public
 *
 * The output of {@link GetRestoreTestingInferredMetadataCommand}.
 */
export interface GetRestoreTestingInferredMetadataCommandOutput
  extends GetRestoreTestingInferredMetadataOutput,
    __MetadataBearer {}

/**
 * <p>This request returns the minimal required set of metadata needed to
 *          start a restore job with secure default settings. <code>BackupVaultName</code>
 *          and <code>RecoveryPointArn</code> are required parameters.
 *          <code>BackupVaultAccountId</code> is an optional parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, GetRestoreTestingInferredMetadataCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, GetRestoreTestingInferredMetadataCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const input = { // GetRestoreTestingInferredMetadataInput
 *   BackupVaultAccountId: "STRING_VALUE",
 *   BackupVaultName: "STRING_VALUE", // required
 *   RecoveryPointArn: "STRING_VALUE", // required
 * };
 * const command = new GetRestoreTestingInferredMetadataCommand(input);
 * const response = await client.send(command);
 * // { // GetRestoreTestingInferredMetadataOutput
 * //   InferredMetadata: { // stringMap // required
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetRestoreTestingInferredMetadataCommandInput - {@link GetRestoreTestingInferredMetadataCommandInput}
 * @returns {@link GetRestoreTestingInferredMetadataCommandOutput}
 * @see {@link GetRestoreTestingInferredMetadataCommandInput} for command's `input` shape.
 * @see {@link GetRestoreTestingInferredMetadataCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *  <p>Indicates that a required parameter is missing.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource that is required for the action doesn't exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request failed due to a temporary failure of the server.</p>
 *
 * @throws {@link BackupServiceException}
 * <p>Base exception class for all service exceptions from Backup service.</p>
 *
 * @public
 */
export class GetRestoreTestingInferredMetadataCommand extends $Command
  .classBuilder<
    GetRestoreTestingInferredMetadataCommandInput,
    GetRestoreTestingInferredMetadataCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CryoControllerUserManager", "GetRestoreTestingInferredMetadata", {})
  .n("BackupClient", "GetRestoreTestingInferredMetadataCommand")
  .f(void 0, void 0)
  .ser(se_GetRestoreTestingInferredMetadataCommand)
  .de(de_GetRestoreTestingInferredMetadataCommand)
  .build() {}
