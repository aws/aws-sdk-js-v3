// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  LexModelBuildingServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LexModelBuildingServiceClient";
import type { GetSlotTypeRequest, GetSlotTypeResponse } from "../models/models_0";
import { GetSlotType } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSlotTypeCommand}.
 */
export interface GetSlotTypeCommandInput extends GetSlotTypeRequest {}
/**
 * @public
 *
 * The output of {@link GetSlotTypeCommand}.
 */
export interface GetSlotTypeCommandOutput extends GetSlotTypeResponse, __MetadataBearer {}

/**
 * <p>Returns information about a specific version of a slot type. In
 *       addition to specifying the slot type name, you must specify the slot type
 *       version.</p>
 *          <p>This operation requires permissions for the
 *         <code>lex:GetSlotType</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, GetSlotTypeCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, GetSlotTypeCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * // import type { LexModelBuildingServiceClientConfig } from "@aws-sdk/client-lex-model-building-service";
 * const config = {}; // type is LexModelBuildingServiceClientConfig
 * const client = new LexModelBuildingServiceClient(config);
 * const input = { // GetSlotTypeRequest
 *   name: "STRING_VALUE", // required
 *   version: "STRING_VALUE", // required
 * };
 * const command = new GetSlotTypeCommand(input);
 * const response = await client.send(command);
 * // { // GetSlotTypeResponse
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
 * @param GetSlotTypeCommandInput - {@link GetSlotTypeCommandInput}
 * @returns {@link GetSlotTypeCommandOutput}
 * @see {@link GetSlotTypeCommandInput} for command's `input` shape.
 * @see {@link GetSlotTypeCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for LexModelBuildingServiceClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not well formed. For example, a value is invalid or
 *       a required field is missing. Check the field values, and try
 *       again.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal Amazon Lex error occurred. Try your request again.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request exceeded a limit. Try your request again.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource specified in the request was not found. Check the
 *       resource and try again.</p>
 *
 * @throws {@link LexModelBuildingServiceServiceException}
 * <p>Base exception class for all service exceptions from LexModelBuildingService service.</p>
 *
 *
 * @example To get information about a slot type
 * ```javascript
 * // This example shows how to get information about a slot type.
 * const input = {
 *   name: "DocPizzaCrustType",
 *   version: "$LATEST"
 * };
 * const command = new GetSlotTypeCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   checksum: "210b3d5a-90a3-4b22-ac7e-f50c2c71095f",
 *   createdDate: 1.494359274403E9,
 *   description: "Available crust types",
 *   enumerationValues: [
 *     {
 *       value: "thick"
 *     },
 *     {
 *       value: "thin"
 *     }
 *   ],
 *   lastUpdatedDate: 1.494359274403E9,
 *   name: "DocPizzaCrustType",
 *   version: "$LATEST"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetSlotTypeCommand extends $Command
  .classBuilder<
    GetSlotTypeCommandInput,
    GetSlotTypeCommandOutput,
    LexModelBuildingServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelBuildingServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSDeepSenseModelBuildingService", "GetSlotType", {})
  .n("LexModelBuildingServiceClient", "GetSlotTypeCommand")
  .sc(GetSlotType)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSlotTypeRequest;
      output: GetSlotTypeResponse;
    };
    sdk: {
      input: GetSlotTypeCommandInput;
      output: GetSlotTypeCommandOutput;
    };
  };
}
