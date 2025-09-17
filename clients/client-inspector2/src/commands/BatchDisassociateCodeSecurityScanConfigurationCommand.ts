// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import {
  BatchDisassociateCodeSecurityScanConfigurationRequest,
  BatchDisassociateCodeSecurityScanConfigurationResponse,
} from "../models/models_0";
import {
  de_BatchDisassociateCodeSecurityScanConfigurationCommand,
  se_BatchDisassociateCodeSecurityScanConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchDisassociateCodeSecurityScanConfigurationCommand}.
 */
export interface BatchDisassociateCodeSecurityScanConfigurationCommandInput
  extends BatchDisassociateCodeSecurityScanConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link BatchDisassociateCodeSecurityScanConfigurationCommand}.
 */
export interface BatchDisassociateCodeSecurityScanConfigurationCommandOutput
  extends BatchDisassociateCodeSecurityScanConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Disassociates multiple code repositories from an Amazon Inspector code security scan
 *          configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, BatchDisassociateCodeSecurityScanConfigurationCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, BatchDisassociateCodeSecurityScanConfigurationCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * // import type { Inspector2ClientConfig } from "@aws-sdk/client-inspector2";
 * const config = {}; // type is Inspector2ClientConfig
 * const client = new Inspector2Client(config);
 * const input = { // BatchDisassociateCodeSecurityScanConfigurationRequest
 *   disassociateConfigurationRequests: [ // DisassociateConfigurationRequestList // required
 *     { // DisassociateConfigurationRequest
 *       scanConfigurationArn: "STRING_VALUE", // required
 *       resource: { // CodeSecurityResource Union: only one key present
 *         projectId: "STRING_VALUE",
 *       },
 *     },
 *   ],
 * };
 * const command = new BatchDisassociateCodeSecurityScanConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // BatchDisassociateCodeSecurityScanConfigurationResponse
 * //   failedAssociations: [ // FailedAssociationResultList
 * //     { // FailedAssociationResult
 * //       scanConfigurationArn: "STRING_VALUE",
 * //       resource: { // CodeSecurityResource Union: only one key present
 * //         projectId: "STRING_VALUE",
 * //       },
 * //       statusCode: "INTERNAL_ERROR" || "ACCESS_DENIED" || "SCAN_CONFIGURATION_NOT_FOUND" || "INVALID_INPUT" || "RESOURCE_NOT_FOUND" || "QUOTA_EXCEEDED",
 * //       statusMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   successfulAssociations: [ // SuccessfulAssociationResultList
 * //     { // SuccessfulAssociationResult
 * //       scanConfigurationArn: "STRING_VALUE",
 * //       resource: {//  Union: only one key present
 * //         projectId: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchDisassociateCodeSecurityScanConfigurationCommandInput - {@link BatchDisassociateCodeSecurityScanConfigurationCommandInput}
 * @returns {@link BatchDisassociateCodeSecurityScanConfigurationCommandOutput}
 * @see {@link BatchDisassociateCodeSecurityScanConfigurationCommandInput} for command's `input` shape.
 * @see {@link BatchDisassociateCodeSecurityScanConfigurationCommandOutput} for command's `response` shape.
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
export class BatchDisassociateCodeSecurityScanConfigurationCommand extends $Command
  .classBuilder<
    BatchDisassociateCodeSecurityScanConfigurationCommandInput,
    BatchDisassociateCodeSecurityScanConfigurationCommandOutput,
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
  .s("Inspector2", "BatchDisassociateCodeSecurityScanConfiguration", {})
  .n("Inspector2Client", "BatchDisassociateCodeSecurityScanConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_BatchDisassociateCodeSecurityScanConfigurationCommand)
  .de(de_BatchDisassociateCodeSecurityScanConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchDisassociateCodeSecurityScanConfigurationRequest;
      output: BatchDisassociateCodeSecurityScanConfigurationResponse;
    };
    sdk: {
      input: BatchDisassociateCodeSecurityScanConfigurationCommandInput;
      output: BatchDisassociateCodeSecurityScanConfigurationCommandOutput;
    };
  };
}
