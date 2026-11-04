// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetOutpostInstanceTypesInput, GetOutpostInstanceTypesOutput } from "../models/models_0";
import { GetOutpostInstanceTypes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetOutpostInstanceTypesCommand}.
 */
export interface GetOutpostInstanceTypesCommandInput extends GetOutpostInstanceTypesInput {}
/**
 * @public
 *
 * The output of {@link GetOutpostInstanceTypesCommand}.
 */
export interface GetOutpostInstanceTypesCommandOutput extends GetOutpostInstanceTypesOutput, __MetadataBearer {}

/**
 * Gets the instance types for the specified Outpost.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, GetOutpostInstanceTypesCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, GetOutpostInstanceTypesCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * // import type { OutpostsClientConfig } from "@aws-sdk/client-outposts";
 * const config = {}; // type is OutpostsClientConfig
 * const client = new OutpostsClient(config);
 * const input = { // GetOutpostInstanceTypesInput
 *   OutpostId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new GetOutpostInstanceTypesCommand(input);
 * const response = await client.send(command);
 * // { // GetOutpostInstanceTypesOutput
 * //   InstanceTypes: [ // InstanceTypeListDefinition
 * //     { // InstanceTypeItem
 * //       InstanceType: "STRING_VALUE",
 * //       VCPUs: Number("int"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * //   OutpostId: "STRING_VALUE",
 * //   OutpostArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetOutpostInstanceTypesCommandInput - {@link GetOutpostInstanceTypesCommandInput}
 * @returns {@link GetOutpostInstanceTypesCommandOutput}
 * @see {@link GetOutpostInstanceTypesCommandInput} for command's `input` shape.
 * @see {@link GetOutpostInstanceTypesCommandOutput} for command's `response` shape.
 * @see {@link OutpostsClientResolvedConfig | config} for OutpostsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have permission to perform this operation.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal error has occurred.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The specified request is not valid.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * A parameter is not valid.
 *
 * @throws {@link OutpostsServiceException}
 *
 * Base exception class for all service exceptions from Outposts service.
 *
 * @public
 */
export class GetOutpostInstanceTypesCommand extends command<GetOutpostInstanceTypesCommandInput, GetOutpostInstanceTypesCommandOutput>(
  _ep0,
  _mw0,
  "GetOutpostInstanceTypes",
  GetOutpostInstanceTypes$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetOutpostInstanceTypesInput;
      output: GetOutpostInstanceTypesOutput;
    };
    sdk: {
      input: GetOutpostInstanceTypesCommandInput;
      output: GetOutpostInstanceTypesCommandOutput;
    };
  };
}
