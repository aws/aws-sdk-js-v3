// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeAuthenticationProfileRequest, DescribeAuthenticationProfileResponse } from "../models/models_1";
import { DescribeAuthenticationProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeAuthenticationProfileCommand}.
 */
export interface DescribeAuthenticationProfileCommandInput extends DescribeAuthenticationProfileRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAuthenticationProfileCommand}.
 */
export interface DescribeAuthenticationProfileCommandOutput extends DescribeAuthenticationProfileResponse, __MetadataBearer {}

/**
 * This API is in preview release for Connect Customer and is subject to change. To request access to this API, contact Amazon Web Services Support.
 *
 * Describes the target authentication profile.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DescribeAuthenticationProfileCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DescribeAuthenticationProfileCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // DescribeAuthenticationProfileRequest
 *   AuthenticationProfileId: "STRING_VALUE", // required
 *   InstanceId: "STRING_VALUE", // required
 * };
 * const command = new DescribeAuthenticationProfileCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAuthenticationProfileResponse
 * //   AuthenticationProfile: { // AuthenticationProfile
 * //     Id: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     AllowedIps: [ // IpCidrList
 * //       "STRING_VALUE",
 * //     ],
 * //     BlockedIps: [
 * //       "STRING_VALUE",
 * //     ],
 * //     IsDefault: true || false,
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //     LastModifiedTime: new Date("TIMESTAMP"),
 * //     LastModifiedRegion: "STRING_VALUE",
 * //     PeriodicSessionDuration: Number("int"),
 * //     MaxSessionDuration: Number("int"),
 * //     SessionInactivityDuration: Number("int"),
 * //     SessionInactivityHandlingEnabled: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAuthenticationProfileCommandInput - {@link DescribeAuthenticationProfileCommandInput}
 * @returns {@link DescribeAuthenticationProfileCommandOutput}
 * @see {@link DescribeAuthenticationProfileCommandInput} for command's `input` shape.
 * @see {@link DescribeAuthenticationProfileCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the specified parameters are not valid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
 *
 * @public
 */
export class DescribeAuthenticationProfileCommand extends command<DescribeAuthenticationProfileCommandInput, DescribeAuthenticationProfileCommandOutput>(
  _ep0,
  _mw0,
  "DescribeAuthenticationProfile",
  DescribeAuthenticationProfile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAuthenticationProfileRequest;
      output: DescribeAuthenticationProfileResponse;
    };
    sdk: {
      input: DescribeAuthenticationProfileCommandInput;
      output: DescribeAuthenticationProfileCommandOutput;
    };
  };
}
