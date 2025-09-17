// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeSessionsRequest, DescribeSessionsResult } from "../models/models_0";
import { de_DescribeSessionsCommand, se_DescribeSessionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeSessionsCommand}.
 */
export interface DescribeSessionsCommandInput extends DescribeSessionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeSessionsCommand}.
 */
export interface DescribeSessionsCommandOutput extends DescribeSessionsResult, __MetadataBearer {}

/**
 * <p>Retrieves a list that describes the streaming sessions for a specified stack and fleet. If a UserId is provided for the stack and fleet,
 *             only streaming sessions for that user are described. If an authentication type is not provided,
 *             the default is to authenticate users using a streaming URL.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppStreamClient, DescribeSessionsCommand } from "@aws-sdk/client-appstream"; // ES Modules import
 * // const { AppStreamClient, DescribeSessionsCommand } = require("@aws-sdk/client-appstream"); // CommonJS import
 * // import type { AppStreamClientConfig } from "@aws-sdk/client-appstream";
 * const config = {}; // type is AppStreamClientConfig
 * const client = new AppStreamClient(config);
 * const input = { // DescribeSessionsRequest
 *   StackName: "STRING_VALUE", // required
 *   FleetName: "STRING_VALUE", // required
 *   UserId: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   Limit: Number("int"),
 *   AuthenticationType: "API" || "SAML" || "USERPOOL" || "AWS_AD",
 *   InstanceId: "STRING_VALUE",
 * };
 * const command = new DescribeSessionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeSessionsResult
 * //   Sessions: [ // SessionList
 * //     { // Session
 * //       Id: "STRING_VALUE", // required
 * //       UserId: "STRING_VALUE", // required
 * //       StackName: "STRING_VALUE", // required
 * //       FleetName: "STRING_VALUE", // required
 * //       State: "ACTIVE" || "PENDING" || "EXPIRED", // required
 * //       ConnectionState: "CONNECTED" || "NOT_CONNECTED",
 * //       StartTime: new Date("TIMESTAMP"),
 * //       MaxExpirationTime: new Date("TIMESTAMP"),
 * //       AuthenticationType: "API" || "SAML" || "USERPOOL" || "AWS_AD",
 * //       NetworkAccessConfiguration: { // NetworkAccessConfiguration
 * //         EniPrivateIpAddress: "STRING_VALUE",
 * //         EniId: "STRING_VALUE",
 * //       },
 * //       InstanceId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeSessionsCommandInput - {@link DescribeSessionsCommandInput}
 * @returns {@link DescribeSessionsCommandOutput}
 * @see {@link DescribeSessionsCommandInput} for command's `input` shape.
 * @see {@link DescribeSessionsCommandOutput} for command's `response` shape.
 * @see {@link AppStreamClientResolvedConfig | config} for AppStreamClient's `config` shape.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Indicates an incorrect combination of parameters, or a missing parameter.</p>
 *
 * @throws {@link AppStreamServiceException}
 * <p>Base exception class for all service exceptions from AppStream service.</p>
 *
 *
 * @public
 */
export class DescribeSessionsCommand extends $Command
  .classBuilder<
    DescribeSessionsCommandInput,
    DescribeSessionsCommandOutput,
    AppStreamClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppStreamClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("PhotonAdminProxyService", "DescribeSessions", {})
  .n("AppStreamClient", "DescribeSessionsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeSessionsCommand)
  .de(de_DescribeSessionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeSessionsRequest;
      output: DescribeSessionsResult;
    };
    sdk: {
      input: DescribeSessionsCommandInput;
      output: DescribeSessionsCommandOutput;
    };
  };
}
