// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DisassociateHoursOfOperationsRequest } from "../models/models_1";
import { DisassociateHoursOfOperations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateHoursOfOperationsCommand}.
 */
export interface DisassociateHoursOfOperationsCommandInput extends DisassociateHoursOfOperationsRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateHoursOfOperationsCommand}.
 */
export interface DisassociateHoursOfOperationsCommandOutput extends __MetadataBearer {}

/**
 * <p>Disassociates a set of hours of operations with another hours of operation. Refer to Administrator Guide <a href="https://docs.aws.amazon.com/connect/latest/adminguide/hours-of-operation-overrides.html"> here </a> for more information on inheriting overrides from parent hours of operation(s).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, DisassociateHoursOfOperationsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, DisassociateHoursOfOperationsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // DisassociateHoursOfOperationsRequest
 *   InstanceId: "STRING_VALUE", // required
 *   HoursOfOperationId: "STRING_VALUE", // required
 *   ParentHoursOfOperationIds: [ // ParentHoursOfOperationIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DisassociateHoursOfOperationsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateHoursOfOperationsCommandInput - {@link DisassociateHoursOfOperationsCommandInput}
 * @returns {@link DisassociateHoursOfOperationsCommandOutput}
 * @see {@link DisassociateHoursOfOperationsCommandInput} for command's `input` shape.
 * @see {@link DisassociateHoursOfOperationsCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link ConditionalOperationFailedException} (client fault)
 *  <p>Request processing failed because dependent condition failed.</p>
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
export class DisassociateHoursOfOperationsCommand extends $Command
  .classBuilder<
    DisassociateHoursOfOperationsCommandInput,
    DisassociateHoursOfOperationsCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "DisassociateHoursOfOperations", {})
  .n("ConnectClient", "DisassociateHoursOfOperationsCommand")
  .sc(DisassociateHoursOfOperations$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateHoursOfOperationsRequest;
      output: {};
    };
    sdk: {
      input: DisassociateHoursOfOperationsCommandInput;
      output: DisassociateHoursOfOperationsCommandOutput;
    };
  };
}
