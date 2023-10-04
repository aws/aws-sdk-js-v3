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
import {
  CreateSubscriptionTargetInput,
  CreateSubscriptionTargetInputFilterSensitiveLog,
  CreateSubscriptionTargetOutput,
  CreateSubscriptionTargetOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateSubscriptionTargetCommand, se_CreateSubscriptionTargetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateSubscriptionTargetCommand}.
 */
export interface CreateSubscriptionTargetCommandInput extends CreateSubscriptionTargetInput {}
/**
 * @public
 *
 * The output of {@link CreateSubscriptionTargetCommand}.
 */
export interface CreateSubscriptionTargetCommandOutput extends CreateSubscriptionTargetOutput, __MetadataBearer {}

/**
 * @public
 * <p>Creates a subscription target in Amazon DataZone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, CreateSubscriptionTargetCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, CreateSubscriptionTargetCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // CreateSubscriptionTargetInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   environmentIdentifier: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   type: "STRING_VALUE", // required
 *   subscriptionTargetConfig: [ // SubscriptionTargetForms // required
 *     { // SubscriptionTargetForm
 *       formName: "STRING_VALUE", // required
 *       content: "STRING_VALUE", // required
 *     },
 *   ],
 *   authorizedPrincipals: [ // AuthorizedPrincipalIdentifiers // required
 *     "STRING_VALUE",
 *   ],
 *   manageAccessRole: "STRING_VALUE", // required
 *   applicableAssetTypes: [ // ApplicableAssetTypes // required
 *     "STRING_VALUE",
 *   ],
 *   provider: "STRING_VALUE",
 *   clientToken: "STRING_VALUE",
 * };
 * const command = new CreateSubscriptionTargetCommand(input);
 * const response = await client.send(command);
 * // { // CreateSubscriptionTargetOutput
 * //   id: "STRING_VALUE", // required
 * //   authorizedPrincipals: [ // AuthorizedPrincipalIdentifiers // required
 * //     "STRING_VALUE",
 * //   ],
 * //   domainId: "STRING_VALUE", // required
 * //   projectId: "STRING_VALUE", // required
 * //   environmentId: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   type: "STRING_VALUE", // required
 * //   createdBy: "STRING_VALUE", // required
 * //   updatedBy: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"),
 * //   manageAccessRole: "STRING_VALUE", // required
 * //   applicableAssetTypes: [ // ApplicableAssetTypes // required
 * //     "STRING_VALUE",
 * //   ],
 * //   subscriptionTargetConfig: [ // SubscriptionTargetForms // required
 * //     { // SubscriptionTargetForm
 * //       formName: "STRING_VALUE", // required
 * //       content: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   provider: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateSubscriptionTargetCommandInput - {@link CreateSubscriptionTargetCommandInput}
 * @returns {@link CreateSubscriptionTargetCommandOutput}
 * @see {@link CreateSubscriptionTargetCommandInput} for command's `input` shape.
 * @see {@link CreateSubscriptionTargetCommandOutput} for command's `response` shape.
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
export class CreateSubscriptionTargetCommand extends $Command<
  CreateSubscriptionTargetCommandInput,
  CreateSubscriptionTargetCommandOutput,
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
  constructor(readonly input: CreateSubscriptionTargetCommandInput) {
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
  ): Handler<CreateSubscriptionTargetCommandInput, CreateSubscriptionTargetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateSubscriptionTargetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataZoneClient";
    const commandName = "CreateSubscriptionTargetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateSubscriptionTargetInputFilterSensitiveLog,
      outputFilterSensitiveLog: CreateSubscriptionTargetOutputFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "DataZone",
        operation: "CreateSubscriptionTarget",
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
  private serialize(input: CreateSubscriptionTargetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateSubscriptionTargetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSubscriptionTargetCommandOutput> {
    return de_CreateSubscriptionTargetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
