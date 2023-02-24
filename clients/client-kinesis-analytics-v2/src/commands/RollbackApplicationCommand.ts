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
  KinesisAnalyticsV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../KinesisAnalyticsV2Client";
import {
  RollbackApplicationRequest,
  RollbackApplicationRequestFilterSensitiveLog,
  RollbackApplicationResponse,
  RollbackApplicationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1RollbackApplicationCommand,
  serializeAws_json1_1RollbackApplicationCommand,
} from "../protocols/Aws_json1_1";

export interface RollbackApplicationCommandInput extends RollbackApplicationRequest {}
export interface RollbackApplicationCommandOutput extends RollbackApplicationResponse, __MetadataBearer {}

/**
 * <p>Reverts the application to the previous running version. You can
 *             roll back an application if you suspect it is stuck in a transient status. </p>
 *         <p>You can roll back an application only if it is in the <code>UPDATING</code>
 *             or <code>AUTOSCALING</code> status.</p>
 *         <p>When you rollback an application, it loads state data from the last successful snapshot.
 *         If the application has no snapshots, Kinesis Data Analytics rejects the rollback request.</p>
 *         <p>This action is not supported for Kinesis Data Analytics for SQL applications.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisAnalyticsV2Client, RollbackApplicationCommand } from "@aws-sdk/client-kinesis-analytics-v2"; // ES Modules import
 * // const { KinesisAnalyticsV2Client, RollbackApplicationCommand } = require("@aws-sdk/client-kinesis-analytics-v2"); // CommonJS import
 * const client = new KinesisAnalyticsV2Client(config);
 * const command = new RollbackApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RollbackApplicationCommandInput} for command's `input` shape.
 * @see {@link RollbackApplicationCommandOutput} for command's `response` shape.
 * @see {@link KinesisAnalyticsV2ClientResolvedConfig | config} for KinesisAnalyticsV2Client's `config` shape.
 *
 */
export class RollbackApplicationCommand extends $Command<
  RollbackApplicationCommandInput,
  RollbackApplicationCommandOutput,
  KinesisAnalyticsV2ClientResolvedConfig
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

  constructor(readonly input: RollbackApplicationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisAnalyticsV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RollbackApplicationCommandInput, RollbackApplicationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RollbackApplicationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KinesisAnalyticsV2Client";
    const commandName = "RollbackApplicationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RollbackApplicationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: RollbackApplicationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RollbackApplicationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RollbackApplicationCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RollbackApplicationCommandOutput> {
    return deserializeAws_json1_1RollbackApplicationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
