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

import { CreateImportJobRequest, CreateImportJobResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateImportJobCommand,
  serializeAws_restJson1CreateImportJobCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SESv2ClientResolvedConfig } from "../SESv2Client";

/**
 * @public
 *
 * The input for {@link CreateImportJobCommand}.
 */
export interface CreateImportJobCommandInput extends CreateImportJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateImportJobCommand}.
 */
export interface CreateImportJobCommandOutput extends CreateImportJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates an import job for a data destination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, CreateImportJobCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, CreateImportJobCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new CreateImportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateImportJobCommandInput - {@link CreateImportJobCommandInput}
 * @returns {@link CreateImportJobCommandOutput}
 * @see {@link CreateImportJobCommandInput} for command's `input` shape.
 * @see {@link CreateImportJobCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>There are too many instances of the specified resource type.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many requests have been made to the operation.</p>
 *
 *
 */
export class CreateImportJobCommand extends $Command<
  CreateImportJobCommandInput,
  CreateImportJobCommandOutput,
  SESv2ClientResolvedConfig
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
  constructor(readonly input: CreateImportJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESv2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateImportJobCommandInput, CreateImportJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateImportJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESv2Client";
    const commandName = "CreateImportJobCommand";
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
  private serialize(input: CreateImportJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateImportJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateImportJobCommandOutput> {
    return deserializeAws_restJson1CreateImportJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
