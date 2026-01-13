// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeRemediationExceptionsRequest, DescribeRemediationExceptionsResponse } from "../models/models_0";
import { DescribeRemediationExceptions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeRemediationExceptionsCommand}.
 */
export interface DescribeRemediationExceptionsCommandInput extends DescribeRemediationExceptionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRemediationExceptionsCommand}.
 */
export interface DescribeRemediationExceptionsCommandOutput extends DescribeRemediationExceptionsResponse, __MetadataBearer {}

/**
 * <p>Returns the details of one or more remediation exceptions. A detailed view of a remediation exception for a set of resources that includes an explanation of an exception and the time when the exception will be deleted.
 * 			When you specify the limit and the next token, you receive a paginated response. </p>
 *          <note>
 *             <p>Config generates a remediation exception when a problem occurs executing a remediation action to a specific resource.
 * 				Remediation exceptions blocks auto-remediation until the exception is cleared.</p>
 *             <p>When you specify the limit and the next token, you receive a paginated response. </p>
 *             <p>Limit and next token are not applicable if you request resources in batch. It is only applicable, when you request all resources.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribeRemediationExceptionsCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribeRemediationExceptionsCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * // import type { ConfigServiceClientConfig } from "@aws-sdk/client-config-service";
 * const config = {}; // type is ConfigServiceClientConfig
 * const client = new ConfigServiceClient(config);
 * const input = { // DescribeRemediationExceptionsRequest
 *   ConfigRuleName: "STRING_VALUE", // required
 *   ResourceKeys: [ // RemediationExceptionResourceKeys
 *     { // RemediationExceptionResourceKey
 *       ResourceType: "STRING_VALUE",
 *       ResourceId: "STRING_VALUE",
 *     },
 *   ],
 *   Limit: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeRemediationExceptionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRemediationExceptionsResponse
 * //   RemediationExceptions: [ // RemediationExceptions
 * //     { // RemediationException
 * //       ConfigRuleName: "STRING_VALUE", // required
 * //       ResourceType: "STRING_VALUE", // required
 * //       ResourceId: "STRING_VALUE", // required
 * //       Message: "STRING_VALUE",
 * //       ExpirationTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeRemediationExceptionsCommandInput - {@link DescribeRemediationExceptionsCommandInput}
 * @returns {@link DescribeRemediationExceptionsCommandOutput}
 * @see {@link DescribeRemediationExceptionsCommandInput} for command's `input` shape.
 * @see {@link DescribeRemediationExceptionsCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for ConfigServiceClient's `config` shape.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The specified next token is not valid. Specify the
 * 				<code>nextToken</code> string that was returned in the previous
 * 			response to get the next page of results.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more of the specified parameters are not valid. Verify
 * 			that your parameters are valid and try again.</p>
 *
 * @throws {@link ConfigServiceServiceException}
 * <p>Base exception class for all service exceptions from ConfigService service.</p>
 *
 *
 * @public
 */
export class DescribeRemediationExceptionsCommand extends $Command
  .classBuilder<
    DescribeRemediationExceptionsCommandInput,
    DescribeRemediationExceptionsCommandOutput,
    ConfigServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConfigServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("StarlingDoveService", "DescribeRemediationExceptions", {})
  .n("ConfigServiceClient", "DescribeRemediationExceptionsCommand")
  .sc(DescribeRemediationExceptions$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeRemediationExceptionsRequest;
      output: DescribeRemediationExceptionsResponse;
    };
    sdk: {
      input: DescribeRemediationExceptionsCommandInput;
      output: DescribeRemediationExceptionsCommandOutput;
    };
  };
}
