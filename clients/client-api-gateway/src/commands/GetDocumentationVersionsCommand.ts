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

import { APIGatewayClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../APIGatewayClient";
import { DocumentationVersions, GetDocumentationVersionsRequest } from "../models/models_0";
import { de_GetDocumentationVersionsCommand, se_GetDocumentationVersionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetDocumentationVersionsCommand}.
 */
export interface GetDocumentationVersionsCommandInput extends GetDocumentationVersionsRequest {}
/**
 * @public
 *
 * The output of {@link GetDocumentationVersionsCommand}.
 */
export interface GetDocumentationVersionsCommandOutput extends DocumentationVersions, __MetadataBearer {}

/**
 * @public
 * <p>Gets documentation versions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIGatewayClient, GetDocumentationVersionsCommand } from "@aws-sdk/client-api-gateway"; // ES Modules import
 * // const { APIGatewayClient, GetDocumentationVersionsCommand } = require("@aws-sdk/client-api-gateway"); // CommonJS import
 * const client = new APIGatewayClient(config);
 * const input = { // GetDocumentationVersionsRequest
 *   restApiId: "STRING_VALUE", // required
 *   position: "STRING_VALUE",
 *   limit: Number("int"),
 * };
 * const command = new GetDocumentationVersionsCommand(input);
 * const response = await client.send(command);
 * // { // DocumentationVersions
 * //   items: [ // ListOfDocumentationVersion
 * //     { // DocumentationVersion
 * //       version: "STRING_VALUE",
 * //       createdDate: new Date("TIMESTAMP"),
 * //       description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   position: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetDocumentationVersionsCommandInput - {@link GetDocumentationVersionsCommandInput}
 * @returns {@link GetDocumentationVersionsCommandOutput}
 * @see {@link GetDocumentationVersionsCommandInput} for command's `input` shape.
 * @see {@link GetDocumentationVersionsCommandOutput} for command's `response` shape.
 * @see {@link APIGatewayClientResolvedConfig | config} for APIGatewayClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The requested resource is not found. Make sure that the request URI is correct.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request has reached its throttling limit. Retry after the specified time period.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The request is denied because the caller has insufficient permissions.</p>
 *
 * @throws {@link APIGatewayServiceException}
 * <p>Base exception class for all service exceptions from APIGateway service.</p>
 *
 */
export class GetDocumentationVersionsCommand extends $Command<
  GetDocumentationVersionsCommandInput,
  GetDocumentationVersionsCommandOutput,
  APIGatewayClientResolvedConfig
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
  constructor(readonly input: GetDocumentationVersionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: APIGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDocumentationVersionsCommandInput, GetDocumentationVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetDocumentationVersionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "APIGatewayClient";
    const commandName = "GetDocumentationVersionsCommand";
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
  private serialize(input: GetDocumentationVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetDocumentationVersionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDocumentationVersionsCommandOutput> {
    return de_GetDocumentationVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
