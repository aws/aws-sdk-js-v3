// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateAppVersionResourceRequest, CreateAppVersionResourceResponse } from "../models/models_0";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";
import { CreateAppVersionResource } from "../schemas/schemas_4_App";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAppVersionResourceCommand}.
 */
export interface CreateAppVersionResourceCommandInput extends CreateAppVersionResourceRequest {}
/**
 * @public
 *
 * The output of {@link CreateAppVersionResourceCommand}.
 */
export interface CreateAppVersionResourceCommandOutput extends CreateAppVersionResourceResponse, __MetadataBearer {}

/**
 * <p>Adds a resource to the Resilience Hub application and assigns it to the specified
 *       Application Components. If you specify a new Application Component, Resilience Hub will
 *       automatically create the Application Component.</p>
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
 * import { ResiliencehubClient, CreateAppVersionResourceCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, CreateAppVersionResourceCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * // import type { ResiliencehubClientConfig } from "@aws-sdk/client-resiliencehub";
 * const config = {}; // type is ResiliencehubClientConfig
 * const client = new ResiliencehubClient(config);
 * const input = { // CreateAppVersionResourceRequest
 *   appArn: "STRING_VALUE", // required
 *   resourceName: "STRING_VALUE",
 *   logicalResourceId: { // LogicalResourceId
 *     identifier: "STRING_VALUE", // required
 *     logicalStackName: "STRING_VALUE",
 *     resourceGroupName: "STRING_VALUE",
 *     terraformSourceName: "STRING_VALUE",
 *     eksSourceName: "STRING_VALUE",
 *   },
 *   physicalResourceId: "STRING_VALUE", // required
 *   awsRegion: "STRING_VALUE",
 *   awsAccountId: "STRING_VALUE",
 *   resourceType: "STRING_VALUE", // required
 *   appComponents: [ // AppComponentNameList // required
 *     "STRING_VALUE",
 *   ],
 *   additionalInfo: { // AdditionalInfoMap
 *     "<keys>": [ // AdditionalInfoValueList
 *       "STRING_VALUE",
 *     ],
 *   },
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateAppVersionResourceCommand(input);
 * const response = await client.send(command);
 * // { // CreateAppVersionResourceResponse
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
 * @param CreateAppVersionResourceCommandInput - {@link CreateAppVersionResourceCommandInput}
 * @returns {@link CreateAppVersionResourceCommandOutput}
 * @see {@link CreateAppVersionResourceCommandInput} for command's `input` shape.
 * @see {@link CreateAppVersionResourceCommandOutput} for command's `response` shape.
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
export class CreateAppVersionResourceCommand extends $Command
  .classBuilder<
    CreateAppVersionResourceCommandInput,
    CreateAppVersionResourceCommandOutput,
    ResiliencehubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResiliencehubClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsResilienceHub", "CreateAppVersionResource", {})
  .n("ResiliencehubClient", "CreateAppVersionResourceCommand")
  .sc(CreateAppVersionResource)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAppVersionResourceRequest;
      output: CreateAppVersionResourceResponse;
    };
    sdk: {
      input: CreateAppVersionResourceCommandInput;
      output: CreateAppVersionResourceCommandOutput;
    };
  };
}
