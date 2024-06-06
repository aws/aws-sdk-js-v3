// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { FinspaceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceClient";
import { GetKxScalingGroupRequest, GetKxScalingGroupResponse } from "../models/models_0";
import { de_GetKxScalingGroupCommand, se_GetKxScalingGroupCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetKxScalingGroupCommand}.
 */
export interface GetKxScalingGroupCommandInput extends GetKxScalingGroupRequest {}
/**
 * @public
 *
 * The output of {@link GetKxScalingGroupCommand}.
 */
export interface GetKxScalingGroupCommandOutput extends GetKxScalingGroupResponse, __MetadataBearer {}

/**
 * <p>
 * Retrieves details of a scaling group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceClient, GetKxScalingGroupCommand } from "@aws-sdk/client-finspace"; // ES Modules import
 * // const { FinspaceClient, GetKxScalingGroupCommand } = require("@aws-sdk/client-finspace"); // CommonJS import
 * const client = new FinspaceClient(config);
 * const input = { // GetKxScalingGroupRequest
 *   environmentId: "STRING_VALUE", // required
 *   scalingGroupName: "STRING_VALUE", // required
 * };
 * const command = new GetKxScalingGroupCommand(input);
 * const response = await client.send(command);
 * // { // GetKxScalingGroupResponse
 * //   scalingGroupName: "STRING_VALUE",
 * //   scalingGroupArn: "STRING_VALUE",
 * //   hostType: "STRING_VALUE",
 * //   clusters: [ // KxClusterNameList
 * //     "STRING_VALUE",
 * //   ],
 * //   availabilityZoneId: "STRING_VALUE",
 * //   status: "CREATING" || "CREATE_FAILED" || "ACTIVE" || "DELETING" || "DELETED" || "DELETE_FAILED",
 * //   statusReason: "STRING_VALUE",
 * //   lastModifiedTimestamp: new Date("TIMESTAMP"),
 * //   createdTimestamp: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetKxScalingGroupCommandInput - {@link GetKxScalingGroupCommandInput}
 * @returns {@link GetKxScalingGroupCommandOutput}
 * @see {@link GetKxScalingGroupCommandInput} for command's `input` shape.
 * @see {@link GetKxScalingGroupCommandOutput} for command's `response` shape.
 * @see {@link FinspaceClientResolvedConfig | config} for FinspaceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There was a conflict with this action, and it could not be completed.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *          failure.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A service limit or quota is exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link FinspaceServiceException}
 * <p>Base exception class for all service exceptions from Finspace service.</p>
 *
 * @public
 */
export class GetKxScalingGroupCommand extends $Command
  .classBuilder<
    GetKxScalingGroupCommandInput,
    GetKxScalingGroupCommandOutput,
    FinspaceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: FinspaceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSHabaneroManagementService", "GetKxScalingGroup", {})
  .n("FinspaceClient", "GetKxScalingGroupCommand")
  .f(void 0, void 0)
  .ser(se_GetKxScalingGroupCommand)
  .de(de_GetKxScalingGroupCommand)
  .build() {}
