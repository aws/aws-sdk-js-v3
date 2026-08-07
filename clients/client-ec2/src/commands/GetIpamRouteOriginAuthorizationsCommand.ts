// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetIpamRouteOriginAuthorizationsRequest,
  GetIpamRouteOriginAuthorizationsResult,
} from "../models/models_6";
import { GetIpamRouteOriginAuthorizations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetIpamRouteOriginAuthorizationsCommand}.
 */
export interface GetIpamRouteOriginAuthorizationsCommandInput extends GetIpamRouteOriginAuthorizationsRequest {}
/**
 * @public
 *
 * The output of {@link GetIpamRouteOriginAuthorizationsCommand}.
 */
export interface GetIpamRouteOriginAuthorizationsCommandOutput extends GetIpamRouteOriginAuthorizationsResult, __MetadataBearer {}

/**
 * <p>Retrieves the current Route Origin Authorizations (ROAs) published to the RPKI for an IPAM internet registry association. We recommend using pagination to ensure that the operation returns quickly and successfully.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetIpamRouteOriginAuthorizationsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetIpamRouteOriginAuthorizationsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // GetIpamRouteOriginAuthorizationsRequest
 *   DryRun: true || false,
 *   IpamInternetRegistryAssociationId: "STRING_VALUE", // required
 *   Cidr: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetIpamRouteOriginAuthorizationsCommand(input);
 * const response = await client.send(command);
 * // { // GetIpamRouteOriginAuthorizationsResult
 * //   IpamRouteOriginAuthorizations: [ // IpamRouteOriginAuthorizationInfoSet
 * //     { // IpamRouteOriginAuthorizationInfo
 * //       Cidr: "STRING_VALUE",
 * //       Asn: "STRING_VALUE",
 * //       MaxLength: Number("int"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetIpamRouteOriginAuthorizationsCommandInput - {@link GetIpamRouteOriginAuthorizationsCommandInput}
 * @returns {@link GetIpamRouteOriginAuthorizationsCommandOutput}
 * @see {@link GetIpamRouteOriginAuthorizationsCommandInput} for command's `input` shape.
 * @see {@link GetIpamRouteOriginAuthorizationsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class GetIpamRouteOriginAuthorizationsCommand extends command<GetIpamRouteOriginAuthorizationsCommandInput, GetIpamRouteOriginAuthorizationsCommandOutput>(
  _ep0,
  _mw0,
  "GetIpamRouteOriginAuthorizations",
  GetIpamRouteOriginAuthorizations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetIpamRouteOriginAuthorizationsRequest;
      output: GetIpamRouteOriginAuthorizationsResult;
    };
    sdk: {
      input: GetIpamRouteOriginAuthorizationsCommandInput;
      output: GetIpamRouteOriginAuthorizationsCommandOutput;
    };
  };
}
