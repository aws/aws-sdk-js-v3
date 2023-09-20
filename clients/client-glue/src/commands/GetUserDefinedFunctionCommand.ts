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

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetUserDefinedFunctionRequest, GetUserDefinedFunctionResponse } from "../models/models_2";
import { de_GetUserDefinedFunctionCommand, se_GetUserDefinedFunctionCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetUserDefinedFunctionCommand}.
 */
export interface GetUserDefinedFunctionCommandInput extends GetUserDefinedFunctionRequest {}
/**
 * @public
 *
 * The output of {@link GetUserDefinedFunctionCommand}.
 */
export interface GetUserDefinedFunctionCommandOutput extends GetUserDefinedFunctionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves a specified function definition from the Data Catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetUserDefinedFunctionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetUserDefinedFunctionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // GetUserDefinedFunctionRequest
 *   CatalogId: "STRING_VALUE",
 *   DatabaseName: "STRING_VALUE", // required
 *   FunctionName: "STRING_VALUE", // required
 * };
 * const command = new GetUserDefinedFunctionCommand(input);
 * const response = await client.send(command);
 * // { // GetUserDefinedFunctionResponse
 * //   UserDefinedFunction: { // UserDefinedFunction
 * //     FunctionName: "STRING_VALUE",
 * //     DatabaseName: "STRING_VALUE",
 * //     ClassName: "STRING_VALUE",
 * //     OwnerName: "STRING_VALUE",
 * //     OwnerType: "USER" || "ROLE" || "GROUP",
 * //     CreateTime: new Date("TIMESTAMP"),
 * //     ResourceUris: [ // ResourceUriList
 * //       { // ResourceUri
 * //         ResourceType: "JAR" || "FILE" || "ARCHIVE",
 * //         Uri: "STRING_VALUE",
 * //       },
 * //     ],
 * //     CatalogId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetUserDefinedFunctionCommandInput - {@link GetUserDefinedFunctionCommandInput}
 * @returns {@link GetUserDefinedFunctionCommandOutput}
 * @see {@link GetUserDefinedFunctionCommandInput} for command's `input` shape.
 * @see {@link GetUserDefinedFunctionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link GlueEncryptionException} (client fault)
 *  <p>An encryption operation failed.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 */
export class GetUserDefinedFunctionCommand extends $Command<
  GetUserDefinedFunctionCommandInput,
  GetUserDefinedFunctionCommandOutput,
  GlueClientResolvedConfig
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
  constructor(readonly input: GetUserDefinedFunctionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetUserDefinedFunctionCommandInput, GetUserDefinedFunctionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetUserDefinedFunctionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetUserDefinedFunctionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSGlue",
        operation: "GetUserDefinedFunction",
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
  private serialize(input: GetUserDefinedFunctionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetUserDefinedFunctionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetUserDefinedFunctionCommandOutput> {
    return de_GetUserDefinedFunctionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
