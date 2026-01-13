// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { InvokeRestApiRequest, InvokeRestApiResponse } from "../models/models_0";
import type { MWAAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MWAAClient";
import { InvokeRestApi$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link InvokeRestApiCommand}.
 */
export interface InvokeRestApiCommandInput extends InvokeRestApiRequest {}
/**
 * @public
 *
 * The output of {@link InvokeRestApiCommand}.
 */
export interface InvokeRestApiCommandOutput extends InvokeRestApiResponse, __MetadataBearer {}

/**
 * <p>Invokes the Apache Airflow REST API on the webserver with the specified inputs. To
 *             learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/access-mwaa-apache-airflow-rest-api.html">Using the Apache Airflow REST API</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MWAAClient, InvokeRestApiCommand } from "@aws-sdk/client-mwaa"; // ES Modules import
 * // const { MWAAClient, InvokeRestApiCommand } = require("@aws-sdk/client-mwaa"); // CommonJS import
 * // import type { MWAAClientConfig } from "@aws-sdk/client-mwaa";
 * const config = {}; // type is MWAAClientConfig
 * const client = new MWAAClient(config);
 * const input = { // InvokeRestApiRequest
 *   Name: "STRING_VALUE", // required
 *   Path: "STRING_VALUE", // required
 *   Method: "STRING_VALUE", // required
 *   QueryParameters: "DOCUMENT_VALUE",
 *   Body: "DOCUMENT_VALUE",
 * };
 * const command = new InvokeRestApiCommand(input);
 * const response = await client.send(command);
 * // { // InvokeRestApiResponse
 * //   RestApiStatusCode: Number("int"),
 * //   RestApiResponse: "DOCUMENT_VALUE",
 * // };
 *
 * ```
 *
 * @param InvokeRestApiCommandInput - {@link InvokeRestApiCommandInput}
 * @returns {@link InvokeRestApiCommandOutput}
 * @see {@link InvokeRestApiCommandInput} for command's `input` shape.
 * @see {@link InvokeRestApiCommandOutput} for command's `response` shape.
 * @see {@link MWAAClientResolvedConfig | config} for MWAAClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to the Apache Airflow Web UI or CLI has been denied due to insufficient permissions. To learn more, see <a href="https://docs.aws.amazon.com/mwaa/latest/userguide/access-policies.html">Accessing an Amazon MWAA environment</a>.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>InternalServerException: An internal error has occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>ResourceNotFoundException: The resource is not available.</p>
 *
 * @throws {@link RestApiClientException} (client fault)
 *  <p>An exception indicating that a client-side error occurred during the Apache Airflow
 *             REST API call.</p>
 *
 * @throws {@link RestApiServerException} (client fault)
 *  <p>An exception indicating that a server-side error occurred during the Apache Airflow
 *             REST API call.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>ValidationException: The provided input is not valid.</p>
 *
 * @throws {@link MWAAServiceException}
 * <p>Base exception class for all service exceptions from MWAA service.</p>
 *
 *
 * @example Listing Airflow variables.
 * ```javascript
 * //
 * const input = {
 *   Method: "GET",
 *   Name: "MyEnvironment",
 *   Path: "/variables"
 * };
 * const command = new InvokeRestApiCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   RestApiResponse: {
 *     total_entries: 1,
 *     variables: [
 *       {
 *         description: "Example variable",
 *         key: "test-variable",
 *         value: "123"
 *       }
 *     ]
 *   },
 *   RestApiStatusCode: 200
 * }
 * *\/
 * ```
 *
 * @public
 */
export class InvokeRestApiCommand extends $Command
  .classBuilder<
    InvokeRestApiCommandInput,
    InvokeRestApiCommandOutput,
    MWAAClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MWAAClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonMWAA", "InvokeRestApi", {})
  .n("MWAAClient", "InvokeRestApiCommand")
  .sc(InvokeRestApi$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: InvokeRestApiRequest;
      output: InvokeRestApiResponse;
    };
    sdk: {
      input: InvokeRestApiCommandInput;
      output: InvokeRestApiCommandOutput;
    };
  };
}
