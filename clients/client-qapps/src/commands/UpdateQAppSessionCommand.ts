// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateQAppSessionInput, UpdateQAppSessionOutput } from "../models/models_0";
import type { QAppsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QAppsClient";
import { UpdateQAppSession } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateQAppSessionCommand}.
 */
export interface UpdateQAppSessionCommandInput extends UpdateQAppSessionInput {}
/**
 * @public
 *
 * The output of {@link UpdateQAppSessionCommand}.
 */
export interface UpdateQAppSessionCommandOutput extends UpdateQAppSessionOutput, __MetadataBearer {}

/**
 * <p>Updates the session for a given Q App <code>sessionId</code>. This is only valid when at least one card of the session is in the <code>WAITING</code> state. Data for each <code>WAITING</code> card can be provided as input. If inputs are not provided, the call will be accepted but session will not move forward. Inputs for cards that are not in the <code>WAITING</code> status will be ignored.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QAppsClient, UpdateQAppSessionCommand } from "@aws-sdk/client-qapps"; // ES Modules import
 * // const { QAppsClient, UpdateQAppSessionCommand } = require("@aws-sdk/client-qapps"); // CommonJS import
 * // import type { QAppsClientConfig } from "@aws-sdk/client-qapps";
 * const config = {}; // type is QAppsClientConfig
 * const client = new QAppsClient(config);
 * const input = { // UpdateQAppSessionInput
 *   instanceId: "STRING_VALUE", // required
 *   sessionId: "STRING_VALUE", // required
 *   values: [ // CardValueList
 *     { // CardValue
 *       cardId: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *       submissionMutation: { // SubmissionMutation
 *         submissionId: "STRING_VALUE", // required
 *         mutationType: "edit" || "delete" || "add", // required
 *       },
 *     },
 *   ],
 * };
 * const command = new UpdateQAppSessionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateQAppSessionOutput
 * //   sessionId: "STRING_VALUE", // required
 * //   sessionArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateQAppSessionCommandInput - {@link UpdateQAppSessionCommandInput}
 * @returns {@link UpdateQAppSessionCommandOutput}
 * @see {@link UpdateQAppSessionCommandInput} for command's `input` shape.
 * @see {@link UpdateQAppSessionCommandOutput} for command's `response` shape.
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
 * @public
 */
export class UpdateQAppSessionCommand extends $Command
  .classBuilder<
    UpdateQAppSessionCommandInput,
    UpdateQAppSessionCommandOutput,
    QAppsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QAppsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QAppsService", "UpdateQAppSession", {})
  .n("QAppsClient", "UpdateQAppSessionCommand")
  .sc(UpdateQAppSession)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateQAppSessionInput;
      output: UpdateQAppSessionOutput;
    };
    sdk: {
      input: UpdateQAppSessionCommandInput;
      output: UpdateQAppSessionCommandOutput;
    };
  };
}
