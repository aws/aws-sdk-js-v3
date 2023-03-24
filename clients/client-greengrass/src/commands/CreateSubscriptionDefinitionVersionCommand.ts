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

import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import {
  CreateSubscriptionDefinitionVersionRequest,
  CreateSubscriptionDefinitionVersionResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateSubscriptionDefinitionVersionCommand,
  serializeAws_restJson1CreateSubscriptionDefinitionVersionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link CreateSubscriptionDefinitionVersionCommand}.
 */
export interface CreateSubscriptionDefinitionVersionCommandInput extends CreateSubscriptionDefinitionVersionRequest {}
/**
 * @public
 *
 * The output of {@link CreateSubscriptionDefinitionVersionCommand}.
 */
export interface CreateSubscriptionDefinitionVersionCommandOutput
  extends CreateSubscriptionDefinitionVersionResponse,
    __MetadataBearer {}

/**
 * @public
 * Creates a version of a subscription definition which has already been defined.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, CreateSubscriptionDefinitionVersionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, CreateSubscriptionDefinitionVersionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const input = {
 *   AmznClientToken: "STRING_VALUE",
 *   SubscriptionDefinitionId: "STRING_VALUE", // required
 *   Subscriptions: [
 *     {
 *       Id: "STRING_VALUE", // required
 *       Source: "STRING_VALUE", // required
 *       Subject: "STRING_VALUE", // required
 *       Target: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateSubscriptionDefinitionVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateSubscriptionDefinitionVersionCommandInput - {@link CreateSubscriptionDefinitionVersionCommandInput}
 * @returns {@link CreateSubscriptionDefinitionVersionCommandOutput}
 * @see {@link CreateSubscriptionDefinitionVersionCommandInput} for command's `input` shape.
 * @see {@link CreateSubscriptionDefinitionVersionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for GreengrassClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  General error information.
 *
 *
 */
export class CreateSubscriptionDefinitionVersionCommand extends $Command<
  CreateSubscriptionDefinitionVersionCommandInput,
  CreateSubscriptionDefinitionVersionCommandOutput,
  GreengrassClientResolvedConfig
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

  /**
   * @public
   */
  constructor(readonly input: CreateSubscriptionDefinitionVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateSubscriptionDefinitionVersionCommandInput, CreateSubscriptionDefinitionVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateSubscriptionDefinitionVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassClient";
    const commandName = "CreateSubscriptionDefinitionVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(
    input: CreateSubscriptionDefinitionVersionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateSubscriptionDefinitionVersionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateSubscriptionDefinitionVersionCommandOutput> {
    return deserializeAws_restJson1CreateSubscriptionDefinitionVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
