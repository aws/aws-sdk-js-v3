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

import { CreateLensVersionInput, CreateLensVersionOutput } from "../models/models_0";
import {
  deserializeAws_restJson1CreateLensVersionCommand,
  serializeAws_restJson1CreateLensVersionCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";

/**
 * @public
 *
 * The input for {@link CreateLensVersionCommand}.
 */
export interface CreateLensVersionCommandInput extends CreateLensVersionInput {}
/**
 * @public
 *
 * The output of {@link CreateLensVersionCommand}.
 */
export interface CreateLensVersionCommandOutput extends CreateLensVersionOutput, __MetadataBearer {}

/**
 * @public
 * <p>Create a new lens version.</p>
 *         <p>A lens can have up to 100 versions.</p>
 *         <p>After a lens has been imported, create a new lens version to publish it.  The owner of a lens can share the lens with other
 *             Amazon Web Services accounts and IAM users in the same Amazon Web Services Region. Only the owner of a lens can delete it.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, CreateLensVersionCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, CreateLensVersionCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const command = new CreateLensVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateLensVersionCommandInput - {@link CreateLensVersionCommandInput}
 * @returns {@link CreateLensVersionCommandOutput}
 * @see {@link CreateLensVersionCommandInput} for command's `input` shape.
 * @see {@link CreateLensVersionCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The resource already exists.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is a problem with the Well-Architected Tool API service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The user has reached their resource quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The user input is not valid.</p>
 *
 *
 */
export class CreateLensVersionCommand extends $Command<
  CreateLensVersionCommandInput,
  CreateLensVersionCommandOutput,
  WellArchitectedClientResolvedConfig
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
  constructor(readonly input: CreateLensVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WellArchitectedClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateLensVersionCommandInput, CreateLensVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateLensVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WellArchitectedClient";
    const commandName = "CreateLensVersionCommand";
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
  private serialize(input: CreateLensVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateLensVersionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateLensVersionCommandOutput> {
    return deserializeAws_restJson1CreateLensVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
