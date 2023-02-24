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
  RestoreFromRecoveryPointRequest,
  RestoreFromRecoveryPointRequestFilterSensitiveLog,
  RestoreFromRecoveryPointResponse,
  RestoreFromRecoveryPointResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1RestoreFromRecoveryPointCommand,
  serializeAws_json1_1RestoreFromRecoveryPointCommand,
} from "../protocols/Aws_json1_1";
import {
  RedshiftServerlessClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../RedshiftServerlessClient";

export interface RestoreFromRecoveryPointCommandInput extends RestoreFromRecoveryPointRequest {}
export interface RestoreFromRecoveryPointCommandOutput extends RestoreFromRecoveryPointResponse, __MetadataBearer {}

/**
 * <p>Restore the data from a recovery point.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftServerlessClient, RestoreFromRecoveryPointCommand } from "@aws-sdk/client-redshift-serverless"; // ES Modules import
 * // const { RedshiftServerlessClient, RestoreFromRecoveryPointCommand } = require("@aws-sdk/client-redshift-serverless"); // CommonJS import
 * const client = new RedshiftServerlessClient(config);
 * const command = new RestoreFromRecoveryPointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RestoreFromRecoveryPointCommandInput} for command's `input` shape.
 * @see {@link RestoreFromRecoveryPointCommandOutput} for command's `response` shape.
 * @see {@link RedshiftServerlessClientResolvedConfig | config} for RedshiftServerlessClient's `config` shape.
 *
 */
export class RestoreFromRecoveryPointCommand extends $Command<
  RestoreFromRecoveryPointCommandInput,
  RestoreFromRecoveryPointCommandOutput,
  RedshiftServerlessClientResolvedConfig
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

  constructor(readonly input: RestoreFromRecoveryPointCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RedshiftServerlessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RestoreFromRecoveryPointCommandInput, RestoreFromRecoveryPointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RestoreFromRecoveryPointCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RedshiftServerlessClient";
    const commandName = "RestoreFromRecoveryPointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RestoreFromRecoveryPointRequestFilterSensitiveLog,
      outputFilterSensitiveLog: RestoreFromRecoveryPointResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RestoreFromRecoveryPointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1RestoreFromRecoveryPointCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RestoreFromRecoveryPointCommandOutput> {
    return deserializeAws_json1_1RestoreFromRecoveryPointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
