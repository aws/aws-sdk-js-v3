// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateAccessPolicyRequest, CreateAccessPolicyResponse } from "../models/models_0";
import { CreateAccessPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateAccessPolicyCommand}.
 */
export interface CreateAccessPolicyCommandInput extends CreateAccessPolicyRequest {}
/**
 * @public
 *
 * The output of {@link CreateAccessPolicyCommand}.
 */
export interface CreateAccessPolicyCommandOutput extends CreateAccessPolicyResponse, __MetadataBearer {}

/**
 * > **Important:** The IoT SiteWise Monitor feature will no longer be open to new customers starting November 7, 2025. If you would like to use the IoT SiteWise Monitor feature, sign up prior to that date. Existing customers can continue to use the service as normal. For more information, see [IoT SiteWise Monitor availability change](https://docs.aws.amazon.com/iot-sitewise/latest/appguide/iotsitewise-monitor-availability-change.html).
 *
 * Creates an access policy that grants the specified identity (IAM Identity Center user, IAM Identity Center group, or IAM user) access to the specified IoT SiteWise Monitor portal or project resource.
 *
 * > **Note:** Support for access policies that use an SSO Group as the identity is not supported at this time.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTSiteWiseClient, CreateAccessPolicyCommand } from "@aws-sdk/client-iotsitewise"; // ES Modules import
 * // const { IoTSiteWiseClient, CreateAccessPolicyCommand } = require("@aws-sdk/client-iotsitewise"); // CommonJS import
 * // import type { IoTSiteWiseClientConfig } from "@aws-sdk/client-iotsitewise";
 * const config = {}; // type is IoTSiteWiseClientConfig
 * const client = new IoTSiteWiseClient(config);
 * const input = { // CreateAccessPolicyRequest
 *   accessPolicyIdentity: { // Identity
 *     user: { // UserIdentity
 *       id: "STRING_VALUE", // required
 *     },
 *     group: { // GroupIdentity
 *       id: "STRING_VALUE", // required
 *     },
 *     iamUser: { // IAMUserIdentity
 *       arn: "STRING_VALUE", // required
 *     },
 *     iamRole: { // IAMRoleIdentity
 *       arn: "STRING_VALUE", // required
 *     },
 *   },
 *   accessPolicyResource: { // Resource
 *     portal: { // PortalResource
 *       id: "STRING_VALUE", // required
 *     },
 *     project: { // ProjectResource
 *       id: "STRING_VALUE", // required
 *     },
 *   },
 *   accessPolicyPermission: "ADMINISTRATOR" || "VIEWER", // required
 *   clientToken: "STRING_VALUE",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateAccessPolicyCommand(input);
 * const response = await client.send(command);
 * // { // CreateAccessPolicyResponse
 * //   accessPolicyId: "STRING_VALUE", // required
 * //   accessPolicyArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateAccessPolicyCommandInput - {@link CreateAccessPolicyCommandInput}
 * @returns {@link CreateAccessPolicyCommandOutput}
 * @see {@link CreateAccessPolicyCommandInput} for command's `input` shape.
 * @see {@link CreateAccessPolicyCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *
 * You've reached the quota for a resource. For example, this can occur if you're trying to associate more than the allowed number of child assets or attempting to create more than the allowed number of properties for an asset model.
 *
 * For more information, see [Quotas](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html) in the *IoT SiteWise User Guide*.
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
export class CreateAccessPolicyCommand extends command<CreateAccessPolicyCommandInput, CreateAccessPolicyCommandOutput>(
  _ep0,
  _mw0,
  "CreateAccessPolicy",
  CreateAccessPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAccessPolicyRequest;
      output: CreateAccessPolicyResponse;
    };
    sdk: {
      input: CreateAccessPolicyCommandInput;
      output: CreateAccessPolicyCommandOutput;
    };
  };
}
