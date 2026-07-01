// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListComponentsInput, ListComponentsOutput } from "../models/models_0";
import { ListComponents$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListComponentsCommand}.
 */
export interface ListComponentsCommandInput extends ListComponentsInput {}
/**
 * @public
 *
 * The output of {@link ListComponentsCommand}.
 */
export interface ListComponentsCommandOutput extends ListComponentsOutput, __MetadataBearer {}

/**
 * <p>Lists all the components registered with AWS Systems Manager for SAP.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SsmSapClient, ListComponentsCommand } from "@aws-sdk/client-ssm-sap"; // ES Modules import
 * // const { SsmSapClient, ListComponentsCommand } = require("@aws-sdk/client-ssm-sap"); // CommonJS import
 * // import type { SsmSapClientConfig } from "@aws-sdk/client-ssm-sap";
 * const config = {}; // type is SsmSapClientConfig
 * const client = new SsmSapClient(config);
 * const input = { // ListComponentsInput
 *   ApplicationId: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListComponentsCommand(input);
 * const response = await client.send(command);
 * // { // ListComponentsOutput
 * //   Components: [ // ComponentSummaryList
 * //     { // ComponentSummary
 * //       ApplicationId: "STRING_VALUE",
 * //       ComponentId: "STRING_VALUE",
 * //       ComponentType: "HANA" || "HANA_NODE" || "ABAP" || "ASCS" || "DIALOG" || "WEBDISP" || "WD" || "ERS",
 * //       Tags: { // TagMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       Arn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListComponentsCommandInput - {@link ListComponentsCommandInput}
 * @returns {@link ListComponentsCommandOutput}
 * @see {@link ListComponentsCommandInput} for command's `input` shape.
 * @see {@link ListComponentsCommandOutput} for command's `response` shape.
 * @see {@link SsmSapClientResolvedConfig | config} for SsmSapClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource is not available.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The request is not authorized.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service. </p>
 *
 * @throws {@link SsmSapServiceException}
 * <p>Base exception class for all service exceptions from SsmSap service.</p>
 *
 *
 * @public
 */
export class ListComponentsCommand extends command<ListComponentsCommandInput, ListComponentsCommandOutput>(
  _ep0,
  _mw0,
  "ListComponents",
  ListComponents$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListComponentsInput;
      output: ListComponentsOutput;
    };
    sdk: {
      input: ListComponentsCommandInput;
      output: ListComponentsCommandOutput;
    };
  };
}
