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

import { CreateCustomLogSourceRequest, CreateCustomLogSourceResponse } from "../models/models_0";
import { de_CreateCustomLogSourceCommand, se_CreateCustomLogSourceCommand } from "../protocols/Aws_restJson1";
import { SecurityLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SecurityLakeClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 *          location for log files from the custom source. In addition, this operation also creates an
 *          associated Glue table and an Glue crawler.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SecurityLakeClient, CreateCustomLogSourceCommand } from "@aws-sdk/client-securitylake"; // ES Modules import
 * // const { SecurityLakeClient, CreateCustomLogSourceCommand } = require("@aws-sdk/client-securitylake"); // CommonJS import
 * const client = new SecurityLakeClient(config);
 * const input = { // CreateCustomLogSourceRequest
 *   sourceName: "STRING_VALUE", // required
 *   sourceVersion: "STRING_VALUE",
 *   eventClasses: [ // OcsfEventClassList
 *     "STRING_VALUE",
 *   ],
 *   configuration: { // CustomLogSourceConfiguration
 *     crawlerConfiguration: { // CustomLogSourceCrawlerConfiguration
 *       roleArn: "STRING_VALUE", // required
 *     },
 *     providerIdentity: { // AwsIdentity
 *       principal: "STRING_VALUE", // required
 *       externalId: "STRING_VALUE", // required
 *     },
 *   },
 * };
 * const command = new CreateCustomLogSourceCommand(input);
 * const response = await client.send(command);
 * // { // CreateCustomLogSourceResponse
 * //   source: { // CustomLogSourceResource
 * //     sourceName: "STRING_VALUE",
 * //     sourceVersion: "STRING_VALUE",
 * //     provider: { // CustomLogSourceProvider
 * //       roleArn: "STRING_VALUE",
 * //       location: "STRING_VALUE",
 * //     },
 * //     attributes: { // CustomLogSourceAttributes
 * //       crawlerArn: "STRING_VALUE",
 * //       databaseArn: "STRING_VALUE",
 * //       tableArn: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
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
 * @throws {@link BadRequestException} (client fault)
 *  <p>The request is malformed or contains an error such as an invalid parameter value or a missing required parameter.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Occurs when a conflict with a previous successful write is detected. This generally
 *          occurs when the previous write did not have time to propagate to the host serving the
 *          current request. A retry (with appropriate backoff logic) is the recommended response to
 *          this exception.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Internal service exceptions are sometimes caused by transient issues. Before you start
 *          troubleshooting, perform the operation again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link SecurityLakeServiceException}
 * <p>Base exception class for all service exceptions from SecurityLake service.</p>
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
    return se_CreateCustomLogSourceCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateCustomLogSourceCommandOutput> {
    return de_CreateCustomLogSourceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
