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

import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import {
  CreateStorageLocationResultMessage,
  CreateStorageLocationResultMessageFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryCreateStorageLocationCommand,
  serializeAws_queryCreateStorageLocationCommand,
} from "../protocols/Aws_query";

/**
 * @public
 *
 * The input for {@link CreateStorageLocationCommand}.
 */
export interface CreateStorageLocationCommandInput {}
/**
 * @public
 *
 * The output of {@link CreateStorageLocationCommand}.
 */
export interface CreateStorageLocationCommandOutput extends CreateStorageLocationResultMessage, __MetadataBearer {}

/**
 * @public
 * <p>Creates a bucket in Amazon S3 to store application versions, logs, and other files used
 *       by Elastic Beanstalk environments. The Elastic Beanstalk console and EB CLI call this API the
 *       first time you create an environment in a region. If the storage location already exists,
 *         <code>CreateStorageLocation</code> still returns the bucket name but does not create a new
 *       bucket.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, CreateStorageLocationCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, CreateStorageLocationCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const command = new CreateStorageLocationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateStorageLocationCommandInput - {@link CreateStorageLocationCommandInput}
 * @returns {@link CreateStorageLocationCommandOutput}
 * @see {@link CreateStorageLocationCommandInput} for command's `input` shape.
 * @see {@link CreateStorageLocationCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 * @throws {@link InsufficientPrivilegesException} (client fault)
 *  <p>The specified account does not have sufficient privileges for one or more AWS
 *       services.</p>
 *
 * @throws {@link S3SubscriptionRequiredException} (client fault)
 *  <p>The specified account does not have a subscription to Amazon S3.</p>
 *
 * @throws {@link TooManyBucketsException} (client fault)
 *  <p>The specified account has reached its limit of Amazon S3 buckets.</p>
 *
 *
 * @example To create a new environment for an application
 * ```javascript
 * // The following operation creates a new environment for version v1 of a java application named my-app:
 * const input = undefined;
 * const command = new CreateStorageLocationCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "S3Bucket": "elasticbeanstalk-us-west-2-0123456789012"
 * }
 * *\/
 * // example id: to-create-a-new-environment-for-an-application-1456269380396
 * ```
 *
 */
export class CreateStorageLocationCommand extends $Command<
  CreateStorageLocationCommandInput,
  CreateStorageLocationCommandOutput,
  ElasticBeanstalkClientResolvedConfig
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
  constructor(readonly input: CreateStorageLocationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ElasticBeanstalkClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateStorageLocationCommandInput, CreateStorageLocationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateStorageLocationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ElasticBeanstalkClient";
    const commandName = "CreateStorageLocationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (input: any) => input,
      outputFilterSensitiveLog: CreateStorageLocationResultMessageFilterSensitiveLog,
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
  private serialize(input: CreateStorageLocationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateStorageLocationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateStorageLocationCommandOutput> {
    return deserializeAws_queryCreateStorageLocationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
