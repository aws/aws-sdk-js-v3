// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { LifecycleConfigurationDescription, PutLifecycleConfigurationRequest } from "../models/models_0";
import { de_PutLifecycleConfigurationCommand, se_PutLifecycleConfigurationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutLifecycleConfigurationCommand}.
 */
export interface PutLifecycleConfigurationCommandInput extends PutLifecycleConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutLifecycleConfigurationCommand}.
 */
export interface PutLifecycleConfigurationCommandOutput extends LifecycleConfigurationDescription, __MetadataBearer {}

/**
 * <p>Use this action to manage storage for your file system. A
 *         <code>LifecycleConfiguration</code> consists of one or more <code>LifecyclePolicy</code>
 *       objects that define the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>
 *                      <code>TransitionToIA</code>
 *                   </b> –
 *           When to move files in the file system from primary storage (Standard storage class) into the Infrequent Access
 *         (IA) storage.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>
 *                      <code>TransitionToArchive</code>
 *                   </b> –
 *           When to move files in the file system from their current storage class (either IA or Standard storage) into the
 *          Archive storage.</p>
 *                <p>File systems cannot transition into Archive storage before transitioning into IA  storage. Therefore,
 *         TransitionToArchive must either not be set or must be later than TransitionToIA.</p>
 *                <note>
 *                   <p> The Archive storage class is available only for file systems that use the Elastic throughput mode
 * and the General Purpose performance mode. </p>
 *                </note>
 *             </li>
 *          </ul>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>
 *                      <code>TransitionToPrimaryStorageClass</code>
 *                   </b> –
 *           Whether to move files in the file system back to primary storage (Standard storage class) after they are accessed in IA
 *         or Archive storage.</p>
 *             </li>
 *          </ul>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/lifecycle-management-efs.html"> Managing file system
 *       storage</a>.</p>
 *          <p>Each Amazon EFS file system supports one lifecycle configuration, which applies to
 *       all files in the file system. If a <code>LifecycleConfiguration</code> object already exists
 *       for the specified file system, a <code>PutLifecycleConfiguration</code> call modifies the
 *       existing configuration. A <code>PutLifecycleConfiguration</code> call with an empty
 *         <code>LifecyclePolicies</code> array in the request body deletes any existing
 *         <code>LifecycleConfiguration</code>. In the request, specify the following: </p>
 *          <ul>
 *             <li>
 *                <p>The ID for the file system for which you are enabling, disabling, or modifying
 *           lifecycle management.</p>
 *             </li>
 *             <li>
 *                <p>A <code>LifecyclePolicies</code> array of <code>LifecyclePolicy</code> objects that
 *           define when to move files to IA storage, to Archive storage,
 *           and back to primary storage.</p>
 *                <note>
 *                   <p>Amazon EFS requires that each <code>LifecyclePolicy</code>
 *           object have only have a single transition, so the <code>LifecyclePolicies</code> array needs to be structured with separate
 *           <code>LifecyclePolicy</code> objects. See the example requests in the following section for more information.</p>
 *                </note>
 *             </li>
 *          </ul>
 *          <p>This operation requires permissions for the <code>elasticfilesystem:PutLifecycleConfiguration</code> operation.</p>
 *          <p>To apply a <code>LifecycleConfiguration</code> object to an encrypted file system, you
 *       need the same Key Management Service permissions as when you created the encrypted file system.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, PutLifecycleConfigurationCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, PutLifecycleConfigurationCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * const client = new EFSClient(config);
 * const input = { // PutLifecycleConfigurationRequest
 *   FileSystemId: "STRING_VALUE", // required
 *   LifecyclePolicies: [ // LifecyclePolicies // required
 *     { // LifecyclePolicy
 *       TransitionToIA: "AFTER_7_DAYS" || "AFTER_14_DAYS" || "AFTER_30_DAYS" || "AFTER_60_DAYS" || "AFTER_90_DAYS" || "AFTER_1_DAY" || "AFTER_180_DAYS" || "AFTER_270_DAYS" || "AFTER_365_DAYS",
 *       TransitionToPrimaryStorageClass: "AFTER_1_ACCESS",
 *       TransitionToArchive: "AFTER_1_DAY" || "AFTER_7_DAYS" || "AFTER_14_DAYS" || "AFTER_30_DAYS" || "AFTER_60_DAYS" || "AFTER_90_DAYS" || "AFTER_180_DAYS" || "AFTER_270_DAYS" || "AFTER_365_DAYS",
 *     },
 *   ],
 * };
 * const command = new PutLifecycleConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // LifecycleConfigurationDescription
 * //   LifecyclePolicies: [ // LifecyclePolicies
 * //     { // LifecyclePolicy
 * //       TransitionToIA: "AFTER_7_DAYS" || "AFTER_14_DAYS" || "AFTER_30_DAYS" || "AFTER_60_DAYS" || "AFTER_90_DAYS" || "AFTER_1_DAY" || "AFTER_180_DAYS" || "AFTER_270_DAYS" || "AFTER_365_DAYS",
 * //       TransitionToPrimaryStorageClass: "AFTER_1_ACCESS",
 * //       TransitionToArchive: "AFTER_1_DAY" || "AFTER_7_DAYS" || "AFTER_14_DAYS" || "AFTER_30_DAYS" || "AFTER_60_DAYS" || "AFTER_90_DAYS" || "AFTER_180_DAYS" || "AFTER_270_DAYS" || "AFTER_365_DAYS",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param PutLifecycleConfigurationCommandInput - {@link PutLifecycleConfigurationCommandInput}
 * @returns {@link PutLifecycleConfigurationCommandOutput}
 * @see {@link PutLifecycleConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutLifecycleConfigurationCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for EFSClient's `config` shape.
 *
 * @throws {@link BadRequest} (client fault)
 *  <p>Returned if the request is malformed or contains an error such as an invalid
 *             parameter value or a missing required parameter.</p>
 *
 * @throws {@link FileSystemNotFound} (client fault)
 *  <p>Returned if the specified <code>FileSystemId</code> value doesn't exist in the
 *             requester's Amazon Web Services account.</p>
 *
 * @throws {@link IncorrectFileSystemLifeCycleState} (client fault)
 *  <p>Returned if the file system's lifecycle state is not "available".</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Returned if an error occurred on the server side.</p>
 *
 * @throws {@link EFSServiceException}
 * <p>Base exception class for all service exceptions from EFS service.</p>
 *
 * @public
 * @example Creates a new lifecycleconfiguration object for a file system
 * ```javascript
 * // This operation enables lifecycle management on a file system by creating a new LifecycleConfiguration object. A LifecycleConfiguration object defines when files in an Amazon EFS file system are automatically transitioned to the lower-cost EFS Infrequent Access (IA) storage class. A LifecycleConfiguration applies to all files in a file system.
 * const input = {
 *   "FileSystemId": "fs-01234567",
 *   "LifecyclePolicies": [
 *     {
 *       "TransitionToIA": "AFTER_30_DAYS"
 *     }
 *   ]
 * };
 * const command = new PutLifecycleConfigurationCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "LifecyclePolicies": [
 *     {
 *       "TransitionToIA": "AFTER_30_DAYS"
 *     }
 *   ]
 * }
 * *\/
 * // example id: creates-a-new-lifecycleconfiguration-object-for-a-file-system-1551201594692
 * ```
 *
 */
export class PutLifecycleConfigurationCommand extends $Command
  .classBuilder<
    PutLifecycleConfigurationCommandInput,
    PutLifecycleConfigurationCommandOutput,
    EFSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EFSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MagnolioAPIService_v20150201", "PutLifecycleConfiguration", {})
  .n("EFSClient", "PutLifecycleConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_PutLifecycleConfigurationCommand)
  .de(de_PutLifecycleConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutLifecycleConfigurationRequest;
      output: LifecycleConfigurationDescription;
    };
    sdk: {
      input: PutLifecycleConfigurationCommandInput;
      output: PutLifecycleConfigurationCommandOutput;
    };
  };
}
