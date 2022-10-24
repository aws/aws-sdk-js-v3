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
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import {
  DescribeAccountAttributesMessage,
  DescribeAccountAttributesMessageFilterSensitiveLog,
  DescribeAccountAttributesResponse,
  DescribeAccountAttributesResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeAccountAttributesCommand,
  serializeAws_json1_1DescribeAccountAttributesCommand,
} from "../protocols/Aws_json1_1";

export interface DescribeAccountAttributesCommandInput extends DescribeAccountAttributesMessage {}
export interface DescribeAccountAttributesCommandOutput extends DescribeAccountAttributesResponse, __MetadataBearer {}

/**
 * <p>Lists all of the DMS attributes for a customer account. These attributes include DMS
 *          quotas for the account and a unique account identifier in a particular DMS region. DMS
 *          quotas include a list of resource quotas supported by the account, such as the number of
 *          replication instances allowed. The description for each resource quota, includes the quota
 *          name, current usage toward that quota, and the quota's maximum value. DMS uses the unique
 *          account identifier to name each artifact used by DMS in the given region.</p>
 *          <p>This command does not take any parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeAccountAttributesCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeAccountAttributesCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const command = new DescribeAccountAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAccountAttributesCommandInput} for command's `input` shape.
 * @see {@link DescribeAccountAttributesCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 */
export class DescribeAccountAttributesCommand extends $Command<
  DescribeAccountAttributesCommandInput,
  DescribeAccountAttributesCommandOutput,
  DatabaseMigrationServiceClientResolvedConfig
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

  constructor(readonly input: DescribeAccountAttributesCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DatabaseMigrationServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAccountAttributesCommandInput, DescribeAccountAttributesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAccountAttributesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "DescribeAccountAttributesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeAccountAttributesMessageFilterSensitiveLog,
      outputFilterSensitiveLog: DescribeAccountAttributesResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeAccountAttributesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeAccountAttributesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAccountAttributesCommandOutput> {
    return deserializeAws_json1_1DescribeAccountAttributesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
