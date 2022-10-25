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

import { BillingconductorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BillingconductorClient";
import {
  CreateBillingGroupInput,
  CreateBillingGroupInputFilterSensitiveLog,
  CreateBillingGroupOutput,
  CreateBillingGroupOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateBillingGroupCommand,
  serializeAws_restJson1CreateBillingGroupCommand,
} from "../protocols/Aws_restJson1";

export interface CreateBillingGroupCommandInput extends CreateBillingGroupInput {}
export interface CreateBillingGroupCommandOutput extends CreateBillingGroupOutput, __MetadataBearer {}

/**
 * <p>
 *       Creates a billing group that resembles a consolidated billing family that Amazon Web Services charges, based off of the predefined pricing plan computation.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingconductorClient, CreateBillingGroupCommand } from "@aws-sdk/client-billingconductor"; // ES Modules import
 * // const { BillingconductorClient, CreateBillingGroupCommand } = require("@aws-sdk/client-billingconductor"); // CommonJS import
 * const client = new BillingconductorClient(config);
 * const command = new CreateBillingGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateBillingGroupCommandInput} for command's `input` shape.
 * @see {@link CreateBillingGroupCommandOutput} for command's `response` shape.
 * @see {@link BillingconductorClientResolvedConfig | config} for BillingconductorClient's `config` shape.
 *
 */
export class CreateBillingGroupCommand extends $Command<
  CreateBillingGroupCommandInput,
  CreateBillingGroupCommandOutput,
  BillingconductorClientResolvedConfig
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

  constructor(readonly input: CreateBillingGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BillingconductorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateBillingGroupCommandInput, CreateBillingGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateBillingGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BillingconductorClient";
    const commandName = "CreateBillingGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateBillingGroupInputFilterSensitiveLog,
      outputFilterSensitiveLog: CreateBillingGroupOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateBillingGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateBillingGroupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateBillingGroupCommandOutput> {
    return deserializeAws_restJson1CreateBillingGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
