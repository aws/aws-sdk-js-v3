// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateLifecyclePolicyRequest, UpdateLifecyclePolicyResponse } from "../models/models_0";
import { UpdateLifecyclePolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateLifecyclePolicyCommand}.
 */
export interface UpdateLifecyclePolicyCommandInput extends UpdateLifecyclePolicyRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLifecyclePolicyCommand}.
 */
export interface UpdateLifecyclePolicyCommandOutput extends UpdateLifecyclePolicyResponse, __MetadataBearer {}

/**
 * <p>Updates the specified lifecycle policy. The request replaces the existing
 * 			policy configuration rather than merging changes, so re-specify every setting
 * 			that you want to keep. The <code>resourceType</code> must match the existing
 * 			policy's value.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, UpdateLifecyclePolicyCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, UpdateLifecyclePolicyCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // UpdateLifecyclePolicyRequest
 *   lifecyclePolicyArn: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   status: "DISABLED" || "ENABLED",
 *   executionRole: "STRING_VALUE", // required
 *   resourceType: "AMI_IMAGE" || "CONTAINER_IMAGE", // required
 *   policyDetails: [ // LifecyclePolicyDetails // required
 *     { // LifecyclePolicyDetail
 *       action: { // LifecyclePolicyDetailAction
 *         type: "DELETE" || "DEPRECATE" || "DISABLE", // required
 *         includeResources: { // LifecyclePolicyDetailActionIncludeResources
 *           amis: true || false,
 *           snapshots: true || false,
 *           containers: true || false,
 *         },
 *       },
 *       filter: { // LifecyclePolicyDetailFilter
 *         type: "AGE" || "COUNT", // required
 *         value: Number("int"), // required
 *         unit: "DAYS" || "WEEKS" || "MONTHS" || "YEARS",
 *         retainAtLeast: Number("int"),
 *       },
 *       exclusionRules: { // LifecyclePolicyDetailExclusionRules
 *         tagMap: { // TagMap
 *           "<keys>": "STRING_VALUE",
 *         },
 *         amis: { // LifecyclePolicyDetailExclusionRulesAmis
 *           isPublic: true || false,
 *           regions: [ // StringList
 *             "STRING_VALUE",
 *           ],
 *           sharedAccounts: [ // AccountList
 *             "STRING_VALUE",
 *           ],
 *           lastLaunched: { // LifecyclePolicyDetailExclusionRulesAmisLastLaunched
 *             value: Number("int"), // required
 *             unit: "DAYS" || "WEEKS" || "MONTHS" || "YEARS", // required
 *           },
 *           tagMap: {
 *             "<keys>": "STRING_VALUE",
 *           },
 *         },
 *       },
 *     },
 *   ],
 *   resourceSelection: { // LifecyclePolicyResourceSelection
 *     recipes: [ // LifecyclePolicyResourceSelectionRecipes
 *       { // LifecyclePolicyResourceSelectionRecipe
 *         name: "STRING_VALUE", // required
 *         semanticVersion: "STRING_VALUE", // required
 *       },
 *     ],
 *     tagMap: "<TagMap>",
 *   },
 *   clientToken: "STRING_VALUE", // required
 * };
 * const command = new UpdateLifecyclePolicyCommand(input);
 * const response = await client.send(command);
 * // { // UpdateLifecyclePolicyResponse
 * //   lifecyclePolicyArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateLifecyclePolicyCommandInput - {@link UpdateLifecyclePolicyCommandInput}
 * @returns {@link UpdateLifecyclePolicyCommandOutput}
 * @see {@link UpdateLifecyclePolicyCommandInput} for command's `input` shape.
 * @see {@link UpdateLifecyclePolicyCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>You have specified a combination of parameters that isn't valid. For
 * 			example, two mutually exclusive parameters, or a parameter without its
 * 			required companion parameter. Review the error message for details.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is malformed or otherwise invalid. Verify the request and try
 * 			again.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The resource that you are trying to operate on is currently in use. Review the message
 * 			details and retry later.</p>
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
 * @example Update a lifecycle policy
 * ```javascript
 * // The following example updates a lifecycle policy to delete AMI images and their associated snapshots after 12 months, retaining the 3 most recent images.
 * const input = {
 *   clientToken: "a1b2c3d4-5678-90ab-cdef-EXAMPLEaaaaa",
 *   description: "Deletes AMI images and their snapshots after 12 months, retaining the 3 most recent",
 *   executionRole: "arn:aws:iam::111122223333:role/my-example-lifecycle-role",
 *   lifecyclePolicyArn: "arn:aws:imagebuilder:us-west-2:111122223333:lifecycle-policy/my-example-policy",
 *   policyDetails: [
 *     {
 *       action: {
 *         includeResources: {
 *           amis: true,
 *           snapshots: true
 *         },
 *         type: "DELETE"
 *       },
 *       filter: {
 *         retainAtLeast: 3,
 *         type: "AGE",
 *         unit: "MONTHS",
 *         value: 12
 *       }
 *     }
 *   ],
 *   resourceSelection: {
 *     tagMap: {
 *       environment: "production"
 *     }
 *   },
 *   resourceType: "AMI_IMAGE",
 *   status: "ENABLED"
 * };
 * const command = new UpdateLifecyclePolicyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   lifecyclePolicyArn: "arn:aws:imagebuilder:us-west-2:111122223333:lifecycle-policy/my-example-policy"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateLifecyclePolicyCommand extends command<UpdateLifecyclePolicyCommandInput, UpdateLifecyclePolicyCommandOutput>(
  _ep0,
  _mw0,
  "UpdateLifecyclePolicy",
  UpdateLifecyclePolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateLifecyclePolicyRequest;
      output: UpdateLifecyclePolicyResponse;
    };
    sdk: {
      input: UpdateLifecyclePolicyCommandInput;
      output: UpdateLifecyclePolicyCommandOutput;
    };
  };
}
