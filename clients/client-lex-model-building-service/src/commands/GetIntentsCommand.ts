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
import { GetIntentsRequest, GetIntentsResponse } from "../models/models_0";
import { de_GetIntentsCommand, se_GetIntentsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetIntentsCommand}.
 */
export interface GetIntentsCommandInput extends GetIntentsRequest {}
/**
 * @public
 *
 * The output of {@link GetIntentsCommand}.
 */
export interface GetIntentsCommandOutput extends GetIntentsResponse, __MetadataBearer {}

/**
 * <p>Returns intent information as follows: </p>
 *          <ul>
 *             <li>
 *                <p>If you specify the <code>nameContains</code> field, returns the
 *             <code>$LATEST</code> version of all intents that contain the
 *           specified string.</p>
 *             </li>
 *             <li>
 *                <p> If you don't specify the <code>nameContains</code> field,
 *           returns information about the <code>$LATEST</code> version of all
 *           intents. </p>
 *             </li>
 *          </ul>
 *          <p> The operation requires permission for the
 *         <code>lex:GetIntents</code> action. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, GetIntentsCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, GetIntentsCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * const client = new LexModelBuildingServiceClient(config);
 * const input = { // GetIntentsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nameContains: "STRING_VALUE",
 * };
 * const command = new GetIntentsCommand(input);
 * const response = await client.send(command);
 * // { // GetIntentsResponse
 * //   intents: [ // IntentMetadataList
 * //     { // IntentMetadata
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
 * @param GetIntentsCommandInput - {@link GetIntentsCommandInput}
 * @returns {@link GetIntentsCommandOutput}
 * @see {@link GetIntentsCommandInput} for command's `input` shape.
 * @see {@link GetIntentsCommandOutput} for command's `response` shape.
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
 * @public
 * @example To get a list of intents
 * ```javascript
 * // This example shows how to get a list of all of the intents in your account.
 * const input = {
 *   "maxResults": 10,
 *   "nextToken": ""
 * };
 * const command = new GetIntentsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "intents": [
 *     {
 *       "version": "$LATEST",
 *       "name": "DocOrderPizza",
 *       "createdDate": 1494359783.453,
 *       "description": "Order a pizza from a local pizzeria.",
 *       "lastUpdatedDate": 1494359783.453
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-get-a-list-of-intents-1494432416363
 * ```
 *
 */
export class GetIntentsCommand extends $Command
  .classBuilder<
    GetIntentsCommandInput,
    GetIntentsCommandOutput,
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
  .s("AWSDeepSenseModelBuildingService", "GetIntents", {})
  .n("LexModelBuildingServiceClient", "GetIntentsCommand")
  .f(void 0, void 0)
  .ser(se_GetIntentsCommand)
  .de(de_GetIntentsCommand)
  .build() {}
