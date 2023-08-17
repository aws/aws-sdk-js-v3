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
import { CreateCustomEntityTypeRequest, CreateCustomEntityTypeResponse } from "../models/models_0";
import { de_CreateCustomEntityTypeCommand, se_CreateCustomEntityTypeCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateCustomEntityTypeCommand}.
 */
export interface CreateCustomEntityTypeCommandInput extends CreateCustomEntityTypeRequest {}
/**
 * @public
 *
 * The output of {@link CreateCustomEntityTypeCommand}.
 */
export interface CreateCustomEntityTypeCommandOutput extends CreateCustomEntityTypeResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a custom pattern that is used to detect sensitive data across the columns and rows of your structured data.</p>
 *          <p>Each custom pattern you create specifies a regular expression and an optional list of context words. If no context words are passed only a regular expression is checked.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreateCustomEntityTypeCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreateCustomEntityTypeCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // CreateCustomEntityTypeRequest
 *   Name: "STRING_VALUE", // required
 *   RegexString: "STRING_VALUE", // required
 *   ContextWords: [ // ContextWords
 *     "STRING_VALUE",
 *   ],
 *   Tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateCustomEntityTypeCommand(input);
 * const response = await client.send(command);
 * // { // CreateCustomEntityTypeResponse
 * //   Name: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateCustomEntityTypeCommandInput - {@link CreateCustomEntityTypeCommandInput}
 * @returns {@link CreateCustomEntityTypeCommandOutput}
 * @see {@link CreateCustomEntityTypeCommandInput} for command's `input` shape.
 * @see {@link CreateCustomEntityTypeCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>A resource to be created or added already exists.</p>
 *
 * @throws {@link IdempotentParameterMismatchException} (client fault)
 *  <p>The same unique identifier was associated with two different records.</p>
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
 * @throws {@link ResourceNumberLimitExceededException} (client fault)
 *  <p>A resource numerical limit was exceeded.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 */
export class CreateCustomEntityTypeCommand extends $Command<
  CreateCustomEntityTypeCommandInput,
  CreateCustomEntityTypeCommandOutput,
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
  constructor(readonly input: CreateCustomEntityTypeCommandInput) {
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
  ): Handler<CreateCustomEntityTypeCommandInput, CreateCustomEntityTypeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateCustomEntityTypeCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "CreateCustomEntityTypeCommand";
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
  private serialize(input: CreateCustomEntityTypeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateCustomEntityTypeCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateCustomEntityTypeCommandOutput> {
    return de_CreateCustomEntityTypeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
