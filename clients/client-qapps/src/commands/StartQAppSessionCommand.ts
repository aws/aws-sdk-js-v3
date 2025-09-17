// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StartQAppSessionInput, StartQAppSessionOutput } from "../models/models_0";
import { de_StartQAppSessionCommand, se_StartQAppSessionCommand } from "../protocols/Aws_restJson1";
import { QAppsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QAppsClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartQAppSessionCommand}.
 */
export interface StartQAppSessionCommandInput extends StartQAppSessionInput {}
/**
 * @public
 *
 * The output of {@link StartQAppSessionCommand}.
 */
export interface StartQAppSessionCommandOutput extends StartQAppSessionOutput, __MetadataBearer {}

/**
 * <p>Starts a new session for an Amazon Q App, allowing inputs to be provided and the app to be run.</p> <note> <p>Each Q App session will be condensed into a single conversation in the web experience.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QAppsClient, StartQAppSessionCommand } from "@aws-sdk/client-qapps"; // ES Modules import
 * // const { QAppsClient, StartQAppSessionCommand } = require("@aws-sdk/client-qapps"); // CommonJS import
 * // import type { QAppsClientConfig } from "@aws-sdk/client-qapps";
 * const config = {}; // type is QAppsClientConfig
 * const client = new QAppsClient(config);
 * const input = { // StartQAppSessionInput
 *   instanceId: "STRING_VALUE", // required
 *   appId: "STRING_VALUE", // required
 *   appVersion: Number("int"), // required
 *   initialValues: [ // CardValueList
 *     { // CardValue
 *       cardId: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *       submissionMutation: { // SubmissionMutation
 *         submissionId: "STRING_VALUE", // required
 *         mutationType: "edit" || "delete" || "add", // required
 *       },
 *     },
 *   ],
 *   sessionId: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new StartQAppSessionCommand(input);
 * const response = await client.send(command);
 * // { // StartQAppSessionOutput
 * //   sessionId: "STRING_VALUE", // required
 * //   sessionArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param StartQAppSessionCommandInput - {@link StartQAppSessionCommandInput}
 * @returns {@link StartQAppSessionCommandOutput}
 * @see {@link StartQAppSessionCommandInput} for command's `input` shape.
 * @see {@link StartQAppSessionCommandOutput} for command's `response` shape.
 * @see {@link QAppsClientResolvedConfig | config} for QAppsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The client is not authorized to perform the requested operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal service error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The requested operation could not be completed because it would exceed the service's quota or limit.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The requested operation could not be completed because too many requests were sent at once. Wait a bit and try again later.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The client is not authenticated or authorized to perform the requested operation.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link QAppsServiceException}
 * <p>Base exception class for all service exceptions from QApps service.</p>
 *
 *
 * @example Start a session for an Amazon Q App using version 1, passing in initial values for one card
 * ```javascript
 * //
 * const input = {
 *   appId: "65e7dce7-226a-47f9-b689-22850becef89",
 *   appVersion: 1,
 *   initialValues: [
 *     {
 *       cardId: "6fb5b404-3b7b-48a4-8a8b-56406922a606",
 *       value: "What is the circumference of Earth?"
 *     }
 *   ],
 *   instanceId: "4cc5e4c2-d2a2-4188-a114-9ca125b4aedc"
 * };
 * const command = new StartQAppSessionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   sessionArn: "arn:aws:qapps:us-west-2:0123456789012:application/a929ecd6-5765-4ec7-bd3e-2ca90098b18e/qapp/65e7dce7-226a-47f9-b689-22850becef89/session/1fca878e-64c5-4dc4-b1d9-c93effed4e82",
 *   sessionId: "1fca878e-64c5-4dc4-b1d9-c93effed4e82"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class StartQAppSessionCommand extends $Command
  .classBuilder<
    StartQAppSessionCommandInput,
    StartQAppSessionCommandOutput,
    QAppsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QAppsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("QAppsService", "StartQAppSession", {})
  .n("QAppsClient", "StartQAppSessionCommand")
  .f(void 0, void 0)
  .ser(se_StartQAppSessionCommand)
  .de(de_StartQAppSessionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartQAppSessionInput;
      output: StartQAppSessionOutput;
    };
    sdk: {
      input: StartQAppSessionCommandInput;
      output: StartQAppSessionCommandOutput;
    };
  };
}
