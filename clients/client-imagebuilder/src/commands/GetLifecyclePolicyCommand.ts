// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetLifecyclePolicyRequest, GetLifecyclePolicyResponse } from "../models/models_0";
import { GetLifecyclePolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetLifecyclePolicyCommand}.
 */
export interface GetLifecyclePolicyCommandInput extends GetLifecyclePolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetLifecyclePolicyCommand}.
 */
export interface GetLifecyclePolicyCommandOutput extends GetLifecyclePolicyResponse, __MetadataBearer {}

/**
 * <p>Retrieves details for the specified image lifecycle policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, GetLifecyclePolicyCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, GetLifecyclePolicyCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // GetLifecyclePolicyRequest
 *   lifecyclePolicyArn: "STRING_VALUE", // required
 * };
 * const command = new GetLifecyclePolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetLifecyclePolicyResponse
 * //   lifecyclePolicy: { // LifecyclePolicy
 * //     arn: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     status: "DISABLED" || "ENABLED",
 * //     executionRole: "STRING_VALUE",
 * //     resourceType: "AMI_IMAGE" || "CONTAINER_IMAGE",
 * //     policyDetails: [ // LifecyclePolicyDetails
 * //       { // LifecyclePolicyDetail
 * //         action: { // LifecyclePolicyDetailAction
 * //           type: "DELETE" || "DEPRECATE" || "DISABLE", // required
 * //           includeResources: { // LifecyclePolicyDetailActionIncludeResources
 * //             amis: true || false,
 * //             snapshots: true || false,
 * //             containers: true || false,
 * //           },
 * //         },
 * //         filter: { // LifecyclePolicyDetailFilter
 * //           type: "AGE" || "COUNT", // required
 * //           value: Number("int"), // required
 * //           unit: "DAYS" || "WEEKS" || "MONTHS" || "YEARS",
 * //           retainAtLeast: Number("int"),
 * //         },
 * //         exclusionRules: { // LifecyclePolicyDetailExclusionRules
 * //           tagMap: { // TagMap
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //           amis: { // LifecyclePolicyDetailExclusionRulesAmis
 * //             isPublic: true || false,
 * //             regions: [ // StringList
 * //               "STRING_VALUE",
 * //             ],
 * //             sharedAccounts: [ // AccountList
 * //               "STRING_VALUE",
 * //             ],
 * //             lastLaunched: { // LifecyclePolicyDetailExclusionRulesAmisLastLaunched
 * //               value: Number("int"), // required
 * //               unit: "DAYS" || "WEEKS" || "MONTHS" || "YEARS", // required
 * //             },
 * //             tagMap: {
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //           },
 * //         },
 * //       },
 * //     ],
 * //     resourceSelection: { // LifecyclePolicyResourceSelection
 * //       recipes: [ // LifecyclePolicyResourceSelectionRecipes
 * //         { // LifecyclePolicyResourceSelectionRecipe
 * //           name: "STRING_VALUE", // required
 * //           semanticVersion: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       tagMap: "<TagMap>",
 * //     },
 * //     dateCreated: new Date("TIMESTAMP"),
 * //     dateUpdated: new Date("TIMESTAMP"),
 * //     dateLastRun: new Date("TIMESTAMP"),
 * //     tags: "<TagMap>",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetLifecyclePolicyCommandInput - {@link GetLifecyclePolicyCommandInput}
 * @returns {@link GetLifecyclePolicyCommandOutput}
 * @see {@link GetLifecyclePolicyCommandInput} for command's `input` shape.
 * @see {@link GetLifecyclePolicyCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is malformed or otherwise invalid. Verify the request and try
 * 			again.</p>
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
 * @example Get the details of a lifecycle policy
 * ```javascript
 * // The following example retrieves the full definition of the specified lifecycle policy.
 * const input = {
 *   lifecyclePolicyArn: "arn:aws:imagebuilder:us-west-2:111122223333:lifecycle-policy/my-example-lifecycle-policy"
 * };
 * const command = new GetLifecyclePolicyCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   lifecyclePolicy: {
 *     arn: "arn:aws:imagebuilder:us-west-2:111122223333:lifecycle-policy/my-example-lifecycle-policy",
 *     dateCreated: "2026-09-09T19:34:38Z",
 *     description: "Deletes AMIs and snapshots for builds older than six months, keeping at least the five most recent",
 *     executionRole: "arn:aws:iam::111122223333:role/my-example-lifecycle-role",
 *     name: "my-example-lifecycle-policy",
 *     policyDetails: [
 *       {
 *         action: {
 *           includeResources: {
 *             amis: true,
 *             snapshots: true
 *           },
 *           type: "DELETE"
 *         },
 *         filter: {
 *           retainAtLeast: 5,
 *           type: "AGE",
 *           unit: "MONTHS",
 *           value: 6
 *         }
 *       }
 *     ],
 *     resourceSelection: {
 *       tagMap: {
 *         Environment: "my-example-environment"
 *       }
 *     },
 *     resourceType: "AMI_IMAGE",
 *     status: "ENABLED"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetLifecyclePolicyCommand extends command<GetLifecyclePolicyCommandInput, GetLifecyclePolicyCommandOutput>(
  _ep0,
  _mw0,
  "GetLifecyclePolicy",
  GetLifecyclePolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLifecyclePolicyRequest;
      output: GetLifecyclePolicyResponse;
    };
    sdk: {
      input: GetLifecyclePolicyCommandInput;
      output: GetLifecyclePolicyCommandOutput;
    };
  };
}
