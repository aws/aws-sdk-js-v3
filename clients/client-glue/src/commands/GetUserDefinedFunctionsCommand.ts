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
} from "@smithy/types";

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetUserDefinedFunctionsRequest, GetUserDefinedFunctionsResponse } from "../models/models_2";
import { de_GetUserDefinedFunctionsCommand, se_GetUserDefinedFunctionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetUserDefinedFunctionsCommand}.
 */
export interface GetUserDefinedFunctionsCommandInput extends GetUserDefinedFunctionsRequest {}
/**
 * @public
 *
 * The output of {@link GetUserDefinedFunctionsCommand}.
 */
export interface GetUserDefinedFunctionsCommandOutput extends GetUserDefinedFunctionsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves multiple function definitions from the Data Catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetUserDefinedFunctionsCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetUserDefinedFunctionsCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // GetUserDefinedFunctionsRequest
 *   CatalogId: "STRING_VALUE",
 *   DatabaseName: "STRING_VALUE",
 *   Pattern: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new GetUserDefinedFunctionsCommand(input);
 * const response = await client.send(command);
 * // { // GetUserDefinedFunctionsResponse
 * //   UserDefinedFunctions: [ // UserDefinedFunctionList
 * //     { // UserDefinedFunction
 * //       FunctionName: "STRING_VALUE",
 * //       DatabaseName: "STRING_VALUE",
 * //       ClassName: "STRING_VALUE",
 * //       OwnerName: "STRING_VALUE",
 * //       OwnerType: "USER" || "ROLE" || "GROUP",
 * //       CreateTime: new Date("TIMESTAMP"),
 * //       ResourceUris: [ // ResourceUriList
 * //         { // ResourceUri
 * //           ResourceType: "JAR" || "FILE" || "ARCHIVE",
 * //           Uri: "STRING_VALUE",
 * //         },
 * //       ],
 * //       CatalogId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetUserDefinedFunctionsCommandInput - {@link GetUserDefinedFunctionsCommandInput}
 * @returns {@link GetUserDefinedFunctionsCommandOutput}
 * @see {@link GetUserDefinedFunctionsCommandInput} for command's `input` shape.
 * @see {@link GetUserDefinedFunctionsCommandOutput} for command's `response` shape.
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
export class GetUserDefinedFunctionsCommand extends $Command<
  GetUserDefinedFunctionsCommandInput,
  GetUserDefinedFunctionsCommandOutput,
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
  constructor(readonly input: GetUserDefinedFunctionsCommandInput) {
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
  ): Handler<GetUserDefinedFunctionsCommandInput, GetUserDefinedFunctionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetUserDefinedFunctionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetUserDefinedFunctionsCommand";
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
  private serialize(input: GetUserDefinedFunctionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetUserDefinedFunctionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetUserDefinedFunctionsCommandOutput> {
    return de_GetUserDefinedFunctionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
