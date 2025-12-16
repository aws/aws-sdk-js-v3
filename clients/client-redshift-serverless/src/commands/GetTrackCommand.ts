// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetTrackRequest, GetTrackResponse } from "../models/models_0";
import type {
  RedshiftServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RedshiftServerlessClient";
import { GetTrack$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Get the Redshift Serverless version for a specified track.</p>
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
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The submitted action has conflicts.</p>
 *
 * @throws {@link DryRunException} (client fault)
 *  <p>This exception is thrown when the request was successful, but dry run was enabled so no action was taken.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link RedshiftServerlessServiceException}
 * <p>Base exception class for all service exceptions from RedshiftServerless service.</p>
 *
 *
 * @public
 */
export class GetTrackCommand extends $Command
  .classBuilder<
    GetTrackCommandInput,
    GetTrackCommandOutput,
    RedshiftServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftServerlessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServerless", "GetTrack", {})
  .n("RedshiftServerlessClient", "GetTrackCommand")
  .sc(GetTrack$)
  .build() {
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
