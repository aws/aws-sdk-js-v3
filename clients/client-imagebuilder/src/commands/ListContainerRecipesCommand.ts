// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListContainerRecipesRequest, ListContainerRecipesResponse } from "../models/models_0";
import { ListContainerRecipes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListContainerRecipesCommand}.
 */
export interface ListContainerRecipesCommandInput extends ListContainerRecipesRequest {}
/**
 * @public
 *
 * The output of {@link ListContainerRecipesCommand}.
 */
export interface ListContainerRecipesCommandOutput extends ListContainerRecipesResponse, __MetadataBearer {}

/**
 * <p>Returns a list of container recipes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, ListContainerRecipesCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, ListContainerRecipesCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // ListContainerRecipesRequest
 *   owner: "Self" || "Shared" || "Amazon" || "ThirdParty" || "AWSMarketplace",
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
 * const command = new ListContainerRecipesCommand(input);
 * const response = await client.send(command);
 * // { // ListContainerRecipesResponse
 * //   requestId: "STRING_VALUE",
 * //   containerRecipeSummaryList: [ // ContainerRecipeSummaryList
 * //     { // ContainerRecipeSummary
 * //       arn: "STRING_VALUE",
 * //       containerType: "DOCKER",
 * //       name: "STRING_VALUE",
 * //       platform: "Windows" || "Linux" || "macOS",
 * //       owner: "STRING_VALUE",
 * //       parentImage: "STRING_VALUE",
 * //       dateCreated: "STRING_VALUE",
 * //       instanceImage: "STRING_VALUE",
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
 * @param ListContainerRecipesCommandInput - {@link ListContainerRecipesCommandInput}
 * @returns {@link ListContainerRecipesCommandOutput}
 * @see {@link ListContainerRecipesCommandInput} for command's `input` shape.
 * @see {@link ListContainerRecipesCommandOutput} for command's `response` shape.
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
 * @example List the container recipes you own
 * ```javascript
 * // The following example lists the container recipes that you own.
 * const input = {
 *   owner: "Self"
 * };
 * const command = new ListContainerRecipesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   containerRecipeSummaryList: [
 *     {
 *       arn: "arn:aws:imagebuilder:us-west-2:111122223333:container-recipe/my-example-container-recipe/1.0.0",
 *       containerType: "DOCKER",
 *       dateCreated: "2026-09-09T19:31:26.363Z",
 *       name: "my-example-container-recipe",
 *       owner: "111122223333",
 *       parentImage: "amazonlinux:latest",
 *       platform: "Linux"
 *     }
 *   ],
 *   requestId: "883e6f0e-8883-4c1a-9710-791afb74be0d"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListContainerRecipesCommand extends command<ListContainerRecipesCommandInput, ListContainerRecipesCommandOutput>(
  _ep0,
  _mw0,
  "ListContainerRecipes",
  ListContainerRecipes$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListContainerRecipesRequest;
      output: ListContainerRecipesResponse;
    };
    sdk: {
      input: ListContainerRecipesCommandInput;
      output: ListContainerRecipesCommandOutput;
    };
  };
}
