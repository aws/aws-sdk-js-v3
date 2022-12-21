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
  LicenseManagerLinuxSubscriptionsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LicenseManagerLinuxSubscriptionsClient";
import {
  ListLinuxSubscriptionInstancesRequest,
  ListLinuxSubscriptionInstancesRequestFilterSensitiveLog,
  ListLinuxSubscriptionInstancesResponse,
  ListLinuxSubscriptionInstancesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListLinuxSubscriptionInstancesCommand,
  serializeAws_restJson1ListLinuxSubscriptionInstancesCommand,
} from "../protocols/Aws_restJson1";

export interface ListLinuxSubscriptionInstancesCommandInput extends ListLinuxSubscriptionInstancesRequest {}
export interface ListLinuxSubscriptionInstancesCommandOutput
  extends ListLinuxSubscriptionInstancesResponse,
    __MetadataBearer {}

/**
 * <p>Lists the running Amazon EC2 instances that were discovered with commercial Linux
 *       subscriptions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerLinuxSubscriptionsClient, ListLinuxSubscriptionInstancesCommand } from "@aws-sdk/client-license-manager-linux-subscriptions"; // ES Modules import
 * // const { LicenseManagerLinuxSubscriptionsClient, ListLinuxSubscriptionInstancesCommand } = require("@aws-sdk/client-license-manager-linux-subscriptions"); // CommonJS import
 * const client = new LicenseManagerLinuxSubscriptionsClient(config);
 * const command = new ListLinuxSubscriptionInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLinuxSubscriptionInstancesCommandInput} for command's `input` shape.
 * @see {@link ListLinuxSubscriptionInstancesCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerLinuxSubscriptionsClientResolvedConfig | config} for LicenseManagerLinuxSubscriptionsClient's `config` shape.
 *
 */
export class ListLinuxSubscriptionInstancesCommand extends $Command<
  ListLinuxSubscriptionInstancesCommandInput,
  ListLinuxSubscriptionInstancesCommandOutput,
  LicenseManagerLinuxSubscriptionsClientResolvedConfig
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

  constructor(readonly input: ListLinuxSubscriptionInstancesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LicenseManagerLinuxSubscriptionsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListLinuxSubscriptionInstancesCommandInput, ListLinuxSubscriptionInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListLinuxSubscriptionInstancesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LicenseManagerLinuxSubscriptionsClient";
    const commandName = "ListLinuxSubscriptionInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListLinuxSubscriptionInstancesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListLinuxSubscriptionInstancesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListLinuxSubscriptionInstancesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1ListLinuxSubscriptionInstancesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListLinuxSubscriptionInstancesCommandOutput> {
    return deserializeAws_restJson1ListLinuxSubscriptionInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
