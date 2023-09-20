// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { GetDiscoveredSchemaRequest, GetDiscoveredSchemaResponse } from "../models/models_0";
import { de_GetDiscoveredSchemaCommand, se_GetDiscoveredSchemaCommand } from "../protocols/Aws_restJson1";
import { SchemasClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchemasClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetDiscoveredSchemaCommand}.
 */
export interface GetDiscoveredSchemaCommandInput extends GetDiscoveredSchemaRequest {}
/**
 * @public
 *
 * The output of {@link GetDiscoveredSchemaCommand}.
 */
export interface GetDiscoveredSchemaCommandOutput extends GetDiscoveredSchemaResponse, __MetadataBearer {}

/**
 * @public
 * <p>Get the discovered schema that was generated based on sampled events.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, GetDiscoveredSchemaCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, GetDiscoveredSchemaCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * const client = new SchemasClient(config);
 * const input = { // GetDiscoveredSchemaRequest
 *   Events: [ // __listOfGetDiscoveredSchemaVersionItemInput // required
 *     "STRING_VALUE",
 *   ],
 *   Type: "OpenApi3" || "JSONSchemaDraft4", // required
 * };
 * const command = new GetDiscoveredSchemaCommand(input);
 * const response = await client.send(command);
 * // { // GetDiscoveredSchemaResponse
 * //   Content: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDiscoveredSchemaCommandInput - {@link GetDiscoveredSchemaCommandInput}
 * @returns {@link GetDiscoveredSchemaCommandOutput}
 * @see {@link GetDiscoveredSchemaCommandInput} for command's `input` shape.
 * @see {@link GetDiscoveredSchemaCommandOutput} for command's `response` shape.
 * @see {@link SchemasClientResolvedConfig | config} for SchemasClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * @throws {@link SchemasServiceException}
 * <p>Base exception class for all service exceptions from Schemas service.</p>
 *
 */
export class GetDiscoveredSchemaCommand extends $Command<
  GetDiscoveredSchemaCommandInput,
  GetDiscoveredSchemaCommandOutput,
  SchemasClientResolvedConfig
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
  constructor(readonly input: GetDiscoveredSchemaCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SchemasClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDiscoveredSchemaCommandInput, GetDiscoveredSchemaCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDiscoveredSchemaCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SchemasClient";
    const commandName = "GetDiscoveredSchemaCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "schemas",
        operation: "GetDiscoveredSchema",
      },
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
  private serialize(input: GetDiscoveredSchemaCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetDiscoveredSchemaCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDiscoveredSchemaCommandOutput> {
    return de_GetDiscoveredSchemaCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
