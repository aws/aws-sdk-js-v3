// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  LexModelBuildingServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LexModelBuildingServiceClient";
import { PutSlotTypeRequest, PutSlotTypeResponse } from "../models/models_0";
import { de_PutSlotTypeCommand, se_PutSlotTypeCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates a custom slot type or replaces an existing custom slot
 *       type.</p>
 *          <p>To create a custom slot type, specify a name for the slot type and
 *       a set of enumeration values, which are the values that a slot of this type
 *       can assume. For more information, see <a>how-it-works</a>.</p>
 *          <p>If you specify the name of an existing slot type, the fields in the
 *       request replace the existing values in the <code>$LATEST</code> version of
 *       the slot type. Amazon Lex removes the fields that you don't provide in the
 *       request. If you don't specify required fields, Amazon Lex throws an exception.
 *       When you update the <code>$LATEST</code> version of a slot type, if a bot
 *       uses the <code>$LATEST</code> version of an intent that contains the slot
 *       type, the bot's <code>status</code> field is set to
 *       <code>NOT_BUILT</code>.</p>
 *          <p>This operation requires permissions for the
 *         <code>lex:PutSlotType</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, PutSlotTypeCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, PutSlotTypeCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
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
 *  <p>The request is not well formed. For example, a value is invalid or
 *       a required field is missing. Check the field values, and try
 *       again.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p> There was a conflict processing the request. Try your request
 *       again. </p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal Amazon Lex error occurred. Try your request again.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request exceeded a limit. Try your request again.</p>
 *
 * @throws {@link PreconditionFailedException} (client fault)
 *  <p> The checksum of the resource that you are trying to change does
 *       not match the checksum in the request. Check the resource's checksum and
 *       try again.</p>
 *
 * @throws {@link LexModelBuildingServiceServiceException}
 * <p>Base exception class for all service exceptions from LexModelBuildingService service.</p>
 *
 * @public
 * @example To Create a Slot Type
 * ```javascript
 * // This example shows how to create a slot type that describes pizza sauces.
 * const input = {
 *   "name": "PizzaSauceType",
 *   "description": "Available pizza sauces",
 *   "enumerationValues": [
 *     {
 *       "value": "red"
 *     },
 *     {
 *       "value": "white"
 *     }
 *   ]
 * };
 * const command = new PutSlotTypeCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "version": "$LATEST",
 *   "name": "DocPizzaSauceType",
 *   "checksum": "cfd00ed1-775d-4357-947c-aca7e73b44ba",
 *   "createdDate": 1494356442.23,
 *   "description": "Available pizza sauces",
 *   "enumerationValues": [
 *     {
 *       "value": "red"
 *     },
 *     {
 *       "value": "white"
 *     }
 *   ],
 *   "lastUpdatedDate": 1494356442.23
 * }
 * *\/
 * // example id: to-create-a-slot-type-1494357262258
 * ```
 *
 */
export class PutSlotTypeCommand extends $Command
  .classBuilder<
    PutSlotTypeCommandInput,
    PutSlotTypeCommandOutput,
    LexModelBuildingServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: LexModelBuildingServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSDeepSenseModelBuildingService", "PutSlotType", {})
  .n("LexModelBuildingServiceClient", "PutSlotTypeCommand")
  .f(void 0, void 0)
  .ser(se_PutSlotTypeCommand)
  .de(de_PutSlotTypeCommand)
  .build() {}
