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

import { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { GetSchemaInput, GetSchemaOutput } from "../models/models_0";
import {
  deserializeAws_restJson1GetSchemaCommand,
  serializeAws_restJson1GetSchemaCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 *
 * The input for {@link GetSchemaCommand}.
 */
export interface GetSchemaCommandInput extends GetSchemaInput {}
/**
 * @public
 *
 * The output of {@link GetSchemaCommand}.
 */
export interface GetSchemaCommandOutput extends GetSchemaOutput, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the schema for a relation within a collaboration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, GetSchemaCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, GetSchemaCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * const client = new CleanRoomsClient(config);
 * const command = new GetSchemaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetSchemaCommandInput - {@link GetSchemaCommandInput}
 * @returns {@link GetSchemaCommandOutput}
 * @see {@link GetSchemaCommandInput} for command's `input` shape.
 * @see {@link GetSchemaCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Caller does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the specified constraints.</p>
 *
 *
 */
export class GetSchemaCommand extends $Command<
  GetSchemaCommandInput,
  GetSchemaCommandOutput,
  CleanRoomsClientResolvedConfig
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
  constructor(readonly input: GetSchemaCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CleanRoomsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSchemaCommandInput, GetSchemaCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetSchemaCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CleanRoomsClient";
    const commandName = "GetSchemaCommand";
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
  private serialize(input: GetSchemaCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetSchemaCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSchemaCommandOutput> {
    return deserializeAws_restJson1GetSchemaCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
