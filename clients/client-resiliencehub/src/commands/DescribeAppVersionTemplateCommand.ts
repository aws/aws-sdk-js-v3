// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeAppVersionTemplateRequest, DescribeAppVersionTemplateResponse } from "../models/models_0";
import { de_DescribeAppVersionTemplateCommand, se_DescribeAppVersionTemplateCommand } from "../protocols/Aws_restJson1";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAppVersionTemplateCommand}.
 */
export interface DescribeAppVersionTemplateCommandInput extends DescribeAppVersionTemplateRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAppVersionTemplateCommand}.
 */
export interface DescribeAppVersionTemplateCommandOutput extends DescribeAppVersionTemplateResponse, __MetadataBearer {}

/**
 * <p>Describes details about an Resilience Hub application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, DescribeAppVersionTemplateCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, DescribeAppVersionTemplateCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * const client = new ResiliencehubClient(config);
 * const input = { // DescribeAppVersionTemplateRequest
 *   appArn: "STRING_VALUE", // required
 *   appVersion: "STRING_VALUE", // required
 * };
 * const command = new DescribeAppVersionTemplateCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAppVersionTemplateResponse
 * //   appArn: "STRING_VALUE", // required
 * //   appVersion: "STRING_VALUE", // required
 * //   appTemplateBody: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DescribeAppVersionTemplateCommandInput - {@link DescribeAppVersionTemplateCommandInput}
 * @returns {@link DescribeAppVersionTemplateCommandOutput}
 * @see {@link DescribeAppVersionTemplateCommandInput} for command's `input` shape.
 * @see {@link DescribeAppVersionTemplateCommandOutput} for command's `response` shape.
 * @see {@link ResiliencehubClientResolvedConfig | config} for ResiliencehubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation. The user or role that is
 *       making the request must have at least one IAM permissions policy attached that grants the
 *       required permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Resilience Hub
 *       service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception occurs when the specified resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This exception occurs when you have exceeded the limit on the number of requests per second.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>This exception occurs when a request is not valid.</p>
 *
 * @throws {@link ResiliencehubServiceException}
 * <p>Base exception class for all service exceptions from Resiliencehub service.</p>
 *
 *
 * @public
 */
export class DescribeAppVersionTemplateCommand extends $Command
  .classBuilder<
    DescribeAppVersionTemplateCommandInput,
    DescribeAppVersionTemplateCommandOutput,
    ResiliencehubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResiliencehubClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsResilienceHub", "DescribeAppVersionTemplate", {})
  .n("ResiliencehubClient", "DescribeAppVersionTemplateCommand")
  .f(void 0, void 0)
  .ser(se_DescribeAppVersionTemplateCommand)
  .de(de_DescribeAppVersionTemplateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAppVersionTemplateRequest;
      output: DescribeAppVersionTemplateResponse;
    };
    sdk: {
      input: DescribeAppVersionTemplateCommandInput;
      output: DescribeAppVersionTemplateCommandOutput;
    };
  };
}
