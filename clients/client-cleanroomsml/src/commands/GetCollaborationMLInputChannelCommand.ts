// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsMLClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsMLClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetCollaborationMLInputChannelRequest, GetCollaborationMLInputChannelResponse } from "../models/models_0";
import {
  de_GetCollaborationMLInputChannelCommand,
  se_GetCollaborationMLInputChannelCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCollaborationMLInputChannelCommand}.
 */
export interface GetCollaborationMLInputChannelCommandInput extends GetCollaborationMLInputChannelRequest {}
/**
 * @public
 *
 * The output of {@link GetCollaborationMLInputChannelCommand}.
 */
export interface GetCollaborationMLInputChannelCommandOutput
  extends GetCollaborationMLInputChannelResponse,
    __MetadataBearer {}

/**
 * <p>Returns information about a specific ML input channel in a collaboration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsMLClient, GetCollaborationMLInputChannelCommand } from "@aws-sdk/client-cleanroomsml"; // ES Modules import
 * // const { CleanRoomsMLClient, GetCollaborationMLInputChannelCommand } = require("@aws-sdk/client-cleanroomsml"); // CommonJS import
 * const client = new CleanRoomsMLClient(config);
 * const input = { // GetCollaborationMLInputChannelRequest
 *   mlInputChannelArn: "STRING_VALUE", // required
 *   collaborationIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetCollaborationMLInputChannelCommand(input);
 * const response = await client.send(command);
 * // { // GetCollaborationMLInputChannelResponse
 * //   membershipIdentifier: "STRING_VALUE", // required
 * //   collaborationIdentifier: "STRING_VALUE", // required
 * //   mlInputChannelArn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   configuredModelAlgorithmAssociations: [ // ConfiguredModelAlgorithmAssociationArnList // required
 * //     "STRING_VALUE",
 * //   ],
 * //   status: "CREATE_PENDING" || "CREATE_IN_PROGRESS" || "CREATE_FAILED" || "ACTIVE" || "DELETE_PENDING" || "DELETE_IN_PROGRESS" || "DELETE_FAILED" || "INACTIVE", // required
 * //   statusDetails: { // StatusDetails
 * //     statusCode: "STRING_VALUE",
 * //     message: "STRING_VALUE",
 * //   },
 * //   retentionInDays: Number("int"), // required
 * //   numberOfRecords: Number("long"),
 * //   description: "STRING_VALUE",
 * //   createTime: new Date("TIMESTAMP"), // required
 * //   updateTime: new Date("TIMESTAMP"), // required
 * //   creatorAccountId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetCollaborationMLInputChannelCommandInput - {@link GetCollaborationMLInputChannelCommandInput}
 * @returns {@link GetCollaborationMLInputChannelCommandOutput}
 * @see {@link GetCollaborationMLInputChannelCommandInput} for command's `input` shape.
 * @see {@link GetCollaborationMLInputChannelCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsMLClientResolvedConfig | config} for CleanRoomsMLClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource you are requesting does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request parameters for this request are incorrect.</p>
 *
 * @throws {@link CleanRoomsMLServiceException}
 * <p>Base exception class for all service exceptions from CleanRoomsML service.</p>
 *
 *
 * @public
 */
export class GetCollaborationMLInputChannelCommand extends $Command
  .classBuilder<
    GetCollaborationMLInputChannelCommandInput,
    GetCollaborationMLInputChannelCommandOutput,
    CleanRoomsMLClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsMLClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSStarkControlService", "GetCollaborationMLInputChannel", {})
  .n("CleanRoomsMLClient", "GetCollaborationMLInputChannelCommand")
  .f(void 0, void 0)
  .ser(se_GetCollaborationMLInputChannelCommand)
  .de(de_GetCollaborationMLInputChannelCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCollaborationMLInputChannelRequest;
      output: GetCollaborationMLInputChannelResponse;
    };
    sdk: {
      input: GetCollaborationMLInputChannelCommandInput;
      output: GetCollaborationMLInputChannelCommandOutput;
    };
  };
}
