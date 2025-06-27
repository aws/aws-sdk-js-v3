// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateSessionRequest, UpdateSessionResponse } from "../models/models_0";
import { de_UpdateSessionCommand, se_UpdateSessionCommand } from "../protocols/Aws_restJson1";
import { QConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QConnectClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateSessionCommand}.
 */
export interface UpdateSessionCommandInput extends UpdateSessionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSessionCommand}.
 */
export interface UpdateSessionCommandOutput extends UpdateSessionResponse, __MetadataBearer {}

/**
 * <p>Updates a session. A session is a contextual container used for generating recommendations. Amazon Connect updates the existing Amazon Q in Connect session for each contact on which Amazon Q in Connect is enabled.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, UpdateSessionCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, UpdateSessionCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * const client = new QConnectClient(config);
 * const input = { // UpdateSessionRequest
 *   assistantId: "STRING_VALUE", // required
 *   sessionId: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   tagFilter: { // TagFilter Union: only one key present
 *     tagCondition: { // TagCondition
 *       key: "STRING_VALUE", // required
 *       value: "STRING_VALUE",
 *     },
 *     andConditions: [ // AndConditions
 *       {
 *         key: "STRING_VALUE", // required
 *         value: "STRING_VALUE",
 *       },
 *     ],
 *     orConditions: [ // OrConditions
 *       { // OrCondition Union: only one key present
 *         andConditions: [
 *           "<TagCondition>",
 *         ],
 *         tagCondition: "<TagCondition>",
 *       },
 *     ],
 *   },
 *   aiAgentConfiguration: { // AIAgentConfigurationMap
 *     "<keys>": { // AIAgentConfigurationData
 *       aiAgentId: "STRING_VALUE", // required
 *     },
 *   },
 * };
 * const command = new UpdateSessionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSessionResponse
 * //   session: { // SessionData
 * //     sessionArn: "STRING_VALUE", // required
 * //     sessionId: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     description: "STRING_VALUE",
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     integrationConfiguration: { // SessionIntegrationConfiguration
 * //       topicIntegrationArn: "STRING_VALUE",
 * //     },
 * //     tagFilter: { // TagFilter Union: only one key present
 * //       tagCondition: { // TagCondition
 * //         key: "STRING_VALUE", // required
 * //         value: "STRING_VALUE",
 * //       },
 * //       andConditions: [ // AndConditions
 * //         {
 * //           key: "STRING_VALUE", // required
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       orConditions: [ // OrConditions
 * //         { // OrCondition Union: only one key present
 * //           andConditions: [
 * //             "<TagCondition>",
 * //           ],
 * //           tagCondition: "<TagCondition>",
 * //         },
 * //       ],
 * //     },
 * //     aiAgentConfiguration: { // AIAgentConfigurationMap
 * //       "<keys>": { // AIAgentConfigurationData
 * //         aiAgentId: "STRING_VALUE", // required
 * //       },
 * //     },
 * //     origin: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateSessionCommandInput - {@link UpdateSessionCommandInput}
 * @returns {@link UpdateSessionCommandOutput}
 * @see {@link UpdateSessionCommandInput} for command's `input` shape.
 * @see {@link UpdateSessionCommandOutput} for command's `response` shape.
 * @see {@link QConnectClientResolvedConfig | config} for QConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by a service.</p>
 *
 * @throws {@link QConnectServiceException}
 * <p>Base exception class for all service exceptions from QConnect service.</p>
 *
 *
 * @public
 */
export class UpdateSessionCommand extends $Command
  .classBuilder<
    UpdateSessionCommandInput,
    UpdateSessionCommandOutput,
    QConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WisdomService", "UpdateSession", {})
  .n("QConnectClient", "UpdateSessionCommand")
  .f(void 0, void 0)
  .ser(se_UpdateSessionCommand)
  .de(de_UpdateSessionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSessionRequest;
      output: UpdateSessionResponse;
    };
    sdk: {
      input: UpdateSessionCommandInput;
      output: UpdateSessionCommandOutput;
    };
  };
}
