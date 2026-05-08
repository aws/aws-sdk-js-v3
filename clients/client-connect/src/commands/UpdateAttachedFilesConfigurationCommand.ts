// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  UpdateAttachedFilesConfigurationRequest,
  UpdateAttachedFilesConfigurationResponse,
} from "../models/models_3";
import { UpdateAttachedFilesConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAttachedFilesConfigurationCommand}.
 */
export interface UpdateAttachedFilesConfigurationCommandInput extends UpdateAttachedFilesConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAttachedFilesConfigurationCommand}.
 */
export interface UpdateAttachedFilesConfigurationCommandOutput extends UpdateAttachedFilesConfigurationResponse, __MetadataBearer {}

/**
 * <p>Updates the attached files configuration for the specified Amazon Connect instance and attachment scope.</p>
 *          <p>If no instance-specific configuration exists, this operation creates one. Partial updates are supported—only specified fields are updated, while unspecified fields retain their current values.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateAttachedFilesConfigurationCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateAttachedFilesConfigurationCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // UpdateAttachedFilesConfigurationRequest
 *   InstanceId: "STRING_VALUE", // required
 *   AttachmentScope: "EMAIL" || "CHAT" || "CASE" || "TASK", // required
 *   MaximumSizeLimitInBytes: Number("long"),
 *   ExtensionConfiguration: { // ExtensionConfiguration
 *     AllowedExtensions: [ // AllowedExtensionsList // required
 *       { // AllowedExtension
 *         Extension: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 * };
 * const command = new UpdateAttachedFilesConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAttachedFilesConfigurationResponse
 * //   InstanceId: "STRING_VALUE", // required
 * //   AttachmentScope: "EMAIL" || "CHAT" || "CASE" || "TASK", // required
 * //   MaximumSizeLimitInBytes: Number("long"),
 * //   ExtensionConfiguration: { // ExtensionConfiguration
 * //     AllowedExtensions: [ // AllowedExtensionsList // required
 * //       { // AllowedExtension
 * //         Extension: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UpdateAttachedFilesConfigurationCommandInput - {@link UpdateAttachedFilesConfigurationCommandInput}
 * @returns {@link UpdateAttachedFilesConfigurationCommandOutput}
 * @see {@link UpdateAttachedFilesConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateAttachedFilesConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class UpdateAttachedFilesConfigurationCommand extends $Command
  .classBuilder<
    UpdateAttachedFilesConfigurationCommandInput,
    UpdateAttachedFilesConfigurationCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "UpdateAttachedFilesConfiguration", {})
  .n("ConnectClient", "UpdateAttachedFilesConfigurationCommand")
  .sc(UpdateAttachedFilesConfiguration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAttachedFilesConfigurationRequest;
      output: UpdateAttachedFilesConfigurationResponse;
    };
    sdk: {
      input: UpdateAttachedFilesConfigurationCommandInput;
      output: UpdateAttachedFilesConfigurationCommandOutput;
    };
  };
}
