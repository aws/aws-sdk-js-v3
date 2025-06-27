// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import { GetCodeSecurityScanRequest, GetCodeSecurityScanResponse } from "../models/models_1";
import { de_GetCodeSecurityScanCommand, se_GetCodeSecurityScanCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCodeSecurityScanCommand}.
 */
export interface GetCodeSecurityScanCommandInput extends GetCodeSecurityScanRequest {}
/**
 * @public
 *
 * The output of {@link GetCodeSecurityScanCommand}.
 */
export interface GetCodeSecurityScanCommandOutput extends GetCodeSecurityScanResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about a specific code security scan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, GetCodeSecurityScanCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, GetCodeSecurityScanCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * const client = new Inspector2Client(config);
 * const input = { // GetCodeSecurityScanRequest
 *   resource: { // CodeSecurityResource Union: only one key present
 *     projectId: "STRING_VALUE",
 *   },
 *   scanId: "STRING_VALUE", // required
 * };
 * const command = new GetCodeSecurityScanCommand(input);
 * const response = await client.send(command);
 * // { // GetCodeSecurityScanResponse
 * //   scanId: "STRING_VALUE",
 * //   resource: { // CodeSecurityResource Union: only one key present
 * //     projectId: "STRING_VALUE",
 * //   },
 * //   accountId: "STRING_VALUE",
 * //   status: "IN_PROGRESS" || "SUCCESSFUL" || "FAILED" || "SKIPPED",
 * //   statusReason: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   lastCommitId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetCodeSecurityScanCommandInput - {@link GetCodeSecurityScanCommandInput}
 * @returns {@link GetCodeSecurityScanCommandOutput}
 * @see {@link GetCodeSecurityScanCommandInput} for command's `input` shape.
 * @see {@link GetCodeSecurityScanCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *          <p> For <code>Enable</code>, you receive this error if you attempt to use a feature in an
 *          unsupported Amazon Web Services Region. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>A conflict occurred. This exception occurs when the same resource is being modified by
 *          concurrent requests.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal failure of the Amazon Inspector service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The operation tried to access an invalid resource. Make sure the resource is specified
 *          correctly.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation due to missing required fields or having invalid
 *          inputs.</p>
 *
 * @throws {@link Inspector2ServiceException}
 * <p>Base exception class for all service exceptions from Inspector2 service.</p>
 *
 *
 * @public
 */
export class GetCodeSecurityScanCommand extends $Command
  .classBuilder<
    GetCodeSecurityScanCommandInput,
    GetCodeSecurityScanCommandOutput,
    Inspector2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Inspector2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Inspector2", "GetCodeSecurityScan", {})
  .n("Inspector2Client", "GetCodeSecurityScanCommand")
  .f(void 0, void 0)
  .ser(se_GetCodeSecurityScanCommand)
  .de(de_GetCodeSecurityScanCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCodeSecurityScanRequest;
      output: GetCodeSecurityScanResponse;
    };
    sdk: {
      input: GetCodeSecurityScanCommandInput;
      output: GetCodeSecurityScanCommandOutput;
    };
  };
}
