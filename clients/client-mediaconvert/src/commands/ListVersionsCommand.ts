// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaConvertClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConvertClient";
import { ListVersionsRequest, ListVersionsResponse } from "../models/models_2";
import { de_ListVersionsCommand, se_ListVersionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListVersionsCommand}.
 */
export interface ListVersionsCommandInput extends ListVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListVersionsCommand}.
 */
export interface ListVersionsCommandOutput extends ListVersionsResponse, __MetadataBearer {}

/**
 * Retrieve a JSON array of all available Job engine versions and the date they expire.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConvertClient, ListVersionsCommand } from "@aws-sdk/client-mediaconvert"; // ES Modules import
 * // const { MediaConvertClient, ListVersionsCommand } = require("@aws-sdk/client-mediaconvert"); // CommonJS import
 * // import type { MediaConvertClientConfig } from "@aws-sdk/client-mediaconvert";
 * const config = {}; // type is MediaConvertClientConfig
 * const client = new MediaConvertClient(config);
 * const input = { // ListVersionsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListVersionsResponse
 * //   NextToken: "STRING_VALUE",
 * //   Versions: [ // __listOfJobEngineVersion
 * //     { // JobEngineVersion
 * //       ExpirationDate: new Date("TIMESTAMP"),
 * //       Version: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListVersionsCommandInput - {@link ListVersionsCommandInput}
 * @returns {@link ListVersionsCommandOutput}
 * @see {@link ListVersionsCommandInput} for command's `input` shape.
 * @see {@link ListVersionsCommandOutput} for command's `response` shape.
 * @see {@link MediaConvertClientResolvedConfig | config} for MediaConvertClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  The service can't process your request because of a problem in the request. Please check your request form and syntax.
 *
 * @throws {@link ConflictException} (client fault)
 *  The service couldn't complete your request because there is a conflict with the current state of the resource.
 *
 * @throws {@link ForbiddenException} (client fault)
 *  You don't have permissions for this action with the credentials you sent.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  The service encountered an unexpected condition and can't fulfill your request.
 *
 * @throws {@link NotFoundException} (client fault)
 *  The resource you requested doesn't exist.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  You attempted to create more resources than the service allows based on service quotas.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  Too many requests have been sent in too short of a time. The service limits the rate at which it will accept requests.
 *
 * @throws {@link MediaConvertServiceException}
 * <p>Base exception class for all service exceptions from MediaConvert service.</p>
 *
 *
 * @public
 */
export class ListVersionsCommand extends $Command
  .classBuilder<
    ListVersionsCommandInput,
    ListVersionsCommandOutput,
    MediaConvertClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaConvertClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MediaConvert", "ListVersions", {})
  .n("MediaConvertClient", "ListVersionsCommand")
  .f(void 0, void 0)
  .ser(se_ListVersionsCommand)
  .de(de_ListVersionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListVersionsRequest;
      output: ListVersionsResponse;
    };
    sdk: {
      input: ListVersionsCommandInput;
      output: ListVersionsCommandOutput;
    };
  };
}
