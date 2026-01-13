// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateDatasetGroupRequest, CreateDatasetGroupResponse } from "../models/models_0";
import type { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { CreateDatasetGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates an empty dataset group. A dataset group is a container for
 *       Amazon Personalize resources. A dataset group can contain at most three datasets, one
 *       for each type of dataset:</p>
 *          <ul>
 *             <li>
 *                <p>Item interactions</p>
 *             </li>
 *             <li>
 *                <p>Items</p>
 *             </li>
 *             <li>
 *                <p>Users</p>
 *             </li>
 *             <li>
 *                <p>Actions</p>
 *             </li>
 *             <li>
 *                <p>Action interactions</p>
 *             </li>
 *          </ul>
 *          <p> A dataset group can be a Domain dataset group, where you specify a
 *       domain and use pre-configured resources like recommenders, or a
 *       Custom dataset group, where you use custom resources, such as a solution
 *       with a solution version, that you deploy with a campaign. If you start
 *       with a Domain dataset group, you can still add custom resources such as
 *       solutions and solution versions trained with recipes for custom use cases
 *       and deployed with campaigns. </p>
 *          <p>A dataset group can be in one of the following states:</p>
 *          <ul>
 *             <li>
 *                <p>CREATE PENDING > CREATE IN_PROGRESS > ACTIVE -or- CREATE
 *           FAILED</p>
 *             </li>
 *             <li>
 *                <p>DELETE PENDING</p>
 *             </li>
 *          </ul>
 *          <p>To get the status of the dataset group, call <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a>. If the status shows as CREATE FAILED, the
 *       response includes a <code>failureReason</code> key, which describes why
 *       the creation failed.</p>
 *          <note>
 *             <p>You must wait until the <code>status</code> of the dataset group is
 *           <code>ACTIVE</code> before adding a dataset to the group.</p>
 *          </note>
 *          <p>You can specify an Key Management Service (KMS) key to encrypt the datasets in
 *       the group. If you specify a KMS key, you must also include an Identity and Access Management
 *       (IAM) role that has permission to access the key.</p>
 *          <p class="title">
 *             <b>APIs that require a dataset group ARN in the request</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html">CreateDataset</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateEventTracker.html">CreateEventTracker</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html">CreateSolution</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p class="title">
 *             <b>Related APIs</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_ListDatasetGroups.html">ListDatasetGroups</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteDatasetGroup.html">DeleteDatasetGroup</a>
 *                </p>
 *             </li>
 *          </ul>
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
 *  <p>Provide a valid value for the field or parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The limit on the number of requests per second has been exceeded.</p>
 *
 * @throws {@link ResourceAlreadyExistsException} (client fault)
 *  <p>The specified resource already exists.</p>
 *
 * @throws {@link TooManyTagsException} (client fault)
 *  <p>You have exceeded the maximum number of tags you can apply to this resource. </p>
 *
 * @throws {@link PersonalizeServiceException}
 * <p>Base exception class for all service exceptions from Personalize service.</p>
 *
 *
 * @public
 */
export class CreateDatasetGroupCommand extends $Command
  .classBuilder<
    CreateDatasetGroupCommandInput,
    CreateDatasetGroupCommandOutput,
    PersonalizeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PersonalizeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonPersonalize", "CreateDatasetGroup", {})
  .n("PersonalizeClient", "CreateDatasetGroupCommand")
  .sc(CreateDatasetGroup$)
  .build() {
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
