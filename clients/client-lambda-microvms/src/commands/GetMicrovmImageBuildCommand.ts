// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetMicrovmImageBuildInput, GetMicrovmImageBuildOutput } from "../models/models_0";
import { GetMicrovmImageBuild$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetMicrovmImageBuildCommand}.
 */
export interface GetMicrovmImageBuildCommandInput extends GetMicrovmImageBuildInput {}
/**
 * @public
 *
 * The output of {@link GetMicrovmImageBuildCommand}.
 */
export interface GetMicrovmImageBuildCommandOutput extends GetMicrovmImageBuildOutput, __MetadataBearer {}

/**
 * <p>Retrieves the details of a specific MicroVM image build, including its state, target architecture, and snapshot information.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaMicrovmsClient, GetMicrovmImageBuildCommand } from "@aws-sdk/client-lambda-microvms"; // ES Modules import
 * // const { LambdaMicrovmsClient, GetMicrovmImageBuildCommand } = require("@aws-sdk/client-lambda-microvms"); // CommonJS import
 * // import type { LambdaMicrovmsClientConfig } from "@aws-sdk/client-lambda-microvms";
 * const config = {}; // type is LambdaMicrovmsClientConfig
 * const client = new LambdaMicrovmsClient(config);
 * const input = { // GetMicrovmImageBuildInput
 *   imageIdentifier: "STRING_VALUE", // required
 *   imageVersion: "STRING_VALUE", // required
 *   buildId: "STRING_VALUE", // required
 * };
 * const command = new GetMicrovmImageBuildCommand(input);
 * const response = await client.send(command);
 * // { // GetMicrovmImageBuildOutput
 * //   imageArn: "STRING_VALUE", // required
 * //   imageVersion: "STRING_VALUE", // required
 * //   buildId: "STRING_VALUE", // required
 * //   buildState: "PENDING" || "IN_PROGRESS" || "SUCCESSFUL" || "FAILED", // required
 * //   architecture: "ARM_64", // required
 * //   chipset: "GRAVITON", // required
 * //   chipsetGeneration: "STRING_VALUE", // required
 * //   stateReason: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   snapshotBuild: { // SnapshotBuild
 * //     memorySnapshotSizeInBytes: Number("long"),
 * //     codeInstallSizeInBytes: Number("long"),
 * //     diskSnapshotSizeInBytes: Number("long"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetMicrovmImageBuildCommandInput - {@link GetMicrovmImageBuildCommandInput}
 * @returns {@link GetMicrovmImageBuildCommandOutput}
 * @see {@link GetMicrovmImageBuildCommandInput} for command's `input` shape.
 * @see {@link GetMicrovmImageBuildCommandOutput} for command's `response` shape.
 * @see {@link LambdaMicrovmsClientResolvedConfig | config} for LambdaMicrovmsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry the request later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. Retry the request later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by the service.</p>
 *
 * @throws {@link LambdaMicrovmsServiceException}
 * <p>Base exception class for all service exceptions from LambdaMicrovms service.</p>
 *
 *
 * @public
 */
export class GetMicrovmImageBuildCommand extends command<GetMicrovmImageBuildCommandInput, GetMicrovmImageBuildCommandOutput>(
  _ep0,
  _mw0,
  "GetMicrovmImageBuild",
  GetMicrovmImageBuild$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMicrovmImageBuildInput;
      output: GetMicrovmImageBuildOutput;
    };
    sdk: {
      input: GetMicrovmImageBuildCommandInput;
      output: GetMicrovmImageBuildCommandOutput;
    };
  };
}
