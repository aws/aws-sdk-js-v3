// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetAWSOrganizationsAccessStatusInput, GetAWSOrganizationsAccessStatusOutput } from "../models/models_0";
import { GetAWSOrganizationsAccessStatus } from "../schemas/schemas_11_Portfolio";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAWSOrganizationsAccessStatusCommand}.
 */
export interface GetAWSOrganizationsAccessStatusCommandInput extends GetAWSOrganizationsAccessStatusInput {}
/**
 * @public
 *
 * The output of {@link GetAWSOrganizationsAccessStatusCommand}.
 */
export interface GetAWSOrganizationsAccessStatusCommandOutput
  extends GetAWSOrganizationsAccessStatusOutput,
    __MetadataBearer {}

/**
 * <p>Get the Access Status for Organizations portfolio share feature. This API can only be
 *          called by the management account in the organization or by a delegated admin.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, GetAWSOrganizationsAccessStatusCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, GetAWSOrganizationsAccessStatusCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // import type { ServiceCatalogClientConfig } from "@aws-sdk/client-service-catalog";
 * const config = {}; // type is ServiceCatalogClientConfig
 * const client = new ServiceCatalogClient(config);
 * const input = {};
 * const command = new GetAWSOrganizationsAccessStatusCommand(input);
 * const response = await client.send(command);
 * // { // GetAWSOrganizationsAccessStatusOutput
 * //   AccessStatus: "ENABLED" || "UNDER_CHANGE" || "DISABLED",
 * // };
 *
 * ```
 *
 * @param GetAWSOrganizationsAccessStatusCommandInput - {@link GetAWSOrganizationsAccessStatusCommandInput}
 * @returns {@link GetAWSOrganizationsAccessStatusCommandOutput}
 * @see {@link GetAWSOrganizationsAccessStatusCommandInput} for command's `input` shape.
 * @see {@link GetAWSOrganizationsAccessStatusCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *  <p>The operation is not supported.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ServiceCatalogServiceException}
 * <p>Base exception class for all service exceptions from ServiceCatalog service.</p>
 *
 *
 * @public
 */
export class GetAWSOrganizationsAccessStatusCommand extends $Command
  .classBuilder<
    GetAWSOrganizationsAccessStatusCommandInput,
    GetAWSOrganizationsAccessStatusCommandOutput,
    ServiceCatalogClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceCatalogClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWS242ServiceCatalogService", "GetAWSOrganizationsAccessStatus", {})
  .n("ServiceCatalogClient", "GetAWSOrganizationsAccessStatusCommand")
  .sc(GetAWSOrganizationsAccessStatus)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetAWSOrganizationsAccessStatusOutput;
    };
    sdk: {
      input: GetAWSOrganizationsAccessStatusCommandInput;
      output: GetAWSOrganizationsAccessStatusCommandOutput;
    };
  };
}
