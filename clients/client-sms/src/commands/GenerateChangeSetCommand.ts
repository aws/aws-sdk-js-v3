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

import { GenerateChangeSetRequest, GenerateChangeSetResponse } from "../models/models_0";
import { de_GenerateChangeSetCommand, se_GenerateChangeSetCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SMSClientResolvedConfig } from "../SMSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GenerateChangeSetCommand}.
 */
export interface GenerateChangeSetCommandInput extends GenerateChangeSetRequest {}
/**
 * @public
 *
 * The output of {@link GenerateChangeSetCommand}.
 */
export interface GenerateChangeSetCommandOutput extends GenerateChangeSetResponse, __MetadataBearer {}

/**
 * @public
 * <p>Generates a target change set for a currently launched stack and writes it to an Amazon S3
 *             object in the customer’s Amazon S3 bucket.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, GenerateChangeSetCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, GenerateChangeSetCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const input = { // GenerateChangeSetRequest
 *   appId: "STRING_VALUE",
 *   changesetFormat: "JSON" || "YAML",
 * };
 * const command = new GenerateChangeSetCommand(input);
 * const response = await client.send(command);
 * // { // GenerateChangeSetResponse
 * //   s3Location: { // S3Location
 * //     bucket: "STRING_VALUE",
 * //     key: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GenerateChangeSetCommandInput - {@link GenerateChangeSetCommandInput}
 * @returns {@link GenerateChangeSetCommandOutput}
 * @see {@link GenerateChangeSetCommandInput} for command's `input` shape.
 * @see {@link GenerateChangeSetCommandOutput} for command's `response` shape.
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
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>This operation is not allowed.</p>
 *
 * @throws {@link UnauthorizedOperationException} (client fault)
 *  <p>You lack permissions needed to perform this operation. Check your IAM policies,
 *             and ensure that you are using the correct access keys.</p>
 *
 * @throws {@link SMSServiceException}
 * <p>Base exception class for all service exceptions from SMS service.</p>
 *
 */
export class GenerateChangeSetCommand extends $Command<
  GenerateChangeSetCommandInput,
  GenerateChangeSetCommandOutput,
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
  constructor(readonly input: GenerateChangeSetCommandInput) {
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
  ): Handler<GenerateChangeSetCommandInput, GenerateChangeSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GenerateChangeSetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SMSClient";
    const commandName = "GenerateChangeSetCommand";
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
  private serialize(input: GenerateChangeSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GenerateChangeSetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GenerateChangeSetCommandOutput> {
    return de_GenerateChangeSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
