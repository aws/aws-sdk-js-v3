// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import type { ListLifecyclePoliciesRequest, ListLifecyclePoliciesResponse } from "../models/models_0";
import { ListLifecyclePolicies$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListLifecyclePoliciesCommand}.
 */
export interface ListLifecyclePoliciesCommandInput extends ListLifecyclePoliciesRequest {}
/**
 * @public
 *
 * The output of {@link ListLifecyclePoliciesCommand}.
 */
export interface ListLifecyclePoliciesCommandOutput extends ListLifecyclePoliciesResponse, __MetadataBearer {}

/**
 * <p>Get a list of lifecycle policies in your Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, ListLifecyclePoliciesCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, ListLifecyclePoliciesCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // ListLifecyclePoliciesRequest
 *   filters: [ // FilterList
 *     { // Filter
 *       name: "STRING_VALUE",
 *       values: [ // FilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListLifecyclePoliciesCommand(input);
 * const response = await client.send(command);
 * // { // ListLifecyclePoliciesResponse
 * //   lifecyclePolicySummaryList: [ // LifecyclePolicySummaryList
 * //     { // LifecyclePolicySummary
 * //       arn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       status: "DISABLED" || "ENABLED",
 * //       executionRole: "STRING_VALUE",
 * //       resourceType: "AMI_IMAGE" || "CONTAINER_IMAGE",
 * //       dateCreated: new Date("TIMESTAMP"),
 * //       dateUpdated: new Date("TIMESTAMP"),
 * //       dateLastRun: new Date("TIMESTAMP"),
 * //       tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLifecyclePoliciesCommandInput - {@link ListLifecyclePoliciesCommandInput}
 * @returns {@link ListLifecyclePoliciesCommandOutput}
 * @see {@link ListLifecyclePoliciesCommandInput} for command's `input` shape.
 * @see {@link ListLifecyclePoliciesCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class ListLifecyclePoliciesCommand extends $Command
  .classBuilder<
    ListLifecyclePoliciesCommandInput,
    ListLifecyclePoliciesCommandOutput,
    ImagebuilderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ImagebuilderClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("imagebuilder", "ListLifecyclePolicies", {})
  .n("ImagebuilderClient", "ListLifecyclePoliciesCommand")
  .sc(ListLifecyclePolicies$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListLifecyclePoliciesRequest;
      output: ListLifecyclePoliciesResponse;
    };
    sdk: {
      input: ListLifecyclePoliciesCommandInput;
      output: ListLifecyclePoliciesCommandOutput;
    };
  };
}
