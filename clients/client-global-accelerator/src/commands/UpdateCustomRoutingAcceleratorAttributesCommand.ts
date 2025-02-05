// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GlobalAcceleratorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../GlobalAcceleratorClient";
import {
  UpdateCustomRoutingAcceleratorAttributesRequest,
  UpdateCustomRoutingAcceleratorAttributesResponse,
} from "../models/models_0";
import {
  de_UpdateCustomRoutingAcceleratorAttributesCommand,
  se_UpdateCustomRoutingAcceleratorAttributesCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateCustomRoutingAcceleratorAttributesCommand}.
 */
export interface UpdateCustomRoutingAcceleratorAttributesCommandInput
  extends UpdateCustomRoutingAcceleratorAttributesRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCustomRoutingAcceleratorAttributesCommand}.
 */
export interface UpdateCustomRoutingAcceleratorAttributesCommandOutput
  extends UpdateCustomRoutingAcceleratorAttributesResponse,
    __MetadataBearer {}

/**
 * <p>Update the attributes for a custom routing accelerator. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlobalAcceleratorClient, UpdateCustomRoutingAcceleratorAttributesCommand } from "@aws-sdk/client-global-accelerator"; // ES Modules import
 * // const { GlobalAcceleratorClient, UpdateCustomRoutingAcceleratorAttributesCommand } = require("@aws-sdk/client-global-accelerator"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new GlobalAcceleratorClient(config);
 * const input = { // UpdateCustomRoutingAcceleratorAttributesRequest
 *   AcceleratorArn: "STRING_VALUE", // required
 *   FlowLogsEnabled: true || false,
 *   FlowLogsS3Bucket: "STRING_VALUE",
 *   FlowLogsS3Prefix: "STRING_VALUE",
 * };
 * const command = new UpdateCustomRoutingAcceleratorAttributesCommand(input);
 * const response = await client.send(command);
 * // { // UpdateCustomRoutingAcceleratorAttributesResponse
 * //   AcceleratorAttributes: { // CustomRoutingAcceleratorAttributes
 * //     FlowLogsEnabled: true || false,
 * //     FlowLogsS3Bucket: "STRING_VALUE",
 * //     FlowLogsS3Prefix: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateCustomRoutingAcceleratorAttributesCommandInput - {@link UpdateCustomRoutingAcceleratorAttributesCommandInput}
 * @returns {@link UpdateCustomRoutingAcceleratorAttributesCommandOutput}
 * @see {@link UpdateCustomRoutingAcceleratorAttributesCommandInput} for command's `input` shape.
 * @see {@link UpdateCustomRoutingAcceleratorAttributesCommandOutput} for command's `response` shape.
 * @see {@link GlobalAcceleratorClientResolvedConfig | config} for GlobalAcceleratorClient's `config` shape.
 *
 * @throws {@link AcceleratorNotFoundException} (client fault)
 *  <p>The accelerator that you specified doesn't exist.</p>
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access permission.</p>
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>There was an internal error for Global Accelerator.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>An argument that you specified is invalid.</p>
 *
 * @throws {@link TransactionInProgressException} (client fault)
 *  <p>There's already a transaction in progress. Another transaction can't be processed.</p>
 *
 * @throws {@link GlobalAcceleratorServiceException}
 * <p>Base exception class for all service exceptions from GlobalAccelerator service.</p>
 *
 * @public
 */
export class UpdateCustomRoutingAcceleratorAttributesCommand extends $Command
  .classBuilder<
    UpdateCustomRoutingAcceleratorAttributesCommandInput,
    UpdateCustomRoutingAcceleratorAttributesCommandOutput,
    GlobalAcceleratorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlobalAcceleratorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GlobalAccelerator_V20180706", "UpdateCustomRoutingAcceleratorAttributes", {})
  .n("GlobalAcceleratorClient", "UpdateCustomRoutingAcceleratorAttributesCommand")
  .f(void 0, void 0)
  .ser(se_UpdateCustomRoutingAcceleratorAttributesCommand)
  .de(de_UpdateCustomRoutingAcceleratorAttributesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCustomRoutingAcceleratorAttributesRequest;
      output: UpdateCustomRoutingAcceleratorAttributesResponse;
    };
    sdk: {
      input: UpdateCustomRoutingAcceleratorAttributesCommandInput;
      output: UpdateCustomRoutingAcceleratorAttributesCommandOutput;
    };
  };
}
