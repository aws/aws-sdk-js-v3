// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { ListMLTransformsRequest, ListMLTransformsResponse } from "../models/models_2";
import { de_ListMLTransformsCommand, se_ListMLTransformsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListMLTransformsCommand}.
 */
export interface ListMLTransformsCommandInput extends ListMLTransformsRequest {}
/**
 * @public
 *
 * The output of {@link ListMLTransformsCommand}.
 */
export interface ListMLTransformsCommandOutput extends ListMLTransformsResponse, __MetadataBearer {}

/**
 * <p> Retrieves a sortable, filterable list of existing Glue machine learning transforms in this Amazon Web Services account,
 *        or the resources with the specified tag. This operation takes the optional <code>Tags</code> field, which you can use as
 *        a filter of the responses so that tagged resources can be retrieved as a group. If you choose to use tag
 *        filtering, only resources with the tags are retrieved.
 *      </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, ListMLTransformsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, ListMLTransformsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // ListMLTransformsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Filter: { // TransformFilterCriteria
 *     Name: "STRING_VALUE",
 *     TransformType: "FIND_MATCHES",
 *     Status: "NOT_READY" || "READY" || "DELETING",
 *     GlueVersion: "STRING_VALUE",
 *     CreatedBefore: new Date("TIMESTAMP"),
 *     CreatedAfter: new Date("TIMESTAMP"),
 *     LastModifiedBefore: new Date("TIMESTAMP"),
 *     LastModifiedAfter: new Date("TIMESTAMP"),
 *     Schema: [ // TransformSchema
 *       { // SchemaColumn
 *         Name: "STRING_VALUE",
 *         DataType: "STRING_VALUE",
 *       },
 *     ],
 *   },
 *   Sort: { // TransformSortCriteria
 *     Column: "NAME" || "TRANSFORM_TYPE" || "STATUS" || "CREATED" || "LAST_MODIFIED", // required
 *     SortDirection: "DESCENDING" || "ASCENDING", // required
 *   },
 *   Tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new ListMLTransformsCommand(input);
 * const response = await client.send(command);
 * // { // ListMLTransformsResponse
 * //   TransformIds: [ // TransformIdList // required
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMLTransformsCommandInput - {@link ListMLTransformsCommandInput}
 * @returns {@link ListMLTransformsCommandOutput}
 * @see {@link ListMLTransformsCommandInput} for command's `input` shape.
 * @see {@link ListMLTransformsCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class ListMLTransformsCommand extends $Command
  .classBuilder<
    ListMLTransformsCommandInput,
    ListMLTransformsCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "ListMLTransforms", {})
  .n("GlueClient", "ListMLTransformsCommand")
  .f(void 0, void 0)
  .ser(se_ListMLTransformsCommand)
  .de(de_ListMLTransformsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMLTransformsRequest;
      output: ListMLTransformsResponse;
    };
    sdk: {
      input: ListMLTransformsCommandInput;
      output: ListMLTransformsCommandOutput;
    };
  };
}
