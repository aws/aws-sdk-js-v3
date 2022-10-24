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
  CreateReplicationJobRequest,
  CreateReplicationJobRequestFilterSensitiveLog,
  CreateReplicationJobResponse,
  CreateReplicationJobResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateReplicationJobCommand,
  serializeAws_json1_1CreateReplicationJobCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SMSClientResolvedConfig } from "../SMSClient";

export interface CreateReplicationJobCommandInput extends CreateReplicationJobRequest {}
export interface CreateReplicationJobCommandOutput extends CreateReplicationJobResponse, __MetadataBearer {}

/**
 * <p>Creates a replication job. The replication job schedules periodic replication runs
 *             to replicate your server to Amazon Web Services. Each replication run creates an Amazon Machine Image
 *             (AMI).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, CreateReplicationJobCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, CreateReplicationJobCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new CreateReplicationJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateReplicationJobCommandInput} for command's `input` shape.
 * @see {@link CreateReplicationJobCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for SMSClient's `config` shape.
 *
 */
export class CreateReplicationJobCommand extends $Command<
  CreateReplicationJobCommandInput,
  CreateReplicationJobCommandOutput,
  SMSClientResolvedConfig
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

  constructor(readonly input: CreateReplicationJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateReplicationJobCommandInput, CreateReplicationJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateReplicationJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SMSClient";
    const commandName = "CreateReplicationJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateReplicationJobRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateReplicationJobResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateReplicationJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateReplicationJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateReplicationJobCommandOutput> {
    return deserializeAws_json1_1CreateReplicationJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
