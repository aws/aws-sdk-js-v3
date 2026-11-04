// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateAnycastIpListRequest, UpdateAnycastIpListResult } from "../models/models_1";
import { UpdateAnycastIpList$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateAnycastIpListCommand}.
 */
export interface UpdateAnycastIpListCommandInput extends UpdateAnycastIpListRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAnycastIpListCommand}.
 */
export interface UpdateAnycastIpListCommandOutput extends UpdateAnycastIpListResult, __MetadataBearer {}

/**
 * Updates an Anycast static IP list.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFrontClient, UpdateAnycastIpListCommand } from "@aws-sdk/client-cloudfront"; // ES Modules import
 * // const { CloudFrontClient, UpdateAnycastIpListCommand } = require("@aws-sdk/client-cloudfront"); // CommonJS import
 * // import type { CloudFrontClientConfig } from "@aws-sdk/client-cloudfront";
 * const config = {}; // type is CloudFrontClientConfig
 * const client = new CloudFrontClient(config);
 * const input = { // UpdateAnycastIpListRequest
 *   Id: "STRING_VALUE", // required
 *   IpAddressType: "ipv4" || "ipv6" || "dualstack",
 *   IpamCidrConfigs: [ // IpamCidrConfigList
 *     { // IpamCidrConfig
 *       Cidr: "STRING_VALUE", // required
 *       IpamPoolArn: "STRING_VALUE", // required
 *       AnycastIp: "STRING_VALUE",
 *       Status: "provisioned" || "failed-provision" || "provisioning" || "deprovisioned" || "failed-deprovision" || "deprovisioning" || "advertised" || "failed-advertise" || "advertising" || "withdrawn" || "failed-withdraw" || "withdrawing",
 *     },
 *   ],
 *   IfMatch: "STRING_VALUE", // required
 * };
 * const command = new UpdateAnycastIpListCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAnycastIpListResult
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
 * @param UpdateAnycastIpListCommandInput - {@link UpdateAnycastIpListCommandInput}
 * @returns {@link UpdateAnycastIpListCommandOutput}
 * @see {@link UpdateAnycastIpListCommandInput} for command's `input` shape.
 * @see {@link UpdateAnycastIpListCommandOutput} for command's `response` shape.
 * @see {@link CloudFrontClientResolvedConfig | config} for CloudFrontClient's `config` shape.
 *
 * @throws {@link AccessDenied} (client fault)
 *
 * Access denied.
 *
 * @throws {@link EntityNotFound} (client fault)
 *
 * The entity was not found.
 *
 * @throws {@link InvalidArgument} (client fault)
 *
 * An argument is invalid.
 *
 * @throws {@link InvalidIfMatchVersion} (client fault)
 *
 * The `If-Match` version is missing or not valid.
 *
 * @throws {@link PreconditionFailed} (client fault)
 *
 * The precondition in one or more of the request fields evaluated to `false`.
 *
 * @throws {@link UnsupportedOperation} (client fault)
 *
 * This operation is not supported in this Amazon Web Services Region.
 *
 * @throws {@link CloudFrontServiceException}
 *
 * Base exception class for all service exceptions from CloudFront service.
 *
 * @public
 */
export class UpdateAnycastIpListCommand extends command<UpdateAnycastIpListCommandInput, UpdateAnycastIpListCommandOutput>(
  _ep0,
  _mw0,
  "UpdateAnycastIpList",
  UpdateAnycastIpList$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAnycastIpListRequest;
      output: UpdateAnycastIpListResult;
    };
    sdk: {
      input: UpdateAnycastIpListCommandInput;
      output: UpdateAnycastIpListCommandOutput;
    };
  };
}
