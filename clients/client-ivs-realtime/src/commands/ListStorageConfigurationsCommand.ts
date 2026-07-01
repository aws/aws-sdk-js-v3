// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListStorageConfigurationsRequest, ListStorageConfigurationsResponse } from "../models/models_0";
import { ListStorageConfigurations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * // import type { IVSRealTimeClientConfig } from "@aws-sdk/client-ivs-realtime";
 * const config = {}; // type is IVSRealTimeClientConfig
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
 *
 * @public
 */
export class ListStorageConfigurationsCommand extends command<ListStorageConfigurationsCommandInput, ListStorageConfigurationsCommandOutput>(
  _ep0,
  _mw0,
  "ListStorageConfigurations",
  ListStorageConfigurations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListStorageConfigurationsRequest;
      output: ListStorageConfigurationsResponse;
    };
    sdk: {
      input: ListStorageConfigurationsCommandInput;
      output: ListStorageConfigurationsCommandOutput;
    };
  };
}
