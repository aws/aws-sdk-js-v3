// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListClusterExtensionsRequest, ListClusterExtensionsResponse } from "../models/models_4";
import { ListClusterExtensions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListClusterExtensionsCommand}.
 */
export interface ListClusterExtensionsCommandInput extends ListClusterExtensionsRequest {}
/**
 * @public
 *
 * The output of {@link ListClusterExtensionsCommand}.
 */
export interface ListClusterExtensionsCommandOutput extends ListClusterExtensionsResponse, __MetadataBearer {}

/**
 * <p>Lists the extensions installed on a SageMaker HyperPod cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListClusterExtensionsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListClusterExtensionsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // ListClusterExtensionsRequest
 *   ClusterArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   CreationTimeAfter: new Date("TIMESTAMP"),
 *   CreationTimeBefore: new Date("TIMESTAMP"),
 * };
 * const command = new ListClusterExtensionsCommand(input);
 * const response = await client.send(command);
 * // { // ListClusterExtensionsResponse
 * //   Extensions: [ // ExtensionSummaries // required
 * //     { // ExtensionSummary
 * //       ExtensionArn: "STRING_VALUE", // required
 * //       ExtensionName: "STRING_VALUE", // required
 * //       ExtensionVersion: "STRING_VALUE", // required
 * //       Status: "Creating" || "Active" || "CreateFailed" || "Updating" || "Deleting" || "DeleteFailed" || "Degraded" || "UpdateFailed", // required
 * //       CreationTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListClusterExtensionsCommandInput - {@link ListClusterExtensionsCommandInput}
 * @returns {@link ListClusterExtensionsCommandOutput}
 * @see {@link ListClusterExtensionsCommandInput} for command's `input` shape.
 * @see {@link ListClusterExtensionsCommandOutput} for command's `response` shape.
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
export class ListClusterExtensionsCommand extends command<ListClusterExtensionsCommandInput, ListClusterExtensionsCommandOutput>(
  _ep0,
  _mw0,
  "ListClusterExtensions",
  ListClusterExtensions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListClusterExtensionsRequest;
      output: ListClusterExtensionsResponse;
    };
    sdk: {
      input: ListClusterExtensionsCommandInput;
      output: ListClusterExtensionsCommandOutput;
    };
  };
}
