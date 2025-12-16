// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListReadSetsRequest, ListReadSetsResponse } from "../models/models_0";
import type { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { ListReadSets$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListReadSetsCommand}.
 */
export interface ListReadSetsCommandInput extends ListReadSetsRequest {}
/**
 * @public
 *
 * The output of {@link ListReadSetsCommand}.
 */
export interface ListReadSetsCommandOutput extends ListReadSetsResponse, __MetadataBearer {}

/**
 * <p>Retrieves a list of read sets from a sequence store ID and returns the metadata in JSON format.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, ListReadSetsCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, ListReadSetsCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // ListReadSetsRequest
 *   sequenceStoreId: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   filter: { // ReadSetFilter
 *     name: "STRING_VALUE",
 *     status: "STRING_VALUE",
 *     referenceArn: "STRING_VALUE",
 *     createdAfter: new Date("TIMESTAMP"),
 *     createdBefore: new Date("TIMESTAMP"),
 *     sampleId: "STRING_VALUE",
 *     subjectId: "STRING_VALUE",
 *     generatedFrom: "STRING_VALUE",
 *     creationType: "STRING_VALUE",
 *   },
 * };
 * const command = new ListReadSetsCommand(input);
 * const response = await client.send(command);
 * // { // ListReadSetsResponse
 * //   nextToken: "STRING_VALUE",
 * //   readSets: [ // ReadSetList // required
 * //     { // ReadSetListItem
 * //       id: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       sequenceStoreId: "STRING_VALUE", // required
 * //       subjectId: "STRING_VALUE",
 * //       sampleId: "STRING_VALUE",
 * //       status: "STRING_VALUE", // required
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       referenceArn: "STRING_VALUE",
 * //       fileType: "STRING_VALUE", // required
 * //       sequenceInformation: { // SequenceInformation
 * //         totalReadCount: Number("long"),
 * //         totalBaseCount: Number("long"),
 * //         generatedFrom: "STRING_VALUE",
 * //         alignment: "STRING_VALUE",
 * //       },
 * //       creationTime: new Date("TIMESTAMP"), // required
 * //       statusMessage: "STRING_VALUE",
 * //       creationType: "STRING_VALUE",
 * //       etag: { // ETag
 * //         algorithm: "STRING_VALUE",
 * //         source1: "STRING_VALUE",
 * //         source2: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListReadSetsCommandInput - {@link ListReadSetsCommandInput}
 * @returns {@link ListReadSetsCommandOutput}
 * @see {@link ListReadSetsCommandInput} for command's `input` shape.
 * @see {@link ListReadSetsCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred. Try the request again.</p>
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *  <p>The request timed out.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The target resource was not found in the current Region.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link OmicsServiceException}
 * <p>Base exception class for all service exceptions from Omics service.</p>
 *
 *
 * @public
 */
export class ListReadSetsCommand extends $Command
  .classBuilder<
    ListReadSetsCommandInput,
    ListReadSetsCommandOutput,
    OmicsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OmicsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Omics", "ListReadSets", {})
  .n("OmicsClient", "ListReadSetsCommand")
  .sc(ListReadSets$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListReadSetsRequest;
      output: ListReadSetsResponse;
    };
    sdk: {
      input: ListReadSetsCommandInput;
      output: ListReadSetsCommandOutput;
    };
  };
}
