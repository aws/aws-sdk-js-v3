// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IVSRealTimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IVSRealTimeClient";
import type { DeleteStorageConfigurationRequest, DeleteStorageConfigurationResponse } from "../models/models_0";
import { DeleteStorageConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteStorageConfigurationCommand}.
 */
export interface DeleteStorageConfigurationCommandInput extends DeleteStorageConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteStorageConfigurationCommand}.
 */
export interface DeleteStorageConfigurationCommandOutput extends DeleteStorageConfigurationResponse, __MetadataBearer {}

/**
 * <p>Deletes the storage configuration for the specified ARN.</p>
 *          <p>If you try to delete a storage configuration that is used by a Composition, you will get an error (409 ConflictException).
 * 	  To avoid this, for all Compositions that reference the storage configuration, first use <a>StopComposition</a> and wait for it to complete,
 * 	  then use DeleteStorageConfiguration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IVSRealTimeClient, DeleteStorageConfigurationCommand } from "@aws-sdk/client-ivs-realtime"; // ES Modules import
 * // const { IVSRealTimeClient, DeleteStorageConfigurationCommand } = require("@aws-sdk/client-ivs-realtime"); // CommonJS import
 * // import type { IVSRealTimeClientConfig } from "@aws-sdk/client-ivs-realtime";
 * const config = {}; // type is IVSRealTimeClientConfig
 * const client = new IVSRealTimeClient(config);
 * const input = { // DeleteStorageConfigurationRequest
 *   arn: "STRING_VALUE", // required
 * };
 * const command = new DeleteStorageConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteStorageConfigurationCommandInput - {@link DeleteStorageConfigurationCommandInput}
 * @returns {@link DeleteStorageConfigurationCommandOutput}
 * @see {@link DeleteStorageConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteStorageConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IVSRealTimeClientResolvedConfig | config} for IVSRealTimeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p/>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p/>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p/>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p/>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link IVSRealTimeServiceException}
 * <p>Base exception class for all service exceptions from IVSRealTime service.</p>
 *
 *
 * @public
 */
export class DeleteStorageConfigurationCommand extends $Command
  .classBuilder<
    DeleteStorageConfigurationCommandInput,
    DeleteStorageConfigurationCommandOutput,
    IVSRealTimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IVSRealTimeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonInteractiveVideoServiceRealTime", "DeleteStorageConfiguration", {})
  .n("IVSRealTimeClient", "DeleteStorageConfigurationCommand")
  .sc(DeleteStorageConfiguration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteStorageConfigurationRequest;
      output: {};
    };
    sdk: {
      input: DeleteStorageConfigurationCommandInput;
      output: DeleteStorageConfigurationCommandOutput;
    };
  };
}
