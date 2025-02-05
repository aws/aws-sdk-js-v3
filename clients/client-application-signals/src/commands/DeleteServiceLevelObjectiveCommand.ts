// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ApplicationSignalsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationSignalsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteServiceLevelObjectiveInput, DeleteServiceLevelObjectiveOutput } from "../models/models_0";
import {
  de_DeleteServiceLevelObjectiveCommand,
  se_DeleteServiceLevelObjectiveCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteServiceLevelObjectiveCommand}.
 */
export interface DeleteServiceLevelObjectiveCommandInput extends DeleteServiceLevelObjectiveInput {}
/**
 * @public
 *
 * The output of {@link DeleteServiceLevelObjectiveCommand}.
 */
export interface DeleteServiceLevelObjectiveCommandOutput extends DeleteServiceLevelObjectiveOutput, __MetadataBearer {}

/**
 * <p>Deletes the specified service level objective.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ApplicationSignalsClient, DeleteServiceLevelObjectiveCommand } from "@aws-sdk/client-application-signals"; // ES Modules import
 * // const { ApplicationSignalsClient, DeleteServiceLevelObjectiveCommand } = require("@aws-sdk/client-application-signals"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ApplicationSignalsClient(config);
 * const input = { // DeleteServiceLevelObjectiveInput
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new DeleteServiceLevelObjectiveCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteServiceLevelObjectiveCommandInput - {@link DeleteServiceLevelObjectiveCommandInput}
 * @returns {@link DeleteServiceLevelObjectiveCommandOutput}
 * @see {@link DeleteServiceLevelObjectiveCommandInput} for command's `input` shape.
 * @see {@link DeleteServiceLevelObjectiveCommandOutput} for command's `response` shape.
 * @see {@link ApplicationSignalsClientResolvedConfig | config} for ApplicationSignalsClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Resource not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled because of quota limits.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The resource is not valid.</p>
 *
 * @throws {@link ApplicationSignalsServiceException}
 * <p>Base exception class for all service exceptions from ApplicationSignals service.</p>
 *
 * @public
 */
export class DeleteServiceLevelObjectiveCommand extends $Command
  .classBuilder<
    DeleteServiceLevelObjectiveCommandInput,
    DeleteServiceLevelObjectiveCommandOutput,
    ApplicationSignalsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ApplicationSignalsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ApplicationSignals", "DeleteServiceLevelObjective", {})
  .n("ApplicationSignalsClient", "DeleteServiceLevelObjectiveCommand")
  .f(void 0, void 0)
  .ser(se_DeleteServiceLevelObjectiveCommand)
  .de(de_DeleteServiceLevelObjectiveCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteServiceLevelObjectiveInput;
      output: {};
    };
    sdk: {
      input: DeleteServiceLevelObjectiveCommandInput;
      output: DeleteServiceLevelObjectiveCommandOutput;
    };
  };
}
