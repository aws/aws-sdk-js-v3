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

import { Inspector2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Inspector2Client";
import {
  BatchGetMemberEc2DeepInspectionStatusRequest,
  BatchGetMemberEc2DeepInspectionStatusResponse,
} from "../models/models_0";
import {
  de_BatchGetMemberEc2DeepInspectionStatusCommand,
  se_BatchGetMemberEc2DeepInspectionStatusCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link BatchGetMemberEc2DeepInspectionStatusCommand}.
 */
export interface BatchGetMemberEc2DeepInspectionStatusCommandInput
  extends BatchGetMemberEc2DeepInspectionStatusRequest {}
/**
 * @public
 *
 * The output of {@link BatchGetMemberEc2DeepInspectionStatusCommand}.
 */
export interface BatchGetMemberEc2DeepInspectionStatusCommandOutput
  extends BatchGetMemberEc2DeepInspectionStatusResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieves Amazon Inspector deep inspection activation status of multiple member accounts within your organization. You must be the delegated administrator of an organization in Amazon Inspector to use this API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Inspector2Client, BatchGetMemberEc2DeepInspectionStatusCommand } from "@aws-sdk/client-inspector2"; // ES Modules import
 * // const { Inspector2Client, BatchGetMemberEc2DeepInspectionStatusCommand } = require("@aws-sdk/client-inspector2"); // CommonJS import
 * const client = new Inspector2Client(config);
 * const input = { // BatchGetMemberEc2DeepInspectionStatusRequest
 *   accountIds: [ // AccountIdSet
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new BatchGetMemberEc2DeepInspectionStatusCommand(input);
 * const response = await client.send(command);
 * // { // BatchGetMemberEc2DeepInspectionStatusResponse
 * //   accountIds: [ // MemberAccountEc2DeepInspectionStatusStateList
 * //     { // MemberAccountEc2DeepInspectionStatusState
 * //       accountId: "STRING_VALUE", // required
 * //       status: "STRING_VALUE",
 * //       errorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   failedAccountIds: [ // FailedMemberAccountEc2DeepInspectionStatusStateList
 * //     { // FailedMemberAccountEc2DeepInspectionStatusState
 * //       accountId: "STRING_VALUE", // required
 * //       ec2ScanStatus: "STRING_VALUE",
 * //       errorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchGetMemberEc2DeepInspectionStatusCommandInput - {@link BatchGetMemberEc2DeepInspectionStatusCommandInput}
 * @returns {@link BatchGetMemberEc2DeepInspectionStatusCommandOutput}
 * @see {@link BatchGetMemberEc2DeepInspectionStatusCommandInput} for command's `input` shape.
 * @see {@link BatchGetMemberEc2DeepInspectionStatusCommandOutput} for command's `response` shape.
 * @see {@link Inspector2ClientResolvedConfig | config} for Inspector2Client's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed due to an internal failure of the Amazon Inspector service.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The limit on the number of requests per second was exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request has failed validation due to missing required fields or having invalid
 *          inputs.</p>
 *
 * @throws {@link Inspector2ServiceException}
 * <p>Base exception class for all service exceptions from Inspector2 service.</p>
 *
 */
export class BatchGetMemberEc2DeepInspectionStatusCommand extends $Command<
  BatchGetMemberEc2DeepInspectionStatusCommandInput,
  BatchGetMemberEc2DeepInspectionStatusCommandOutput,
  Inspector2ClientResolvedConfig
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
  constructor(readonly input: BatchGetMemberEc2DeepInspectionStatusCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: Inspector2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<BatchGetMemberEc2DeepInspectionStatusCommandInput, BatchGetMemberEc2DeepInspectionStatusCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, BatchGetMemberEc2DeepInspectionStatusCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "Inspector2Client";
    const commandName = "BatchGetMemberEc2DeepInspectionStatusCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "Inspector2",
        operation: "BatchGetMemberEc2DeepInspectionStatus",
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
  private serialize(
    input: BatchGetMemberEc2DeepInspectionStatusCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_BatchGetMemberEc2DeepInspectionStatusCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchGetMemberEc2DeepInspectionStatusCommandOutput> {
    return de_BatchGetMemberEc2DeepInspectionStatusCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
