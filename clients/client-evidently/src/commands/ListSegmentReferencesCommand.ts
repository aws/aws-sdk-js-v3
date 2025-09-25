// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { EvidentlyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EvidentlyClient";
import { ListSegmentReferencesRequest, ListSegmentReferencesResponse } from "../models/models_0";
import { ListSegmentReferences } from "../schemas/schemas_3_Launch";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSegmentReferencesCommand}.
 */
export interface ListSegmentReferencesCommandInput extends ListSegmentReferencesRequest {}
/**
 * @public
 *
 * The output of {@link ListSegmentReferencesCommand}.
 */
export interface ListSegmentReferencesCommandOutput extends ListSegmentReferencesResponse, __MetadataBearer {}

/**
 * <p>Use this operation to find which experiments or launches are using a specified segment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EvidentlyClient, ListSegmentReferencesCommand } from "@aws-sdk/client-evidently"; // ES Modules import
 * // const { EvidentlyClient, ListSegmentReferencesCommand } = require("@aws-sdk/client-evidently"); // CommonJS import
 * // import type { EvidentlyClientConfig } from "@aws-sdk/client-evidently";
 * const config = {}; // type is EvidentlyClientConfig
 * const client = new EvidentlyClient(config);
 * const input = { // ListSegmentReferencesRequest
 *   segment: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   type: "STRING_VALUE", // required
 * };
 * const command = new ListSegmentReferencesCommand(input);
 * const response = await client.send(command);
 * // { // ListSegmentReferencesResponse
 * //   referencedBy: [ // RefResourceList
 * //     { // RefResource
 * //       name: "STRING_VALUE", // required
 * //       type: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       startTime: "STRING_VALUE",
 * //       endTime: "STRING_VALUE",
 * //       lastUpdatedOn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSegmentReferencesCommandInput - {@link ListSegmentReferencesCommandInput}
 * @returns {@link ListSegmentReferencesCommandOutput}
 * @see {@link ListSegmentReferencesCommandInput} for command's `input` shape.
 * @see {@link ListSegmentReferencesCommandOutput} for command's `response` shape.
 * @see {@link EvidentlyClientResolvedConfig | config} for EvidentlyClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling. Retry the request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The value of a parameter in the request caused an error.</p>
 *
 * @throws {@link EvidentlyServiceException}
 * <p>Base exception class for all service exceptions from Evidently service.</p>
 *
 *
 * @public
 */
export class ListSegmentReferencesCommand extends $Command
  .classBuilder<
    ListSegmentReferencesCommandInput,
    ListSegmentReferencesCommandOutput,
    EvidentlyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EvidentlyClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Evidently", "ListSegmentReferences", {})
  .n("EvidentlyClient", "ListSegmentReferencesCommand")
  .sc(ListSegmentReferences)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSegmentReferencesRequest;
      output: ListSegmentReferencesResponse;
    };
    sdk: {
      input: ListSegmentReferencesCommandInput;
      output: ListSegmentReferencesCommandOutput;
    };
  };
}
