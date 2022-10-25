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

import {
  ScalarSubjectRequest,
  ScalarSubjectRequestFilterSensitiveLog,
  SubjectDetailResponse,
  SubjectDetailResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetSubjectCommand,
  serializeAws_restJson1GetSubjectCommand,
} from "../protocols/Aws_restJson1";
import { RolesAnywhereClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RolesAnywhereClient";

export interface GetSubjectCommandInput extends ScalarSubjectRequest {}
export interface GetSubjectCommandOutput extends SubjectDetailResponse, __MetadataBearer {}

/**
 * <p>Gets a Subject. A Subject associates a certificate identity with authentication attempts by CreateSession. The Subject resources stores audit information such as status of the last authentication attempt, the certificate data used in the attempt, and the last time the associated identity attempted authentication. </p>
 *          <p>
 *             <b>Required permissions: </b>
 *             <code>rolesanywhere:GetSubject</code>.
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RolesAnywhereClient, GetSubjectCommand } from "@aws-sdk/client-rolesanywhere"; // ES Modules import
 * // const { RolesAnywhereClient, GetSubjectCommand } = require("@aws-sdk/client-rolesanywhere"); // CommonJS import
 * const client = new RolesAnywhereClient(config);
 * const command = new GetSubjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSubjectCommandInput} for command's `input` shape.
 * @see {@link GetSubjectCommandOutput} for command's `response` shape.
 * @see {@link RolesAnywhereClientResolvedConfig | config} for RolesAnywhereClient's `config` shape.
 *
 */
export class GetSubjectCommand extends $Command<
  GetSubjectCommandInput,
  GetSubjectCommandOutput,
  RolesAnywhereClientResolvedConfig
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

  constructor(readonly input: GetSubjectCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RolesAnywhereClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSubjectCommandInput, GetSubjectCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GetSubjectCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RolesAnywhereClient";
    const commandName = "GetSubjectCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ScalarSubjectRequestFilterSensitiveLog,
      outputFilterSensitiveLog: SubjectDetailResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetSubjectCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetSubjectCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSubjectCommandOutput> {
    return deserializeAws_restJson1GetSubjectCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
