// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetTermForReportRequest, GetTermForReportResponse } from "../models/models_0";
import { GetTermForReport$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetTermForReportCommand}.
 */
export interface GetTermForReportCommandInput extends GetTermForReportRequest {}
/**
 * @public
 *
 * The output of {@link GetTermForReportCommand}.
 */
export interface GetTermForReportCommandOutput extends GetTermForReportResponse, __MetadataBearer {}

/**
 * Get the Term content associated with a single report.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ArtifactClient, GetTermForReportCommand } from "@aws-sdk/client-artifact"; // ES Modules import
 * // const { ArtifactClient, GetTermForReportCommand } = require("@aws-sdk/client-artifact"); // CommonJS import
 * // import type { ArtifactClientConfig } from "@aws-sdk/client-artifact";
 * const config = {}; // type is ArtifactClientConfig
 * const client = new ArtifactClient(config);
 * const input = { // GetTermForReportRequest
 *   reportId: "STRING_VALUE", // required
 *   reportVersion: Number("long"),
 * };
 * const command = new GetTermForReportCommand(input);
 * const response = await client.send(command);
 * // { // GetTermForReportResponse
 * //   documentPresignedUrl: "STRING_VALUE",
 * //   termToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetTermForReportCommandInput - {@link GetTermForReportCommandInput}
 * @returns {@link GetTermForReportCommandOutput}
 * @see {@link GetTermForReportCommandInput} for command's `input` shape.
 * @see {@link GetTermForReportCommandOutput} for command's `response` shape.
 * @see {@link ArtifactClientResolvedConfig | config} for ArtifactClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User does not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Request to create/modify content would result in a conflict.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unknown server exception has occurred.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Request references a resource which does not exist.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * Request would cause a service quota to be exceeded.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Request fails to satisfy the constraints specified by an AWS service.
 *
 * @throws {@link ArtifactServiceException}
 *
 * Base exception class for all service exceptions from Artifact service.
 *
 * @example Invoke GetTermForReport operation on the latest version of a specific report
 * ```javascript
 * // The GetTermForReport operation is invoked on a reportId and on a optional version.
 *                         If callers do not provide a version, it will default to the report's latest version.
 * const input = {
 *   reportId: "report-abcdef0123456789"
 * };
 * const command = new GetTermForReportCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   documentPresignedUrl: "<Presigned S3 URL>",
 *   termToken: "term-token-abcdefghijklm01234567890"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetTermForReportCommand extends command<GetTermForReportCommandInput, GetTermForReportCommandOutput>(
  _ep0,
  _mw0,
  "GetTermForReport",
  GetTermForReport$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTermForReportRequest;
      output: GetTermForReportResponse;
    };
    sdk: {
      input: GetTermForReportCommandInput;
      output: GetTermForReportCommandOutput;
    };
  };
}
