// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetOutpostInstanceTypesInput, GetOutpostInstanceTypesOutput } from "../models/models_0";
import type { OutpostsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OutpostsClient";
import { GetOutpostInstanceTypes } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Gets the instance types for the specified Outpost.</p>
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
export class GetOutpostInstanceTypesCommand extends $Command
  .classBuilder<
    GetOutpostInstanceTypesCommandInput,
    GetOutpostInstanceTypesCommandOutput,
    OutpostsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OutpostsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("OutpostsOlafService", "GetOutpostInstanceTypes", {})
  .n("OutpostsClient", "GetOutpostInstanceTypesCommand")
  .sc(GetOutpostInstanceTypes)
  .build() {
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
