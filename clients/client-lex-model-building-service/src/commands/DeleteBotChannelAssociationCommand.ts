// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteBotChannelAssociationRequest } from "../models/models_0";
import { DeleteBotChannelAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes the association between an Amazon Lex bot and a messaging platform.
 *
 * This operation requires permission for the `lex:DeleteBotChannelAssociation` action.
 *
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
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
 * @throws {@link LexModelBuildingServiceServiceException}
 *
 * Base exception class for all service exceptions from LexModelBuildingService service.
 *
 * @public
 */
export class DeleteBotChannelAssociationCommand extends command<DeleteBotChannelAssociationCommandInput, DeleteBotChannelAssociationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteBotChannelAssociation",
  DeleteBotChannelAssociation$
) {
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
