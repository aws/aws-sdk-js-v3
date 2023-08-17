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

import { GetInventoryResult } from "../models/models_1";
import { GetInventoryRequest } from "../models/models_2";
import { de_GetInventoryCommand, se_GetInventoryCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetInventoryCommand}.
 */
export interface GetInventoryCommandInput extends GetInventoryRequest {}
/**
 * @public
 *
 * The output of {@link GetInventoryCommand}.
 */
export interface GetInventoryCommandOutput extends GetInventoryResult, __MetadataBearer {}

/**
 * @public
 * <p>Query inventory information. This includes managed node status, such as <code>Stopped</code>
 *    or <code>Terminated</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetInventoryCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetInventoryCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // GetInventoryRequest
 *   Filters: [ // InventoryFilterList
 *     { // InventoryFilter
 *       Key: "STRING_VALUE", // required
 *       Values: [ // InventoryFilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *       Type: "Equal" || "NotEqual" || "BeginWith" || "LessThan" || "GreaterThan" || "Exists",
 *     },
 *   ],
 *   Aggregators: [ // InventoryAggregatorList
 *     { // InventoryAggregator
 *       Expression: "STRING_VALUE",
 *       Aggregators: [
 *         {
 *           Expression: "STRING_VALUE",
 *           Aggregators: "<InventoryAggregatorList>",
 *           Groups: [ // InventoryGroupList
 *             { // InventoryGroup
 *               Name: "STRING_VALUE", // required
 *               Filters: [ // required
 *                 {
 *                   Key: "STRING_VALUE", // required
 *                   Values: [ // required
 *                     "STRING_VALUE",
 *                   ],
 *                   Type: "Equal" || "NotEqual" || "BeginWith" || "LessThan" || "GreaterThan" || "Exists",
 *                 },
 *               ],
 *             },
 *           ],
 *         },
 *       ],
 *       Groups: [
 *         {
 *           Name: "STRING_VALUE", // required
 *           Filters: "<InventoryFilterList>", // required
 *         },
 *       ],
 *     },
 *   ],
 *   ResultAttributes: [ // ResultAttributeList
 *     { // ResultAttribute
 *       TypeName: "STRING_VALUE", // required
 *     },
 *   ],
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new GetInventoryCommand(input);
 * const response = await client.send(command);
 * // { // GetInventoryResult
 * //   Entities: [ // InventoryResultEntityList
 * //     { // InventoryResultEntity
 * //       Id: "STRING_VALUE",
 * //       Data: { // InventoryResultItemMap
 * //         "<keys>": { // InventoryResultItem
 * //           TypeName: "STRING_VALUE", // required
 * //           SchemaVersion: "STRING_VALUE", // required
 * //           CaptureTime: "STRING_VALUE",
 * //           ContentHash: "STRING_VALUE",
 * //           Content: [ // InventoryItemEntryList // required
 * //             { // InventoryItemEntry
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetInventoryCommandInput - {@link GetInventoryCommandInput}
 * @returns {@link GetInventoryCommandOutput}
 * @see {@link GetInventoryCommandInput} for command's `input` shape.
 * @see {@link GetInventoryCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidAggregatorException} (client fault)
 *  <p>The specified aggregator isn't valid for inventory groups. Verify that the aggregator uses a
 *    valid inventory type such as <code>AWS:Application</code> or
 *    <code>AWS:InstanceInformation</code>.</p>
 *
 * @throws {@link InvalidFilter} (client fault)
 *  <p>The filter name isn't valid. Verify the you entered the correct name and try again.</p>
 *
 * @throws {@link InvalidInventoryGroupException} (client fault)
 *  <p>The specified inventory group isn't valid.</p>
 *
 * @throws {@link InvalidNextToken} (client fault)
 *  <p>The specified token isn't valid.</p>
 *
 * @throws {@link InvalidResultAttributeException} (client fault)
 *  <p>The specified inventory item result attribute isn't valid.</p>
 *
 * @throws {@link InvalidTypeNameException} (client fault)
 *  <p>The parameter type name isn't valid.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export class GetInventoryCommand extends $Command<
  GetInventoryCommandInput,
  GetInventoryCommandOutput,
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
  constructor(readonly input: GetInventoryCommandInput) {
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
  ): Handler<GetInventoryCommandInput, GetInventoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetInventoryCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "GetInventoryCommand";
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
  private serialize(input: GetInventoryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetInventoryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetInventoryCommandOutput> {
    return de_GetInventoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
