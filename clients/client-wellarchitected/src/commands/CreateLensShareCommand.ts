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

import { CreateLensShareInput, CreateLensShareOutput } from "../models/models_0";
import { de_CreateLensShareCommand, se_CreateLensShareCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateLensShareCommand}.
 */
export interface CreateLensShareCommandInput extends CreateLensShareInput {}
/**
 * @public
 *
 * The output of {@link CreateLensShareCommand}.
 */
export interface CreateLensShareCommandOutput extends CreateLensShareOutput, __MetadataBearer {}

/**
 * @public
 * <p>Create a lens share.</p>
 *          <p>The owner of a lens can share it with other Amazon Web Services accounts, users, an organization,
 *             and organizational units (OUs) in the same Amazon Web Services Region.
 *             Lenses provided by Amazon Web Services (Amazon Web Services Official Content) cannot be shared.</p>
 *          <p>
 *             Shared access to a lens is not removed until the lens invitation is deleted.</p>
 *          <p>If you share a lens with an organization or OU, all accounts in the organization or OU
 *         are granted access to the lens.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/wellarchitected/latest/userguide/lenses-sharing.html">Sharing a custom lens</a> in the
 *             <i>Well-Architected Tool User Guide</i>.</p>
 *          <note>
 *             <p>
 *                <b>Disclaimer</b>
 *             </p>
 *             <p>By sharing your custom lenses with other Amazon Web Services accounts,
 *                 you acknowledge that Amazon Web Services will make your custom lenses available to those
 *                 other accounts. Those other accounts may continue to access and use your
 *                 shared custom lenses even if you delete the custom lenses
 *                 from your own Amazon Web Services account or terminate
 *                 your Amazon Web Services account.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, CreateLensShareCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, CreateLensShareCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const input = { // CreateLensShareInput
 *   LensAlias: "STRING_VALUE", // required
 *   SharedWith: "STRING_VALUE", // required
 *   ClientRequestToken: "STRING_VALUE", // required
 * };
 * const command = new CreateLensShareCommand(input);
 * const response = await client.send(command);
 * // { // CreateLensShareOutput
 * //   ShareId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateLensShareCommandInput - {@link CreateLensShareCommandInput}
 * @returns {@link CreateLensShareCommandOutput}
 * @see {@link CreateLensShareCommandInput} for command's `input` shape.
 * @see {@link CreateLensShareCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The resource has already been processed, was deleted, or is too large.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is a problem with the Well-Architected Tool API service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The user has reached their resource quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The user input is not valid.</p>
 *
 * @throws {@link WellArchitectedServiceException}
 * <p>Base exception class for all service exceptions from WellArchitected service.</p>
 *
 */
export class CreateLensShareCommand extends $Command<
  CreateLensShareCommandInput,
  CreateLensShareCommandOutput,
  WellArchitectedClientResolvedConfig
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
  constructor(readonly input: CreateLensShareCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WellArchitectedClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateLensShareCommandInput, CreateLensShareCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateLensShareCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WellArchitectedClient";
    const commandName = "CreateLensShareCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "WellArchitectedApiServiceLambda",
        operation: "CreateLensShare",
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
  private serialize(input: CreateLensShareCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateLensShareCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateLensShareCommandOutput> {
    return de_CreateLensShareCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
