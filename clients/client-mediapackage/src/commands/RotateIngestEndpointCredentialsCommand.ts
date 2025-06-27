// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaPackageClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaPackageClient";
import {
  RotateIngestEndpointCredentialsRequest,
  RotateIngestEndpointCredentialsResponse,
  RotateIngestEndpointCredentialsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_RotateIngestEndpointCredentialsCommand,
  se_RotateIngestEndpointCredentialsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RotateIngestEndpointCredentialsCommand}.
 */
export interface RotateIngestEndpointCredentialsCommandInput extends RotateIngestEndpointCredentialsRequest {}
/**
 * @public
 *
 * The output of {@link RotateIngestEndpointCredentialsCommand}.
 */
export interface RotateIngestEndpointCredentialsCommandOutput
  extends RotateIngestEndpointCredentialsResponse,
    __MetadataBearer {}

/**
 * Rotate the IngestEndpoint's username and password, as specified by the IngestEndpoint's id.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageClient, RotateIngestEndpointCredentialsCommand } from "@aws-sdk/client-mediapackage"; // ES Modules import
 * // const { MediaPackageClient, RotateIngestEndpointCredentialsCommand } = require("@aws-sdk/client-mediapackage"); // CommonJS import
 * const client = new MediaPackageClient(config);
 * const input = { // RotateIngestEndpointCredentialsRequest
 *   Id: "STRING_VALUE", // required
 *   IngestEndpointId: "STRING_VALUE", // required
 * };
 * const command = new RotateIngestEndpointCredentialsCommand(input);
 * const response = await client.send(command);
 * // { // RotateIngestEndpointCredentialsResponse
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
 * @param RotateIngestEndpointCredentialsCommandInput - {@link RotateIngestEndpointCredentialsCommandInput}
 * @returns {@link RotateIngestEndpointCredentialsCommandOutput}
 * @see {@link RotateIngestEndpointCredentialsCommandInput} for command's `input` shape.
 * @see {@link RotateIngestEndpointCredentialsCommandOutput} for command's `response` shape.
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
export class RotateIngestEndpointCredentialsCommand extends $Command
  .classBuilder<
    RotateIngestEndpointCredentialsCommandInput,
    RotateIngestEndpointCredentialsCommandOutput,
    MediaPackageClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaPackageClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MediaPackage", "RotateIngestEndpointCredentials", {})
  .n("MediaPackageClient", "RotateIngestEndpointCredentialsCommand")
  .f(void 0, RotateIngestEndpointCredentialsResponseFilterSensitiveLog)
  .ser(se_RotateIngestEndpointCredentialsCommand)
  .de(de_RotateIngestEndpointCredentialsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RotateIngestEndpointCredentialsRequest;
      output: RotateIngestEndpointCredentialsResponse;
    };
    sdk: {
      input: RotateIngestEndpointCredentialsCommandInput;
      output: RotateIngestEndpointCredentialsCommandOutput;
    };
  };
}
