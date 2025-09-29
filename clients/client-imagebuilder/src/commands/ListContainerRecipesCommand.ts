// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { ListContainerRecipesRequest, ListContainerRecipesResponse } from "../models/models_0";
import { de_ListContainerRecipesCommand, se_ListContainerRecipesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export class ListContainerRecipesCommand extends $Command
  .classBuilder<
    ListContainerRecipesCommandInput,
    ListContainerRecipesCommandOutput,
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
  .s("imagebuilder", "ListContainerRecipes", {})
  .n("ImagebuilderClient", "ListContainerRecipesCommand")
  .f(void 0, void 0)
  .ser(se_ListContainerRecipesCommand)
  .de(de_ListContainerRecipesCommand)
  .build() {
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
