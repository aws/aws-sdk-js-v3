// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ImagebuilderClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ImagebuilderClient";
import { ListImagePackagesRequest, ListImagePackagesResponse } from "../models/models_0";
import { de_ListImagePackagesCommand, se_ListImagePackagesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListImagePackagesCommand}.
 */
export interface ListImagePackagesCommandInput extends ListImagePackagesRequest {}
/**
 * @public
 *
 * The output of {@link ListImagePackagesCommand}.
 */
export interface ListImagePackagesCommandOutput extends ListImagePackagesResponse, __MetadataBearer {}

/**
 * <p>List the Packages that are associated with an Image Build Version, as determined by
 * 			Amazon Web Services Systems Manager Inventory at build time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, ListImagePackagesCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, ListImagePackagesCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * const client = new ImagebuilderClient(config);
 * const input = { // ListImagePackagesRequest
 *   imageBuildVersionArn: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListImagePackagesCommand(input);
 * const response = await client.send(command);
 * // { // ListImagePackagesResponse
 * //   requestId: "STRING_VALUE",
 * //   imagePackageList: [ // ImagePackageList
 * //     { // ImagePackage
 * //       packageName: "STRING_VALUE",
 * //       packageVersion: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListImagePackagesCommandInput - {@link ListImagePackagesCommandInput}
 * @returns {@link ListImagePackagesCommandOutput}
 * @see {@link ListImagePackagesCommandInput} for command's `input` shape.
 * @see {@link ListImagePackagesCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>At least one of the resources referenced by your request does not exist.</p>
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
export class ListImagePackagesCommand extends $Command
  .classBuilder<
    ListImagePackagesCommandInput,
    ListImagePackagesCommandOutput,
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
  .s("imagebuilder", "ListImagePackages", {})
  .n("ImagebuilderClient", "ListImagePackagesCommand")
  .f(void 0, void 0)
  .ser(se_ListImagePackagesCommand)
  .de(de_ListImagePackagesCommand)
  .build() {}
