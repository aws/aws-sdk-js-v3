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
  MigrationHubRefactorSpacesClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MigrationHubRefactorSpacesClient";
import {
  ListEnvironmentVpcsRequest,
  ListEnvironmentVpcsRequestFilterSensitiveLog,
  ListEnvironmentVpcsResponse,
  ListEnvironmentVpcsResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListEnvironmentVpcsCommand,
  serializeAws_restJson1ListEnvironmentVpcsCommand,
} from "../protocols/Aws_restJson1";

export interface ListEnvironmentVpcsCommandInput extends ListEnvironmentVpcsRequest {}
export interface ListEnvironmentVpcsCommandOutput extends ListEnvironmentVpcsResponse, __MetadataBearer {}

/**
 * <p>Lists all Amazon Web Services Migration Hub Refactor Spaces service virtual private clouds (VPCs) that are part of the
 *       environment. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubRefactorSpacesClient, ListEnvironmentVpcsCommand } from "@aws-sdk/client-migration-hub-refactor-spaces"; // ES Modules import
 * // const { MigrationHubRefactorSpacesClient, ListEnvironmentVpcsCommand } = require("@aws-sdk/client-migration-hub-refactor-spaces"); // CommonJS import
 * const client = new MigrationHubRefactorSpacesClient(config);
 * const command = new ListEnvironmentVpcsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEnvironmentVpcsCommandInput} for command's `input` shape.
 * @see {@link ListEnvironmentVpcsCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubRefactorSpacesClientResolvedConfig | config} for MigrationHubRefactorSpacesClient's `config` shape.
 *
 */
export class ListEnvironmentVpcsCommand extends $Command<
  ListEnvironmentVpcsCommandInput,
  ListEnvironmentVpcsCommandOutput,
  MigrationHubRefactorSpacesClientResolvedConfig
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

  constructor(readonly input: ListEnvironmentVpcsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MigrationHubRefactorSpacesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListEnvironmentVpcsCommandInput, ListEnvironmentVpcsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListEnvironmentVpcsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MigrationHubRefactorSpacesClient";
    const commandName = "ListEnvironmentVpcsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListEnvironmentVpcsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListEnvironmentVpcsResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListEnvironmentVpcsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListEnvironmentVpcsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListEnvironmentVpcsCommandOutput> {
    return deserializeAws_restJson1ListEnvironmentVpcsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
