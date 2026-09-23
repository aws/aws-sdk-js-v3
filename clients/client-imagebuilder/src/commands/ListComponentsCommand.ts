// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListComponentsRequest, ListComponentsResponse } from "../models/models_0";
import { ListComponents$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListComponentsCommand}.
 */
export interface ListComponentsCommandInput extends ListComponentsRequest {}
/**
 * @public
 *
 * The output of {@link ListComponentsCommand}.
 */
export interface ListComponentsCommandOutput extends ListComponentsResponse, __MetadataBearer {}

/**
 * <p>Returns the list of components that you have access to. By default, the
 * 			response doesn't include components in the
 * 			<code>DEPRECATED</code> state. To list deprecated components, use the
 * 			<code>status</code> filter with the value <code>DEPRECATED</code>.</p>
 *          <note>
 *             <p>The semantic version has four nodes: <major>.<minor>.<patch>/<build>.
 * 	You can assign values for the first three, and can filter on all of them.</p>
 *             <p>
 *                <b>Filtering:</b> You can use wildcards (x) to specify the most recent versions or nodes when
 * 	selecting the base image or components for your recipe. When you use a wildcard in any node, all nodes
 * 	to the right of the first wildcard must also be wildcards.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, ListComponentsCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, ListComponentsCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // ListComponentsRequest
 *   owner: "Self" || "Shared" || "Amazon" || "ThirdParty" || "AWSMarketplace",
 *   filters: [ // FilterList
 *     { // Filter
 *       name: "STRING_VALUE",
 *       values: [ // FilterValues
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   byName: true || false,
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListComponentsCommand(input);
 * const response = await client.send(command);
 * // { // ListComponentsResponse
 * //   requestId: "STRING_VALUE",
 * //   componentVersionList: [ // ComponentVersionList
 * //     { // ComponentVersion
 * //       arn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       version: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       platform: "Windows" || "Linux" || "macOS",
 * //       supportedOsVersions: [ // OsVersionList
 * //         "STRING_VALUE",
 * //       ],
 * //       type: "BUILD" || "TEST",
 * //       owner: "STRING_VALUE",
 * //       dateCreated: "STRING_VALUE",
 * //       status: "DEPRECATED" || "DISABLED" || "ACTIVE",
 * //       productCodes: [ // ProductCodeList
 * //         { // ProductCodeListItem
 * //           productCodeId: "STRING_VALUE", // required
 * //           productCodeType: "marketplace", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListComponentsCommandInput - {@link ListComponentsCommandInput}
 * @returns {@link ListComponentsCommandOutput}
 * @see {@link ListComponentsCommandInput} for command's `input` shape.
 * @see {@link ListComponentsCommandOutput} for command's `response` shape.
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
 * @example List components that you own
 * ```javascript
 * // The following example lists the component versions that your account owns, filtered to components for the Linux platform.
 * const input = {
 *   filters: [
 *     {
 *       name: "platform",
 *       values: [
 *         "Linux"
 *       ]
 *     }
 *   ],
 *   owner: "Self"
 * };
 * const command = new ListComponentsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   componentVersionList: [
 *     {
 *       arn: "arn:aws:imagebuilder:us-west-2:111122223333:component/my-example-component/1.0.0",
 *       dateCreated: "2026-09-09T18:31:49.661Z",
 *       description: "Installs my example application",
 *       name: "my-example-component",
 *       owner: "111122223333",
 *       platform: "Linux",
 *       status: "ACTIVE",
 *       supportedOsVersions: [
 *         "Amazon Linux 2023"
 *       ],
 *       type: "BUILD",
 *       version: "1.0.0"
 *     },
 *     {
 *       arn: "arn:aws:imagebuilder:us-west-2:111122223333:component/my-example-imported-component/1.0.0",
 *       dateCreated: "2026-09-09T18:31:21.941Z",
 *       description: "Installs my application from an imported shell script",
 *       name: "my-example-imported-component",
 *       owner: "111122223333",
 *       platform: "Linux",
 *       status: "ACTIVE",
 *       type: "BUILD",
 *       version: "1.0.0"
 *     },
 *     {
 *       arn: "arn:aws:imagebuilder:us-west-2:111122223333:component/my-example-test-component/1.0.0",
 *       dateCreated: "2026-09-09T18:31:52.888Z",
 *       description: "Verifies that my example application is installed",
 *       name: "my-example-test-component",
 *       owner: "111122223333",
 *       platform: "Linux",
 *       status: "ACTIVE",
 *       type: "TEST",
 *       version: "1.0.0"
 *     }
 *   ],
 *   requestId: "fc51d989-ca0a-4ac7-9ca6-fb7786e70955"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListComponentsCommand extends command<ListComponentsCommandInput, ListComponentsCommandOutput>(
  _ep0,
  _mw0,
  "ListComponents",
  ListComponents$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListComponentsRequest;
      output: ListComponentsResponse;
    };
    sdk: {
      input: ListComponentsCommandInput;
      output: ListComponentsCommandOutput;
    };
  };
}
