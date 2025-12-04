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
import type { GetBotChannelAssociationRequest, GetBotChannelAssociationResponse } from "../models/models_0";
import { GetBotChannelAssociation } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetBotChannelAssociationCommand}.
 */
export interface GetBotChannelAssociationCommandInput extends GetBotChannelAssociationRequest {}
/**
 * @public
 *
 * The output of {@link GetBotChannelAssociationCommand}.
 */
export interface GetBotChannelAssociationCommandOutput extends GetBotChannelAssociationResponse, __MetadataBearer {}

/**
 * <p>Returns information about the association between an Amazon Lex bot and
 *       a messaging platform.</p>
 *          <p>This operation requires permissions for the
 *         <code>lex:GetBotChannelAssociation</code> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelBuildingServiceClient, GetBotChannelAssociationCommand } from "@aws-sdk/client-lex-model-building-service"; // ES Modules import
 * // const { LexModelBuildingServiceClient, GetBotChannelAssociationCommand } = require("@aws-sdk/client-lex-model-building-service"); // CommonJS import
 * // import type { LexModelBuildingServiceClientConfig } from "@aws-sdk/client-lex-model-building-service";
 * const config = {}; // type is LexModelBuildingServiceClientConfig
 * const client = new LexModelBuildingServiceClient(config);
 * const input = { // GetBotChannelAssociationRequest
 *   name: "STRING_VALUE", // required
 *   botName: "STRING_VALUE", // required
 *   botAlias: "STRING_VALUE", // required
 * };
 * const command = new GetBotChannelAssociationCommand(input);
 * const response = await client.send(command);
 * // { // GetBotChannelAssociationResponse
 * //   name: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   botAlias: "STRING_VALUE",
 * //   botName: "STRING_VALUE",
 * //   createdDate: new Date("TIMESTAMP"),
 * //   type: "Facebook" || "Slack" || "Twilio-Sms" || "Kik",
 * //   botConfiguration: { // ChannelConfigurationMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   status: "IN_PROGRESS" || "CREATED" || "FAILED",
 * //   failureReason: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetBotChannelAssociationCommandInput - {@link GetBotChannelAssociationCommandInput}
 * @returns {@link GetBotChannelAssociationCommandOutput}
 * @see {@link GetBotChannelAssociationCommandInput} for command's `input` shape.
 * @see {@link GetBotChannelAssociationCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetBotChannelAssociationCommand extends $Command
  .classBuilder<
    GetBotChannelAssociationCommandInput,
    GetBotChannelAssociationCommandOutput,
    LexModelBuildingServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelBuildingServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSDeepSenseModelBuildingService", "GetBotChannelAssociation", {})
  .n("LexModelBuildingServiceClient", "GetBotChannelAssociationCommand")
  .sc(GetBotChannelAssociation)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBotChannelAssociationRequest;
      output: GetBotChannelAssociationResponse;
    };
    sdk: {
      input: GetBotChannelAssociationCommandInput;
      output: GetBotChannelAssociationCommandOutput;
    };
  };
}
