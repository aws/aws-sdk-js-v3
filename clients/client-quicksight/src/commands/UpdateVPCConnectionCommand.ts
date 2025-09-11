// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateVPCConnectionRequest, UpdateVPCConnectionResponse } from "../models/models_5";
import { de_UpdateVPCConnectionCommand, se_UpdateVPCConnectionCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateVPCConnectionCommand}.
 */
export interface UpdateVPCConnectionCommandInput extends UpdateVPCConnectionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateVPCConnectionCommand}.
 */
export interface UpdateVPCConnectionCommandOutput extends UpdateVPCConnectionResponse, __MetadataBearer {}

/**
 * <p>Updates a VPC connection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateVPCConnectionCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateVPCConnectionCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * const client = new QuickSightClient(config);
 * const input = { // UpdateVPCConnectionRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   VPCConnectionId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   SubnetIds: [ // SubnetIdList // required
 *     "STRING_VALUE",
 *   ],
 *   SecurityGroupIds: [ // SecurityGroupIdList // required
 *     "STRING_VALUE",
 *   ],
 *   DnsResolvers: [ // DnsResolverList
 *     "STRING_VALUE",
 *   ],
 *   RoleArn: "STRING_VALUE", // required
 * };
 * const command = new UpdateVPCConnectionCommand(input);
 * const response = await client.send(command);
 * // { // UpdateVPCConnectionResponse
 * //   Arn: "STRING_VALUE",
 * //   VPCConnectionId: "STRING_VALUE",
 * //   UpdateStatus: "CREATION_IN_PROGRESS" || "CREATION_SUCCESSFUL" || "CREATION_FAILED" || "UPDATE_IN_PROGRESS" || "UPDATE_SUCCESSFUL" || "UPDATE_FAILED" || "DELETION_IN_PROGRESS" || "DELETION_FAILED" || "DELETED",
 * //   AvailabilityStatus: "AVAILABLE" || "UNAVAILABLE" || "PARTIALLY_AVAILABLE",
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param UpdateVPCConnectionCommandInput - {@link UpdateVPCConnectionCommandInput}
 * @returns {@link UpdateVPCConnectionCommandOutput}
 * @see {@link UpdateVPCConnectionCommandInput} for command's `input` shape.
 * @see {@link UpdateVPCConnectionCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon QuickSight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting a resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit is exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link UnsupportedUserEditionException} (client fault)
 *  <p>This error indicates that you are calling an operation on an Amazon QuickSight
 * 			subscription where the edition doesn't include support for that operation. Amazon
 * 			QuickSight currently has Standard Edition and Enterprise Edition. Not every operation and
 * 			capability is available in every edition.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class UpdateVPCConnectionCommand extends $Command
  .classBuilder<
    UpdateVPCConnectionCommandInput,
    UpdateVPCConnectionCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("QuickSight_20180401", "UpdateVPCConnection", {})
  .n("QuickSightClient", "UpdateVPCConnectionCommand")
  .f(void 0, void 0)
  .ser(se_UpdateVPCConnectionCommand)
  .de(de_UpdateVPCConnectionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateVPCConnectionRequest;
      output: UpdateVPCConnectionResponse;
    };
    sdk: {
      input: UpdateVPCConnectionCommandInput;
      output: UpdateVPCConnectionCommandOutput;
    };
  };
}
