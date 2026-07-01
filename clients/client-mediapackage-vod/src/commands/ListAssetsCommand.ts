// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAssetsRequest, ListAssetsResponse } from "../models/models_0";
import { ListAssets$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAssetsCommand}.
 */
export interface ListAssetsCommandInput extends ListAssetsRequest {}
/**
 * @public
 *
 * The output of {@link ListAssetsCommand}.
 */
export interface ListAssetsCommandOutput extends ListAssetsResponse, __MetadataBearer {}

/**
 * Returns a collection of MediaPackage VOD Asset resources.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageVodClient, ListAssetsCommand } from "@aws-sdk/client-mediapackage-vod"; // ES Modules import
 * // const { MediaPackageVodClient, ListAssetsCommand } = require("@aws-sdk/client-mediapackage-vod"); // CommonJS import
 * // import type { MediaPackageVodClientConfig } from "@aws-sdk/client-mediapackage-vod";
 * const config = {}; // type is MediaPackageVodClientConfig
 * const client = new MediaPackageVodClient(config);
 * const input = { // ListAssetsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   PackagingGroupId: "STRING_VALUE",
 * };
 * const command = new ListAssetsCommand(input);
 * const response = await client.send(command);
 * // { // ListAssetsResponse
 * //   Assets: [ // __listOfAssetShallow
 * //     { // AssetShallow
 * //       Arn: "STRING_VALUE",
 * //       CreatedAt: "STRING_VALUE",
 * //       Id: "STRING_VALUE",
 * //       PackagingGroupId: "STRING_VALUE",
 * //       ResourceId: "STRING_VALUE",
 * //       SourceArn: "STRING_VALUE",
 * //       SourceRoleArn: "STRING_VALUE",
 * //       Tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAssetsCommandInput - {@link ListAssetsCommandInput}
 * @returns {@link ListAssetsCommandOutput}
 * @see {@link ListAssetsCommandInput} for command's `input` shape.
 * @see {@link ListAssetsCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageVodClientResolvedConfig | config} for MediaPackageVodClient's `config` shape.
 *
 * @throws {@link ForbiddenException} (client fault)
 *  The client is not authorized to access the requested resource.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  An unexpected error occurred.
 *
 * @throws {@link NotFoundException} (client fault)
 *  The requested resource does not exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  An unexpected error occurred.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  The client has exceeded their resource or throttling limits.
 *
 * @throws {@link UnprocessableEntityException} (client fault)
 *  The parameters sent in the request are not valid.
 *
 * @throws {@link MediaPackageVodServiceException}
 * <p>Base exception class for all service exceptions from MediaPackageVod service.</p>
 *
 *
 * @public
 */
export class ListAssetsCommand extends command<ListAssetsCommandInput, ListAssetsCommandOutput>(
  _ep0,
  _mw0,
  "ListAssets",
  ListAssets$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAssetsRequest;
      output: ListAssetsResponse;
    };
    sdk: {
      input: ListAssetsCommandInput;
      output: ListAssetsCommandOutput;
    };
  };
}
