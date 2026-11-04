// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteIncidentRecordInput, DeleteIncidentRecordOutput } from "../models/models_0";
import { DeleteIncidentRecord$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteIncidentRecordCommand}.
 */
export interface DeleteIncidentRecordCommandInput extends DeleteIncidentRecordInput {}
/**
 * @public
 *
 * The output of {@link DeleteIncidentRecordCommand}.
 */
export interface DeleteIncidentRecordCommandOutput extends DeleteIncidentRecordOutput, __MetadataBearer {}

/**
 * Delete an incident record from Incident Manager.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMIncidentsClient, DeleteIncidentRecordCommand } from "@aws-sdk/client-ssm-incidents"; // ES Modules import
 * // const { SSMIncidentsClient, DeleteIncidentRecordCommand } = require("@aws-sdk/client-ssm-incidents"); // CommonJS import
 * // import type { SSMIncidentsClientConfig } from "@aws-sdk/client-ssm-incidents";
 * const config = {}; // type is SSMIncidentsClientConfig
 * const client = new SSMIncidentsClient(config);
 * const input = { // DeleteIncidentRecordInput
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new DeleteIncidentRecordCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteIncidentRecordCommandInput - {@link DeleteIncidentRecordCommandInput}
 * @returns {@link DeleteIncidentRecordCommandOutput}
 * @see {@link DeleteIncidentRecordCommandInput} for command's `input` shape.
 * @see {@link DeleteIncidentRecordCommandOutput} for command's `response` shape.
 * @see {@link SSMIncidentsClientResolvedConfig | config} for SSMIncidentsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient access to perform this operation.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link SSMIncidentsServiceException}
 *
 * Base exception class for all service exceptions from SSMIncidents service.
 *
 * @public
 */
export class DeleteIncidentRecordCommand extends command<DeleteIncidentRecordCommandInput, DeleteIncidentRecordCommandOutput>(
  _ep0,
  _mw0,
  "DeleteIncidentRecord",
  DeleteIncidentRecord$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteIncidentRecordInput;
      output: {};
    };
    sdk: {
      input: DeleteIncidentRecordCommandInput;
      output: DeleteIncidentRecordCommandOutput;
    };
  };
}
