// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateVPCConnectionRequest, UpdateVPCConnectionResponse } from "../models/models_5";
import { UpdateVPCConnection$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Updates a VPC connection.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, UpdateVPCConnectionCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, UpdateVPCConnectionCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
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
 *
 * You don't have access to this item. The provided credentials couldn't be validated. You might not be authorized to carry out the request. Make sure that your account is authorized to use the Amazon Quick Sight service, that your policies have the correct permissions, and that you are using the correct credentials.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Updating or deleting a resource can cause an inconsistent state.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An internal failure occurred.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One or more parameters has a value that isn't valid.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * A limit is exceeded.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * One or more resources can't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Access is throttled.
 *
 * @throws {@link UnsupportedUserEditionException} (client fault)
 *
 * This error indicates that you are calling an operation on an Amazon Quick Suite subscription where the edition doesn't include support for that operation. Amazon Quick Suite currently has Standard Edition and Enterprise Edition. Not every operation and capability is available in every edition.
 *
 * @throws {@link QuickSightServiceException}
 *
 * Base exception class for all service exceptions from QuickSight service.
 *
 * @public
 */
export class UpdateVPCConnectionCommand extends command<UpdateVPCConnectionCommandInput, UpdateVPCConnectionCommandOutput>(
  _ep0,
  _mw0,
  "UpdateVPCConnection",
  UpdateVPCConnection$
) {
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
