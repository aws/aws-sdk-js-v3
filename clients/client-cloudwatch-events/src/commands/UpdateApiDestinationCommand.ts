// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateApiDestinationRequest, UpdateApiDestinationResponse } from "../models/models_0";
import { de_UpdateApiDestinationCommand, se_UpdateApiDestinationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateApiDestinationCommand}.
 */
export interface UpdateApiDestinationCommandInput extends UpdateApiDestinationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateApiDestinationCommand}.
 */
export interface UpdateApiDestinationCommandOutput extends UpdateApiDestinationResponse, __MetadataBearer {}

/**
 * <p>Updates an API destination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, UpdateApiDestinationCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, UpdateApiDestinationCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * const client = new CloudWatchEventsClient(config);
 * const input = { // UpdateApiDestinationRequest
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   ConnectionArn: "STRING_VALUE",
 *   InvocationEndpoint: "STRING_VALUE",
 *   HttpMethod: "POST" || "GET" || "HEAD" || "OPTIONS" || "PUT" || "PATCH" || "DELETE",
 *   InvocationRateLimitPerSecond: Number("int"),
 * };
 * const command = new UpdateApiDestinationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateApiDestinationResponse
 * //   ApiDestinationArn: "STRING_VALUE",
 * //   ApiDestinationState: "ACTIVE" || "INACTIVE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   LastModifiedTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UpdateApiDestinationCommandInput - {@link UpdateApiDestinationCommandInput}
 * @returns {@link UpdateApiDestinationCommandOutput}
 * @see {@link UpdateApiDestinationCommandInput} for command's `input` shape.
 * @see {@link UpdateApiDestinationCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for CloudWatchEventsClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>There is concurrent modification on a rule, target, archive, or replay.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>This exception occurs due to unexpected causes.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request failed because it attempted to create resource beyond the allowed service
 *       quota.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An entity that you specified does not exist.</p>
 *
 * @throws {@link CloudWatchEventsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchEvents service.</p>
 *
 * @public
 */
export class UpdateApiDestinationCommand extends $Command
  .classBuilder<
    UpdateApiDestinationCommandInput,
    UpdateApiDestinationCommandOutput,
    CloudWatchEventsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CloudWatchEventsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSEvents", "UpdateApiDestination", {})
  .n("CloudWatchEventsClient", "UpdateApiDestinationCommand")
  .f(void 0, void 0)
  .ser(se_UpdateApiDestinationCommand)
  .de(de_UpdateApiDestinationCommand)
  .build() {}
