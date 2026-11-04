// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetStageSessionRequest, GetStageSessionResponse } from "../models/models_0";
import { GetStageSession$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetStageSessionCommand}.
 */
export interface GetStageSessionCommandInput extends GetStageSessionRequest {}
/**
 * @public
 *
 * The output of {@link GetStageSessionCommand}.
 */
export interface GetStageSessionCommandOutput extends GetStageSessionResponse, __MetadataBearer {}

/**
 * Gets information for the specified stage session.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IVSRealTimeClient, GetStageSessionCommand } from "@aws-sdk/client-ivs-realtime"; // ES Modules import
 * // const { IVSRealTimeClient, GetStageSessionCommand } = require("@aws-sdk/client-ivs-realtime"); // CommonJS import
 * // import type { IVSRealTimeClientConfig } from "@aws-sdk/client-ivs-realtime";
 * const config = {}; // type is IVSRealTimeClientConfig
 * const client = new IVSRealTimeClient(config);
 * const input = { // GetStageSessionRequest
 *   stageArn: "STRING_VALUE", // required
 *   sessionId: "STRING_VALUE", // required
 * };
 * const command = new GetStageSessionCommand(input);
 * const response = await client.send(command);
 * // { // GetStageSessionResponse
 * //   stageSession: { // StageSession
 * //     sessionId: "STRING_VALUE",
 * //     startTime: new Date("TIMESTAMP"),
 * //     endTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetStageSessionCommandInput - {@link GetStageSessionCommandInput}
 * @returns {@link GetStageSessionCommandOutput}
 * @see {@link GetStageSessionCommandInput} for command's `input` shape.
 * @see {@link GetStageSessionCommandOutput} for command's `response` shape.
 * @see {@link IVSRealTimeClientResolvedConfig | config} for IVSRealTimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User does not have sufficient access to perform this action.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Request references a resource which does not exist.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link IVSRealTimeServiceException}
 *
 * Base exception class for all service exceptions from IVSRealTime service.
 *
 * @public
 */
export class GetStageSessionCommand extends command<GetStageSessionCommandInput, GetStageSessionCommandOutput>(
  _ep0,
  _mw0,
  "GetStageSession",
  GetStageSession$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetStageSessionRequest;
      output: GetStageSessionResponse;
    };
    sdk: {
      input: GetStageSessionCommandInput;
      output: GetStageSessionCommandOutput;
    };
  };
}
