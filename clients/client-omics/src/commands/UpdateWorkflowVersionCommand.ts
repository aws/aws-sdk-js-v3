// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateWorkflowVersionRequest } from "../models/models_0";
import { UpdateWorkflowVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateWorkflowVersionCommand}.
 */
export interface UpdateWorkflowVersionCommandInput extends UpdateWorkflowVersionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateWorkflowVersionCommand}.
 */
export interface UpdateWorkflowVersionCommandOutput extends __MetadataBearer {}

/**
 * Updates information about the workflow version. For more information, see [Workflow versioning in Amazon Web Services HealthOmics](https://docs.aws.amazon.com/omics/latest/dev/workflow-versions.html) in the *Amazon Web Services HealthOmics User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, UpdateWorkflowVersionCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, UpdateWorkflowVersionCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // UpdateWorkflowVersionRequest
 *   workflowId: "STRING_VALUE", // required
 *   versionName: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   storageType: "STRING_VALUE",
 *   storageCapacity: Number("int"),
 *   readmeMarkdown: "STRING_VALUE",
 * };
 * const command = new UpdateWorkflowVersionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateWorkflowVersionCommandInput - {@link UpdateWorkflowVersionCommandInput}
 * @returns {@link UpdateWorkflowVersionCommandOutput}
 * @see {@link UpdateWorkflowVersionCommandInput} for command's `input` shape.
 * @see {@link UpdateWorkflowVersionCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request cannot be applied to the target resource in its current state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred. Try the request again.
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *
 * The request timed out.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The target resource was not found in the current Region.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request exceeds a service quota.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link OmicsServiceException}
 *
 * Base exception class for all service exceptions from Omics service.
 *
 * @public
 */
export class UpdateWorkflowVersionCommand extends command<UpdateWorkflowVersionCommandInput, UpdateWorkflowVersionCommandOutput>(
  _ep0,
  _mw0,
  "UpdateWorkflowVersion",
  UpdateWorkflowVersion$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateWorkflowVersionRequest;
      output: {};
    };
    sdk: {
      input: UpdateWorkflowVersionCommandInput;
      output: UpdateWorkflowVersionCommandOutput;
    };
  };
}
