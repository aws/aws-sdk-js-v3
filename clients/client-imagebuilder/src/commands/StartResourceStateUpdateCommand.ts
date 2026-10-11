// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartResourceStateUpdateRequest, StartResourceStateUpdateResponse } from "../models/models_0";
import { StartResourceStateUpdate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * <p>Begins an ad-hoc state change for the specified image build version.
 * 			This is a one-time operation - if you schedule the update, it runs only
 * 			once. If the
 * 			request includes underlying resources, or schedules the update far enough in
 * 			the future, Image Builder runs the update as an asynchronous lifecycle execution and
 * 			returns its identifier. Otherwise, for target states other than
 * 			<code>DELETED</code>, the state change applies immediately. If a request
 * 			that starts a lifecycle execution arrives while the image already has one in
 * 			progress, Image Builder rejects it.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, StartResourceStateUpdateCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, StartResourceStateUpdateCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
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
 *  <p>You have exceeded the permitted request rate for the Amazon EC2 APIs that Image Builder
 * 			calls on your behalf. Retry with an increasing or variable delay between
 * 			requests.</p>
 *
 * @throws {@link ClientException} (client fault)
 *  <p>A generic client error. This error usually indicates that the request
 * 			failed a validation check, such as when a downstream service rejects a
 * 			configured value.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>You are not authorized to perform the requested operation.</p>
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *  <p>You have specified a client token for an operation using parameter values that differ
 * 			from a previous request that used the same client token.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is malformed or otherwise invalid. Verify the request and try
 * 			again.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The resource that you are trying to operate on is currently in use. Review the message
 * 			details and retry later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>At least one of the resources referenced by your request does not exist.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An internal server error occurred while Image Builder processed the request.
 * 			Retrying the request may succeed.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unable to process your request at this time.</p>
 *
 * @throws {@link ImagebuilderServiceException}
 * <p>Base exception class for all service exceptions from Imagebuilder service.</p>
 *
 *
 * @example Schedule an image build version for deprecation
 * ```javascript
 * // The following example schedules the specified image build version and its AMI to move to the DEPRECATED state at the requested future time. It returns the ID of the lifecycle execution that applies the update.
 * const input = {
 *   clientToken: "a1b2c3d4-5678-90ab-cdef-EXAMPLE24680",
 *   executionRole: "arn:aws:iam::111122223333:role/my-example-state-update-role",
 *   includeResources: {
 *     amis: true
 *   },
 *   resourceArn: "arn:aws:imagebuilder:us-west-2:111122223333:image/my-example-recipe/1.0.0/1",
 *   state: {
 *     status: "DEPRECATED"
 *   },
 *   updateAt: "2026-09-11T21:20:00Z"
 * };
 * const command = new StartResourceStateUpdateCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   lifecycleExecutionId: "lce-401aefc3-a829-46f6-8fc2-91497988a503",
 *   resourceArn: "arn:aws:imagebuilder:us-west-2:111122223333:image/my-example-recipe/1.0.0/1"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class StartResourceStateUpdateCommand extends command<StartResourceStateUpdateCommandInput, StartResourceStateUpdateCommandOutput>(
  _ep0,
  _mw0,
  "StartResourceStateUpdate",
  StartResourceStateUpdate$
) {
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
