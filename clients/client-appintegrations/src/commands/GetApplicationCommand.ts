// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppIntegrationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppIntegrationsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetApplicationRequest, GetApplicationResponse } from "../models/models_0";
import { de_GetApplicationCommand, se_GetApplicationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetApplicationCommand}.
 */
export interface GetApplicationCommandInput extends GetApplicationRequest {}
/**
 * @public
 *
 * The output of {@link GetApplicationCommand}.
 */
export interface GetApplicationCommandOutput extends GetApplicationResponse, __MetadataBearer {}

/**
 * <p>Get an Application resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppIntegrationsClient, GetApplicationCommand } from "@aws-sdk/client-appintegrations"; // ES Modules import
 * // const { AppIntegrationsClient, GetApplicationCommand } = require("@aws-sdk/client-appintegrations"); // CommonJS import
 * const client = new AppIntegrationsClient(config);
 * const input = { // GetApplicationRequest
 *   Arn: "STRING_VALUE", // required
 * };
 * const command = new GetApplicationCommand(input);
 * const response = await client.send(command);
 * // { // GetApplicationResponse
 * //   Arn: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Namespace: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   ApplicationSourceConfig: { // ApplicationSourceConfig
 * //     ExternalUrlConfig: { // ExternalUrlConfig
 * //       AccessUrl: "STRING_VALUE", // required
 * //       ApprovedOrigins: [ // ApplicationApprovedOrigins
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   },
 * //   Subscriptions: [ // SubscriptionList
 * //     { // Subscription
 * //       Event: "STRING_VALUE", // required
 * //       Description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Publications: [ // PublicationList
 * //     { // Publication
 * //       Event: "STRING_VALUE", // required
 * //       Schema: "STRING_VALUE", // required
 * //       Description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   CreatedTime: new Date("TIMESTAMP"),
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   Permissions: [ // PermissionList
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetApplicationCommandInput - {@link GetApplicationCommandInput}
 * @returns {@link GetApplicationCommandOutput}
 * @see {@link GetApplicationCommandInput} for command's `input` shape.
 * @see {@link GetApplicationCommandOutput} for command's `response` shape.
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
 * @example To get an application
 * ```javascript
 * // The following retrives an application.
 * const input = {
 *   Arn: "arn:aws:app-integrations:us-west-2:0123456789012:application/98542c53-e8ac-4570-9c85-c6552c8d9c5e"
 * };
 * const command = new GetApplicationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ApplicationSourceConfig: {
 *     ExternalUrlConfig: {
 *       AccessUrl: "https://example.com"
 *     }
 *   },
 *   Description: "My first application.",
 *   Name: "My Application",
 *   Namespace: "myapplication"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetApplicationCommand extends $Command
  .classBuilder<
    GetApplicationCommandInput,
    GetApplicationCommandOutput,
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
  .s("AmazonAppIntegrationService", "GetApplication", {})
  .n("AppIntegrationsClient", "GetApplicationCommand")
  .f(void 0, void 0)
  .ser(se_GetApplicationCommand)
  .de(de_GetApplicationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetApplicationRequest;
      output: GetApplicationResponse;
    };
    sdk: {
      input: GetApplicationCommandInput;
      output: GetApplicationCommandOutput;
    };
  };
}
