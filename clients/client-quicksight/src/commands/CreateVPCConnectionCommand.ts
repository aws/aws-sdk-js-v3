// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateVPCConnectionRequest, CreateVPCConnectionResponse } from "../models/models_3";
import type { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { CreateVPCConnection$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateVPCConnectionCommand}.
 */
export interface CreateVPCConnectionCommandInput extends CreateVPCConnectionRequest {}
/**
 * @public
 *
 * The output of {@link CreateVPCConnectionCommand}.
 */
export interface CreateVPCConnectionCommandOutput extends CreateVPCConnectionResponse, __MetadataBearer {}

/**
 * <p>Creates a new VPC connection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, CreateVPCConnectionCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, CreateVPCConnectionCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // CreateVPCConnectionRequest
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
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateVPCConnectionCommand(input);
 * const response = await client.send(command);
 * // { // CreateVPCConnectionResponse
 * //   Arn: "STRING_VALUE",
 * //   VPCConnectionId: "STRING_VALUE",
 * //   CreationStatus: "CREATION_IN_PROGRESS" || "CREATION_SUCCESSFUL" || "CREATION_FAILED" || "UPDATE_IN_PROGRESS" || "UPDATE_SUCCESSFUL" || "UPDATE_FAILED" || "DELETION_IN_PROGRESS" || "DELETION_FAILED" || "DELETED",
 * //   AvailabilityStatus: "AVAILABLE" || "UNAVAILABLE" || "PARTIALLY_AVAILABLE",
 * //   RequestId: "STRING_VALUE",
 * //   Status: Number("int"),
 * // };
 *
 * ```
 *
 * @param CreateVPCConnectionCommandInput - {@link CreateVPCConnectionCommandInput}
 * @returns {@link CreateVPCConnectionCommandOutput}
 * @see {@link CreateVPCConnectionCommandInput} for command's `input` shape.
 * @see {@link CreateVPCConnectionCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon Quick Sight service, that your policies have the
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
 * @throws {@link ResourceExistsException} (client fault)
 *  <p>The resource specified already exists. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link UnsupportedUserEditionException} (client fault)
 *  <p>This error indicates that you are calling an operation on an Amazon Quick Suite
 * 			subscription where the edition doesn't include support for that operation. Amazon
 * 			Quick Suite currently has Standard Edition and Enterprise Edition. Not every operation and
 * 			capability is available in every edition.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class CreateVPCConnectionCommand extends $Command
  .classBuilder<
    CreateVPCConnectionCommandInput,
    CreateVPCConnectionCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "CreateVPCConnection", {})
  .n("QuickSightClient", "CreateVPCConnectionCommand")
  .sc(CreateVPCConnection$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateVPCConnectionRequest;
      output: CreateVPCConnectionResponse;
    };
    sdk: {
      input: CreateVPCConnectionCommandInput;
      output: CreateVPCConnectionCommandOutput;
    };
  };
}
