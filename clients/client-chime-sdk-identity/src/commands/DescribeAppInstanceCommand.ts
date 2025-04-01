// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeSDKIdentityClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKIdentityClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeAppInstanceRequest,
  DescribeAppInstanceResponse,
  DescribeAppInstanceResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeAppInstanceCommand, se_DescribeAppInstanceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAppInstanceCommand}.
 */
export interface DescribeAppInstanceCommandInput extends DescribeAppInstanceRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAppInstanceCommand}.
 */
export interface DescribeAppInstanceCommandOutput extends DescribeAppInstanceResponse, __MetadataBearer {}

/**
 * <p>Returns the full details of an <code>AppInstance</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKIdentityClient, DescribeAppInstanceCommand } from "@aws-sdk/client-chime-sdk-identity"; // ES Modules import
 * // const { ChimeSDKIdentityClient, DescribeAppInstanceCommand } = require("@aws-sdk/client-chime-sdk-identity"); // CommonJS import
 * const client = new ChimeSDKIdentityClient(config);
 * const input = { // DescribeAppInstanceRequest
 *   AppInstanceArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeAppInstanceCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAppInstanceResponse
 * //   AppInstance: { // AppInstance
 * //     AppInstanceArn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     CreatedTimestamp: new Date("TIMESTAMP"),
 * //     LastUpdatedTimestamp: new Date("TIMESTAMP"),
 * //     Metadata: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAppInstanceCommandInput - {@link DescribeAppInstanceCommandInput}
 * @returns {@link DescribeAppInstanceCommandOutput}
 * @see {@link DescribeAppInstanceCommandInput} for command's `input` shape.
 * @see {@link DescribeAppInstanceCommandOutput} for command's `response` shape.
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
export class DescribeAppInstanceCommand extends $Command
  .classBuilder<
    DescribeAppInstanceCommandInput,
    DescribeAppInstanceCommandOutput,
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
  .s("ChimeIdentityService", "DescribeAppInstance", {})
  .n("ChimeSDKIdentityClient", "DescribeAppInstanceCommand")
  .f(void 0, DescribeAppInstanceResponseFilterSensitiveLog)
  .ser(se_DescribeAppInstanceCommand)
  .de(de_DescribeAppInstanceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAppInstanceRequest;
      output: DescribeAppInstanceResponse;
    };
    sdk: {
      input: DescribeAppInstanceCommandInput;
      output: DescribeAppInstanceCommandOutput;
    };
  };
}
