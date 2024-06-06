// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetOutpostSupportedInstanceTypesInput, GetOutpostSupportedInstanceTypesOutput } from "../models/models_0";
import { OutpostsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OutpostsClient";
import {
  de_GetOutpostSupportedInstanceTypesCommand,
  se_GetOutpostSupportedInstanceTypesCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetOutpostSupportedInstanceTypesCommand}.
 */
export interface GetOutpostSupportedInstanceTypesCommandInput extends GetOutpostSupportedInstanceTypesInput {}
/**
 * @public
 *
 * The output of {@link GetOutpostSupportedInstanceTypesCommand}.
 */
export interface GetOutpostSupportedInstanceTypesCommandOutput
  extends GetOutpostSupportedInstanceTypesOutput,
    __MetadataBearer {}

/**
 * <p>Gets the instance types that an
 *       Outpost can support in <code>InstanceTypeCapacity</code>. This will generally include instance types that
 *       are not currently configured and therefore cannot be launched with the current Outpost
 *       capacity configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, GetOutpostSupportedInstanceTypesCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, GetOutpostSupportedInstanceTypesCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * const client = new OutpostsClient(config);
 * const input = { // GetOutpostSupportedInstanceTypesInput
 *   OutpostIdentifier: "STRING_VALUE", // required
 *   OrderId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetOutpostSupportedInstanceTypesCommand(input);
 * const response = await client.send(command);
 * // { // GetOutpostSupportedInstanceTypesOutput
 * //   InstanceTypes: [ // InstanceTypeListDefinition
 * //     { // InstanceTypeItem
 * //       InstanceType: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetOutpostSupportedInstanceTypesCommandInput - {@link GetOutpostSupportedInstanceTypesCommandInput}
 * @returns {@link GetOutpostSupportedInstanceTypesCommandOutput}
 * @see {@link GetOutpostSupportedInstanceTypesCommandInput} for command's `input` shape.
 * @see {@link GetOutpostSupportedInstanceTypesCommandOutput} for command's `response` shape.
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
export class GetOutpostSupportedInstanceTypesCommand extends $Command
  .classBuilder<
    GetOutpostSupportedInstanceTypesCommandInput,
    GetOutpostSupportedInstanceTypesCommandOutput,
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
  .s("OutpostsOlafService", "GetOutpostSupportedInstanceTypes", {})
  .n("OutpostsClient", "GetOutpostSupportedInstanceTypesCommand")
  .f(void 0, void 0)
  .ser(se_GetOutpostSupportedInstanceTypesCommand)
  .de(de_GetOutpostSupportedInstanceTypesCommand)
  .build() {}
