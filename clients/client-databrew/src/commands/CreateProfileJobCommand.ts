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

import { DataBrewClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataBrewClient";
import {
  CreateProfileJobRequest,
  CreateProfileJobRequestFilterSensitiveLog,
  CreateProfileJobResponse,
  CreateProfileJobResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateProfileJobCommand,
  serializeAws_restJson1CreateProfileJobCommand,
} from "../protocols/Aws_restJson1";

export interface CreateProfileJobCommandInput extends CreateProfileJobRequest {}
export interface CreateProfileJobCommandOutput extends CreateProfileJobResponse, __MetadataBearer {}

/**
 * <p>Creates a new job to analyze a dataset and create its data profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataBrewClient, CreateProfileJobCommand } from "@aws-sdk/client-databrew"; // ES Modules import
 * // const { DataBrewClient, CreateProfileJobCommand } = require("@aws-sdk/client-databrew"); // CommonJS import
 * const client = new DataBrewClient(config);
 * const command = new CreateProfileJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateProfileJobCommandInput} for command's `input` shape.
 * @see {@link CreateProfileJobCommandOutput} for command's `response` shape.
 * @see {@link DataBrewClientResolvedConfig | config} for DataBrewClient's `config` shape.
 *
 */
export class CreateProfileJobCommand extends $Command<
  CreateProfileJobCommandInput,
  CreateProfileJobCommandOutput,
  DataBrewClientResolvedConfig
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

  constructor(readonly input: CreateProfileJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataBrewClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateProfileJobCommandInput, CreateProfileJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateProfileJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataBrewClient";
    const commandName = "CreateProfileJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateProfileJobRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateProfileJobResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateProfileJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateProfileJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateProfileJobCommandOutput> {
    return deserializeAws_restJson1CreateProfileJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
