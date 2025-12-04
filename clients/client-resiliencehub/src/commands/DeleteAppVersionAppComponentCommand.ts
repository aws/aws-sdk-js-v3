// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteAppVersionAppComponentRequest, DeleteAppVersionAppComponentResponse } from "../models/models_0";
import type { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";
import { DeleteAppVersionAppComponent } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteAppVersionAppComponentCommand}.
 */
export interface DeleteAppVersionAppComponentCommandInput extends DeleteAppVersionAppComponentRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAppVersionAppComponentCommand}.
 */
export interface DeleteAppVersionAppComponentCommandOutput
  extends DeleteAppVersionAppComponentResponse,
    __MetadataBearer {}

/**
 * <p>Deletes an Application Component from the Resilience Hub application.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>This API updates the Resilience Hub application draft version. To use this
 *             Application Component for running assessments, you must publish the Resilience Hub
 *             application using the <code>PublishAppVersion</code> API.</p>
 *                </li>
 *                <li>
 *                   <p>You will not be able to delete an Application Component if it has resources associated
 *             with it.</p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, DeleteAppVersionAppComponentCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, DeleteAppVersionAppComponentCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * // import type { ResiliencehubClientConfig } from "@aws-sdk/client-resiliencehub";
 * const config = {}; // type is ResiliencehubClientConfig
 * const client = new ResiliencehubClient(config);
 * const input = { // DeleteAppVersionAppComponentRequest
 *   appArn: "STRING_VALUE", // required
 *   id: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new DeleteAppVersionAppComponentCommand(input);
 * const response = await client.send(command);
 * // { // DeleteAppVersionAppComponentResponse
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
 * @param DeleteAppVersionAppComponentCommandInput - {@link DeleteAppVersionAppComponentCommandInput}
 * @returns {@link DeleteAppVersionAppComponentCommandOutput}
 * @see {@link DeleteAppVersionAppComponentCommandInput} for command's `input` shape.
 * @see {@link DeleteAppVersionAppComponentCommandOutput} for command's `response` shape.
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
export class DeleteAppVersionAppComponentCommand extends $Command
  .classBuilder<
    DeleteAppVersionAppComponentCommandInput,
    DeleteAppVersionAppComponentCommandOutput,
    ResiliencehubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResiliencehubClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsResilienceHub", "DeleteAppVersionAppComponent", {})
  .n("ResiliencehubClient", "DeleteAppVersionAppComponentCommand")
  .sc(DeleteAppVersionAppComponent)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAppVersionAppComponentRequest;
      output: DeleteAppVersionAppComponentResponse;
    };
    sdk: {
      input: DeleteAppVersionAppComponentCommandInput;
      output: DeleteAppVersionAppComponentCommandOutput;
    };
  };
}
