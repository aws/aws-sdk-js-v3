// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListComponentBuildVersionsRequest, ListComponentBuildVersionsResponse } from "../models/models_0";
import { ListComponentBuildVersions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListComponentBuildVersionsCommand}.
 */
export interface ListComponentBuildVersionsCommandInput extends ListComponentBuildVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListComponentBuildVersionsCommand}.
 */
export interface ListComponentBuildVersionsCommandOutput extends ListComponentBuildVersionsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of component build versions for the specified component
 * 			version ARN. You can only list build versions for components that your
 * 			account owns. Deprecated build versions aren't included in the
 * 			results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, ListComponentBuildVersionsCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, ListComponentBuildVersionsCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // ListComponentBuildVersionsRequest
 *   componentVersionArn: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListComponentBuildVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListComponentBuildVersionsResponse
 * //   requestId: "STRING_VALUE",
 * //   componentSummaryList: [ // ComponentSummaryList
 * //     { // ComponentSummary
 * //       arn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       version: "STRING_VALUE",
 * //       platform: "Windows" || "Linux" || "macOS",
 * //       supportedOsVersions: [ // OsVersionList
 * //         "STRING_VALUE",
 * //       ],
 * //       state: { // ComponentState
 * //         status: "DEPRECATED" || "DISABLED" || "ACTIVE",
 * //         reason: "STRING_VALUE",
 * //       },
 * //       type: "BUILD" || "TEST",
 * //       owner: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       changeDescription: "STRING_VALUE",
 * //       dateCreated: "STRING_VALUE",
 * //       tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       publisher: "STRING_VALUE",
 * //       obfuscate: true || false,
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListComponentBuildVersionsCommandInput - {@link ListComponentBuildVersionsCommandInput}
 * @returns {@link ListComponentBuildVersionsCommandOutput}
 * @see {@link ListComponentBuildVersionsCommandInput} for command's `input` shape.
 * @see {@link ListComponentBuildVersionsCommandOutput} for command's `response` shape.
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
 * @example List the build versions of a component
 * ```javascript
 * // The following example lists the build versions that exist for version 1.0.0 of the specified component. The list returns the most recent build version first.
 * const input = {
 *   componentVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:component/my-example-component/1.0.0"
 * };
 * const command = new ListComponentBuildVersionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   componentSummaryList: [
 *     {
 *       arn: "arn:aws:imagebuilder:us-west-2:111122223333:component/my-example-component/1.0.0/2",
 *       changeDescription: "Updated the install command to use dnf",
 *       dateCreated: "2026-09-09T18:35:23.098Z",
 *       description: "Installs the latest version of my application",
 *       name: "my-example-component",
 *       owner: "111122223333",
 *       platform: "Linux",
 *       state: {
 *         status: "ACTIVE"
 *       },
 *       supportedOsVersions: [
 *         "Amazon Linux 2023"
 *       ],
 *       tags: {
 *         Environment: "Production"
 *       },
 *       type: "BUILD",
 *       version: "1.0.0"
 *     },
 *     {
 *       arn: "arn:aws:imagebuilder:us-west-2:111122223333:component/my-example-component/1.0.0/1",
 *       changeDescription: "Initial version",
 *       dateCreated: "2026-09-09T18:35:20.731Z",
 *       description: "Installs the latest version of my application",
 *       name: "my-example-component",
 *       owner: "111122223333",
 *       platform: "Linux",
 *       state: {
 *         status: "ACTIVE"
 *       },
 *       supportedOsVersions: [
 *         "Amazon Linux 2023"
 *       ],
 *       tags: {
 *         Environment: "Production"
 *       },
 *       type: "BUILD",
 *       version: "1.0.0"
 *     }
 *   ],
 *   requestId: "1d8693f0-26e1-42d7-ba35-d95ace1ce7e0"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListComponentBuildVersionsCommand extends command<ListComponentBuildVersionsCommandInput, ListComponentBuildVersionsCommandOutput>(
  _ep0,
  _mw0,
  "ListComponentBuildVersions",
  ListComponentBuildVersions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListComponentBuildVersionsRequest;
      output: ListComponentBuildVersionsResponse;
    };
    sdk: {
      input: ListComponentBuildVersionsCommandInput;
      output: ListComponentBuildVersionsCommandOutput;
    };
  };
}
