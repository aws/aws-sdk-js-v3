// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { ClusterCredentials, ClusterCredentialsFilterSensitiveLog } from "../models/models_0";
import { GetClusterCredentialsMessage, GetClusterCredentialsMessageFilterSensitiveLog } from "../models/models_1";
import {
  deserializeAws_queryGetClusterCredentialsCommand,
  serializeAws_queryGetClusterCredentialsCommand,
} from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

export interface GetClusterCredentialsCommandInput extends GetClusterCredentialsMessage {}
export interface GetClusterCredentialsCommandOutput extends ClusterCredentials, __MetadataBearer {}

/**
 * <p>Returns a database user name and temporary password with temporary authorization to
 *             log on to an Amazon Redshift database. The action returns the database user name
 *             prefixed with <code>IAM:</code> if <code>AutoCreate</code> is <code>False</code> or
 *                 <code>IAMA:</code> if <code>AutoCreate</code> is <code>True</code>. You can
 *             optionally specify one or more database user groups that the user will join at log on.
 *             By default, the temporary credentials expire in 900 seconds. You can optionally specify
 *             a duration between 900 seconds (15 minutes) and 3600 seconds (60 minutes). For more
 *             information, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/generating-user-credentials.html">Using IAM Authentication
 *                 to Generate Database User Credentials</a> in the Amazon Redshift Cluster Management Guide.</p>
 *         <p>The Identity and Access Management (IAM) user or role that runs
 *             GetClusterCredentials must have an IAM policy attached that allows access to all
 *             necessary actions and resources. For more information about permissions, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-identity-based.html#redshift-policy-resources.getclustercredentials-resources">Resource Policies for GetClusterCredentials</a> in the
 *             Amazon Redshift Cluster Management Guide.</p>
 *         <p>If the <code>DbGroups</code> parameter is specified, the IAM policy must allow the
 *                 <code>redshift:JoinGroup</code> action with access to the listed
 *                 <code>dbgroups</code>. </p>
 *         <p>In addition, if the <code>AutoCreate</code> parameter is set to <code>True</code>,
 *             then the policy must include the <code>redshift:CreateClusterUser</code>
 *             permission.</p>
 *         <p>If the <code>DbName</code> parameter is specified, the IAM policy must allow access
 *             to the resource <code>dbname</code> for the specified database name. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, GetClusterCredentialsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, GetClusterCredentialsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new GetClusterCredentialsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetClusterCredentialsCommandInput} for command's `input` shape.
 * @see {@link GetClusterCredentialsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
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
      inputFilterSensitiveLog: GetClusterCredentialsMessageFilterSensitiveLog,
      outputFilterSensitiveLog: ClusterCredentialsFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetClusterCredentialsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryGetClusterCredentialsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetClusterCredentialsCommandOutput> {
    return deserializeAws_queryGetClusterCredentialsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
