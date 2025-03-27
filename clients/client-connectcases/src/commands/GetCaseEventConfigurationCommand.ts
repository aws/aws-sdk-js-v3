// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectCasesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectCasesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetCaseEventConfigurationRequest, GetCaseEventConfigurationResponse } from "../models/models_0";
import { de_GetCaseEventConfigurationCommand, se_GetCaseEventConfigurationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCaseEventConfigurationCommand}.
 */
export interface GetCaseEventConfigurationCommandInput extends GetCaseEventConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetCaseEventConfigurationCommand}.
 */
export interface GetCaseEventConfigurationCommandOutput extends GetCaseEventConfigurationResponse, __MetadataBearer {}

/**
 * <p>Returns the case event publishing configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCasesClient, GetCaseEventConfigurationCommand } from "@aws-sdk/client-connectcases"; // ES Modules import
 * // const { ConnectCasesClient, GetCaseEventConfigurationCommand } = require("@aws-sdk/client-connectcases"); // CommonJS import
 * const client = new ConnectCasesClient(config);
 * const input = { // GetCaseEventConfigurationRequest
 *   domainId: "STRING_VALUE", // required
 * };
 * const command = new GetCaseEventConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetCaseEventConfigurationResponse
 * //   eventBridge: { // EventBridgeConfiguration
 * //     enabled: true || false, // required
 * //     includedData: { // EventIncludedData
 * //       caseData: { // CaseEventIncludedData
 * //         fields: [ // FieldIdentifierList // required
 * //           { // FieldIdentifier
 * //             id: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //       relatedItemData: { // RelatedItemEventIncludedData
 * //         includeContent: true || false, // required
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetCaseEventConfigurationCommandInput - {@link GetCaseEventConfigurationCommandInput}
 * @returns {@link GetCaseEventConfigurationCommandOutput}
 * @see {@link GetCaseEventConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetCaseEventConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ConnectCasesClientResolvedConfig | config} for ConnectCasesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>We couldn't process your request because of an issue with the server. Try again
 *       later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>We couldn't find the requested resource. Check that your resources exists and were created
 *       in the same Amazon Web Services Region as your request, and try your request again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate has been exceeded for this API. Please try again after a few minutes.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. Check the syntax and try again.</p>
 *
 * @throws {@link ConnectCasesServiceException}
 * <p>Base exception class for all service exceptions from ConnectCases service.</p>
 *
 *
 * @public
 */
export class GetCaseEventConfigurationCommand extends $Command
  .classBuilder<
    GetCaseEventConfigurationCommandInput,
    GetCaseEventConfigurationCommandOutput,
    ConnectCasesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectCasesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectCases", "GetCaseEventConfiguration", {})
  .n("ConnectCasesClient", "GetCaseEventConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_GetCaseEventConfigurationCommand)
  .de(de_GetCaseEventConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCaseEventConfigurationRequest;
      output: GetCaseEventConfigurationResponse;
    };
    sdk: {
      input: GetCaseEventConfigurationCommandInput;
      output: GetCaseEventConfigurationCommandOutput;
    };
  };
}
