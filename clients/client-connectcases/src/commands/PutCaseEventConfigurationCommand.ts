// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectCasesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectCasesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutCaseEventConfigurationRequest, PutCaseEventConfigurationResponse } from "../models/models_0";
import { de_PutCaseEventConfigurationCommand, se_PutCaseEventConfigurationCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutCaseEventConfigurationCommand}.
 */
export interface PutCaseEventConfigurationCommandInput extends PutCaseEventConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link PutCaseEventConfigurationCommand}.
 */
export interface PutCaseEventConfigurationCommandOutput extends PutCaseEventConfigurationResponse, __MetadataBearer {}

/**
 * <p>Adds case event publishing configuration. For a complete list of fields you can add to the
 *       event message, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/case-fields.html">Create case fields</a> in the
 *           <i>Amazon Connect Administrator Guide</i>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCasesClient, PutCaseEventConfigurationCommand } from "@aws-sdk/client-connectcases"; // ES Modules import
 * // const { ConnectCasesClient, PutCaseEventConfigurationCommand } = require("@aws-sdk/client-connectcases"); // CommonJS import
 * const client = new ConnectCasesClient(config);
 * const input = { // PutCaseEventConfigurationRequest
 *   domainId: "STRING_VALUE", // required
 *   eventBridge: { // EventBridgeConfiguration
 *     enabled: true || false, // required
 *     includedData: { // EventIncludedData
 *       caseData: { // CaseEventIncludedData
 *         fields: [ // FieldIdentifierList // required
 *           { // FieldIdentifier
 *             id: "STRING_VALUE", // required
 *           },
 *         ],
 *       },
 *       relatedItemData: { // RelatedItemEventIncludedData
 *         includeContent: true || false, // required
 *       },
 *     },
 *   },
 * };
 * const command = new PutCaseEventConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutCaseEventConfigurationCommandInput - {@link PutCaseEventConfigurationCommandInput}
 * @returns {@link PutCaseEventConfigurationCommandOutput}
 * @see {@link PutCaseEventConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutCaseEventConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ConnectCasesClientResolvedConfig | config} for ConnectCasesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested operation would cause a conflict with the current state of a service
 *       resource associated with the request. Resolve the conflict before retrying this request. See
 *       the accompanying error message for details.</p>
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
export class PutCaseEventConfigurationCommand extends $Command
  .classBuilder<
    PutCaseEventConfigurationCommandInput,
    PutCaseEventConfigurationCommandOutput,
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
  .s("AmazonConnectCases", "PutCaseEventConfiguration", {})
  .n("ConnectCasesClient", "PutCaseEventConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_PutCaseEventConfigurationCommand)
  .de(de_PutCaseEventConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutCaseEventConfigurationRequest;
      output: {};
    };
    sdk: {
      input: PutCaseEventConfigurationCommandInput;
      output: PutCaseEventConfigurationCommandOutput;
    };
  };
}
