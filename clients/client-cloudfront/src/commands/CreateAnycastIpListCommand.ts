// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateAnycastIpListRequest, CreateAnycastIpListResult } from "../models/models_0";
import { de_CreateAnycastIpListCommand, se_CreateAnycastIpListCommand } from "../protocols/Aws_restXml";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAnycastIpListCommand}.
 */
export interface CreateAnycastIpListCommandInput extends CreateAnycastIpListRequest {}
/**
 * @public
 *
 * The output of {@link CreateAnycastIpListCommand}.
 */
export interface CreateAnycastIpListCommandOutput extends CreateAnycastIpListResult, __MetadataBearer {}

/**
 * <p>Creates an Anycast static IP list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, CreateAnycastIpListCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, CreateAnycastIpListCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * const client = new CloudFrontClient(config);
 * const input = { // CreateAnycastIpListRequest
 *   Name: "STRING_VALUE", // required
 *   IpCount: Number("int"), // required
 *   Tags: { // Tags
 *     Items: [ // TagList
 *       { // Tag
 *         Key: "STRING_VALUE", // required
 *         Value: "STRING_VALUE",
 *       },
 *     ],
 *   },
 * };
 * const command = new CreateAnycastIpListCommand(input);
 * const response = await client.send(command);
 * // { // CreateAnycastIpListResult
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
 * @param CreateAnycastIpListCommandInput - {@link CreateAnycastIpListCommandInput}
 * @returns {@link CreateAnycastIpListCommandOutput}
 * @see {@link CreateAnycastIpListCommandInput} for command's `input` shape.
 * @see {@link CreateAnycastIpListCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *  <p>Access denied.</p>
 *
 * @throws {@link EntityAlreadyExists} (client fault)
 *  <p>The entity already exists. You must provide a unique
 * 			entity.</p>
 *
 * @throws {@link EntityLimitExceeded} (client fault)
 *  <p>The entity limit has been exceeded.</p>
 *
 * @throws {@link InvalidArgument} (client fault)
 *  <p>An argument is invalid.</p>
 *
 * @throws {@link InvalidTagging} (client fault)
 *  <p>The tagging specified is not valid.</p>
 *
 * @throws {@link UnsupportedOperation} (client fault)
 *  <p>This operation is not supported in this region.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
 * @public
 */
export class CreateAnycastIpListCommand extends $Command
  .classBuilder<
    CreateAnycastIpListCommandInput,
    CreateAnycastIpListCommandOutput,
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
  .s("Cloudfront2020_05_31", "CreateAnycastIpList", {})
  .n("CloudFrontClient", "CreateAnycastIpListCommand")
  .f(void 0, void 0)
  .ser(se_CreateAnycastIpListCommand)
  .de(de_CreateAnycastIpListCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAnycastIpListRequest;
      output: CreateAnycastIpListResult;
    };
    sdk: {
      input: CreateAnycastIpListCommandInput;
      output: CreateAnycastIpListCommandOutput;
    };
  };
}
