// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateOpsItemRequest, CreateOpsItemResponse } from "../models/models_0";
import { CreateOpsItem } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateOpsItemCommand}.
 */
export interface CreateOpsItemCommandInput extends CreateOpsItemRequest {}
/**
 * @public
 *
 * The output of {@link CreateOpsItemCommand}.
 */
export interface CreateOpsItemCommandOutput extends CreateOpsItemResponse, __MetadataBearer {}

/**
 * <p>Creates a new OpsItem. You must have permission in Identity and Access Management (IAM) to create a new OpsItem. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-setup.html">Set up OpsCenter</a> in the
 *     <i>Amazon Web Services Systems Manager User Guide</i>.</p>
 *          <p>Operations engineers and IT professionals use Amazon Web Services Systems Manager OpsCenter to view, investigate, and
 *    remediate operational issues impacting the performance and health of their Amazon Web Services resources. For
 *    more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">Amazon Web Services Systems Manager OpsCenter</a> in the
 *     <i>Amazon Web Services Systems Manager User Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, CreateOpsItemCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, CreateOpsItemCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // CreateOpsItemRequest
 *   Description: "STRING_VALUE", // required
 *   OpsItemType: "STRING_VALUE",
 *   OperationalData: { // OpsItemOperationalData
 *     "<keys>": { // OpsItemDataValue
 *       Value: "STRING_VALUE",
 *       Type: "SearchableString" || "String",
 *     },
 *   },
 *   Notifications: [ // OpsItemNotifications
 *     { // OpsItemNotification
 *       Arn: "STRING_VALUE",
 *     },
 *   ],
 *   Priority: Number("int"),
 *   RelatedOpsItems: [ // RelatedOpsItems
 *     { // RelatedOpsItem
 *       OpsItemId: "STRING_VALUE", // required
 *     },
 *   ],
 *   Source: "STRING_VALUE", // required
 *   Title: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   Category: "STRING_VALUE",
 *   Severity: "STRING_VALUE",
 *   ActualStartTime: new Date("TIMESTAMP"),
 *   ActualEndTime: new Date("TIMESTAMP"),
 *   PlannedStartTime: new Date("TIMESTAMP"),
 *   PlannedEndTime: new Date("TIMESTAMP"),
 *   AccountId: "STRING_VALUE",
 * };
 * const command = new CreateOpsItemCommand(input);
 * const response = await client.send(command);
 * // { // CreateOpsItemResponse
 * //   OpsItemId: "STRING_VALUE",
 * //   OpsItemArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateOpsItemCommandInput - {@link CreateOpsItemCommandInput}
 * @returns {@link CreateOpsItemCommandOutput}
 * @see {@link CreateOpsItemCommandInput} for command's `input` shape.
 * @see {@link CreateOpsItemCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link OpsItemAccessDeniedException} (client fault)
 *  <p>You don't have permission to view OpsItems in the specified account. Verify that your account
 *    is configured either as a Systems Manager delegated administrator or that you are logged into the Organizations
 *    management account.</p>
 *
 * @throws {@link OpsItemAlreadyExistsException} (client fault)
 *  <p>The OpsItem already exists.</p>
 *
 * @throws {@link OpsItemInvalidParameterException} (client fault)
 *  <p>A specified parameter argument isn't valid. Verify the available arguments and try
 *    again.</p>
 *
 * @throws {@link OpsItemLimitExceededException} (client fault)
 *  <p>The request caused OpsItems to exceed one or more quotas.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class CreateOpsItemCommand extends $Command
  .classBuilder<
    CreateOpsItemCommandInput,
    CreateOpsItemCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSSM", "CreateOpsItem", {})
  .n("SSMClient", "CreateOpsItemCommand")
  .sc(CreateOpsItem)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateOpsItemRequest;
      output: CreateOpsItemResponse;
    };
    sdk: {
      input: CreateOpsItemCommandInput;
      output: CreateOpsItemCommandOutput;
    };
  };
}
