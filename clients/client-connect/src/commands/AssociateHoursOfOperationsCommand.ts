// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateHoursOfOperationsRequest } from "../models/models_0";
import { AssociateHoursOfOperations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateHoursOfOperationsCommand}.
 */
export interface AssociateHoursOfOperationsCommandInput extends AssociateHoursOfOperationsRequest {}
/**
 * @public
 *
 * The output of {@link AssociateHoursOfOperationsCommand}.
 */
export interface AssociateHoursOfOperationsCommandOutput extends __MetadataBearer {}

/**
 * <p>Associates a set of hours of operations with another hours of operation. For more information about inheriting overrides from parent hours of operation, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/hours-of-operation-overrides.html">Hours of operation overrides</a> in the Administrator Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, AssociateHoursOfOperationsCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, AssociateHoursOfOperationsCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // AssociateHoursOfOperationsRequest
 *   InstanceId: "STRING_VALUE", // required
 *   HoursOfOperationId: "STRING_VALUE", // required
 *   ParentHoursOfOperationConfigs: [ // ParentHoursOfOperationConfigList // required
 *     { // ParentHoursOfOperationConfig
 *       HoursOfOperationId: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new AssociateHoursOfOperationsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateHoursOfOperationsCommandInput - {@link AssociateHoursOfOperationsCommandInput}
 * @returns {@link AssociateHoursOfOperationsCommandOutput}
 * @see {@link AssociateHoursOfOperationsCommandInput} for command's `input` shape.
 * @see {@link AssociateHoursOfOperationsCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota has been exceeded.</p>
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
export class AssociateHoursOfOperationsCommand extends command<AssociateHoursOfOperationsCommandInput, AssociateHoursOfOperationsCommandOutput>(
  _ep0,
  _mw0,
  "AssociateHoursOfOperations",
  AssociateHoursOfOperations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateHoursOfOperationsRequest;
      output: {};
    };
    sdk: {
      input: AssociateHoursOfOperationsCommandInput;
      output: AssociateHoursOfOperationsCommandOutput;
    };
  };
}
