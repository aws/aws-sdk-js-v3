// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DevOpsGuruClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DevOpsGuruClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetResourceCollectionRequest, GetResourceCollectionResponse } from "../models/models_0";
import { GetResourceCollection$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetResourceCollectionCommand}.
 */
export interface GetResourceCollectionCommandInput extends GetResourceCollectionRequest {}
/**
 * @public
 *
 * The output of {@link GetResourceCollectionCommand}.
 */
export interface GetResourceCollectionCommandOutput extends GetResourceCollectionResponse, __MetadataBearer {}

/**
 * <p> Returns lists Amazon Web Services resources that are of the specified resource collection type.
 * 			The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and
 *           Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze
 *       	the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag <i>key</i>. You can specify up to 500 Amazon Web Services CloudFormation stacks. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DevOpsGuruClient, GetResourceCollectionCommand } from "@aws-sdk/client-devops-guru"; // ES Modules import
 * // const { DevOpsGuruClient, GetResourceCollectionCommand } = require("@aws-sdk/client-devops-guru"); // CommonJS import
 * // import type { DevOpsGuruClientConfig } from "@aws-sdk/client-devops-guru";
 * const config = {}; // type is DevOpsGuruClientConfig
 * const client = new DevOpsGuruClient(config);
 * const input = { // GetResourceCollectionRequest
 *   ResourceCollectionType: "AWS_CLOUD_FORMATION" || "AWS_SERVICE" || "AWS_TAGS", // required
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new GetResourceCollectionCommand(input);
 * const response = await client.send(command);
 * // { // GetResourceCollectionResponse
 * //   ResourceCollection: { // ResourceCollectionFilter
 * //     CloudFormation: { // CloudFormationCollectionFilter
 * //       StackNames: [ // StackNames
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     Tags: [ // TagCollectionFilters
 * //       { // TagCollectionFilter
 * //         AppBoundaryKey: "STRING_VALUE", // required
 * //         TagValues: [ // TagValues // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //   },
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetResourceCollectionCommandInput - {@link GetResourceCollectionCommandInput}
 * @returns {@link GetResourceCollectionCommandOutput}
 * @see {@link GetResourceCollectionCommandInput} for command's `input` shape.
 * @see {@link GetResourceCollectionCommandOutput} for command's `response` shape.
 * @see {@link DevOpsGuruClientResolvedConfig | config} for DevOpsGuruClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You don't have permissions to perform the requested operation. The user or role that
 * 			is making the request must have at least one IAM permissions policy attached that grants
 * 			the required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access Management</a> in the
 * 				<i>IAM User Guide</i>. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal failure in an Amazon service occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A requested resource could not be found</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to a request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> Contains information about data passed in to a field during a request that is not
 * 			valid. </p>
 *
 * @throws {@link DevOpsGuruServiceException}
 * <p>Base exception class for all service exceptions from DevOpsGuru service.</p>
 *
 *
 * @public
 */
export class GetResourceCollectionCommand extends $Command
  .classBuilder<
    GetResourceCollectionCommandInput,
    GetResourceCollectionCommandOutput,
    DevOpsGuruClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DevOpsGuruClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CapstoneControlPlaneService", "GetResourceCollection", {})
  .n("DevOpsGuruClient", "GetResourceCollectionCommand")
  .sc(GetResourceCollection$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetResourceCollectionRequest;
      output: GetResourceCollectionResponse;
    };
    sdk: {
      input: GetResourceCollectionCommandInput;
      output: GetResourceCollectionCommandOutput;
    };
  };
}
