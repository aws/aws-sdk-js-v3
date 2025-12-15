// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateCollaborationChangeRequestInput, CreateCollaborationChangeRequestOutput } from "../models/models_0";
import { CreateCollaborationChangeRequest$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateCollaborationChangeRequestCommand}.
 */
export interface CreateCollaborationChangeRequestCommandInput extends CreateCollaborationChangeRequestInput {}
/**
 * @public
 *
 * The output of {@link CreateCollaborationChangeRequestCommand}.
 */
export interface CreateCollaborationChangeRequestCommandOutput
  extends CreateCollaborationChangeRequestOutput,
    __MetadataBearer {}

/**
 * <p>Creates a new change request to modify an existing collaboration. This enables post-creation modifications to collaborations through a structured API-driven approach.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, CreateCollaborationChangeRequestCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, CreateCollaborationChangeRequestCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // CreateCollaborationChangeRequestInput
 *   collaborationIdentifier: "STRING_VALUE", // required
 *   changes: [ // ChangeInputList // required
 *     { // ChangeInput
 *       specificationType: "MEMBER", // required
 *       specification: { // ChangeSpecification Union: only one key present
 *         member: { // MemberChangeSpecification
 *           accountId: "STRING_VALUE", // required
 *           memberAbilities: [ // MemberAbilities // required
 *             "CAN_QUERY" || "CAN_RECEIVE_RESULTS" || "CAN_RUN_JOB",
 *           ],
 *           displayName: "STRING_VALUE",
 *         },
 *       },
 *     },
 *   ],
 * };
 * const command = new CreateCollaborationChangeRequestCommand(input);
 * const response = await client.send(command);
 * // { // CreateCollaborationChangeRequestOutput
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
 * @param CreateCollaborationChangeRequestCommandInput - {@link CreateCollaborationChangeRequestCommandInput}
 * @returns {@link CreateCollaborationChangeRequestCommandOutput}
 * @see {@link CreateCollaborationChangeRequestCommandInput} for command's `input` shape.
 * @see {@link CreateCollaborationChangeRequestCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Caller does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Request denied because service quota has been exceeded.</p>
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
export class CreateCollaborationChangeRequestCommand extends $Command
  .classBuilder<
    CreateCollaborationChangeRequestCommandInput,
    CreateCollaborationChangeRequestCommandOutput,
    CleanRoomsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CleanRoomsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBastionControlPlaneServiceLambda", "CreateCollaborationChangeRequest", {})
  .n("CleanRoomsClient", "CreateCollaborationChangeRequestCommand")
  .sc(CreateCollaborationChangeRequest$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCollaborationChangeRequestInput;
      output: CreateCollaborationChangeRequestOutput;
    };
    sdk: {
      input: CreateCollaborationChangeRequestCommandInput;
      output: CreateCollaborationChangeRequestCommandOutput;
    };
  };
}
