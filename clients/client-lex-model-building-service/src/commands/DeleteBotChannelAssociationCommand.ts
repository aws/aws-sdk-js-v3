// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  LexModelBuildingServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LexModelBuildingServiceClient";
import { DeleteBotChannelAssociationRequest } from "../models/models_0";
import { DeleteBotChannelAssociation } from "../schemas/schemas_5_Bot";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteBotChannelAssociationCommand}.
 */
export interface DeleteBotChannelAssociationCommandInput extends DeleteBotChannelAssociationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteBotChannelAssociationCommand}.
 */
export interface DeleteBotChannelAssociationCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the association between an Amazon Lex bot and a messaging
 *       platform.</p>
 *          <p>This operation requires permission for the
 *         <code>lex:DeleteBotChannelAssociation</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, DeleteBotChannelAssociationCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, DeleteBotChannelAssociationCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * // import type { LexModelBuildingServiceClientConfig } from "@aws-sdk/client-lex-model-building-service";
 * const config = {}; // type is LexModelBuildingServiceClientConfig
 * const client = new LexModelBuildingServiceClient(config);
 * const input = { // DeleteBotChannelAssociationRequest
 *   name: "STRING_VALUE", // required
 *   botName: "STRING_VALUE", // required
 *   botAlias: "STRING_VALUE", // required
 * };
 * const command = new DeleteBotChannelAssociationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteBotChannelAssociationCommandInput - {@link DeleteBotChannelAssociationCommandInput}
 * @returns {@link DeleteBotChannelAssociationCommandOutput}
 * @see {@link DeleteBotChannelAssociationCommandInput} for command's `input` shape.
 * @see {@link DeleteBotChannelAssociationCommandOutput} for command's `response` shape.
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
 * @throws {@link LexModelBuildingServiceServiceException}
 * <p>Base exception class for all service exceptions from LexModelBuildingService service.</p>
 *
 *
 * @public
 */
export class DeleteBotChannelAssociationCommand extends $Command
  .classBuilder<
    DeleteBotChannelAssociationCommandInput,
    DeleteBotChannelAssociationCommandOutput,
    LexModelBuildingServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelBuildingServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSDeepSenseModelBuildingService", "DeleteBotChannelAssociation", {})
  .n("LexModelBuildingServiceClient", "DeleteBotChannelAssociationCommand")
  .sc(DeleteBotChannelAssociation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteBotChannelAssociationRequest;
      output: {};
    };
    sdk: {
      input: DeleteBotChannelAssociationCommandInput;
      output: DeleteBotChannelAssociationCommandOutput;
    };
  };
}
