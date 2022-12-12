// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getCrossRegionPresignedUrlPlugin } from "@aws-sdk/middleware-sdk-rds";
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
  CreateDBClusterMessage,
  CreateDBClusterMessageFilterSensitiveLog,
  CreateDBClusterResult,
  CreateDBClusterResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryCreateDBClusterCommand,
  serializeAws_queryCreateDBClusterCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

export interface CreateDBClusterCommandInput extends CreateDBClusterMessage {}
export interface CreateDBClusterCommandOutput extends CreateDBClusterResult, __MetadataBearer {}

/**
 * <p>Creates a new Amazon Aurora DB cluster or Multi-AZ DB cluster.</p>
 *          <p>You can use the <code>ReplicationSourceIdentifier</code> parameter to create an Amazon
 *             Aurora DB cluster as a read replica of another DB cluster or Amazon RDS MySQL or
 *             PostgreSQL DB instance.</p>
 *          <p>For more information on Amazon Aurora, see
 *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
 *               What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p>
 *          <p>For more information on Multi-AZ DB clusters, see
 *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html">
 *               Multi-AZ deployments with two readable standby DB instances</a> in the <i>Amazon RDS User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CreateDBClusterCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CreateDBClusterCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new CreateDBClusterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDBClusterCommandInput} for command's `input` shape.
 * @see {@link CreateDBClusterCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 */
export class CreateDBClusterCommand extends $Command<
  CreateDBClusterCommandInput,
  CreateDBClusterCommandOutput,
  RDSClientResolvedConfig
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

  constructor(readonly input: CreateDBClusterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDBClusterCommandInput, CreateDBClusterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDBClusterCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getCrossRegionPresignedUrlPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "CreateDBClusterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDBClusterMessageFilterSensitiveLog,
      outputFilterSensitiveLog: CreateDBClusterResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDBClusterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateDBClusterCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDBClusterCommandOutput> {
    return deserializeAws_queryCreateDBClusterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
