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

import { ListReceiptFiltersRequest, ListReceiptFiltersResponse } from "../models/models_0";
import { de_ListReceiptFiltersCommand, se_ListReceiptFiltersCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListReceiptFiltersCommand}.
 */
export interface ListReceiptFiltersCommandInput extends ListReceiptFiltersRequest {}
/**
 * @public
 *
 * The output of {@link ListReceiptFiltersCommand}.
 */
export interface ListReceiptFiltersCommandOutput extends ListReceiptFiltersResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the IP address filters associated with your Amazon Web Services account in the current
 *             Amazon Web Services Region.</p>
 *          <p>For information about managing IP address filters, see the <a href="https://docs.aws.amazon.com/ses/latest/dg/receiving-email-ip-filtering-console-walkthrough.html">Amazon SES
 *                 Developer Guide</a>.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, ListReceiptFiltersCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, ListReceiptFiltersCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = {};
 * const command = new ListReceiptFiltersCommand(input);
 * const response = await client.send(command);
 * // { // ListReceiptFiltersResponse
 * //   Filters: [ // ReceiptFilterList
 * //     { // ReceiptFilter
 * //       Name: "STRING_VALUE", // required
 * //       IpFilter: { // ReceiptIpFilter
 * //         Policy: "Block" || "Allow", // required
 * //         Cidr: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListReceiptFiltersCommandInput - {@link ListReceiptFiltersCommandInput}
 * @returns {@link ListReceiptFiltersCommandOutput}
 * @see {@link ListReceiptFiltersCommandInput} for command's `input` shape.
 * @see {@link ListReceiptFiltersCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 * @example ListReceiptFilters
 * ```javascript
 * // The following example lists the IP address filters that are associated with an AWS account:
 * const input = undefined;
 * const command = new ListReceiptFiltersCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Filters": [
 *     {
 *       "IpFilter": {
 *         "Cidr": "1.2.3.4/24",
 *         "Policy": "Block"
 *       },
 *       "Name": "MyFilter"
 *     }
 *   ]
 * }
 * *\/
 * // example id: listreceiptfilters-1469120786789
 * ```
 *
 */
export class ListReceiptFiltersCommand extends $Command<
  ListReceiptFiltersCommandInput,
  ListReceiptFiltersCommandOutput,
  SESClientResolvedConfig
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
  constructor(readonly input: ListReceiptFiltersCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SESClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListReceiptFiltersCommandInput, ListReceiptFiltersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListReceiptFiltersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "ListReceiptFiltersCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SimpleEmailService",
        operation: "ListReceiptFilters",
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
  private serialize(input: ListReceiptFiltersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListReceiptFiltersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListReceiptFiltersCommandOutput> {
    return de_ListReceiptFiltersCommand(output, context);
  }
}
