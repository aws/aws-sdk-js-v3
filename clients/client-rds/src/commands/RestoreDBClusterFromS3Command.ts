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
  RestoreDBClusterFromS3Message,
  RestoreDBClusterFromS3MessageFilterSensitiveLog,
  RestoreDBClusterFromS3Result,
  RestoreDBClusterFromS3ResultFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_queryRestoreDBClusterFromS3Command,
  serializeAws_queryRestoreDBClusterFromS3Command,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

export interface RestoreDBClusterFromS3CommandInput extends RestoreDBClusterFromS3Message {}
export interface RestoreDBClusterFromS3CommandOutput extends RestoreDBClusterFromS3Result, __MetadataBearer {}

/**
 * <p>Creates an Amazon Aurora DB cluster from MySQL data stored in an Amazon S3 bucket.
 *             Amazon RDS must be authorized to access the Amazon S3 bucket and the data must be
 *             created using the Percona XtraBackup utility as described in <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Migrating.ExtMySQL.html#AuroraMySQL.Migrating.ExtMySQL.S3"> Migrating Data from MySQL by Using an Amazon S3 Bucket</a> in the
 *                 <i>Amazon Aurora User Guide</i>.</p>
 *          <note>
 *             <p>This action only restores the DB cluster, not the DB instances for that DB
 *                   cluster. You must invoke the <code>CreateDBInstance</code> action to create DB
 *                   instances for the restored DB cluster, specifying the identifier of the restored DB
 *                   cluster in <code>DBClusterIdentifier</code>. You can create DB instances only after
 *                   the <code>RestoreDBClusterFromS3</code> action has completed and the DB
 *                   cluster is available.</p>
 *          </note>
 *          <p>For more information on Amazon Aurora, see
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
 *                 What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p>
 *          <note>
 *             <p>This action only applies to Aurora DB clusters. The source DB engine must be
 *                 MySQL.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, RestoreDBClusterFromS3Command } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, RestoreDBClusterFromS3Command } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new RestoreDBClusterFromS3Command(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RestoreDBClusterFromS3CommandInput} for command's `input` shape.
 * @see {@link RestoreDBClusterFromS3CommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 */
export class RestoreDBClusterFromS3Command extends $Command<
  RestoreDBClusterFromS3CommandInput,
  RestoreDBClusterFromS3CommandOutput,
  RDSClientResolvedConfig
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

  constructor(readonly input: RestoreDBClusterFromS3CommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RestoreDBClusterFromS3CommandInput, RestoreDBClusterFromS3CommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RestoreDBClusterFromS3Command.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "RestoreDBClusterFromS3Command";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RestoreDBClusterFromS3MessageFilterSensitiveLog,
      outputFilterSensitiveLog: RestoreDBClusterFromS3ResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RestoreDBClusterFromS3CommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryRestoreDBClusterFromS3Command(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RestoreDBClusterFromS3CommandOutput> {
    return deserializeAws_queryRestoreDBClusterFromS3Command(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
