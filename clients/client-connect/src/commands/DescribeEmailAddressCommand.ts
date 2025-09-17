// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeEmailAddressRequest,
  DescribeEmailAddressResponse,
  DescribeEmailAddressResponseFilterSensitiveLog,
} from "../models/models_1";
import { de_DescribeEmailAddressCommand, se_DescribeEmailAddressCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeEmailAddressCommand}.
 */
export interface DescribeEmailAddressCommandInput extends DescribeEmailAddressRequest {}
/**
 * @public
 *
 * The output of {@link DescribeEmailAddressCommand}.
 */
export interface DescribeEmailAddressCommandOutput extends DescribeEmailAddressResponse, __MetadataBearer {}

/**
 * <p>Describe email address form the specified Amazon Connect instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DescribeEmailAddressCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DescribeEmailAddressCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // DescribeEmailAddressRequest
 *   InstanceId: "STRING_VALUE", // required
 *   EmailAddressId: "STRING_VALUE", // required
 * };
 * const command = new DescribeEmailAddressCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEmailAddressResponse
 * //   EmailAddressId: "STRING_VALUE",
 * //   EmailAddressArn: "STRING_VALUE",
 * //   EmailAddress: "STRING_VALUE",
 * //   DisplayName: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   CreateTimestamp: "STRING_VALUE",
 * //   ModifiedTimestamp: "STRING_VALUE",
 * //   Tags: { // TagMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeEmailAddressCommandInput - {@link DescribeEmailAddressCommandInput}
 * @returns {@link DescribeEmailAddressCommandOutput}
 * @see {@link DescribeEmailAddressCommandInput} for command's `input` shape.
 * @see {@link DescribeEmailAddressCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
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
export class DescribeEmailAddressCommand extends $Command
  .classBuilder<
    DescribeEmailAddressCommandInput,
    DescribeEmailAddressCommandOutput,
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
  .s("AmazonConnectService", "DescribeEmailAddress", {})
  .n("ConnectClient", "DescribeEmailAddressCommand")
  .f(void 0, DescribeEmailAddressResponseFilterSensitiveLog)
  .ser(se_DescribeEmailAddressCommand)
  .de(de_DescribeEmailAddressCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeEmailAddressRequest;
      output: DescribeEmailAddressResponse;
    };
    sdk: {
      input: DescribeEmailAddressCommandInput;
      output: DescribeEmailAddressCommandOutput;
    };
  };
}
