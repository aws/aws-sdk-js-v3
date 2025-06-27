// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AmplifyBackendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyBackendClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListS3BucketsRequest, ListS3BucketsResponse } from "../models/models_0";
import { de_ListS3BucketsCommand, se_ListS3BucketsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListS3BucketsCommand}.
 */
export interface ListS3BucketsCommandInput extends ListS3BucketsRequest {}
/**
 * @public
 *
 * The output of {@link ListS3BucketsCommand}.
 */
export interface ListS3BucketsCommandOutput extends ListS3BucketsResponse, __MetadataBearer {}

/**
 * <p>The list of S3 buckets in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyBackendClient, ListS3BucketsCommand } from "@aws-sdk/client-amplifybackend"; // ES Modules import
 * // const { AmplifyBackendClient, ListS3BucketsCommand } = require("@aws-sdk/client-amplifybackend"); // CommonJS import
 * const client = new AmplifyBackendClient(config);
 * const input = { // ListS3BucketsRequest
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListS3BucketsCommand(input);
 * const response = await client.send(command);
 * // { // ListS3BucketsResponse
 * //   Buckets: [ // ListOfS3BucketInfo
 * //     { // S3BucketInfo
 * //       CreationDate: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListS3BucketsCommandInput - {@link ListS3BucketsCommandInput}
 * @returns {@link ListS3BucketsCommandOutput}
 * @see {@link ListS3BucketsCommandInput} for command's `input` shape.
 * @see {@link ListS3BucketsCommandOutput} for command's `response` shape.
 * @see {@link AmplifyBackendClientResolvedConfig | config} for AmplifyBackendClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>An error returned if a request is not formed properly.</p>
 *
 * @throws {@link GatewayTimeoutException} (server fault)
 *  <p>An error returned if there's a temporary issue with the service.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>An error returned when a specific resource type is not found.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>An error that is returned when a limit of a specific type has been exceeded.</p>
 *
 * @throws {@link AmplifyBackendServiceException}
 * <p>Base exception class for all service exceptions from AmplifyBackend service.</p>
 *
 *
 * @public
 */
export class ListS3BucketsCommand extends $Command
  .classBuilder<
    ListS3BucketsCommandInput,
    ListS3BucketsCommandOutput,
    AmplifyBackendClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AmplifyBackendClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmplifyBackend", "ListS3Buckets", {})
  .n("AmplifyBackendClient", "ListS3BucketsCommand")
  .f(void 0, void 0)
  .ser(se_ListS3BucketsCommand)
  .de(de_ListS3BucketsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListS3BucketsRequest;
      output: ListS3BucketsResponse;
    };
    sdk: {
      input: ListS3BucketsCommandInput;
      output: ListS3BucketsCommandOutput;
    };
  };
}
