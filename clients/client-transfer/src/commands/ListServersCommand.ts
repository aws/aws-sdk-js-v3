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

import { ListServersRequest, ListServersResponse } from "../models/models_0";
import { de_ListServersCommand, se_ListServersCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListServersCommand}.
 */
export interface ListServersCommandInput extends ListServersRequest {}
/**
 * @public
 *
 * The output of {@link ListServersCommand}.
 */
export interface ListServersCommandOutput extends ListServersResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the file transfer protocol-enabled servers that are associated with your Amazon Web Services
 *       account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, ListServersCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, ListServersCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const input = { // ListServersRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListServersCommand(input);
 * const response = await client.send(command);
 * // { // ListServersResponse
 * //   NextToken: "STRING_VALUE",
 * //   Servers: [ // ListedServers // required
 * //     { // ListedServer
 * //       Arn: "STRING_VALUE", // required
 * //       Domain: "S3" || "EFS",
 * //       IdentityProviderType: "SERVICE_MANAGED" || "API_GATEWAY" || "AWS_DIRECTORY_SERVICE" || "AWS_LAMBDA",
 * //       EndpointType: "PUBLIC" || "VPC" || "VPC_ENDPOINT",
 * //       LoggingRole: "STRING_VALUE",
 * //       ServerId: "STRING_VALUE",
 * //       State: "OFFLINE" || "ONLINE" || "STARTING" || "STOPPING" || "START_FAILED" || "STOP_FAILED",
 * //       UserCount: Number("int"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListServersCommandInput - {@link ListServersCommandInput}
 * @returns {@link ListServersCommandOutput}
 * @see {@link ListServersCommandInput} for command's `input` shape.
 * @see {@link ListServersCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for TransferClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>This exception is thrown when an error occurs in the Transfer Family service.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The <code>NextToken</code> parameter that was passed is invalid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request has failed because the Amazon Web ServicesTransfer Family service is not available.</p>
 *
 * @throws {@link TransferServiceException}
 * <p>Base exception class for all service exceptions from Transfer service.</p>
 *
 */
export class ListServersCommand extends $Command<
  ListServersCommandInput,
  ListServersCommandOutput,
  TransferClientResolvedConfig
> {
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
  constructor(readonly input: ListServersCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TransferClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListServersCommandInput, ListServersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListServersCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TransferClient";
    const commandName = "ListServersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "TransferService",
        operation: "ListServers",
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
  private serialize(input: ListServersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListServersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListServersCommandOutput> {
    return de_ListServersCommand(output, context);
  }
}
