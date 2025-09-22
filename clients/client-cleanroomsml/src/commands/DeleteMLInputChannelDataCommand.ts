// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsMLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsMLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteMLInputChannelDataRequest } from "../models/models_0";
import { DeleteMLInputChannelData } from "../schemas/schemas_1_MLInput";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteMLInputChannelDataCommand}.
 */
export interface DeleteMLInputChannelDataCommandInput extends DeleteMLInputChannelDataRequest {}
/**
 * @public
 *
 * The output of {@link DeleteMLInputChannelDataCommand}.
 */
export interface DeleteMLInputChannelDataCommandOutput extends __MetadataBearer {}

/**
 * <p>Provides the information necessary to delete an ML input channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsMLClient, DeleteMLInputChannelDataCommand } from "@aws-sdk/client-cleanroomsml"; // ES Modules import
 * // const { CleanRoomsMLClient, DeleteMLInputChannelDataCommand } = require("@aws-sdk/client-cleanroomsml"); // CommonJS import
 * // import type { CleanRoomsMLClientConfig } from "@aws-sdk/client-cleanroomsml";
 * const config = {}; // type is CleanRoomsMLClientConfig
 * const client = new CleanRoomsMLClient(config);
 * const input = { // DeleteMLInputChannelDataRequest
 *   mlInputChannelArn: "STRING_VALUE", // required
 *   membershipIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteMLInputChannelDataCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteMLInputChannelDataCommandInput - {@link DeleteMLInputChannelDataCommandInput}
 * @returns {@link DeleteMLInputChannelDataCommandOutput}
 * @see {@link DeleteMLInputChannelDataCommandInput} for command's `input` shape.
 * @see {@link DeleteMLInputChannelDataCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsMLClientResolvedConfig | config} for CleanRoomsMLClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>You can't complete this action because another resource depends on this resource.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you are requesting does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request parameters for this request are incorrect.</p>
 *
 * @throws {@link CleanRoomsMLServiceException}
 * <p>Base exception class for all service exceptions from CleanRoomsML service.</p>
 *
 *
 * @public
 */
export class DeleteMLInputChannelDataCommand extends $Command
  .classBuilder<
    DeleteMLInputChannelDataCommandInput,
    DeleteMLInputChannelDataCommandOutput,
    CleanRoomsMLClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsMLClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSStarkControlService", "DeleteMLInputChannelData", {})
  .n("CleanRoomsMLClient", "DeleteMLInputChannelDataCommand")
  .sc(DeleteMLInputChannelData)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteMLInputChannelDataRequest;
      output: {};
    };
    sdk: {
      input: DeleteMLInputChannelDataCommandInput;
      output: DeleteMLInputChannelDataCommandOutput;
    };
  };
}
