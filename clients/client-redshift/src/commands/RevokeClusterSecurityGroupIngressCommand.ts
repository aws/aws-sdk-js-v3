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

import {
  RevokeClusterSecurityGroupIngressMessage,
  RevokeClusterSecurityGroupIngressMessageFilterSensitiveLog,
  RevokeClusterSecurityGroupIngressResult,
  RevokeClusterSecurityGroupIngressResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_queryRevokeClusterSecurityGroupIngressCommand,
  serializeAws_queryRevokeClusterSecurityGroupIngressCommand,
} from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

export interface RevokeClusterSecurityGroupIngressCommandInput extends RevokeClusterSecurityGroupIngressMessage {}
export interface RevokeClusterSecurityGroupIngressCommandOutput
  extends RevokeClusterSecurityGroupIngressResult,
    __MetadataBearer {}

/**
 * <p>Revokes an ingress rule in an Amazon Redshift security group for a previously authorized
 *             IP range or Amazon EC2 security group. To add an ingress rule, see <a>AuthorizeClusterSecurityGroupIngress</a>.
 * For information about managing security groups, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html">Amazon Redshift Cluster Security Groups</a> in the
 * <i>Amazon Redshift Cluster Management Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, RevokeClusterSecurityGroupIngressCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, RevokeClusterSecurityGroupIngressCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new RevokeClusterSecurityGroupIngressCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RevokeClusterSecurityGroupIngressCommandInput} for command's `input` shape.
 * @see {@link RevokeClusterSecurityGroupIngressCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 */
export class RevokeClusterSecurityGroupIngressCommand extends $Command<
  RevokeClusterSecurityGroupIngressCommandInput,
  RevokeClusterSecurityGroupIngressCommandOutput,
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

  constructor(readonly input: RevokeClusterSecurityGroupIngressCommandInput) {
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
  ): Handler<RevokeClusterSecurityGroupIngressCommandInput, RevokeClusterSecurityGroupIngressCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RevokeClusterSecurityGroupIngressCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "RevokeClusterSecurityGroupIngressCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RevokeClusterSecurityGroupIngressMessageFilterSensitiveLog,
      outputFilterSensitiveLog: RevokeClusterSecurityGroupIngressResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: RevokeClusterSecurityGroupIngressCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryRevokeClusterSecurityGroupIngressCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RevokeClusterSecurityGroupIngressCommandOutput> {
    return deserializeAws_queryRevokeClusterSecurityGroupIngressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
