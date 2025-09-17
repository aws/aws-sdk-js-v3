// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { ListImagesRequest, ListImagesResponse } from "../models/models_0";
import { de_ListImagesCommand, se_ListImagesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListImagesCommand}.
 */
export interface ListImagesCommandInput extends ListImagesRequest {}
/**
 * @public
 *
 * The output of {@link ListImagesCommand}.
 */
export interface ListImagesCommandOutput extends ListImagesResponse, __MetadataBearer {}

/**
 * <p>Returns the list of images that you have access to. Newly created images can take up
 * 			to two minutes to appear in the ListImages API Results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, ListImagesCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, ListImagesCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
 * const client = new ImagebuilderClient(config);
 * const input = { // ListImagesRequest
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
 *   includeDeprecated: true || false,
 * };
 * const command = new ListImagesCommand(input);
 * const response = await client.send(command);
 * // { // ListImagesResponse
 * //   requestId: "STRING_VALUE",
 * //   imageVersionList: [ // ImageVersionList
 * //     { // ImageVersion
 * //       arn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       type: "AMI" || "DOCKER",
 * //       version: "STRING_VALUE",
 * //       platform: "Windows" || "Linux" || "macOS",
 * //       osVersion: "STRING_VALUE",
 * //       owner: "STRING_VALUE",
 * //       dateCreated: "STRING_VALUE",
 * //       buildType: "USER_INITIATED" || "SCHEDULED" || "IMPORT" || "IMPORT_ISO",
 * //       imageSource: "AMAZON_MANAGED" || "AWS_MARKETPLACE" || "IMPORTED" || "CUSTOM",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListImagesCommandInput - {@link ListImagesCommandInput}
 * @returns {@link ListImagesCommandOutput}
 * @see {@link ListImagesCommandInput} for command's `input` shape.
 * @see {@link ListImagesCommandOutput} for command's `response` shape.
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
export class ListImagesCommand extends $Command
  .classBuilder<
    ListImagesCommandInput,
    ListImagesCommandOutput,
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
  .s("imagebuilder", "ListImages", {})
  .n("ImagebuilderClient", "ListImagesCommand")
  .f(void 0, void 0)
  .ser(se_ListImagesCommand)
  .de(de_ListImagesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListImagesRequest;
      output: ListImagesResponse;
    };
    sdk: {
      input: ListImagesCommandInput;
      output: ListImagesCommandOutput;
    };
  };
}
