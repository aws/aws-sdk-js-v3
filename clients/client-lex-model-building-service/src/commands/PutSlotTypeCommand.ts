// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutSlotTypeRequest, PutSlotTypeResponse } from "../models/models_0";
import { PutSlotType$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutSlotTypeCommand}.
 */
export interface PutSlotTypeCommandInput extends PutSlotTypeRequest {}
/**
 * @public
 *
 * The output of {@link PutSlotTypeCommand}.
 */
export interface PutSlotTypeCommandOutput extends PutSlotTypeResponse, __MetadataBearer {}

/**
 * Creates a custom slot type or replaces an existing custom slot type.
 *
 * To create a custom slot type, specify a name for the slot type and a set of enumeration values, which are the values that a slot of this type can assume. For more information, see how-it-works.
 *
 * If you specify the name of an existing slot type, the fields in the request replace the existing values in the `$LATEST` version of the slot type. Amazon Lex removes the fields that you don't provide in the request. If you don't specify required fields, Amazon Lex throws an exception. When you update the `$LATEST` version of a slot type, if a bot uses the `$LATEST` version of an intent that contains the slot type, the bot's `status` field is set to `NOT_BUILT`.
 *
 * This operation requires permissions for the `lex:PutSlotType` action.
 *
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, PutSlotTypeCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, PutSlotTypeCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * // import type { LexModelBuildingServiceClientConfig } from "@aws-sdk/client-lex-model-building-service";
 * const config = {}; // type is LexModelBuildingServiceClientConfig
 * const client = new LexModelBuildingServiceClient(config);
 * const input = { // PutSlotTypeRequest
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   enumerationValues: [ // EnumerationValues
 *     { // EnumerationValue
 *       value: "STRING_VALUE", // required
 *       synonyms: [ // SynonymList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   checksum: "STRING_VALUE",
 *   valueSelectionStrategy: "ORIGINAL_VALUE" || "TOP_RESOLUTION",
 *   createVersion: true || false,
 *   parentSlotTypeSignature: "STRING_VALUE",
 *   slotTypeConfigurations: [ // SlotTypeConfigurations
 *     { // SlotTypeConfiguration
 *       regexConfiguration: { // SlotTypeRegexConfiguration
 *         pattern: "STRING_VALUE", // required
 *       },
 *     },
 *   ],
 * };
 * const command = new PutSlotTypeCommand(input);
 * const response = await client.send(command);
 * // { // PutSlotTypeResponse
 * //   name: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   enumerationValues: [ // EnumerationValues
 * //     { // EnumerationValue
 * //       value: "STRING_VALUE", // required
 * //       synonyms: [ // SynonymList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   lastUpdatedDate: new Date("TIMESTAMP"),
 * //   createdDate: new Date("TIMESTAMP"),
 * //   version: "STRING_VALUE",
 * //   checksum: "STRING_VALUE",
 * //   valueSelectionStrategy: "ORIGINAL_VALUE" || "TOP_RESOLUTION",
 * //   createVersion: true || false,
 * //   parentSlotTypeSignature: "STRING_VALUE",
 * //   slotTypeConfigurations: [ // SlotTypeConfigurations
 * //     { // SlotTypeConfiguration
 * //       regexConfiguration: { // SlotTypeRegexConfiguration
 * //         pattern: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param PutSlotTypeCommandInput - {@link PutSlotTypeCommandInput}
 * @returns {@link PutSlotTypeCommandOutput}
 * @see {@link PutSlotTypeCommandInput} for command's `input` shape.
 * @see {@link PutSlotTypeCommandOutput} for command's `response` shape.
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
 * @throws {@link PreconditionFailedException} (client fault)
 *
 * The checksum of the resource that you are trying to change does not match the checksum in the request. Check the resource's checksum and try again.
 *
 * @throws {@link LexModelBuildingServiceServiceException}
 *
 * Base exception class for all service exceptions from LexModelBuildingService service.
 *
 * @example To Create a Slot Type
 * ```javascript
 * // This example shows how to create a slot type that describes pizza sauces.
 * const input = {
 *   description: "Available pizza sauces",
 *   enumerationValues: [
 *     {
 *       value: "red"
 *     },
 *     {
 *       value: "white"
 *     }
 *   ],
 *   name: "PizzaSauceType"
 * };
 * const command = new PutSlotTypeCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   checksum: "cfd00ed1-775d-4357-947c-aca7e73b44ba",
 *   createdDate: 1.49435644223E9,
 *   description: "Available pizza sauces",
 *   enumerationValues: [
 *     {
 *       value: "red"
 *     },
 *     {
 *       value: "white"
 *     }
 *   ],
 *   lastUpdatedDate: 1.49435644223E9,
 *   name: "DocPizzaSauceType",
 *   version: "$LATEST"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class PutSlotTypeCommand extends command<PutSlotTypeCommandInput, PutSlotTypeCommandOutput>(
  _ep0,
  _mw0,
  "PutSlotType",
  PutSlotType$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutSlotTypeRequest;
      output: PutSlotTypeResponse;
    };
    sdk: {
      input: PutSlotTypeCommandInput;
      output: PutSlotTypeCommandOutput;
    };
  };
}
