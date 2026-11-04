// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetLensVersionDifferenceInput, GetLensVersionDifferenceOutput } from "../models/models_0";
import { GetLensVersionDifference$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Get lens version differences.
 *
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
 *
 * User does not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * There is a problem with the Well-Architected Tool API service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The user input is not valid.
 *
 * @throws {@link WellArchitectedServiceException}
 *
 * Base exception class for all service exceptions from WellArchitected service.
 *
 * @public
 */
export class GetLensVersionDifferenceCommand extends command<GetLensVersionDifferenceCommandInput, GetLensVersionDifferenceCommandOutput>(
  _ep0,
  _mw0,
  "GetLensVersionDifference",
  GetLensVersionDifference$
) {
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
