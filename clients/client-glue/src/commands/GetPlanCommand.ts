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

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetPlanRequest, GetPlanResponse } from "../models/models_1";
import { deserializeAws_json1_1GetPlanCommand, serializeAws_json1_1GetPlanCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link GetPlanCommand}.
 */
export interface GetPlanCommandInput extends GetPlanRequest {}
/**
 * @public
 *
 * The output of {@link GetPlanCommand}.
 */
export interface GetPlanCommandOutput extends GetPlanResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets code to perform a specified mapping.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetPlanCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetPlanCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // GetPlanRequest
 *   Mapping: [ // MappingList // required
 *     { // MappingEntry
 *       SourceTable: "STRING_VALUE",
 *       SourcePath: "STRING_VALUE",
 *       SourceType: "STRING_VALUE",
 *       TargetTable: "STRING_VALUE",
 *       TargetPath: "STRING_VALUE",
 *       TargetType: "STRING_VALUE",
 *     },
 *   ],
 *   Source: { // CatalogEntry
 *     DatabaseName: "STRING_VALUE", // required
 *     TableName: "STRING_VALUE", // required
 *   },
 *   Sinks: [ // CatalogEntries
 *     {
 *       DatabaseName: "STRING_VALUE", // required
 *       TableName: "STRING_VALUE", // required
 *     },
 *   ],
 *   Location: { // Location
 *     Jdbc: [ // CodeGenNodeArgs
 *       { // CodeGenNodeArg
 *         Name: "STRING_VALUE", // required
 *         Value: "STRING_VALUE", // required
 *         Param: true || false,
 *       },
 *     ],
 *     S3: [
 *       {
 *         Name: "STRING_VALUE", // required
 *         Value: "STRING_VALUE", // required
 *         Param: true || false,
 *       },
 *     ],
 *     DynamoDB: [
 *       {
 *         Name: "STRING_VALUE", // required
 *         Value: "STRING_VALUE", // required
 *         Param: true || false,
 *       },
 *     ],
 *   },
 *   Language: "PYTHON" || "SCALA",
 *   AdditionalPlanOptionsMap: { // AdditionalPlanOptionsMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new GetPlanCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetPlanCommandInput - {@link GetPlanCommandInput}
 * @returns {@link GetPlanCommandOutput}
 * @see {@link GetPlanCommandInput} for command's `input` shape.
 * @see {@link GetPlanCommandOutput} for command's `response` shape.
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
 *
 */
export class GetPlanCommand extends $Command<GetPlanCommandInput, GetPlanCommandOutput, GlueClientResolvedConfig> {
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
  constructor(readonly input: GetPlanCommandInput) {
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
  ): Handler<GetPlanCommandInput, GetPlanCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetPlanCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetPlanCommand";
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
  private serialize(input: GetPlanCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetPlanCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetPlanCommandOutput> {
    return deserializeAws_json1_1GetPlanCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
