// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateAppVersionRequest, UpdateAppVersionResponse } from "../models/models_0";
import type { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";
import { UpdateAppVersion } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAppVersionCommand}.
 */
export interface UpdateAppVersionCommandInput extends UpdateAppVersionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAppVersionCommand}.
 */
export interface UpdateAppVersionCommandOutput extends UpdateAppVersionResponse, __MetadataBearer {}

/**
 * <p>Updates the Resilience Hub application version.</p>
 *          <note>
 *             <p>This API updates the Resilience Hub application draft version. To use this
 *         information for running resiliency assessments, you must publish the Resilience Hub
 *         application using the <code>PublishAppVersion</code> API.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, UpdateAppVersionCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, UpdateAppVersionCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * // import type { ResiliencehubClientConfig } from "@aws-sdk/client-resiliencehub";
 * const config = {}; // type is ResiliencehubClientConfig
 * const client = new ResiliencehubClient(config);
 * const input = { // UpdateAppVersionRequest
 *   appArn: "STRING_VALUE", // required
 *   additionalInfo: { // AdditionalInfoMap
 *     "<keys>": [ // AdditionalInfoValueList
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new UpdateAppVersionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAppVersionResponse
 * //   appArn: "STRING_VALUE", // required
 * //   appVersion: "STRING_VALUE", // required
 * //   additionalInfo: { // AdditionalInfoMap
 * //     "<keys>": [ // AdditionalInfoValueList
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateAppVersionCommandInput - {@link UpdateAppVersionCommandInput}
 * @returns {@link UpdateAppVersionCommandOutput}
 * @see {@link UpdateAppVersionCommandInput} for command's `input` shape.
 * @see {@link UpdateAppVersionCommandOutput} for command's `response` shape.
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
export class UpdateAppVersionCommand extends $Command
  .classBuilder<
    UpdateAppVersionCommandInput,
    UpdateAppVersionCommandOutput,
    ResiliencehubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResiliencehubClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsResilienceHub", "UpdateAppVersion", {})
  .n("ResiliencehubClient", "UpdateAppVersionCommand")
  .sc(UpdateAppVersion)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAppVersionRequest;
      output: UpdateAppVersionResponse;
    };
    sdk: {
      input: UpdateAppVersionCommandInput;
      output: UpdateAppVersionCommandOutput;
    };
  };
}
