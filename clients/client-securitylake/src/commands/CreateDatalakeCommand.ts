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
  CreateDatalakeRequest,
  CreateDatalakeRequestFilterSensitiveLog,
  CreateDatalakeResponse,
  CreateDatalakeResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateDatalakeCommand,
  serializeAws_restJson1CreateDatalakeCommand,
} from "../protocols/Aws_restJson1";
import { SecurityLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityLakeClient";

export interface CreateDatalakeCommandInput extends CreateDatalakeRequest {}
export interface CreateDatalakeCommandOutput extends CreateDatalakeResponse, __MetadataBearer {}

/**
 * <p>Initializes an Amazon Security Lake instance with the provided (or default) configuration. You can enable Security Lake in Regions with customized settings in advance before enabling log collection in Regions. You can either use the <code>enableAll</code> parameter to
 *          specify all Regions or you can specify the Regions you want to enable Security Lake using the
 *          <code>Regions</code> parameter and configure these Regions using the
 *          <code>configurations</code> parameter. When the <code>CreateDataLake</code> API is called
 *          multiple times, if that Region is already enabled, it will update the Region if
 *          configuration for that Region is provided. If that Region is a new Region, it will be set
 *          up with the customized configurations if it is specified. </p>
 *          <p>When you enable Security Lake, it starts ingesting security data after the
 *          <code>CreateAwsLogSource</code> call. This includes ingesting security
 *          data from sources, storing data, and making data accessible to subscribers. Security Lake also
 *          enables all the existing settings and resources that it stores or maintains for your
 *          account in the current Region, including security log and event data. For more information,
 *          see the Amazon Security Lake User Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityLakeClient, CreateDatalakeCommand } from "@aws-sdk/client-securitylake"; // ES Modules import
 * // const { SecurityLakeClient, CreateDatalakeCommand } = require("@aws-sdk/client-securitylake"); // CommonJS import
 * const client = new SecurityLakeClient(config);
 * const command = new CreateDatalakeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDatalakeCommandInput} for command's `input` shape.
 * @see {@link CreateDatalakeCommandOutput} for command's `response` shape.
 * @see {@link SecurityLakeClientResolvedConfig | config} for SecurityLakeClient's `config` shape.
 *
 */
export class CreateDatalakeCommand extends $Command<
  CreateDatalakeCommandInput,
  CreateDatalakeCommandOutput,
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

  constructor(readonly input: CreateDatalakeCommandInput) {
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
  ): Handler<CreateDatalakeCommandInput, CreateDatalakeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDatalakeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityLakeClient";
    const commandName = "CreateDatalakeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDatalakeRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateDatalakeResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDatalakeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateDatalakeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDatalakeCommandOutput> {
    return deserializeAws_restJson1CreateDatalakeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
