// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaPackageClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageClient";
import { CreateHarvestJobRequest, CreateHarvestJobResponse } from "../models/models_0";
import { CreateHarvestJob } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateHarvestJobCommand}.
 */
export interface CreateHarvestJobCommandInput extends CreateHarvestJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateHarvestJobCommand}.
 */
export interface CreateHarvestJobCommandOutput extends CreateHarvestJobResponse, __MetadataBearer {}

/**
 * Creates a new HarvestJob record.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageClient, CreateHarvestJobCommand } from "@aws-sdk/client-mediapackage"; // ES Modules import
 * // const { MediaPackageClient, CreateHarvestJobCommand } = require("@aws-sdk/client-mediapackage"); // CommonJS import
 * // import type { MediaPackageClientConfig } from "@aws-sdk/client-mediapackage";
 * const config = {}; // type is MediaPackageClientConfig
 * const client = new MediaPackageClient(config);
 * const input = { // CreateHarvestJobRequest
 *   EndTime: "STRING_VALUE", // required
 *   Id: "STRING_VALUE", // required
 *   OriginEndpointId: "STRING_VALUE", // required
 *   S3Destination: { // S3Destination
 *     BucketName: "STRING_VALUE", // required
 *     ManifestKey: "STRING_VALUE", // required
 *     RoleArn: "STRING_VALUE", // required
 *   },
 *   StartTime: "STRING_VALUE", // required
 * };
 * const command = new CreateHarvestJobCommand(input);
 * const response = await client.send(command);
 * // { // CreateHarvestJobResponse
 * //   Arn: "STRING_VALUE",
 * //   ChannelId: "STRING_VALUE",
 * //   CreatedAt: "STRING_VALUE",
 * //   EndTime: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * //   OriginEndpointId: "STRING_VALUE",
 * //   S3Destination: { // S3Destination
 * //     BucketName: "STRING_VALUE", // required
 * //     ManifestKey: "STRING_VALUE", // required
 * //     RoleArn: "STRING_VALUE", // required
 * //   },
 * //   StartTime: "STRING_VALUE",
 * //   Status: "IN_PROGRESS" || "SUCCEEDED" || "FAILED",
 * // };
 *
 * ```
 *
 * @param CreateHarvestJobCommandInput - {@link CreateHarvestJobCommandInput}
 * @returns {@link CreateHarvestJobCommandOutput}
 * @see {@link CreateHarvestJobCommandInput} for command's `input` shape.
 * @see {@link CreateHarvestJobCommandOutput} for command's `response` shape.
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
export class CreateHarvestJobCommand extends $Command
  .classBuilder<
    CreateHarvestJobCommandInput,
    CreateHarvestJobCommandOutput,
    MediaPackageClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaPackageClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaPackage", "CreateHarvestJob", {})
  .n("MediaPackageClient", "CreateHarvestJobCommand")
  .sc(CreateHarvestJob)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateHarvestJobRequest;
      output: CreateHarvestJobResponse;
    };
    sdk: {
      input: CreateHarvestJobCommandInput;
      output: CreateHarvestJobCommandOutput;
    };
  };
}
