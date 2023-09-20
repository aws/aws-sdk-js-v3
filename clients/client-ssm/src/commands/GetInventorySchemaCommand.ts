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

import { GetInventorySchemaRequest, GetInventorySchemaResult } from "../models/models_1";
import { de_GetInventorySchemaCommand, se_GetInventorySchemaCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetInventorySchemaCommand}.
 */
export interface GetInventorySchemaCommandInput extends GetInventorySchemaRequest {}
/**
 * @public
 *
 * The output of {@link GetInventorySchemaCommand}.
 */
export interface GetInventorySchemaCommandOutput extends GetInventorySchemaResult, __MetadataBearer {}

/**
 * @public
 * <p>Return a list of inventory type names for the account, or return a list of attribute names
 *    for a specific Inventory item type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetInventorySchemaCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetInventorySchemaCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // GetInventorySchemaRequest
 *   TypeName: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   Aggregator: true || false,
 *   SubType: true || false,
 * };
 * const command = new GetInventorySchemaCommand(input);
 * const response = await client.send(command);
 * // { // GetInventorySchemaResult
 * //   Schemas: [ // InventoryItemSchemaResultList
 * //     { // InventoryItemSchema
 * //       TypeName: "STRING_VALUE", // required
 * //       Version: "STRING_VALUE",
 * //       Attributes: [ // InventoryItemAttributeList // required
 * //         { // InventoryItemAttribute
 * //           Name: "STRING_VALUE", // required
 * //           DataType: "string" || "number", // required
 * //         },
 * //       ],
 * //       DisplayName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetInventorySchemaCommandInput - {@link GetInventorySchemaCommandInput}
 * @returns {@link GetInventorySchemaCommandOutput}
 * @see {@link GetInventorySchemaCommandInput} for command's `input` shape.
 * @see {@link GetInventorySchemaCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidNextToken} (client fault)
 *  <p>The specified token isn't valid.</p>
 *
 * @throws {@link InvalidTypeNameException} (client fault)
 *  <p>The parameter type name isn't valid.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export class GetInventorySchemaCommand extends $Command<
  GetInventorySchemaCommandInput,
  GetInventorySchemaCommandOutput,
  SSMClientResolvedConfig
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
  constructor(readonly input: GetInventorySchemaCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetInventorySchemaCommandInput, GetInventorySchemaCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetInventorySchemaCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "GetInventorySchemaCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonSSM",
        operation: "GetInventorySchema",
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
  private serialize(input: GetInventorySchemaCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetInventorySchemaCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetInventorySchemaCommandOutput> {
    return de_GetInventorySchemaCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
