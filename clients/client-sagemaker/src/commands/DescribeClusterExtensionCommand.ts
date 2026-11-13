// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeClusterExtensionRequest, DescribeClusterExtensionResponse } from "../models/models_2";
import { DescribeClusterExtension$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeClusterExtensionCommand}.
 */
export interface DescribeClusterExtensionCommandInput extends DescribeClusterExtensionRequest {}
/**
 * @public
 *
 * The output of {@link DescribeClusterExtensionCommand}.
 */
export interface DescribeClusterExtensionCommandOutput extends DescribeClusterExtensionResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about an extension installed on a SageMaker HyperPod cluster. The information includes the extension's version, configuration, and status, and a summary of how many cluster nodes are running the current version and configuration of the extension. If the extension has problems on some nodes, the response also lists the problems and how many nodes each one affects.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeClusterExtensionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeClusterExtensionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // DescribeClusterExtensionRequest
 *   ClusterArn: "STRING_VALUE", // required
 *   ExtensionArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeClusterExtensionCommand(input);
 * const response = await client.send(command);
 * // { // DescribeClusterExtensionResponse
 * //   ExtensionDetails: { // ExtensionDetails
 * //     ClusterArn: "STRING_VALUE", // required
 * //     ExtensionArn: "STRING_VALUE", // required
 * //     ExtensionName: "STRING_VALUE", // required
 * //     ExtensionVersion: "STRING_VALUE", // required
 * //     Status: "Creating" || "Active" || "CreateFailed" || "Updating" || "Deleting" || "DeleteFailed" || "Degraded" || "UpdateFailed", // required
 * //     ConfigurationValues: "STRING_VALUE",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     LastModifiedTime: new Date("TIMESTAMP"),
 * //   },
 * //   NodeSummary: { // ExtensionNodeSummary
 * //     TotalCount: Number("int"), // required
 * //     ActiveCount: Number("int"), // required
 * //   },
 * //   Health: { // ExtensionHealth
 * //     Issues: [ // ExtensionHealthIssues // required
 * //       { // ExtensionHealthIssue
 * //         Code: "InvalidConfiguration" || "ConfigurationConflict" || "AccessDenied" || "ResourceNotFound" || "DependencyUnreachable" || "ExtensionUnhealthy" || "InternalFailure" || "Other", // required
 * //         Message: "STRING_VALUE", // required
 * //         NodeCount: Number("int"), // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeClusterExtensionCommandInput - {@link DescribeClusterExtensionCommandInput}
 * @returns {@link DescribeClusterExtensionCommandOutput}
 * @see {@link DescribeClusterExtensionCommandInput} for command's `input` shape.
 * @see {@link DescribeClusterExtensionCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class DescribeClusterExtensionCommand extends command<DescribeClusterExtensionCommandInput, DescribeClusterExtensionCommandOutput>(
  _ep0,
  _mw0,
  "DescribeClusterExtension",
  DescribeClusterExtension$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeClusterExtensionRequest;
      output: DescribeClusterExtensionResponse;
    };
    sdk: {
      input: DescribeClusterExtensionCommandInput;
      output: DescribeClusterExtensionCommandOutput;
    };
  };
}
