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

import { ClusterCredentials, ClusterCredentialsFilterSensitiveLog } from "../models/models_0";
import { GetClusterCredentialsMessage } from "../models/models_1";
import { de_GetClusterCredentialsCommand, se_GetClusterCredentialsCommand } from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetClusterCredentialsCommand}.
 */
export interface GetClusterCredentialsCommandInput extends GetClusterCredentialsMessage {}
/**
 * @public
 *
 * The output of {@link GetClusterCredentialsCommand}.
 */
export interface GetClusterCredentialsCommandOutput extends ClusterCredentials, __MetadataBearer {}

/**
 * @public
 * <p>Returns a database user name and temporary password with temporary authorization to
 *             log on to an Amazon Redshift database. The action returns the database user name
 *             prefixed with <code>IAM:</code> if <code>AutoCreate</code> is <code>False</code> or
 *                 <code>IAMA:</code> if <code>AutoCreate</code> is <code>True</code>. You can
 *             optionally specify one or more database user groups that the user will join at log on.
 *             By default, the temporary credentials expire in 900 seconds. You can optionally specify
 *             a duration between 900 seconds (15 minutes) and 3600 seconds (60 minutes). For more
 *             information, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/generating-user-credentials.html">Using IAM Authentication
 *                 to Generate Database User Credentials</a> in the Amazon Redshift Cluster Management Guide.</p>
 *          <p>The Identity and Access Management (IAM) user or role that runs
 *             GetClusterCredentials must have an IAM policy attached that allows access to all
 *             necessary actions and resources. For more information about permissions, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-identity-based.html#redshift-policy-resources.getclustercredentials-resources">Resource Policies for GetClusterCredentials</a> in the
 *             Amazon Redshift Cluster Management Guide.</p>
 *          <p>If the <code>DbGroups</code> parameter is specified, the IAM policy must allow the
 *                 <code>redshift:JoinGroup</code> action with access to the listed
 *                 <code>dbgroups</code>. </p>
 *          <p>In addition, if the <code>AutoCreate</code> parameter is set to <code>True</code>,
 *             then the policy must include the <code>redshift:CreateClusterUser</code>
 *             permission.</p>
 *          <p>If the <code>DbName</code> parameter is specified, the IAM policy must allow access
 *             to the resource <code>dbname</code> for the specified database name. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, GetClusterCredentialsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, GetClusterCredentialsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const input = { // GetClusterCredentialsMessage
 *   DbUser: "STRING_VALUE", // required
 *   DbName: "STRING_VALUE",
 *   ClusterIdentifier: "STRING_VALUE",
 *   DurationSeconds: Number("int"),
 *   AutoCreate: true || false,
 *   DbGroups: [ // DbGroupList
 *     "STRING_VALUE",
 *   ],
 *   CustomDomainName: "STRING_VALUE",
 * };
 * const command = new GetClusterCredentialsCommand(input);
 * const response = await client.send(command);
 * // { // ClusterCredentials
 * //   DbUser: "STRING_VALUE",
 * //   DbPassword: "STRING_VALUE",
 * //   Expiration: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetClusterCredentialsCommandInput - {@link GetClusterCredentialsCommandInput}
 * @returns {@link GetClusterCredentialsCommandOutput}
 * @see {@link GetClusterCredentialsCommandInput} for command's `input` shape.
 * @see {@link GetClusterCredentialsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ClusterNotFoundFault} (client fault)
 *  <p>The <code>ClusterIdentifier</code> parameter does not refer to an existing cluster.
 *         </p>
 *
 * @throws {@link UnsupportedOperationFault} (client fault)
 *  <p>The requested operation isn't supported.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 */
export class GetClusterCredentialsCommand extends $Command<
  GetClusterCredentialsCommandInput,
  GetClusterCredentialsCommandOutput,
  RedshiftClientResolvedConfig
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
  constructor(readonly input: GetClusterCredentialsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetClusterCredentialsCommandInput, GetClusterCredentialsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetClusterCredentialsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "GetClusterCredentialsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: ClusterCredentialsFilterSensitiveLog,
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
  private serialize(input: GetClusterCredentialsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetClusterCredentialsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetClusterCredentialsCommandOutput> {
    return de_GetClusterCredentialsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
