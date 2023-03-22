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

import { CopyOptionGroupMessage, CopyOptionGroupResult } from "../models/models_0";
import {
  deserializeAws_queryCopyOptionGroupCommand,
  serializeAws_queryCopyOptionGroupCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 *
 * The input for {@link CopyOptionGroupCommand}.
 */
export interface CopyOptionGroupCommandInput extends CopyOptionGroupMessage {}
/**
 * @public
 *
 * The output of {@link CopyOptionGroupCommand}.
 */
export interface CopyOptionGroupCommandOutput extends CopyOptionGroupResult, __MetadataBearer {}

/**
 * @public
 * <p>Copies the specified option group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CopyOptionGroupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CopyOptionGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new CopyOptionGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CopyOptionGroupCommandInput - {@link CopyOptionGroupCommandInput}
 * @returns {@link CopyOptionGroupCommandOutput}
 * @see {@link CopyOptionGroupCommandInput} for command's `input` shape.
 * @see {@link CopyOptionGroupCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link OptionGroupAlreadyExistsFault} (client fault)
 *  <p>The option group you are trying to create already exists.</p>
 *
 * @throws {@link OptionGroupNotFoundFault} (client fault)
 *  <p>The specified option group could not be found.</p>
 *
 * @throws {@link OptionGroupQuotaExceededFault} (client fault)
 *  <p>The quota of 20 option groups was exceeded for this Amazon Web Services account.</p>
 *
 *
 * @example To copy an option group
 * ```javascript
 * // This example copies an option group.
 * const input = {
 *   "SourceOptionGroupIdentifier": "mymysqloptiongroup",
 *   "TargetOptionGroupDescription": "My MySQL option group copy",
 *   "TargetOptionGroupIdentifier": "mymysqloptiongroup-copy"
 * };
 * const command = new CopyOptionGroupCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "OptionGroup": {}
 * }
 * *\/
 * // example id: copy-option-group-8d5c01c3-8846-4e9c-a4b0-1b7237f7d0ec
 * ```
 *
 */
export class CopyOptionGroupCommand extends $Command<
  CopyOptionGroupCommandInput,
  CopyOptionGroupCommandOutput,
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
  constructor(readonly input: CopyOptionGroupCommandInput) {
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
  ): Handler<CopyOptionGroupCommandInput, CopyOptionGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CopyOptionGroupCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "CopyOptionGroupCommand";
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
  private serialize(input: CopyOptionGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCopyOptionGroupCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CopyOptionGroupCommandOutput> {
    return deserializeAws_queryCopyOptionGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
