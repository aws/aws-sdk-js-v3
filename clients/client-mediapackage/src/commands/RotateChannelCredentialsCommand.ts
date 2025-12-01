// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MediaPackageClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageClient";
import type { RotateChannelCredentialsRequest, RotateChannelCredentialsResponse } from "../models/models_0";
import { RotateChannelCredentials } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RotateChannelCredentialsCommand}.
 */
export interface RotateChannelCredentialsCommandInput extends RotateChannelCredentialsRequest {}
/**
 * @public
 *
 * The output of {@link RotateChannelCredentialsCommand}.
 */
export interface RotateChannelCredentialsCommandOutput extends RotateChannelCredentialsResponse, __MetadataBearer {}

/**
 * Changes the Channel's first IngestEndpoint's username and password. WARNING - This API is deprecated. Please use RotateIngestEndpointCredentials instead
 *
 * @deprecated This API is deprecated. Please use RotateIngestEndpointCredentials instead
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageClient, RotateChannelCredentialsCommand } from "@aws-sdk/client-mediapackage"; // ES Modules import
 * // const { MediaPackageClient, RotateChannelCredentialsCommand } = require("@aws-sdk/client-mediapackage"); // CommonJS import
 * // import type { MediaPackageClientConfig } from "@aws-sdk/client-mediapackage";
 * const config = {}; // type is MediaPackageClientConfig
 * const client = new MediaPackageClient(config);
 * const input = { // RotateChannelCredentialsRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new RotateChannelCredentialsCommand(input);
 * const response = await client.send(command);
 * // { // RotateChannelCredentialsResponse
 * //   Arn: "STRING_VALUE",
 * //   CreatedAt: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   EgressAccessLogs: { // EgressAccessLogs
 * //     LogGroupName: "STRING_VALUE",
 * //   },
 * //   HlsIngest: { // HlsIngest
 * //     IngestEndpoints: [ // __listOfIngestEndpoint
 * //       { // IngestEndpoint
 * //         Id: "STRING_VALUE",
 * //         Password: "STRING_VALUE",
 * //         Url: "STRING_VALUE",
 * //         Username: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * //   Id: "STRING_VALUE",
 * //   IngressAccessLogs: { // IngressAccessLogs
 * //     LogGroupName: "STRING_VALUE",
 * //   },
 * //   Tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param RotateChannelCredentialsCommandInput - {@link RotateChannelCredentialsCommandInput}
 * @returns {@link RotateChannelCredentialsCommandOutput}
 * @see {@link RotateChannelCredentialsCommandInput} for command's `input` shape.
 * @see {@link RotateChannelCredentialsCommandOutput} for command's `response` shape.
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
export class RotateChannelCredentialsCommand extends $Command
  .classBuilder<
    RotateChannelCredentialsCommandInput,
    RotateChannelCredentialsCommandOutput,
    MediaPackageClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaPackageClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaPackage", "RotateChannelCredentials", {})
  .n("MediaPackageClient", "RotateChannelCredentialsCommand")
  .sc(RotateChannelCredentials)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RotateChannelCredentialsRequest;
      output: RotateChannelCredentialsResponse;
    };
    sdk: {
      input: RotateChannelCredentialsCommandInput;
      output: RotateChannelCredentialsCommandOutput;
    };
  };
}
