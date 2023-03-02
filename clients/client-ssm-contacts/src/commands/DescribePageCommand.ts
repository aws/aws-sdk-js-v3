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

import {
  DescribePageRequest,
  DescribePageRequestFilterSensitiveLog,
  DescribePageResult,
  DescribePageResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribePageCommand,
  serializeAws_json1_1DescribePageCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMContactsClientResolvedConfig } from "../SSMContactsClient";

/**
 * The input for {@link DescribePageCommand}.
 */
export interface DescribePageCommandInput extends DescribePageRequest {}
/**
 * The output of {@link DescribePageCommand}.
 */
export interface DescribePageCommandOutput extends DescribePageResult, __MetadataBearer {}

/**
 * <p>Lists details of the engagement to a contact channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, DescribePageCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, DescribePageCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const command = new DescribePageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePageCommandInput} for command's `input` shape.
 * @see {@link DescribePageCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for SSMContactsClient's `config` shape.
 *
 * @example To list the details of a page to a contact channel
 * ```javascript
 * // The following describe-page example lists details of a page to a contact channel. The page will include the subject and content provided.
 * const input = {
 *   "PageId": "arn:aws:ssm-contacts:us-east-2:111122223333:page/akuam/ad0052bd-e606-498a-861b-25726292eb93"
 * };
 * const command = new DescribePageCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ContactArn": "arn:aws:ssm-contacts:us-east-2:111122223333:contact/akuam",
 *   "Content": "Testing engagements",
 *   "DeliveryTime": "2021-05-18T18:43:55.265000+00:00",
 *   "EngagementArn": "arn:aws:ssm-contacts:us-east-2:111122223333:engagement/akuam/78a29753-3674-4ac5-9f83-0468563567f0",
 *   "PageArn": "arn:aws:ssm-contacts:us-east-2:111122223333:page/akuam/ad0052bd-e606-498a-861b-25726292eb93",
 *   "PublicContent": "Testing engagements",
 *   "PublicSubject": "test",
 *   "ReadTime": "2021-05-18T18:43:55.708000+00:00",
 *   "Sender": "tester",
 *   "SentTime": "2021-05-18T18:43:29.301000+00:00",
 *   "Subject": "test"
 * }
 * *\/
 * // example id: to-list-the-details-of-a-page-to-a-contact-channel-1630364907282
 * ```
 *
 */
export class DescribePageCommand extends $Command<
  DescribePageCommandInput,
  DescribePageCommandOutput,
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

  constructor(readonly input: DescribePageCommandInput) {
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
  ): Handler<DescribePageCommandInput, DescribePageCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DescribePageCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMContactsClient";
    const commandName = "DescribePageCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribePageRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DescribePageResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribePageCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribePageCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribePageCommandOutput> {
    return deserializeAws_json1_1DescribePageCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
