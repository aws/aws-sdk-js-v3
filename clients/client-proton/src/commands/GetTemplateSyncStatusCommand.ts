// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetTemplateSyncStatusInput, GetTemplateSyncStatusOutput } from "../models/models_0";
import { de_GetTemplateSyncStatusCommand, se_GetTemplateSyncStatusCommand } from "../protocols/Aws_json1_0";
import { ProtonClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ProtonClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTemplateSyncStatusCommand}.
 */
export interface GetTemplateSyncStatusCommandInput extends GetTemplateSyncStatusInput {}
/**
 * @public
 *
 * The output of {@link GetTemplateSyncStatusCommand}.
 */
export interface GetTemplateSyncStatusCommandOutput extends GetTemplateSyncStatusOutput, __MetadataBearer {}

/**
 * <p>Get the status of a template sync.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ProtonClient, GetTemplateSyncStatusCommand } from "@aws-sdk/client-proton"; // ES Modules import
 * // const { ProtonClient, GetTemplateSyncStatusCommand } = require("@aws-sdk/client-proton"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ProtonClient(config);
 * const input = { // GetTemplateSyncStatusInput
 *   templateName: "STRING_VALUE", // required
 *   templateType: "STRING_VALUE", // required
 *   templateVersion: "STRING_VALUE", // required
 * };
 * const command = new GetTemplateSyncStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetTemplateSyncStatusOutput
 * //   latestSync: { // ResourceSyncAttempt
 * //     initialRevision: { // Revision
 * //       repositoryName: "STRING_VALUE", // required
 * //       repositoryProvider: "STRING_VALUE", // required
 * //       sha: "STRING_VALUE", // required
 * //       directory: "STRING_VALUE", // required
 * //       branch: "STRING_VALUE", // required
 * //     },
 * //     targetRevision: {
 * //       repositoryName: "STRING_VALUE", // required
 * //       repositoryProvider: "STRING_VALUE", // required
 * //       sha: "STRING_VALUE", // required
 * //       directory: "STRING_VALUE", // required
 * //       branch: "STRING_VALUE", // required
 * //     },
 * //     target: "STRING_VALUE", // required
 * //     startedAt: new Date("TIMESTAMP"), // required
 * //     status: "STRING_VALUE", // required
 * //     events: [ // ResourceSyncEvents // required
 * //       { // ResourceSyncEvent
 * //         type: "STRING_VALUE", // required
 * //         externalId: "STRING_VALUE",
 * //         time: new Date("TIMESTAMP"), // required
 * //         event: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * //   latestSuccessfulSync: {
 * //     initialRevision: {
 * //       repositoryName: "STRING_VALUE", // required
 * //       repositoryProvider: "STRING_VALUE", // required
 * //       sha: "STRING_VALUE", // required
 * //       directory: "STRING_VALUE", // required
 * //       branch: "STRING_VALUE", // required
 * //     },
 * //     targetRevision: {
 * //       repositoryName: "STRING_VALUE", // required
 * //       repositoryProvider: "STRING_VALUE", // required
 * //       sha: "STRING_VALUE", // required
 * //       directory: "STRING_VALUE", // required
 * //       branch: "STRING_VALUE", // required
 * //     },
 * //     target: "STRING_VALUE", // required
 * //     startedAt: new Date("TIMESTAMP"), // required
 * //     status: "STRING_VALUE", // required
 * //     events: [ // required
 * //       {
 * //         type: "STRING_VALUE", // required
 * //         externalId: "STRING_VALUE",
 * //         time: new Date("TIMESTAMP"), // required
 * //         event: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * //   desiredState: {
 * //     repositoryName: "STRING_VALUE", // required
 * //     repositoryProvider: "STRING_VALUE", // required
 * //     sha: "STRING_VALUE", // required
 * //     directory: "STRING_VALUE", // required
 * //     branch: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTemplateSyncStatusCommandInput - {@link GetTemplateSyncStatusCommandInput}
 * @returns {@link GetTemplateSyncStatusCommandOutput}
 * @see {@link GetTemplateSyncStatusCommandInput} for command's `input` shape.
 * @see {@link GetTemplateSyncStatusCommandOutput} for command's `response` shape.
 * @see {@link ProtonClientResolvedConfig | config} for ProtonClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>There <i>isn't</i> sufficient access for performing this action.</p>
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
 * @public
 */
export class GetTemplateSyncStatusCommand extends $Command
  .classBuilder<
    GetTemplateSyncStatusCommandInput,
    GetTemplateSyncStatusCommandOutput,
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
  .s("AwsProton20200720", "GetTemplateSyncStatus", {})
  .n("ProtonClient", "GetTemplateSyncStatusCommand")
  .f(void 0, void 0)
  .ser(se_GetTemplateSyncStatusCommand)
  .de(de_GetTemplateSyncStatusCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTemplateSyncStatusInput;
      output: GetTemplateSyncStatusOutput;
    };
    sdk: {
      input: GetTemplateSyncStatusCommandInput;
      output: GetTemplateSyncStatusCommandOutput;
    };
  };
}
