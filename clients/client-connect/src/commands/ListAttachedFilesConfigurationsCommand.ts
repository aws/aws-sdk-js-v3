// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  ListAttachedFilesConfigurationsRequest,
  ListAttachedFilesConfigurationsResponse,
} from "../models/models_2";
import { ListAttachedFilesConfigurations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAttachedFilesConfigurationsCommand}.
 */
export interface ListAttachedFilesConfigurationsCommandInput extends ListAttachedFilesConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListAttachedFilesConfigurationsCommand}.
 */
export interface ListAttachedFilesConfigurationsCommandOutput extends ListAttachedFilesConfigurationsResponse, __MetadataBearer {}

/**
 * <p>Provides summary information about the attached files configurations for the specified Amazon Connect instance.</p>
 *          <p>This API returns effective configurations (custom overrides or defaults) for each attachment scope. If no custom configuration exists for a scope, the default configuration values are returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, ListAttachedFilesConfigurationsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, ListAttachedFilesConfigurationsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // ListAttachedFilesConfigurationsRequest
 *   InstanceId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListAttachedFilesConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListAttachedFilesConfigurationsResponse
 * //   AttachedFilesConfigurations: [ // AttachedFilesConfigurationSummaryList
 * //     { // AttachedFilesConfigurationSummary
 * //       InstanceId: "STRING_VALUE", // required
 * //       AttachmentScope: "EMAIL" || "CHAT" || "CASE" || "TASK", // required
 * //       MaximumSizeLimitInBytes: Number("long"),
 * //       ExtensionConfiguration: { // ExtensionConfiguration
 * //         AllowedExtensions: [ // AllowedExtensionsList // required
 * //           { // AllowedExtension
 * //             Extension: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAttachedFilesConfigurationsCommandInput - {@link ListAttachedFilesConfigurationsCommandInput}
 * @returns {@link ListAttachedFilesConfigurationsCommandOutput}
 * @see {@link ListAttachedFilesConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListAttachedFilesConfigurationsCommandOutput} for command's `response` shape.
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
export class ListAttachedFilesConfigurationsCommand extends $Command
  .classBuilder<
    ListAttachedFilesConfigurationsCommandInput,
    ListAttachedFilesConfigurationsCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "ListAttachedFilesConfigurations", {})
  .n("ConnectClient", "ListAttachedFilesConfigurationsCommand")
  .sc(ListAttachedFilesConfigurations$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAttachedFilesConfigurationsRequest;
      output: ListAttachedFilesConfigurationsResponse;
    };
    sdk: {
      input: ListAttachedFilesConfigurationsCommandInput;
      output: ListAttachedFilesConfigurationsCommandOutput;
    };
  };
}
