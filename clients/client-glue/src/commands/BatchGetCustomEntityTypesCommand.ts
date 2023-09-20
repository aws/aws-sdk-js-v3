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
import { BatchGetCustomEntityTypesRequest, BatchGetCustomEntityTypesResponse } from "../models/models_0";
import { de_BatchGetCustomEntityTypesCommand, se_BatchGetCustomEntityTypesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchGetCustomEntityTypesCommand}.
 */
export interface BatchGetCustomEntityTypesCommandInput extends BatchGetCustomEntityTypesRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetCustomEntityTypesCommand}.
 */
export interface BatchGetCustomEntityTypesCommandOutput extends BatchGetCustomEntityTypesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves the details for the custom patterns specified by a list of names.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, BatchGetCustomEntityTypesCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, BatchGetCustomEntityTypesCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // BatchGetCustomEntityTypesRequest
 *   Names: [ // CustomEntityTypeNames // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetCustomEntityTypesCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetCustomEntityTypesResponse
 * //   CustomEntityTypes: [ // CustomEntityTypes
 * //     { // CustomEntityType
 * //       Name: "STRING_VALUE", // required
 * //       RegexString: "STRING_VALUE", // required
 * //       ContextWords: [ // ContextWords
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   CustomEntityTypesNotFound: [ // CustomEntityTypeNames
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetCustomEntityTypesCommandInput - {@link BatchGetCustomEntityTypesCommandInput}
 * @returns {@link BatchGetCustomEntityTypesCommandOutput}
 * @see {@link BatchGetCustomEntityTypesCommandInput} for command's `input` shape.
 * @see {@link BatchGetCustomEntityTypesCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
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
export class BatchGetCustomEntityTypesCommand extends $Command<
  BatchGetCustomEntityTypesCommandInput,
  BatchGetCustomEntityTypesCommandOutput,
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
  constructor(readonly input: BatchGetCustomEntityTypesCommandInput) {
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
  ): Handler<BatchGetCustomEntityTypesCommandInput, BatchGetCustomEntityTypesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchGetCustomEntityTypesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "BatchGetCustomEntityTypesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSGlue",
        operation: "BatchGetCustomEntityTypes",
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
  private serialize(input: BatchGetCustomEntityTypesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchGetCustomEntityTypesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchGetCustomEntityTypesCommandOutput> {
    return de_BatchGetCustomEntityTypesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
