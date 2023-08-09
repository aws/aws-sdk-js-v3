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

import { ListReceiptRuleSetsRequest, ListReceiptRuleSetsResponse } from "../models/models_0";
import { de_ListReceiptRuleSetsCommand, se_ListReceiptRuleSetsCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListReceiptRuleSetsCommand}.
 */
export interface ListReceiptRuleSetsCommandInput extends ListReceiptRuleSetsRequest {}
/**
 * @public
 *
 * The output of {@link ListReceiptRuleSetsCommand}.
 */
export interface ListReceiptRuleSetsCommandOutput extends ListReceiptRuleSetsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the receipt rule sets that exist under your AWS account in the current AWS
 *             Region. If there are additional receipt rule sets to be retrieved, you will receive a
 *                 <code>NextToken</code> that you can provide to the next call to
 *                 <code>ListReceiptRuleSets</code> to retrieve the additional entries.</p>
 *         <p>For information about managing receipt rule sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-managing-receipt-rule-sets.html">Amazon SES Developer Guide</a>.</p>
 *         <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, ListReceiptRuleSetsCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, ListReceiptRuleSetsCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = { // ListReceiptRuleSetsRequest
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListReceiptRuleSetsCommand(input);
 * const response = await client.send(command);
 * // { // ListReceiptRuleSetsResponse
 * //   RuleSets: [ // ReceiptRuleSetsLists
 * //     { // ReceiptRuleSetMetadata
 * //       Name: "STRING_VALUE",
 * //       CreatedTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListReceiptRuleSetsCommandInput - {@link ListReceiptRuleSetsCommandInput}
 * @returns {@link ListReceiptRuleSetsCommandOutput}
 * @see {@link ListReceiptRuleSetsCommandInput} for command's `input` shape.
 * @see {@link ListReceiptRuleSetsCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 * @example ListReceiptRuleSets
 * ```javascript
 * // The following example lists the receipt rule sets that exist under an AWS account:
 * const input = {
 *   "NextToken": ""
 * };
 * const command = new ListReceiptRuleSetsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "NextToken": "",
 *   "RuleSets": [
 *     {
 *       "CreatedTimestamp": "2016-07-15T16:25:59.607Z",
 *       "Name": "MyRuleSet"
 *     }
 *   ]
 * }
 * *\/
 * // example id: listreceiptrulesets-1469121037235
 * ```
 *
 */
export class ListReceiptRuleSetsCommand extends $Command<
  ListReceiptRuleSetsCommandInput,
  ListReceiptRuleSetsCommandOutput,
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
  constructor(readonly input: ListReceiptRuleSetsCommandInput) {
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
  ): Handler<ListReceiptRuleSetsCommandInput, ListReceiptRuleSetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListReceiptRuleSetsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SESClient";
    const commandName = "ListReceiptRuleSetsCommand";
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
  private serialize(input: ListReceiptRuleSetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListReceiptRuleSetsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListReceiptRuleSetsCommandOutput> {
    return de_ListReceiptRuleSetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
