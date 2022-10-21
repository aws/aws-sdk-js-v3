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

import { Cloud9ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Cloud9Client";
import {
  CreateEnvironmentEC2Request,
  CreateEnvironmentEC2RequestFilterSensitiveLog,
  CreateEnvironmentEC2Result,
  CreateEnvironmentEC2ResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateEnvironmentEC2Command,
  serializeAws_json1_1CreateEnvironmentEC2Command,
} from "../protocols/Aws_json1_1";

export interface CreateEnvironmentEC2CommandInput extends CreateEnvironmentEC2Request {}
export interface CreateEnvironmentEC2CommandOutput extends CreateEnvironmentEC2Result, __MetadataBearer {}

/**
 * <p>Creates an Cloud9 development environment, launches an Amazon Elastic Compute Cloud (Amazon EC2) instance, and
 *       then connects from the instance to the environment.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Cloud9Client, CreateEnvironmentEC2Command } from "@aws-sdk/client-cloud9"; // ES Modules import
 * // const { Cloud9Client, CreateEnvironmentEC2Command } = require("@aws-sdk/client-cloud9"); // CommonJS import
 * const client = new Cloud9Client(config);
 * const command = new CreateEnvironmentEC2Command(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateEnvironmentEC2CommandInput} for command's `input` shape.
 * @see {@link CreateEnvironmentEC2CommandOutput} for command's `response` shape.
 * @see {@link Cloud9ClientResolvedConfig | config} for Cloud9Client's `config` shape.
 *
 */
export class CreateEnvironmentEC2Command extends $Command<
  CreateEnvironmentEC2CommandInput,
  CreateEnvironmentEC2CommandOutput,
  Cloud9ClientResolvedConfig
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

  constructor(readonly input: CreateEnvironmentEC2CommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Cloud9ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateEnvironmentEC2CommandInput, CreateEnvironmentEC2CommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateEnvironmentEC2Command.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Cloud9Client";
    const commandName = "CreateEnvironmentEC2Command";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateEnvironmentEC2RequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateEnvironmentEC2ResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateEnvironmentEC2CommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateEnvironmentEC2Command(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateEnvironmentEC2CommandOutput> {
    return deserializeAws_json1_1CreateEnvironmentEC2Command(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
