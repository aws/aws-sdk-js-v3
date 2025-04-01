// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DocDBElasticClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBElasticClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetPendingMaintenanceActionInput, GetPendingMaintenanceActionOutput } from "../models/models_0";
import {
  de_GetPendingMaintenanceActionCommand,
  se_GetPendingMaintenanceActionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Retrieves all maintenance actions that are pending.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBElasticClient, GetPendingMaintenanceActionCommand } from "@aws-sdk/client-docdb-elastic"; // ES Modules import
 * // const { DocDBElasticClient, GetPendingMaintenanceActionCommand } = require("@aws-sdk/client-docdb-elastic"); // CommonJS import
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
export class GetPendingMaintenanceActionCommand extends $Command
  .classBuilder<
    GetPendingMaintenanceActionCommandInput,
    GetPendingMaintenanceActionCommandOutput,
    DocDBElasticClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DocDBElasticClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ChimeraDbLionfishServiceLambda", "GetPendingMaintenanceAction", {})
  .n("DocDBElasticClient", "GetPendingMaintenanceActionCommand")
  .f(void 0, void 0)
  .ser(se_GetPendingMaintenanceActionCommand)
  .de(de_GetPendingMaintenanceActionCommand)
  .build() {
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
