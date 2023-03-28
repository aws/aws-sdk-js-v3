// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { ListPageReceiptsRequest, ListPageReceiptsResult } from "../models/models_0";
import {
  deserializeAws_json1_1ListPageReceiptsCommand,
  serializeAws_json1_1ListPageReceiptsCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMContactsClientResolvedConfig } from "../SSMContactsClient";

/**
 * @public
 *
 * The input for {@link ListPageReceiptsCommand}.
 */
export interface ListPageReceiptsCommandInput extends ListPageReceiptsRequest {}
/**
 * @public
 *
 * The output of {@link ListPageReceiptsCommand}.
 */
export interface ListPageReceiptsCommandOutput extends ListPageReceiptsResult, __MetadataBearer {}

/**
 * @public
 * <p>Lists all of the engagements to contact channels that have been acknowledged.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, ListPageReceiptsCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, ListPageReceiptsCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const input = { // ListPageReceiptsRequest
 *   PageId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListPageReceiptsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param ListPageReceiptsCommandInput - {@link ListPageReceiptsCommandInput}
 * @returns {@link ListPageReceiptsCommandOutput}
 * @see {@link ListPageReceiptsCommandInput} for command's `input` shape.
 * @see {@link ListPageReceiptsCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for SSMContactsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource that doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *          service.</p>
 *
 *
 * @example To list page receipts
 * ```javascript
 * // The following command-name example lists whether a page was received or not by a contact.
 * const input = {
 *   "PageId": "arn:aws:ssm-contacts:us-east-2:111122223333:page/akuam/94ea0c7b-56d9-46c3-b84a-a37c8b067ad3"
 * };
 * const command = new ListPageReceiptsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Receipts": [
 *     {
 *       "ContactChannelArn": "arn:aws:ssm-contacts:us-east-2:111122223333:contact-channel/akuam/fc7405c4-46b2-48b7-87b2-93e2f225b90d",
 *       "ReceiptInfo": "425440",
 *       "ReceiptTime": "2021-05-18T20:42:57.485000+00:00",
 *       "ReceiptType": "DELIVERED"
 *     },
 *     {
 *       "ContactChannelArn": "arn:aws:ssm-contacts:us-east-2:111122223333:contact-channel/akuam/fc7405c4-46b2-48b7-87b2-93e2f225b90d",
 *       "ReceiptInfo": "425440",
 *       "ReceiptTime": "2021-05-18T20:42:57.907000+00:00",
 *       "ReceiptType": "READ"
 *     },
 *     {
 *       "ContactChannelArn": "arn:aws:ssm-contacts:us-east-2:111122223333:contact-channel/akuam/fc7405c4-46b2-48b7-87b2-93e2f225b90d",
 *       "ReceiptInfo": "SM6656c19132f1465f9c9c1123a5dde7c9",
 *       "ReceiptTime": "2021-05-18T20:40:52.962000+00:00",
 *       "ReceiptType": "SENT"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-list-page-receipts-1630367706869
 * ```
 *
 */
export class ListPageReceiptsCommand extends $Command<
  ListPageReceiptsCommandInput,
  ListPageReceiptsCommandOutput,
  SSMContactsClientResolvedConfig
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
  constructor(readonly input: ListPageReceiptsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMContactsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListPageReceiptsCommandInput, ListPageReceiptsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListPageReceiptsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMContactsClient";
    const commandName = "ListPageReceiptsCommand";
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
  private serialize(input: ListPageReceiptsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListPageReceiptsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPageReceiptsCommandOutput> {
    return deserializeAws_json1_1ListPageReceiptsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
