// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DescribeAppVersionResourcesResolutionStatusRequest,
  DescribeAppVersionResourcesResolutionStatusResponse,
} from "../models/models_0";
import type { ResiliencehubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ResiliencehubClient";
import { DescribeAppVersionResourcesResolutionStatus } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAppVersionResourcesResolutionStatusCommand}.
 */
export interface DescribeAppVersionResourcesResolutionStatusCommandInput
  extends DescribeAppVersionResourcesResolutionStatusRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAppVersionResourcesResolutionStatusCommand}.
 */
export interface DescribeAppVersionResourcesResolutionStatusCommandOutput
  extends DescribeAppVersionResourcesResolutionStatusResponse,
    __MetadataBearer {}

/**
 * <p>Returns the resolution status for the specified resolution identifier for an application
 *       version. If <code>resolutionId</code> is not specified, the current resolution status is
 *       returned.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ResiliencehubClient, DescribeAppVersionResourcesResolutionStatusCommand } from "@aws-sdk/client-resiliencehub"; // ES Modules import
 * // const { ResiliencehubClient, DescribeAppVersionResourcesResolutionStatusCommand } = require("@aws-sdk/client-resiliencehub"); // CommonJS import
 * // import type { ResiliencehubClientConfig } from "@aws-sdk/client-resiliencehub";
 * const config = {}; // type is ResiliencehubClientConfig
 * const client = new ResiliencehubClient(config);
 * const input = { // DescribeAppVersionResourcesResolutionStatusRequest
 *   appArn: "STRING_VALUE", // required
 *   appVersion: "STRING_VALUE", // required
 *   resolutionId: "STRING_VALUE",
 * };
 * const command = new DescribeAppVersionResourcesResolutionStatusCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAppVersionResourcesResolutionStatusResponse
 * //   appArn: "STRING_VALUE", // required
 * //   appVersion: "STRING_VALUE", // required
 * //   resolutionId: "STRING_VALUE", // required
 * //   status: "Pending" || "InProgress" || "Failed" || "Success", // required
 * //   errorMessage: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeAppVersionResourcesResolutionStatusCommandInput - {@link DescribeAppVersionResourcesResolutionStatusCommandInput}
 * @returns {@link DescribeAppVersionResourcesResolutionStatusCommandOutput}
 * @see {@link DescribeAppVersionResourcesResolutionStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeAppVersionResourcesResolutionStatusCommandOutput} for command's `response` shape.
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
export class DescribeAppVersionResourcesResolutionStatusCommand extends $Command
  .classBuilder<
    DescribeAppVersionResourcesResolutionStatusCommandInput,
    DescribeAppVersionResourcesResolutionStatusCommandOutput,
    ResiliencehubClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ResiliencehubClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AwsResilienceHub", "DescribeAppVersionResourcesResolutionStatus", {})
  .n("ResiliencehubClient", "DescribeAppVersionResourcesResolutionStatusCommand")
  .sc(DescribeAppVersionResourcesResolutionStatus)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAppVersionResourcesResolutionStatusRequest;
      output: DescribeAppVersionResourcesResolutionStatusResponse;
    };
    sdk: {
      input: DescribeAppVersionResourcesResolutionStatusCommandInput;
      output: DescribeAppVersionResourcesResolutionStatusCommandOutput;
    };
  };
}
