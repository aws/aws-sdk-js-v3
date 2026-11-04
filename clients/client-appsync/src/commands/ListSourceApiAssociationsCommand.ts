// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListSourceApiAssociationsRequest, ListSourceApiAssociationsResponse } from "../models/models_0";
import { ListSourceApiAssociations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListSourceApiAssociationsCommand}.
 */
export interface ListSourceApiAssociationsCommandInput extends ListSourceApiAssociationsRequest {}
/**
 * @public
 *
 * The output of {@link ListSourceApiAssociationsCommand}.
 */
export interface ListSourceApiAssociationsCommandOutput extends ListSourceApiAssociationsResponse, __MetadataBearer {}

/**
 * Lists the `SourceApiAssociationSummary` data.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, ListSourceApiAssociationsCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, ListSourceApiAssociationsCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * // import type { AppSyncClientConfig } from "@aws-sdk/client-appsync";
 * const config = {}; // type is AppSyncClientConfig
 * const client = new AppSyncClient(config);
 * const input = { // ListSourceApiAssociationsRequest
 *   apiId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListSourceApiAssociationsCommand(input);
 * const response = await client.send(command);
 * // { // ListSourceApiAssociationsResponse
 * //   sourceApiAssociationSummaries: [ // SourceApiAssociationSummaryList
 * //     { // SourceApiAssociationSummary
 * //       associationId: "STRING_VALUE",
 * //       associationArn: "STRING_VALUE",
 * //       sourceApiId: "STRING_VALUE",
 * //       sourceApiArn: "STRING_VALUE",
 * //       mergedApiId: "STRING_VALUE",
 * //       mergedApiArn: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSourceApiAssociationsCommandInput - {@link ListSourceApiAssociationsCommandInput}
 * @returns {@link ListSourceApiAssociationsCommandOutput}
 * @see {@link ListSourceApiAssociationsCommandInput} for command's `input` shape.
 * @see {@link ListSourceApiAssociationsCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and then try again.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An internal AppSync error occurred. Try your request again.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The resource specified in the request was not found. Check the resource, and then try again.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * You aren't authorized to perform this operation.
 *
 * @throws {@link AppSyncServiceException}
 *
 * Base exception class for all service exceptions from AppSync service.
 *
 * @public
 */
export class ListSourceApiAssociationsCommand extends command<ListSourceApiAssociationsCommandInput, ListSourceApiAssociationsCommandOutput>(
  _ep0,
  _mw0,
  "ListSourceApiAssociations",
  ListSourceApiAssociations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSourceApiAssociationsRequest;
      output: ListSourceApiAssociationsResponse;
    };
    sdk: {
      input: ListSourceApiAssociationsCommandInput;
      output: ListSourceApiAssociationsCommandOutput;
    };
  };
}
