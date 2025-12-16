// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DocDBElasticClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBElasticClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListPendingMaintenanceActionsInput, ListPendingMaintenanceActionsOutput } from "../models/models_0";
import { ListPendingMaintenanceActions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPendingMaintenanceActionsCommand}.
 */
export interface ListPendingMaintenanceActionsCommandInput extends ListPendingMaintenanceActionsInput {}
/**
 * @public
 *
 * The output of {@link ListPendingMaintenanceActionsCommand}.
 */
export interface ListPendingMaintenanceActionsCommandOutput
  extends ListPendingMaintenanceActionsOutput,
    __MetadataBearer {}

/**
 * <p>Retrieves a list of all maintenance actions that are pending.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBElasticClient, ListPendingMaintenanceActionsCommand } from "@aws-sdk/client-docdb-elastic"; // ES Modules import
 * // const { DocDBElasticClient, ListPendingMaintenanceActionsCommand } = require("@aws-sdk/client-docdb-elastic"); // CommonJS import
 * // import type { DocDBElasticClientConfig } from "@aws-sdk/client-docdb-elastic";
 * const config = {}; // type is DocDBElasticClientConfig
 * const client = new DocDBElasticClient(config);
 * const input = { // ListPendingMaintenanceActionsInput
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListPendingMaintenanceActionsCommand(input);
 * const response = await client.send(command);
 * // { // ListPendingMaintenanceActionsOutput
 * //   resourcePendingMaintenanceActions: [ // ResourcePendingMaintenanceActionList // required
 * //     { // ResourcePendingMaintenanceAction
 * //       resourceArn: "STRING_VALUE",
 * //       pendingMaintenanceActionDetails: [ // PendingMaintenanceActionDetailsList
 * //         { // PendingMaintenanceActionDetails
 * //           action: "STRING_VALUE", // required
 * //           autoAppliedAfterDate: "STRING_VALUE",
 * //           forcedApplyDate: "STRING_VALUE",
 * //           optInStatus: "STRING_VALUE",
 * //           currentApplyDate: "STRING_VALUE",
 * //           description: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPendingMaintenanceActionsCommandInput - {@link ListPendingMaintenanceActionsCommandInput}
 * @returns {@link ListPendingMaintenanceActionsCommandOutput}
 * @see {@link ListPendingMaintenanceActionsCommandInput} for command's `input` shape.
 * @see {@link ListPendingMaintenanceActionsCommandOutput} for command's `response` shape.
 * @see {@link DocDBElasticClientResolvedConfig | config} for DocDBElasticClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>An exception that occurs when there are not sufficient permissions to perform an action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There was an internal server error.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>ThrottlingException will be thrown when request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A structure defining a validation exception.</p>
 *
 * @throws {@link DocDBElasticServiceException}
 * <p>Base exception class for all service exceptions from DocDBElastic service.</p>
 *
 *
 * @public
 */
export class ListPendingMaintenanceActionsCommand extends $Command
  .classBuilder<
    ListPendingMaintenanceActionsCommandInput,
    ListPendingMaintenanceActionsCommandOutput,
    DocDBElasticClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DocDBElasticClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ChimeraDbLionfishServiceLambda", "ListPendingMaintenanceActions", {})
  .n("DocDBElasticClient", "ListPendingMaintenanceActionsCommand")
  .sc(ListPendingMaintenanceActions$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPendingMaintenanceActionsInput;
      output: ListPendingMaintenanceActionsOutput;
    };
    sdk: {
      input: ListPendingMaintenanceActionsCommandInput;
      output: ListPendingMaintenanceActionsCommandOutput;
    };
  };
}
