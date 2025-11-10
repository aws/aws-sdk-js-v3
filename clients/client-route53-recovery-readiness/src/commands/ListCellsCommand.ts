// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListCellsRequest, ListCellsResponse } from "../models/models_0";
import {
  Route53RecoveryReadinessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53RecoveryReadinessClient";
import { ListCells } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCellsCommand}.
 */
export interface ListCellsCommandInput extends ListCellsRequest {}
/**
 * @public
 *
 * The output of {@link ListCellsCommand}.
 */
export interface ListCellsCommandOutput extends ListCellsResponse, __MetadataBearer {}

/**
 * <p>Lists the cells for an account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53RecoveryReadinessClient, ListCellsCommand } from "@aws-sdk/client-route53-recovery-readiness"; // ES Modules import
 * // const { Route53RecoveryReadinessClient, ListCellsCommand } = require("@aws-sdk/client-route53-recovery-readiness"); // CommonJS import
 * // import type { Route53RecoveryReadinessClientConfig } from "@aws-sdk/client-route53-recovery-readiness";
 * const config = {}; // type is Route53RecoveryReadinessClientConfig
 * const client = new Route53RecoveryReadinessClient(config);
 * const input = { // ListCellsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListCellsCommand(input);
 * const response = await client.send(command);
 * // { // ListCellsResponse
 * //   Cells: [ // __listOfCellOutput
 * //     { // CellOutput
 * //       CellArn: "STRING_VALUE", // required
 * //       CellName: "STRING_VALUE", // required
 * //       Cells: [ // __listOf__string // required
 * //         "STRING_VALUE",
 * //       ],
 * //       ParentReadinessScopes: [ // required
 * //         "STRING_VALUE",
 * //       ],
 * //       Tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCellsCommandInput - {@link ListCellsCommandInput}
 * @returns {@link ListCellsCommandOutput}
 * @see {@link ListCellsCommandInput} for command's `input` shape.
 * @see {@link ListCellsCommandOutput} for command's `response` shape.
 * @see {@link Route53RecoveryReadinessClientResolvedConfig | config} for Route53RecoveryReadinessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  User does not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *  An unexpected error occurred.
 *
 * @throws {@link ThrottlingException} (client fault)
 *  Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *  The input fails to satisfy the constraints specified by an AWS service.
 *
 * @throws {@link Route53RecoveryReadinessServiceException}
 * <p>Base exception class for all service exceptions from Route53RecoveryReadiness service.</p>
 *
 *
 * @public
 */
export class ListCellsCommand extends $Command
  .classBuilder<
    ListCellsCommandInput,
    ListCellsCommandOutput,
    Route53RecoveryReadinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53RecoveryReadinessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53RecoveryReadiness", "ListCells", {})
  .n("Route53RecoveryReadinessClient", "ListCellsCommand")
  .sc(ListCells)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCellsRequest;
      output: ListCellsResponse;
    };
    sdk: {
      input: ListCellsCommandInput;
      output: ListCellsCommandOutput;
    };
  };
}
