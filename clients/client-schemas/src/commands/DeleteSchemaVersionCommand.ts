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

import { DeleteSchemaVersionRequest } from "../models/models_0";
import { de_DeleteSchemaVersionCommand, se_DeleteSchemaVersionCommand } from "../protocols/Aws_restJson1";
import { SchemasClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchemasClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteSchemaVersionCommand}.
 */
export interface DeleteSchemaVersionCommandInput extends DeleteSchemaVersionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSchemaVersionCommand}.
 */
export interface DeleteSchemaVersionCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Delete the schema version definition</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, DeleteSchemaVersionCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, DeleteSchemaVersionCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * const client = new SchemasClient(config);
 * const input = { // DeleteSchemaVersionRequest
 *   RegistryName: "STRING_VALUE", // required
 *   SchemaName: "STRING_VALUE", // required
 *   SchemaVersion: "STRING_VALUE", // required
 * };
 * const command = new DeleteSchemaVersionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSchemaVersionCommandInput - {@link DeleteSchemaVersionCommandInput}
 * @returns {@link DeleteSchemaVersionCommandOutput}
 * @see {@link DeleteSchemaVersionCommandInput} for command's `input` shape.
 * @see {@link DeleteSchemaVersionCommandOutput} for command's `response` shape.
 * @see {@link SchemasClientResolvedConfig | config} for SchemasClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * @throws {@link SchemasServiceException}
 * <p>Base exception class for all service exceptions from Schemas service.</p>
 *
 */
export class DeleteSchemaVersionCommand extends $Command<
  DeleteSchemaVersionCommandInput,
  DeleteSchemaVersionCommandOutput,
  SchemasClientResolvedConfig
> {
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
  constructor(readonly input: DeleteSchemaVersionCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SchemasClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteSchemaVersionCommandInput, DeleteSchemaVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteSchemaVersionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SchemasClient";
    const commandName = "DeleteSchemaVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "schemas",
        operation: "DeleteSchemaVersion",
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
  private serialize(input: DeleteSchemaVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteSchemaVersionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteSchemaVersionCommandOutput> {
    return de_DeleteSchemaVersionCommand(output, context);
  }
}
