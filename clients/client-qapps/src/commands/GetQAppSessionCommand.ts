// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetQAppSessionInput, GetQAppSessionOutput } from "../models/models_0";
import { QAppsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QAppsClient";
import { GetQAppSession } from "../schemas/schemas_3_App";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetQAppSessionCommand}.
 */
export interface GetQAppSessionCommandInput extends GetQAppSessionInput {}
/**
 * @public
 *
 * The output of {@link GetQAppSessionCommand}.
 */
export interface GetQAppSessionCommandOutput extends GetQAppSessionOutput, __MetadataBearer {}

/**
 * <p>Retrieves the current state and results for an active session of an Amazon Q App.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QAppsClient, GetQAppSessionCommand } from "@aws-sdk/client-qapps"; // ES Modules import
 * // const { QAppsClient, GetQAppSessionCommand } = require("@aws-sdk/client-qapps"); // CommonJS import
 * // import type { QAppsClientConfig } from "@aws-sdk/client-qapps";
 * const config = {}; // type is QAppsClientConfig
 * const client = new QAppsClient(config);
 * const input = { // GetQAppSessionInput
 *   instanceId: "STRING_VALUE", // required
 *   sessionId: "STRING_VALUE", // required
 * };
 * const command = new GetQAppSessionCommand(input);
 * const response = await client.send(command);
 * // { // GetQAppSessionOutput
 * //   sessionId: "STRING_VALUE", // required
 * //   sessionArn: "STRING_VALUE", // required
 * //   sessionName: "STRING_VALUE",
 * //   appVersion: Number("int"),
 * //   latestPublishedAppVersion: Number("int"),
 * //   status: "IN_PROGRESS" || "WAITING" || "COMPLETED" || "ERROR", // required
 * //   cardStatus: { // CardStatusMap // required
 * //     "<keys>": { // CardStatus
 * //       currentState: "IN_PROGRESS" || "WAITING" || "COMPLETED" || "ERROR", // required
 * //       currentValue: "STRING_VALUE", // required
 * //       submissions: [ // SubmissionList
 * //         { // Submission
 * //           value: "DOCUMENT_VALUE",
 * //           submissionId: "STRING_VALUE",
 * //           timestamp: new Date("TIMESTAMP"),
 * //         },
 * //       ],
 * //     },
 * //   },
 * //   userIsHost: true || false,
 * // };
 *
 * ```
 *
 * @param GetQAppSessionCommandInput - {@link GetQAppSessionCommandInput}
 * @returns {@link GetQAppSessionCommandOutput}
 * @see {@link GetQAppSessionCommandInput} for command's `input` shape.
 * @see {@link GetQAppSessionCommandOutput} for command's `response` shape.
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
 * @example Retrieves an existing session for an Amazon Q App
 * ```javascript
 * //
 * const input = {
 *   instanceId: "288ae830-1df2-4871-b6c0-4314d74dadef",
 *   sessionId: "1fca878e-64c5-4dc4-b1d9-c93effed4e82"
 * };
 * const command = new GetQAppSessionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   cardStatus: {
 *     1e6caeac-b481-45ff-a082-8b9a4a0b72e8: {
 *       currentState: "COMPLETED",
 *       currentValue: `Based on the responses, the most popular color is red, with 1 vote from the user "user1".`
 *     },
 *     6fb5b404-3b7b-48a4-8a8b-56406922a606: {
 *       currentState: "COMPLETED",
 *       currentValue: "",
 *       submissions: [
 *         {
 *           submissionId: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
 *           timestamp: "2023-06-15T14:30:45Z",
 *           value: {
 *             18cee4cb-253e-4f87-9154-849fbb98e482: "user1",
 *             d52030f9-6c4b-47a9-a946-377f632c77cc: "red"
 *           }
 *         }
 *       ]
 *     }
 *   },
 *   sessionArn: "arn:aws:qapps:us-west-2:0123456789012:application/a929ecd6-5765-4ec7-bd3e-2ca90098b18e/qapp/65e7dce7-226a-47f9-b689-22850becef89/session/1fca878e-64c5-4dc4-b1d9-c93effed4e82",
 *   sessionId: "1fca878e-64c5-4dc4-b1d9-c93effed4e82",
 *   status: "COMPLETED"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetQAppSessionCommand extends $Command
  .classBuilder<
    GetQAppSessionCommandInput,
    GetQAppSessionCommandOutput,
    QAppsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QAppsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QAppsService", "GetQAppSession", {})
  .n("QAppsClient", "GetQAppSessionCommand")
  .sc(GetQAppSession)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetQAppSessionInput;
      output: GetQAppSessionOutput;
    };
    sdk: {
      input: GetQAppSessionCommandInput;
      output: GetQAppSessionCommandOutput;
    };
  };
}
