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

import { CleanRoomsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CleanRoomsClient";
import { BatchGetSchemaInput, BatchGetSchemaOutput } from "../models/models_0";
import { de_BatchGetSchemaCommand, se_BatchGetSchemaCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchGetSchemaCommand}.
 */
export interface BatchGetSchemaCommandInput extends BatchGetSchemaInput {}
/**
 * @public
 *
 * The output of {@link BatchGetSchemaCommand}.
 */
export interface BatchGetSchemaCommandOutput extends BatchGetSchemaOutput, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves multiple schemas by their identifiers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, BatchGetSchemaCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, BatchGetSchemaCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * const client = new CleanRoomsClient(config);
 * const input = { // BatchGetSchemaInput
 *   collaborationIdentifier: "STRING_VALUE", // required
 *   names: [ // TableAliasList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetSchemaCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetSchemaOutput
 * //   schemas: [ // SchemaList // required
 * //     { // Schema
 * //       columns: [ // ColumnList // required
 * //         { // Column
 * //           name: "STRING_VALUE", // required
 * //           type: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       partitionKeys: [ // required
 * //         {
 * //           name: "STRING_VALUE", // required
 * //           type: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       analysisRuleTypes: [ // AnalysisRuleTypeList // required
 * //         "AGGREGATION" || "LIST" || "CUSTOM",
 * //       ],
 * //       analysisMethod: "STRING_VALUE",
 * //       creatorAccountId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       collaborationId: "STRING_VALUE", // required
 * //       collaborationArn: "STRING_VALUE", // required
 * //       description: "STRING_VALUE", // required
 * //       createTime: new Date("TIMESTAMP"), // required
 * //       updateTime: new Date("TIMESTAMP"), // required
 * //       type: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   errors: [ // BatchGetSchemaErrorList // required
 * //     { // BatchGetSchemaError
 * //       name: "STRING_VALUE", // required
 * //       code: "STRING_VALUE", // required
 * //       message: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetSchemaCommandInput - {@link BatchGetSchemaCommandInput}
 * @returns {@link BatchGetSchemaCommandOutput}
 * @see {@link BatchGetSchemaCommandInput} for command's `input` shape.
 * @see {@link BatchGetSchemaCommandOutput} for command's `response` shape.
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
 * @throws {@link CleanRoomsServiceException}
 * <p>Base exception class for all service exceptions from CleanRooms service.</p>
 *
 */
export class BatchGetSchemaCommand extends $Command<
  BatchGetSchemaCommandInput,
  BatchGetSchemaCommandOutput,
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
  constructor(readonly input: BatchGetSchemaCommandInput) {
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
  ): Handler<BatchGetSchemaCommandInput, BatchGetSchemaCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchGetSchemaCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CleanRoomsClient";
    const commandName = "BatchGetSchemaCommand";
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
  private serialize(input: BatchGetSchemaCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchGetSchemaCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchGetSchemaCommandOutput> {
    return de_BatchGetSchemaCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
