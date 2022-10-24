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
  MigrationHubConfigClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MigrationHubConfigClient";
import {
  CreateHomeRegionControlRequest,
  CreateHomeRegionControlRequestFilterSensitiveLog,
  CreateHomeRegionControlResult,
  CreateHomeRegionControlResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateHomeRegionControlCommand,
  serializeAws_json1_1CreateHomeRegionControlCommand,
} from "../protocols/Aws_json1_1";

export interface CreateHomeRegionControlCommandInput extends CreateHomeRegionControlRequest {}
export interface CreateHomeRegionControlCommandOutput extends CreateHomeRegionControlResult, __MetadataBearer {}

/**
 * <p>This API sets up the home region for the calling account only.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubConfigClient, CreateHomeRegionControlCommand } from "@aws-sdk/client-migrationhub-config"; // ES Modules import
 * // const { MigrationHubConfigClient, CreateHomeRegionControlCommand } = require("@aws-sdk/client-migrationhub-config"); // CommonJS import
 * const client = new MigrationHubConfigClient(config);
 * const command = new CreateHomeRegionControlCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateHomeRegionControlCommandInput} for command's `input` shape.
 * @see {@link CreateHomeRegionControlCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubConfigClientResolvedConfig | config} for MigrationHubConfigClient's `config` shape.
 *
 */
export class CreateHomeRegionControlCommand extends $Command<
  CreateHomeRegionControlCommandInput,
  CreateHomeRegionControlCommandOutput,
  MigrationHubConfigClientResolvedConfig
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

  constructor(readonly input: CreateHomeRegionControlCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MigrationHubConfigClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateHomeRegionControlCommandInput, CreateHomeRegionControlCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateHomeRegionControlCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MigrationHubConfigClient";
    const commandName = "CreateHomeRegionControlCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateHomeRegionControlRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateHomeRegionControlResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateHomeRegionControlCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateHomeRegionControlCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateHomeRegionControlCommandOutput> {
    return deserializeAws_json1_1CreateHomeRegionControlCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
