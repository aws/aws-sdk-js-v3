// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PublishAppVersionRequest, PublishAppVersionResponse } from "../models/models_0";
import { de_PublishAppVersionCommand, se_PublishAppVersionCommand } from "../protocols/Aws_restJson1";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PublishAppVersionCommand}.
 */
export interface PublishAppVersionCommandInput extends PublishAppVersionRequest {}
/**
 * @public
 *
 * The output of {@link PublishAppVersionCommand}.
 */
export interface PublishAppVersionCommandOutput extends PublishAppVersionResponse, __MetadataBearer {}

/**
 * <p>Publishes a new version of a specific Resilience Hub application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, PublishAppVersionCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, PublishAppVersionCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ResiliencehubClient(config);
 * const input = { // PublishAppVersionRequest
 *   appArn: "STRING_VALUE", // required
 *   versionName: "STRING_VALUE",
 * };
 * const command = new PublishAppVersionCommand(input);
 * const response = await client.send(command);
 * // { // PublishAppVersionResponse
 * //   appArn: "STRING_VALUE", // required
 * //   appVersion: "STRING_VALUE",
 * //   identifier: Number("long"),
 * //   versionName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PublishAppVersionCommandInput - {@link PublishAppVersionCommandInput}
 * @returns {@link PublishAppVersionCommandOutput}
 * @see {@link PublishAppVersionCommandInput} for command's `input` shape.
 * @see {@link PublishAppVersionCommandOutput} for command's `response` shape.
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
 * @public
 */
export class PublishAppVersionCommand extends $Command
  .classBuilder<
    PublishAppVersionCommandInput,
    PublishAppVersionCommandOutput,
    ResiliencehubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResiliencehubClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AwsResilienceHub", "PublishAppVersion", {})
  .n("ResiliencehubClient", "PublishAppVersionCommand")
  .f(void 0, void 0)
  .ser(se_PublishAppVersionCommand)
  .de(de_PublishAppVersionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PublishAppVersionRequest;
      output: PublishAppVersionResponse;
    };
    sdk: {
      input: PublishAppVersionCommandInput;
      output: PublishAppVersionCommandOutput;
    };
  };
}
