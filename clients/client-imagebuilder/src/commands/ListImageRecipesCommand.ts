// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListImageRecipesRequest, ListImageRecipesResponse } from "../models/models_0";
import { ListImageRecipes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListImageRecipesCommand}.
 */
export interface ListImageRecipesCommandInput extends ListImageRecipesRequest {}
/**
 * @public
 *
 * The output of {@link ListImageRecipesCommand}.
 */
export interface ListImageRecipesCommandOutput extends ListImageRecipesResponse, __MetadataBearer {}

/**
 * <p>Returns a list of image recipes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, ListImageRecipesCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, ListImageRecipesCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // ListImageRecipesRequest
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
 * const command = new ListImageRecipesCommand(input);
 * const response = await client.send(command);
 * // { // ListImageRecipesResponse
 * //   requestId: "STRING_VALUE",
 * //   imageRecipeSummaryList: [ // ImageRecipeSummaryList
 * //     { // ImageRecipeSummary
 * //       arn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       platform: "Windows" || "Linux" || "macOS",
 * //       owner: "STRING_VALUE",
 * //       parentImage: "STRING_VALUE",
 * //       dateCreated: "STRING_VALUE",
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
 * @param ListImageRecipesCommandInput - {@link ListImageRecipesCommandInput}
 * @returns {@link ListImageRecipesCommandOutput}
 * @see {@link ListImageRecipesCommandInput} for command's `input` shape.
 * @see {@link ListImageRecipesCommandOutput} for command's `response` shape.
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
 * @example List the image recipes that you own
 * ```javascript
 * // The following example lists the image recipes that you own.
 * const input = {
 *   owner: "Self"
 * };
 * const command = new ListImageRecipesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   imageRecipeSummaryList: [
 *     {
 *       arn: "arn:aws:imagebuilder:us-west-2:111122223333:image-recipe/my-example-linux-recipe/1.0.0",
 *       dateCreated: "2026-09-09T19:30:33.064Z",
 *       name: "my-example-linux-recipe",
 *       owner: "111122223333",
 *       parentImage: "arn:aws:imagebuilder:us-west-2:aws:image/amazon-linux-2023-x86/x.x.x",
 *       platform: "Linux"
 *     },
 *     {
 *       arn: "arn:aws:imagebuilder:us-west-2:111122223333:image-recipe/my-example-windows-recipe/1.0.0",
 *       dateCreated: "2026-09-09T19:30:35.110Z",
 *       name: "my-example-windows-recipe",
 *       owner: "111122223333",
 *       parentImage: "arn:aws:imagebuilder:us-west-2:aws:image/windows-server-2022-english-full-base-x86/x.x.x",
 *       platform: "Windows"
 *     }
 *   ],
 *   requestId: "4b036f1a-3716-441d-a401-419249f6569e"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListImageRecipesCommand extends command<ListImageRecipesCommandInput, ListImageRecipesCommandOutput>(
  _ep0,
  _mw0,
  "ListImageRecipes",
  ListImageRecipes$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListImageRecipesRequest;
      output: ListImageRecipesResponse;
    };
    sdk: {
      input: ListImageRecipesCommandInput;
      output: ListImageRecipesCommandOutput;
    };
  };
}
