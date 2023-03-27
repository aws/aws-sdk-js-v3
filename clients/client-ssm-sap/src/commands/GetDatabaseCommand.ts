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

import { GetDatabaseInput, GetDatabaseOutput, GetDatabaseOutputFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_restJson1GetDatabaseCommand,
  serializeAws_restJson1GetDatabaseCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SsmSapClientResolvedConfig } from "../SsmSapClient";

/**
 * @public
 *
 * The input for {@link GetDatabaseCommand}.
 */
export interface GetDatabaseCommandInput extends GetDatabaseInput {}
/**
 * @public
 *
 * The output of {@link GetDatabaseCommand}.
 */
export interface GetDatabaseCommandOutput extends GetDatabaseOutput, __MetadataBearer {}

/**
 * @public
 * <p>Gets the SAP HANA database of an application registered with AWS Systems Manager for
 *          SAP.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SsmSapClient, GetDatabaseCommand } from "@aws-sdk/client-ssm-sap"; // ES Modules import
 * // const { SsmSapClient, GetDatabaseCommand } = require("@aws-sdk/client-ssm-sap"); // CommonJS import
 * const client = new SsmSapClient(config);
 * const input = { // GetDatabaseInput
 *   ApplicationId: "STRING_VALUE",
 *   ComponentId: "STRING_VALUE",
 *   DatabaseId: "STRING_VALUE",
 *   DatabaseArn: "STRING_VALUE",
 * };
 * const command = new GetDatabaseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param GetDatabaseCommandInput - {@link GetDatabaseCommandInput}
 * @returns {@link GetDatabaseCommandOutput}
 * @see {@link GetDatabaseCommandInput} for command's `input` shape.
 * @see {@link GetDatabaseCommandOutput} for command's `response` shape.
 * @see {@link SsmSapClientResolvedConfig | config} for SsmSapClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service. </p>
 *
 *
 */
export class GetDatabaseCommand extends $Command<
  GetDatabaseCommandInput,
  GetDatabaseCommandOutput,
  SsmSapClientResolvedConfig
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
  constructor(readonly input: GetDatabaseCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SsmSapClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetDatabaseCommandInput, GetDatabaseCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetDatabaseCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SsmSapClient";
    const commandName = "GetDatabaseCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetDatabaseOutputFilterSensitiveLog,
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
  private serialize(input: GetDatabaseCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetDatabaseCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDatabaseCommandOutput> {
    return deserializeAws_restJson1GetDatabaseCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
