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

import { RemoveProfilePermissionRequest, RemoveProfilePermissionResponse } from "../models/models_0";
import { de_RemoveProfilePermissionCommand, se_RemoveProfilePermissionCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SignerClientResolvedConfig } from "../SignerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link RemoveProfilePermissionCommand}.
 */
export interface RemoveProfilePermissionCommandInput extends RemoveProfilePermissionRequest {}
/**
 * @public
 *
 * The output of {@link RemoveProfilePermissionCommand}.
 */
export interface RemoveProfilePermissionCommandOutput extends RemoveProfilePermissionResponse, __MetadataBearer {}

/**
 * @public
 * <p>Removes cross-account permissions from a signing profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SignerClient, RemoveProfilePermissionCommand } from "@aws-sdk/client-signer"; // ES Modules import
 * // const { SignerClient, RemoveProfilePermissionCommand } = require("@aws-sdk/client-signer"); // CommonJS import
 * const client = new SignerClient(config);
 * const input = { // RemoveProfilePermissionRequest
 *   profileName: "STRING_VALUE", // required
 *   revisionId: "STRING_VALUE", // required
 *   statementId: "STRING_VALUE", // required
 * };
 * const command = new RemoveProfilePermissionCommand(input);
 * const response = await client.send(command);
 * // { // RemoveProfilePermissionResponse
 * //   revisionId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param RemoveProfilePermissionCommandInput - {@link RemoveProfilePermissionCommandInput}
 * @returns {@link RemoveProfilePermissionCommandOutput}
 * @see {@link RemoveProfilePermissionCommandInput} for command's `input` shape.
 * @see {@link RemoveProfilePermissionCommandOutput} for command's `response` shape.
 * @see {@link SignerClientResolvedConfig | config} for SignerClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The resource encountered a conflicting state.</p>
 *
 * @throws {@link InternalServiceErrorException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A specified resource could not be found.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The allowed number of job-signing requests has been exceeded.</p>
 * 		       <p>This error supersedes the error <code>ThrottlingException</code>.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>You signing certificate could not be validated.</p>
 *
 * @throws {@link SignerServiceException}
 * <p>Base exception class for all service exceptions from Signer service.</p>
 *
 */
export class RemoveProfilePermissionCommand extends $Command<
  RemoveProfilePermissionCommandInput,
  RemoveProfilePermissionCommandOutput,
  SignerClientResolvedConfig
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
  constructor(readonly input: RemoveProfilePermissionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SignerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RemoveProfilePermissionCommandInput, RemoveProfilePermissionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RemoveProfilePermissionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SignerClient";
    const commandName = "RemoveProfilePermissionCommand";
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
  private serialize(input: RemoveProfilePermissionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_RemoveProfilePermissionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RemoveProfilePermissionCommandOutput> {
    return de_RemoveProfilePermissionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
