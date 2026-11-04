// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeAppInstanceAdminRequest, DescribeAppInstanceAdminResponse } from "../models/models_0";
import { DescribeAppInstanceAdmin$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeAppInstanceAdminCommand}.
 */
export interface DescribeAppInstanceAdminCommandInput extends DescribeAppInstanceAdminRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAppInstanceAdminCommand}.
 */
export interface DescribeAppInstanceAdminCommandOutput extends DescribeAppInstanceAdminResponse, __MetadataBearer {}

/**
 * Returns the full details of an `AppInstanceAdmin`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKIdentityClient, DescribeAppInstanceAdminCommand } from "@aws-sdk/client-chime-sdk-identity"; // ES Modules import
 * // const { ChimeSDKIdentityClient, DescribeAppInstanceAdminCommand } = require("@aws-sdk/client-chime-sdk-identity"); // CommonJS import
 * // import type { ChimeSDKIdentityClientConfig } from "@aws-sdk/client-chime-sdk-identity";
 * const config = {}; // type is ChimeSDKIdentityClientConfig
 * const client = new ChimeSDKIdentityClient(config);
 * const input = { // DescribeAppInstanceAdminRequest
 *   AppInstanceAdminArn: "STRING_VALUE", // required
 *   AppInstanceArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeAppInstanceAdminCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAppInstanceAdminResponse
 * //   AppInstanceAdmin: { // AppInstanceAdmin
 * //     Admin: { // Identity
 * //       Arn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //     },
 * //     AppInstanceArn: "STRING_VALUE",
 * //     CreatedTimestamp: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAppInstanceAdminCommandInput - {@link DescribeAppInstanceAdminCommandInput}
 * @returns {@link DescribeAppInstanceAdminCommandOutput}
 * @see {@link DescribeAppInstanceAdminCommandInput} for command's `input` shape.
 * @see {@link DescribeAppInstanceAdminCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKIdentityClientResolvedConfig | config} for ChimeSDKIdentityClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input parameters don't match the service's restrictions.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * The client is permanently forbidden from making the request.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *
 * The service encountered an unexpected error.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is currently unavailable.
 *
 * @throws {@link ThrottledClientException} (client fault)
 *
 * The client exceeded its request rate limit.
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *
 * The client is not currently authorized to make the request.
 *
 * @throws {@link ChimeSDKIdentityServiceException}
 *
 * Base exception class for all service exceptions from ChimeSDKIdentity service.
 *
 * @public
 */
export class DescribeAppInstanceAdminCommand extends command<DescribeAppInstanceAdminCommandInput, DescribeAppInstanceAdminCommandOutput>(
  _ep0,
  _mw0,
  "DescribeAppInstanceAdmin",
  DescribeAppInstanceAdmin$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAppInstanceAdminRequest;
      output: DescribeAppInstanceAdminResponse;
    };
    sdk: {
      input: DescribeAppInstanceAdminCommandInput;
      output: DescribeAppInstanceAdminCommandOutput;
    };
  };
}
