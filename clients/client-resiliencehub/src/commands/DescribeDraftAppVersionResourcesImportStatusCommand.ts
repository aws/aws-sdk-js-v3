// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeDraftAppVersionResourcesImportStatusRequest,
  DescribeDraftAppVersionResourcesImportStatusResponse,
} from "../models/models_0";
import { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";
import { DescribeDraftAppVersionResourcesImportStatus } from "../schemas/schemas_2_App";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDraftAppVersionResourcesImportStatusCommand}.
 */
export interface DescribeDraftAppVersionResourcesImportStatusCommandInput
  extends DescribeDraftAppVersionResourcesImportStatusRequest {}
/**
 * @public
 *
 * The output of {@link DescribeDraftAppVersionResourcesImportStatusCommand}.
 */
export interface DescribeDraftAppVersionResourcesImportStatusCommandOutput
  extends DescribeDraftAppVersionResourcesImportStatusResponse,
    __MetadataBearer {}

/**
 * <p>Describes the status of importing resources to an application version.</p>
 *          <note>
 *             <p>If you get a 404 error with
 *           <code>ResourceImportStatusNotFoundAppMetadataException</code>, you must call
 *           <code>importResourcesToDraftAppVersion</code> after creating the application and before
 *         calling <code>describeDraftAppVersionResourcesImportStatus</code> to obtain the
 *         status.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, DescribeDraftAppVersionResourcesImportStatusCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, DescribeDraftAppVersionResourcesImportStatusCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * // import type { ResiliencehubClientConfig } from "@aws-sdk/client-resiliencehub";
 * const config = {}; // type is ResiliencehubClientConfig
 * const client = new ResiliencehubClient(config);
 * const input = { // DescribeDraftAppVersionResourcesImportStatusRequest
 *   appArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeDraftAppVersionResourcesImportStatusCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDraftAppVersionResourcesImportStatusResponse
 * //   appArn: "STRING_VALUE", // required
 * //   appVersion: "STRING_VALUE", // required
 * //   status: "Pending" || "InProgress" || "Failed" || "Success", // required
 * //   statusChangeTime: new Date("TIMESTAMP"), // required
 * //   errorMessage: "STRING_VALUE",
 * //   errorDetails: [ // ErrorDetailList
 * //     { // ErrorDetail
 * //       errorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeDraftAppVersionResourcesImportStatusCommandInput - {@link DescribeDraftAppVersionResourcesImportStatusCommandInput}
 * @returns {@link DescribeDraftAppVersionResourcesImportStatusCommandOutput}
 * @see {@link DescribeDraftAppVersionResourcesImportStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeDraftAppVersionResourcesImportStatusCommandOutput} for command's `response` shape.
 * @see {@link ResiliencehubClientResolvedConfig | config} for ResiliencehubClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permissions to perform the requested operation. The user or role that is
 *       making the request must have at least one IAM permissions policy attached that grants the
 *       required permissions.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Resilience Hub
 *       service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception occurs when the specified resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This exception occurs when you have exceeded the limit on the number of requests per second.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>This exception occurs when a request is not valid.</p>
 *
 * @throws {@link ResiliencehubServiceException}
 * <p>Base exception class for all service exceptions from Resiliencehub service.</p>
 *
 *
 * @public
 */
export class DescribeDraftAppVersionResourcesImportStatusCommand extends $Command
  .classBuilder<
    DescribeDraftAppVersionResourcesImportStatusCommandInput,
    DescribeDraftAppVersionResourcesImportStatusCommandOutput,
    ResiliencehubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResiliencehubClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsResilienceHub", "DescribeDraftAppVersionResourcesImportStatus", {})
  .n("ResiliencehubClient", "DescribeDraftAppVersionResourcesImportStatusCommand")
  .sc(DescribeDraftAppVersionResourcesImportStatus)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDraftAppVersionResourcesImportStatusRequest;
      output: DescribeDraftAppVersionResourcesImportStatusResponse;
    };
    sdk: {
      input: DescribeDraftAppVersionResourcesImportStatusCommandInput;
      output: DescribeDraftAppVersionResourcesImportStatusCommandOutput;
    };
  };
}
