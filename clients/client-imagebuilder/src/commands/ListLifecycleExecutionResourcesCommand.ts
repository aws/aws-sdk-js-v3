// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { ListLifecycleExecutionResourcesRequest, ListLifecycleExecutionResourcesResponse } from "../models/models_0";
import {
  de_ListLifecycleExecutionResourcesCommand,
  se_ListLifecycleExecutionResourcesCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListLifecycleExecutionResourcesCommand}.
 */
export interface ListLifecycleExecutionResourcesCommandInput extends ListLifecycleExecutionResourcesRequest {}
/**
 * @public
 *
 * The output of {@link ListLifecycleExecutionResourcesCommand}.
 */
export interface ListLifecycleExecutionResourcesCommandOutput
  extends ListLifecycleExecutionResourcesResponse,
    __MetadataBearer {}

/**
 * <p>List resources that the runtime instance of the image lifecycle identified for lifecycle actions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, ListLifecycleExecutionResourcesCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, ListLifecycleExecutionResourcesCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ImagebuilderClient(config);
 * const input = { // ListLifecycleExecutionResourcesRequest
 *   lifecycleExecutionId: "STRING_VALUE", // required
 *   parentResourceId: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListLifecycleExecutionResourcesCommand(input);
 * const response = await client.send(command);
 * // { // ListLifecycleExecutionResourcesResponse
 * //   lifecycleExecutionId: "STRING_VALUE",
 * //   lifecycleExecutionState: { // LifecycleExecutionState
 * //     status: "IN_PROGRESS" || "CANCELLED" || "CANCELLING" || "FAILED" || "SUCCESS" || "PENDING",
 * //     reason: "STRING_VALUE",
 * //   },
 * //   resources: [ // LifecycleExecutionResourceList
 * //     { // LifecycleExecutionResource
 * //       accountId: "STRING_VALUE",
 * //       resourceId: "STRING_VALUE",
 * //       state: { // LifecycleExecutionResourceState
 * //         status: "FAILED" || "IN_PROGRESS" || "SKIPPED" || "SUCCESS",
 * //         reason: "STRING_VALUE",
 * //       },
 * //       action: { // LifecycleExecutionResourceAction
 * //         name: "AVAILABLE" || "DELETE" || "DEPRECATE" || "DISABLE",
 * //         reason: "STRING_VALUE",
 * //       },
 * //       region: "STRING_VALUE",
 * //       snapshots: [ // LifecycleExecutionSnapshotResourceList
 * //         { // LifecycleExecutionSnapshotResource
 * //           snapshotId: "STRING_VALUE",
 * //           state: {
 * //             status: "FAILED" || "IN_PROGRESS" || "SKIPPED" || "SUCCESS",
 * //             reason: "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //       imageUris: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //       startTime: new Date("TIMESTAMP"),
 * //       endTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLifecycleExecutionResourcesCommandInput - {@link ListLifecycleExecutionResourcesCommandInput}
 * @returns {@link ListLifecycleExecutionResourcesCommandOutput}
 * @see {@link ListLifecycleExecutionResourcesCommandInput} for command's `input` shape.
 * @see {@link ListLifecycleExecutionResourcesCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidPaginationTokenException} (client fault)
 *  <p>You have provided an invalid pagination token in your request.</p>
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
 * @public
 */
export class ListLifecycleExecutionResourcesCommand extends $Command
  .classBuilder<
    ListLifecycleExecutionResourcesCommandInput,
    ListLifecycleExecutionResourcesCommandOutput,
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
  .s("imagebuilder", "ListLifecycleExecutionResources", {})
  .n("ImagebuilderClient", "ListLifecycleExecutionResourcesCommand")
  .f(void 0, void 0)
  .ser(se_ListLifecycleExecutionResourcesCommand)
  .de(de_ListLifecycleExecutionResourcesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListLifecycleExecutionResourcesRequest;
      output: ListLifecycleExecutionResourcesResponse;
    };
    sdk: {
      input: ListLifecycleExecutionResourcesCommandInput;
      output: ListLifecycleExecutionResourcesCommandOutput;
    };
  };
}
