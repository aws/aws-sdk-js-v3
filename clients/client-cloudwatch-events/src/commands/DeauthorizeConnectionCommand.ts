// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeauthorizeConnectionRequest, DeauthorizeConnectionResponse } from "../models/models_0";
import { de_DeauthorizeConnectionCommand, se_DeauthorizeConnectionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeauthorizeConnectionCommand}.
 */
export interface DeauthorizeConnectionCommandInput extends DeauthorizeConnectionRequest {}
/**
 * @public
 *
 * The output of {@link DeauthorizeConnectionCommand}.
 */
export interface DeauthorizeConnectionCommandOutput extends DeauthorizeConnectionResponse, __MetadataBearer {}

/**
 * <p>Removes all authorization parameters from the connection. This lets you remove the secret
 *       from the connection so you can reuse it without having to create a new connection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, DeauthorizeConnectionCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, DeauthorizeConnectionCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * // import type { CloudWatchEventsClientConfig } from "@aws-sdk/client-cloudwatch-events";
 * const config = {}; // type is CloudWatchEventsClientConfig
 * const client = new CloudWatchEventsClient(config);
 * const input = { // DeauthorizeConnectionRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DeauthorizeConnectionCommand(input);
 * const response = await client.send(command);
 * // { // DeauthorizeConnectionResponse
 * //   ConnectionArn: "STRING_VALUE",
 * //   ConnectionState: "CREATING" || "UPDATING" || "DELETING" || "AUTHORIZED" || "DEAUTHORIZED" || "AUTHORIZING" || "DEAUTHORIZING",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * //   LastAuthorizedTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DeauthorizeConnectionCommandInput - {@link DeauthorizeConnectionCommandInput}
 * @returns {@link DeauthorizeConnectionCommandOutput}
 * @see {@link DeauthorizeConnectionCommandInput} for command's `input` shape.
 * @see {@link DeauthorizeConnectionCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for CloudWatchEventsClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>There is concurrent modification on a rule, target, archive, or replay.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An entity that you specified does not exist.</p>
 *
 * @throws {@link CloudWatchEventsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchEvents service.</p>
 *
 *
 * @public
 */
export class DeauthorizeConnectionCommand extends $Command
  .classBuilder<
    DeauthorizeConnectionCommandInput,
    DeauthorizeConnectionCommandOutput,
    CloudWatchEventsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchEventsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSEvents", "DeauthorizeConnection", {})
  .n("CloudWatchEventsClient", "DeauthorizeConnectionCommand")
  .f(void 0, void 0)
  .ser(se_DeauthorizeConnectionCommand)
  .de(de_DeauthorizeConnectionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeauthorizeConnectionRequest;
      output: DeauthorizeConnectionResponse;
    };
    sdk: {
      input: DeauthorizeConnectionCommandInput;
      output: DeauthorizeConnectionCommandOutput;
    };
  };
}
