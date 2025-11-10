// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetSpaceInput, GetSpaceOutput } from "../models/models_0";
import { RepostspaceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RepostspaceClient";
import { GetSpace } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSpaceCommand}.
 */
export interface GetSpaceCommandInput extends GetSpaceInput {}
/**
 * @public
 *
 * The output of {@link GetSpaceCommand}.
 */
export interface GetSpaceCommandOutput extends GetSpaceOutput, __MetadataBearer {}

/**
 * <p>Displays information about the AWS re:Post Private private re:Post.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RepostspaceClient, GetSpaceCommand } from "@aws-sdk/client-repostspace"; // ES Modules import
 * // const { RepostspaceClient, GetSpaceCommand } = require("@aws-sdk/client-repostspace"); // CommonJS import
 * // import type { RepostspaceClientConfig } from "@aws-sdk/client-repostspace";
 * const config = {}; // type is RepostspaceClientConfig
 * const client = new RepostspaceClient(config);
 * const input = { // GetSpaceInput
 *   spaceId: "STRING_VALUE", // required
 * };
 * const command = new GetSpaceCommand(input);
 * const response = await client.send(command);
 * // { // GetSpaceOutput
 * //   spaceId: "STRING_VALUE", // required
 * //   arn: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   status: "STRING_VALUE", // required
 * //   configurationStatus: "CONFIGURED" || "UNCONFIGURED", // required
 * //   clientId: "STRING_VALUE", // required
 * //   identityStoreId: "STRING_VALUE",
 * //   applicationArn: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   vanityDomainStatus: "PENDING" || "APPROVED" || "UNAPPROVED", // required
 * //   vanityDomain: "STRING_VALUE", // required
 * //   randomDomain: "STRING_VALUE", // required
 * //   customerRoleArn: "STRING_VALUE",
 * //   createDateTime: new Date("TIMESTAMP"), // required
 * //   deleteDateTime: new Date("TIMESTAMP"),
 * //   tier: "BASIC" || "STANDARD", // required
 * //   storageLimit: Number("long"), // required
 * //   userAdmins: [ // UserAdmins
 * //     "STRING_VALUE",
 * //   ],
 * //   groupAdmins: [ // GroupAdmins
 * //     "STRING_VALUE",
 * //   ],
 * //   roles: { // Roles
 * //     "<keys>": [ // RoleList
 * //       "EXPERT" || "MODERATOR" || "ADMINISTRATOR" || "SUPPORTREQUESTOR",
 * //     ],
 * //   },
 * //   userKMSKey: "STRING_VALUE",
 * //   userCount: Number("int"),
 * //   contentSize: Number("long"),
 * //   supportedEmailDomains: { // SupportedEmailDomainsStatus
 * //     enabled: "ENABLED" || "DISABLED" || "NOT_ALLOWED",
 * //     allowedDomains: [ // AllowedDomainsList
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSpaceCommandInput - {@link GetSpaceCommandInput}
 * @returns {@link GetSpaceCommandOutput}
 * @see {@link GetSpaceCommandInput} for command's `input` shape.
 * @see {@link GetSpaceCommandOutput} for command's `response` shape.
 * @see {@link RepostspaceClientResolvedConfig | config} for RepostspaceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
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
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link RepostspaceServiceException}
 * <p>Base exception class for all service exceptions from Repostspace service.</p>
 *
 *
 * @public
 */
export class GetSpaceCommand extends $Command
  .classBuilder<
    GetSpaceCommandInput,
    GetSpaceCommandOutput,
    RepostspaceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RepostspaceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RepostSpace", "GetSpace", {})
  .n("RepostspaceClient", "GetSpaceCommand")
  .sc(GetSpace)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSpaceInput;
      output: GetSpaceOutput;
    };
    sdk: {
      input: GetSpaceCommandInput;
      output: GetSpaceCommandOutput;
    };
  };
}
