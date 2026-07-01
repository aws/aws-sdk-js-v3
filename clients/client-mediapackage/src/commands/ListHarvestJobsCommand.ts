// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListHarvestJobsRequest, ListHarvestJobsResponse } from "../models/models_0";
import { ListHarvestJobs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListHarvestJobsCommand}.
 */
export interface ListHarvestJobsCommandInput extends ListHarvestJobsRequest {}
/**
 * @public
 *
 * The output of {@link ListHarvestJobsCommand}.
 */
export interface ListHarvestJobsCommandOutput extends ListHarvestJobsResponse, __MetadataBearer {}

/**
 * Returns a collection of HarvestJob records.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageClient, ListHarvestJobsCommand } from "@aws-sdk/client-mediapackage"; // ES Modules import
 * // const { MediaPackageClient, ListHarvestJobsCommand } = require("@aws-sdk/client-mediapackage"); // CommonJS import
 * // import type { MediaPackageClientConfig } from "@aws-sdk/client-mediapackage";
 * const config = {}; // type is MediaPackageClientConfig
 * const client = new MediaPackageClient(config);
 * const input = { // ListHarvestJobsRequest
 *   IncludeChannelId: "STRING_VALUE",
 *   IncludeStatus: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListHarvestJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListHarvestJobsResponse
 * //   HarvestJobs: [ // __listOfHarvestJob
 * //     { // HarvestJob
 * //       Arn: "STRING_VALUE",
 * //       ChannelId: "STRING_VALUE",
 * //       CreatedAt: "STRING_VALUE",
 * //       EndTime: "STRING_VALUE",
 * //       Id: "STRING_VALUE",
 * //       OriginEndpointId: "STRING_VALUE",
 * //       S3Destination: { // S3Destination
 * //         BucketName: "STRING_VALUE", // required
 * //         ManifestKey: "STRING_VALUE", // required
 * //         RoleArn: "STRING_VALUE", // required
 * //       },
 * //       StartTime: "STRING_VALUE",
 * //       Status: "IN_PROGRESS" || "SUCCEEDED" || "FAILED",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListHarvestJobsCommandInput - {@link ListHarvestJobsCommandInput}
 * @returns {@link ListHarvestJobsCommandOutput}
 * @see {@link ListHarvestJobsCommandInput} for command's `input` shape.
 * @see {@link ListHarvestJobsCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageClientResolvedConfig | config} for MediaPackageClient's `config` shape.
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
 * @throws {@link MediaPackageServiceException}
 * <p>Base exception class for all service exceptions from MediaPackage service.</p>
 *
 *
 * @public
 */
export class ListHarvestJobsCommand extends command<ListHarvestJobsCommandInput, ListHarvestJobsCommandOutput>(
  _ep0,
  _mw0,
  "ListHarvestJobs",
  ListHarvestJobs$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListHarvestJobsRequest;
      output: ListHarvestJobsResponse;
    };
    sdk: {
      input: ListHarvestJobsCommandInput;
      output: ListHarvestJobsCommandOutput;
    };
  };
}
