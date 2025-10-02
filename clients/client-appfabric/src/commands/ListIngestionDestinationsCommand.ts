// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AppFabricClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppFabricClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListIngestionDestinationsRequest, ListIngestionDestinationsResponse } from "../models/models_0";
import { de_ListIngestionDestinationsCommand, se_ListIngestionDestinationsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListIngestionDestinationsCommand}.
 */
export interface ListIngestionDestinationsCommandInput extends ListIngestionDestinationsRequest {}
/**
 * @public
 *
 * The output of {@link ListIngestionDestinationsCommand}.
 */
export interface ListIngestionDestinationsCommandOutput extends ListIngestionDestinationsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of all ingestion destinations configured for an ingestion.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppFabricClient, ListIngestionDestinationsCommand } from "@aws-sdk/client-appfabric"; // ES Modules import
 * // const { AppFabricClient, ListIngestionDestinationsCommand } = require("@aws-sdk/client-appfabric"); // CommonJS import
 * // import type { AppFabricClientConfig } from "@aws-sdk/client-appfabric";
 * const config = {}; // type is AppFabricClientConfig
 * const client = new AppFabricClient(config);
 * const input = { // ListIngestionDestinationsRequest
 *   appBundleIdentifier: "STRING_VALUE", // required
 *   ingestionIdentifier: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListIngestionDestinationsCommand(input);
 * const response = await client.send(command);
 * // { // ListIngestionDestinationsResponse
 * //   ingestionDestinations: [ // IngestionDestinationList // required
 * //     { // IngestionDestinationSummary
 * //       arn: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListIngestionDestinationsCommandInput - {@link ListIngestionDestinationsCommandInput}
 * @returns {@link ListIngestionDestinationsCommandOutput}
 * @see {@link ListIngestionDestinationsCommandInput} for command's `input` shape.
 * @see {@link ListIngestionDestinationsCommandOutput} for command's `response` shape.
 * @see {@link AppFabricClientResolvedConfig | config} for AppFabricClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You are not authorized to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure
 *          with an internal server.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request rate exceeds the limit.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has invalid or missing parameters.</p>
 *
 * @throws {@link AppFabricServiceException}
 * <p>Base exception class for all service exceptions from AppFabric service.</p>
 *
 *
 * @public
 */
export class ListIngestionDestinationsCommand extends $Command
  .classBuilder<
    ListIngestionDestinationsCommandInput,
    ListIngestionDestinationsCommandOutput,
    AppFabricClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppFabricClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("FabricFrontEndService", "ListIngestionDestinations", {})
  .n("AppFabricClient", "ListIngestionDestinationsCommand")
  .f(void 0, void 0)
  .ser(se_ListIngestionDestinationsCommand)
  .de(de_ListIngestionDestinationsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListIngestionDestinationsRequest;
      output: ListIngestionDestinationsResponse;
    };
    sdk: {
      input: ListIngestionDestinationsCommandInput;
      output: ListIngestionDestinationsCommandOutput;
    };
  };
}
