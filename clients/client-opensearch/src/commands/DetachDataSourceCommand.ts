// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DetachDataSourceRequest, DetachDataSourceResponse } from "../models/models_0";
import type { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { DetachDataSource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DetachDataSourceCommand}.
 */
export interface DetachDataSourceCommandInput extends DetachDataSourceRequest {}
/**
 * @public
 *
 * The output of {@link DetachDataSourceCommand}.
 */
export interface DetachDataSourceCommandOutput extends DetachDataSourceResponse, __MetadataBearer {}

/**
 * <p>Removes a data source from an OpenSearch application. The application must be in the <code>ACTIVE</code> state. This operation removes the data source saved object from the application and deletes the attachment record. Throws a <code>ConflictException</code> if the specified data source has a <code>PENDING</code> attachment, and a <code>ResourceNotFoundException</code> if the data source is not currently attached to the application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, DetachDataSourceCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, DetachDataSourceCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * // import type { OpenSearchClientConfig } from "@aws-sdk/client-opensearch";
 * const config = {}; // type is OpenSearchClientConfig
 * const client = new OpenSearchClient(config);
 * const input = { // DetachDataSourceRequest
 *   id: "STRING_VALUE", // required
 *   dataSourceArn: "STRING_VALUE", // required
 * };
 * const command = new DetachDataSourceCommand(input);
 * const response = await client.send(command);
 * // { // DetachDataSourceResponse
 * //   id: "STRING_VALUE",
 * //   arn: "STRING_VALUE",
 * //   dataSourceArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DetachDataSourceCommandInput - {@link DetachDataSourceCommandInput}
 * @returns {@link DetachDataSourceCommandOutput}
 * @see {@link DetachDataSourceCommandInput} for command's `input` shape.
 * @see {@link DetachDataSourceCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>An error occurred because you don't have permissions to access the resource.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>An error occurred because the client attempts to remove a resource that is currently in use.</p>
 *
 * @throws {@link DisabledOperationException} (client fault)
 *  <p>An error occured because the client wanted to access an unsupported operation.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Request processing failed because of an unknown error, exception, or internal failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception for accessing or deleting a resource that doesn't exist.</p>
 *
 * @throws {@link OpenSearchServiceException}
 * <p>Base exception class for all service exceptions from OpenSearch service.</p>
 *
 *
 * @public
 */
export class DetachDataSourceCommand extends $Command
  .classBuilder<
    DetachDataSourceCommandInput,
    DetachDataSourceCommandOutput,
    OpenSearchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OpenSearchClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonOpenSearchService", "DetachDataSource", {})
  .n("OpenSearchClient", "DetachDataSourceCommand")
  .sc(DetachDataSource$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DetachDataSourceRequest;
      output: DetachDataSourceResponse;
    };
    sdk: {
      input: DetachDataSourceCommandInput;
      output: DetachDataSourceCommandOutput;
    };
  };
}
