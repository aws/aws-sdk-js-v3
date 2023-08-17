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

import {
  ElasticsearchServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticsearchServiceClient";
import { ListVpcEndpointAccessRequest, ListVpcEndpointAccessResponse } from "../models/models_0";
import { de_ListVpcEndpointAccessCommand, se_ListVpcEndpointAccessCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListVpcEndpointAccessCommand}.
 */
export interface ListVpcEndpointAccessCommandInput extends ListVpcEndpointAccessRequest {}
/**
 * @public
 *
 * The output of {@link ListVpcEndpointAccessCommand}.
 */
export interface ListVpcEndpointAccessCommandOutput extends ListVpcEndpointAccessResponse, __MetadataBearer {}

/**
 * @public
 * <p>Retrieves information about each  principal that is allowed to access a
 *    given Amazon OpenSearch Service domain through the use of an interface VPC endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, ListVpcEndpointAccessCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, ListVpcEndpointAccessCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const input = { // ListVpcEndpointAccessRequest
 *   DomainName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListVpcEndpointAccessCommand(input);
 * const response = await client.send(command);
 * // { // ListVpcEndpointAccessResponse
 * //   AuthorizedPrincipalList: [ // AuthorizedPrincipalList // required
 * //     { // AuthorizedPrincipal
 * //       PrincipalType: "AWS_ACCOUNT" || "AWS_SERVICE",
 * //       Principal: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param ListVpcEndpointAccessCommandInput - {@link ListVpcEndpointAccessCommandInput}
 * @returns {@link ListVpcEndpointAccessCommandOutput}
 * @see {@link ListVpcEndpointAccessCommandInput} for command's `input` shape.
 * @see {@link ListVpcEndpointAccessCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for ElasticsearchServiceClient's `config` shape.
 *
 * @throws {@link BaseException} (client fault)
 *  <p>An error occurred while processing the request.</p>
 *
 * @throws {@link DisabledOperationException} (client fault)
 *  <p>An error occured because the client wanted to access a not supported operation. Gives http status code of 409.</p>
 *
 * @throws {@link InternalException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure (the failure is internal to the service) . Gives http status code of 500.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception for accessing or deleting a resource that does not exist. Gives http status code of 400.</p>
 *
 * @throws {@link ElasticsearchServiceServiceException}
 * <p>Base exception class for all service exceptions from ElasticsearchService service.</p>
 *
 */
export class ListVpcEndpointAccessCommand extends $Command<
  ListVpcEndpointAccessCommandInput,
  ListVpcEndpointAccessCommandOutput,
  ElasticsearchServiceClientResolvedConfig
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
  constructor(readonly input: ListVpcEndpointAccessCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticsearchServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListVpcEndpointAccessCommandInput, ListVpcEndpointAccessCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListVpcEndpointAccessCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticsearchServiceClient";
    const commandName = "ListVpcEndpointAccessCommand";
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
  private serialize(input: ListVpcEndpointAccessCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListVpcEndpointAccessCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListVpcEndpointAccessCommandOutput> {
    return de_ListVpcEndpointAccessCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
