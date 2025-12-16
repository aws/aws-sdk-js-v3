// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateAppVersionResourceRequest, UpdateAppVersionResourceResponse } from "../models/models_0";
import type { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";
import { UpdateAppVersionResource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAppVersionResourceCommand}.
 */
export interface UpdateAppVersionResourceCommandInput extends UpdateAppVersionResourceRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAppVersionResourceCommand}.
 */
export interface UpdateAppVersionResourceCommandOutput extends UpdateAppVersionResourceResponse, __MetadataBearer {}

/**
 * <p>Updates the resource details in the Resilience Hub application.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>This action has no effect outside Resilience Hub.</p>
 *                </li>
 *                <li>
 *                   <p>This API updates the Resilience Hub application draft version. To use this
 *             resource for running resiliency assessments, you must publish the Resilience Hub
 *             application using the <code>PublishAppVersion</code> API.</p>
 *                </li>
 *                <li>
 *                   <p>To update application version with new <code>physicalResourceID</code>, you must
 *             call <code>ResolveAppVersionResources</code> API.</p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, UpdateAppVersionResourceCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, UpdateAppVersionResourceCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * // import type { ResiliencehubClientConfig } from "@aws-sdk/client-resiliencehub";
 * const config = {}; // type is ResiliencehubClientConfig
 * const client = new ResiliencehubClient(config);
 * const input = { // UpdateAppVersionResourceRequest
 *   appArn: "STRING_VALUE", // required
 *   resourceName: "STRING_VALUE",
 *   logicalResourceId: { // LogicalResourceId
 *     identifier: "STRING_VALUE", // required
 *     logicalStackName: "STRING_VALUE",
 *     resourceGroupName: "STRING_VALUE",
 *     terraformSourceName: "STRING_VALUE",
 *     eksSourceName: "STRING_VALUE",
 *   },
 *   physicalResourceId: "STRING_VALUE",
 *   awsRegion: "STRING_VALUE",
 *   awsAccountId: "STRING_VALUE",
 *   resourceType: "STRING_VALUE",
 *   appComponents: [ // AppComponentNameList
 *     "STRING_VALUE",
 *   ],
 *   additionalInfo: { // AdditionalInfoMap
 *     "<keys>": [ // AdditionalInfoValueList
 *       "STRING_VALUE",
 *     ],
 *   },
 *   excluded: true || false,
 * };
 * const command = new UpdateAppVersionResourceCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAppVersionResourceResponse
 * //   appArn: "STRING_VALUE", // required
 * //   appVersion: "STRING_VALUE", // required
 * //   physicalResource: { // PhysicalResource
 * //     resourceName: "STRING_VALUE",
 * //     logicalResourceId: { // LogicalResourceId
 * //       identifier: "STRING_VALUE", // required
 * //       logicalStackName: "STRING_VALUE",
 * //       resourceGroupName: "STRING_VALUE",
 * //       terraformSourceName: "STRING_VALUE",
 * //       eksSourceName: "STRING_VALUE",
 * //     },
 * //     physicalResourceId: { // PhysicalResourceId
 * //       identifier: "STRING_VALUE", // required
 * //       type: "Arn" || "Native", // required
 * //       awsRegion: "STRING_VALUE",
 * //       awsAccountId: "STRING_VALUE",
 * //     },
 * //     resourceType: "STRING_VALUE", // required
 * //     appComponents: [ // AppComponentList
 * //       { // AppComponent
 * //         name: "STRING_VALUE", // required
 * //         type: "STRING_VALUE", // required
 * //         id: "STRING_VALUE",
 * //         additionalInfo: { // AdditionalInfoMap
 * //           "<keys>": [ // AdditionalInfoValueList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //     ],
 * //     additionalInfo: {
 * //       "<keys>": [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     excluded: true || false,
 * //     sourceType: "AppTemplate" || "Discovered",
 * //     parentResourceName: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateAppVersionResourceCommandInput - {@link UpdateAppVersionResourceCommandInput}
 * @returns {@link UpdateAppVersionResourceCommandOutput}
 * @see {@link UpdateAppVersionResourceCommandInput} for command's `input` shape.
 * @see {@link UpdateAppVersionResourceCommandOutput} for command's `response` shape.
 * @see {@link ResiliencehubClientResolvedConfig | config} for ResiliencehubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation. The user or role that is
 *       making the request must have at least one IAM permissions policy attached that grants the
 *       required permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This exception occurs when a conflict with a previous successful write is detected. This generally occurs
 *       when the previous write did not have time to propagate to the host serving the current
 *       request. A retry (with appropriate backoff logic) is the recommended response to this
 *       exception.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Resilience Hub
 *       service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception occurs when the specified resource could not be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>This exception occurs when you have exceeded your service quota. To perform the requested action, remove some of the
 *       relevant resources, or use Service Quotas to request a service quota increase.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This exception occurs when you have exceeded the limit on the number of requests per second.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>This exception occurs when a request is not valid.</p>
 *
 * @throws {@link ResiliencehubServiceException}
 * <p>Base exception class for all service exceptions from Resiliencehub service.</p>
 *
 *
 * @public
 */
export class UpdateAppVersionResourceCommand extends $Command
  .classBuilder<
    UpdateAppVersionResourceCommandInput,
    UpdateAppVersionResourceCommandOutput,
    ResiliencehubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResiliencehubClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsResilienceHub", "UpdateAppVersionResource", {})
  .n("ResiliencehubClient", "UpdateAppVersionResourceCommand")
  .sc(UpdateAppVersionResource$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAppVersionResourceRequest;
      output: UpdateAppVersionResourceResponse;
    };
    sdk: {
      input: UpdateAppVersionResourceCommandInput;
      output: UpdateAppVersionResourceCommandOutput;
    };
  };
}
