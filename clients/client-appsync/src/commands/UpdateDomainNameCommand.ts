// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateDomainNameRequest, UpdateDomainNameResponse } from "../models/models_0";
import { UpdateDomainName } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDomainNameCommand}.
 */
export interface UpdateDomainNameCommandInput extends UpdateDomainNameRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDomainNameCommand}.
 */
export interface UpdateDomainNameCommandOutput extends UpdateDomainNameResponse, __MetadataBearer {}

/**
 * <p>Updates a custom <code>DomainName</code> object.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, UpdateDomainNameCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, UpdateDomainNameCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * // import type { AppSyncClientConfig } from "@aws-sdk/client-appsync";
 * const config = {}; // type is AppSyncClientConfig
 * const client = new AppSyncClient(config);
 * const input = { // UpdateDomainNameRequest
 *   domainName: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 * };
 * const command = new UpdateDomainNameCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDomainNameResponse
 * //   domainNameConfig: { // DomainNameConfig
 * //     domainName: "STRING_VALUE",
 * //     description: "STRING_VALUE",
 * //     certificateArn: "STRING_VALUE",
 * //     appsyncDomainName: "STRING_VALUE",
 * //     hostedZoneId: "STRING_VALUE",
 * //     tags: { // TagMap
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     domainNameArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateDomainNameCommandInput - {@link UpdateDomainNameCommandInput}
 * @returns {@link UpdateDomainNameCommandOutput}
 * @see {@link UpdateDomainNameCommandInput} for command's `input` shape.
 * @see {@link UpdateDomainNameCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to perform this operation on this resource.</p>
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
 * @throws {@link AppSyncServiceException}
 * <p>Base exception class for all service exceptions from AppSync service.</p>
 *
 *
 * @public
 */
export class UpdateDomainNameCommand extends $Command
  .classBuilder<
    UpdateDomainNameCommandInput,
    UpdateDomainNameCommandOutput,
    AppSyncClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AppSyncClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSDeepdishControlPlaneService", "UpdateDomainName", {})
  .n("AppSyncClient", "UpdateDomainNameCommand")
  .sc(UpdateDomainName)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDomainNameRequest;
      output: UpdateDomainNameResponse;
    };
    sdk: {
      input: UpdateDomainNameCommandInput;
      output: UpdateDomainNameCommandOutput;
    };
  };
}
