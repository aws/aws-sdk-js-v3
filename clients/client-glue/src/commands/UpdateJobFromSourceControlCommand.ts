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

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import {
  UpdateJobFromSourceControlRequest,
  UpdateJobFromSourceControlRequestFilterSensitiveLog,
  UpdateJobFromSourceControlResponse,
  UpdateJobFromSourceControlResponseFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_json1_1UpdateJobFromSourceControlCommand,
  serializeAws_json1_1UpdateJobFromSourceControlCommand,
} from "../protocols/Aws_json1_1";

export interface UpdateJobFromSourceControlCommandInput extends UpdateJobFromSourceControlRequest {}
export interface UpdateJobFromSourceControlCommandOutput extends UpdateJobFromSourceControlResponse, __MetadataBearer {}

/**
 * <p>Synchronizes a job from the source control repository. This operation takes the job artifacts that are located in the remote repository and updates the Glue internal stores with these artifacts.</p>
 *          <p>This API supports optional parameters which take in the repository information.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdateJobFromSourceControlCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdateJobFromSourceControlCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new UpdateJobFromSourceControlCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateJobFromSourceControlCommandInput} for command's `input` shape.
 * @see {@link UpdateJobFromSourceControlCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 */
export class UpdateJobFromSourceControlCommand extends $Command<
  UpdateJobFromSourceControlCommandInput,
  UpdateJobFromSourceControlCommandOutput,
  GlueClientResolvedConfig
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

  constructor(readonly input: UpdateJobFromSourceControlCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateJobFromSourceControlCommandInput, UpdateJobFromSourceControlCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateJobFromSourceControlCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "UpdateJobFromSourceControlCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateJobFromSourceControlRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateJobFromSourceControlResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateJobFromSourceControlCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateJobFromSourceControlCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateJobFromSourceControlCommandOutput> {
    return deserializeAws_json1_1UpdateJobFromSourceControlCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
