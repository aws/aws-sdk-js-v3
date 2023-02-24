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
  CreateDBInstanceMessage,
  CreateDBInstanceMessageFilterSensitiveLog,
  CreateDBInstanceResult,
  CreateDBInstanceResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryCreateDBInstanceCommand,
  serializeAws_queryCreateDBInstanceCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

export interface CreateDBInstanceCommandInput extends CreateDBInstanceMessage {}
export interface CreateDBInstanceCommandOutput extends CreateDBInstanceResult, __MetadataBearer {}

/**
 * <p>Creates a new DB instance.</p>
 *          <p>The new DB instance can be an RDS DB instance, or it can be a DB instance in an Aurora DB cluster.
 *            For an Aurora DB cluster, you can call this operation multiple times to add more than one DB instance
 *            to the cluster.</p>
 *          <p>For more information about creating an RDS DB instance, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CreateDBInstance.html">
 *             Creating an Amazon RDS DB instance</a> in the <i>Amazon RDS User Guide</i>.</p>
 *          <p>For more information about creating a DB instance in an Aurora DB cluster, see
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.CreateInstance.html">
 *             Creating an Amazon Aurora DB cluster</a> in the <i>Amazon Aurora User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CreateDBInstanceCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CreateDBInstanceCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new CreateDBInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDBInstanceCommandInput} for command's `input` shape.
 * @see {@link CreateDBInstanceCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 */
export class CreateDBInstanceCommand extends $Command<
  CreateDBInstanceCommandInput,
  CreateDBInstanceCommandOutput,
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

  constructor(readonly input: CreateDBInstanceCommandInput) {
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
  ): Handler<CreateDBInstanceCommandInput, CreateDBInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDBInstanceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "CreateDBInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDBInstanceMessageFilterSensitiveLog,
      outputFilterSensitiveLog: CreateDBInstanceResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDBInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateDBInstanceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDBInstanceCommandOutput> {
    return deserializeAws_queryCreateDBInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
