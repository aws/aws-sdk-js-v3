// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DocDBElasticClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBElasticClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListPendingMaintenanceActionsInput, ListPendingMaintenanceActionsOutput } from "../models/models_0";
import {
  de_ListPendingMaintenanceActionsCommand,
  se_ListPendingMaintenanceActionsCommand,
} from "../protocols/Aws_restJson1";

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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ChimeraDbLionfishServiceLambda", "ListPendingMaintenanceActions", {})
  .n("DocDBElasticClient", "ListPendingMaintenanceActionsCommand")
  .f(void 0, void 0)
  .ser(se_ListPendingMaintenanceActionsCommand)
  .de(de_ListPendingMaintenanceActionsCommand)
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
