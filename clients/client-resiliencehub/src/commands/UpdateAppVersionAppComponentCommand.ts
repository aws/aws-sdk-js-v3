// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateAppVersionAppComponentRequest, UpdateAppVersionAppComponentResponse } from "../models/models_0";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";
import { UpdateAppVersionAppComponent } from "../schemas/schemas_15_App";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAppVersionAppComponentCommand}.
 */
export interface UpdateAppVersionAppComponentCommandInput extends UpdateAppVersionAppComponentRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAppVersionAppComponentCommand}.
 */
export interface UpdateAppVersionAppComponentCommandOutput
  extends UpdateAppVersionAppComponentResponse,
    __MetadataBearer {}

/**
 * <p>Updates an existing Application Component in the Resilience Hub application.</p>
 *          <note>
 *             <p>This API updates the Resilience Hub application draft version. To use this
 *         Application Component for running assessments, you must publish the Resilience Hub
 *         application using the <code>PublishAppVersion</code> API.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, UpdateAppVersionAppComponentCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, UpdateAppVersionAppComponentCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * // import type { ResiliencehubClientConfig } from "@aws-sdk/client-resiliencehub";
 * const config = {}; // type is ResiliencehubClientConfig
 * const client = new ResiliencehubClient(config);
 * const input = { // UpdateAppVersionAppComponentRequest
 *   appArn: "STRING_VALUE", // required
 *   id: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   type: "STRING_VALUE",
 *   additionalInfo: { // AdditionalInfoMap
 *     "<keys>": [ // AdditionalInfoValueList
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new UpdateAppVersionAppComponentCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAppVersionAppComponentResponse
 * //   appArn: "STRING_VALUE", // required
 * //   appVersion: "STRING_VALUE", // required
 * //   appComponent: { // AppComponent
 * //     name: "STRING_VALUE", // required
 * //     type: "STRING_VALUE", // required
 * //     id: "STRING_VALUE",
 * //     additionalInfo: { // AdditionalInfoMap
 * //       "<keys>": [ // AdditionalInfoValueList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateAppVersionAppComponentCommandInput - {@link UpdateAppVersionAppComponentCommandInput}
 * @returns {@link UpdateAppVersionAppComponentCommandOutput}
 * @see {@link UpdateAppVersionAppComponentCommandInput} for command's `input` shape.
 * @see {@link UpdateAppVersionAppComponentCommandOutput} for command's `response` shape.
 * @see {@link ResiliencehubClientResolvedConfig | config} for ResiliencehubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation. The user or role that is
 *       making the request must have at least one IAM permissions policy attached that grants the
 *       required permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This exception occurs when a conflict with a previous successful write is detected. This generally occurs
 *       when the previous write did not have time to propagate to the host serving the current
 *       request. A retry (with appropriate backoff logic) is the recommended response to this
 *       exception.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Resilience Hub
 *       service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception occurs when the specified resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This exception occurs when you have exceeded the limit on the number of requests per second.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>This exception occurs when a request is not valid.</p>
 *
 * @throws {@link ResiliencehubServiceException}
 * <p>Base exception class for all service exceptions from Resiliencehub service.</p>
 *
 *
 * @public
 */
export class UpdateAppVersionAppComponentCommand extends $Command
  .classBuilder<
    UpdateAppVersionAppComponentCommandInput,
    UpdateAppVersionAppComponentCommandOutput,
    ResiliencehubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResiliencehubClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsResilienceHub", "UpdateAppVersionAppComponent", {})
  .n("ResiliencehubClient", "UpdateAppVersionAppComponentCommand")
  .sc(UpdateAppVersionAppComponent)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAppVersionAppComponentRequest;
      output: UpdateAppVersionAppComponentResponse;
    };
    sdk: {
      input: UpdateAppVersionAppComponentCommandInput;
      output: UpdateAppVersionAppComponentCommandOutput;
    };
  };
}
