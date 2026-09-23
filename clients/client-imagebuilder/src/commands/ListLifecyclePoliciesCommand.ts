// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListLifecyclePoliciesRequest, ListLifecyclePoliciesResponse } from "../models/models_0";
import { ListLifecyclePolicies$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * <p>Retrieves a list of lifecycle policies in your Amazon Web Services account.</p>
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
 * @throws {@link InvalidPaginationTokenException} (client fault)
 *  <p>You have provided an invalid pagination token in your request.</p>
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
 * @example List enabled lifecycle policies
 * ```javascript
 * // The following example lists the lifecycle policies in your account that have ENABLED status.
 * const input = {
 *   filters: [
 *     {
 *       name: "status",
 *       values: [
 *         "ENABLED"
 *       ]
 *     }
 *   ]
 * };
 * const command = new ListLifecyclePoliciesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   lifecyclePolicySummaryList: [
 *     {
 *       arn: "arn:aws:imagebuilder:us-west-2:111122223333:lifecycle-policy/my-example-ami-policy",
 *       dateCreated: "2026-09-09T19:36:17Z",
 *       description: "Deletes AMI image builds after they reach 6 months old",
 *       executionRole: "arn:aws:iam::111122223333:role/my-example-lifecycle-role",
 *       name: "my-example-ami-policy",
 *       resourceType: "AMI_IMAGE",
 *       status: "ENABLED"
 *     },
 *     {
 *       arn: "arn:aws:imagebuilder:us-west-2:111122223333:lifecycle-policy/my-example-container-policy",
 *       dateCreated: "2026-09-09T19:36:19Z",
 *       description: "Deletes container image builds after they reach 6 months old",
 *       executionRole: "arn:aws:iam::111122223333:role/my-example-lifecycle-role",
 *       name: "my-example-container-policy",
 *       resourceType: "CONTAINER_IMAGE",
 *       status: "ENABLED"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListLifecyclePoliciesCommand extends command<ListLifecyclePoliciesCommandInput, ListLifecyclePoliciesCommandOutput>(
  _ep0,
  _mw0,
  "ListLifecyclePolicies",
  ListLifecyclePolicies$
) {
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
