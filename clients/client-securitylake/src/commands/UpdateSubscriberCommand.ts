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

import { UpdateSubscriberRequest, UpdateSubscriberResponse } from "../models/models_0";
import { de_UpdateSubscriberCommand, se_UpdateSubscriberCommand } from "../protocols/Aws_restJson1";
import { SecurityLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityLakeClient";

/**
 * @public
 *
 * The input for {@link UpdateSubscriberCommand}.
 */
export interface UpdateSubscriberCommandInput extends UpdateSubscriberRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSubscriberCommand}.
 */
export interface UpdateSubscriberCommandOutput extends UpdateSubscriberResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates an existing subscription for the given Amazon Security Lake account ID. You can update
 *          a subscriber by changing the sources that the subscriber consumes data from. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityLakeClient, UpdateSubscriberCommand } from "@aws-sdk/client-securitylake"; // ES Modules import
 * // const { SecurityLakeClient, UpdateSubscriberCommand } = require("@aws-sdk/client-securitylake"); // CommonJS import
 * const client = new SecurityLakeClient(config);
 * const input = { // UpdateSubscriberRequest
 *   id: "STRING_VALUE", // required
 *   sourceTypes: [ // SourceTypeList // required
 *     { // SourceType Union: only one key present
 *       awsSourceType: "STRING_VALUE",
 *       customSourceType: "STRING_VALUE",
 *     },
 *   ],
 *   externalId: "STRING_VALUE",
 *   subscriberName: "STRING_VALUE",
 *   subscriberDescription: "STRING_VALUE",
 * };
 * const command = new UpdateSubscriberCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSubscriberResponse
 * //   subscriber: { // SubscriberResource
 * //     subscriptionId: "STRING_VALUE", // required
 * //     sourceTypes: [ // SourceTypeList // required
 * //       { // SourceType Union: only one key present
 * //         awsSourceType: "STRING_VALUE",
 * //         customSourceType: "STRING_VALUE",
 * //       },
 * //     ],
 * //     accountId: "STRING_VALUE", // required
 * //     subscriberName: "STRING_VALUE",
 * //     subscriberDescription: "STRING_VALUE",
 * //     subscriptionStatus: "STRING_VALUE",
 * //     roleArn: "STRING_VALUE",
 * //     snsArn: "STRING_VALUE",
 * //     s3BucketArn: "STRING_VALUE",
 * //     accessTypes: [ // AccessTypeList
 * //       "STRING_VALUE",
 * //     ],
 * //     subscriptionEndpoint: "STRING_VALUE",
 * //     subscriptionProtocol: "STRING_VALUE",
 * //     externalId: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"),
 * //     updatedAt: new Date("TIMESTAMP"),
 * //     resourceShareArn: "STRING_VALUE",
 * //     resourceShareName: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateSubscriberCommandInput - {@link UpdateSubscriberCommandInput}
 * @returns {@link UpdateSubscriberCommandOutput}
 * @see {@link UpdateSubscriberCommandInput} for command's `input` shape.
 * @see {@link UpdateSubscriberCommandOutput} for command's `response` shape.
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
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>More than one process tried to modify a resource at the same time. </p>
 *
 * @throws {@link ConflictSubscriptionException} (client fault)
 *  <p>A conflicting subscription exception operation is in progress. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal service exceptions are sometimes caused by transient issues. Before you start
 *          troubleshooting, perform the operation again. </p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because a value that's not valid or is out of range was
 *          supplied for an input parameter. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Your signing certificate could not be validated. </p>
 *
 * @throws {@link SecurityLakeServiceException}
 * <p>Base exception class for all service exceptions from SecurityLake service.</p>
 *
 */
export class UpdateSubscriberCommand extends $Command<
  UpdateSubscriberCommandInput,
  UpdateSubscriberCommandOutput,
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
  constructor(readonly input: UpdateSubscriberCommandInput) {
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
  ): Handler<UpdateSubscriberCommandInput, UpdateSubscriberCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateSubscriberCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityLakeClient";
    const commandName = "UpdateSubscriberCommand";
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
  private serialize(input: UpdateSubscriberCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateSubscriberCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateSubscriberCommandOutput> {
    return de_UpdateSubscriberCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
