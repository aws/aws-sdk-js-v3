// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { FinspaceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceClient";
import type { CreateKxScalingGroupRequest, CreateKxScalingGroupResponse } from "../models/models_0";
import { CreateKxScalingGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateKxScalingGroupCommand}.
 */
export interface CreateKxScalingGroupCommandInput extends CreateKxScalingGroupRequest {}
/**
 * @public
 *
 * The output of {@link CreateKxScalingGroupCommand}.
 */
export interface CreateKxScalingGroupCommandOutput extends CreateKxScalingGroupResponse, __MetadataBearer {}

/**
 * <p>Creates a new scaling group. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceClient, CreateKxScalingGroupCommand } from "@aws-sdk/client-finspace"; // ES Modules import
 * // const { FinspaceClient, CreateKxScalingGroupCommand } = require("@aws-sdk/client-finspace"); // CommonJS import
 * // import type { FinspaceClientConfig } from "@aws-sdk/client-finspace";
 * const config = {}; // type is FinspaceClientConfig
 * const client = new FinspaceClient(config);
 * const input = { // CreateKxScalingGroupRequest
 *   clientToken: "STRING_VALUE", // required
 *   environmentId: "STRING_VALUE", // required
 *   scalingGroupName: "STRING_VALUE", // required
 *   hostType: "STRING_VALUE", // required
 *   availabilityZoneId: "STRING_VALUE", // required
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateKxScalingGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateKxScalingGroupResponse
 * //   environmentId: "STRING_VALUE",
 * //   scalingGroupName: "STRING_VALUE",
 * //   hostType: "STRING_VALUE",
 * //   availabilityZoneId: "STRING_VALUE",
 * //   status: "CREATING" || "CREATE_FAILED" || "ACTIVE" || "DELETING" || "DELETED" || "DELETE_FAILED",
 * //   lastModifiedTimestamp: new Date("TIMESTAMP"),
 * //   createdTimestamp: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CreateKxScalingGroupCommandInput - {@link CreateKxScalingGroupCommandInput}
 * @returns {@link CreateKxScalingGroupCommandOutput}
 * @see {@link CreateKxScalingGroupCommandInput} for command's `input` shape.
 * @see {@link CreateKxScalingGroupCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class CreateKxScalingGroupCommand extends $Command
  .classBuilder<
    CreateKxScalingGroupCommandInput,
    CreateKxScalingGroupCommandOutput,
    FinspaceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: FinspaceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSHabaneroManagementService", "CreateKxScalingGroup", {})
  .n("FinspaceClient", "CreateKxScalingGroupCommand")
  .sc(CreateKxScalingGroup$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateKxScalingGroupRequest;
      output: CreateKxScalingGroupResponse;
    };
    sdk: {
      input: CreateKxScalingGroupCommandInput;
      output: CreateKxScalingGroupCommandOutput;
    };
  };
}
