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

import { ListExecutionsRequest, ListExecutionsResponse } from "../models/models_0";
import { de_ListExecutionsCommand, se_ListExecutionsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListExecutionsCommand}.
 */
export interface ListExecutionsCommandInput extends ListExecutionsRequest {}
/**
 * @public
 *
 * The output of {@link ListExecutionsCommand}.
 */
export interface ListExecutionsCommandOutput extends ListExecutionsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists all in-progress executions for the specified workflow.</p>
 *          <note>
 *             <p>If the specified workflow ID cannot be found, <code>ListExecutions</code> returns a
 *         <code>ResourceNotFound</code> exception.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, ListExecutionsCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, ListExecutionsCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const input = { // ListExecutionsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   WorkflowId: "STRING_VALUE", // required
 * };
 * const command = new ListExecutionsCommand(input);
 * const response = await client.send(command);
 * // { // ListExecutionsResponse
 * //   NextToken: "STRING_VALUE",
 * //   WorkflowId: "STRING_VALUE", // required
 * //   Executions: [ // ListedExecutions // required
 * //     { // ListedExecution
 * //       ExecutionId: "STRING_VALUE",
 * //       InitialFileLocation: { // FileLocation
 * //         S3FileLocation: { // S3FileLocation
 * //           Bucket: "STRING_VALUE",
 * //           Key: "STRING_VALUE",
 * //           VersionId: "STRING_VALUE",
 * //           Etag: "STRING_VALUE",
 * //         },
 * //         EfsFileLocation: { // EfsFileLocation
 * //           FileSystemId: "STRING_VALUE",
 * //           Path: "STRING_VALUE",
 * //         },
 * //       },
 * //       ServiceMetadata: { // ServiceMetadata
 * //         UserDetails: { // UserDetails
 * //           UserName: "STRING_VALUE", // required
 * //           ServerId: "STRING_VALUE", // required
 * //           SessionId: "STRING_VALUE",
 * //         },
 * //       },
 * //       Status: "IN_PROGRESS" || "COMPLETED" || "EXCEPTION" || "HANDLING_EXCEPTION",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListExecutionsCommandInput - {@link ListExecutionsCommandInput}
 * @returns {@link ListExecutionsCommandOutput}
 * @see {@link ListExecutionsCommandInput} for command's `input` shape.
 * @see {@link ListExecutionsCommandOutput} for command's `response` shape.
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
export class ListExecutionsCommand extends $Command<
  ListExecutionsCommandInput,
  ListExecutionsCommandOutput,
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
  constructor(readonly input: ListExecutionsCommandInput) {
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
  ): Handler<ListExecutionsCommandInput, ListExecutionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListExecutionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TransferClient";
    const commandName = "ListExecutionsCommand";
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
  private serialize(input: ListExecutionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListExecutionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListExecutionsCommandOutput> {
    return de_ListExecutionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
