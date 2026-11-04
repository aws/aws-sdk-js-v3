// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { LifecycleConfigurationDescription, PutLifecycleConfigurationRequest } from "../models/models_0";
import { PutLifecycleConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Use this action to manage storage for your file system. A `LifecycleConfiguration` consists of one or more `LifecyclePolicy` objects that define the following:
 *
 * - **`TransitionToIA`** – When to move files in the file system from primary storage (Standard storage class) into the Infrequent Access (IA) storage.
 * - **`TransitionToArchive`** – When to move files in the file system from their current storage class (either IA or Standard storage) into the Archive storage.
 *
 *   File systems cannot transition into Archive storage before transitioning into IA storage. Therefore, TransitionToArchive must either not be set or must be later than TransitionToIA.
 *
 *   > **Note:** The Archive storage class is available only for file systems that use the Elastic throughput mode and the General Purpose performance mode.
 *
 * - **`TransitionToPrimaryStorageClass`** – Whether to move files in the file system back to primary storage (Standard storage class) after they are accessed in IA or Archive storage.
 *
 * For more information, see [Managing file system storage](https://docs.aws.amazon.com/efs/latest/ug/lifecycle-management-efs.html).
 *
 * Each Amazon EFS file system supports one lifecycle configuration, which applies to all files in the file system. If a `LifecycleConfiguration` object already exists for the specified file system, a `PutLifecycleConfiguration` call modifies the existing configuration. A `PutLifecycleConfiguration` call with an empty `LifecyclePolicies` array in the request body deletes any existing `LifecycleConfiguration`. In the request, specify the following:
 *
 * - The ID for the file system for which you are enabling, disabling, or modifying lifecycle management.
 * - A `LifecyclePolicies` array of `LifecyclePolicy` objects that define when to move files to IA storage, to Archive storage, and back to primary storage.
 *
 *   > **Note:** Amazon EFS requires that each `LifecyclePolicy` object have only have a single transition, so the `LifecyclePolicies` array needs to be structured with separate `LifecyclePolicy` objects. See the example requests in the following section for more information.
 *
 * This operation requires permissions for the `elasticfilesystem:PutLifecycleConfiguration` operation.
 *
 * To apply a `LifecycleConfiguration` object to an encrypted file system, you need the same Key Management Service permissions as when you created the encrypted file system.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, PutLifecycleConfigurationCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, PutLifecycleConfigurationCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * // import type { EFSClientConfig } from "@aws-sdk/client-efs";
 * const config = {}; // type is EFSClientConfig
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
 *
 * Returned if the request is malformed or contains an error such as an invalid parameter value or a missing required parameter.
 *
 * @throws {@link FileSystemNotFound} (client fault)
 *
 * Returned if the specified `FileSystemId` value doesn't exist in the requester's Amazon Web Services account.
 *
 * @throws {@link IncorrectFileSystemLifeCycleState} (client fault)
 *
 * Returned if the file system's lifecycle state is not "available".
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * Returned if an error occurred on the server side.
 *
 * @throws {@link EFSServiceException}
 *
 * Base exception class for all service exceptions from EFS service.
 *
 * @example Creates a new lifecycleconfiguration object for a file system
 * ```javascript
 * // This operation enables lifecycle management on a file system by creating a new LifecycleConfiguration object. A LifecycleConfiguration object defines when files in an Amazon EFS file system are automatically transitioned to the lower-cost EFS Infrequent Access (IA) storage class. A LifecycleConfiguration applies to all files in a file system.
 * const input = {
 *   FileSystemId: "fs-01234567",
 *   LifecyclePolicies: [
 *     {
 *       TransitionToIA: "AFTER_30_DAYS"
 *     }
 *   ]
 * };
 * const command = new PutLifecycleConfigurationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   LifecyclePolicies: [
 *     {
 *       TransitionToIA: "AFTER_30_DAYS"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class PutLifecycleConfigurationCommand extends command<PutLifecycleConfigurationCommandInput, PutLifecycleConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "PutLifecycleConfiguration",
  PutLifecycleConfiguration$
) {
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
