// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MediaConvertClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaConvertClient";
import { DescribeEndpointsRequest, DescribeEndpointsResponse } from "../models/models_2";
import { de_DescribeEndpointsCommand, se_DescribeEndpointsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeEndpointsCommand}.
 */
export interface DescribeEndpointsCommandInput extends DescribeEndpointsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeEndpointsCommand}.
 */
export interface DescribeEndpointsCommandOutput extends DescribeEndpointsResponse, __MetadataBearer {}

/**
 * Send an request with an empty body to the regional API endpoint to get your account API endpoint.
 *
 * @deprecated DescribeEndpoints and account specific endpoints are no longer required. We recommend that you send your requests directly to the regional endpoint instead.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConvertClient, DescribeEndpointsCommand } from "@aws-sdk/client-mediaconvert"; // ES Modules import
 * // const { MediaConvertClient, DescribeEndpointsCommand } = require("@aws-sdk/client-mediaconvert"); // CommonJS import
 * const client = new MediaConvertClient(config);
 * const input = { // DescribeEndpointsRequest
 *   MaxResults: Number("int"),
 *   Mode: "DEFAULT" || "GET_ONLY",
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeEndpointsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEndpointsResponse
 * //   Endpoints: [ // __listOfEndpoint
 * //     { // Endpoint
 * //       Url: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeEndpointsCommandInput - {@link DescribeEndpointsCommandInput}
 * @returns {@link DescribeEndpointsCommandOutput}
 * @see {@link DescribeEndpointsCommandInput} for command's `input` shape.
 * @see {@link DescribeEndpointsCommandOutput} for command's `response` shape.
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
 * @throws {@link TooManyRequestsException} (client fault)
 *  Too many requests have been sent in too short of a time. The service limits the rate at which it will accept requests.
 *
 * @throws {@link MediaConvertServiceException}
 * <p>Base exception class for all service exceptions from MediaConvert service.</p>
 *
 * @public
 */
export class DescribeEndpointsCommand extends $Command
  .classBuilder<
    DescribeEndpointsCommandInput,
    DescribeEndpointsCommandOutput,
    MediaConvertClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: MediaConvertClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MediaConvert", "DescribeEndpoints", {})
  .n("MediaConvertClient", "DescribeEndpointsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeEndpointsCommand)
  .de(de_DescribeEndpointsCommand)
  .build() {}
