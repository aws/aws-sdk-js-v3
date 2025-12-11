// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListTypesRequest, ListTypesResponse } from "../models/models_0";
import { ListTypes } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListTypesCommand}.
 */
export interface ListTypesCommandInput extends ListTypesRequest {}
/**
 * @public
 *
 * The output of {@link ListTypesCommand}.
 */
export interface ListTypesCommandOutput extends ListTypesResponse, __MetadataBearer {}

/**
 * <p>Lists the types for a given API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, ListTypesCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, ListTypesCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * // import type { AppSyncClientConfig } from "@aws-sdk/client-appsync";
 * const config = {}; // type is AppSyncClientConfig
 * const client = new AppSyncClient(config);
 * const input = { // ListTypesRequest
 *   apiId: "STRING_VALUE", // required
 *   format: "SDL" || "JSON", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListTypesCommand(input);
 * const response = await client.send(command);
 * // { // ListTypesResponse
 * //   types: [ // TypeList
 * //     { // Type
 * //       name: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       definition: "STRING_VALUE",
 * //       format: "SDL" || "JSON",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListTypesCommandInput - {@link ListTypesCommandInput}
 * @returns {@link ListTypesCommandOutput}
 * @see {@link ListTypesCommandInput} for command's `input` shape.
 * @see {@link ListTypesCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is not well formed. For example, a value is invalid or a required field is
 *          missing. Check the field values, and then try again.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Another modification is in progress at this time and it must complete before you can
 *          make your change.</p>
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
export class ListTypesCommand extends $Command
  .classBuilder<
    ListTypesCommandInput,
    ListTypesCommandOutput,
    AppSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppSyncClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSDeepdishControlPlaneService", "ListTypes", {})
  .n("AppSyncClient", "ListTypesCommand")
  .sc(ListTypes)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListTypesRequest;
      output: ListTypesResponse;
    };
    sdk: {
      input: ListTypesCommandInput;
      output: ListTypesCommandOutput;
    };
  };
}
