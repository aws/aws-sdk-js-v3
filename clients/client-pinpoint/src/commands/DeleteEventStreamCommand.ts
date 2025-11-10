// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteEventStreamRequest, DeleteEventStreamResponse } from "../models/models_0";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { DeleteEventStream } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteEventStreamCommand}.
 */
export interface DeleteEventStreamCommandInput extends DeleteEventStreamRequest {}
/**
 * @public
 *
 * The output of {@link DeleteEventStreamCommand}.
 */
export interface DeleteEventStreamCommandOutput extends DeleteEventStreamResponse, __MetadataBearer {}

/**
 * <p>Deletes the event stream for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, DeleteEventStreamCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, DeleteEventStreamCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * // import type { PinpointClientConfig } from "@aws-sdk/client-pinpoint";
 * const config = {}; // type is PinpointClientConfig
 * const client = new PinpointClient(config);
 * const input = { // DeleteEventStreamRequest
 *   ApplicationId: "STRING_VALUE", // required
 * };
 * const command = new DeleteEventStreamCommand(input);
 * const response = await client.send(command);
 * // { // DeleteEventStreamResponse
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
 * @param DeleteEventStreamCommandInput - {@link DeleteEventStreamCommandInput}
 * @returns {@link DeleteEventStreamCommandOutput}
 * @see {@link DeleteEventStreamCommandInput} for command's `input` shape.
 * @see {@link DeleteEventStreamCommandOutput} for command's `response` shape.
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
export class DeleteEventStreamCommand extends $Command
  .classBuilder<
    DeleteEventStreamCommandInput,
    DeleteEventStreamCommandOutput,
    PinpointClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Pinpoint", "DeleteEventStream", {})
  .n("PinpointClient", "DeleteEventStreamCommand")
  .sc(DeleteEventStream)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEventStreamRequest;
      output: DeleteEventStreamResponse;
    };
    sdk: {
      input: DeleteEventStreamCommandInput;
      output: DeleteEventStreamCommandOutput;
    };
  };
}
