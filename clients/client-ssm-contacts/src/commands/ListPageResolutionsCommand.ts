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

import { ListPageResolutionsRequest, ListPageResolutionsResult } from "../models/models_0";
import { de_ListPageResolutionsCommand, se_ListPageResolutionsCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMContactsClientResolvedConfig } from "../SSMContactsClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListPageResolutionsCommand}.
 */
export interface ListPageResolutionsCommandInput extends ListPageResolutionsRequest {}
/**
 * @public
 *
 * The output of {@link ListPageResolutionsCommand}.
 */
export interface ListPageResolutionsCommandOutput extends ListPageResolutionsResult, __MetadataBearer {}

/**
 * @public
 * <p>Returns the resolution path of an engagement. For example, the escalation plan engaged
 *          in an incident might target an on-call schedule that includes several contacts in a
 *          rotation, but just one contact on-call when the incident starts. The resolution path
 *          indicates the hierarchy of <i>escalation plan > on-call schedule >
 *             contact</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMContactsClient, ListPageResolutionsCommand } from "@aws-sdk/client-ssm-contacts"; // ES Modules import
 * // const { SSMContactsClient, ListPageResolutionsCommand } = require("@aws-sdk/client-ssm-contacts"); // CommonJS import
 * const client = new SSMContactsClient(config);
 * const input = { // ListPageResolutionsRequest
 *   NextToken: "STRING_VALUE",
 *   PageId: "STRING_VALUE", // required
 * };
 * const command = new ListPageResolutionsCommand(input);
 * const response = await client.send(command);
 * // { // ListPageResolutionsResult
 * //   NextToken: "STRING_VALUE",
 * //   PageResolutions: [ // ResolutionList // required
 * //     { // ResolutionContact
 * //       ContactArn: "STRING_VALUE", // required
 * //       Type: "PERSONAL" || "ESCALATION" || "ONCALL_SCHEDULE", // required
 * //       StageIndex: Number("int"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListPageResolutionsCommandInput - {@link ListPageResolutionsCommandInput}
 * @returns {@link ListPageResolutionsCommandOutput}
 * @see {@link ListPageResolutionsCommandInput} for command's `input` shape.
 * @see {@link ListPageResolutionsCommandOutput} for command's `response` shape.
 * @see {@link SSMContactsClientResolvedConfig | config} for SSMContactsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error occurred while processing the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource that doesn't exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services
 *          service.</p>
 *
 * @throws {@link SSMContactsServiceException}
 * <p>Base exception class for all service exceptions from SSMContacts service.</p>
 *
 */
export class ListPageResolutionsCommand extends $Command<
  ListPageResolutionsCommandInput,
  ListPageResolutionsCommandOutput,
  SSMContactsClientResolvedConfig
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
  constructor(readonly input: ListPageResolutionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMContactsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListPageResolutionsCommandInput, ListPageResolutionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListPageResolutionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMContactsClient";
    const commandName = "ListPageResolutionsCommand";
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
  private serialize(input: ListPageResolutionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListPageResolutionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListPageResolutionsCommandOutput> {
    return de_ListPageResolutionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
