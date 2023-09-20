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

import { CloudControlClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudControlClient";
import {
  CancelResourceRequestInput,
  CancelResourceRequestOutput,
  CancelResourceRequestOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_CancelResourceRequestCommand, se_CancelResourceRequestCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CancelResourceRequestCommand}.
 */
export interface CancelResourceRequestCommandInput extends CancelResourceRequestInput {}
/**
 * @public
 *
 * The output of {@link CancelResourceRequestCommand}.
 */
export interface CancelResourceRequestCommandOutput extends CancelResourceRequestOutput, __MetadataBearer {}

/**
 * @public
 * <p>Cancels the specified resource operation request. For more information, see <a href="https://docs.aws.amazon.com/cloudcontrolapi/latest/userguide/resource-operations-manage-requests.html#resource-operations-manage-requests-cancel">Canceling resource operation requests</a> in the
 *         <i>Amazon Web Services Cloud Control API User Guide</i>.</p>
 *          <p>Only resource operations requests with a status of <code>PENDING</code> or
 *         <code>IN_PROGRESS</code> can be canceled.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudControlClient, CancelResourceRequestCommand } from "@aws-sdk/client-cloudcontrol"; // ES Modules import
 * // const { CloudControlClient, CancelResourceRequestCommand } = require("@aws-sdk/client-cloudcontrol"); // CommonJS import
 * const client = new CloudControlClient(config);
 * const input = { // CancelResourceRequestInput
 *   RequestToken: "STRING_VALUE", // required
 * };
 * const command = new CancelResourceRequestCommand(input);
 * const response = await client.send(command);
 * // { // CancelResourceRequestOutput
 * //   ProgressEvent: { // ProgressEvent
 * //     TypeName: "STRING_VALUE",
 * //     Identifier: "STRING_VALUE",
 * //     RequestToken: "STRING_VALUE",
 * //     Operation: "STRING_VALUE",
 * //     OperationStatus: "STRING_VALUE",
 * //     EventTime: new Date("TIMESTAMP"),
 * //     ResourceModel: "STRING_VALUE",
 * //     StatusMessage: "STRING_VALUE",
 * //     ErrorCode: "STRING_VALUE",
 * //     RetryAfter: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param CancelResourceRequestCommandInput - {@link CancelResourceRequestCommandInput}
 * @returns {@link CancelResourceRequestCommandOutput}
 * @see {@link CancelResourceRequestCommandInput} for command's `input` shape.
 * @see {@link CancelResourceRequestCommandOutput} for command's `response` shape.
 * @see {@link CloudControlClientResolvedConfig | config} for CloudControlClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (server fault)
 *  <p>The resource is currently being modified by another operation.</p>
 *
 * @throws {@link RequestTokenNotFoundException} (client fault)
 *  <p>A resource operation with the specified request token can't be found.</p>
 *
 * @throws {@link CloudControlServiceException}
 * <p>Base exception class for all service exceptions from CloudControl service.</p>
 *
 */
export class CancelResourceRequestCommand extends $Command<
  CancelResourceRequestCommandInput,
  CancelResourceRequestCommandOutput,
  CloudControlClientResolvedConfig
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
  constructor(readonly input: CancelResourceRequestCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudControlClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CancelResourceRequestCommandInput, CancelResourceRequestCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CancelResourceRequestCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudControlClient";
    const commandName = "CancelResourceRequestCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: CancelResourceRequestOutputFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "CloudApiService",
        operation: "CancelResourceRequest",
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
  private serialize(input: CancelResourceRequestCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CancelResourceRequestCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CancelResourceRequestCommandOutput> {
    return de_CancelResourceRequestCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
