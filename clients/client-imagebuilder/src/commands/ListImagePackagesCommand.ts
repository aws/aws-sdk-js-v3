// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListImagePackagesRequest, ListImagePackagesResponse } from "../models/models_0";
import { ListImagePackages$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * <p>Lists the packages that are associated with an image build version, as determined by
 * 			Amazon Web Services Systems Manager Inventory at build time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ImagebuilderClient, ListImagePackagesCommand } from "@aws-sdk/client-imagebuilder"; // ES Modules import
 * // const { ImagebuilderClient, ListImagePackagesCommand } = require("@aws-sdk/client-imagebuilder"); // CommonJS import
 * // import type { ImagebuilderClientConfig } from "@aws-sdk/client-imagebuilder";
 * const config = {}; // type is ImagebuilderClientConfig
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>At least one of the resources referenced by your request does not exist.</p>
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
 * @example List the packages in an image build version
 * ```javascript
 * // The following example lists the operating system packages that Image Builder detected in the specified image build version.
 * const input = {
 *   imageBuildVersionArn: "arn:aws:imagebuilder:us-west-2:111122223333:image/my-example-recipe/1.0.0/1"
 * };
 * const command = new ListImagePackagesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   imagePackageList: [
 *     {
 *       packageName: "passwd",
 *       packageVersion: "0.80"
 *     },
 *     {
 *       packageName: "dracut-config-ec2",
 *       packageVersion: "3.1"
 *     },
 *     {
 *       packageName: "libsolv",
 *       packageVersion: "0.7.22"
 *     },
 *     {
 *       packageName: "libxcrypt",
 *       packageVersion: "4.4.33"
 *     },
 *     {
 *       packageName: "python3-policycoreutils",
 *       packageVersion: "3.4"
 *     }
 *   ],
 *   requestId: "0363bd96-1a54-4736-a307-7ac6095744e0"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListImagePackagesCommand extends command<ListImagePackagesCommandInput, ListImagePackagesCommandOutput>(
  _ep0,
  _mw0,
  "ListImagePackages",
  ListImagePackages$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListImagePackagesRequest;
      output: ListImagePackagesResponse;
    };
    sdk: {
      input: ListImagePackagesCommandInput;
      output: ListImagePackagesCommandOutput;
    };
  };
}
