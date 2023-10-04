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
import { CreateListingChangeSetInput, CreateListingChangeSetOutput } from "../models/models_0";
import { de_CreateListingChangeSetCommand, se_CreateListingChangeSetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateListingChangeSetCommand}.
 */
export interface CreateListingChangeSetCommandInput extends CreateListingChangeSetInput {}
/**
 * @public
 *
 * The output of {@link CreateListingChangeSetCommand}.
 */
export interface CreateListingChangeSetCommandOutput extends CreateListingChangeSetOutput, __MetadataBearer {}

/**
 * @public
 * <p/>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, CreateListingChangeSetCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, CreateListingChangeSetCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // CreateListingChangeSetInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   entityIdentifier: "STRING_VALUE", // required
 *   entityType: "ASSET", // required
 *   entityRevision: "STRING_VALUE",
 *   action: "PUBLISH" || "UNPUBLISH", // required
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateListingChangeSetCommand(input);
 * const response = await client.send(command);
 * // { // CreateListingChangeSetOutput
 * //   listingId: "STRING_VALUE", // required
 * //   listingRevision: "STRING_VALUE", // required
 * //   status: "CREATING" || "ACTIVE" || "INACTIVE", // required
 * // };
 *
 * ```
 *
 * @param CreateListingChangeSetCommandInput - {@link CreateListingChangeSetCommandInput}
 * @returns {@link CreateListingChangeSetCommandOutput}
 * @see {@link CreateListingChangeSetCommandInput} for command's `input` shape.
 * @see {@link CreateListingChangeSetCommandOutput} for command's `response` shape.
 * @see {@link DataZoneClientResolvedConfig | config} for DataZoneClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>There is a conflict while performing this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource cannot be found.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request has exceeded the specified service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the Amazon Web Services service.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link DataZoneServiceException}
 * <p>Base exception class for all service exceptions from DataZone service.</p>
 *
 */
export class CreateListingChangeSetCommand extends $Command<
  CreateListingChangeSetCommandInput,
  CreateListingChangeSetCommandOutput,
  DataZoneClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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
  constructor(readonly input: CreateListingChangeSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataZoneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateListingChangeSetCommandInput, CreateListingChangeSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateListingChangeSetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataZoneClient";
    const commandName = "CreateListingChangeSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "DataZone",
        operation: "CreateListingChangeSet",
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
  private serialize(input: CreateListingChangeSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateListingChangeSetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateListingChangeSetCommandOutput> {
    return de_CreateListingChangeSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
