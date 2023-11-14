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

import { DataZoneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataZoneClient";
import { CreateProjectMembershipInput, CreateProjectMembershipOutput } from "../models/models_0";
import { de_CreateProjectMembershipCommand, se_CreateProjectMembershipCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateProjectMembershipCommand}.
 */
export interface CreateProjectMembershipCommandInput extends CreateProjectMembershipInput {}
/**
 * @public
 *
 * The output of {@link CreateProjectMembershipCommand}.
 */
export interface CreateProjectMembershipCommandOutput extends CreateProjectMembershipOutput, __MetadataBearer {}

/**
 * @public
 * <p>Creates a project membership in Amazon DataZone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, CreateProjectMembershipCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, CreateProjectMembershipCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // CreateProjectMembershipInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   projectIdentifier: "STRING_VALUE", // required
 *   member: { // Member Union: only one key present
 *     userIdentifier: "STRING_VALUE",
 *     groupIdentifier: "STRING_VALUE",
 *   },
 *   designation: "PROJECT_OWNER" || "PROJECT_CONTRIBUTOR", // required
 * };
 * const command = new CreateProjectMembershipCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateProjectMembershipCommandInput - {@link CreateProjectMembershipCommandInput}
 * @returns {@link CreateProjectMembershipCommandOutput}
 * @see {@link CreateProjectMembershipCommandInput} for command's `input` shape.
 * @see {@link CreateProjectMembershipCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the Amazon Web Services service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link DataZoneServiceException}
 * <p>Base exception class for all service exceptions from DataZone service.</p>
 *
 */
export class CreateProjectMembershipCommand extends $Command<
  CreateProjectMembershipCommandInput,
  CreateProjectMembershipCommandOutput,
  DataZoneClientResolvedConfig
> {
  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: CreateProjectMembershipCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataZoneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateProjectMembershipCommandInput, CreateProjectMembershipCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateProjectMembershipCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataZoneClient";
    const commandName = "CreateProjectMembershipCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "DataZone",
        operation: "CreateProjectMembership",
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
  private serialize(input: CreateProjectMembershipCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateProjectMembershipCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateProjectMembershipCommandOutput> {
    return de_CreateProjectMembershipCommand(output, context);
  }
}
