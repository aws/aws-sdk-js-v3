// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteSlotTypeRequest } from "../models/models_0";
import { DeleteSlotType$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes all versions of the slot type, including the `$LATEST` version. To delete a specific version of the slot type, use the DeleteSlotTypeVersion operation.
 *
 * You can delete a version of a slot type only if it is not referenced. To delete a slot type that is referred to in one or more intents, you must remove those references first.
 *
 * > **Note:** If you get the `ResourceInUseException` exception, the exception provides an example reference that shows the intent where the slot type is referenced. To remove the reference to the slot type, either update the intent or delete it. If you get the same exception when you attempt to delete the slot type again, repeat until the slot type has no references and the `DeleteSlotType` call is successful.
 *
 * This operation requires permission for the `lex:DeleteSlotType` action.
 *
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, DeleteSlotTypeCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, DeleteSlotTypeCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * // import type { LexModelBuildingServiceClientConfig } from "@aws-sdk/client-lex-model-building-service";
 * const config = {}; // type is LexModelBuildingServiceClientConfig
 * const client = new LexModelBuildingServiceClient(config);
 * const input = { // DeleteSlotTypeRequest
 *   name: "STRING_VALUE", // required
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
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for LexModelBuildingServiceClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and try again.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * There was a conflict processing the request. Try your request again.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An internal Amazon Lex error occurred. Try your request again.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The request exceeded a limit. Try your request again.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The resource specified in the request was not found. Check the resource and try again.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * The resource that you are attempting to delete is referred to by another resource. Use this information to remove references to the resource that you are trying to delete.
 *
 * The body of the exception contains a JSON object that describes the resource.
 *
 * `{ "resourceType": BOT | BOTALIAS | BOTCHANNEL | INTENT,`
 *
 * `"resourceReference": {`
 *
 * `"name": string, "version": string } }`
 *
 * @throws {@link LexModelBuildingServiceServiceException}
 *
 * Base exception class for all service exceptions from LexModelBuildingService service.
 *
 * @public
 */
export class DeleteSlotTypeCommand extends command<DeleteSlotTypeCommandInput, DeleteSlotTypeCommandOutput>(
  _ep0,
  _mw0,
  "DeleteSlotType",
  DeleteSlotType$
) {
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
