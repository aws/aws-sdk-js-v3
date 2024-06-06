// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetOutpostInstanceTypesInput, GetOutpostInstanceTypesOutput } from "../models/models_0";
import { OutpostsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OutpostsClient";
import { de_GetOutpostInstanceTypesCommand, se_GetOutpostInstanceTypesCommand } from "../protocols/Aws_restJson1";

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
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: OutpostsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("OutpostsOlafService", "GetOutpostInstanceTypes", {})
  .n("OutpostsClient", "GetOutpostInstanceTypesCommand")
  .f(void 0, void 0)
  .ser(se_GetOutpostInstanceTypesCommand)
  .de(de_GetOutpostInstanceTypesCommand)
  .build() {}
