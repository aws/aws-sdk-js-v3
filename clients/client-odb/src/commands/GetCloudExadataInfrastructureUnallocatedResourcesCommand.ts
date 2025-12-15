// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  GetCloudExadataInfrastructureUnallocatedResourcesInput,
  GetCloudExadataInfrastructureUnallocatedResourcesOutput,
} from "../models/models_0";
import type { OdbClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OdbClient";
import { GetCloudExadataInfrastructureUnallocatedResources$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCloudExadataInfrastructureUnallocatedResourcesCommand}.
 */
export interface GetCloudExadataInfrastructureUnallocatedResourcesCommandInput
  extends GetCloudExadataInfrastructureUnallocatedResourcesInput {}
/**
 * @public
 *
 * The output of {@link GetCloudExadataInfrastructureUnallocatedResourcesCommand}.
 */
export interface GetCloudExadataInfrastructureUnallocatedResourcesCommandOutput
  extends GetCloudExadataInfrastructureUnallocatedResourcesOutput,
    __MetadataBearer {}

/**
 * <p>Retrieves information about unallocated resources in a specified Cloud Exadata Infrastructure.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OdbClient, GetCloudExadataInfrastructureUnallocatedResourcesCommand } from "@aws-sdk/client-odb"; // ES Modules import
 * // const { OdbClient, GetCloudExadataInfrastructureUnallocatedResourcesCommand } = require("@aws-sdk/client-odb"); // CommonJS import
 * // import type { OdbClientConfig } from "@aws-sdk/client-odb";
 * const config = {}; // type is OdbClientConfig
 * const client = new OdbClient(config);
 * const input = { // GetCloudExadataInfrastructureUnallocatedResourcesInput
 *   cloudExadataInfrastructureId: "STRING_VALUE", // required
 *   dbServers: [ // StringList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new GetCloudExadataInfrastructureUnallocatedResourcesCommand(input);
 * const response = await client.send(command);
 * // { // GetCloudExadataInfrastructureUnallocatedResourcesOutput
 * //   cloudExadataInfrastructureUnallocatedResources: { // CloudExadataInfrastructureUnallocatedResources
 * //     cloudAutonomousVmClusters: [ // CloudAutonomousVmClusterResourceDetailsList
 * //       { // CloudAutonomousVmClusterResourceDetails
 * //         cloudAutonomousVmClusterId: "STRING_VALUE",
 * //         unallocatedAdbStorageInTBs: Number("double"),
 * //       },
 * //     ],
 * //     cloudExadataInfrastructureDisplayName: "STRING_VALUE",
 * //     exadataStorageInTBs: Number("double"),
 * //     cloudExadataInfrastructureId: "STRING_VALUE",
 * //     localStorageInGBs: Number("int"),
 * //     memoryInGBs: Number("int"),
 * //     ocpus: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetCloudExadataInfrastructureUnallocatedResourcesCommandInput - {@link GetCloudExadataInfrastructureUnallocatedResourcesCommandInput}
 * @returns {@link GetCloudExadataInfrastructureUnallocatedResourcesCommandOutput}
 * @see {@link GetCloudExadataInfrastructureUnallocatedResourcesCommandInput} for command's `input` shape.
 * @see {@link GetCloudExadataInfrastructureUnallocatedResourcesCommandOutput} for command's `response` shape.
 * @see {@link OdbClientResolvedConfig | config} for OdbClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action. Make sure you have the required permissions and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Occurs when there is an internal failure in the Oracle Database@Amazon Web Services service. Wait and try again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access a resource that doesn't exist. Make sure you provided the correct resource and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation because it is missing required fields or has invalid inputs.</p>
 *
 * @throws {@link OdbServiceException}
 * <p>Base exception class for all service exceptions from Odb service.</p>
 *
 *
 * @public
 */
export class GetCloudExadataInfrastructureUnallocatedResourcesCommand extends $Command
  .classBuilder<
    GetCloudExadataInfrastructureUnallocatedResourcesCommandInput,
    GetCloudExadataInfrastructureUnallocatedResourcesCommandOutput,
    OdbClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OdbClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Odb", "GetCloudExadataInfrastructureUnallocatedResources", {})
  .n("OdbClient", "GetCloudExadataInfrastructureUnallocatedResourcesCommand")
  .sc(GetCloudExadataInfrastructureUnallocatedResources$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCloudExadataInfrastructureUnallocatedResourcesInput;
      output: GetCloudExadataInfrastructureUnallocatedResourcesOutput;
    };
    sdk: {
      input: GetCloudExadataInfrastructureUnallocatedResourcesCommandInput;
      output: GetCloudExadataInfrastructureUnallocatedResourcesCommandOutput;
    };
  };
}
