// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeAppInstanceUserRequest, DescribeAppInstanceUserResponse } from "../models/models_0";
import { DescribeAppInstanceUser$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeAppInstanceUserCommand}.
 */
export interface DescribeAppInstanceUserCommandInput extends DescribeAppInstanceUserRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAppInstanceUserCommand}.
 */
export interface DescribeAppInstanceUserCommandOutput extends DescribeAppInstanceUserResponse, __MetadataBearer {}

/**
 * Returns the full details of an `AppInstanceUser`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKIdentityClient, DescribeAppInstanceUserCommand } from "@aws-sdk/client-chime-sdk-identity"; // ES Modules import
 * // const { ChimeSDKIdentityClient, DescribeAppInstanceUserCommand } = require("@aws-sdk/client-chime-sdk-identity"); // CommonJS import
 * // import type { ChimeSDKIdentityClientConfig } from "@aws-sdk/client-chime-sdk-identity";
 * const config = {}; // type is ChimeSDKIdentityClientConfig
 * const client = new ChimeSDKIdentityClient(config);
 * const input = { // DescribeAppInstanceUserRequest
 *   AppInstanceUserArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeAppInstanceUserCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAppInstanceUserResponse
 * //   AppInstanceUser: { // AppInstanceUser
 * //     AppInstanceUserArn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Metadata: "STRING_VALUE",
 * //     CreatedTimestamp: new Date("TIMESTAMP"),
 * //     LastUpdatedTimestamp: new Date("TIMESTAMP"),
 * //     ExpirationSettings: { // ExpirationSettings
 * //       ExpirationDays: Number("int"), // required
 * //       ExpirationCriterion: "CREATED_TIMESTAMP", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAppInstanceUserCommandInput - {@link DescribeAppInstanceUserCommandInput}
 * @returns {@link DescribeAppInstanceUserCommandOutput}
 * @see {@link DescribeAppInstanceUserCommandInput} for command's `input` shape.
 * @see {@link DescribeAppInstanceUserCommandOutput} for command's `response` shape.
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
export class DescribeAppInstanceUserCommand extends command<DescribeAppInstanceUserCommandInput, DescribeAppInstanceUserCommandOutput>(
  _ep0,
  _mw0,
  "DescribeAppInstanceUser",
  DescribeAppInstanceUser$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAppInstanceUserRequest;
      output: DescribeAppInstanceUserResponse;
    };
    sdk: {
      input: DescribeAppInstanceUserCommandInput;
      output: DescribeAppInstanceUserCommandOutput;
    };
  };
}
