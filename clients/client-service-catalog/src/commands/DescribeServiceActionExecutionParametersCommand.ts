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
  DescribeServiceActionExecutionParametersInput,
  DescribeServiceActionExecutionParametersInputFilterSensitiveLog,
  DescribeServiceActionExecutionParametersOutput,
  DescribeServiceActionExecutionParametersOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeServiceActionExecutionParametersCommand,
  serializeAws_json1_1DescribeServiceActionExecutionParametersCommand,
} from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

export interface DescribeServiceActionExecutionParametersCommandInput
  extends DescribeServiceActionExecutionParametersInput {}
export interface DescribeServiceActionExecutionParametersCommandOutput
  extends DescribeServiceActionExecutionParametersOutput,
    __MetadataBearer {}

/**
 * <p>Finds the default parameters for a specific self-service action on a specific provisioned product and returns a map of the results to the user.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DescribeServiceActionExecutionParametersCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DescribeServiceActionExecutionParametersCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new DescribeServiceActionExecutionParametersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeServiceActionExecutionParametersCommandInput} for command's `input` shape.
 * @see {@link DescribeServiceActionExecutionParametersCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 */
export class DescribeServiceActionExecutionParametersCommand extends $Command<
  DescribeServiceActionExecutionParametersCommandInput,
  DescribeServiceActionExecutionParametersCommandOutput,
  ServiceCatalogClientResolvedConfig
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

  constructor(readonly input: DescribeServiceActionExecutionParametersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ServiceCatalogClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeServiceActionExecutionParametersCommandInput,
    DescribeServiceActionExecutionParametersCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        DescribeServiceActionExecutionParametersCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ServiceCatalogClient";
    const commandName = "DescribeServiceActionExecutionParametersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeServiceActionExecutionParametersInputFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeServiceActionExecutionParametersOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeServiceActionExecutionParametersCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeServiceActionExecutionParametersCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeServiceActionExecutionParametersCommandOutput> {
    return deserializeAws_json1_1DescribeServiceActionExecutionParametersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
