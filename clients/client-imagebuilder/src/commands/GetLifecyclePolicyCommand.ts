// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { GetLifecyclePolicyRequest, GetLifecyclePolicyResponse } from "../models/models_0";
import { GetLifecyclePolicy } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Get details for the specified image lifecycle policy.</p>
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
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>You have requested an action that that the service doesn't support.</p>
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
 *
 * @public
 */
export class GetLifecyclePolicyCommand extends $Command
  .classBuilder<
    GetLifecyclePolicyCommandInput,
    GetLifecyclePolicyCommandOutput,
    ImagebuilderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ImagebuilderClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("imagebuilder", "GetLifecyclePolicy", {})
  .n("ImagebuilderClient", "GetLifecyclePolicyCommand")
  .sc(GetLifecyclePolicy)
  .build() {
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
