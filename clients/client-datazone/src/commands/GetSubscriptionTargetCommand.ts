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
  GetSubscriptionTargetInput,
  GetSubscriptionTargetOutput,
  GetSubscriptionTargetOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_GetSubscriptionTargetCommand, se_GetSubscriptionTargetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetSubscriptionTargetCommand}.
 */
export interface GetSubscriptionTargetCommandInput extends GetSubscriptionTargetInput {}
/**
 * @public
 *
 * The output of {@link GetSubscriptionTargetCommand}.
 */
export interface GetSubscriptionTargetCommandOutput extends GetSubscriptionTargetOutput, __MetadataBearer {}

/**
 * @public
 * <p>Gets the subscription target in Amazon DataZone.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataZoneClient, GetSubscriptionTargetCommand } from "@aws-sdk/client-datazone"; // ES Modules import
 * // const { DataZoneClient, GetSubscriptionTargetCommand } = require("@aws-sdk/client-datazone"); // CommonJS import
 * const client = new DataZoneClient(config);
 * const input = { // GetSubscriptionTargetInput
 *   domainIdentifier: "STRING_VALUE", // required
 *   environmentIdentifier: "STRING_VALUE", // required
 *   identifier: "STRING_VALUE", // required
 * };
 * const command = new GetSubscriptionTargetCommand(input);
 * const response = await client.send(command);
 * // { // GetSubscriptionTargetOutput
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
 * @param GetSubscriptionTargetCommandInput - {@link GetSubscriptionTargetCommandInput}
 * @returns {@link GetSubscriptionTargetCommandOutput}
 * @see {@link GetSubscriptionTargetCommandInput} for command's `input` shape.
 * @see {@link GetSubscriptionTargetCommandOutput} for command's `response` shape.
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
export class GetSubscriptionTargetCommand extends $Command<
  GetSubscriptionTargetCommandInput,
  GetSubscriptionTargetCommandOutput,
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
  constructor(readonly input: GetSubscriptionTargetCommandInput) {
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
  ): Handler<GetSubscriptionTargetCommandInput, GetSubscriptionTargetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSubscriptionTargetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataZoneClient";
    const commandName = "GetSubscriptionTargetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetSubscriptionTargetOutputFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "DataZone",
        operation: "GetSubscriptionTarget",
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
  private serialize(input: GetSubscriptionTargetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetSubscriptionTargetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSubscriptionTargetCommandOutput> {
    return de_GetSubscriptionTargetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
