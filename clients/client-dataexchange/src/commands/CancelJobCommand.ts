// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DataExchangeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataExchangeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CancelJobRequest } from "../models/models_0";
import { de_CancelJobCommand, se_CancelJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelJobCommand}.
 */
export interface CancelJobCommandInput extends CancelJobRequest {}
/**
 * @public
 *
 * The output of {@link CancelJobCommand}.
 */
export interface CancelJobCommandOutput extends __MetadataBearer {}

/**
 * <p>This operation cancels a job. Jobs can be cancelled only when they are in the WAITING state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataExchangeClient, CancelJobCommand } from "@aws-sdk/client-dataexchange"; // ES Modules import
 * // const { DataExchangeClient, CancelJobCommand } = require("@aws-sdk/client-dataexchange"); // CommonJS import
 * const client = new DataExchangeClient(config);
 * const input = { // CancelJobRequest
 *   JobId: "STRING_VALUE", // required
 * };
 * const command = new CancelJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CancelJobCommandInput - {@link CancelJobCommandInput}
 * @returns {@link CancelJobCommandOutput}
 * @see {@link CancelJobCommandInput} for command's `input` shape.
 * @see {@link CancelJobCommandOutput} for command's `response` shape.
 * @see {@link DataExchangeClientResolvedConfig | config} for DataExchangeClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request couldn't be completed because it conflicted with the current state of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An exception occurred with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource couldn't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request was invalid.</p>
 *
 * @throws {@link DataExchangeServiceException}
 * <p>Base exception class for all service exceptions from DataExchange service.</p>
 *
 * @public
 */
export class CancelJobCommand extends $Command
  .classBuilder<
    CancelJobCommandInput,
    CancelJobCommandOutput,
    DataExchangeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DataExchangeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("DataExchange", "CancelJob", {})
  .n("DataExchangeClient", "CancelJobCommand")
  .f(void 0, void 0)
  .ser(se_CancelJobCommand)
  .de(de_CancelJobCommand)
  .build() {}
