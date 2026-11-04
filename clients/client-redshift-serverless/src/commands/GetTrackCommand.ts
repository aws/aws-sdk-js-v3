// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetTrackRequest, GetTrackResponse } from "../models/models_0";
import { GetTrack$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetTrackCommand}.
 */
export interface GetTrackCommandInput extends GetTrackRequest {}
/**
 * @public
 *
 * The output of {@link GetTrackCommand}.
 */
export interface GetTrackCommandOutput extends GetTrackResponse, __MetadataBearer {}

/**
 * Get the Redshift Serverless version for a specified track.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, GetTrackCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, GetTrackCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * // import type { RedshiftServerlessClientConfig } from "@aws-sdk/client-redshift-serverless";
 * const config = {}; // type is RedshiftServerlessClientConfig
 * const client = new RedshiftServerlessClient(config);
 * const input = { // GetTrackRequest
 *   trackName: "STRING_VALUE", // required
 * };
 * const command = new GetTrackCommand(input);
 * const response = await client.send(command);
 * // { // GetTrackResponse
 * //   track: { // ServerlessTrack
 * //     trackName: "STRING_VALUE",
 * //     workgroupVersion: "STRING_VALUE",
 * //     updateTargets: [ // UpdateTargetsList
 * //       { // UpdateTarget
 * //         trackName: "STRING_VALUE",
 * //         workgroupVersion: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetTrackCommandInput - {@link GetTrackCommandInput}
 * @returns {@link GetTrackCommandOutput}
 * @see {@link GetTrackCommandInput} for command's `input` shape.
 * @see {@link GetTrackCommandOutput} for command's `response` shape.
 * @see {@link RedshiftServerlessClientResolvedConfig | config} for RedshiftServerlessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The submitted action has conflicts.
 *
 * @throws {@link DryRunException} (client fault)
 *
 * This exception is thrown when the request was successful, but dry run was enabled so no action was taken.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource could not be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input failed to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link RedshiftServerlessServiceException}
 *
 * Base exception class for all service exceptions from RedshiftServerless service.
 *
 * @public
 */
export class GetTrackCommand extends command<GetTrackCommandInput, GetTrackCommandOutput>(
  _ep0,
  _mw0,
  "GetTrack",
  GetTrack$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTrackRequest;
      output: GetTrackResponse;
    };
    sdk: {
      input: GetTrackCommandInput;
      output: GetTrackCommandOutput;
    };
  };
}
