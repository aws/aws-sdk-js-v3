// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetEventStreamRequest, GetEventStreamResponse } from "../models/models_0";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { GetEventStream } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetEventStreamCommand}.
 */
export interface GetEventStreamCommandInput extends GetEventStreamRequest {}
/**
 * @public
 *
 * The output of {@link GetEventStreamCommand}.
 */
export interface GetEventStreamCommandOutput extends GetEventStreamResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about the event stream settings for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetEventStreamCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetEventStreamCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * // import type { PinpointClientConfig } from "@aws-sdk/client-pinpoint";
 * const config = {}; // type is PinpointClientConfig
 * const client = new PinpointClient(config);
 * const input = { // GetEventStreamRequest
 *   ApplicationId: "STRING_VALUE", // required
 * };
 * const command = new GetEventStreamCommand(input);
 * const response = await client.send(command);
 * // { // GetEventStreamResponse
 * //   EventStream: { // EventStream
 * //     ApplicationId: "STRING_VALUE", // required
 * //     DestinationStreamArn: "STRING_VALUE", // required
 * //     ExternalId: "STRING_VALUE",
 * //     LastModifiedDate: "STRING_VALUE",
 * //     LastUpdatedBy: "STRING_VALUE",
 * //     RoleArn: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetEventStreamCommandInput - {@link GetEventStreamCommandInput}
 * @returns {@link GetEventStreamCommandOutput}
 * @see {@link GetEventStreamCommandInput} for command's `input` shape.
 * @see {@link GetEventStreamCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for PinpointClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PayloadTooLargeException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PinpointServiceException}
 * <p>Base exception class for all service exceptions from Pinpoint service.</p>
 *
 *
 * @public
 */
export class GetEventStreamCommand extends $Command
  .classBuilder<
    GetEventStreamCommandInput,
    GetEventStreamCommandOutput,
    PinpointClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Pinpoint", "GetEventStream", {})
  .n("PinpointClient", "GetEventStreamCommand")
  .sc(GetEventStream)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEventStreamRequest;
      output: GetEventStreamResponse;
    };
    sdk: {
      input: GetEventStreamCommandInput;
      output: GetEventStreamCommandOutput;
    };
  };
}
