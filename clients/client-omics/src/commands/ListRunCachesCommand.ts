// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListRunCachesRequest, ListRunCachesResponse } from "../models/models_0";
import { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { de_ListRunCachesCommand, se_ListRunCachesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRunCachesCommand}.
 */
export interface ListRunCachesCommandInput extends ListRunCachesRequest {}
/**
 * @public
 *
 * The output of {@link ListRunCachesCommand}.
 */
export interface ListRunCachesCommandOutput extends ListRunCachesResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of your run caches.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, ListRunCachesCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, ListRunCachesCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new OmicsClient(config);
 * const input = { // ListRunCachesRequest
 *   maxResults: Number("int"),
 *   startingToken: "STRING_VALUE",
 * };
 * const command = new ListRunCachesCommand(input);
 * const response = await client.send(command);
 * // { // ListRunCachesResponse
 * //   items: [ // RunCacheList
 * //     { // RunCacheListItem
 * //       arn: "STRING_VALUE",
 * //       cacheBehavior: "STRING_VALUE",
 * //       cacheS3Uri: "STRING_VALUE",
 * //       creationTime: new Date("TIMESTAMP"),
 * //       id: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRunCachesCommandInput - {@link ListRunCachesCommandInput}
 * @returns {@link ListRunCachesCommandOutput}
 * @see {@link ListRunCachesCommandInput} for command's `input` shape.
 * @see {@link ListRunCachesCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request cannot be applied to the target resource in its current state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred. Try the request again.</p>
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *  <p>The request timed out.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The target resource was not found in the current Region.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeds a service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link OmicsServiceException}
 * <p>Base exception class for all service exceptions from Omics service.</p>
 *
 * @public
 */
export class ListRunCachesCommand extends $Command
  .classBuilder<
    ListRunCachesCommandInput,
    ListRunCachesCommandOutput,
    OmicsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OmicsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Omics", "ListRunCaches", {})
  .n("OmicsClient", "ListRunCachesCommand")
  .f(void 0, void 0)
  .ser(se_ListRunCachesCommand)
  .de(de_ListRunCachesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRunCachesRequest;
      output: ListRunCachesResponse;
    };
    sdk: {
      input: ListRunCachesCommandInput;
      output: ListRunCachesCommandOutput;
    };
  };
}
