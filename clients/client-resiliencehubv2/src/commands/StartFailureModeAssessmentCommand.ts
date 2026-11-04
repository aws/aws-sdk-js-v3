// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartFailureModeAssessmentRequest, StartFailureModeAssessmentResponse } from "../models/models_0";
import { StartFailureModeAssessment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartFailureModeAssessmentCommand}.
 */
export interface StartFailureModeAssessmentCommandInput extends StartFailureModeAssessmentRequest {}
/**
 * @public
 *
 * The output of {@link StartFailureModeAssessmentCommand}.
 */
export interface StartFailureModeAssessmentCommandOutput extends StartFailureModeAssessmentResponse, __MetadataBearer {}

/**
 * Starts a failure mode assessment.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Resiliencehubv2Client, StartFailureModeAssessmentCommand } from "@aws-sdk/client-resiliencehubv2"; // ES Modules import
 * // const { Resiliencehubv2Client, StartFailureModeAssessmentCommand } = require("@aws-sdk/client-resiliencehubv2"); // CommonJS import
 * // import type { Resiliencehubv2ClientConfig } from "@aws-sdk/client-resiliencehubv2";
 * const config = {}; // type is Resiliencehubv2ClientConfig
 * const client = new Resiliencehubv2Client(config);
 * const input = { // StartFailureModeAssessmentRequest
 *   serviceArn: "STRING_VALUE", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new StartFailureModeAssessmentCommand(input);
 * const response = await client.send(command);
 * // { // StartFailureModeAssessmentResponse
 * //   assessmentId: "STRING_VALUE",
 * //   serviceArn: "STRING_VALUE",
 * //   assessmentStatus: "NOT_STARTED" || "PENDING" || "IN_PROGRESS" || "FAILED" || "SUCCESS",
 * //   startedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param StartFailureModeAssessmentCommandInput - {@link StartFailureModeAssessmentCommandInput}
 * @returns {@link StartFailureModeAssessmentCommandOutput}
 * @see {@link StartFailureModeAssessmentCommandInput} for command's `input` shape.
 * @see {@link StartFailureModeAssessmentCommandOutput} for command's `response` shape.
 * @see {@link Resiliencehubv2ClientResolvedConfig | config} for Resiliencehubv2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access denied — caller lacks required permissions.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Conflict — resource already exists.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Internal service error.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Resource not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Too many requests — rate limit exceeded.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Validation error — invalid input parameters.
 *
 * @throws {@link Resiliencehubv2ServiceException}
 *
 * Base exception class for all service exceptions from Resiliencehubv2 service.
 *
 * @public
 */
export class StartFailureModeAssessmentCommand extends command<StartFailureModeAssessmentCommandInput, StartFailureModeAssessmentCommandOutput>(
  _ep0,
  _mw0,
  "StartFailureModeAssessment",
  StartFailureModeAssessment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartFailureModeAssessmentRequest;
      output: StartFailureModeAssessmentResponse;
    };
    sdk: {
      input: StartFailureModeAssessmentCommandInput;
      output: StartFailureModeAssessmentCommandOutput;
    };
  };
}
