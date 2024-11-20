// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetAnycastIpListRequest, GetAnycastIpListResult } from "../models/models_1";
import { de_GetAnycastIpListCommand, se_GetAnycastIpListCommand } from "../protocols/Aws_restXml";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAnycastIpListCommand}.
 */
export interface GetAnycastIpListCommandInput extends GetAnycastIpListRequest {}
/**
 * @public
 *
 * The output of {@link GetAnycastIpListCommand}.
 */
export interface GetAnycastIpListCommandOutput extends GetAnycastIpListResult, __MetadataBearer {}

/**
 * <p>Gets an Anycast static IP list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, GetAnycastIpListCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, GetAnycastIpListCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // GetAnycastIpListRequest
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new GetAnycastIpListCommand(input);
 * const response = await client.send(command);
 * // { // GetAnycastIpListResult
 * //   AnycastIpList: { // AnycastIpList
 * //     Id: "STRING_VALUE", // required
 * //     Name: "STRING_VALUE", // required
 * //     Status: "STRING_VALUE", // required
 * //     Arn: "STRING_VALUE", // required
 * //     AnycastIps: [ // AnycastIps // required
 * //       "STRING_VALUE",
 * //     ],
 * //     IpCount: Number("int"), // required
 * //     LastModifiedTime: new Date("TIMESTAMP"), // required
 * //   },
 * //   ETag: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetAnycastIpListCommandInput - {@link GetAnycastIpListCommandInput}
 * @returns {@link GetAnycastIpListCommandOutput}
 * @see {@link GetAnycastIpListCommandInput} for command's `input` shape.
 * @see {@link GetAnycastIpListCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link EntityNotFound} (client fault)
 *  <p>The entity was not found.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link UnsupportedOperation} (client fault)
 *  <p>This operation is not supported in this region.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 * @public
 */
export class GetAnycastIpListCommand extends $Command
  .classBuilder<
    GetAnycastIpListCommandInput,
    GetAnycastIpListCommandOutput,
    CloudFrontClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudFrontClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Cloudfront2020_05_31", "GetAnycastIpList", {})
  .n("CloudFrontClient", "GetAnycastIpListCommand")
  .f(void 0, void 0)
  .ser(se_GetAnycastIpListCommand)
  .de(de_GetAnycastIpListCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAnycastIpListRequest;
      output: GetAnycastIpListResult;
    };
    sdk: {
      input: GetAnycastIpListCommandInput;
      output: GetAnycastIpListCommandOutput;
    };
  };
}
