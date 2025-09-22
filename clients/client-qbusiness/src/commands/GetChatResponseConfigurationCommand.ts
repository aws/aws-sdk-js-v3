// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetChatResponseConfigurationRequest, GetChatResponseConfigurationResponse } from "../models/models_1";
import { QBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QBusinessClient";
import { GetChatResponseConfiguration } from "../schemas/schemas_1_Response";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetChatResponseConfigurationCommand}.
 */
export interface GetChatResponseConfigurationCommandInput extends GetChatResponseConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetChatResponseConfigurationCommand}.
 */
export interface GetChatResponseConfigurationCommandOutput
  extends GetChatResponseConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves detailed information about a specific chat response configuration from an Amazon Q Business application. This operation returns the complete configuration settings and metadata.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QBusinessClient, GetChatResponseConfigurationCommand } from "@aws-sdk/client-qbusiness"; // ES Modules import
 * // const { QBusinessClient, GetChatResponseConfigurationCommand } = require("@aws-sdk/client-qbusiness"); // CommonJS import
 * // import type { QBusinessClientConfig } from "@aws-sdk/client-qbusiness";
 * const config = {}; // type is QBusinessClientConfig
 * const client = new QBusinessClient(config);
 * const input = { // GetChatResponseConfigurationRequest
 *   applicationId: "STRING_VALUE", // required
 *   chatResponseConfigurationId: "STRING_VALUE", // required
 * };
 * const command = new GetChatResponseConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetChatResponseConfigurationResponse
 * //   chatResponseConfigurationId: "STRING_VALUE",
 * //   chatResponseConfigurationArn: "STRING_VALUE",
 * //   displayName: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   inUseConfiguration: { // ChatResponseConfigurationDetail
 * //     responseConfigurations: { // ResponseConfigurations
 * //       "<keys>": { // ResponseConfiguration
 * //         instructionCollection: { // InstructionCollection
 * //           responseLength: "STRING_VALUE",
 * //           targetAudience: "STRING_VALUE",
 * //           perspective: "STRING_VALUE",
 * //           outputStyle: "STRING_VALUE",
 * //           identity: "STRING_VALUE",
 * //           tone: "STRING_VALUE",
 * //           customInstructions: "STRING_VALUE",
 * //           examples: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //     responseConfigurationSummary: "STRING_VALUE",
 * //     status: "CREATING" || "UPDATING" || "FAILED" || "ACTIVE",
 * //     error: { // ErrorDetail
 * //       errorMessage: "STRING_VALUE",
 * //       errorCode: "InternalError" || "InvalidRequest" || "ResourceInactive" || "ResourceNotFound",
 * //     },
 * //     updatedAt: new Date("TIMESTAMP"),
 * //   },
 * //   lastUpdateConfiguration: {
 * //     responseConfigurations: {
 * //       "<keys>": {
 * //         instructionCollection: {
 * //           responseLength: "STRING_VALUE",
 * //           targetAudience: "STRING_VALUE",
 * //           perspective: "STRING_VALUE",
 * //           outputStyle: "STRING_VALUE",
 * //           identity: "STRING_VALUE",
 * //           tone: "STRING_VALUE",
 * //           customInstructions: "STRING_VALUE",
 * //           examples: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //     responseConfigurationSummary: "STRING_VALUE",
 * //     status: "CREATING" || "UPDATING" || "FAILED" || "ACTIVE",
 * //     error: {
 * //       errorMessage: "STRING_VALUE",
 * //       errorCode: "InternalError" || "InvalidRequest" || "ResourceInactive" || "ResourceNotFound",
 * //     },
 * //     updatedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetChatResponseConfigurationCommandInput - {@link GetChatResponseConfigurationCommandInput}
 * @returns {@link GetChatResponseConfigurationCommandOutput}
 * @see {@link GetChatResponseConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetChatResponseConfigurationCommandOutput} for command's `response` shape.
 * @see {@link QBusinessClientResolvedConfig | config} for QBusinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have access to perform this action. Make sure you have the required permission policies and user accounts and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An issue occurred with the internal server used for your Amazon Q Business service. Wait some minutes and try again, or contact <a href="http://aws.amazon.com/contact-us/">Support</a> for help.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The application or plugin resource you want to use doesn’t exist. Make sure you have provided the correct resource and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to throttling. Reduce the number of requests and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input doesn't meet the constraints set by the Amazon Q Business service. Provide the correct input and try again.</p>
 *
 * @throws {@link QBusinessServiceException}
 * <p>Base exception class for all service exceptions from QBusiness service.</p>
 *
 *
 * @public
 */
export class GetChatResponseConfigurationCommand extends $Command
  .classBuilder<
    GetChatResponseConfigurationCommandInput,
    GetChatResponseConfigurationCommandOutput,
    QBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QBusinessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ExpertQ", "GetChatResponseConfiguration", {})
  .n("QBusinessClient", "GetChatResponseConfigurationCommand")
  .sc(GetChatResponseConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetChatResponseConfigurationRequest;
      output: GetChatResponseConfigurationResponse;
    };
    sdk: {
      input: GetChatResponseConfigurationCommandInput;
      output: GetChatResponseConfigurationCommandOutput;
    };
  };
}
