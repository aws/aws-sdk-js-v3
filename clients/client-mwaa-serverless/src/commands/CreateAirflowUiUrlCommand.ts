// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateAirflowUiUrlRequest, CreateAirflowUiUrlResponse } from "../models/models_0";
import { CreateAirflowUiUrl$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateAirflowUiUrlCommand}.
 */
export interface CreateAirflowUiUrlCommandInput extends CreateAirflowUiUrlRequest {}
/**
 * @public
 *
 * The output of {@link CreateAirflowUiUrlCommand}.
 */
export interface CreateAirflowUiUrlCommandOutput extends CreateAirflowUiUrlResponse, __MetadataBearer {}

/**
 * <p>Creates a launch URL that opens the Apache Airflow UI for your workflows in Amazon Managed Workflows for Apache Airflow Serverless. The UI shows the workflows in your account in the current AWS Region. To start a UI session, open the URL in a browser before it expires.</p> <p>The UI runs with the permissions of the IAM identity that you use to call this operation. You see only the workflows, workflow runs, and logs that the identity can read, and you can start a workflow run only if the identity has permission to start one.</p> <p>The UI session uses the caller's permissions. The session works only from the network address that opened the URL. It ends at <code>SessionExpiresAt</code> or when you sign out from the UI.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MWAAServerlessClient, CreateAirflowUiUrlCommand } from "@aws-sdk/client-mwaa-serverless"; // ES Modules import
 * // const { MWAAServerlessClient, CreateAirflowUiUrlCommand } = require("@aws-sdk/client-mwaa-serverless"); // CommonJS import
 * // import type { MWAAServerlessClientConfig } from "@aws-sdk/client-mwaa-serverless";
 * const config = {}; // type is MWAAServerlessClientConfig
 * const client = new MWAAServerlessClient(config);
 * const input = { // CreateAirflowUiUrlRequest
 *   ExpiresInSeconds: Number("int"),
 *   SessionDurationInSeconds: Number("int"),
 * };
 * const command = new CreateAirflowUiUrlCommand(input);
 * const response = await client.send(command);
 * // { // CreateAirflowUiUrlResponse
 * //   AuthorizedUrl: "STRING_VALUE", // required
 * //   SessionId: "STRING_VALUE", // required
 * //   UrlExpiresAt: new Date("TIMESTAMP"), // required
 * //   SessionExpiresAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param CreateAirflowUiUrlCommandInput - {@link CreateAirflowUiUrlCommandInput}
 * @returns {@link CreateAirflowUiUrlCommandOutput}
 * @see {@link CreateAirflowUiUrlCommandInput} for command's `input` shape.
 * @see {@link CreateAirflowUiUrlCommandOutput} for command's `response` shape.
 * @see {@link MWAAServerlessClientResolvedConfig | config} for MWAAServerlessClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permission to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>You cannot create a resource that already exists, or the resource is in a state that prevents the requested operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected server-side error occurred during request processing.</p>
 *
 * @throws {@link OperationTimeoutException} (server fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because too many requests were made in a short period, exceeding the service rate limits. Amazon Managed Workflows for Apache Airflow Serverless implements throttling controls to ensure fair resource allocation across all customers in the multi-tenant environment. This helps maintain service stability and performance. If you encounter throttling, implement exponential backoff and retry logic in your applications, or consider distributing your API calls over a longer time period.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The specified request parameters are invalid, missing, or inconsistent with Amazon Managed Workflows for Apache Airflow Serverless service requirements. This can occur when workflow definitions contain unsupported operators, when required IAM permissions are missing, when S3 locations are inaccessible, or when network configurations are invalid. The service validates workflow definitions, execution roles, and resource configurations to ensure compatibility with the managed Airflow environment and security requirements.</p>
 *
 * @throws {@link MWAAServerlessServiceException}
 * <p>Base exception class for all service exceptions from MWAAServerless service.</p>
 *
 *
 * @public
 */
export class CreateAirflowUiUrlCommand extends command<CreateAirflowUiUrlCommandInput, CreateAirflowUiUrlCommandOutput>(
  _ep0,
  _mw0,
  "CreateAirflowUiUrl",
  CreateAirflowUiUrl$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAirflowUiUrlRequest;
      output: CreateAirflowUiUrlResponse;
    };
    sdk: {
      input: CreateAirflowUiUrlCommandInput;
      output: CreateAirflowUiUrlCommandOutput;
    };
  };
}
