// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { StartResourceStateUpdateRequest, StartResourceStateUpdateResponse } from "../models/models_0";
import { de_StartResourceStateUpdateCommand, se_StartResourceStateUpdateCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartResourceStateUpdateCommand}.
 */
export interface StartResourceStateUpdateCommandInput extends StartResourceStateUpdateRequest {}
/**
 * @public
 *
 * The output of {@link StartResourceStateUpdateCommand}.
 */
export interface StartResourceStateUpdateCommandOutput extends StartResourceStateUpdateResponse, __MetadataBearer {}

/**
 * <p>Begin asynchronous resource state update for lifecycle changes to the
 * 			specified image resources.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, StartResourceStateUpdateCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, StartResourceStateUpdateCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ImagebuilderClient(config);
 * const input = { // StartResourceStateUpdateRequest
 *   resourceArn: "STRING_VALUE", // required
 *   state: { // ResourceState
 *     status: "AVAILABLE" || "DELETED" || "DEPRECATED" || "DISABLED",
 *   },
 *   executionRole: "STRING_VALUE",
 *   includeResources: { // ResourceStateUpdateIncludeResources
 *     amis: true || false,
 *     snapshots: true || false,
 *     containers: true || false,
 *   },
 *   exclusionRules: { // ResourceStateUpdateExclusionRules
 *     amis: { // LifecyclePolicyDetailExclusionRulesAmis
 *       isPublic: true || false,
 *       regions: [ // StringList
 *         "STRING_VALUE",
 *       ],
 *       sharedAccounts: [ // AccountList
 *         "STRING_VALUE",
 *       ],
 *       lastLaunched: { // LifecyclePolicyDetailExclusionRulesAmisLastLaunched
 *         value: Number("int"), // required
 *         unit: "DAYS" || "WEEKS" || "MONTHS" || "YEARS", // required
 *       },
 *       tagMap: { // TagMap
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   },
 *   updateAt: new Date("TIMESTAMP"),
 *   clientToken: "STRING_VALUE", // required
 * };
 * const command = new StartResourceStateUpdateCommand(input);
 * const response = await client.send(command);
 * // { // StartResourceStateUpdateResponse
 * //   lifecycleExecutionId: "STRING_VALUE",
 * //   resourceArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartResourceStateUpdateCommandInput - {@link StartResourceStateUpdateCommandInput}
 * @returns {@link StartResourceStateUpdateCommandOutput}
 * @see {@link StartResourceStateUpdateCommandInput} for command's `input` shape.
 * @see {@link StartResourceStateUpdateCommandOutput} for command's `response` shape.
 * @see {@link ImagebuilderClientResolvedConfig | config} for ImagebuilderClient's `config` shape.
 *
 * @throws {@link CallRateLimitExceededException} (client fault)
 *  <p>You have exceeded the permitted request rate for the specific operation.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action, such as using an action or
 * 			resource on behalf of a user that doesn't have permissions to use the action or
 * 			resource, or specifying an invalid resource identifier.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>You are not authorized to perform the requested operation.</p>
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *  <p>You have specified a client token for an operation using parameter values that differ
 * 			from a previous request that used the same client token.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>You have requested an action that that the service doesn't support.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The resource that you are trying to operate on is currently in use. Review the message
 * 			details and retry later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>At least one of the resources referenced by your request does not exist.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>This exception is thrown when the service encounters an unrecoverable
 * 			exception.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unable to process your request at this time.</p>
 *
 * @throws {@link ImagebuilderServiceException}
 * <p>Base exception class for all service exceptions from Imagebuilder service.</p>
 *
 * @public
 */
export class StartResourceStateUpdateCommand extends $Command
  .classBuilder<
    StartResourceStateUpdateCommandInput,
    StartResourceStateUpdateCommandOutput,
    ImagebuilderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ImagebuilderClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("imagebuilder", "StartResourceStateUpdate", {})
  .n("ImagebuilderClient", "StartResourceStateUpdateCommand")
  .f(void 0, void 0)
  .ser(se_StartResourceStateUpdateCommand)
  .de(de_StartResourceStateUpdateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartResourceStateUpdateRequest;
      output: StartResourceStateUpdateResponse;
    };
    sdk: {
      input: StartResourceStateUpdateCommandInput;
      output: StartResourceStateUpdateCommandOutput;
    };
  };
}
