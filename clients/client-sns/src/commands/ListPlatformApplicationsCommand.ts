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

import { ListPlatformApplicationsInput, ListPlatformApplicationsResponse } from "../models/models_0";
import { de_ListPlatformApplicationsCommand, se_ListPlatformApplicationsCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SNSClientResolvedConfig } from "../SNSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListPlatformApplicationsCommand}.
 */
export interface ListPlatformApplicationsCommandInput extends ListPlatformApplicationsInput {}
/**
 * @public
 *
 * The output of {@link ListPlatformApplicationsCommand}.
 */
export interface ListPlatformApplicationsCommandOutput extends ListPlatformApplicationsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists the platform application objects for the supported push notification services,
 *             such as APNS and GCM (Firebase Cloud Messaging). The results for
 *                 <code>ListPlatformApplications</code> are paginated and return a limited list of
 *             applications, up to 100. If additional records are available after the first page
 *             results, then a NextToken string will be returned. To receive the next page, you call
 *                 <code>ListPlatformApplications</code> using the NextToken string received from the
 *             previous call. When there are no more records to return, <code>NextToken</code> will be
 *             null. For more information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push
 *             Notifications</a>. </p>
 *          <p>This action is throttled at 15 transactions per second (TPS).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, ListPlatformApplicationsCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, ListPlatformApplicationsCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const input = { // ListPlatformApplicationsInput
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListPlatformApplicationsCommand(input);
 * const response = await client.send(command);
 * // { // ListPlatformApplicationsResponse
 * //   PlatformApplications: [ // ListOfPlatformApplications
 * //     { // PlatformApplication
 * //       PlatformApplicationArn: "STRING_VALUE",
 * //       Attributes: { // MapStringToString
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPlatformApplicationsCommandInput - {@link ListPlatformApplicationsCommandInput}
 * @returns {@link ListPlatformApplicationsCommandOutput}
 * @see {@link ListPlatformApplicationsCommandInput} for command's `input` shape.
 * @see {@link ListPlatformApplicationsCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for SNSClient's `config` shape.
 *
 * @throws {@link AuthorizationErrorException} (client fault)
 *  <p>Indicates that the user has been denied access to the requested resource.</p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>Indicates an internal service error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Indicates that a request parameter does not comply with the associated
 *             constraints.</p>
 *
 * @throws {@link SNSServiceException}
 * <p>Base exception class for all service exceptions from SNS service.</p>
 *
 */
export class ListPlatformApplicationsCommand extends $Command<
  ListPlatformApplicationsCommandInput,
  ListPlatformApplicationsCommandOutput,
  SNSClientResolvedConfig
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
  constructor(readonly input: ListPlatformApplicationsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SNSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListPlatformApplicationsCommandInput, ListPlatformApplicationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListPlatformApplicationsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SNSClient";
    const commandName = "ListPlatformApplicationsCommand";
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
  private serialize(input: ListPlatformApplicationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListPlatformApplicationsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPlatformApplicationsCommandOutput> {
    return de_ListPlatformApplicationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
