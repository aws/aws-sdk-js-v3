// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateChannelRequest, UpdateChannelResponse } from "../models/models_0";
import { UpdateChannel } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateChannelCommand}.
 */
export interface UpdateChannelCommandInput extends UpdateChannelRequest {}
/**
 * @public
 *
 * The output of {@link UpdateChannelCommand}.
 */
export interface UpdateChannelCommandOutput extends UpdateChannelResponse, __MetadataBearer {}

/**
 * <p>Updates a channel specified by a required channel ARN or UUID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, UpdateChannelCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, UpdateChannelCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * // import type { CloudTrailClientConfig } from "@aws-sdk/client-cloudtrail";
 * const config = {}; // type is CloudTrailClientConfig
 * const client = new CloudTrailClient(config);
 * const input = { // UpdateChannelRequest
 *   Channel: "STRING_VALUE", // required
 *   Destinations: [ // Destinations
 *     { // Destination
 *       Type: "EVENT_DATA_STORE" || "AWS_SERVICE", // required
 *       Location: "STRING_VALUE", // required
 *     },
 *   ],
 *   Name: "STRING_VALUE",
 * };
 * const command = new UpdateChannelCommand(input);
 * const response = await client.send(command);
 * // { // UpdateChannelResponse
 * //   ChannelArn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Source: "STRING_VALUE",
 * //   Destinations: [ // Destinations
 * //     { // Destination
 * //       Type: "EVENT_DATA_STORE" || "AWS_SERVICE", // required
 * //       Location: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param UpdateChannelCommandInput - {@link UpdateChannelCommandInput}
 * @returns {@link UpdateChannelCommandOutput}
 * @see {@link UpdateChannelCommandInput} for command's `input` shape.
 * @see {@link UpdateChannelCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for CloudTrailClient's `config` shape.
 *
 * @throws {@link ChannelAlreadyExistsException} (client fault)
 *  <p>
 *          This exception is thrown when the provided channel already exists.
 *       </p>
 *
 * @throws {@link ChannelARNInvalidException} (client fault)
 *  <p>This exception is thrown when the specified value of <code>ChannelARN</code> is not
 *          valid.</p>
 *
 * @throws {@link ChannelNotFoundException} (client fault)
 *  <p>This exception is thrown when CloudTrail cannot find the specified channel.</p>
 *
 * @throws {@link EventDataStoreARNInvalidException} (client fault)
 *  <p>The specified event data store ARN is not valid or does not map to an event data store
 *          in your account.</p>
 *
 * @throws {@link EventDataStoreNotFoundException} (client fault)
 *  <p>The specified event data store was not found.</p>
 *
 * @throws {@link InactiveEventDataStoreException} (client fault)
 *  <p>The event data store is inactive.</p>
 *
 * @throws {@link InvalidEventDataStoreCategoryException} (client fault)
 *  <p>This exception is thrown when event categories of specified event data stores are not
 *          valid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The request includes a parameter that is not valid.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>This exception is thrown when the requested operation is not permitted.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>This exception is thrown when the requested operation is not supported.</p>
 *
 * @throws {@link CloudTrailServiceException}
 * <p>Base exception class for all service exceptions from CloudTrail service.</p>
 *
 *
 * @public
 */
export class UpdateChannelCommand extends $Command
  .classBuilder<
    UpdateChannelCommandInput,
    UpdateChannelCommandOutput,
    CloudTrailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudTrailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CloudTrail_20131101", "UpdateChannel", {})
  .n("CloudTrailClient", "UpdateChannelCommand")
  .sc(UpdateChannel)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateChannelRequest;
      output: UpdateChannelResponse;
    };
    sdk: {
      input: UpdateChannelCommandInput;
      output: UpdateChannelCommandOutput;
    };
  };
}
