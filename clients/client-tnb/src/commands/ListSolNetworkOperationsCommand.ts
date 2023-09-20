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

import { ListSolNetworkOperationsInput, ListSolNetworkOperationsOutput } from "../models/models_0";
import { de_ListSolNetworkOperationsCommand, se_ListSolNetworkOperationsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, TnbClientResolvedConfig } from "../TnbClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListSolNetworkOperationsCommand}.
 */
export interface ListSolNetworkOperationsCommandInput extends ListSolNetworkOperationsInput {}
/**
 * @public
 *
 * The output of {@link ListSolNetworkOperationsCommand}.
 */
export interface ListSolNetworkOperationsCommandOutput extends ListSolNetworkOperationsOutput, __MetadataBearer {}

/**
 * @public
 * <p>Lists details for a network operation, including when the operation started and the status of the operation.</p>
 *          <p>A network operation is any operation that is done to your network, such as network instance instantiation or termination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TnbClient, ListSolNetworkOperationsCommand } from "@aws-sdk/client-tnb"; // ES Modules import
 * // const { TnbClient, ListSolNetworkOperationsCommand } = require("@aws-sdk/client-tnb"); // CommonJS import
 * const client = new TnbClient(config);
 * const input = { // ListSolNetworkOperationsInput
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListSolNetworkOperationsCommand(input);
 * const response = await client.send(command);
 * // { // ListSolNetworkOperationsOutput
 * //   nextToken: "STRING_VALUE",
 * //   networkOperations: [ // ListSolNetworkOperationsResources
 * //     { // ListSolNetworkOperationsInfo
 * //       id: "STRING_VALUE", // required
 * //       arn: "STRING_VALUE", // required
 * //       operationState: "PROCESSING" || "COMPLETED" || "FAILED" || "CANCELLING" || "CANCELLED", // required
 * //       nsInstanceId: "STRING_VALUE", // required
 * //       lcmOperationType: "INSTANTIATE" || "UPDATE" || "TERMINATE", // required
 * //       error: { // ProblemDetails
 * //         detail: "STRING_VALUE", // required
 * //         title: "STRING_VALUE",
 * //       },
 * //       metadata: { // ListSolNetworkOperationsMetadata
 * //         createdAt: new Date("TIMESTAMP"), // required
 * //         lastModified: new Date("TIMESTAMP"), // required
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListSolNetworkOperationsCommandInput - {@link ListSolNetworkOperationsCommandInput}
 * @returns {@link ListSolNetworkOperationsCommandOutput}
 * @see {@link ListSolNetworkOperationsCommandInput} for command's `input` shape.
 * @see {@link ListSolNetworkOperationsCommandOutput} for command's `response` shape.
 * @see {@link TnbClientResolvedConfig | config} for TnbClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Insufficient permissions to make request.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error occurred. Problem on the server.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Exception caused by throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Unable to process the request because the client provided input failed to satisfy request constraints.</p>
 *
 * @throws {@link TnbServiceException}
 * <p>Base exception class for all service exceptions from Tnb service.</p>
 *
 */
export class ListSolNetworkOperationsCommand extends $Command<
  ListSolNetworkOperationsCommandInput,
  ListSolNetworkOperationsCommandOutput,
  TnbClientResolvedConfig
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
  constructor(readonly input: ListSolNetworkOperationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TnbClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSolNetworkOperationsCommandInput, ListSolNetworkOperationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSolNetworkOperationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TnbClient";
    const commandName = "ListSolNetworkOperationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "TNB",
        operation: "ListSolNetworkOperations",
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
  private serialize(input: ListSolNetworkOperationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListSolNetworkOperationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSolNetworkOperationsCommandOutput> {
    return de_ListSolNetworkOperationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
