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

import { ListAccessesRequest, ListAccessesResponse } from "../models/models_0";
import { de_ListAccessesCommand, se_ListAccessesCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListAccessesCommand}.
 */
export interface ListAccessesCommandInput extends ListAccessesRequest {}
/**
 * @public
 *
 * The output of {@link ListAccessesCommand}.
 */
export interface ListAccessesCommandOutput extends ListAccessesResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the details for all the accesses you have on your server.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, ListAccessesCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, ListAccessesCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const input = { // ListAccessesRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   ServerId: "STRING_VALUE", // required
 * };
 * const command = new ListAccessesCommand(input);
 * const response = await client.send(command);
 * // { // ListAccessesResponse
 * //   NextToken: "STRING_VALUE",
 * //   ServerId: "STRING_VALUE", // required
 * //   Accesses: [ // ListedAccesses // required
 * //     { // ListedAccess
 * //       HomeDirectory: "STRING_VALUE",
 * //       HomeDirectoryType: "PATH" || "LOGICAL",
 * //       Role: "STRING_VALUE",
 * //       ExternalId: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListAccessesCommandInput - {@link ListAccessesCommandInput}
 * @returns {@link ListAccessesCommandOutput}
 * @see {@link ListAccessesCommandInput} for command's `input` shape.
 * @see {@link ListAccessesCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for TransferClient's `config` shape.
 *
 * @throws {@link InternalServiceError} (server fault)
 *  <p>This exception is thrown when an error occurs in the Amazon Web ServicesTransfer Family service.</p>
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The <code>NextToken</code> parameter that was passed is invalid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception is thrown when the client submits a malformed request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when a resource is not found by the Amazon Web ServicesTransfer Family
 *       service.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request has failed because the Amazon Web ServicesTransfer Family service is not available.</p>
 *
 * @throws {@link TransferServiceException}
 * <p>Base exception class for all service exceptions from Transfer service.</p>
 *
 */
export class ListAccessesCommand extends $Command<
  ListAccessesCommandInput,
  ListAccessesCommandOutput,
  TransferClientResolvedConfig
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
  constructor(readonly input: ListAccessesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TransferClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListAccessesCommandInput, ListAccessesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListAccessesCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TransferClient";
    const commandName = "ListAccessesCommand";
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
  private serialize(input: ListAccessesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListAccessesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListAccessesCommandOutput> {
    return de_ListAccessesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
