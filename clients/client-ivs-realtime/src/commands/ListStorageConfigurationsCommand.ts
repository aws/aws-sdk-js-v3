// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IVSRealTimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IVSRealTimeClient";
import { ListStorageConfigurationsRequest, ListStorageConfigurationsResponse } from "../models/models_0";
import { de_ListStorageConfigurationsCommand, se_ListStorageConfigurationsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListStorageConfigurationsCommand}.
 */
export interface ListStorageConfigurationsCommandInput extends ListStorageConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListStorageConfigurationsCommand}.
 */
export interface ListStorageConfigurationsCommandOutput extends ListStorageConfigurationsResponse, __MetadataBearer {}

/**
 * <p>Gets summary information about all storage configurations in your account,
 * 	  in the AWS region where the API request is processed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IVSRealTimeClient, ListStorageConfigurationsCommand } from "@aws-sdk/client-ivs-realtime"; // ES Modules import
 * // const { IVSRealTimeClient, ListStorageConfigurationsCommand } = require("@aws-sdk/client-ivs-realtime"); // CommonJS import
 * const client = new IVSRealTimeClient(config);
 * const input = { // ListStorageConfigurationsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListStorageConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListStorageConfigurationsResponse
 * //   storageConfigurations: [ // StorageConfigurationSummaryList // required
 * //     { // StorageConfigurationSummary
 * //       arn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE",
 * //       s3: { // S3StorageConfiguration
 * //         bucketName: "STRING_VALUE", // required
 * //       },
 * //       tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListStorageConfigurationsCommandInput - {@link ListStorageConfigurationsCommandInput}
 * @returns {@link ListStorageConfigurationsCommandOutput}
 * @see {@link ListStorageConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListStorageConfigurationsCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p/>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p/>
 *
 * @throws {@link IVSRealTimeServiceException}
 * <p>Base exception class for all service exceptions from IVSRealTime service.</p>
 *
 * @public
 */
export class ListStorageConfigurationsCommand extends $Command
  .classBuilder<
    ListStorageConfigurationsCommandInput,
    ListStorageConfigurationsCommandOutput,
    IVSRealTimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IVSRealTimeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonInteractiveVideoServiceRealTime", "ListStorageConfigurations", {})
  .n("IVSRealTimeClient", "ListStorageConfigurationsCommand")
  .f(void 0, void 0)
  .ser(se_ListStorageConfigurationsCommand)
  .de(de_ListStorageConfigurationsCommand)
  .build() {}
