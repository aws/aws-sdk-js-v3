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
import { CreateTableOptimizerRequest, CreateTableOptimizerResponse } from "../models/models_1";
import { de_CreateTableOptimizerCommand, se_CreateTableOptimizerCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateTableOptimizerCommand}.
 */
export interface CreateTableOptimizerCommandInput extends CreateTableOptimizerRequest {}
/**
 * @public
 *
 * The output of {@link CreateTableOptimizerCommand}.
 */
export interface CreateTableOptimizerCommandOutput extends CreateTableOptimizerResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new table optimizer for a specific function. <code>compaction</code> is the only currently supported optimizer type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, CreateTableOptimizerCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, CreateTableOptimizerCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // CreateTableOptimizerRequest
 *   CatalogId: "STRING_VALUE", // required
 *   DatabaseName: "STRING_VALUE", // required
 *   TableName: "STRING_VALUE", // required
 *   Type: "compaction", // required
 *   TableOptimizerConfiguration: { // TableOptimizerConfiguration
 *     roleArn: "STRING_VALUE",
 *     enabled: true || false,
 *   },
 * };
 * const command = new CreateTableOptimizerCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateTableOptimizerCommandInput - {@link CreateTableOptimizerCommandInput}
 * @returns {@link CreateTableOptimizerCommandOutput}
 * @see {@link CreateTableOptimizerCommandInput} for command's `input` shape.
 * @see {@link CreateTableOptimizerCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>A resource to be created or added already exists.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 */
export class CreateTableOptimizerCommand extends $Command<
  CreateTableOptimizerCommandInput,
  CreateTableOptimizerCommandOutput,
  GlueClientResolvedConfig
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
  constructor(readonly input: CreateTableOptimizerCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateTableOptimizerCommandInput, CreateTableOptimizerCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateTableOptimizerCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "CreateTableOptimizerCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSGlue",
        operation: "CreateTableOptimizer",
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
  private serialize(input: CreateTableOptimizerCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateTableOptimizerCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateTableOptimizerCommandOutput> {
    return de_CreateTableOptimizerCommand(output, context);
  }
}
