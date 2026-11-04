// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeWorkspaceRequest, DescribeWorkspaceResponse } from "../models/models_0";
import { DescribeWorkspace$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns information about an existing workspace.
 *
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred during the processing of the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request references a resources that doesn't exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link AmpServiceException}
 *
 * Base exception class for all service exceptions from Amp service.
 *
 * @public
 */
export class DescribeWorkspaceCommand extends command<DescribeWorkspaceCommandInput, DescribeWorkspaceCommandOutput>(
  _ep0,
  _mw0,
  "DescribeWorkspace",
  DescribeWorkspace$
) {
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
