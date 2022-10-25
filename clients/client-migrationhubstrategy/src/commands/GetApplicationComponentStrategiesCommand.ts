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
  MigrationHubStrategyClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MigrationHubStrategyClient";
import {
  GetApplicationComponentStrategiesRequest,
  GetApplicationComponentStrategiesRequestFilterSensitiveLog,
  GetApplicationComponentStrategiesResponse,
  GetApplicationComponentStrategiesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetApplicationComponentStrategiesCommand,
  serializeAws_restJson1GetApplicationComponentStrategiesCommand,
} from "../protocols/Aws_restJson1";

export interface GetApplicationComponentStrategiesCommandInput extends GetApplicationComponentStrategiesRequest {}
export interface GetApplicationComponentStrategiesCommandOutput
  extends GetApplicationComponentStrategiesResponse,
    __MetadataBearer {}

/**
 * <p> Retrieves a list of all the recommended strategies and tools for an application component
 *       running on a server. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubStrategyClient, GetApplicationComponentStrategiesCommand } from "@aws-sdk/client-migrationhubstrategy"; // ES Modules import
 * // const { MigrationHubStrategyClient, GetApplicationComponentStrategiesCommand } = require("@aws-sdk/client-migrationhubstrategy"); // CommonJS import
 * const client = new MigrationHubStrategyClient(config);
 * const command = new GetApplicationComponentStrategiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetApplicationComponentStrategiesCommandInput} for command's `input` shape.
 * @see {@link GetApplicationComponentStrategiesCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubStrategyClientResolvedConfig | config} for MigrationHubStrategyClient's `config` shape.
 *
 */
export class GetApplicationComponentStrategiesCommand extends $Command<
  GetApplicationComponentStrategiesCommandInput,
  GetApplicationComponentStrategiesCommandOutput,
  MigrationHubStrategyClientResolvedConfig
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

  constructor(readonly input: GetApplicationComponentStrategiesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MigrationHubStrategyClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetApplicationComponentStrategiesCommandInput, GetApplicationComponentStrategiesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetApplicationComponentStrategiesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MigrationHubStrategyClient";
    const commandName = "GetApplicationComponentStrategiesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetApplicationComponentStrategiesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetApplicationComponentStrategiesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetApplicationComponentStrategiesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetApplicationComponentStrategiesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetApplicationComponentStrategiesCommandOutput> {
    return deserializeAws_restJson1GetApplicationComponentStrategiesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
