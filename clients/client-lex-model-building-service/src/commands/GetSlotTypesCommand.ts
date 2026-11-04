// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetSlotTypesRequest, GetSlotTypesResponse } from "../models/models_0";
import { GetSlotTypes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetSlotTypesCommand}.
 */
export interface GetSlotTypesCommandInput extends GetSlotTypesRequest {}
/**
 * @public
 *
 * The output of {@link GetSlotTypesCommand}.
 */
export interface GetSlotTypesCommandOutput extends GetSlotTypesResponse, __MetadataBearer {}

/**
 * Returns slot type information as follows:
 *
 * - If you specify the `nameContains` field, returns the `$LATEST` version of all slot types that contain the specified string.
 * - If you don't specify the `nameContains` field, returns information about the `$LATEST` version of all slot types.
 *
 * The operation requires permission for the `lex:GetSlotTypes` action.
 *
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, GetSlotTypesCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, GetSlotTypesCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * // import type { LexModelBuildingServiceClientConfig } from "@aws-sdk/client-lex-model-building-service";
 * const config = {}; // type is LexModelBuildingServiceClientConfig
 * const client = new LexModelBuildingServiceClient(config);
 * const input = { // GetSlotTypesRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nameContains: "STRING_VALUE",
 * };
 * const command = new GetSlotTypesCommand(input);
 * const response = await client.send(command);
 * // { // GetSlotTypesResponse
 * //   slotTypes: [ // SlotTypeMetadataList
 * //     { // SlotTypeMetadata
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       lastUpdatedDate: new Date("TIMESTAMP"),
 * //       createdDate: new Date("TIMESTAMP"),
 * //       version: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetSlotTypesCommandInput - {@link GetSlotTypesCommandInput}
 * @returns {@link GetSlotTypesCommandOutput}
 * @see {@link GetSlotTypesCommandInput} for command's `input` shape.
 * @see {@link GetSlotTypesCommandOutput} for command's `response` shape.
 * @see {@link LexModelBuildingServiceClientResolvedConfig | config} for LexModelBuildingServiceClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and try again.
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
 * @throws {@link LexModelBuildingServiceServiceException}
 *
 * Base exception class for all service exceptions from LexModelBuildingService service.
 *
 * @example To get a list of slot types
 * ```javascript
 * // This example shows how to get a list of all of the slot types in your account.
 * const input = {
 *   maxResults: 10,
 *   nextToken: ""
 * };
 * const command = new GetSlotTypesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   slotTypes: [
 *     {
 *       createdDate: 1.494359274403E9,
 *       description: "Available crust types",
 *       lastUpdatedDate: 1.494359274403E9,
 *       name: "DocPizzaCrustType",
 *       version: "$LATEST"
 *     },
 *     {
 *       createdDate: 1.49435644223E9,
 *       description: "Available pizza sauces",
 *       lastUpdatedDate: 1.49435644223E9,
 *       name: "DocPizzaSauceType",
 *       version: "$LATEST"
 *     },
 *     {
 *       createdDate: 1.494359198656E9,
 *       description: "Available pizzas",
 *       lastUpdatedDate: 1.494359198656E9,
 *       name: "DocPizzaType",
 *       version: "$LATEST"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetSlotTypesCommand extends command<GetSlotTypesCommandInput, GetSlotTypesCommandOutput>(
  _ep0,
  _mw0,
  "GetSlotTypes",
  GetSlotTypes$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSlotTypesRequest;
      output: GetSlotTypesResponse;
    };
    sdk: {
      input: GetSlotTypesCommandInput;
      output: GetSlotTypesCommandOutput;
    };
  };
}
