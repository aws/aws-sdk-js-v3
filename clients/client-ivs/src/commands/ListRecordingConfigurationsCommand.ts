// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListRecordingConfigurationsRequest, ListRecordingConfigurationsResponse } from "../models/models_0";
import { ListRecordingConfigurations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListRecordingConfigurationsCommand}.
 */
export interface ListRecordingConfigurationsCommandInput extends ListRecordingConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListRecordingConfigurationsCommand}.
 */
export interface ListRecordingConfigurationsCommandOutput extends ListRecordingConfigurationsResponse, __MetadataBearer {}

/**
 * <p>Gets summary information about all recording configurations in your account, in the Amazon Web Services region where the API request is processed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, ListRecordingConfigurationsCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, ListRecordingConfigurationsCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * // import type { IvsClientConfig } from "@aws-sdk/client-ivs";
 * const config = {}; // type is IvsClientConfig
 * const client = new IvsClient(config);
 * const input = { // ListRecordingConfigurationsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListRecordingConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListRecordingConfigurationsResponse
 * //   recordingConfigurations: [ // RecordingConfigurationList // required
 * //     { // RecordingConfigurationSummary
 * //       arn: "STRING_VALUE", // required
 * //       name: "STRING_VALUE",
 * //       destinationConfiguration: { // DestinationConfiguration
 * //         s3: { // S3DestinationConfiguration
 * //           bucketName: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       state: "STRING_VALUE", // required
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
 * @param ListRecordingConfigurationsCommandInput - {@link ListRecordingConfigurationsCommandInput}
 * @returns {@link ListRecordingConfigurationsCommandOutput}
 * @see {@link ListRecordingConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListRecordingConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for IvsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link IvsServiceException}
 * <p>Base exception class for all service exceptions from Ivs service.</p>
 *
 *
 * @public
 */
export class ListRecordingConfigurationsCommand extends command<ListRecordingConfigurationsCommandInput, ListRecordingConfigurationsCommandOutput>(
  _ep0,
  _mw0,
  "ListRecordingConfigurations",
  ListRecordingConfigurations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRecordingConfigurationsRequest;
      output: ListRecordingConfigurationsResponse;
    };
    sdk: {
      input: ListRecordingConfigurationsCommandInput;
      output: ListRecordingConfigurationsCommandOutput;
    };
  };
}
