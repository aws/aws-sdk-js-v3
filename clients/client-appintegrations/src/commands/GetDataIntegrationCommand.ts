// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppIntegrationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppIntegrationsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetDataIntegrationRequest, GetDataIntegrationResponse } from "../models/models_0";
import { de_GetDataIntegrationCommand, se_GetDataIntegrationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDataIntegrationCommand}.
 */
export interface GetDataIntegrationCommandInput extends GetDataIntegrationRequest {}
/**
 * @public
 *
 * The output of {@link GetDataIntegrationCommand}.
 */
export interface GetDataIntegrationCommandOutput extends GetDataIntegrationResponse, __MetadataBearer {}

/**
 * <p>Returns information about the DataIntegration.</p>
 *          <note>
 *             <p>You cannot create a DataIntegration association for a DataIntegration that has been previously associated.
 * Use a different DataIntegration, or recreate the DataIntegration using the
 * <a href="https://docs.aws.amazon.com/appintegrations/latest/APIReference/API_CreateDataIntegration.html">CreateDataIntegration</a> API.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppIntegrationsClient, GetDataIntegrationCommand } from "@aws-sdk/client-appintegrations"; // ES Modules import
 * // const { AppIntegrationsClient, GetDataIntegrationCommand } = require("@aws-sdk/client-appintegrations"); // CommonJS import
 * // import type { AppIntegrationsClientConfig } from "@aws-sdk/client-appintegrations";
 * const config = {}; // type is AppIntegrationsClientConfig
 * const client = new AppIntegrationsClient(config);
 * const input = { // GetDataIntegrationRequest
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new GetDataIntegrationCommand(input);
 * const response = await client.send(command);
 * // { // GetDataIntegrationResponse
 * //   Arn: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   KmsKey: "STRING_VALUE",
 * //   SourceURI: "STRING_VALUE",
 * //   ScheduleConfiguration: { // ScheduleConfiguration
 * //     FirstExecutionFrom: "STRING_VALUE",
 * //     Object: "STRING_VALUE",
 * //     ScheduleExpression: "STRING_VALUE", // required
 * //   },
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   FileConfiguration: { // FileConfiguration
 * //     Folders: [ // FolderList // required
 * //       "STRING_VALUE",
 * //     ],
 * //     Filters: { // FieldsMap
 * //       "<keys>": [ // FieldsList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   },
 * //   ObjectConfiguration: { // ObjectConfiguration
 * //     "<keys>": {
 * //       "<keys>": [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetDataIntegrationCommandInput - {@link GetDataIntegrationCommandInput}
 * @returns {@link GetDataIntegrationCommandOutput}
 * @see {@link GetDataIntegrationCommandInput} for command's `input` shape.
 * @see {@link GetDataIntegrationCommandOutput} for command's `response` shape.
 * @see {@link AppIntegrationsClientResolvedConfig | config} for AppIntegrationsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>Request processing failed due to an error or failure with the service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link AppIntegrationsServiceException}
 * <p>Base exception class for all service exceptions from AppIntegrations service.</p>
 *
 *
 * @public
 */
export class GetDataIntegrationCommand extends $Command
  .classBuilder<
    GetDataIntegrationCommandInput,
    GetDataIntegrationCommandOutput,
    AppIntegrationsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppIntegrationsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonAppIntegrationService", "GetDataIntegration", {})
  .n("AppIntegrationsClient", "GetDataIntegrationCommand")
  .f(void 0, void 0)
  .ser(se_GetDataIntegrationCommand)
  .de(de_GetDataIntegrationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDataIntegrationRequest;
      output: GetDataIntegrationResponse;
    };
    sdk: {
      input: GetDataIntegrationCommandInput;
      output: GetDataIntegrationCommandOutput;
    };
  };
}
