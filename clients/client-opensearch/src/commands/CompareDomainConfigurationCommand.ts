// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CompareDomainConfigurationRequest, CompareDomainConfigurationResponse } from "../models/models_0";
import { CompareDomainConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CompareDomainConfigurationCommand}.
 */
export interface CompareDomainConfigurationCommandInput extends CompareDomainConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link CompareDomainConfigurationCommand}.
 */
export interface CompareDomainConfigurationCommandOutput extends CompareDomainConfigurationResponse, __MetadataBearer {}

/**
 * <p>Compares the metadata of two domains and reports where they differ. Use this operation to
 *   check that a secondary domain is configured consistently with its primary before you rely on
 *   it, because replication copies index data but does not copy domain metadata such as index
 *   templates, ingest pipelines, or security roles.</p>
 *          <p>You choose which categories to compare. The response reports, for each category, how many
 *   items match, how many exist on only one domain, and which fields diverge.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, CompareDomainConfigurationCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, CompareDomainConfigurationCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * // import type { OpenSearchClientConfig } from "@aws-sdk/client-opensearch";
 * const config = {}; // type is OpenSearchClientConfig
 * const client = new OpenSearchClient(config);
 * const input = { // CompareDomainConfigurationRequest
 *   SourceDomainArn: "STRING_VALUE", // required
 *   TargetDomainArn: "STRING_VALUE", // required
 *   Categories: [ // MetadataCategoryList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new CompareDomainConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // CompareDomainConfigurationResponse
 * //   SourceDomainArn: "STRING_VALUE",
 * //   TargetDomainArn: "STRING_VALUE",
 * //   Categories: { // CompareDomainConfigurationCategoryMap
 * //     "<keys>": { // CategoryDiffResult
 * //       Status: "compared" || "error",
 * //       InSync: Number("int"),
 * //       SourceOnly: Number("int"),
 * //       TargetOnly: Number("int"),
 * //       Diverged: Number("int"),
 * //       Items: { // DiffItems
 * //         SourceOnly: [ // DiffItemNameList
 * //           "STRING_VALUE",
 * //         ],
 * //         TargetOnly: [
 * //           "STRING_VALUE",
 * //         ],
 * //         Diverged: [ // DivergentItemList
 * //           { // DivergentItem
 * //             Name: "STRING_VALUE",
 * //             Fields: [ // DivergentFieldList
 * //               { // DivergentField
 * //                 Path: "STRING_VALUE",
 * //                 SourceValue: "STRING_VALUE",
 * //                 TargetValue: "STRING_VALUE",
 * //                 Policy: "redacted",
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //       Truncated: true || false,
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CompareDomainConfigurationCommandInput - {@link CompareDomainConfigurationCommandInput}
 * @returns {@link CompareDomainConfigurationCommandOutput}
 * @see {@link CompareDomainConfigurationCommandInput} for command's `input` shape.
 * @see {@link CompareDomainConfigurationCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
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
export class CompareDomainConfigurationCommand extends command<CompareDomainConfigurationCommandInput, CompareDomainConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "CompareDomainConfiguration",
  CompareDomainConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CompareDomainConfigurationRequest;
      output: CompareDomainConfigurationResponse;
    };
    sdk: {
      input: CompareDomainConfigurationCommandInput;
      output: CompareDomainConfigurationCommandOutput;
    };
  };
}
