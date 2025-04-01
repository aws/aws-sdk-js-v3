// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeSDKIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKIdentityClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeAppInstanceUserRequest,
  DescribeAppInstanceUserResponse,
  DescribeAppInstanceUserResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeAppInstanceUserCommand, se_DescribeAppInstanceUserCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Returns the full details of an <code>AppInstanceUser</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKIdentityClient, DescribeAppInstanceUserCommand } from "@aws-sdk/client-chime-sdk-identity"; // ES Modules import
 * // const { ChimeSDKIdentityClient, DescribeAppInstanceUserCommand } = require("@aws-sdk/client-chime-sdk-identity"); // CommonJS import
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
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 * @throws {@link ChimeSDKIdentityServiceException}
 * <p>Base exception class for all service exceptions from ChimeSDKIdentity service.</p>
 *
 *
 * @public
 */
export class DescribeAppInstanceUserCommand extends $Command
  .classBuilder<
    DescribeAppInstanceUserCommandInput,
    DescribeAppInstanceUserCommandOutput,
    ChimeSDKIdentityClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKIdentityClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ChimeIdentityService", "DescribeAppInstanceUser", {})
  .n("ChimeSDKIdentityClient", "DescribeAppInstanceUserCommand")
  .f(void 0, DescribeAppInstanceUserResponseFilterSensitiveLog)
  .ser(se_DescribeAppInstanceUserCommand)
  .de(de_DescribeAppInstanceUserCommand)
  .build() {
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
