// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutComplianceItemsRequest, PutComplianceItemsResult } from "../models/models_1";
import { PutComplianceItems$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutComplianceItemsCommand}.
 */
export interface PutComplianceItemsCommandInput extends PutComplianceItemsRequest {}
/**
 * @public
 *
 * The output of {@link PutComplianceItemsCommand}.
 */
export interface PutComplianceItemsCommandOutput extends PutComplianceItemsResult, __MetadataBearer {}

/**
 * Registers a compliance type and other compliance details on a designated resource. This operation lets you register custom compliance details with a resource. This call overwrites existing compliance information on the resource, so you must provide a full list of compliance items each time that you send the request.
 *
 * ComplianceType can be one of the following:
 *
 * - ExecutionId: The execution ID when the patch, association, or custom compliance item was applied.
 * - ExecutionType: Specify patch, association, or Custom:`string`.
 * - ExecutionTime. The time the patch, association, or custom compliance item was applied to the managed node.
 *
 *   > **Important:** For State Manager associations, this represents the time when compliance status was captured by the Systems Manager service during its internal compliance aggregation workflow, not necessarily when the association was executed on the managed node. State Manager updates compliance information for all associations on an instance whenever any association executes, which may result in multiple associations showing the same execution time.
 * - Id: The patch, association, or custom compliance ID.
 * - Title: A title.
 * - Status: The status of the compliance item. For example, `approved` for patches, or `Failed` for associations.
 * - Severity: A patch severity. For example, `Critical`.
 * - DocumentName: An SSM document name. For example, `AWS-RunPatchBaseline`.
 * - DocumentVersion: An SSM document version number. For example, 4.
 * - Classification: A patch classification. For example, `security updates`.
 * - PatchBaselineId: A patch baseline ID.
 * - PatchSeverity: A patch severity. For example, `Critical`.
 * - PatchState: A patch state. For example, `InstancesWithFailedPatches`.
 * - PatchGroup: The name of a patch group.
 * - InstalledTime: The time the association, patch, or custom compliance item was applied to the resource. Specify the time by using the following format: `yyyy-MM-dd'T'HH:mm:ss'Z'`
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, PutComplianceItemsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, PutComplianceItemsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * // import type { SSMClientConfig } from "@aws-sdk/client-ssm";
 * const config = {}; // type is SSMClientConfig
 * const client = new SSMClient(config);
 * const input = { // PutComplianceItemsRequest
 *   ResourceId: "STRING_VALUE", // required
 *   ResourceType: "STRING_VALUE", // required
 *   ComplianceType: "STRING_VALUE", // required
 *   ExecutionSummary: { // ComplianceExecutionSummary
 *     ExecutionTime: new Date("TIMESTAMP"), // required
 *     ExecutionId: "STRING_VALUE",
 *     ExecutionType: "STRING_VALUE",
 *   },
 *   Items: [ // ComplianceItemEntryList // required
 *     { // ComplianceItemEntry
 *       Id: "STRING_VALUE",
 *       Title: "STRING_VALUE",
 *       Severity: "CRITICAL" || "HIGH" || "MEDIUM" || "LOW" || "INFORMATIONAL" || "UNSPECIFIED", // required
 *       Status: "COMPLIANT" || "NON_COMPLIANT", // required
 *       Details: { // ComplianceItemDetails
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   ItemContentHash: "STRING_VALUE",
 *   UploadType: "COMPLETE" || "PARTIAL",
 * };
 * const command = new PutComplianceItemsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutComplianceItemsCommandInput - {@link PutComplianceItemsCommandInput}
 * @returns {@link PutComplianceItemsCommandOutput}
 * @see {@link PutComplianceItemsCommandInput} for command's `input` shape.
 * @see {@link PutComplianceItemsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link ComplianceTypeCountLimitExceededException} (client fault)
 *
 * You specified too many custom compliance types. You can specify a maximum of 10 different types.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * An error occurred on the server side.
 *
 * @throws {@link InvalidItemContentException} (client fault)
 *
 * One or more content items isn't valid.
 *
 * @throws {@link InvalidResourceId} (client fault)
 *
 * The resource ID isn't valid. Verify that you entered the correct ID and try again.
 *
 * @throws {@link InvalidResourceType} (client fault)
 *
 * The resource type isn't valid. For example, if you are attempting to tag an EC2 instance, the instance must be a registered managed node.
 *
 * @throws {@link ItemSizeLimitExceededException} (client fault)
 *
 * The inventory item size has exceeded the size limit.
 *
 * @throws {@link TotalSizeLimitExceededException} (client fault)
 *
 * The size of inventory data has exceeded the total size limit for the resource.
 *
 * @throws {@link SSMServiceException}
 *
 * Base exception class for all service exceptions from SSM service.
 *
 * @public
 */
export class PutComplianceItemsCommand extends command<PutComplianceItemsCommandInput, PutComplianceItemsCommandOutput>(
  _ep0,
  _mw0,
  "PutComplianceItems",
  PutComplianceItems$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutComplianceItemsRequest;
      output: {};
    };
    sdk: {
      input: PutComplianceItemsCommandInput;
      output: PutComplianceItemsCommandOutput;
    };
  };
}
