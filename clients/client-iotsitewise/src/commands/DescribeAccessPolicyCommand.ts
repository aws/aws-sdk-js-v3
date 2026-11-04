// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeAccessPolicyRequest, DescribeAccessPolicyResponse } from "../models/models_0";
import { DescribeAccessPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeAccessPolicyCommand}.
 */
export interface DescribeAccessPolicyCommandInput extends DescribeAccessPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAccessPolicyCommand}.
 */
export interface DescribeAccessPolicyCommandOutput extends DescribeAccessPolicyResponse, __MetadataBearer {}

/**
 * Describes an access policy, which specifies an identity's access to an IoT SiteWise Monitor portal or project.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, DescribeAccessPolicyCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, DescribeAccessPolicyCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // DescribeAccessPolicyRequest
 *   accessPolicyId: "STRING_VALUE", // required
 * };
 * const command = new DescribeAccessPolicyCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAccessPolicyResponse
 * //   accessPolicyId: "STRING_VALUE", // required
 * //   accessPolicyArn: "STRING_VALUE", // required
 * //   accessPolicyIdentity: { // Identity
 * //     user: { // UserIdentity
 * //       id: "STRING_VALUE", // required
 * //     },
 * //     group: { // GroupIdentity
 * //       id: "STRING_VALUE", // required
 * //     },
 * //     iamUser: { // IAMUserIdentity
 * //       arn: "STRING_VALUE", // required
 * //     },
 * //     iamRole: { // IAMRoleIdentity
 * //       arn: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   accessPolicyResource: { // Resource
 * //     portal: { // PortalResource
 * //       id: "STRING_VALUE", // required
 * //     },
 * //     project: { // ProjectResource
 * //       id: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   accessPolicyPermission: "ADMINISTRATOR" || "VIEWER", // required
 * //   accessPolicyCreationDate: new Date("TIMESTAMP"), // required
 * //   accessPolicyLastUpdateDate: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param DescribeAccessPolicyCommandInput - {@link DescribeAccessPolicyCommandInput}
 * @returns {@link DescribeAccessPolicyCommandOutput}
 * @see {@link DescribeAccessPolicyCommandInput} for command's `input` shape.
 * @see {@link DescribeAccessPolicyCommandOutput} for command's `response` shape.
 * @see {@link IoTSiteWiseClientResolvedConfig | config} for IoTSiteWiseClient's `config` shape.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * IoT SiteWise can't process your request right now. Try again later.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request isn't valid. This can occur if your request contains malformed JSON or unsupported characters. Check your request and try again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource can't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Your request exceeded a rate limit. For example, you might have exceeded the number of IoT SiteWise assets that can be created per second, the allowed number of messages per second, and so on.
 *
 * For more information, see [Quotas](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html) in the *IoT SiteWise User Guide*.
 *
 * @throws {@link IoTSiteWiseServiceException}
 *
 * Base exception class for all service exceptions from IoTSiteWise service.
 *
 * @public
 */
export class DescribeAccessPolicyCommand extends command<DescribeAccessPolicyCommandInput, DescribeAccessPolicyCommandOutput>(
  _ep0,
  _mw0,
  "DescribeAccessPolicy",
  DescribeAccessPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAccessPolicyRequest;
      output: DescribeAccessPolicyResponse;
    };
    sdk: {
      input: DescribeAccessPolicyCommandInput;
      output: DescribeAccessPolicyCommandOutput;
    };
  };
}
