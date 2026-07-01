// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListOrderableInstanceTypesInput, ListOrderableInstanceTypesOutput } from "../models/models_0";
import { ListOrderableInstanceTypes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListOrderableInstanceTypesCommand}.
 */
export interface ListOrderableInstanceTypesCommandInput extends ListOrderableInstanceTypesInput {}
/**
 * @public
 *
 * The output of {@link ListOrderableInstanceTypesCommand}.
 */
export interface ListOrderableInstanceTypesCommandOutput extends ListOrderableInstanceTypesOutput, __MetadataBearer {}

/**
 * <p>Lists the instance types that can be ordered for an Outpost. You can filter the results
 *       by Outpost generation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, ListOrderableInstanceTypesCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, ListOrderableInstanceTypesCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * // import type { OutpostsClientConfig } from "@aws-sdk/client-outposts";
 * const config = {}; // type is OutpostsClientConfig
 * const client = new OutpostsClient(config);
 * const input = { // ListOrderableInstanceTypesInput
 *   OutpostGenerationFilter: "GENERATION_2" || "GENERATION_1",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListOrderableInstanceTypesCommand(input);
 * const response = await client.send(command);
 * // { // ListOrderableInstanceTypesOutput
 * //   InstanceTypes: [ // DetailedInstanceTypeListDefinition
 * //     { // DetailedInstanceTypeItem
 * //       InstanceType: "STRING_VALUE",
 * //       VCPUs: Number("int"),
 * //       MemoryInMib: Number("int"),
 * //       NetworkPerformance: "STRING_VALUE",
 * //       FormFactorConfigs: [ // FormFactorConfigList
 * //         { // FormFactorConfig
 * //           FormFactor: "RACK" || "SERVER",
 * //           OutpostGeneration: "GENERATION_2" || "GENERATION_1",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListOrderableInstanceTypesCommandInput - {@link ListOrderableInstanceTypesCommandInput}
 * @returns {@link ListOrderableInstanceTypesCommandOutput}
 * @see {@link ListOrderableInstanceTypesCommandInput} for command's `input` shape.
 * @see {@link ListOrderableInstanceTypesCommandOutput} for command's `response` shape.
 * @see {@link OutpostsClientResolvedConfig | config} for OutpostsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have permission to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified request is not valid.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A parameter is not valid.</p>
 *
 * @throws {@link OutpostsServiceException}
 * <p>Base exception class for all service exceptions from Outposts service.</p>
 *
 *
 * @public
 */
export class ListOrderableInstanceTypesCommand extends command<ListOrderableInstanceTypesCommandInput, ListOrderableInstanceTypesCommandOutput>(
  _ep0,
  _mw0,
  "ListOrderableInstanceTypes",
  ListOrderableInstanceTypes$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListOrderableInstanceTypesInput;
      output: ListOrderableInstanceTypesOutput;
    };
    sdk: {
      input: ListOrderableInstanceTypesCommandInput;
      output: ListOrderableInstanceTypesCommandOutput;
    };
  };
}
