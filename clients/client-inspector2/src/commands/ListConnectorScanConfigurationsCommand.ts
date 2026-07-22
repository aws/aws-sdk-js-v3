// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListConnectorScanConfigurationsRequest,
  ListConnectorScanConfigurationsResponse,
} from "../models/models_1";
import { ListConnectorScanConfigurations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListConnectorScanConfigurationsCommand}.
 */
export interface ListConnectorScanConfigurationsCommandInput extends ListConnectorScanConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link ListConnectorScanConfigurationsCommand}.
 */
export interface ListConnectorScanConfigurationsCommandOutput extends ListConnectorScanConfigurationsResponse, __MetadataBearer {}

/**
 * <p>Lists scan configurations for Amazon Web Services Config connectors. Results are paginated. Use the <code>nextToken</code> parameter to retrieve the next page of results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, ListConnectorScanConfigurationsCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, ListConnectorScanConfigurationsCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * // import type { Inspector2ClientConfig } from "@aws-sdk/client-inspector2";
 * const config = {}; // type is Inspector2ClientConfig
 * const client = new Inspector2Client(config);
 * const input = { // ListConnectorScanConfigurationsRequest
 *   awsConfigConnectorArns: [ // AwsConfigConnectorArnList
 *     "STRING_VALUE",
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListConnectorScanConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // ListConnectorScanConfigurationsResponse
 * //   scanConfigurations: [ // ConnectorScanConfigurationItemList // required
 * //     { // ConnectorScanConfigurationItem
 * //       awsConfigConnectorArn: "STRING_VALUE", // required
 * //       connectorArns: [ // ConnectorArnList // required
 * //         "STRING_VALUE",
 * //       ],
 * //       scanConfiguration: { // ConnectorScanConfiguration
 * //         containerImageScanning: { // ConnectorContainerImageScanConfiguration
 * //           pushDuration: "STRING_VALUE",
 * //           pullDuration: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListConnectorScanConfigurationsCommandInput - {@link ListConnectorScanConfigurationsCommandInput}
 * @returns {@link ListConnectorScanConfigurationsCommandOutput}
 * @see {@link ListConnectorScanConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListConnectorScanConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *          <p> For <code>Enable</code>, you receive this error if you attempt to use a feature in an
 *          unsupported Amazon Web Services Region. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal failure of the Amazon Inspector service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation due to missing required fields or having invalid
 *          inputs.</p>
 *
 * @throws {@link Inspector2ServiceException}
 * <p>Base exception class for all service exceptions from Inspector2 service.</p>
 *
 *
 * @example List scan configurations for a specific AWS Config connector
 * ```javascript
 * //
 * const input = {
 *   awsConfigConnectorArns: [
 *     "arn:aws:config:us-east-1:123456789012:connector/azure/a7bc5463-04ce-4b52-901e-f26f7292a4a7/2fbed4bd-5b95-4947-a751-8defc76ecdae"
 *   ],
 *   maxResults: 10
 * };
 * const command = new ListConnectorScanConfigurationsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   scanConfigurations: [
 *     {
 *       awsConfigConnectorArn: "arn:aws:config:us-east-1:123456789012:connector/azure/a7bc5463-04ce-4b52-901e-f26f7292a4a7/2fbed4bd-5b95-4947-a751-8defc76ecdae",
 *       connectorArns: [
 *         "arn:aws:inspector2:us-east-1:123456789012:connector/6ccf8549-b52b-57ca-bf52-a2266da3c53a"
 *       ],
 *       scanConfiguration: {
 *         containerImageScanning: {
 *           pullDuration: "DAYS_14",
 *           pushDuration: "DAYS_30"
 *         }
 *       }
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListConnectorScanConfigurationsCommand extends command<ListConnectorScanConfigurationsCommandInput, ListConnectorScanConfigurationsCommandOutput>(
  _ep0,
  _mw0,
  "ListConnectorScanConfigurations",
  ListConnectorScanConfigurations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListConnectorScanConfigurationsRequest;
      output: ListConnectorScanConfigurationsResponse;
    };
    sdk: {
      input: ListConnectorScanConfigurationsCommandInput;
      output: ListConnectorScanConfigurationsCommandOutput;
    };
  };
}
