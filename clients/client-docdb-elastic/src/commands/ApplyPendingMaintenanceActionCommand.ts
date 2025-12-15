// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DocDBElasticClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBElasticClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ApplyPendingMaintenanceActionInput, ApplyPendingMaintenanceActionOutput } from "../models/models_0";
import { ApplyPendingMaintenanceAction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface ApplyPendingMaintenanceActionCommandOutput
  extends ApplyPendingMaintenanceActionOutput,
    __MetadataBearer {}

/**
 * <p>The type of pending maintenance action to be applied to the resource.</p>
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
 *  <p>An exception that occurs when there are not sufficient permissions to perform an action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was an access conflict.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There was an internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource could not be located.</p>
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
export class ApplyPendingMaintenanceActionCommand extends $Command
  .classBuilder<
    ApplyPendingMaintenanceActionCommandInput,
    ApplyPendingMaintenanceActionCommandOutput,
    DocDBElasticClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DocDBElasticClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ChimeraDbLionfishServiceLambda", "ApplyPendingMaintenanceAction", {})
  .n("DocDBElasticClient", "ApplyPendingMaintenanceActionCommand")
  .sc(ApplyPendingMaintenanceAction$)
  .build() {
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
