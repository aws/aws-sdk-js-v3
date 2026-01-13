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
import type { DeleteBotAliasRequest } from "../models/models_0";
import { DeleteBotAlias$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteBotAliasCommand}.
 */
export interface DeleteBotAliasCommandInput extends DeleteBotAliasRequest {}
/**
 * @public
 *
 * The output of {@link DeleteBotAliasCommand}.
 */
export interface DeleteBotAliasCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes an alias for the specified bot. </p>
 *          <p>You can't delete an alias that is used in the association between a
 *       bot and a messaging channel. If an alias is used in a channel association,
 *       the <code>DeleteBot</code> operation returns a
 *         <code>ResourceInUseException</code> exception that includes a reference
 *       to the channel association that refers to the bot. You can remove the
 *       reference to the alias by deleting the channel association. If you get the
 *       same exception again, delete the referring association until the
 *         <code>DeleteBotAlias</code> operation is successful.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, DeleteBotAliasCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, DeleteBotAliasCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * // import type { LexModelBuildingServiceClientConfig } from "@aws-sdk/client-lex-model-building-service";
 * const config = {}; // type is LexModelBuildingServiceClientConfig
 * const client = new LexModelBuildingServiceClient(config);
 * const input = { // DeleteBotAliasRequest
 *   name: "STRING_VALUE", // required
 *   botName: "STRING_VALUE", // required
 * };
 * const command = new DeleteBotAliasCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteBotAliasCommandInput - {@link DeleteBotAliasCommandInput}
 * @returns {@link DeleteBotAliasCommandOutput}
 * @see {@link DeleteBotAliasCommandInput} for command's `input` shape.
 * @see {@link DeleteBotAliasCommandOutput} for command's `response` shape.
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
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource specified in the request was not found. Check the
 *       resource and try again.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>The resource that you are attempting to delete is referred to by
 *       another resource. Use this information to remove references to the
 *       resource that you are trying to delete.</p>
 *          <p>The body of the exception contains a JSON object that describes the
 *       resource.</p>
 *          <p>
 *             <code>{ "resourceType": BOT | BOTALIAS | BOTCHANNEL |
 *         INTENT,</code>
 *          </p>
 *          <p>
 *             <code>"resourceReference": {</code>
 *          </p>
 *          <p>
 *             <code>"name": <i>string</i>, "version":
 *           <i>string</i> } }</code>
 *          </p>
 *
 * @throws {@link LexModelBuildingServiceServiceException}
 * <p>Base exception class for all service exceptions from LexModelBuildingService service.</p>
 *
 *
 * @public
 */
export class DeleteBotAliasCommand extends $Command
  .classBuilder<
    DeleteBotAliasCommandInput,
    DeleteBotAliasCommandOutput,
    LexModelBuildingServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelBuildingServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSDeepSenseModelBuildingService", "DeleteBotAlias", {})
  .n("LexModelBuildingServiceClient", "DeleteBotAliasCommand")
  .sc(DeleteBotAlias$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteBotAliasRequest;
      output: {};
    };
    sdk: {
      input: DeleteBotAliasCommandInput;
      output: DeleteBotAliasCommandOutput;
    };
  };
}
