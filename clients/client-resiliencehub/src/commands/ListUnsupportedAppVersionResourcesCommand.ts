// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  ListUnsupportedAppVersionResourcesRequest,
  ListUnsupportedAppVersionResourcesResponse,
} from "../models/models_0";
import type { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";
import { ListUnsupportedAppVersionResources$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListUnsupportedAppVersionResourcesCommand}.
 */
export interface ListUnsupportedAppVersionResourcesCommandInput extends ListUnsupportedAppVersionResourcesRequest {}
/**
 * @public
 *
 * The output of {@link ListUnsupportedAppVersionResourcesCommand}.
 */
export interface ListUnsupportedAppVersionResourcesCommandOutput
  extends ListUnsupportedAppVersionResourcesResponse,
    __MetadataBearer {}

/**
 * <p>Lists the resources that are not currently supported in Resilience Hub. An
 *       unsupported resource is a resource that exists in the object that was used to create an app,
 *       but is not supported by Resilience Hub.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, ListUnsupportedAppVersionResourcesCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, ListUnsupportedAppVersionResourcesCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * // import type { ResiliencehubClientConfig } from "@aws-sdk/client-resiliencehub";
 * const config = {}; // type is ResiliencehubClientConfig
 * const client = new ResiliencehubClient(config);
 * const input = { // ListUnsupportedAppVersionResourcesRequest
 *   appArn: "STRING_VALUE", // required
 *   appVersion: "STRING_VALUE", // required
 *   resolutionId: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListUnsupportedAppVersionResourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListUnsupportedAppVersionResourcesResponse
 * //   unsupportedResources: [ // UnsupportedResourceList // required
 * //     { // UnsupportedResource
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
 * //       unsupportedResourceStatus: "STRING_VALUE",
 * //     },
 * //   ],
 * //   resolutionId: "STRING_VALUE", // required
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListUnsupportedAppVersionResourcesCommandInput - {@link ListUnsupportedAppVersionResourcesCommandInput}
 * @returns {@link ListUnsupportedAppVersionResourcesCommandOutput}
 * @see {@link ListUnsupportedAppVersionResourcesCommandInput} for command's `input` shape.
 * @see {@link ListUnsupportedAppVersionResourcesCommandOutput} for command's `response` shape.
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
export class ListUnsupportedAppVersionResourcesCommand extends $Command
  .classBuilder<
    ListUnsupportedAppVersionResourcesCommandInput,
    ListUnsupportedAppVersionResourcesCommandOutput,
    ResiliencehubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResiliencehubClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsResilienceHub", "ListUnsupportedAppVersionResources", {})
  .n("ResiliencehubClient", "ListUnsupportedAppVersionResourcesCommand")
  .sc(ListUnsupportedAppVersionResources$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListUnsupportedAppVersionResourcesRequest;
      output: ListUnsupportedAppVersionResourcesResponse;
    };
    sdk: {
      input: ListUnsupportedAppVersionResourcesCommandInput;
      output: ListUnsupportedAppVersionResourcesCommandOutput;
    };
  };
}
