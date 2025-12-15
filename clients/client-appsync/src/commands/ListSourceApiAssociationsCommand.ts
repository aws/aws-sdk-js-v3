// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListSourceApiAssociationsRequest, ListSourceApiAssociationsResponse } from "../models/models_0";
import { ListSourceApiAssociations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Lists the <code>SourceApiAssociationSummary</code> data.</p>
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
 *  <p>The request is not well formed. For example, a value is invalid or a required field is
 *          missing. Check the field values, and then try again.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal AppSync error occurred. Try your request again.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource specified in the request was not found. Check the resource, and then try
 *          again.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You aren't authorized to perform this operation.</p>
 *
 * @throws {@link AppSyncServiceException}
 * <p>Base exception class for all service exceptions from AppSync service.</p>
 *
 *
 * @public
 */
export class ListSourceApiAssociationsCommand extends $Command
  .classBuilder<
    ListSourceApiAssociationsCommandInput,
    ListSourceApiAssociationsCommandOutput,
    AppSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppSyncClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSDeepdishControlPlaneService", "ListSourceApiAssociations", {})
  .n("AppSyncClient", "ListSourceApiAssociationsCommand")
  .sc(ListSourceApiAssociations$)
  .build() {
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
