// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartAssessmentFrameworkShareRequest, StartAssessmentFrameworkShareResponse } from "../models/models_0";
import { StartAssessmentFrameworkShare$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartAssessmentFrameworkShareCommand}.
 */
export interface StartAssessmentFrameworkShareCommandInput extends StartAssessmentFrameworkShareRequest {}
/**
 * @public
 *
 * The output of {@link StartAssessmentFrameworkShareCommand}.
 */
export interface StartAssessmentFrameworkShareCommandOutput extends StartAssessmentFrameworkShareResponse, __MetadataBearer {}

/**
 * Creates a share request for a custom framework in Audit Manager.
 *
 * The share request specifies a recipient and notifies them that a custom framework is available. Recipients have 120 days to accept or decline the request. If no action is taken, the share request expires.
 *
 * When you create a share request, Audit Manager stores a snapshot of your custom framework in the US East (N. Virginia) Amazon Web Services Region. Audit Manager also stores a backup of the same snapshot in the US West (Oregon) Amazon Web Services Region.
 *
 * Audit Manager deletes the snapshot and the backup snapshot when one of the following events occurs:
 *
 * - The sender revokes the share request.
 * - The recipient declines the share request.
 * - The recipient encounters an error and doesn't successfully accept the share request.
 * - The share request expires before the recipient responds to the request.
 *
 * When a sender [resends a share request](https://docs.aws.amazon.com/audit-manager/latest/userguide/framework-sharing.html#framework-sharing-resend), the snapshot is replaced with an updated version that corresponds with the latest version of the custom framework.
 *
 * When a recipient accepts a share request, the snapshot is replicated into their Amazon Web Services account under the Amazon Web Services Region that was specified in the share request.
 *
 * > **Important:** When you invoke the `StartAssessmentFrameworkShare` API, you are about to share a custom framework with another Amazon Web Services account. You may not share a custom framework that is derived from a standard framework if the standard framework is designated as not eligible for sharing by Amazon Web Services, unless you have obtained permission to do so from the owner of the standard framework. To learn more about which standard frameworks are eligible for sharing, see [Framework sharing eligibility](https://docs.aws.amazon.com/audit-manager/latest/userguide/share-custom-framework-concepts-and-terminology.html#eligibility) in the *Audit Manager User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AuditManagerClient, StartAssessmentFrameworkShareCommand } from "@aws-sdk/client-auditmanager"; // ES Modules import
 * // const { AuditManagerClient, StartAssessmentFrameworkShareCommand } = require("@aws-sdk/client-auditmanager"); // CommonJS import
 * // import type { AuditManagerClientConfig } from "@aws-sdk/client-auditmanager";
 * const config = {}; // type is AuditManagerClientConfig
 * const client = new AuditManagerClient(config);
 * const input = { // StartAssessmentFrameworkShareRequest
 *   frameworkId: "STRING_VALUE", // required
 *   destinationAccount: "STRING_VALUE", // required
 *   destinationRegion: "STRING_VALUE", // required
 *   comment: "STRING_VALUE",
 * };
 * const command = new StartAssessmentFrameworkShareCommand(input);
 * const response = await client.send(command);
 * // { // StartAssessmentFrameworkShareResponse
 * //   assessmentFrameworkShareRequest: { // AssessmentFrameworkShareRequest
 * //     id: "STRING_VALUE",
 * //     frameworkId: "STRING_VALUE",
 * //     frameworkName: "STRING_VALUE",
 * //     frameworkDescription: "STRING_VALUE",
 * //     status: "ACTIVE" || "REPLICATING" || "SHARED" || "EXPIRING" || "FAILED" || "EXPIRED" || "DECLINED" || "REVOKED",
 * //     sourceAccount: "STRING_VALUE",
 * //     destinationAccount: "STRING_VALUE",
 * //     destinationRegion: "STRING_VALUE",
 * //     expirationTime: new Date("TIMESTAMP"),
 * //     creationTime: new Date("TIMESTAMP"),
 * //     lastUpdated: new Date("TIMESTAMP"),
 * //     comment: "STRING_VALUE",
 * //     standardControlsCount: Number("int"),
 * //     customControlsCount: Number("int"),
 * //     complianceType: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param StartAssessmentFrameworkShareCommandInput - {@link StartAssessmentFrameworkShareCommandInput}
 * @returns {@link StartAssessmentFrameworkShareCommandOutput}
 * @see {@link StartAssessmentFrameworkShareCommandInput} for command's `input` shape.
 * @see {@link StartAssessmentFrameworkShareCommandOutput} for command's `response` shape.
 * @see {@link AuditManagerClientResolvedConfig | config} for AuditManagerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Your account isn't registered with Audit Manager. Check the delegated administrator setup on the Audit Manager settings page, and try again.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal service error occurred during the processing of your request. Try again later.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource that's specified in the request can't be found.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The request has invalid or missing parameters.
 *
 * @throws {@link AuditManagerServiceException}
 *
 * Base exception class for all service exceptions from AuditManager service.
 *
 * @public
 */
export class StartAssessmentFrameworkShareCommand extends command<StartAssessmentFrameworkShareCommandInput, StartAssessmentFrameworkShareCommandOutput>(
  _ep0,
  _mw0,
  "StartAssessmentFrameworkShare",
  StartAssessmentFrameworkShare$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartAssessmentFrameworkShareRequest;
      output: StartAssessmentFrameworkShareResponse;
    };
    sdk: {
      input: StartAssessmentFrameworkShareCommandInput;
      output: StartAssessmentFrameworkShareCommandOutput;
    };
  };
}
