// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListAppVersionResourcesRequest, ListAppVersionResourcesResponse } from "../models/models_0";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";
import { ListAppVersionResources } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAppVersionResourcesCommand}.
 */
export interface ListAppVersionResourcesCommandInput extends ListAppVersionResourcesRequest {}
/**
 * @public
 *
 * The output of {@link ListAppVersionResourcesCommand}.
 */
export interface ListAppVersionResourcesCommandOutput extends ListAppVersionResourcesResponse, __MetadataBearer {}

/**
 * <p>Lists all the resources in an Resilience Hub application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, ListAppVersionResourcesCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, ListAppVersionResourcesCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * // import type { ResiliencehubClientConfig } from "@aws-sdk/client-resiliencehub";
 * const config = {}; // type is ResiliencehubClientConfig
 * const client = new ResiliencehubClient(config);
 * const input = { // ListAppVersionResourcesRequest
 *   appArn: "STRING_VALUE", // required
 *   appVersion: "STRING_VALUE", // required
 *   resolutionId: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAppVersionResourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListAppVersionResourcesResponse
 * //   physicalResources: [ // PhysicalResourceList // required
 * //     { // PhysicalResource
 * //       resourceName: "STRING_VALUE",
 * //       logicalResourceId: { // LogicalResourceId
 * //         identifier: "STRING_VALUE", // required
 * //         logicalStackName: "STRING_VALUE",
 * //         resourceGroupName: "STRING_VALUE",
 * //         terraformSourceName: "STRING_VALUE",
 * //         eksSourceName: "STRING_VALUE",
 * //       },
 * //       physicalResourceId: { // PhysicalResourceId
 * //         identifier: "STRING_VALUE", // required
 * //         type: "Arn" || "Native", // required
 * //         awsRegion: "STRING_VALUE",
 * //         awsAccountId: "STRING_VALUE",
 * //       },
 * //       resourceType: "STRING_VALUE", // required
 * //       appComponents: [ // AppComponentList
 * //         { // AppComponent
 * //           name: "STRING_VALUE", // required
 * //           type: "STRING_VALUE", // required
 * //           id: "STRING_VALUE",
 * //           additionalInfo: { // AdditionalInfoMap
 * //             "<keys>": [ // AdditionalInfoValueList
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         },
 * //       ],
 * //       additionalInfo: {
 * //         "<keys>": [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       excluded: true || false,
 * //       sourceType: "AppTemplate" || "Discovered",
 * //       parentResourceName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   resolutionId: "STRING_VALUE", // required
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAppVersionResourcesCommandInput - {@link ListAppVersionResourcesCommandInput}
 * @returns {@link ListAppVersionResourcesCommandOutput}
 * @see {@link ListAppVersionResourcesCommandInput} for command's `input` shape.
 * @see {@link ListAppVersionResourcesCommandOutput} for command's `response` shape.
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
export class ListAppVersionResourcesCommand extends $Command
  .classBuilder<
    ListAppVersionResourcesCommandInput,
    ListAppVersionResourcesCommandOutput,
    ResiliencehubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResiliencehubClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsResilienceHub", "ListAppVersionResources", {})
  .n("ResiliencehubClient", "ListAppVersionResourcesCommand")
  .sc(ListAppVersionResources)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAppVersionResourcesRequest;
      output: ListAppVersionResourcesResponse;
    };
    sdk: {
      input: ListAppVersionResourcesCommandInput;
      output: ListAppVersionResourcesCommandOutput;
    };
  };
}
