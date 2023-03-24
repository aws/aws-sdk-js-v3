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

import { CreateOptionGroupMessage, CreateOptionGroupResult } from "../models/models_0";
import {
  deserializeAws_queryCreateOptionGroupCommand,
  serializeAws_queryCreateOptionGroupCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 *
 * The input for {@link CreateOptionGroupCommand}.
 */
export interface CreateOptionGroupCommandInput extends CreateOptionGroupMessage {}
/**
 * @public
 *
 * The output of {@link CreateOptionGroupCommand}.
 */
export interface CreateOptionGroupCommandOutput extends CreateOptionGroupResult, __MetadataBearer {}

/**
 * @public
 * <p>Creates a new option group. You can create up to 20 option groups.</p>
 *          <p>This command doesn't apply to RDS Custom.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CreateOptionGroupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CreateOptionGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = {
 *   OptionGroupName: "STRING_VALUE", // required
 *   EngineName: "STRING_VALUE", // required
 *   MajorEngineVersion: "STRING_VALUE", // required
 *   OptionGroupDescription: "STRING_VALUE", // required
 *   Tags: [
 *     {
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateOptionGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateOptionGroupCommandInput - {@link CreateOptionGroupCommandInput}
 * @returns {@link CreateOptionGroupCommandOutput}
 * @see {@link CreateOptionGroupCommandInput} for command's `input` shape.
 * @see {@link CreateOptionGroupCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link OptionGroupAlreadyExistsFault} (client fault)
 *  <p>The option group you are trying to create already exists.</p>
 *
 * @throws {@link OptionGroupQuotaExceededFault} (client fault)
 *  <p>The quota of 20 option groups was exceeded for this Amazon Web Services account.</p>
 *
 *
 * @example To create an option group
 * ```javascript
 * // This example creates an option group.
 * const input = {
 *   "EngineName": "MySQL",
 *   "MajorEngineVersion": "5.6",
 *   "OptionGroupDescription": "My MySQL 5.6 option group",
 *   "OptionGroupName": "mymysqloptiongroup"
 * };
 * const command = new CreateOptionGroupCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "OptionGroup": {}
 * }
 * *\/
 * // example id: create-option-group-a7708c87-1b79-4a5e-a762-21cf8fc62b78
 * ```
 *
 */
export class CreateOptionGroupCommand extends $Command<
  CreateOptionGroupCommandInput,
  CreateOptionGroupCommandOutput,
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
  constructor(readonly input: CreateOptionGroupCommandInput) {
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
  ): Handler<CreateOptionGroupCommandInput, CreateOptionGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateOptionGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "CreateOptionGroupCommand";
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
  private serialize(input: CreateOptionGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCreateOptionGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateOptionGroupCommandOutput> {
    return deserializeAws_queryCreateOptionGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
