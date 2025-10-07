// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateServiceSyncBlockerInput, UpdateServiceSyncBlockerOutput } from "../models/models_0";
import { de_UpdateServiceSyncBlockerCommand, se_UpdateServiceSyncBlockerCommand } from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateServiceSyncBlockerCommand}.
 */
export interface UpdateServiceSyncBlockerCommandInput extends UpdateServiceSyncBlockerInput {}
/**
 * @public
 *
 * The output of {@link UpdateServiceSyncBlockerCommand}.
 */
export interface UpdateServiceSyncBlockerCommandOutput extends UpdateServiceSyncBlockerOutput, __MetadataBearer {}

/**
 * <p>Update the service sync blocker by resolving it.</p>
 *
 * @deprecated AWS Proton is not accepting new customers.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, UpdateServiceSyncBlockerCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, UpdateServiceSyncBlockerCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * // import type { ProtonClientConfig } from "@aws-sdk/client-proton";
 * const config = {}; // type is ProtonClientConfig
 * const client = new ProtonClient(config);
 * const input = { // UpdateServiceSyncBlockerInput
 *   id: "STRING_VALUE", // required
 *   resolvedReason: "STRING_VALUE", // required
 * };
 * const command = new UpdateServiceSyncBlockerCommand(input);
 * const response = await client.send(command);
 * // { // UpdateServiceSyncBlockerOutput
 * //   serviceName: "STRING_VALUE", // required
 * //   serviceInstanceName: "STRING_VALUE",
 * //   serviceSyncBlocker: { // SyncBlocker
 * //     id: "STRING_VALUE", // required
 * //     type: "STRING_VALUE", // required
 * //     status: "STRING_VALUE", // required
 * //     createdReason: "STRING_VALUE", // required
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     contexts: [ // SyncBlockerContexts
 * //       { // SyncBlockerContext
 * //         key: "STRING_VALUE", // required
 * //         value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     resolvedReason: "STRING_VALUE",
 * //     resolvedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateServiceSyncBlockerCommandInput - {@link UpdateServiceSyncBlockerCommandInput}
 * @returns {@link UpdateServiceSyncBlockerCommandOutput}
 * @see {@link UpdateServiceSyncBlockerCommandInput} for command's `input` shape.
 * @see {@link UpdateServiceSyncBlockerCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>There <i>isn't</i> sufficient access for performing this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request <i>couldn't</i> be made due to a conflicting operation or resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request failed to register with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource <i>wasn't</i> found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input is invalid or an out-of-range value was supplied for the input parameter.</p>
 *
 * @throws {@link ProtonServiceException}
 * <p>Base exception class for all service exceptions from Proton service.</p>
 *
 *
 * @public
 */
export class UpdateServiceSyncBlockerCommand extends $Command
  .classBuilder<
    UpdateServiceSyncBlockerCommandInput,
    UpdateServiceSyncBlockerCommandOutput,
    ProtonClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ProtonClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsProton20200720", "UpdateServiceSyncBlocker", {})
  .n("ProtonClient", "UpdateServiceSyncBlockerCommand")
  .f(void 0, void 0)
  .ser(se_UpdateServiceSyncBlockerCommand)
  .de(de_UpdateServiceSyncBlockerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateServiceSyncBlockerInput;
      output: UpdateServiceSyncBlockerOutput;
    };
    sdk: {
      input: UpdateServiceSyncBlockerCommandInput;
      output: UpdateServiceSyncBlockerCommandOutput;
    };
  };
}
