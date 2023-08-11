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

import { CreateReceiptFilterRequest, CreateReceiptFilterResponse } from "../models/models_0";
import { de_CreateReceiptFilterCommand, se_CreateReceiptFilterCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateReceiptFilterCommand}.
 */
export interface CreateReceiptFilterCommandInput extends CreateReceiptFilterRequest {}
/**
 * @public
 *
 * The output of {@link CreateReceiptFilterCommand}.
 */
export interface CreateReceiptFilterCommandOutput extends CreateReceiptFilterResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new IP address filter.</p>
 *          <p>For information about setting up IP address filters, see the <a href="https://docs.aws.amazon.com/ses/latest/dg/receiving-email-ip-filtering-console-walkthrough.html">Amazon SES
 *                 Developer Guide</a>.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, CreateReceiptFilterCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, CreateReceiptFilterCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = { // CreateReceiptFilterRequest
 *   Filter: { // ReceiptFilter
 *     Name: "STRING_VALUE", // required
 *     IpFilter: { // ReceiptIpFilter
 *       Policy: "Block" || "Allow", // required
 *       Cidr: "STRING_VALUE", // required
 *     },
 *   },
 * };
 * const command = new CreateReceiptFilterCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateReceiptFilterCommandInput - {@link CreateReceiptFilterCommandInput}
 * @returns {@link CreateReceiptFilterCommandOutput}
 * @see {@link CreateReceiptFilterCommandInput} for command's `input` shape.
 * @see {@link CreateReceiptFilterCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>Indicates that a resource could not be created because of a naming conflict.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>Indicates that a resource could not be created because of service limits. For a list
 *             of Amazon SES limits, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/limits.html">Amazon SES Developer
 *             Guide</a>.</p>
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 * @example CreateReceiptFilter
 * ```javascript
 * // The following example creates a new IP address filter:
 * const input = {
 *   "Filter": {
 *     "IpFilter": {
 *       "Cidr": "1.2.3.4/24",
 *       "Policy": "Allow"
 *     },
 *     "Name": "MyFilter"
 *   }
 * };
 * const command = new CreateReceiptFilterCommand(input);
 * await client.send(command);
 * // example id: createreceiptfilter-1469122681253
 * ```
 *
 */
export class CreateReceiptFilterCommand extends $Command<
  CreateReceiptFilterCommandInput,
  CreateReceiptFilterCommandOutput,
  SESClientResolvedConfig
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
  constructor(readonly input: CreateReceiptFilterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateReceiptFilterCommandInput, CreateReceiptFilterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateReceiptFilterCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "CreateReceiptFilterCommand";
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
  private serialize(input: CreateReceiptFilterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateReceiptFilterCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateReceiptFilterCommandOutput> {
    return de_CreateReceiptFilterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
