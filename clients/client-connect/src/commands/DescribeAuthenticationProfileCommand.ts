// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeAuthenticationProfileRequest, DescribeAuthenticationProfileResponse } from "../models/models_1";
import {
  de_DescribeAuthenticationProfileCommand,
  se_DescribeAuthenticationProfileCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface DescribeAuthenticationProfileCommandOutput
  extends DescribeAuthenticationProfileResponse,
    __MetadataBearer {}

/**
 * <p>This API is in preview release for Amazon Connect and is subject to change. To
 * request access to this API, contact Amazon Web ServicesSupport.</p>
 *          <p>Describes the target authentication profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DescribeAuthenticationProfileCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DescribeAuthenticationProfileCommand } = require("@aws-sdk/client-connect"); // CommonJS import
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
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class DescribeAuthenticationProfileCommand extends $Command
  .classBuilder<
    DescribeAuthenticationProfileCommandInput,
    DescribeAuthenticationProfileCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "DescribeAuthenticationProfile", {})
  .n("ConnectClient", "DescribeAuthenticationProfileCommand")
  .f(void 0, void 0)
  .ser(se_DescribeAuthenticationProfileCommand)
  .de(de_DescribeAuthenticationProfileCommand)
  .build() {
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
