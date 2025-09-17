// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetLensVersionDifferenceInput, GetLensVersionDifferenceOutput } from "../models/models_0";
import { de_GetLensVersionDifferenceCommand, se_GetLensVersionDifferenceCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetLensVersionDifferenceCommand}.
 */
export interface GetLensVersionDifferenceCommandInput extends GetLensVersionDifferenceInput {}
/**
 * @public
 *
 * The output of {@link GetLensVersionDifferenceCommand}.
 */
export interface GetLensVersionDifferenceCommandOutput extends GetLensVersionDifferenceOutput, __MetadataBearer {}

/**
 * <p>Get lens version differences.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, GetLensVersionDifferenceCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, GetLensVersionDifferenceCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // GetLensVersionDifferenceInput
 *   LensAlias: "STRING_VALUE", // required
 *   BaseLensVersion: "STRING_VALUE",
 *   TargetLensVersion: "STRING_VALUE",
 * };
 * const command = new GetLensVersionDifferenceCommand(input);
 * const response = await client.send(command);
 * // { // GetLensVersionDifferenceOutput
 * //   LensAlias: "STRING_VALUE",
 * //   LensArn: "STRING_VALUE",
 * //   BaseLensVersion: "STRING_VALUE",
 * //   TargetLensVersion: "STRING_VALUE",
 * //   LatestLensVersion: "STRING_VALUE",
 * //   VersionDifferences: { // VersionDifferences
 * //     PillarDifferences: [ // PillarDifferences
 * //       { // PillarDifference
 * //         PillarId: "STRING_VALUE",
 * //         PillarName: "STRING_VALUE",
 * //         DifferenceStatus: "UPDATED" || "NEW" || "DELETED",
 * //         QuestionDifferences: [ // QuestionDifferences
 * //           { // QuestionDifference
 * //             QuestionId: "STRING_VALUE",
 * //             QuestionTitle: "STRING_VALUE",
 * //             DifferenceStatus: "UPDATED" || "NEW" || "DELETED",
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetLensVersionDifferenceCommandInput - {@link GetLensVersionDifferenceCommandInput}
 * @returns {@link GetLensVersionDifferenceCommandOutput}
 * @see {@link GetLensVersionDifferenceCommandInput} for command's `input` shape.
 * @see {@link GetLensVersionDifferenceCommandOutput} for command's `response` shape.
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
export class GetLensVersionDifferenceCommand extends $Command
  .classBuilder<
    GetLensVersionDifferenceCommandInput,
    GetLensVersionDifferenceCommandOutput,
    WellArchitectedClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WellArchitectedClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WellArchitectedApiServiceLambda", "GetLensVersionDifference", {})
  .n("WellArchitectedClient", "GetLensVersionDifferenceCommand")
  .f(void 0, void 0)
  .ser(se_GetLensVersionDifferenceCommand)
  .de(de_GetLensVersionDifferenceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLensVersionDifferenceInput;
      output: GetLensVersionDifferenceOutput;
    };
    sdk: {
      input: GetLensVersionDifferenceCommandInput;
      output: GetLensVersionDifferenceCommandOutput;
    };
  };
}
