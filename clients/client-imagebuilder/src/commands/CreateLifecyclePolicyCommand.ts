// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateLifecyclePolicyRequest, CreateLifecyclePolicyResponse } from "../models/models_0";
import { CreateLifecyclePolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateLifecyclePolicyCommand}.
 */
export interface CreateLifecyclePolicyCommandInput extends CreateLifecyclePolicyRequest {}
/**
 * @public
 *
 * The output of {@link CreateLifecyclePolicyCommand}.
 */
export interface CreateLifecyclePolicyCommandOutput extends CreateLifecyclePolicyResponse, __MetadataBearer {}

/**
 * <p>Creates a lifecycle policy resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, CreateLifecyclePolicyCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, CreateLifecyclePolicyCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // CreateLifecyclePolicyRequest
 *   name: "STRING_VALUE", // required
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
 *   tags: "<TagMap>",
 *   clientToken: "STRING_VALUE", // required
 *   dryRun: true || false,
 * };
 * const command = new CreateLifecyclePolicyCommand(input);
 * const response = await client.send(command);
 * // { // CreateLifecyclePolicyResponse
 * //   clientToken: "STRING_VALUE",
 * //   lifecyclePolicyArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateLifecyclePolicyCommandInput - {@link CreateLifecyclePolicyCommandInput}
 * @returns {@link CreateLifecyclePolicyCommandOutput}
 * @see {@link CreateLifecyclePolicyCommandInput} for command's `input` shape.
 * @see {@link CreateLifecyclePolicyCommandOutput} for command's `response` shape.
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
 * @throws {@link DryRunOperationException} (client fault)
 *  <p>The dry run operation of the resource was successful, and no resources or mutations were actually performed due to the dry run flag in the request.</p>
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
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The resource that you are trying to create already exists.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The resource that you are trying to operate on is currently in use. Review the message
 * 			details and retry later.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An internal server error occurred while Image Builder processed the request.
 * 			Retrying the request may succeed.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have exceeded the number of permitted resources or operations for this service.
 * 			For service quotas, see <a href="https://docs.aws.amazon.com/general/latest/gr/imagebuilder.html#limits_imagebuilder">EC2 Image Builder endpoints and
 * 				quotas</a>.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is unable to process your request at this time.</p>
 *
 * @throws {@link ImagebuilderServiceException}
 * <p>Base exception class for all service exceptions from Imagebuilder service.</p>
 *
 *
 * @example Create a lifecycle policy
 * ```javascript
 * // The following example creates a lifecycle policy that deletes AMI-based images six months after they were created, selecting the images that match the specified resource tags.
 * const input = {
 *   clientToken: "a1b2c3d4-5678-90ab-cdef-EXAMPLE13579",
 *   executionRole: "arn:aws:iam::111122223333:role/my-example-lifecycle-role",
 *   name: "my-example-lifecycle-policy",
 *   policyDetails: [
 *     {
 *       action: {
 *         type: "DELETE"
 *       },
 *       filter: {
 *         type: "AGE",
 *         unit: "MONTHS",
 *         value: 6
 *       }
 *     }
 *   ],
 *   resourceSelection: {
 *     tagMap: {
 *       Environment: "test"
 *     }
 *   },
 *   resourceType: "AMI_IMAGE"
 * };
 * const command = new CreateLifecyclePolicyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   clientToken: "a1b2c3d4-5678-90ab-cdef-EXAMPLE13579",
 *   lifecyclePolicyArn: "arn:aws:imagebuilder:us-west-2:111122223333:lifecycle-policy/my-example-lifecycle-policy"
 * }
 * *\/
 * ```
 *
 * @example Create a lifecycle policy with exclusion rules
 * ```javascript
 * // The following example creates a lifecycle policy that deletes images created from the specified recipe version after six months. The policy excludes images whose AMIs launched an instance within the last 30 days or are tagged to be retained.
 * const input = {
 *   clientToken: "a1b2c3d4-5678-90ab-cdef-EXAMPLE43210",
 *   executionRole: "arn:aws:iam::111122223333:role/my-example-lifecycle-role",
 *   name: "my-example-lifecycle-policy",
 *   policyDetails: [
 *     {
 *       action: {
 *         type: "DELETE"
 *       },
 *       exclusionRules: {
 *         amis: {
 *           lastLaunched: {
 *             unit: "DAYS",
 *             value: 30
 *           },
 *           tagMap: {
 *             Retention: "keep"
 *           }
 *         }
 *       },
 *       filter: {
 *         type: "AGE",
 *         unit: "MONTHS",
 *         value: 6
 *       }
 *     }
 *   ],
 *   resourceSelection: {
 *     recipes: [
 *       {
 *         name: "my-example-recipe",
 *         semanticVersion: "1.0.0"
 *       }
 *     ]
 *   },
 *   resourceType: "AMI_IMAGE"
 * };
 * const command = new CreateLifecyclePolicyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   clientToken: "a1b2c3d4-5678-90ab-cdef-EXAMPLE43210",
 *   lifecyclePolicyArn: "arn:aws:imagebuilder:us-west-2:111122223333:lifecycle-policy/my-example-lifecycle-policy"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateLifecyclePolicyCommand extends command<CreateLifecyclePolicyCommandInput, CreateLifecyclePolicyCommandOutput>(
  _ep0,
  _mw0,
  "CreateLifecyclePolicy",
  CreateLifecyclePolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateLifecyclePolicyRequest;
      output: CreateLifecyclePolicyResponse;
    };
    sdk: {
      input: CreateLifecyclePolicyCommandInput;
      output: CreateLifecyclePolicyCommandOutput;
    };
  };
}
