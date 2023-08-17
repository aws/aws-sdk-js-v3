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
} from "@smithy/types";

import { ListSchemasRequest, ListSchemasResponse } from "../models/models_0";
import { de_ListSchemasCommand, se_ListSchemasCommand } from "../protocols/Aws_json1_1";
import { RedshiftDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftDataClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListSchemasCommand}.
 */
export interface ListSchemasCommandInput extends ListSchemasRequest {}
/**
 * @public
 *
 * The output of {@link ListSchemasCommand}.
 */
export interface ListSchemasCommandOutput extends ListSchemasResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the schemas in a database.
 *       A token is returned to page through the schema list.
 *       Depending on the authorization method, use one of the
 *       following combinations of request parameters: </p>
 *          <ul>
 *             <li>
 *                <p>Secrets Manager - when connecting to a cluster, provide the <code>secret-arn</code> of a secret
 *                                     stored in Secrets Manager which has <code>username</code> and <code>password</code>.
 *                                     The specified secret contains credentials
 *                                     to connect to the <code>database</code> you specify.
 *                                     When you are connecting to a cluster, you also supply the database name,
 *                                     If you provide a cluster identifier (<code>dbClusterIdentifier</code>), it must match the cluster identifier stored in the secret.
 *                                     When you are connecting to a serverless workgroup, you also supply the database name.</p>
 *             </li>
 *             <li>
 *                <p>Temporary credentials - when connecting to your data warehouse, choose one of the following options:</p>
 *                <ul>
 *                   <li>
 *                      <p>When connecting to a serverless workgroup, specify the workgroup name and database name.
 *                                         The database user name is derived from the IAM identity. For example, <code>arn:iam::123456789012:user:foo</code> has the database user name <code>IAM:foo</code>.
 *                                         Also, permission to call the <code>redshift-serverless:GetCredentials</code> operation is required.</p>
 *                   </li>
 *                   <li>
 *                      <p>When connecting to a cluster as an IAM identity, specify the cluster identifier and the database name.
 *                                         The database user name is derived from the IAM identity. For example, <code>arn:iam::123456789012:user:foo</code> has the database user name <code>IAM:foo</code>.
 *                                         Also, permission to call the <code>redshift:GetClusterCredentialsWithIAM</code> operation is required.</p>
 *                   </li>
 *                   <li>
 *                      <p>When connecting to a cluster as a database user, specify the cluster identifier, the database name, and the database user name.
 *                                         Also, permission to call the <code>redshift:GetClusterCredentials</code> operation is required.</p>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *          <p>For more information about the Amazon Redshift Data API and CLI usage examples, see
 *        <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html">Using the Amazon Redshift Data API</a> in the
 *        <i>Amazon Redshift Management Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftDataClient, ListSchemasCommand } from "@aws-sdk/client-redshift-data"; // ES Modules import
 * // const { RedshiftDataClient, ListSchemasCommand } = require("@aws-sdk/client-redshift-data"); // CommonJS import
 * const client = new RedshiftDataClient(config);
 * const input = { // ListSchemasRequest
 *   ClusterIdentifier: "STRING_VALUE",
 *   SecretArn: "STRING_VALUE",
 *   DbUser: "STRING_VALUE",
 *   Database: "STRING_VALUE", // required
 *   ConnectedDatabase: "STRING_VALUE",
 *   SchemaPattern: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   WorkgroupName: "STRING_VALUE",
 * };
 * const command = new ListSchemasCommand(input);
 * const response = await client.send(command);
 * // { // ListSchemasResponse
 * //   Schemas: [ // SchemaList
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSchemasCommandInput - {@link ListSchemasCommandInput}
 * @returns {@link ListSchemasCommandOutput}
 * @see {@link ListSchemasCommandInput} for command's `input` shape.
 * @see {@link ListSchemasCommandOutput} for command's `response` shape.
 * @see {@link RedshiftDataClientResolvedConfig | config} for RedshiftDataClient's `config` shape.
 *
 * @throws {@link DatabaseConnectionException} (server fault)
 *  <p>Connection to a database failed.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The Amazon Redshift Data API operation failed due to invalid input. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The Amazon Redshift Data API operation failed due to invalid input. </p>
 *
 * @throws {@link RedshiftDataServiceException}
 * <p>Base exception class for all service exceptions from RedshiftData service.</p>
 *
 */
export class ListSchemasCommand extends $Command<
  ListSchemasCommandInput,
  ListSchemasCommandOutput,
  RedshiftDataClientResolvedConfig
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
  constructor(readonly input: ListSchemasCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftDataClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSchemasCommandInput, ListSchemasCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListSchemasCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftDataClient";
    const commandName = "ListSchemasCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: ListSchemasCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListSchemasCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSchemasCommandOutput> {
    return de_ListSchemasCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
