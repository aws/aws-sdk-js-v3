// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { ListSecretsRequest, ListSecretsResponse } from "../models/models_0";
import { de_ListSecretsCommand, se_ListSecretsCommand } from "../protocols/Aws_json1_1";
import { SecretsManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecretsManagerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListSecretsCommand}.
 */
export interface ListSecretsCommandInput extends ListSecretsRequest {}
/**
 * @public
 *
 * The output of {@link ListSecretsCommand}.
 */
export interface ListSecretsCommandOutput extends ListSecretsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the secrets that are stored by Secrets Manager in the Amazon Web Services account, not including secrets
 *       that are marked for deletion. To see secrets marked for deletion, use the Secrets Manager console.</p>
 *          <p>ListSecrets is eventually consistent, however it might not reflect changes from the last five minutes.
 *       To get the latest information for a specific secret, use <a>DescribeSecret</a>.</p>
 *          <p>To list the versions of a secret, use <a>ListSecretVersionIds</a>.</p>
 *          <p>To get the secret value from <code>SecretString</code> or <code>SecretBinary</code>,
 *       call <a>GetSecretValue</a>.</p>
 *          <p>For information about finding secrets in the console, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/manage_search-secret.html">Find secrets in Secrets Manager</a>.</p>
 *          <p>Secrets Manager generates a CloudTrail log entry when you call this action. Do not include sensitive information in request parameters because it might be logged. For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/retrieve-ct-entries.html">Logging Secrets Manager events with CloudTrail</a>.</p>
 *          <p>
 *             <b>Required permissions: </b>
 *             <code>secretsmanager:ListSecrets</code>.
 *       For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/reference_iam-permissions.html#reference_iam-permissions_actions">
 *       IAM policy actions for Secrets Manager</a> and <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access.html">Authentication
 *       and access control in Secrets Manager</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecretsManagerClient, ListSecretsCommand } from "@aws-sdk/client-secrets-manager"; // ES Modules import
 * // const { SecretsManagerClient, ListSecretsCommand } = require("@aws-sdk/client-secrets-manager"); // CommonJS import
 * const client = new SecretsManagerClient(config);
 * const input = { // ListSecretsRequest
 *   IncludePlannedDeletion: true || false,
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Filters: [ // FiltersListType
 *     { // Filter
 *       Key: "description" || "name" || "tag-key" || "tag-value" || "primary-region" || "owning-service" || "all",
 *       Values: [ // FilterValuesStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   SortOrder: "asc" || "desc",
 * };
 * const command = new ListSecretsCommand(input);
 * const response = await client.send(command);
 * // { // ListSecretsResponse
 * //   SecretList: [ // SecretListType
 * //     { // SecretListEntry
 * //       ARN: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       KmsKeyId: "STRING_VALUE",
 * //       RotationEnabled: true || false,
 * //       RotationLambdaARN: "STRING_VALUE",
 * //       RotationRules: { // RotationRulesType
 * //         AutomaticallyAfterDays: Number("long"),
 * //         Duration: "STRING_VALUE",
 * //         ScheduleExpression: "STRING_VALUE",
 * //       },
 * //       LastRotatedDate: new Date("TIMESTAMP"),
 * //       LastChangedDate: new Date("TIMESTAMP"),
 * //       LastAccessedDate: new Date("TIMESTAMP"),
 * //       DeletedDate: new Date("TIMESTAMP"),
 * //       NextRotationDate: new Date("TIMESTAMP"),
 * //       Tags: [ // TagListType
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       SecretVersionsToStages: { // SecretVersionsToStagesMapType
 * //         "<keys>": [ // SecretVersionStagesType
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       OwningService: "STRING_VALUE",
 * //       CreatedDate: new Date("TIMESTAMP"),
 * //       PrimaryRegion: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSecretsCommandInput - {@link ListSecretsCommandInput}
 * @returns {@link ListSecretsCommandOutput}
 * @see {@link ListSecretsCommandInput} for command's `input` shape.
 * @see {@link ListSecretsCommandOutput} for command's `response` shape.
 * @see {@link SecretsManagerClientResolvedConfig | config} for SecretsManagerClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The <code>NextToken</code> value is invalid.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The parameter name or value is invalid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>A parameter value is not valid for the current state of the
 *       resource.</p>
 *          <p>Possible causes:</p>
 *          <ul>
 *             <li>
 *                <p>The secret is scheduled for deletion.</p>
 *             </li>
 *             <li>
 *                <p>You tried to enable rotation on a secret that doesn't already have a Lambda function
 *           ARN configured and you didn't include such an ARN as a parameter in this call. </p>
 *             </li>
 *             <li>
 *                <p>The secret is managed by another service, and you must use that service to update it.
 *           For more information, see <a href="https://docs.aws.amazon.com/secretsmanager/latest/userguide/service-linked-secrets.html">Secrets managed by other Amazon Web Services services</a>.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link SecretsManagerServiceException}
 * <p>Base exception class for all service exceptions from SecretsManager service.</p>
 *
 * @example To list the secrets in your account
 * ```javascript
 * // The following example shows how to list all of the secrets in your account.
 * const input = {};
 * const command = new ListSecretsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "SecretList": [
 *     {
 *       "ARN": "arn:aws:secretsmanager:us-west-2:123456789012:secret:MyTestDatabaseSecret-a1b2c3",
 *       "Description": "My test database secret",
 *       "LastChangedDate": 1523477145.729,
 *       "Name": "MyTestDatabaseSecret",
 *       "SecretVersionsToStages": {
 *         "EXAMPLE1-90ab-cdef-fedc-ba987EXAMPLE": [
 *           "AWSCURRENT"
 *         ]
 *       }
 *     },
 *     {
 *       "ARN": "arn:aws:secretsmanager:us-west-2:123456789012:secret:MyTestDatabaseSecret1-d4e5f6",
 *       "Description": "Another secret created for a different database",
 *       "LastChangedDate": 1523482025.685,
 *       "Name": "MyTestDatabaseSecret1",
 *       "SecretVersionsToStages": {
 *         "EXAMPLE2-90ab-cdef-fedc-ba987EXAMPLE": [
 *           "AWSCURRENT"
 *         ]
 *       }
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-list-the-secrets-in-your-account-1524001246087
 * ```
 *
 */
export class ListSecretsCommand extends $Command<
  ListSecretsCommandInput,
  ListSecretsCommandOutput,
  SecretsManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: ListSecretsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecretsManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSecretsCommandInput, ListSecretsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListSecretsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecretsManagerClient";
    const commandName = "ListSecretsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "secretsmanager",
        operation: "ListSecrets",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: ListSecretsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListSecretsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSecretsCommandOutput> {
    return de_ListSecretsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
