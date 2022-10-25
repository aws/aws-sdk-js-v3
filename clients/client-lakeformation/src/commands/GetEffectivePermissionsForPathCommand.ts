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

import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import {
  GetEffectivePermissionsForPathRequest,
  GetEffectivePermissionsForPathRequestFilterSensitiveLog,
  GetEffectivePermissionsForPathResponse,
  GetEffectivePermissionsForPathResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetEffectivePermissionsForPathCommand,
  serializeAws_restJson1GetEffectivePermissionsForPathCommand,
} from "../protocols/Aws_restJson1";

export interface GetEffectivePermissionsForPathCommandInput extends GetEffectivePermissionsForPathRequest {}
export interface GetEffectivePermissionsForPathCommandOutput
  extends GetEffectivePermissionsForPathResponse,
    __MetadataBearer {}

/**
 * <p>Returns the Lake Formation permissions for a specified table or database resource located
 *       at a path in Amazon S3. <code>GetEffectivePermissionsForPath</code> will not return databases and tables if the catalog is encrypted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, GetEffectivePermissionsForPathCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, GetEffectivePermissionsForPathCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const command = new GetEffectivePermissionsForPathCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetEffectivePermissionsForPathCommandInput} for command's `input` shape.
 * @see {@link GetEffectivePermissionsForPathCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 */
export class GetEffectivePermissionsForPathCommand extends $Command<
  GetEffectivePermissionsForPathCommandInput,
  GetEffectivePermissionsForPathCommandOutput,
  LakeFormationClientResolvedConfig
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

  constructor(readonly input: GetEffectivePermissionsForPathCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LakeFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetEffectivePermissionsForPathCommandInput, GetEffectivePermissionsForPathCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetEffectivePermissionsForPathCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LakeFormationClient";
    const commandName = "GetEffectivePermissionsForPathCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetEffectivePermissionsForPathRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetEffectivePermissionsForPathResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GetEffectivePermissionsForPathCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1GetEffectivePermissionsForPathCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetEffectivePermissionsForPathCommandOutput> {
    return deserializeAws_restJson1GetEffectivePermissionsForPathCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
