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
  LicenseManagerUserSubscriptionsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../LicenseManagerUserSubscriptionsClient";
import {
  ListInstancesRequest,
  ListInstancesRequestFilterSensitiveLog,
  ListInstancesResponse,
  ListInstancesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListInstancesCommand,
  serializeAws_restJson1ListInstancesCommand,
} from "../protocols/Aws_restJson1";

export interface ListInstancesCommandInput extends ListInstancesRequest {}
export interface ListInstancesCommandOutput extends ListInstancesResponse, __MetadataBearer {}

/**
 * <p>Lists the EC2 instances providing user-based subscriptions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerUserSubscriptionsClient, ListInstancesCommand } from "@aws-sdk/client-license-manager-user-subscriptions"; // ES Modules import
 * // const { LicenseManagerUserSubscriptionsClient, ListInstancesCommand } = require("@aws-sdk/client-license-manager-user-subscriptions"); // CommonJS import
 * const client = new LicenseManagerUserSubscriptionsClient(config);
 * const command = new ListInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListInstancesCommandInput} for command's `input` shape.
 * @see {@link ListInstancesCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerUserSubscriptionsClientResolvedConfig | config} for LicenseManagerUserSubscriptionsClient's `config` shape.
 *
 */
export class ListInstancesCommand extends $Command<
  ListInstancesCommandInput,
  ListInstancesCommandOutput,
  LicenseManagerUserSubscriptionsClientResolvedConfig
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

  constructor(readonly input: ListInstancesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LicenseManagerUserSubscriptionsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListInstancesCommandInput, ListInstancesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListInstancesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LicenseManagerUserSubscriptionsClient";
    const commandName = "ListInstancesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListInstancesRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ListInstancesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListInstancesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListInstancesCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListInstancesCommandOutput> {
    return deserializeAws_restJson1ListInstancesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
