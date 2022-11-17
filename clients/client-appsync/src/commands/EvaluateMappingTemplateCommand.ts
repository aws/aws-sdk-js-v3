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

import { AppSyncClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppSyncClient";
import {
  EvaluateMappingTemplateRequest,
  EvaluateMappingTemplateRequestFilterSensitiveLog,
  EvaluateMappingTemplateResponse,
  EvaluateMappingTemplateResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1EvaluateMappingTemplateCommand,
  serializeAws_restJson1EvaluateMappingTemplateCommand,
} from "../protocols/Aws_restJson1";

export interface EvaluateMappingTemplateCommandInput extends EvaluateMappingTemplateRequest {}
export interface EvaluateMappingTemplateCommandOutput extends EvaluateMappingTemplateResponse, __MetadataBearer {}

/**
 * <p>Evaluates a given template and returns the response. The mapping template can be a request or response
 *          template.</p>
 *          <p>Request templates take the incoming request after a GraphQL operation is parsed and convert it into a
 *          request configuration for the selected data source operation. Response templates interpret responses from the
 *          data source and map it to the shape of the GraphQL field output type.</p>
 *          <p>Mapping templates are written in the Apache Velocity Template Language (VTL).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AppSyncClient, EvaluateMappingTemplateCommand } from "@aws-sdk/client-appsync"; // ES Modules import
 * // const { AppSyncClient, EvaluateMappingTemplateCommand } = require("@aws-sdk/client-appsync"); // CommonJS import
 * const client = new AppSyncClient(config);
 * const command = new EvaluateMappingTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EvaluateMappingTemplateCommandInput} for command's `input` shape.
 * @see {@link EvaluateMappingTemplateCommandOutput} for command's `response` shape.
 * @see {@link AppSyncClientResolvedConfig | config} for AppSyncClient's `config` shape.
 *
 */
export class EvaluateMappingTemplateCommand extends $Command<
  EvaluateMappingTemplateCommandInput,
  EvaluateMappingTemplateCommandOutput,
  AppSyncClientResolvedConfig
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

  constructor(readonly input: EvaluateMappingTemplateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppSyncClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<EvaluateMappingTemplateCommandInput, EvaluateMappingTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, EvaluateMappingTemplateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppSyncClient";
    const commandName = "EvaluateMappingTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: EvaluateMappingTemplateRequestFilterSensitiveLog,
      outputFilterSensitiveLog: EvaluateMappingTemplateResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: EvaluateMappingTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1EvaluateMappingTemplateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<EvaluateMappingTemplateCommandOutput> {
    return deserializeAws_restJson1EvaluateMappingTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
