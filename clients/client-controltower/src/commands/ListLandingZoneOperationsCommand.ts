// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ControlTowerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ControlTowerClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListLandingZoneOperationsInput, ListLandingZoneOperationsOutput } from "../models/models_0";
import { de_ListLandingZoneOperationsCommand, se_ListLandingZoneOperationsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListLandingZoneOperationsCommand}.
 */
export interface ListLandingZoneOperationsCommandInput extends ListLandingZoneOperationsInput {}
/**
 * @public
 *
 * The output of {@link ListLandingZoneOperationsCommand}.
 */
export interface ListLandingZoneOperationsCommandOutput extends ListLandingZoneOperationsOutput, __MetadataBearer {}

/**
 * <p>Lists all landing zone operations from the past 90 days. Results are sorted by time, with the most recent operation first.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ControlTowerClient, ListLandingZoneOperationsCommand } from "@aws-sdk/client-controltower"; // ES Modules import
 * // const { ControlTowerClient, ListLandingZoneOperationsCommand } = require("@aws-sdk/client-controltower"); // CommonJS import
 * // import type { ControlTowerClientConfig } from "@aws-sdk/client-controltower";
 * const config = {}; // type is ControlTowerClientConfig
 * const client = new ControlTowerClient(config);
 * const input = { // ListLandingZoneOperationsInput
 *   filter: { // LandingZoneOperationFilter
 *     types: [ // LandingZoneOperationTypes
 *       "DELETE" || "CREATE" || "UPDATE" || "RESET",
 *     ],
 *     statuses: [ // LandingZoneOperationStatuses
 *       "SUCCEEDED" || "FAILED" || "IN_PROGRESS",
 *     ],
 *   },
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListLandingZoneOperationsCommand(input);
 * const response = await client.send(command);
 * // { // ListLandingZoneOperationsOutput
 * //   landingZoneOperations: [ // LandingZoneOperations // required
 * //     { // LandingZoneOperationSummary
 * //       operationType: "DELETE" || "CREATE" || "UPDATE" || "RESET",
 * //       operationIdentifier: "STRING_VALUE",
 * //       status: "SUCCEEDED" || "FAILED" || "IN_PROGRESS",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLandingZoneOperationsCommandInput - {@link ListLandingZoneOperationsCommandInput}
 * @returns {@link ListLandingZoneOperationsCommandOutput}
 * @see {@link ListLandingZoneOperationsCommandInput} for command's `input` shape.
 * @see {@link ListLandingZoneOperationsCommandOutput} for command's `response` shape.
 * @see {@link ControlTowerClientResolvedConfig | config} for ControlTowerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during processing of a request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link ControlTowerServiceException}
 * <p>Base exception class for all service exceptions from ControlTower service.</p>
 *
 *
 * @public
 */
export class ListLandingZoneOperationsCommand extends $Command
  .classBuilder<
    ListLandingZoneOperationsCommandInput,
    ListLandingZoneOperationsCommandOutput,
    ControlTowerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ControlTowerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSControlTowerApis", "ListLandingZoneOperations", {})
  .n("ControlTowerClient", "ListLandingZoneOperationsCommand")
  .f(void 0, void 0)
  .ser(se_ListLandingZoneOperationsCommand)
  .de(de_ListLandingZoneOperationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListLandingZoneOperationsInput;
      output: ListLandingZoneOperationsOutput;
    };
    sdk: {
      input: ListLandingZoneOperationsCommandInput;
      output: ListLandingZoneOperationsCommandOutput;
    };
  };
}
