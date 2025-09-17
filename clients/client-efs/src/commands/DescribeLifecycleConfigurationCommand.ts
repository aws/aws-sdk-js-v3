// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EFSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EFSClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeLifecycleConfigurationRequest, LifecycleConfigurationDescription } from "../models/models_0";
import {
  de_DescribeLifecycleConfigurationCommand,
  se_DescribeLifecycleConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeLifecycleConfigurationCommand}.
 */
export interface DescribeLifecycleConfigurationCommandInput extends DescribeLifecycleConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeLifecycleConfigurationCommand}.
 */
export interface DescribeLifecycleConfigurationCommandOutput
  extends LifecycleConfigurationDescription,
    __MetadataBearer {}

/**
 * <p>Returns the current <code>LifecycleConfiguration</code> object for the specified
 *       EFS file system. Lifecycle management uses the <code>LifecycleConfiguration</code>
 *       object to identify when to move files between storage classes. For a file system without a
 *         <code>LifecycleConfiguration</code> object, the call returns an empty array in the
 *       response.</p>
 *          <p>This operation requires permissions for the
 *         <code>elasticfilesystem:DescribeLifecycleConfiguration</code> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, DescribeLifecycleConfigurationCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, DescribeLifecycleConfigurationCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * // import type { EFSClientConfig } from "@aws-sdk/client-efs";
 * const config = {}; // type is EFSClientConfig
 * const client = new EFSClient(config);
 * const input = { // DescribeLifecycleConfigurationRequest
 *   FileSystemId: "STRING_VALUE", // required
 * };
 * const command = new DescribeLifecycleConfigurationCommand(input);
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
 * @param DescribeLifecycleConfigurationCommandInput - {@link DescribeLifecycleConfigurationCommandInput}
 * @returns {@link DescribeLifecycleConfigurationCommandOutput}
 * @see {@link DescribeLifecycleConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeLifecycleConfigurationCommandOutput} for command's `response` shape.
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
 * @throws {@link InternalServerError} (server fault)
 *  <p>Returned if an error occurred on the server side.</p>
 *
 * @throws {@link EFSServiceException}
 * <p>Base exception class for all service exceptions from EFS service.</p>
 *
 *
 * @example To describe the lifecycle configuration for a file system
 * ```javascript
 * // This operation describes a file system's LifecycleConfiguration. EFS lifecycle management uses the LifecycleConfiguration object to identify which files to move to the EFS Infrequent Access (IA) storage class.
 * const input = {
 *   FileSystemId: "fs-01234567"
 * };
 * const command = new DescribeLifecycleConfigurationCommand(input);
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
export class DescribeLifecycleConfigurationCommand extends $Command
  .classBuilder<
    DescribeLifecycleConfigurationCommandInput,
    DescribeLifecycleConfigurationCommandOutput,
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
  .s("MagnolioAPIService_v20150201", "DescribeLifecycleConfiguration", {})
  .n("EFSClient", "DescribeLifecycleConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_DescribeLifecycleConfigurationCommand)
  .de(de_DescribeLifecycleConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeLifecycleConfigurationRequest;
      output: LifecycleConfigurationDescription;
    };
    sdk: {
      input: DescribeLifecycleConfigurationCommandInput;
      output: DescribeLifecycleConfigurationCommandOutput;
    };
  };
}
