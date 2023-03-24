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

import { DrsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DrsClient";
import {
  CreateExtendedSourceServerRequest,
  CreateExtendedSourceServerRequestFilterSensitiveLog,
  CreateExtendedSourceServerResponse,
  CreateExtendedSourceServerResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateExtendedSourceServerCommand,
  serializeAws_restJson1CreateExtendedSourceServerCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link CreateExtendedSourceServerCommand}.
 */
export interface CreateExtendedSourceServerCommandInput extends CreateExtendedSourceServerRequest {}
/**
 * @public
 *
 * The output of {@link CreateExtendedSourceServerCommand}.
 */
export interface CreateExtendedSourceServerCommandOutput extends CreateExtendedSourceServerResponse, __MetadataBearer {}

/**
 * @public
 * <p>Create an extended source server in the target Account based on the source server in staging account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, CreateExtendedSourceServerCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, CreateExtendedSourceServerCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * const client = new DrsClient(config);
 * const input = {
 *   sourceServerArn: "STRING_VALUE", // required
 *   tags: {
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateExtendedSourceServerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateExtendedSourceServerCommandInput - {@link CreateExtendedSourceServerCommandInput}
 * @returns {@link CreateExtendedSourceServerCommandOutput}
 * @see {@link CreateExtendedSourceServerCommandInput} for command's `input` shape.
 * @see {@link CreateExtendedSourceServerCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource for this operation was not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request could not be completed because its exceeded the service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>The account performing the request has not been initialized.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the AWS service.</p>
 *
 *
 */
export class CreateExtendedSourceServerCommand extends $Command<
  CreateExtendedSourceServerCommandInput,
  CreateExtendedSourceServerCommandOutput,
  DrsClientResolvedConfig
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
  constructor(readonly input: CreateExtendedSourceServerCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DrsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateExtendedSourceServerCommandInput, CreateExtendedSourceServerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateExtendedSourceServerCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DrsClient";
    const commandName = "CreateExtendedSourceServerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateExtendedSourceServerRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateExtendedSourceServerResponseFilterSensitiveLog,
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
  private serialize(input: CreateExtendedSourceServerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateExtendedSourceServerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateExtendedSourceServerCommandOutput> {
    return deserializeAws_restJson1CreateExtendedSourceServerCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
