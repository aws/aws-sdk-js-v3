// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetResourceCollectionRequest, GetResourceCollectionResponse } from "../models/models_0";
import { GetResourceCollection$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns lists Amazon Web Services resources that are of the specified resource collection type. The two types of Amazon Web Services resource collections supported are Amazon Web Services CloudFormation stacks and Amazon Web Services resources that contain the same Amazon Web Services tag. DevOps Guru can be configured to analyze the Amazon Web Services resources that are defined in the stacks or that are tagged using the same tag *key*. You can specify up to 500 Amazon Web Services CloudFormation stacks.
 *
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
 *
 * You don't have permissions to perform the requested operation. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see [Access Management](https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html) in the *IAM User Guide*.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal failure in an Amazon service occurred.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * A requested resource could not be found
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to a request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Contains information about data passed in to a field during a request that is not valid.
 *
 * @throws {@link DevOpsGuruServiceException}
 *
 * Base exception class for all service exceptions from DevOpsGuru service.
 *
 * @public
 */
export class GetResourceCollectionCommand extends command<GetResourceCollectionCommandInput, GetResourceCollectionCommandOutput>(
  _ep0,
  _mw0,
  "GetResourceCollection",
  GetResourceCollection$
) {
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
