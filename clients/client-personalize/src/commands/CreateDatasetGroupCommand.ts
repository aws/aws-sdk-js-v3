// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateDatasetGroupRequest, CreateDatasetGroupResponse } from "../models/models_0";
import { CreateDatasetGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateDatasetGroupCommand}.
 */
export interface CreateDatasetGroupCommandInput extends CreateDatasetGroupRequest {}
/**
 * @public
 *
 * The output of {@link CreateDatasetGroupCommand}.
 */
export interface CreateDatasetGroupCommandOutput extends CreateDatasetGroupResponse, __MetadataBearer {}

/**
 * Creates an empty dataset group. A dataset group is a container for Amazon Personalize resources. A dataset group can contain at most three datasets, one for each type of dataset:
 *
 * - Item interactions
 * - Items
 * - Users
 * - Actions
 * - Action interactions
 *
 * A dataset group can be a Domain dataset group, where you specify a domain and use pre-configured resources like recommenders, or a Custom dataset group, where you use custom resources, such as a solution with a solution version, that you deploy with a campaign. If you start with a Domain dataset group, you can still add custom resources such as solutions and solution versions trained with recipes for custom use cases and deployed with campaigns.
 *
 * A dataset group can be in one of the following states:
 *
 * - CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE FAILED
 * - DELETE PENDING
 *
 * To get the status of the dataset group, call [DescribeDatasetGroup](https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetGroup.html). If the status shows as CREATE FAILED, the response includes a `failureReason` key, which describes why the creation failed.
 *
 * > **Note:** You must wait until the `status` of the dataset group is `ACTIVE` before adding a dataset to the group.
 *
 * You can specify an Key Management Service (KMS) key to encrypt the datasets in the group. If you specify a KMS key, you must also include an Identity and Access Management (IAM) role that has permission to access the key.
 *
 * **APIs that require a dataset group ARN in the request**
 *
 * - [CreateDataset](https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html)
 * - [CreateEventTracker](https://docs.aws.amazon.com/personalize/latest/dg/API_CreateEventTracker.html)
 * - [CreateSolution](https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html)
 *
 * **Related APIs**
 *
 * - [ListDatasetGroups](https://docs.aws.amazon.com/personalize/latest/dg/API_ListDatasetGroups.html)
 * - [DescribeDatasetGroup](https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetGroup.html)
 * - [DeleteDatasetGroup](https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteDatasetGroup.html)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeClient, CreateDatasetGroupCommand } from "@aws-sdk/client-personalize"; // ES Modules import
 * // const { PersonalizeClient, CreateDatasetGroupCommand } = require("@aws-sdk/client-personalize"); // CommonJS import
 * // import type { PersonalizeClientConfig } from "@aws-sdk/client-personalize";
 * const config = {}; // type is PersonalizeClientConfig
 * const client = new PersonalizeClient(config);
 * const input = { // CreateDatasetGroupRequest
 *   name: "STRING_VALUE", // required
 *   roleArn: "STRING_VALUE",
 *   kmsKeyArn: "STRING_VALUE",
 *   domain: "ECOMMERCE" || "VIDEO_ON_DEMAND",
 *   tags: [ // Tags
 *     { // Tag
 *       tagKey: "STRING_VALUE", // required
 *       tagValue: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateDatasetGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateDatasetGroupResponse
 * //   datasetGroupArn: "STRING_VALUE",
 * //   domain: "ECOMMERCE" || "VIDEO_ON_DEMAND",
 * // };
 *
 * ```
 *
 * @param CreateDatasetGroupCommandInput - {@link CreateDatasetGroupCommandInput}
 * @returns {@link CreateDatasetGroupCommandOutput}
 * @see {@link CreateDatasetGroupCommandInput} for command's `input` shape.
 * @see {@link CreateDatasetGroupCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeClientResolvedConfig | config} for PersonalizeClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * Provide a valid value for the field or parameter.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The limit on the number of requests per second has been exceeded.
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *
 * The specified resource already exists.
 *
 * @throws {@link TooManyTagsException} (client fault)
 *
 * You have exceeded the maximum number of tags you can apply to this resource.
 *
 * @throws {@link PersonalizeServiceException}
 *
 * Base exception class for all service exceptions from Personalize service.
 *
 * @public
 */
export class CreateDatasetGroupCommand extends command<CreateDatasetGroupCommandInput, CreateDatasetGroupCommandOutput>(
  _ep0,
  _mw0,
  "CreateDatasetGroup",
  CreateDatasetGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateDatasetGroupRequest;
      output: CreateDatasetGroupResponse;
    };
    sdk: {
      input: CreateDatasetGroupCommandInput;
      output: CreateDatasetGroupCommandOutput;
    };
  };
}
