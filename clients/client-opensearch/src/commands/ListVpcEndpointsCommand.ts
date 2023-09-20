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

import { ListVpcEndpointsRequest, ListVpcEndpointsResponse } from "../models/models_0";
import { OpenSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpenSearchClient";
import { de_ListVpcEndpointsCommand, se_ListVpcEndpointsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListVpcEndpointsCommand}.
 */
export interface ListVpcEndpointsCommandInput extends ListVpcEndpointsRequest {}
/**
 * @public
 *
 * The output of {@link ListVpcEndpointsCommand}.
 */
export interface ListVpcEndpointsCommandOutput extends ListVpcEndpointsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves all Amazon OpenSearch Service-managed VPC endpoints in the current Amazon Web Services account and Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpenSearchClient, ListVpcEndpointsCommand } from "@aws-sdk/client-opensearch"; // ES Modules import
 * // const { OpenSearchClient, ListVpcEndpointsCommand } = require("@aws-sdk/client-opensearch"); // CommonJS import
 * const client = new OpenSearchClient(config);
 * const input = { // ListVpcEndpointsRequest
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListVpcEndpointsCommand(input);
 * const response = await client.send(command);
 * // { // ListVpcEndpointsResponse
 * //   VpcEndpointSummaryList: [ // VpcEndpointSummaryList // required
 * //     { // VpcEndpointSummary
 * //       VpcEndpointId: "STRING_VALUE",
 * //       VpcEndpointOwner: "STRING_VALUE",
 * //       DomainArn: "STRING_VALUE",
 * //       Status: "CREATING" || "CREATE_FAILED" || "ACTIVE" || "UPDATING" || "UPDATE_FAILED" || "DELETING" || "DELETE_FAILED",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param ListVpcEndpointsCommandInput - {@link ListVpcEndpointsCommandInput}
 * @returns {@link ListVpcEndpointsCommandOutput}
 * @see {@link ListVpcEndpointsCommandInput} for command's `input` shape.
 * @see {@link ListVpcEndpointsCommandOutput} for command's `response` shape.
 * @see {@link OpenSearchClientResolvedConfig | config} for OpenSearchClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link DisabledOperationException} (client fault)
 *  <p>An error occured because the client wanted to access an unsupported operation.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>Request processing failed because of an unknown error, exception, or internal failure.</p>
 *
 * @throws {@link OpenSearchServiceException}
 * <p>Base exception class for all service exceptions from OpenSearch service.</p>
 *
 */
export class ListVpcEndpointsCommand extends $Command<
  ListVpcEndpointsCommandInput,
  ListVpcEndpointsCommandOutput,
  OpenSearchClientResolvedConfig
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
  constructor(readonly input: ListVpcEndpointsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpenSearchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListVpcEndpointsCommandInput, ListVpcEndpointsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListVpcEndpointsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpenSearchClient";
    const commandName = "ListVpcEndpointsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonOpenSearchService",
        operation: "ListVpcEndpoints",
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
  private serialize(input: ListVpcEndpointsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListVpcEndpointsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListVpcEndpointsCommandOutput> {
    return de_ListVpcEndpointsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
