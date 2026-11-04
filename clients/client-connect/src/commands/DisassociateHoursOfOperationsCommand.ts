// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisassociateHoursOfOperationsRequest } from "../models/models_1";
import { DisassociateHoursOfOperations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Disassociates a set of hours of operations with another hours of operation. For more information about inheriting overrides from parent hours of operation, see [Hours of operation overrides](https://docs.aws.amazon.com/connect/latest/adminguide/hours-of-operation-overrides.html) in the Administrator Guide.
 *
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
 *
 * Request processing failed because dependent condition failed.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the specified parameters are not valid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
 *
 * @public
 */
export class DisassociateHoursOfOperationsCommand extends command<DisassociateHoursOfOperationsCommandInput, DisassociateHoursOfOperationsCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateHoursOfOperations",
  DisassociateHoursOfOperations$
) {
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
