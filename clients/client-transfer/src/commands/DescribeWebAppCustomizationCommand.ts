// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeWebAppCustomizationRequest,
  DescribeWebAppCustomizationResponse,
  DescribeWebAppCustomizationResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeWebAppCustomizationCommand, se_DescribeWebAppCustomizationCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeWebAppCustomizationCommand}.
 */
export interface DescribeWebAppCustomizationCommandInput extends DescribeWebAppCustomizationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeWebAppCustomizationCommand}.
 */
export interface DescribeWebAppCustomizationCommandOutput
  extends DescribeWebAppCustomizationResponse,
    __MetadataBearer {}

/**
 * <p>Describes the web app customization object that's identified by <code>WebAppId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, DescribeWebAppCustomizationCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, DescribeWebAppCustomizationCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const input = { // DescribeWebAppCustomizationRequest
 *   WebAppId: "STRING_VALUE", // required
 * };
 * const command = new DescribeWebAppCustomizationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeWebAppCustomizationResponse
 * //   WebAppCustomization: { // DescribedWebAppCustomization
 * //     Arn: "STRING_VALUE", // required
 * //     WebAppId: "STRING_VALUE", // required
 * //     Title: "STRING_VALUE",
 * //     LogoFile: new Uint8Array(),
 * //     FaviconFile: new Uint8Array(),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeWebAppCustomizationCommandInput - {@link DescribeWebAppCustomizationCommandInput}
 * @returns {@link DescribeWebAppCustomizationCommandOutput}
 * @see {@link DescribeWebAppCustomizationCommandInput} for command's `input` shape.
 * @see {@link DescribeWebAppCustomizationCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for TransferClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>This exception is thrown when an error occurs in the Transfer Family service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when a resource is not found by the Amazon Web ServicesTransfer Family
 *       service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link TransferServiceException}
 * <p>Base exception class for all service exceptions from Transfer service.</p>
 *
 *
 * @public
 */
export class DescribeWebAppCustomizationCommand extends $Command
  .classBuilder<
    DescribeWebAppCustomizationCommandInput,
    DescribeWebAppCustomizationCommandOutput,
    TransferClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: TransferClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("TransferService", "DescribeWebAppCustomization", {})
  .n("TransferClient", "DescribeWebAppCustomizationCommand")
  .f(void 0, DescribeWebAppCustomizationResponseFilterSensitiveLog)
  .ser(se_DescribeWebAppCustomizationCommand)
  .de(de_DescribeWebAppCustomizationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeWebAppCustomizationRequest;
      output: DescribeWebAppCustomizationResponse;
    };
    sdk: {
      input: DescribeWebAppCustomizationCommandInput;
      output: DescribeWebAppCustomizationCommandOutput;
    };
  };
}
