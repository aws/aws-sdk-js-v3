// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetLensInput, GetLensOutput } from "../models/models_0";
import { GetLens } from "../schemas/schemas_0";
import type {
  ServiceInputTypes,
  ServiceOutputTypes,
  WellArchitectedClientResolvedConfig,
} from "../WellArchitectedClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetLensCommand}.
 */
export interface GetLensCommandInput extends GetLensInput {}
/**
 * @public
 *
 * The output of {@link GetLensCommand}.
 */
export interface GetLensCommandOutput extends GetLensOutput, __MetadataBearer {}

/**
 * <p>Get an existing lens.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, GetLensCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, GetLensCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // GetLensInput
 *   LensAlias: "STRING_VALUE", // required
 *   LensVersion: "STRING_VALUE",
 * };
 * const command = new GetLensCommand(input);
 * const response = await client.send(command);
 * // { // GetLensOutput
 * //   Lens: { // Lens
 * //     LensArn: "STRING_VALUE",
 * //     LensVersion: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Owner: "STRING_VALUE",
 * //     ShareInvitationId: "STRING_VALUE",
 * //     Tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetLensCommandInput - {@link GetLensCommandInput}
 * @returns {@link GetLensCommandOutput}
 * @see {@link GetLensCommandInput} for command's `input` shape.
 * @see {@link GetLensCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is a problem with the Well-Architected Tool API service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The user input is not valid.</p>
 *
 * @throws {@link WellArchitectedServiceException}
 * <p>Base exception class for all service exceptions from WellArchitected service.</p>
 *
 *
 * @public
 */
export class GetLensCommand extends $Command
  .classBuilder<
    GetLensCommandInput,
    GetLensCommandOutput,
    WellArchitectedClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WellArchitectedClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WellArchitectedApiServiceLambda", "GetLens", {})
  .n("WellArchitectedClient", "GetLensCommand")
  .sc(GetLens)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLensInput;
      output: GetLensOutput;
    };
    sdk: {
      input: GetLensCommandInput;
      output: GetLensCommandOutput;
    };
  };
}
