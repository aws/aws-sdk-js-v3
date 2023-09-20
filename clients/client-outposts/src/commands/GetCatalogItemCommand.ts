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

import { GetCatalogItemInput, GetCatalogItemOutput } from "../models/models_0";
import { OutpostsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OutpostsClient";
import { de_GetCatalogItemCommand, se_GetCatalogItemCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetCatalogItemCommand}.
 */
export interface GetCatalogItemCommandInput extends GetCatalogItemInput {}
/**
 * @public
 *
 * The output of {@link GetCatalogItemCommand}.
 */
export interface GetCatalogItemCommandOutput extends GetCatalogItemOutput, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about the specified catalog item.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, GetCatalogItemCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, GetCatalogItemCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * const client = new OutpostsClient(config);
 * const input = { // GetCatalogItemInput
 *   CatalogItemId: "STRING_VALUE", // required
 * };
 * const command = new GetCatalogItemCommand(input);
 * const response = await client.send(command);
 * // { // GetCatalogItemOutput
 * //   CatalogItem: { // CatalogItem
 * //     CatalogItemId: "STRING_VALUE",
 * //     ItemStatus: "AVAILABLE" || "DISCONTINUED",
 * //     EC2Capacities: [ // EC2CapacityListDefinition
 * //       { // EC2Capacity
 * //         Family: "STRING_VALUE",
 * //         MaxSize: "STRING_VALUE",
 * //         Quantity: "STRING_VALUE",
 * //       },
 * //     ],
 * //     PowerKva: Number("float"),
 * //     WeightLbs: Number("int"),
 * //     SupportedUplinkGbps: [ // SupportedUplinkGbpsListDefinition
 * //       Number("int"),
 * //     ],
 * //     SupportedStorage: [ // SupportedStorageList
 * //       "EBS" || "S3",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetCatalogItemCommandInput - {@link GetCatalogItemCommandInput}
 * @returns {@link GetCatalogItemCommandOutput}
 * @see {@link GetCatalogItemCommandInput} for command's `input` shape.
 * @see {@link GetCatalogItemCommandOutput} for command's `response` shape.
 * @see {@link OutpostsClientResolvedConfig | config} for OutpostsClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified request is not valid.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A parameter is not valid.</p>
 *
 * @throws {@link OutpostsServiceException}
 * <p>Base exception class for all service exceptions from Outposts service.</p>
 *
 */
export class GetCatalogItemCommand extends $Command<
  GetCatalogItemCommandInput,
  GetCatalogItemCommandOutput,
  OutpostsClientResolvedConfig
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
  constructor(readonly input: GetCatalogItemCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OutpostsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCatalogItemCommandInput, GetCatalogItemCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetCatalogItemCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OutpostsClient";
    const commandName = "GetCatalogItemCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "OutpostsOlafService",
        operation: "GetCatalogItem",
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
  private serialize(input: GetCatalogItemCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetCatalogItemCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetCatalogItemCommandOutput> {
    return de_GetCatalogItemCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
