// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AmpClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmpClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeWorkspaceRequest, DescribeWorkspaceResponse } from "../models/models_0";
import { DescribeWorkspace } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeWorkspaceCommand}.
 */
export interface DescribeWorkspaceCommandInput extends DescribeWorkspaceRequest {}
/**
 * @public
 *
 * The output of {@link DescribeWorkspaceCommand}.
 */
export interface DescribeWorkspaceCommandOutput extends DescribeWorkspaceResponse, __MetadataBearer {}

/**
 * <p>Returns information about an existing workspace. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmpClient, DescribeWorkspaceCommand } from "@aws-sdk/client-amp"; // ES Modules import
 * // const { AmpClient, DescribeWorkspaceCommand } = require("@aws-sdk/client-amp"); // CommonJS import
 * // import type { AmpClientConfig } from "@aws-sdk/client-amp";
 * const config = {}; // type is AmpClientConfig
 * const client = new AmpClient(config);
 * const input = { // DescribeWorkspaceRequest
 *   workspaceId: "STRING_VALUE", // required
 * };
 * const command = new DescribeWorkspaceCommand(input);
 * const response = await client.send(command);
 * // { // DescribeWorkspaceResponse
 * //   workspace: { // WorkspaceDescription
 * //     workspaceId: "STRING_VALUE", // required
 * //     alias: "STRING_VALUE",
 * //     arn: "STRING_VALUE", // required
 * //     status: { // WorkspaceStatus
 * //       statusCode: "STRING_VALUE", // required
 * //     },
 * //     prometheusEndpoint: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     kmsKeyArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeWorkspaceCommandInput - {@link DescribeWorkspaceCommandInput}
 * @returns {@link DescribeWorkspaceCommandOutput}
 * @see {@link DescribeWorkspaceCommandInput} for command's `input` shape.
 * @see {@link DescribeWorkspaceCommandOutput} for command's `response` shape.
 * @see {@link AmpClientResolvedConfig | config} for AmpClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred during the processing of the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resources that doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link AmpServiceException}
 * <p>Base exception class for all service exceptions from Amp service.</p>
 *
 *
 * @public
 */
export class DescribeWorkspaceCommand extends $Command
  .classBuilder<
    DescribeWorkspaceCommandInput,
    DescribeWorkspaceCommandOutput,
    AmpClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AmpClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonPrometheusService", "DescribeWorkspace", {})
  .n("AmpClient", "DescribeWorkspaceCommand")
  .sc(DescribeWorkspace)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeWorkspaceRequest;
      output: DescribeWorkspaceResponse;
    };
    sdk: {
      input: DescribeWorkspaceCommandInput;
      output: DescribeWorkspaceCommandOutput;
    };
  };
}
