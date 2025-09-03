// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetCollaborationChangeRequestInput, GetCollaborationChangeRequestOutput } from "../models/models_0";
import {
  de_GetCollaborationChangeRequestCommand,
  se_GetCollaborationChangeRequestCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCollaborationChangeRequestCommand}.
 */
export interface GetCollaborationChangeRequestCommandInput extends GetCollaborationChangeRequestInput {}
/**
 * @public
 *
 * The output of {@link GetCollaborationChangeRequestCommand}.
 */
export interface GetCollaborationChangeRequestCommandOutput
  extends GetCollaborationChangeRequestOutput,
    __MetadataBearer {}

/**
 * <p>Retrieves detailed information about a specific collaboration change request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, GetCollaborationChangeRequestCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, GetCollaborationChangeRequestCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * const client = new CleanRoomsClient(config);
 * const input = { // GetCollaborationChangeRequestInput
 *   collaborationIdentifier: "STRING_VALUE", // required
 *   changeRequestIdentifier: "STRING_VALUE", // required
 * };
 * const command = new GetCollaborationChangeRequestCommand(input);
 * const response = await client.send(command);
 * // { // GetCollaborationChangeRequestOutput
 * //   collaborationChangeRequest: { // CollaborationChangeRequest
 * //     id: "STRING_VALUE", // required
 * //     collaborationId: "STRING_VALUE", // required
 * //     createTime: new Date("TIMESTAMP"), // required
 * //     updateTime: new Date("TIMESTAMP"), // required
 * //     status: "PENDING" || "APPROVED" || "CANCELLED" || "DENIED" || "COMMITTED", // required
 * //     isAutoApproved: true || false, // required
 * //     changes: [ // ChangeList // required
 * //       { // Change
 * //         specificationType: "MEMBER", // required
 * //         specification: { // ChangeSpecification Union: only one key present
 * //           member: { // MemberChangeSpecification
 * //             accountId: "STRING_VALUE", // required
 * //             memberAbilities: [ // MemberAbilities // required
 * //               "CAN_QUERY" || "CAN_RECEIVE_RESULTS" || "CAN_RUN_JOB",
 * //             ],
 * //             displayName: "STRING_VALUE",
 * //           },
 * //         },
 * //         types: [ // ChangeTypeList // required
 * //           "ADD_MEMBER",
 * //         ],
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetCollaborationChangeRequestCommandInput - {@link GetCollaborationChangeRequestCommandInput}
 * @returns {@link GetCollaborationChangeRequestCommandOutput}
 * @see {@link GetCollaborationChangeRequestCommandInput} for command's `input` shape.
 * @see {@link GetCollaborationChangeRequestCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Caller does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the specified constraints.</p>
 *
 * @throws {@link CleanRoomsServiceException}
 * <p>Base exception class for all service exceptions from CleanRooms service.</p>
 *
 *
 * @public
 */
export class GetCollaborationChangeRequestCommand extends $Command
  .classBuilder<
    GetCollaborationChangeRequestCommandInput,
    GetCollaborationChangeRequestCommandOutput,
    CleanRoomsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSBastionControlPlaneServiceLambda", "GetCollaborationChangeRequest", {})
  .n("CleanRoomsClient", "GetCollaborationChangeRequestCommand")
  .f(void 0, void 0)
  .ser(se_GetCollaborationChangeRequestCommand)
  .de(de_GetCollaborationChangeRequestCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCollaborationChangeRequestInput;
      output: GetCollaborationChangeRequestOutput;
    };
    sdk: {
      input: GetCollaborationChangeRequestCommandInput;
      output: GetCollaborationChangeRequestCommandOutput;
    };
  };
}
