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

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { UpdateFrameworkInput, UpdateFrameworkOutput } from "../models/models_0";
import { de_UpdateFrameworkCommand, se_UpdateFrameworkCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateFrameworkCommand}.
 */
export interface UpdateFrameworkCommandInput extends UpdateFrameworkInput {}
/**
 * @public
 *
 * The output of {@link UpdateFrameworkCommand}.
 */
export interface UpdateFrameworkCommandOutput extends UpdateFrameworkOutput, __MetadataBearer {}

/**
 * @public
 * <p>Updates an existing framework identified by its <code>FrameworkName</code> with the
 *          input document in JSON format.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, UpdateFrameworkCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, UpdateFrameworkCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const input = { // UpdateFrameworkInput
 *   FrameworkName: "STRING_VALUE", // required
 *   FrameworkDescription: "STRING_VALUE",
 *   FrameworkControls: [ // FrameworkControls
 *     { // FrameworkControl
 *       ControlName: "STRING_VALUE", // required
 *       ControlInputParameters: [ // ControlInputParameters
 *         { // ControlInputParameter
 *           ParameterName: "STRING_VALUE",
 *           ParameterValue: "STRING_VALUE",
 *         },
 *       ],
 *       ControlScope: { // ControlScope
 *         ComplianceResourceIds: [ // ComplianceResourceIdList
 *           "STRING_VALUE",
 *         ],
 *         ComplianceResourceTypes: [ // ResourceTypeList
 *           "STRING_VALUE",
 *         ],
 *         Tags: { // stringMap
 *           "<keys>": "STRING_VALUE",
 *         },
 *       },
 *     },
 *   ],
 *   IdempotencyToken: "STRING_VALUE",
 * };
 * const command = new UpdateFrameworkCommand(input);
 * const response = await client.send(command);
 * // { // UpdateFrameworkOutput
 * //   FrameworkName: "STRING_VALUE",
 * //   FrameworkArn: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param UpdateFrameworkCommandInput - {@link UpdateFrameworkCommandInput}
 * @returns {@link UpdateFrameworkCommandOutput}
 * @see {@link UpdateFrameworkCommandInput} for command's `input` shape.
 * @see {@link UpdateFrameworkCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>The required resource already exists.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Backup can't perform the action that you requested until it finishes
 *          performing a previous action. Try again later.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit in the request has been exceeded; for example, a maximum number of items allowed
 *          in a request.</p>
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *  <p>Indicates that a required parameter is missing.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource that is required for the action doesn't exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request failed due to a temporary failure of the server.</p>
 *
 * @throws {@link BackupServiceException}
 * <p>Base exception class for all service exceptions from Backup service.</p>
 *
 */
export class UpdateFrameworkCommand extends $Command<
  UpdateFrameworkCommandInput,
  UpdateFrameworkCommandOutput,
  BackupClientResolvedConfig
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
  constructor(readonly input: UpdateFrameworkCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateFrameworkCommandInput, UpdateFrameworkCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateFrameworkCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "UpdateFrameworkCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CryoControllerUserManager",
        operation: "UpdateFramework",
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
  private serialize(input: UpdateFrameworkCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateFrameworkCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateFrameworkCommandOutput> {
    return de_UpdateFrameworkCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
