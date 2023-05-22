// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
} from "@aws-sdk/types";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { SerdeContext as __SerdeContext } from "@smithy/types";

import { ListSubscribersRequest, ListSubscribersResponse } from "../models/models_0";
import { de_ListSubscribersCommand, se_ListSubscribersCommand } from "../protocols/Aws_restJson1";
import { SecurityLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityLakeClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListSubscribersCommand}.
 */
export interface ListSubscribersCommandInput extends ListSubscribersRequest {}
/**
 * @public
 *
 * The output of {@link ListSubscribersCommand}.
 */
export interface ListSubscribersCommandOutput extends ListSubscribersResponse, __MetadataBearer {}

/**
 * @public
 * <p>List all subscribers for the specific Amazon Security Lake account ID. You can retrieve a list
 *          of subscriptions associated with a specific organization or Amazon Web Services account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityLakeClient, ListSubscribersCommand } from "@aws-sdk/client-securitylake"; // ES Modules import
 * // const { SecurityLakeClient, ListSubscribersCommand } = require("@aws-sdk/client-securitylake"); // CommonJS import
 * const client = new SecurityLakeClient(config);
 * const input = { // ListSubscribersRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListSubscribersCommand(input);
 * const response = await client.send(command);
 * // { // ListSubscribersResponse
 * //   subscribers: [ // SubscriberList // required
 * //     { // SubscriberResource
 * //       subscriptionId: "STRING_VALUE", // required
 * //       sourceTypes: [ // SourceTypeList // required
 * //         { // SourceType Union: only one key present
 * //           awsSourceType: "STRING_VALUE",
 * //           customSourceType: "STRING_VALUE",
 * //         },
 * //       ],
 * //       accountId: "STRING_VALUE", // required
 * //       subscriberName: "STRING_VALUE",
 * //       subscriberDescription: "STRING_VALUE",
 * //       subscriptionStatus: "STRING_VALUE",
 * //       roleArn: "STRING_VALUE",
 * //       snsArn: "STRING_VALUE",
 * //       s3BucketArn: "STRING_VALUE",
 * //       accessTypes: [ // AccessTypeList
 * //         "STRING_VALUE",
 * //       ],
 * //       subscriptionEndpoint: "STRING_VALUE",
 * //       subscriptionProtocol: "STRING_VALUE",
 * //       externalId: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //       resourceShareArn: "STRING_VALUE",
 * //       resourceShareName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSubscribersCommandInput - {@link ListSubscribersCommandInput}
 * @returns {@link ListSubscribersCommandOutput}
 * @see {@link ListSubscribersCommandInput} for command's `input` shape.
 * @see {@link ListSubscribersCommandOutput} for command's `response` shape.
 * @see {@link SecurityLakeClientResolvedConfig | config} for SecurityLakeClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action. Access denied errors appear when Amazon Security Lake explicitly or implicitly denies an authorization
 *          request. An explicit denial occurs when a policy contains a Deny statement for the specific
 *          Amazon Web Services action. An implicit denial occurs when there is no applicable Deny statement and also
 *          no applicable Allow statement.</p>
 *
 * @throws {@link AccountNotFoundException} (client fault)
 *  <p>Amazon Security Lake cannot find an Amazon Web Services account with the accountID that you
 *          specified, or the account whose credentials you used to make this request isn't a member of
 *          an organization.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal service exceptions are sometimes caused by transient issues. Before you start
 *          troubleshooting, perform the operation again. </p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because a value that's not valid or is out of range was
 *          supplied for an input parameter. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Your signing certificate could not be validated. </p>
 *
 * @throws {@link SecurityLakeServiceException}
 * <p>Base exception class for all service exceptions from SecurityLake service.</p>
 *
 */
export class ListSubscribersCommand extends $Command<
  ListSubscribersCommandInput,
  ListSubscribersCommandOutput,
  SecurityLakeClientResolvedConfig
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
  constructor(readonly input: ListSubscribersCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SecurityLakeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListSubscribersCommandInput, ListSubscribersCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListSubscribersCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityLakeClient";
    const commandName = "ListSubscribersCommand";
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
  private serialize(input: ListSubscribersCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListSubscribersCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListSubscribersCommandOutput> {
    return de_ListSubscribersCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
