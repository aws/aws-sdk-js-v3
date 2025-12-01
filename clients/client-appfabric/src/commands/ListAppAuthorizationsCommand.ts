// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AppFabricClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppFabricClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListAppAuthorizationsRequest, ListAppAuthorizationsResponse } from "../models/models_0";
import { ListAppAuthorizations } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAppAuthorizationsCommand}.
 */
export interface ListAppAuthorizationsCommandInput extends ListAppAuthorizationsRequest {}
/**
 * @public
 *
 * The output of {@link ListAppAuthorizationsCommand}.
 */
export interface ListAppAuthorizationsCommandOutput extends ListAppAuthorizationsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of all app authorizations configured for an app bundle.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppFabricClient, ListAppAuthorizationsCommand } from "@aws-sdk/client-appfabric"; // ES Modules import
 * // const { AppFabricClient, ListAppAuthorizationsCommand } = require("@aws-sdk/client-appfabric"); // CommonJS import
 * // import type { AppFabricClientConfig } from "@aws-sdk/client-appfabric";
 * const config = {}; // type is AppFabricClientConfig
 * const client = new AppFabricClient(config);
 * const input = { // ListAppAuthorizationsRequest
 *   appBundleIdentifier: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListAppAuthorizationsCommand(input);
 * const response = await client.send(command);
 * // { // ListAppAuthorizationsResponse
 * //   appAuthorizationSummaryList: [ // AppAuthorizationSummaryList // required
 * //     { // AppAuthorizationSummary
 * //       appAuthorizationArn: "STRING_VALUE", // required
 * //       appBundleArn: "STRING_VALUE", // required
 * //       app: "STRING_VALUE", // required
 * //       tenant: { // Tenant
 * //         tenantIdentifier: "STRING_VALUE", // required
 * //         tenantDisplayName: "STRING_VALUE", // required
 * //       },
 * //       status: "PendingConnect" || "Connected" || "ConnectionValidationFailed" || "TokenAutoRotationFailed", // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAppAuthorizationsCommandInput - {@link ListAppAuthorizationsCommandInput}
 * @returns {@link ListAppAuthorizationsCommandOutput}
 * @see {@link ListAppAuthorizationsCommandInput} for command's `input` shape.
 * @see {@link ListAppAuthorizationsCommandOutput} for command's `response` shape.
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
export class ListAppAuthorizationsCommand extends $Command
  .classBuilder<
    ListAppAuthorizationsCommandInput,
    ListAppAuthorizationsCommandOutput,
    AppFabricClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppFabricClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("FabricFrontEndService", "ListAppAuthorizations", {})
  .n("AppFabricClient", "ListAppAuthorizationsCommand")
  .sc(ListAppAuthorizations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAppAuthorizationsRequest;
      output: ListAppAuthorizationsResponse;
    };
    sdk: {
      input: ListAppAuthorizationsCommandInput;
      output: ListAppAuthorizationsCommandOutput;
    };
  };
}
