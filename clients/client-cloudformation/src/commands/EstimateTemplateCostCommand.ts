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

import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import {
  EstimateTemplateCostInput,
  EstimateTemplateCostInputFilterSensitiveLog,
  EstimateTemplateCostOutput,
  EstimateTemplateCostOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryEstimateTemplateCostCommand,
  serializeAws_queryEstimateTemplateCostCommand,
} from "../protocols/Aws_query";

export interface EstimateTemplateCostCommandInput extends EstimateTemplateCostInput {}
export interface EstimateTemplateCostCommandOutput extends EstimateTemplateCostOutput, __MetadataBearer {}

/**
 * <p>Returns the estimated monthly cost of a template. The return value is an Amazon Web Services Simple Monthly Calculator URL with a query string that describes the
 *          resources required to run the template.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudFormationClient, EstimateTemplateCostCommand } from "@aws-sdk/client-cloudformation"; // ES Modules import
 * // const { CloudFormationClient, EstimateTemplateCostCommand } = require("@aws-sdk/client-cloudformation"); // CommonJS import
 * const client = new CloudFormationClient(config);
 * const command = new EstimateTemplateCostCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EstimateTemplateCostCommandInput} for command's `input` shape.
 * @see {@link EstimateTemplateCostCommandOutput} for command's `response` shape.
 * @see {@link CloudFormationClientResolvedConfig | config} for CloudFormationClient's `config` shape.
 *
 */
export class EstimateTemplateCostCommand extends $Command<
  EstimateTemplateCostCommandInput,
  EstimateTemplateCostCommandOutput,
  CloudFormationClientResolvedConfig
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

  constructor(readonly input: EstimateTemplateCostCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<EstimateTemplateCostCommandInput, EstimateTemplateCostCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, EstimateTemplateCostCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "EstimateTemplateCostCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: EstimateTemplateCostInputFilterSensitiveLog,
      outputFilterSensitiveLog: EstimateTemplateCostOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: EstimateTemplateCostCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryEstimateTemplateCostCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<EstimateTemplateCostCommandOutput> {
    return deserializeAws_queryEstimateTemplateCostCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
