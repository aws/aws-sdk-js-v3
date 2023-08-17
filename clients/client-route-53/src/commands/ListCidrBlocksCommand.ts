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

import { ListCidrBlocksRequest, ListCidrBlocksResponse } from "../models/models_0";
import { de_ListCidrBlocksCommand, se_ListCidrBlocksCommand } from "../protocols/Aws_restXml";
import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListCidrBlocksCommand}.
 */
export interface ListCidrBlocksCommandInput extends ListCidrBlocksRequest {}
/**
 * @public
 *
 * The output of {@link ListCidrBlocksCommand}.
 */
export interface ListCidrBlocksCommandOutput extends ListCidrBlocksResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns a paginated list of location objects and their CIDR blocks.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53Client, ListCidrBlocksCommand } from "@aws-sdk/client-route-53"; // ES Modules import
 * // const { Route53Client, ListCidrBlocksCommand } = require("@aws-sdk/client-route-53"); // CommonJS import
 * const client = new Route53Client(config);
 * const input = { // ListCidrBlocksRequest
 *   CollectionId: "STRING_VALUE", // required
 *   LocationName: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListCidrBlocksCommand(input);
 * const response = await client.send(command);
 * // { // ListCidrBlocksResponse
 * //   NextToken: "STRING_VALUE",
 * //   CidrBlocks: [ // CidrBlockSummaries
 * //     { // CidrBlockSummary
 * //       CidrBlock: "STRING_VALUE",
 * //       LocationName: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListCidrBlocksCommandInput - {@link ListCidrBlocksCommandInput}
 * @returns {@link ListCidrBlocksCommandOutput}
 * @see {@link ListCidrBlocksCommandInput} for command's `input` shape.
 * @see {@link ListCidrBlocksCommandOutput} for command's `response` shape.
 * @see {@link Route53ClientResolvedConfig | config} for Route53Client's `config` shape.
 *
 * @throws {@link InvalidInput} (client fault)
 *  <p>The input is not valid.</p>
 *
 * @throws {@link NoSuchCidrCollectionException} (client fault)
 *  <p>The CIDR collection you specified, doesn't exist.</p>
 *
 * @throws {@link NoSuchCidrLocationException} (client fault)
 *  <p>The CIDR collection location doesn't match any locations in your account.</p>
 *
 * @throws {@link Route53ServiceException}
 * <p>Base exception class for all service exceptions from Route53 service.</p>
 *
 */
export class ListCidrBlocksCommand extends $Command<
  ListCidrBlocksCommandInput,
  ListCidrBlocksCommandOutput,
  Route53ClientResolvedConfig
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
  constructor(readonly input: ListCidrBlocksCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Route53ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListCidrBlocksCommandInput, ListCidrBlocksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListCidrBlocksCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Route53Client";
    const commandName = "ListCidrBlocksCommand";
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
  private serialize(input: ListCidrBlocksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListCidrBlocksCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListCidrBlocksCommandOutput> {
    return de_ListCidrBlocksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
