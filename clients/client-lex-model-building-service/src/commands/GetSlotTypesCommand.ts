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
import { GetSlotTypesRequest, GetSlotTypesResponse } from "../models/models_0";
import { de_GetSlotTypesCommand, se_GetSlotTypesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Returns slot type information as follows: </p>
 *          <ul>
 *             <li>
 *                <p>If you specify the <code>nameContains</code> field, returns the
 *             <code>$LATEST</code> version of all slot types that contain the
 *           specified string.</p>
 *             </li>
 *             <li>
 *                <p> If you don't specify the <code>nameContains</code> field,
 *           returns information about the <code>$LATEST</code> version of all slot
 *           types. </p>
 *             </li>
 *          </ul>
 *          <p> The operation requires permission for the
 *         <code>lex:GetSlotTypes</code> action. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, GetSlotTypesCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, GetSlotTypesCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
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
export class GetSlotTypesCommand extends $Command
  .classBuilder<
    GetSlotTypesCommandInput,
    GetSlotTypesCommandOutput,
    LexModelBuildingServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelBuildingServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSDeepSenseModelBuildingService", "GetSlotTypes", {})
  .n("LexModelBuildingServiceClient", "GetSlotTypesCommand")
  .f(void 0, void 0)
  .ser(se_GetSlotTypesCommand)
  .de(de_GetSlotTypesCommand)
  .build() {
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
