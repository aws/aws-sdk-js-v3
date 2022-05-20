// smithy-typescript generated code
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
import { GetRouteRequest, GetRouteResponse } from "../models/models_0";
import {
  deserializeAws_restJson1GetRouteCommand,
  serializeAws_restJson1GetRouteCommand,
} from "../protocols/Aws_restJson1";

export interface GetRouteCommandInput extends GetRouteRequest {}
export interface GetRouteCommandOutput extends GetRouteResponse, __MetadataBearer {}

/**
 * <p>Gets an Amazon Web Services Migration Hub Refactor Spaces route.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubRefactorSpacesClient, GetRouteCommand } from "@aws-sdk/client-migration-hub-refactor-spaces"; // ES Modules import
 * // const { MigrationHubRefactorSpacesClient, GetRouteCommand } = require("@aws-sdk/client-migration-hub-refactor-spaces"); // CommonJS import
 * const client = new MigrationHubRefactorSpacesClient(config);
 * const command = new GetRouteCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRouteCommandInput} for command's `input` shape.
 * @see {@link GetRouteCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubRefactorSpacesClientResolvedConfig | config} for MigrationHubRefactorSpacesClient's `config` shape.
 *
 */
export class GetRouteCommand extends $Command<
  GetRouteCommandInput,
  GetRouteCommandOutput,
  MigrationHubRefactorSpacesClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetRouteCommandInput) {
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
  ): Handler<GetRouteCommandInput, GetRouteCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MigrationHubRefactorSpacesClient";
    const commandName = "GetRouteCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetRouteRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetRouteResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetRouteCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetRouteCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetRouteCommandOutput> {
    return deserializeAws_restJson1GetRouteCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
