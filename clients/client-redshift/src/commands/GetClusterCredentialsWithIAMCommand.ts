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

import { ClusterExtendedCredentials, ClusterExtendedCredentialsFilterSensitiveLog } from "../models/models_0";
import {
  GetClusterCredentialsWithIAMMessage,
  GetClusterCredentialsWithIAMMessageFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_queryGetClusterCredentialsWithIAMCommand,
  serializeAws_queryGetClusterCredentialsWithIAMCommand,
} from "../protocols/Aws_query";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";

export interface GetClusterCredentialsWithIAMCommandInput extends GetClusterCredentialsWithIAMMessage {}
export interface GetClusterCredentialsWithIAMCommandOutput extends ClusterExtendedCredentials, __MetadataBearer {}

/**
 * <p>Returns a database user name and temporary password with temporary authorization to
 *             log in to an Amazon Redshift database.
 *             The database user is mapped 1:1 to the source Identity and Access Management (IAM) identity.
 *             For more information about IAM identities, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id.html">IAM Identities (users, user groups, and roles)</a> in the
 *             Amazon Web Services Identity and Access Management User Guide.</p>
 *         <p>The Identity and Access Management (IAM) identity that runs
 *             this operation must have an IAM policy attached that allows access to all
 *             necessary actions and resources.
 *                 For more information about permissions, see <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-identity-based.html">Using identity-based policies (IAM policies)</a> in the
 *             Amazon Redshift Cluster Management Guide. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, GetClusterCredentialsWithIAMCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, GetClusterCredentialsWithIAMCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new GetClusterCredentialsWithIAMCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetClusterCredentialsWithIAMCommandInput} for command's `input` shape.
 * @see {@link GetClusterCredentialsWithIAMCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 */
export class GetClusterCredentialsWithIAMCommand extends $Command<
  GetClusterCredentialsWithIAMCommandInput,
  GetClusterCredentialsWithIAMCommandOutput,
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

  constructor(readonly input: GetClusterCredentialsWithIAMCommandInput) {
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
  ): Handler<GetClusterCredentialsWithIAMCommandInput, GetClusterCredentialsWithIAMCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetClusterCredentialsWithIAMCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftClient";
    const commandName = "GetClusterCredentialsWithIAMCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetClusterCredentialsWithIAMMessageFilterSensitiveLog,
      outputFilterSensitiveLog: ClusterExtendedCredentialsFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetClusterCredentialsWithIAMCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryGetClusterCredentialsWithIAMCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetClusterCredentialsWithIAMCommandOutput> {
    return deserializeAws_queryGetClusterCredentialsWithIAMCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
