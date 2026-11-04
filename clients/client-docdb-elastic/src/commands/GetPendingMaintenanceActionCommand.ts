// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetPendingMaintenanceActionInput, GetPendingMaintenanceActionOutput } from "../models/models_0";
import { GetPendingMaintenanceAction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetPendingMaintenanceActionCommand}.
 */
export interface GetPendingMaintenanceActionCommandInput extends GetPendingMaintenanceActionInput {}
/**
 * @public
 *
 * The output of {@link GetPendingMaintenanceActionCommand}.
 */
export interface GetPendingMaintenanceActionCommandOutput extends GetPendingMaintenanceActionOutput, __MetadataBearer {}

/**
 * Retrieves all maintenance actions that are pending.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBElasticClient, GetPendingMaintenanceActionCommand } from "@aws-sdk/client-docdb-elastic"; // ES Modules import
 * // const { DocDBElasticClient, GetPendingMaintenanceActionCommand } = require("@aws-sdk/client-docdb-elastic"); // CommonJS import
 * // import type { DocDBElasticClientConfig } from "@aws-sdk/client-docdb-elastic";
 * const config = {}; // type is DocDBElasticClientConfig
 * const client = new DocDBElasticClient(config);
 * const input = { // GetPendingMaintenanceActionInput
 *   resourceArn: "STRING_VALUE", // required
 * };
 * const command = new GetPendingMaintenanceActionCommand(input);
 * const response = await client.send(command);
 * // { // GetPendingMaintenanceActionOutput
 * //   resourcePendingMaintenanceAction: { // ResourcePendingMaintenanceAction
 * //     resourceArn: "STRING_VALUE",
 * //     pendingMaintenanceActionDetails: [ // PendingMaintenanceActionDetailsList
 * //       { // PendingMaintenanceActionDetails
 * //         action: "STRING_VALUE", // required
 * //         autoAppliedAfterDate: "STRING_VALUE",
 * //         forcedApplyDate: "STRING_VALUE",
 * //         optInStatus: "STRING_VALUE",
 * //         currentApplyDate: "STRING_VALUE",
 * //         description: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetPendingMaintenanceActionCommandInput - {@link GetPendingMaintenanceActionCommandInput}
 * @returns {@link GetPendingMaintenanceActionCommandOutput}
 * @see {@link GetPendingMaintenanceActionCommandInput} for command's `input` shape.
 * @see {@link GetPendingMaintenanceActionCommandOutput} for command's `response` shape.
 * @see {@link DocDBElasticClientResolvedConfig | config} for DocDBElasticClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * An exception that occurs when there are not sufficient permissions to perform an action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There was an access conflict.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * There was an internal server error.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource could not be located.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * ThrottlingException will be thrown when request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * A structure defining a validation exception.
 *
 * @throws {@link DocDBElasticServiceException}
 *
 * Base exception class for all service exceptions from DocDBElastic service.
 *
 * @public
 */
export class GetPendingMaintenanceActionCommand extends command<GetPendingMaintenanceActionCommandInput, GetPendingMaintenanceActionCommandOutput>(
  _ep0,
  _mw0,
  "GetPendingMaintenanceAction",
  GetPendingMaintenanceAction$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetPendingMaintenanceActionInput;
      output: GetPendingMaintenanceActionOutput;
    };
    sdk: {
      input: GetPendingMaintenanceActionCommandInput;
      output: GetPendingMaintenanceActionCommandOutput;
    };
  };
}
