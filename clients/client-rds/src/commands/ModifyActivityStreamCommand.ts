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

import { ModifyActivityStreamRequest, ModifyActivityStreamResponse } from "../models/models_1";
import { de_ModifyActivityStreamCommand, se_ModifyActivityStreamCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyActivityStreamCommand}.
 */
export interface ModifyActivityStreamCommandInput extends ModifyActivityStreamRequest {}
/**
 * @public
 *
 * The output of {@link ModifyActivityStreamCommand}.
 */
export interface ModifyActivityStreamCommandOutput extends ModifyActivityStreamResponse, __MetadataBearer {}

/**
 * @public
 * <p>Changes the audit policy state of a database activity stream to either locked (default) or unlocked. A locked policy is read-only,
 *             whereas an unlocked policy is read/write. If your activity stream is started and locked, you can unlock it, customize your audit policy,
 *             and then lock your activity stream. Restarting the activity stream isn't required. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/DBActivityStreams.Modifying.html"> Modifying a database activity stream</a> in the
 *                 <i>Amazon RDS User Guide</i>. </p>
 *          <p>This operation is supported for RDS for Oracle and Microsoft SQL Server.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ModifyActivityStreamCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ModifyActivityStreamCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // ModifyActivityStreamRequest
 *   ResourceArn: "STRING_VALUE",
 *   AuditPolicyState: "locked" || "unlocked",
 * };
 * const command = new ModifyActivityStreamCommand(input);
 * const response = await client.send(command);
 * // { // ModifyActivityStreamResponse
 * //   KmsKeyId: "STRING_VALUE",
 * //   KinesisStreamName: "STRING_VALUE",
 * //   Status: "stopped" || "starting" || "started" || "stopping",
 * //   Mode: "sync" || "async",
 * //   EngineNativeAuditFieldsIncluded: true || false,
 * //   PolicyStatus: "locked" || "unlocked" || "locking-policy" || "unlocking-policy",
 * // };
 *
 * ```
 *
 * @param ModifyActivityStreamCommandInput - {@link ModifyActivityStreamCommandInput}
 * @returns {@link ModifyActivityStreamCommandOutput}
 * @see {@link ModifyActivityStreamCommandInput} for command's `input` shape.
 * @see {@link ModifyActivityStreamCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBInstanceNotFoundFault} (client fault)
 *  <p>
 *             <code>DBInstanceIdentifier</code> doesn't refer to an existing DB instance.</p>
 *
 * @throws {@link InvalidDBInstanceStateFault} (client fault)
 *  <p>The DB instance isn't in a valid state.</p>
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The specified resource ID was not found.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 */
export class ModifyActivityStreamCommand extends $Command<
  ModifyActivityStreamCommandInput,
  ModifyActivityStreamCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: ModifyActivityStreamCommandInput) {
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
  ): Handler<ModifyActivityStreamCommandInput, ModifyActivityStreamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyActivityStreamCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "ModifyActivityStreamCommand";
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
  private serialize(input: ModifyActivityStreamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ModifyActivityStreamCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ModifyActivityStreamCommandOutput> {
    return de_ModifyActivityStreamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
