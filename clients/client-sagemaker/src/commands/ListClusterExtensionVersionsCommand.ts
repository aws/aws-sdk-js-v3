// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListClusterExtensionVersionsRequest, ListClusterExtensionVersionsResponse } from "../models/models_4";
import { ListClusterExtensionVersions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListClusterExtensionVersionsCommand}.
 */
export interface ListClusterExtensionVersionsCommandInput extends ListClusterExtensionVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListClusterExtensionVersionsCommand}.
 */
export interface ListClusterExtensionVersionsCommandOutput extends ListClusterExtensionVersionsResponse, __MetadataBearer {}

/**
 * <p>Lists the versions of an extension that you can install on a SageMaker HyperPod cluster, from the highest version to the lowest. Use a version from this list as the <code>ExtensionVersion</code> in <code>CreateClusterExtension</code> or <code>UpdateClusterExtension</code>.</p> <p>The list contains only versions that you can install. Versions that SageMaker HyperPod no longer offers for new installations don't appear. If SageMaker HyperPod doesn't offer an extension with the name that you specify, the response contains an empty list.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListClusterExtensionVersionsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListClusterExtensionVersionsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * // import type { SageMakerClientConfig } from "@aws-sdk/client-sagemaker";
 * const config = {}; // type is SageMakerClientConfig
 * const client = new SageMakerClient(config);
 * const input = { // ListClusterExtensionVersionsRequest
 *   ExtensionName: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListClusterExtensionVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListClusterExtensionVersionsResponse
 * //   ExtensionVersions: [ // ExtensionVersionSummaries // required
 * //     { // ExtensionVersionSummary
 * //       ExtensionVersion: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListClusterExtensionVersionsCommandInput - {@link ListClusterExtensionVersionsCommandInput}
 * @returns {@link ListClusterExtensionVersionsCommandOutput}
 * @see {@link ListClusterExtensionVersionsCommandInput} for command's `input` shape.
 * @see {@link ListClusterExtensionVersionsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 *
 * @public
 */
export class ListClusterExtensionVersionsCommand extends command<ListClusterExtensionVersionsCommandInput, ListClusterExtensionVersionsCommandOutput>(
  _ep0,
  _mw0,
  "ListClusterExtensionVersions",
  ListClusterExtensionVersions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListClusterExtensionVersionsRequest;
      output: ListClusterExtensionVersionsResponse;
    };
    sdk: {
      input: ListClusterExtensionVersionsCommandInput;
      output: ListClusterExtensionVersionsCommandOutput;
    };
  };
}
