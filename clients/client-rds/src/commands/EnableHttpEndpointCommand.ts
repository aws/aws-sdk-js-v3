// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { EnableHttpEndpointRequest, EnableHttpEndpointResponse } from "../models/models_1";
import { EnableHttpEndpoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link EnableHttpEndpointCommand}.
 */
export interface EnableHttpEndpointCommandInput extends EnableHttpEndpointRequest {}
/**
 * @public
 *
 * The output of {@link EnableHttpEndpointCommand}.
 */
export interface EnableHttpEndpointCommandOutput extends EnableHttpEndpointResponse, __MetadataBearer {}

/**
 * Enables the HTTP endpoint for the DB cluster. By default, the HTTP endpoint isn't enabled.
 *
 * When enabled, this endpoint provides a connectionless web service API (RDS Data API) for running SQL queries on the Aurora DB cluster. You can also query your database from inside the RDS console with the RDS query editor.
 *
 * For more information, see [Using RDS Data API](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html) in the *Amazon Aurora User Guide*.
 *
 * > **Note:** This operation applies only to Aurora Serverless v2 and provisioned DB clusters. To enable the HTTP endpoint for Aurora Serverless v1 DB clusters, use the `EnableHttpEndpoint` parameter of the `ModifyDBCluster` operation.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, EnableHttpEndpointCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, EnableHttpEndpointCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // EnableHttpEndpointRequest
 *   ResourceArn: "STRING_VALUE", // required
 * };
 * const command = new EnableHttpEndpointCommand(input);
 * const response = await client.send(command);
 * // { // EnableHttpEndpointResponse
 * //   ResourceArn: "STRING_VALUE",
 * //   HttpEndpointEnabled: true || false,
 * // };
 *
 * ```
 *
 * @param EnableHttpEndpointCommandInput - {@link EnableHttpEndpointCommandInput}
 * @returns {@link EnableHttpEndpointCommandOutput}
 * @see {@link EnableHttpEndpointCommandInput} for command's `input` shape.
 * @see {@link EnableHttpEndpointCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link InvalidResourceStateFault} (client fault)
 *
 * The operation can't be performed because another operation is in progress.
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *
 * The specified resource ID was not found.
 *
 * @throws {@link RDSServiceException}
 *
 * Base exception class for all service exceptions from RDS service.
 *
 * @public
 */
export class EnableHttpEndpointCommand extends command<EnableHttpEndpointCommandInput, EnableHttpEndpointCommandOutput>(
  _ep0,
  _mw0,
  "EnableHttpEndpoint",
  EnableHttpEndpoint$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EnableHttpEndpointRequest;
      output: EnableHttpEndpointResponse;
    };
    sdk: {
      input: EnableHttpEndpointCommandInput;
      output: EnableHttpEndpointCommandOutput;
    };
  };
}
