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
import { CreateFrameworkInput, CreateFrameworkOutput } from "../models/models_0";
import { de_CreateFrameworkCommand, se_CreateFrameworkCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateFrameworkCommand}.
 */
export interface CreateFrameworkCommandInput extends CreateFrameworkInput {}
/**
 * @public
 *
 * The output of {@link CreateFrameworkCommand}.
 */
export interface CreateFrameworkCommandOutput extends CreateFrameworkOutput, __MetadataBearer {}

/**
 * @public
 * <p>Creates a framework with one or more controls. A framework is a collection of controls
 *          that you can use to evaluate your backup practices. By using pre-built customizable
 *          controls to define your policies, you can evaluate whether your backup practices comply
 *          with your policies and which resources are not yet in compliance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, CreateFrameworkCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, CreateFrameworkCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const input = { // CreateFrameworkInput
 *   FrameworkName: "STRING_VALUE", // required
 *   FrameworkDescription: "STRING_VALUE",
 *   FrameworkControls: [ // FrameworkControls // required
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
 *   FrameworkTags: {
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateFrameworkCommand(input);
 * const response = await client.send(command);
 * // { // CreateFrameworkOutput
 * //   FrameworkName: "STRING_VALUE",
 * //   FrameworkArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateFrameworkCommandInput - {@link CreateFrameworkCommandInput}
 * @returns {@link CreateFrameworkCommandOutput}
 * @see {@link CreateFrameworkCommandInput} for command's `input` shape.
 * @see {@link CreateFrameworkCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>The required resource already exists.</p>
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
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request failed due to a temporary failure of the server.</p>
 *
 * @throws {@link BackupServiceException}
 * <p>Base exception class for all service exceptions from Backup service.</p>
 *
 */
export class CreateFrameworkCommand extends $Command<
  CreateFrameworkCommandInput,
  CreateFrameworkCommandOutput,
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
  constructor(readonly input: CreateFrameworkCommandInput) {
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
  ): Handler<CreateFrameworkCommandInput, CreateFrameworkCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateFrameworkCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "CreateFrameworkCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "CryoControllerUserManager",
        operation: "CreateFramework",
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
  private serialize(input: CreateFrameworkCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateFrameworkCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateFrameworkCommandOutput> {
    return de_CreateFrameworkCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
