// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PutDedicatedIpInPoolRequest, PutDedicatedIpInPoolResponse } from "../models/models_0";
import { PinpointEmailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointEmailClient";
import { de_PutDedicatedIpInPoolCommand, se_PutDedicatedIpInPoolCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutDedicatedIpInPoolCommand}.
 */
export interface PutDedicatedIpInPoolCommandInput extends PutDedicatedIpInPoolRequest {}
/**
 * @public
 *
 * The output of {@link PutDedicatedIpInPoolCommand}.
 */
export interface PutDedicatedIpInPoolCommandOutput extends PutDedicatedIpInPoolResponse, __MetadataBearer {}

/**
 * <p>Move a dedicated IP address to an existing dedicated IP pool.</p>
 *         <note>
 *             <p>The dedicated IP address that you specify must already exist, and must be
 *                 associated with your Amazon Pinpoint account.
 *
 *             </p>
 *             <p>The dedicated IP pool you specify must already exist. You can create a new pool by
 *                 using the <code>CreateDedicatedIpPool</code> operation.</p>
 *
 *         </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, PutDedicatedIpInPoolCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, PutDedicatedIpInPoolCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * const client = new PinpointEmailClient(config);
 * const input = { // PutDedicatedIpInPoolRequest
 *   Ip: "STRING_VALUE", // required
 *   DestinationPoolName: "STRING_VALUE", // required
 * };
 * const command = new PutDedicatedIpInPoolCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutDedicatedIpInPoolCommandInput - {@link PutDedicatedIpInPoolCommandInput}
 * @returns {@link PutDedicatedIpInPoolCommandOutput}
 * @see {@link PutDedicatedIpInPoolCommandInput} for command's `input` shape.
 * @see {@link PutDedicatedIpInPoolCommandOutput} for command's `response` shape.
 * @see {@link PinpointEmailClientResolvedConfig | config} for PinpointEmailClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource you attempted to access doesn't exist.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many requests have been made to the operation.</p>
 *
 * @throws {@link PinpointEmailServiceException}
 * <p>Base exception class for all service exceptions from PinpointEmail service.</p>
 *
 * @public
 */
export class PutDedicatedIpInPoolCommand extends $Command
  .classBuilder<
    PutDedicatedIpInPoolCommandInput,
    PutDedicatedIpInPoolCommandOutput,
    PinpointEmailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: PinpointEmailClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonPinpointEmailService", "PutDedicatedIpInPool", {})
  .n("PinpointEmailClient", "PutDedicatedIpInPoolCommand")
  .f(void 0, void 0)
  .ser(se_PutDedicatedIpInPoolCommand)
  .de(de_PutDedicatedIpInPoolCommand)
  .build() {}
