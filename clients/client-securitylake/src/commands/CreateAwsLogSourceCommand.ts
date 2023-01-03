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
  CreateAwsLogSourceRequest,
  CreateAwsLogSourceRequestFilterSensitiveLog,
  CreateAwsLogSourceResponse,
  CreateAwsLogSourceResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateAwsLogSourceCommand,
  serializeAws_restJson1CreateAwsLogSourceCommand,
} from "../protocols/Aws_restJson1";
import { SecurityLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityLakeClient";

export interface CreateAwsLogSourceCommandInput extends CreateAwsLogSourceRequest {}
export interface CreateAwsLogSourceCommandOutput extends CreateAwsLogSourceResponse, __MetadataBearer {}

/**
 * <p>Adds a natively supported Amazon Web Service as an Amazon Security Lake source. Enables
 *          source types for member accounts in required Amazon Web Services Regions, based on the
 *          parameters you specify. You can choose any source type in any Region for either accounts
 *          that are part of a trusted organization or standalone accounts. At least one of the three
 *          dimensions is a mandatory input to this API. However, you can supply any combination of the
 *          three dimensions to this API. </p>
 *          <p>By default, a dimension refers to the entire set. When you don't provide a dimension,
 *          Security Lake assumes that the missing dimension refers to the entire set. This is overridden
 *          when you supply any one of the inputs. For instance, when you do not specify members, the
 *          API enables all Security Lake member accounts for all sources. Similarly, when you do not
 *          specify Regions, Security Lake is enabled for all the Regions where Security Lake is available as a
 *          service.</p>
 *          <p>You can use this API only to enable natively supported Amazon Web Services as a
 *          source. Use <code>CreateCustomLogSource</code> to enable data collection from a custom
 *          source. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityLakeClient, CreateAwsLogSourceCommand } from "@aws-sdk/client-securitylake"; // ES Modules import
 * // const { SecurityLakeClient, CreateAwsLogSourceCommand } = require("@aws-sdk/client-securitylake"); // CommonJS import
 * const client = new SecurityLakeClient(config);
 * const command = new CreateAwsLogSourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAwsLogSourceCommandInput} for command's `input` shape.
 * @see {@link CreateAwsLogSourceCommandOutput} for command's `response` shape.
 * @see {@link SecurityLakeClientResolvedConfig | config} for SecurityLakeClient's `config` shape.
 *
 */
export class CreateAwsLogSourceCommand extends $Command<
  CreateAwsLogSourceCommandInput,
  CreateAwsLogSourceCommandOutput,
  SecurityLakeClientResolvedConfig
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

  constructor(readonly input: CreateAwsLogSourceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityLakeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateAwsLogSourceCommandInput, CreateAwsLogSourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateAwsLogSourceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityLakeClient";
    const commandName = "CreateAwsLogSourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateAwsLogSourceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateAwsLogSourceResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateAwsLogSourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateAwsLogSourceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAwsLogSourceCommandOutput> {
    return deserializeAws_restJson1CreateAwsLogSourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
