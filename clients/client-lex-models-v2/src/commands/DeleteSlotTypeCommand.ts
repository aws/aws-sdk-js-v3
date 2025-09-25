// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { DeleteSlotTypeRequest } from "../models/models_0";
import { DeleteSlotType } from "../schemas/schemas_21_Delete";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteSlotTypeCommand}.
 */
export interface DeleteSlotTypeCommandInput extends DeleteSlotTypeRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSlotTypeCommand}.
 */
export interface DeleteSlotTypeCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a slot type from a bot locale.</p>
 *          <p>If a slot is using the slot type, Amazon Lex throws a
 *             <code>ResourceInUseException</code> exception. To avoid the
 *          exception, set the <code>skipResourceInUseCheck</code> parameter to
 *             <code>true</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DeleteSlotTypeCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DeleteSlotTypeCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * // import type { LexModelsV2ClientConfig } from "@aws-sdk/client-lex-models-v2";
 * const config = {}; // type is LexModelsV2ClientConfig
 * const client = new LexModelsV2Client(config);
 * const input = { // DeleteSlotTypeRequest
 *   slotTypeId: "STRING_VALUE", // required
 *   botId: "STRING_VALUE", // required
 *   botVersion: "STRING_VALUE", // required
 *   localeId: "STRING_VALUE", // required
 *   skipResourceInUseCheck: true || false,
 * };
 * const command = new DeleteSlotTypeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSlotTypeCommandInput - {@link DeleteSlotTypeCommandInput}
 * @returns {@link DeleteSlotTypeCommandOutput}
 * @see {@link DeleteSlotTypeCommandInput} for command's `input` shape.
 * @see {@link DeleteSlotTypeCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The action that you tried to perform couldn't be completed because
 *          the resource is in a conflicting state. For example, deleting a bot
 *          that is in the CREATING state. Try your request again. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an unexpected condition. Try your request
 *          again.</p>
 *
 * @throws {@link PreconditionFailedException} (client fault)
 *  <p>Your request couldn't be completed because one or more request
 *          fields aren't valid. Check the fields in your request and try
 *          again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have reached a quota for your bot. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request rate is too high. Reduce the frequency of
 *          requests.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the input parameters in your request isn't valid. Check the
 *          parameters and try your request again.</p>
 *
 * @throws {@link LexModelsV2ServiceException}
 * <p>Base exception class for all service exceptions from LexModelsV2 service.</p>
 *
 *
 * @public
 */
export class DeleteSlotTypeCommand extends $Command
  .classBuilder<
    DeleteSlotTypeCommandInput,
    DeleteSlotTypeCommandOutput,
    LexModelsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelsV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LexModelBuildingServiceV2", "DeleteSlotType", {})
  .n("LexModelsV2Client", "DeleteSlotTypeCommand")
  .sc(DeleteSlotType)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSlotTypeRequest;
      output: {};
    };
    sdk: {
      input: DeleteSlotTypeCommandInput;
      output: DeleteSlotTypeCommandOutput;
    };
  };
}
