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

import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import {
  ListProvisionedCapacityInput,
  ListProvisionedCapacityInputFilterSensitiveLog,
  ListProvisionedCapacityOutput,
  ListProvisionedCapacityOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ListProvisionedCapacityCommand,
  serializeAws_restJson1ListProvisionedCapacityCommand,
} from "../protocols/Aws_restJson1";

/**
 * The input for {@link ListProvisionedCapacityCommand}.
 */
export interface ListProvisionedCapacityCommandInput extends ListProvisionedCapacityInput {}
/**
 * The output of {@link ListProvisionedCapacityCommand}.
 */
export interface ListProvisionedCapacityCommandOutput extends ListProvisionedCapacityOutput, __MetadataBearer {}

/**
 * <p>This operation lists the provisioned capacity units for the specified AWS
 *          account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, ListProvisionedCapacityCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, ListProvisionedCapacityCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const command = new ListProvisionedCapacityCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListProvisionedCapacityCommandInput} for command's `input` shape.
 * @see {@link ListProvisionedCapacityCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for GlacierClient's `config` shape.
 *
 * @example To list the provisioned capacity units for an account
 * ```javascript
 * // The example lists the provisioned capacity units for an account.
 * const input = {
 *   "accountId": "-"
 * };
 * const command = new ListProvisionedCapacityCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ProvisionedCapacityList": [
 *     {
 *       "CapacityId": "zSaq7NzHFQDANTfQkDen4V7z",
 *       "ExpirationDate": "2016-12-12T00:00:00.000Z",
 *       "StartDate": "2016-11-11T20:11:51.095Z"
 *     },
 *     {
 *       "CapacityId": "yXaq7NzHFQNADTfQkDen4V7z",
 *       "ExpirationDate": "2017-01-15T00:00:00.000Z",
 *       "StartDate": "2016-12-13T20:11:51.095Z"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 */
export class ListProvisionedCapacityCommand extends $Command<
  ListProvisionedCapacityCommandInput,
  ListProvisionedCapacityCommandOutput,
  GlacierClientResolvedConfig
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

  constructor(readonly input: ListProvisionedCapacityCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlacierClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListProvisionedCapacityCommandInput, ListProvisionedCapacityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListProvisionedCapacityCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlacierClient";
    const commandName = "ListProvisionedCapacityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListProvisionedCapacityInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListProvisionedCapacityOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListProvisionedCapacityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ListProvisionedCapacityCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListProvisionedCapacityCommandOutput> {
    return deserializeAws_restJson1ListProvisionedCapacityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
