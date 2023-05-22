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

import { CreateSubscriberRequest, CreateSubscriberResponse } from "../models/models_0";
import { de_CreateSubscriberCommand, se_CreateSubscriberCommand } from "../protocols/Aws_restJson1";
import { SecurityLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityLakeClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateSubscriberCommand}.
 */
export interface CreateSubscriberCommandInput extends CreateSubscriberRequest {}
/**
 * @public
 *
 * The output of {@link CreateSubscriberCommand}.
 */
export interface CreateSubscriberCommandOutput extends CreateSubscriberResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a subscription permission for accounts that are already enabled in
 *          Amazon Security Lake. You can create a subscriber with access to data in the current Amazon Web Services Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityLakeClient, CreateSubscriberCommand } from "@aws-sdk/client-securitylake"; // ES Modules import
 * // const { SecurityLakeClient, CreateSubscriberCommand } = require("@aws-sdk/client-securitylake"); // CommonJS import
 * const client = new SecurityLakeClient(config);
 * const input = { // CreateSubscriberRequest
 *   sourceTypes: [ // SourceTypeList // required
 *     { // SourceType Union: only one key present
 *       awsSourceType: "STRING_VALUE",
 *       customSourceType: "STRING_VALUE",
 *     },
 *   ],
 *   accountId: "STRING_VALUE", // required
 *   externalId: "STRING_VALUE", // required
 *   accessTypes: [ // AccessTypeList
 *     "STRING_VALUE",
 *   ],
 *   subscriberName: "STRING_VALUE", // required
 *   subscriberDescription: "STRING_VALUE",
 * };
 * const command = new CreateSubscriberCommand(input);
 * const response = await client.send(command);
 * // { // CreateSubscriberResponse
 * //   subscriptionId: "STRING_VALUE", // required
 * //   roleArn: "STRING_VALUE",
 * //   snsArn: "STRING_VALUE",
 * //   s3BucketArn: "STRING_VALUE",
 * //   resourceShareArn: "STRING_VALUE",
 * //   resourceShareName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateSubscriberCommandInput - {@link CreateSubscriberCommandInput}
 * @returns {@link CreateSubscriberCommandOutput}
 * @see {@link CreateSubscriberCommandInput} for command's `input` shape.
 * @see {@link CreateSubscriberCommandOutput} for command's `response` shape.
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
 * @throws {@link BucketNotFoundException} (client fault)
 *  <p>Amazon Security Lake  generally returns 404 errors if the requested object is missing from the
 *          bucket.</p>
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
export class CreateSubscriberCommand extends $Command<
  CreateSubscriberCommandInput,
  CreateSubscriberCommandOutput,
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
  constructor(readonly input: CreateSubscriberCommandInput) {
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
  ): Handler<CreateSubscriberCommandInput, CreateSubscriberCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateSubscriberCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityLakeClient";
    const commandName = "CreateSubscriberCommand";
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
  private serialize(input: CreateSubscriberCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateSubscriberCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSubscriberCommandOutput> {
    return de_CreateSubscriberCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
