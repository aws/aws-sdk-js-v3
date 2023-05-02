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

import { CloudTrailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudTrailClient";
import { StartQueryRequest, StartQueryResponse } from "../models/models_0";
import { de_StartQueryCommand, se_StartQueryCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link StartQueryCommand}.
 */
export interface StartQueryCommandInput extends StartQueryRequest {}
/**
 * @public
 *
 * The output of {@link StartQueryCommand}.
 */
export interface StartQueryCommandOutput extends StartQueryResponse, __MetadataBearer {}

/**
 * @public
 * <p>Starts a CloudTrail Lake query. The required <code>QueryStatement</code>
 *          parameter provides your SQL query, enclosed in single quotation marks. Use the optional
 *             <code>DeliveryS3Uri</code> parameter to deliver the query results to an S3
 *          bucket.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudTrailClient, StartQueryCommand } from "@aws-sdk/client-cloudtrail"; // ES Modules import
 * // const { CloudTrailClient, StartQueryCommand } = require("@aws-sdk/client-cloudtrail"); // CommonJS import
 * const client = new CloudTrailClient(config);
 * const input = { // StartQueryRequest
 *   QueryStatement: "STRING_VALUE", // required
 *   DeliveryS3Uri: "STRING_VALUE",
 * };
 * const command = new StartQueryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param StartQueryCommandInput - {@link StartQueryCommandInput}
 * @returns {@link StartQueryCommandOutput}
 * @see {@link StartQueryCommandInput} for command's `input` shape.
 * @see {@link StartQueryCommandOutput} for command's `response` shape.
 * @see {@link CloudTrailClientResolvedConfig | config} for CloudTrailClient's `config` shape.
 *
 * @throws {@link EventDataStoreARNInvalidException} (client fault)
 *  <p>The specified event data store ARN is not valid or does not map to an event data store
 *          in your account.</p>
 *
 * @throws {@link EventDataStoreNotFoundException} (client fault)
 *  <p>The specified event data store was not found.</p>
 *
 * @throws {@link InactiveEventDataStoreException} (client fault)
 *  <p>The event data store is inactive.</p>
 *
 * @throws {@link InsufficientEncryptionPolicyException} (client fault)
 *  <p>This exception is thrown when the policy on the S3 bucket or KMS key does
 *          not have sufficient permissions for the operation.</p>
 *
 * @throws {@link InsufficientS3BucketPolicyException} (client fault)
 *  <p>This exception is thrown when the policy on the S3 bucket is not sufficient.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>The request includes a parameter that is not valid.</p>
 *
 * @throws {@link InvalidQueryStatementException} (client fault)
 *  <p>The query that was submitted has validation errors, or uses incorrect syntax or
 *          unsupported keywords. For more information about writing a query, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/query-create-edit-query.html">Create or edit a query</a> in the <i>CloudTrail User
 *             Guide</i>.</p>
 *
 * @throws {@link InvalidS3BucketNameException} (client fault)
 *  <p>This exception is thrown when the provided S3 bucket name is not valid.</p>
 *
 * @throws {@link InvalidS3PrefixException} (client fault)
 *  <p>This exception is thrown when the provided S3 prefix is not valid.</p>
 *
 * @throws {@link MaxConcurrentQueriesException} (client fault)
 *  <p>You are already running the maximum number of concurrent queries. Wait a minute for some
 *          queries to finish, and then run the query again.</p>
 *
 * @throws {@link NoManagementAccountSLRExistsException} (client fault)
 *  <p> This exception is thrown when the management account does not have a service-linked
 *          role. </p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>This exception is thrown when the requested operation is not permitted.</p>
 *
 * @throws {@link S3BucketDoesNotExistException} (client fault)
 *  <p>This exception is thrown when the specified S3 bucket does not exist.</p>
 *
 * @throws {@link UnsupportedOperationException} (client fault)
 *  <p>This exception is thrown when the requested operation is not supported.</p>
 *
 *
 */
export class StartQueryCommand extends $Command<
  StartQueryCommandInput,
  StartQueryCommandOutput,
  CloudTrailClientResolvedConfig
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
  constructor(readonly input: StartQueryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudTrailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartQueryCommandInput, StartQueryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, StartQueryCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudTrailClient";
    const commandName = "StartQueryCommand";
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
  private serialize(input: StartQueryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartQueryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartQueryCommandOutput> {
    return de_StartQueryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
