// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateAnycastIpListRequest, CreateAnycastIpListResult } from "../models/models_0";
import { CreateAnycastIpList } from "../schemas/schemas_0";

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
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
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
 *   IpAddressType: "ipv4" || "ipv6" || "dualstack",
 *   IpamCidrConfigs: [ // IpamCidrConfigList
 *     { // IpamCidrConfig
 *       Cidr: "STRING_VALUE", // required
 *       IpamPoolArn: "STRING_VALUE", // required
 *       AnycastIp: "STRING_VALUE",
 *       Status: "provisioned" || "failed-provision" || "provisioning" || "deprovisioned" || "failed-deprovision" || "deprovisioning" || "advertised" || "failed-advertise" || "advertising" || "withdrawn" || "failed-withdraw" || "withdrawing",
 *     },
 *   ],
 * };
 * const command = new CreateAnycastIpListCommand(input);
 * const response = await client.send(command);
 * // { // CreateAnycastIpListResult
 * //   AnycastIpList: { // AnycastIpList
 * //     Id: "STRING_VALUE", // required
 * //     Name: "STRING_VALUE", // required
 * //     Status: "STRING_VALUE", // required
 * //     Arn: "STRING_VALUE", // required
 * //     IpAddressType: "ipv4" || "ipv6" || "dualstack",
 * //     IpamConfig: { // IpamConfig
 * //       Quantity: Number("int"), // required
 * //       IpamCidrConfigs: [ // IpamCidrConfigList // required
 * //         { // IpamCidrConfig
 * //           Cidr: "STRING_VALUE", // required
 * //           IpamPoolArn: "STRING_VALUE", // required
 * //           AnycastIp: "STRING_VALUE",
 * //           Status: "provisioned" || "failed-provision" || "provisioning" || "deprovisioned" || "failed-deprovision" || "deprovisioning" || "advertised" || "failed-advertise" || "advertising" || "withdrawn" || "failed-withdraw" || "withdrawing",
 * //         },
 * //       ],
 * //     },
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
 *  <p>The entity already exists. You must provide a unique entity.</p>
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
 *  <p>This operation is not supported in this Amazon Web Services Region.</p>
 *
 * @throws {@link CloudFrontServiceException}
 * <p>Base exception class for all service exceptions from CloudFront service.</p>
 *
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Cloudfront2020_05_31", "CreateAnycastIpList", {})
  .n("CloudFrontClient", "CreateAnycastIpListCommand")
  .sc(CreateAnycastIpList)
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
