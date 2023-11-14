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
import { Uint8ArrayBlobAdapter } from "@smithy/util-stream";

import { GetCodeBindingSourceRequest, GetCodeBindingSourceResponse } from "../models/models_0";
import { de_GetCodeBindingSourceCommand, se_GetCodeBindingSourceCommand } from "../protocols/Aws_restJson1";
import { SchemasClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SchemasClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetCodeBindingSourceCommand}.
 */
export interface GetCodeBindingSourceCommandInput extends GetCodeBindingSourceRequest {}
/**
 * @public
 */
export type GetCodeBindingSourceCommandOutputType = Omit<GetCodeBindingSourceResponse, "Body"> & {
  Body?: Uint8ArrayBlobAdapter;
};

/**
 * @public
 *
 * The output of {@link GetCodeBindingSourceCommand}.
 */
export interface GetCodeBindingSourceCommandOutput extends GetCodeBindingSourceCommandOutputType, __MetadataBearer {}

/**
 * @public
 * <p>Get the code binding source URI.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SchemasClient, GetCodeBindingSourceCommand } from "@aws-sdk/client-schemas"; // ES Modules import
 * // const { SchemasClient, GetCodeBindingSourceCommand } = require("@aws-sdk/client-schemas"); // CommonJS import
 * const client = new SchemasClient(config);
 * const input = { // GetCodeBindingSourceRequest
 *   Language: "STRING_VALUE", // required
 *   RegistryName: "STRING_VALUE", // required
 *   SchemaName: "STRING_VALUE", // required
 *   SchemaVersion: "STRING_VALUE",
 * };
 * const command = new GetCodeBindingSourceCommand(input);
 * const response = await client.send(command);
 * // { // GetCodeBindingSourceResponse
 * //   Body: "BLOB_VALUE",
 * // };
 *
 * ```
 *
 * @param GetCodeBindingSourceCommandInput - {@link GetCodeBindingSourceCommandInput}
 * @returns {@link GetCodeBindingSourceCommandOutput}
 * @see {@link GetCodeBindingSourceCommandInput} for command's `input` shape.
 * @see {@link GetCodeBindingSourceCommandOutput} for command's `response` shape.
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
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * @throws {@link SchemasServiceException}
 * <p>Base exception class for all service exceptions from Schemas service.</p>
 *
 */
export class GetCodeBindingSourceCommand extends $Command<
  GetCodeBindingSourceCommandInput,
  GetCodeBindingSourceCommandOutput,
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
  constructor(readonly input: GetCodeBindingSourceCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SchemasClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCodeBindingSourceCommandInput, GetCodeBindingSourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetCodeBindingSourceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SchemasClient";
    const commandName = "GetCodeBindingSourceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "schemas",
        operation: "GetCodeBindingSource",
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
  private serialize(input: GetCodeBindingSourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetCodeBindingSourceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCodeBindingSourceCommandOutput> {
    return de_GetCodeBindingSourceCommand(output, context);
  }
}
