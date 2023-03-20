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

import { CreateJourneyRequest, CreateJourneyResponse } from "../models/models_0";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import {
  deserializeAws_restJson1CreateJourneyCommand,
  serializeAws_restJson1CreateJourneyCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link CreateJourneyCommand}.
 */
export interface CreateJourneyCommandInput extends CreateJourneyRequest {}
/**
 * @public
 *
 * The output of {@link CreateJourneyCommand}.
 */
export interface CreateJourneyCommandOutput extends CreateJourneyResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a journey for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, CreateJourneyCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, CreateJourneyCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new CreateJourneyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateJourneyCommandInput - {@link CreateJourneyCommandInput}
 * @returns {@link CreateJourneyCommandOutput}
 * @see {@link CreateJourneyCommandInput} for command's `input` shape.
 * @see {@link CreateJourneyCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for PinpointClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PayloadTooLargeException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 *
 */
export class CreateJourneyCommand extends $Command<
  CreateJourneyCommandInput,
  CreateJourneyCommandOutput,
  PinpointClientResolvedConfig
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
  constructor(readonly input: CreateJourneyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateJourneyCommandInput, CreateJourneyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateJourneyCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointClient";
    const commandName = "CreateJourneyCommand";
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
  private serialize(input: CreateJourneyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateJourneyCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateJourneyCommandOutput> {
    return deserializeAws_restJson1CreateJourneyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
