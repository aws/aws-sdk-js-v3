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

import { CreateCustomLogSourceRequest, CreateCustomLogSourceResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateCustomLogSourceCommand,
  serializeAws_restJson1CreateCustomLogSourceCommand,
} from "../protocols/Aws_restJson1";
import { SecurityLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityLakeClient";

/**
 * @public
 *
 * The input for {@link CreateCustomLogSourceCommand}.
 */
export interface CreateCustomLogSourceCommandInput extends CreateCustomLogSourceRequest {}
/**
 * @public
 *
 * The output of {@link CreateCustomLogSourceCommand}.
 */
export interface CreateCustomLogSourceCommandOutput extends CreateCustomLogSourceResponse, __MetadataBearer {}

/**
 * @public
 * <p>Adds a third-party custom source in Amazon Security Lake, from the Amazon Web Services Region
 *          where you want to create a custom source. Security Lake can collect logs and events from
 *          third-party custom sources. After creating the appropriate IAM role to
 *          invoke Glue crawler, use this API to add a custom source name in Security Lake. This
 *          operation creates a partition in the Amazon S3 bucket for Security Lake as the target
 *          location for log files from the custom source in addition to an associated Glue table and an Glue crawler.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityLakeClient, CreateCustomLogSourceCommand } from "@aws-sdk/client-securitylake"; // ES Modules import
 * // const { SecurityLakeClient, CreateCustomLogSourceCommand } = require("@aws-sdk/client-securitylake"); // CommonJS import
 * const client = new SecurityLakeClient(config);
 * const input = {
 *   customSourceName: "STRING_VALUE", // required
 *   eventClass: "STRING_VALUE", // required
 *   glueInvocationRoleArn: "STRING_VALUE", // required
 *   logProviderAccountId: "STRING_VALUE", // required
 * };
 * const command = new CreateCustomLogSourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateCustomLogSourceCommandInput - {@link CreateCustomLogSourceCommandInput}
 * @returns {@link CreateCustomLogSourceCommandOutput}
 * @see {@link CreateCustomLogSourceCommandInput} for command's `input` shape.
 * @see {@link CreateCustomLogSourceCommandOutput} for command's `response` shape.
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
 * @throws {@link ConflictSourceNamesException} (client fault)
 *  <p>There was a conflict when you attempted to modify a Security Lake source name. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal service exceptions are sometimes caused by transient issues. Before you start
 *          troubleshooting, perform the operation again. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Your signing certificate could not be validated. </p>
 *
 *
 */
export class CreateCustomLogSourceCommand extends $Command<
  CreateCustomLogSourceCommandInput,
  CreateCustomLogSourceCommandOutput,
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
  constructor(readonly input: CreateCustomLogSourceCommandInput) {
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
  ): Handler<CreateCustomLogSourceCommandInput, CreateCustomLogSourceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateCustomLogSourceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SecurityLakeClient";
    const commandName = "CreateCustomLogSourceCommand";
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
  private serialize(input: CreateCustomLogSourceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateCustomLogSourceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateCustomLogSourceCommandOutput> {
    return deserializeAws_restJson1CreateCustomLogSourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
