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
  MarketplaceCatalogClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MarketplaceCatalogClient";
import {
  StartChangeSetRequest,
  StartChangeSetRequestFilterSensitiveLog,
  StartChangeSetResponse,
  StartChangeSetResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1StartChangeSetCommand,
  serializeAws_restJson1StartChangeSetCommand,
} from "../protocols/Aws_restJson1";

export interface StartChangeSetCommandInput extends StartChangeSetRequest {}
export interface StartChangeSetCommandOutput extends StartChangeSetResponse, __MetadataBearer {}

/**
 * <p>Allows you to request changes for your entities. Within a single
 *                 <code>ChangeSet</code>, you can't start the same change type against the same entity
 *             multiple times. Additionally, when a <code>ChangeSet</code> is running, all the entities
 *             targeted by the different changes are locked until the change set has completed (either
 *             succeeded, cancelled, or failed). If you try to start a change set containing a change
 *             against an entity that is already locked, you will receive a
 *                 <code>ResourceInUseException</code> error.</p>
 *         <p>For example, you can't start the <code>ChangeSet</code> described in the <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/API_StartChangeSet.html#API_StartChangeSet_Examples">example</a> later in this topic because it contains two changes to run the same
 *             change type (<code>AddRevisions</code>) against the same entity
 *                 (<code>entity-id@1</code>).</p>
 *         <p>For more information about working with change sets, see <a href="https://docs.aws.amazon.com/marketplace-catalog/latest/api-reference/welcome.html#working-with-change-sets"> Working with change sets</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceCatalogClient, StartChangeSetCommand } from "@aws-sdk/client-marketplace-catalog"; // ES Modules import
 * // const { MarketplaceCatalogClient, StartChangeSetCommand } = require("@aws-sdk/client-marketplace-catalog"); // CommonJS import
 * const client = new MarketplaceCatalogClient(config);
 * const command = new StartChangeSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartChangeSetCommandInput} for command's `input` shape.
 * @see {@link StartChangeSetCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceCatalogClientResolvedConfig | config} for MarketplaceCatalogClient's `config` shape.
 *
 */
export class StartChangeSetCommand extends $Command<
  StartChangeSetCommandInput,
  StartChangeSetCommandOutput,
  MarketplaceCatalogClientResolvedConfig
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

  constructor(readonly input: StartChangeSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MarketplaceCatalogClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartChangeSetCommandInput, StartChangeSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartChangeSetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MarketplaceCatalogClient";
    const commandName = "StartChangeSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartChangeSetRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartChangeSetResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartChangeSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartChangeSetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartChangeSetCommandOutput> {
    return deserializeAws_restJson1StartChangeSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
