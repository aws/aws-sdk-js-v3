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

import { DrsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DrsClient";
import { ExportSourceNetworkCfnTemplateRequest, ExportSourceNetworkCfnTemplateResponse } from "../models/models_0";
import {
  de_ExportSourceNetworkCfnTemplateCommand,
  se_ExportSourceNetworkCfnTemplateCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ExportSourceNetworkCfnTemplateCommand}.
 */
export interface ExportSourceNetworkCfnTemplateCommandInput extends ExportSourceNetworkCfnTemplateRequest {}
/**
 * @public
 *
 * The output of {@link ExportSourceNetworkCfnTemplateCommand}.
 */
export interface ExportSourceNetworkCfnTemplateCommandOutput
  extends ExportSourceNetworkCfnTemplateResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Export the Source Network CloudFormation template to an S3 bucket.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DrsClient, ExportSourceNetworkCfnTemplateCommand } from "@aws-sdk/client-drs"; // ES Modules import
 * // const { DrsClient, ExportSourceNetworkCfnTemplateCommand } = require("@aws-sdk/client-drs"); // CommonJS import
 * const client = new DrsClient(config);
 * const input = { // ExportSourceNetworkCfnTemplateRequest
 *   sourceNetworkID: "STRING_VALUE", // required
 * };
 * const command = new ExportSourceNetworkCfnTemplateCommand(input);
 * const response = await client.send(command);
 * // { // ExportSourceNetworkCfnTemplateResponse
 * //   s3DestinationUrl: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ExportSourceNetworkCfnTemplateCommandInput - {@link ExportSourceNetworkCfnTemplateCommandInput}
 * @returns {@link ExportSourceNetworkCfnTemplateCommandOutput}
 * @see {@link ExportSourceNetworkCfnTemplateCommandInput} for command's `input` shape.
 * @see {@link ExportSourceNetworkCfnTemplateCommandOutput} for command's `response` shape.
 * @see {@link DrsClientResolvedConfig | config} for DrsClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the target resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource for this operation was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link UninitializedAccountException} (client fault)
 *  <p>The account performing the request has not been initialized.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the AWS service.</p>
 *
 * @throws {@link DrsServiceException}
 * <p>Base exception class for all service exceptions from Drs service.</p>
 *
 */
export class ExportSourceNetworkCfnTemplateCommand extends $Command<
  ExportSourceNetworkCfnTemplateCommandInput,
  ExportSourceNetworkCfnTemplateCommandOutput,
  DrsClientResolvedConfig
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
  constructor(readonly input: ExportSourceNetworkCfnTemplateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DrsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ExportSourceNetworkCfnTemplateCommandInput, ExportSourceNetworkCfnTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ExportSourceNetworkCfnTemplateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DrsClient";
    const commandName = "ExportSourceNetworkCfnTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ElasticDisasterRecoveryService",
        operation: "ExportSourceNetworkCfnTemplate",
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
  private serialize(
    input: ExportSourceNetworkCfnTemplateCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ExportSourceNetworkCfnTemplateCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ExportSourceNetworkCfnTemplateCommandOutput> {
    return de_ExportSourceNetworkCfnTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
