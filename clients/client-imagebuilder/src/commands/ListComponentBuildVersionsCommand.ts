// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { ListComponentBuildVersionsRequest, ListComponentBuildVersionsResponse } from "../models/models_0";
import { de_ListComponentBuildVersionsCommand, se_ListComponentBuildVersionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Returns the list of component build versions for the specified semantic
 * 			version.</p>
 *          <note>
 *             <p>The semantic version has four nodes: <major>.<minor>.<patch>/<build>.
 * 	You can assign values for the first three, and can filter on all of them.</p>
 *             <p>
 *                <b>Filtering:</b> With semantic versioning, you have the flexibility to use wildcards (x)
 * 	to specify the most recent versions or nodes when selecting the base image or components for your
 * 	recipe. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be
 * 	wildcards.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, ListComponentBuildVersionsCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, ListComponentBuildVersionsCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const input = { // ListComponentBuildVersionsRequest
 *   componentVersionArn: "STRING_VALUE", // required
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
 * //       platform: "Windows" || "Linux",
 * //       supportedOsVersions: [ // OsVersionList
 * //         "STRING_VALUE",
 * //       ],
 * //       state: { // ComponentState
 * //         status: "DEPRECATED",
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
export class ListComponentBuildVersionsCommand extends $Command
  .classBuilder<
    ListComponentBuildVersionsCommandInput,
    ListComponentBuildVersionsCommandOutput,
    ImagebuilderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ImagebuilderClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("imagebuilder", "ListComponentBuildVersions", {})
  .n("ImagebuilderClient", "ListComponentBuildVersionsCommand")
  .f(void 0, void 0)
  .ser(se_ListComponentBuildVersionsCommand)
  .de(de_ListComponentBuildVersionsCommand)
  .build() {}
