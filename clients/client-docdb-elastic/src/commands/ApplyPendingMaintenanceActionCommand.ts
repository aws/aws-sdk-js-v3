// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ApplyPendingMaintenanceActionInput, ApplyPendingMaintenanceActionOutput } from "../models/models_0";
import { ApplyPendingMaintenanceAction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ApplyPendingMaintenanceActionCommand}.
 */
export interface ApplyPendingMaintenanceActionCommandInput extends ApplyPendingMaintenanceActionInput {}
/**
 * @public
 *
 * The output of {@link ApplyPendingMaintenanceActionCommand}.
 */
export interface ApplyPendingMaintenanceActionCommandOutput extends ApplyPendingMaintenanceActionOutput, __MetadataBearer {}

/**
 * The type of pending maintenance action to be applied to the resource.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBElasticClient, ApplyPendingMaintenanceActionCommand } from "@aws-sdk/client-docdb-elastic"; // ES Modules import
 * // const { DocDBElasticClient, ApplyPendingMaintenanceActionCommand } = require("@aws-sdk/client-docdb-elastic"); // CommonJS import
 * // import type { DocDBElasticClientConfig } from "@aws-sdk/client-docdb-elastic";
 * const config = {}; // type is DocDBElasticClientConfig
 * const client = new DocDBElasticClient(config);
 * const input = { // ApplyPendingMaintenanceActionInput
 *   resourceArn: "STRING_VALUE", // required
 *   applyAction: "STRING_VALUE", // required
 *   optInType: "STRING_VALUE", // required
 *   applyOn: "STRING_VALUE",
 * };
 * const command = new ApplyPendingMaintenanceActionCommand(input);
 * const response = await client.send(command);
 * // { // ApplyPendingMaintenanceActionOutput
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
 * @param ApplyPendingMaintenanceActionCommandInput - {@link ApplyPendingMaintenanceActionCommandInput}
 * @returns {@link ApplyPendingMaintenanceActionCommandOutput}
 * @see {@link ApplyPendingMaintenanceActionCommandInput} for command's `input` shape.
 * @see {@link ApplyPendingMaintenanceActionCommandOutput} for command's `response` shape.
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
export class ApplyPendingMaintenanceActionCommand extends command<ApplyPendingMaintenanceActionCommandInput, ApplyPendingMaintenanceActionCommandOutput>(
  _ep0,
  _mw0,
  "ApplyPendingMaintenanceAction",
  ApplyPendingMaintenanceAction$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ApplyPendingMaintenanceActionInput;
      output: ApplyPendingMaintenanceActionOutput;
    };
    sdk: {
      input: ApplyPendingMaintenanceActionCommandInput;
      output: ApplyPendingMaintenanceActionCommandOutput;
    };
  };
}
