// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DescribeAttachedFilesConfigurationRequest,
  DescribeAttachedFilesConfigurationResponse,
} from "../models/models_1";
import { DescribeAttachedFilesConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAttachedFilesConfigurationCommand}.
 */
export interface DescribeAttachedFilesConfigurationCommandInput extends DescribeAttachedFilesConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAttachedFilesConfigurationCommand}.
 */
export interface DescribeAttachedFilesConfigurationCommandOutput extends DescribeAttachedFilesConfigurationResponse, __MetadataBearer {}

/**
 * <p>Describes the attached files configuration for the specified Amazon Connect instance and attachment scope.</p>
 *          <p>If a custom configuration exists for the specified attachment scope, the custom configuration is returned. If no custom configuration exists, the default configuration values for that attachment scope are returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DescribeAttachedFilesConfigurationCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DescribeAttachedFilesConfigurationCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // DescribeAttachedFilesConfigurationRequest
 *   InstanceId: "STRING_VALUE", // required
 *   AttachmentScope: "EMAIL" || "CHAT" || "CASE" || "TASK", // required
 * };
 * const command = new DescribeAttachedFilesConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAttachedFilesConfigurationResponse
 * //   AttachedFilesConfiguration: { // AttachedFilesConfiguration
 * //     InstanceId: "STRING_VALUE", // required
 * //     AttachmentScope: "EMAIL" || "CHAT" || "CASE" || "TASK", // required
 * //     MaximumSizeLimitInBytes: Number("long"),
 * //     ExtensionConfiguration: { // ExtensionConfiguration
 * //       AllowedExtensions: [ // AllowedExtensionsList // required
 * //         { // AllowedExtension
 * //           Extension: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //     LastModifiedTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAttachedFilesConfigurationCommandInput - {@link DescribeAttachedFilesConfigurationCommandInput}
 * @returns {@link DescribeAttachedFilesConfigurationCommandOutput}
 * @see {@link DescribeAttachedFilesConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeAttachedFilesConfigurationCommandOutput} for command's `response` shape.
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
export class DescribeAttachedFilesConfigurationCommand extends $Command
  .classBuilder<
    DescribeAttachedFilesConfigurationCommandInput,
    DescribeAttachedFilesConfigurationCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "DescribeAttachedFilesConfiguration", {})
  .n("ConnectClient", "DescribeAttachedFilesConfigurationCommand")
  .sc(DescribeAttachedFilesConfiguration$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAttachedFilesConfigurationRequest;
      output: DescribeAttachedFilesConfigurationResponse;
    };
    sdk: {
      input: DescribeAttachedFilesConfigurationCommandInput;
      output: DescribeAttachedFilesConfigurationCommandOutput;
    };
  };
}
