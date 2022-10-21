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

import { MigrationHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubClient";
import {
  ListCreatedArtifactsRequest,
  ListCreatedArtifactsRequestFilterSensitiveLog,
  ListCreatedArtifactsResult,
  ListCreatedArtifactsResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListCreatedArtifactsCommand,
  serializeAws_json1_1ListCreatedArtifactsCommand,
} from "../protocols/Aws_json1_1";

export interface ListCreatedArtifactsCommandInput extends ListCreatedArtifactsRequest {}
export interface ListCreatedArtifactsCommandOutput extends ListCreatedArtifactsResult, __MetadataBearer {}

/**
 * <p>Lists the created artifacts attached to a given migration task in an update stream. This
 *          API has the following traits:</p>
 *          <ul>
 *             <li>
 *                <p>Gets the list of the created artifacts while
 *                migration is taking place.</p>
 *             </li>
 *             <li>
 *                <p>Shows the artifacts created by the migration tool that was associated by the
 *                   <code>AssociateCreatedArtifact</code> API. </p>
 *             </li>
 *             <li>
 *                <p>Lists created artifacts in a paginated interface. </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MigrationHubClient, ListCreatedArtifactsCommand } from "@aws-sdk/client-migration-hub"; // ES Modules import
 * // const { MigrationHubClient, ListCreatedArtifactsCommand } = require("@aws-sdk/client-migration-hub"); // CommonJS import
 * const client = new MigrationHubClient(config);
 * const command = new ListCreatedArtifactsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCreatedArtifactsCommandInput} for command's `input` shape.
 * @see {@link ListCreatedArtifactsCommandOutput} for command's `response` shape.
 * @see {@link MigrationHubClientResolvedConfig | config} for MigrationHubClient's `config` shape.
 *
 */
export class ListCreatedArtifactsCommand extends $Command<
  ListCreatedArtifactsCommandInput,
  ListCreatedArtifactsCommandOutput,
  MigrationHubClientResolvedConfig
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

  constructor(readonly input: ListCreatedArtifactsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MigrationHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListCreatedArtifactsCommandInput, ListCreatedArtifactsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListCreatedArtifactsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MigrationHubClient";
    const commandName = "ListCreatedArtifactsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListCreatedArtifactsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListCreatedArtifactsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListCreatedArtifactsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListCreatedArtifactsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListCreatedArtifactsCommandOutput> {
    return deserializeAws_json1_1ListCreatedArtifactsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
