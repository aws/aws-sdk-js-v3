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
  PutWorkflowRunPropertiesRequest,
  PutWorkflowRunPropertiesRequestFilterSensitiveLog,
  PutWorkflowRunPropertiesResponse,
  PutWorkflowRunPropertiesResponseFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_json1_1PutWorkflowRunPropertiesCommand,
  serializeAws_json1_1PutWorkflowRunPropertiesCommand,
} from "../protocols/Aws_json1_1";

export interface PutWorkflowRunPropertiesCommandInput extends PutWorkflowRunPropertiesRequest {}
export interface PutWorkflowRunPropertiesCommandOutput extends PutWorkflowRunPropertiesResponse, __MetadataBearer {}

/**
 * <p>Puts the specified workflow run properties for the given workflow run. If a property already exists for the specified run, then it overrides the value otherwise adds the property to existing properties.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, PutWorkflowRunPropertiesCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, PutWorkflowRunPropertiesCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new PutWorkflowRunPropertiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutWorkflowRunPropertiesCommandInput} for command's `input` shape.
 * @see {@link PutWorkflowRunPropertiesCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 */
export class PutWorkflowRunPropertiesCommand extends $Command<
  PutWorkflowRunPropertiesCommandInput,
  PutWorkflowRunPropertiesCommandOutput,
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

  constructor(readonly input: PutWorkflowRunPropertiesCommandInput) {
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
  ): Handler<PutWorkflowRunPropertiesCommandInput, PutWorkflowRunPropertiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutWorkflowRunPropertiesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "PutWorkflowRunPropertiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutWorkflowRunPropertiesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PutWorkflowRunPropertiesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutWorkflowRunPropertiesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutWorkflowRunPropertiesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutWorkflowRunPropertiesCommandOutput> {
    return deserializeAws_json1_1PutWorkflowRunPropertiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
