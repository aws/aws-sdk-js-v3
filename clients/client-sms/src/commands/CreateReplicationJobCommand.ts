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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { CreateReplicationJobRequest, CreateReplicationJobResponse } from "../models/models_0";
import { de_CreateReplicationJobCommand, se_CreateReplicationJobCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SMSClientResolvedConfig } from "../SMSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateReplicationJobCommand}.
 */
export interface CreateReplicationJobCommandInput extends CreateReplicationJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateReplicationJobCommand}.
 */
export interface CreateReplicationJobCommandOutput extends CreateReplicationJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a replication job. The replication job schedules periodic replication runs
 *             to replicate your server to Amazon Web Services. Each replication run creates an Amazon Machine Image
 *             (AMI).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, CreateReplicationJobCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, CreateReplicationJobCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const input = { // CreateReplicationJobRequest
 *   serverId: "STRING_VALUE", // required
 *   seedReplicationTime: new Date("TIMESTAMP"), // required
 *   frequency: Number("int"),
 *   runOnce: true || false,
 *   licenseType: "AWS" || "BYOL",
 *   roleName: "STRING_VALUE",
 *   description: "STRING_VALUE",
 *   numberOfRecentAmisToKeep: Number("int"),
 *   encrypted: true || false,
 *   kmsKeyId: "STRING_VALUE",
 * };
 * const command = new CreateReplicationJobCommand(input);
 * const response = await client.send(command);
 * // { // CreateReplicationJobResponse
 * //   replicationJobId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateReplicationJobCommandInput - {@link CreateReplicationJobCommandInput}
 * @returns {@link CreateReplicationJobCommandOutput}
 * @see {@link CreateReplicationJobCommandInput} for command's `input` shape.
 * @see {@link CreateReplicationJobCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for SMSClient's `config` shape.
 *
 * @throws {@link InternalError} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A specified parameter is not valid.</p>
 *
 * @throws {@link MissingRequiredParameterException} (client fault)
 *  <p>A required parameter is missing.</p>
 *
 * @throws {@link NoConnectorsAvailableException} (client fault)
 *  <p>There are no connectors available.</p>
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>This operation is not allowed.</p>
 *
 * @throws {@link ReplicationJobAlreadyExistsException} (client fault)
 *  <p>The specified replication job already exists.</p>
 *
 * @throws {@link ServerCannotBeReplicatedException} (client fault)
 *  <p>The specified server cannot be replicated.</p>
 *
 * @throws {@link TemporarilyUnavailableException} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link UnauthorizedOperationException} (client fault)
 *  <p>You lack permissions needed to perform this operation. Check your IAM policies,
 *             and ensure that you are using the correct access keys.</p>
 *
 * @throws {@link SMSServiceException}
 * <p>Base exception class for all service exceptions from SMS service.</p>
 *
 */
export class CreateReplicationJobCommand extends $Command<
  CreateReplicationJobCommandInput,
  CreateReplicationJobCommandOutput,
  SMSClientResolvedConfig
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
  constructor(readonly input: CreateReplicationJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateReplicationJobCommandInput, CreateReplicationJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateReplicationJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SMSClient";
    const commandName = "CreateReplicationJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSServerMigrationService_V2016_10_24",
        operation: "CreateReplicationJob",
      },
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
  private serialize(input: CreateReplicationJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateReplicationJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateReplicationJobCommandOutput> {
    return de_CreateReplicationJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
