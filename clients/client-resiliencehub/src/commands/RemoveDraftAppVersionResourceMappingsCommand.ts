// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  RemoveDraftAppVersionResourceMappingsRequest,
  RemoveDraftAppVersionResourceMappingsResponse,
} from "../models/models_0";
import {
  de_RemoveDraftAppVersionResourceMappingsCommand,
  se_RemoveDraftAppVersionResourceMappingsCommand,
} from "../protocols/Aws_restJson1";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RemoveDraftAppVersionResourceMappingsCommand}.
 */
export interface RemoveDraftAppVersionResourceMappingsCommandInput
  extends RemoveDraftAppVersionResourceMappingsRequest {}
/**
 * @public
 *
 * The output of {@link RemoveDraftAppVersionResourceMappingsCommand}.
 */
export interface RemoveDraftAppVersionResourceMappingsCommandOutput
  extends RemoveDraftAppVersionResourceMappingsResponse,
    __MetadataBearer {}

/**
 * <p>Removes resource mappings from a draft application version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, RemoveDraftAppVersionResourceMappingsCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, RemoveDraftAppVersionResourceMappingsCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ResiliencehubClient(config);
 * const input = { // RemoveDraftAppVersionResourceMappingsRequest
 *   appArn: "STRING_VALUE", // required
 *   resourceNames: [ // EntityNameList
 *     "STRING_VALUE",
 *   ],
 *   logicalStackNames: [ // String255List
 *     "STRING_VALUE",
 *   ],
 *   appRegistryAppNames: [
 *     "STRING_VALUE",
 *   ],
 *   resourceGroupNames: [
 *     "STRING_VALUE",
 *   ],
 *   terraformSourceNames: [
 *     "STRING_VALUE",
 *   ],
 *   eksSourceNames: [
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new RemoveDraftAppVersionResourceMappingsCommand(input);
 * const response = await client.send(command);
 * // { // RemoveDraftAppVersionResourceMappingsResponse
 * //   appArn: "STRING_VALUE",
 * //   appVersion: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RemoveDraftAppVersionResourceMappingsCommandInput - {@link RemoveDraftAppVersionResourceMappingsCommandInput}
 * @returns {@link RemoveDraftAppVersionResourceMappingsCommandOutput}
 * @see {@link RemoveDraftAppVersionResourceMappingsCommandInput} for command's `input` shape.
 * @see {@link RemoveDraftAppVersionResourceMappingsCommandOutput} for command's `response` shape.
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
export class RemoveDraftAppVersionResourceMappingsCommand extends $Command
  .classBuilder<
    RemoveDraftAppVersionResourceMappingsCommandInput,
    RemoveDraftAppVersionResourceMappingsCommandOutput,
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
  .s("AwsResilienceHub", "RemoveDraftAppVersionResourceMappings", {})
  .n("ResiliencehubClient", "RemoveDraftAppVersionResourceMappingsCommand")
  .f(void 0, void 0)
  .ser(se_RemoveDraftAppVersionResourceMappingsCommand)
  .de(de_RemoveDraftAppVersionResourceMappingsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RemoveDraftAppVersionResourceMappingsRequest;
      output: RemoveDraftAppVersionResourceMappingsResponse;
    };
    sdk: {
      input: RemoveDraftAppVersionResourceMappingsCommandInput;
      output: RemoveDraftAppVersionResourceMappingsCommandOutput;
    };
  };
}
