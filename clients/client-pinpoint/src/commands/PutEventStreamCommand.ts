// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { PutEventStreamRequest, PutEventStreamResponse } from "../models/models_1";
import type { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { PutEventStream } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutEventStreamCommand}.
 */
export interface PutEventStreamCommandInput extends PutEventStreamRequest {}
/**
 * @public
 *
 * The output of {@link PutEventStreamCommand}.
 */
export interface PutEventStreamCommandOutput extends PutEventStreamResponse, __MetadataBearer {}

/**
 * <p>Creates a new event stream for an application or updates the settings of an existing event stream for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, PutEventStreamCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, PutEventStreamCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * // import type { PinpointClientConfig } from "@aws-sdk/client-pinpoint";
 * const config = {}; // type is PinpointClientConfig
 * const client = new PinpointClient(config);
 * const input = { // PutEventStreamRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   WriteEventStream: { // WriteEventStream
 *     DestinationStreamArn: "STRING_VALUE", // required
 *     RoleArn: "STRING_VALUE", // required
 *   },
 * };
 * const command = new PutEventStreamCommand(input);
 * const response = await client.send(command);
 * // { // PutEventStreamResponse
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
 * @param PutEventStreamCommandInput - {@link PutEventStreamCommandInput}
 * @returns {@link PutEventStreamCommandOutput}
 * @see {@link PutEventStreamCommandInput} for command's `input` shape.
 * @see {@link PutEventStreamCommandOutput} for command's `response` shape.
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
export class PutEventStreamCommand extends $Command
  .classBuilder<
    PutEventStreamCommandInput,
    PutEventStreamCommandOutput,
    PinpointClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Pinpoint", "PutEventStream", {})
  .n("PinpointClient", "PutEventStreamCommand")
  .sc(PutEventStream)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutEventStreamRequest;
      output: PutEventStreamResponse;
    };
    sdk: {
      input: PutEventStreamCommandInput;
      output: PutEventStreamCommandOutput;
    };
  };
}
