// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import {
  BatchAssociateCodeSecurityScanConfigurationRequest,
  BatchAssociateCodeSecurityScanConfigurationResponse,
} from "../models/models_0";
import { BatchAssociateCodeSecurityScanConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchAssociateCodeSecurityScanConfigurationCommand}.
 */
export interface BatchAssociateCodeSecurityScanConfigurationCommandInput
  extends BatchAssociateCodeSecurityScanConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link BatchAssociateCodeSecurityScanConfigurationCommand}.
 */
export interface BatchAssociateCodeSecurityScanConfigurationCommandOutput
  extends BatchAssociateCodeSecurityScanConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Associates multiple code repositories with an Amazon Inspector code security scan
 *          configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, BatchAssociateCodeSecurityScanConfigurationCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, BatchAssociateCodeSecurityScanConfigurationCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * // import type { Inspector2ClientConfig } from "@aws-sdk/client-inspector2";
 * const config = {}; // type is Inspector2ClientConfig
 * const client = new Inspector2Client(config);
 * const input = { // BatchAssociateCodeSecurityScanConfigurationRequest
 *   associateConfigurationRequests: [ // AssociateConfigurationRequestList // required
 *     { // AssociateConfigurationRequest
 *       scanConfigurationArn: "STRING_VALUE", // required
 *       resource: { // CodeSecurityResource Union: only one key present
 *         projectId: "STRING_VALUE",
 *       },
 *     },
 *   ],
 * };
 * const command = new BatchAssociateCodeSecurityScanConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // BatchAssociateCodeSecurityScanConfigurationResponse
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
 * @param BatchAssociateCodeSecurityScanConfigurationCommandInput - {@link BatchAssociateCodeSecurityScanConfigurationCommandInput}
 * @returns {@link BatchAssociateCodeSecurityScanConfigurationCommandOutput}
 * @see {@link BatchAssociateCodeSecurityScanConfigurationCommandInput} for command's `input` shape.
 * @see {@link BatchAssociateCodeSecurityScanConfigurationCommandOutput} for command's `response` shape.
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
export class BatchAssociateCodeSecurityScanConfigurationCommand extends $Command
  .classBuilder<
    BatchAssociateCodeSecurityScanConfigurationCommandInput,
    BatchAssociateCodeSecurityScanConfigurationCommandOutput,
    Inspector2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Inspector2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Inspector2", "BatchAssociateCodeSecurityScanConfiguration", {})
  .n("Inspector2Client", "BatchAssociateCodeSecurityScanConfigurationCommand")
  .sc(BatchAssociateCodeSecurityScanConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchAssociateCodeSecurityScanConfigurationRequest;
      output: BatchAssociateCodeSecurityScanConfigurationResponse;
    };
    sdk: {
      input: BatchAssociateCodeSecurityScanConfigurationCommandInput;
      output: BatchAssociateCodeSecurityScanConfigurationCommandOutput;
    };
  };
}
