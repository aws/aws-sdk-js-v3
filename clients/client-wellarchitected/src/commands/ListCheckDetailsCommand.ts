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

import { ListCheckDetailsInput, ListCheckDetailsOutput } from "../models/models_0";
import { de_ListCheckDetailsCommand, se_ListCheckDetailsCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListCheckDetailsCommand}.
 */
export interface ListCheckDetailsCommandInput extends ListCheckDetailsInput {}
/**
 * @public
 *
 * The output of {@link ListCheckDetailsCommand}.
 */
export interface ListCheckDetailsCommandOutput extends ListCheckDetailsOutput, __MetadataBearer {}

/**
 * @public
 * <p>List of Trusted Advisor check details by account related to the workload.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, ListCheckDetailsCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, ListCheckDetailsCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const input = { // ListCheckDetailsInput
 *   WorkloadId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   LensArn: "STRING_VALUE", // required
 *   PillarId: "STRING_VALUE", // required
 *   QuestionId: "STRING_VALUE", // required
 *   ChoiceId: "STRING_VALUE", // required
 * };
 * const command = new ListCheckDetailsCommand(input);
 * const response = await client.send(command);
 * // { // ListCheckDetailsOutput
 * //   CheckDetails: [ // CheckDetails
 * //     { // CheckDetail
 * //       Id: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Provider: "TRUSTED_ADVISOR",
 * //       LensArn: "STRING_VALUE",
 * //       PillarId: "STRING_VALUE",
 * //       QuestionId: "STRING_VALUE",
 * //       ChoiceId: "STRING_VALUE",
 * //       Status: "OKAY" || "WARNING" || "ERROR" || "NOT_AVAILABLE" || "FETCH_FAILED",
 * //       AccountId: "STRING_VALUE",
 * //       FlaggedResources: Number("int"),
 * //       Reason: "ASSUME_ROLE_ERROR" || "ACCESS_DENIED" || "UNKNOWN_ERROR" || "PREMIUM_SUPPORT_REQUIRED",
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCheckDetailsCommandInput - {@link ListCheckDetailsCommandInput}
 * @returns {@link ListCheckDetailsCommandOutput}
 * @see {@link ListCheckDetailsCommandInput} for command's `input` shape.
 * @see {@link ListCheckDetailsCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is a problem with the Well-Architected Tool API service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found.</p>
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
export class ListCheckDetailsCommand extends $Command<
  ListCheckDetailsCommandInput,
  ListCheckDetailsCommandOutput,
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
  constructor(readonly input: ListCheckDetailsCommandInput) {
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
  ): Handler<ListCheckDetailsCommandInput, ListCheckDetailsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListCheckDetailsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WellArchitectedClient";
    const commandName = "ListCheckDetailsCommand";
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
  private serialize(input: ListCheckDetailsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListCheckDetailsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListCheckDetailsCommandOutput> {
    return de_ListCheckDetailsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
