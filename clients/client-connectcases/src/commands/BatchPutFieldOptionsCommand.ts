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

import { ConnectCasesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectCasesClient";
import { BatchPutFieldOptionsRequest, BatchPutFieldOptionsResponse } from "../models/models_0";
import { de_BatchPutFieldOptionsCommand, se_BatchPutFieldOptionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchPutFieldOptionsCommand}.
 */
export interface BatchPutFieldOptionsCommandInput extends BatchPutFieldOptionsRequest {}
/**
 * @public
 *
 * The output of {@link BatchPutFieldOptionsCommand}.
 */
export interface BatchPutFieldOptionsCommandOutput extends BatchPutFieldOptionsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates and updates a set of field options for a single select field in a Cases
 *       domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectCasesClient, BatchPutFieldOptionsCommand } from "@aws-sdk/client-connectcases"; // ES Modules import
 * // const { ConnectCasesClient, BatchPutFieldOptionsCommand } = require("@aws-sdk/client-connectcases"); // CommonJS import
 * const client = new ConnectCasesClient(config);
 * const input = { // BatchPutFieldOptionsRequest
 *   domainId: "STRING_VALUE", // required
 *   fieldId: "STRING_VALUE", // required
 *   options: [ // FieldOptionsList // required
 *     { // FieldOption
 *       name: "STRING_VALUE", // required
 *       value: "STRING_VALUE", // required
 *       active: true || false, // required
 *     },
 *   ],
 * };
 * const command = new BatchPutFieldOptionsCommand(input);
 * const response = await client.send(command);
 * // { // BatchPutFieldOptionsResponse
 * //   errors: [ // FieldOptionErrorList
 * //     { // FieldOptionError
 * //       message: "STRING_VALUE", // required
 * //       errorCode: "STRING_VALUE", // required
 * //       value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchPutFieldOptionsCommandInput - {@link BatchPutFieldOptionsCommandInput}
 * @returns {@link BatchPutFieldOptionsCommandOutput}
 * @see {@link BatchPutFieldOptionsCommandInput} for command's `input` shape.
 * @see {@link BatchPutFieldOptionsCommandOutput} for command's `response` shape.
 * @see {@link ConnectCasesClientResolvedConfig | config} for ConnectCasesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>We couldn't process your request because of an issue with the server. Try again
 *       later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>We couldn't find the requested resource. Check that your resources exists and were created
 *       in the same Amazon Web Services Region as your request, and try your request again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The service quota has been exceeded. For a list of service quotas, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html">Amazon Connect Service Quotas</a> in the <i>Amazon Connect
 *         Administrator Guide</i>.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The rate has been exceeded for this API. Please try again after a few minutes.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request isn't valid. Check the syntax and try again.</p>
 *
 * @throws {@link ConnectCasesServiceException}
 * <p>Base exception class for all service exceptions from ConnectCases service.</p>
 *
 */
export class BatchPutFieldOptionsCommand extends $Command<
  BatchPutFieldOptionsCommandInput,
  BatchPutFieldOptionsCommandOutput,
  ConnectCasesClientResolvedConfig
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
  constructor(readonly input: BatchPutFieldOptionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ConnectCasesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchPutFieldOptionsCommandInput, BatchPutFieldOptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchPutFieldOptionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ConnectCasesClient";
    const commandName = "BatchPutFieldOptionsCommand";
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
  private serialize(input: BatchPutFieldOptionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_BatchPutFieldOptionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<BatchPutFieldOptionsCommandOutput> {
    return de_BatchPutFieldOptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
