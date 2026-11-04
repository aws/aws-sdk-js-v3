// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  AssociateSourceToS3TableIntegrationRequest,
  AssociateSourceToS3TableIntegrationResponse,
} from "../models/models_0";
import { AssociateSourceToS3TableIntegration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateSourceToS3TableIntegrationCommand}.
 */
export interface AssociateSourceToS3TableIntegrationCommandInput extends AssociateSourceToS3TableIntegrationRequest {}
/**
 * @public
 *
 * The output of {@link AssociateSourceToS3TableIntegrationCommand}.
 */
export interface AssociateSourceToS3TableIntegrationCommandOutput extends AssociateSourceToS3TableIntegrationResponse, __MetadataBearer {}

/**
 * Associates a data source with an S3 Table Integration for query access in the 'logs' namespace. This enables querying log data using analytics engines that support Iceberg such as Amazon Athena, Amazon Redshift, and Apache Spark.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, AssociateSourceToS3TableIntegrationCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, AssociateSourceToS3TableIntegrationCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // AssociateSourceToS3TableIntegrationRequest
 *   integrationArn: "STRING_VALUE", // required
 *   dataSource: { // DataSource
 *     name: "STRING_VALUE", // required
 *     type: "STRING_VALUE",
 *   },
 * };
 * const command = new AssociateSourceToS3TableIntegrationCommand(input);
 * const response = await client.send(command);
 * // { // AssociateSourceToS3TableIntegrationResponse
 * //   identifier: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AssociateSourceToS3TableIntegrationCommandInput - {@link AssociateSourceToS3TableIntegrationCommandInput}
 * @returns {@link AssociateSourceToS3TableIntegrationCommandOutput}
 * @see {@link AssociateSourceToS3TableIntegrationCommandInput} for command's `input` shape.
 * @see {@link AssociateSourceToS3TableIntegrationCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient permissions to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred while processing the request. This exception is returned when the service encounters an unexpected condition that prevents it from fulfilling the request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was throttled because of quota limits.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * One of the parameters for the request is not valid.
 *
 * @throws {@link CloudWatchLogsServiceException}
 *
 * Base exception class for all service exceptions from CloudWatchLogs service.
 *
 * @public
 */
export class AssociateSourceToS3TableIntegrationCommand extends command<AssociateSourceToS3TableIntegrationCommandInput, AssociateSourceToS3TableIntegrationCommandOutput>(
  _ep0,
  _mw0,
  "AssociateSourceToS3TableIntegration",
  AssociateSourceToS3TableIntegration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateSourceToS3TableIntegrationRequest;
      output: AssociateSourceToS3TableIntegrationResponse;
    };
    sdk: {
      input: AssociateSourceToS3TableIntegrationCommandInput;
      output: AssociateSourceToS3TableIntegrationCommandOutput;
    };
  };
}
