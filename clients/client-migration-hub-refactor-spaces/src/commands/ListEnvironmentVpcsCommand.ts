// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  MigrationHubRefactorSpacesClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MigrationHubRefactorSpacesClient";
import { ListEnvironmentVpcsRequest, ListEnvironmentVpcsResponse } from "../models/models_0";
import { de_ListEnvironmentVpcsCommand, se_ListEnvironmentVpcsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEnvironmentVpcsCommand}.
 */
export interface ListEnvironmentVpcsCommandInput extends ListEnvironmentVpcsRequest {}
/**
 * @public
 *
 * The output of {@link ListEnvironmentVpcsCommand}.
 */
export interface ListEnvironmentVpcsCommandOutput extends ListEnvironmentVpcsResponse, __MetadataBearer {}

/**
 * <p>Lists all Amazon Web Services Migration Hub Refactor Spaces service virtual private clouds (VPCs) that are part of the
 *       environment. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubRefactorSpacesClient, ListEnvironmentVpcsCommand } from "@aws-sdk/client-migration-hub-refactor-spaces"; // ES Modules import
 * // const { MigrationHubRefactorSpacesClient, ListEnvironmentVpcsCommand } = require("@aws-sdk/client-migration-hub-refactor-spaces"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new MigrationHubRefactorSpacesClient(config);
 * const input = { // ListEnvironmentVpcsRequest
 *   EnvironmentIdentifier: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListEnvironmentVpcsCommand(input);
 * const response = await client.send(command);
 * // { // ListEnvironmentVpcsResponse
 * //   EnvironmentVpcList: [ // EnvironmentVpcs
 * //     { // EnvironmentVpc
 * //       EnvironmentId: "STRING_VALUE",
 * //       VpcId: "STRING_VALUE",
 * //       AccountId: "STRING_VALUE",
 * //       CidrBlocks: [ // CidrBlocks
 * //         "STRING_VALUE",
 * //       ],
 * //       VpcName: "STRING_VALUE",
 * //       LastUpdatedTime: new Date("TIMESTAMP"),
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEnvironmentVpcsCommandInput - {@link ListEnvironmentVpcsCommandInput}
 * @returns {@link ListEnvironmentVpcsCommandOutput}
 * @see {@link ListEnvironmentVpcsCommandInput} for command's `input` shape.
 * @see {@link ListEnvironmentVpcsCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubRefactorSpacesClientResolvedConfig | config} for MigrationHubRefactorSpacesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The user does not have sufficient access to perform this action. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied because the request was throttled. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input does not satisfy the constraints specified by an Amazon Web Service.
 *     </p>
 *
 * @throws {@link MigrationHubRefactorSpacesServiceException}
 * <p>Base exception class for all service exceptions from MigrationHubRefactorSpaces service.</p>
 *
 * @public
 */
export class ListEnvironmentVpcsCommand extends $Command
  .classBuilder<
    ListEnvironmentVpcsCommandInput,
    ListEnvironmentVpcsCommandOutput,
    MigrationHubRefactorSpacesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MigrationHubRefactorSpacesClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("RefactorSpaces", "ListEnvironmentVpcs", {})
  .n("MigrationHubRefactorSpacesClient", "ListEnvironmentVpcsCommand")
  .f(void 0, void 0)
  .ser(se_ListEnvironmentVpcsCommand)
  .de(de_ListEnvironmentVpcsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEnvironmentVpcsRequest;
      output: ListEnvironmentVpcsResponse;
    };
    sdk: {
      input: ListEnvironmentVpcsCommandInput;
      output: ListEnvironmentVpcsCommandOutput;
    };
  };
}
