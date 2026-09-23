// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListImagesRequest, ListImagesResponse } from "../models/models_0";
import { ListImages$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * <p>Returns the list of images that you have access to.</p>
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
 * @example List images that you own
 * ```javascript
 * // The following example lists the image versions that you own. Setting byName to false returns each image version as its own entry, instead of grouping build versions under their image name.
 * const input = {
 *   byName: false,
 *   owner: "Self"
 * };
 * const command = new ListImagesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   imageVersionList: [
 *     {
 *       arn: "arn:aws:imagebuilder:us-west-2:111122223333:image/my-example-recipe/1.0.0",
 *       buildType: "USER_INITIATED",
 *       dateCreated: "2026-09-09T19:12:18.677Z",
 *       name: "my-example-recipe",
 *       osVersion: "Amazon Linux 2023",
 *       owner: "111122223333",
 *       platform: "Linux",
 *       type: "AMI",
 *       version: "1.0.0"
 *     },
 *     {
 *       arn: "arn:aws:imagebuilder:us-west-2:111122223333:image/my-example-windows-image/1.0.0",
 *       buildType: "USER_INITIATED",
 *       dateCreated: "2026-03-10T19:57:27.323Z",
 *       name: "my-example-windows-image",
 *       osVersion: "Microsoft Windows Server 2025",
 *       owner: "111122223333",
 *       platform: "Windows",
 *       type: "AMI",
 *       version: "1.0.0"
 *     },
 *     {
 *       arn: "arn:aws:imagebuilder:us-west-2:111122223333:image/my-example-windows-image/1.0.1",
 *       buildType: "USER_INITIATED",
 *       dateCreated: "2026-03-10T20:32:31.795Z",
 *       name: "my-example-windows-image",
 *       osVersion: "Microsoft Windows Server 2025",
 *       owner: "111122223333",
 *       platform: "Windows",
 *       type: "AMI",
 *       version: "1.0.1"
 *     }
 *   ],
 *   requestId: "19794296-a45f-4079-8741-e00d3c916318"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListImagesCommand extends command<ListImagesCommandInput, ListImagesCommandOutput>(
  _ep0,
  _mw0,
  "ListImages",
  ListImages$
) {
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
