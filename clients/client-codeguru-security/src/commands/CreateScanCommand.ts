// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateScanRequest, CreateScanResponse } from "../models/models_0";
import { CreateScan$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateScanCommand}.
 */
export interface CreateScanCommandInput extends CreateScanRequest {}
/**
 * @public
 *
 * The output of {@link CreateScanCommand}.
 */
export interface CreateScanCommandOutput extends CreateScanResponse, __MetadataBearer {}

/**
 * Use to create a scan using code uploaded to an Amazon S3 bucket.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruSecurityClient, CreateScanCommand } from "@aws-sdk/client-codeguru-security"; // ES Modules import
 * // const { CodeGuruSecurityClient, CreateScanCommand } = require("@aws-sdk/client-codeguru-security"); // CommonJS import
 * // import type { CodeGuruSecurityClientConfig } from "@aws-sdk/client-codeguru-security";
 * const config = {}; // type is CodeGuruSecurityClientConfig
 * const client = new CodeGuruSecurityClient(config);
 * const input = { // CreateScanRequest
 *   clientToken: "STRING_VALUE",
 *   resourceId: { // ResourceId Union: only one key present
 *     codeArtifactId: "STRING_VALUE",
 *   },
 *   scanName: "STRING_VALUE", // required
 *   scanType: "Standard" || "Express",
 *   analysisType: "Security" || "All",
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateScanCommand(input);
 * const response = await client.send(command);
 * // { // CreateScanResponse
 * //   scanName: "STRING_VALUE", // required
 * //   runId: "STRING_VALUE", // required
 * //   resourceId: { // ResourceId Union: only one key present
 * //     codeArtifactId: "STRING_VALUE",
 * //   },
 * //   scanState: "InProgress" || "Successful" || "Failed", // required
 * //   scanNameArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateScanCommandInput - {@link CreateScanCommandInput}
 * @returns {@link CreateScanCommandOutput}
 * @see {@link CreateScanCommandInput} for command's `input` shape.
 * @see {@link CreateScanCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruSecurityClientResolvedConfig | config} for CodeGuruSecurityClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The requested operation would cause a conflict with the current state of a service resource associated with the request. Resolve the conflict before retrying this request.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The server encountered an internal error and is unable to complete the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource specified in the request was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the specified constraints.
 *
 * @throws {@link CodeGuruSecurityServiceException}
 *
 * Base exception class for all service exceptions from CodeGuruSecurity service.
 *
 * @public
 */
export class CreateScanCommand extends command<CreateScanCommandInput, CreateScanCommandOutput>(
  _ep0,
  _mw0,
  "CreateScan",
  CreateScan$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateScanRequest;
      output: CreateScanResponse;
    };
    sdk: {
      input: CreateScanCommandInput;
      output: CreateScanCommandOutput;
    };
  };
}
