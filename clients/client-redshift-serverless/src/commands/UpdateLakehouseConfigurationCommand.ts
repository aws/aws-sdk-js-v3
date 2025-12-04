// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateLakehouseConfigurationRequest, UpdateLakehouseConfigurationResponse } from "../models/models_0";
import type {
  RedshiftServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RedshiftServerlessClient";
import { UpdateLakehouseConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateLakehouseConfigurationCommand}.
 */
export interface UpdateLakehouseConfigurationCommandInput extends UpdateLakehouseConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLakehouseConfigurationCommand}.
 */
export interface UpdateLakehouseConfigurationCommandOutput
  extends UpdateLakehouseConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Modifies the lakehouse configuration for a namespace. This operation allows you to manage Amazon Redshift federated permissions and Amazon Web Services IAM Identity Center trusted identity propagation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, UpdateLakehouseConfigurationCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, UpdateLakehouseConfigurationCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * // import type { RedshiftServerlessClientConfig } from "@aws-sdk/client-redshift-serverless";
 * const config = {}; // type is RedshiftServerlessClientConfig
 * const client = new RedshiftServerlessClient(config);
 * const input = { // UpdateLakehouseConfigurationRequest
 *   namespaceName: "STRING_VALUE", // required
 *   lakehouseRegistration: "STRING_VALUE",
 *   catalogName: "STRING_VALUE",
 *   lakehouseIdcRegistration: "STRING_VALUE",
 *   lakehouseIdcApplicationArn: "STRING_VALUE",
 *   dryRun: true || false,
 * };
 * const command = new UpdateLakehouseConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateLakehouseConfigurationResponse
 * //   namespaceName: "STRING_VALUE",
 * //   lakehouseIdcApplicationArn: "STRING_VALUE",
 * //   lakehouseRegistrationStatus: "STRING_VALUE",
 * //   catalogArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateLakehouseConfigurationCommandInput - {@link UpdateLakehouseConfigurationCommandInput}
 * @returns {@link UpdateLakehouseConfigurationCommandOutput}
 * @see {@link UpdateLakehouseConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateLakehouseConfigurationCommandOutput} for command's `response` shape.
 * @see {@link RedshiftServerlessClientResolvedConfig | config} for RedshiftServerlessClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The submitted action has conflicts.</p>
 *
 * @throws {@link DryRunException} (client fault)
 *  <p>This exception is thrown when the request was successful, but dry run was enabled so no action was taken.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link RedshiftServerlessServiceException}
 * <p>Base exception class for all service exceptions from RedshiftServerless service.</p>
 *
 *
 * @public
 */
export class UpdateLakehouseConfigurationCommand extends $Command
  .classBuilder<
    UpdateLakehouseConfigurationCommandInput,
    UpdateLakehouseConfigurationCommandOutput,
    RedshiftServerlessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftServerlessClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServerless", "UpdateLakehouseConfiguration", {})
  .n("RedshiftServerlessClient", "UpdateLakehouseConfigurationCommand")
  .sc(UpdateLakehouseConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateLakehouseConfigurationRequest;
      output: UpdateLakehouseConfigurationResponse;
    };
    sdk: {
      input: UpdateLakehouseConfigurationCommandInput;
      output: UpdateLakehouseConfigurationCommandOutput;
    };
  };
}
