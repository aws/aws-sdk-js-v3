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

import { GetSoftwareSetRequest, GetSoftwareSetResponse } from "../models/models_0";
import { de_GetSoftwareSetCommand, se_GetSoftwareSetCommand } from "../protocols/Aws_restJson1";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  WorkSpacesThinClientClientResolvedConfig,
} from "../WorkSpacesThinClientClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetSoftwareSetCommand}.
 */
export interface GetSoftwareSetCommandInput extends GetSoftwareSetRequest {}
/**
 * @public
 *
 * The output of {@link GetSoftwareSetCommand}.
 */
export interface GetSoftwareSetCommandOutput extends GetSoftwareSetResponse, __MetadataBearer {}

/**
 * @public
 * <p>Returns information for a software set.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkSpacesThinClientClient, GetSoftwareSetCommand } from "@aws-sdk/client-workspaces-thin-client"; // ES Modules import
 * // const { WorkSpacesThinClientClient, GetSoftwareSetCommand } = require("@aws-sdk/client-workspaces-thin-client"); // CommonJS import
 * const client = new WorkSpacesThinClientClient(config);
 * const input = { // GetSoftwareSetRequest
 *   id: "STRING_VALUE", // required
 * };
 * const command = new GetSoftwareSetCommand(input);
 * const response = await client.send(command);
 * // { // GetSoftwareSetResponse
 * //   softwareSet: { // SoftwareSet
 * //     id: "STRING_VALUE",
 * //     version: "STRING_VALUE",
 * //     releasedAt: new Date("TIMESTAMP"),
 * //     supportedUntil: new Date("TIMESTAMP"),
 * //     validationStatus: "VALIDATED" || "NOT_VALIDATED",
 * //     software: [ // SoftwareList
 * //       { // Software
 * //         name: "STRING_VALUE",
 * //         version: "STRING_VALUE",
 * //       },
 * //     ],
 * //     arn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSoftwareSetCommandInput - {@link GetSoftwareSetCommandInput}
 * @returns {@link GetSoftwareSetCommandOutput}
 * @see {@link GetSoftwareSetCommandInput} for command's `input` shape.
 * @see {@link GetSoftwareSetCommandOutput} for command's `response` shape.
 * @see {@link WorkSpacesThinClientClientResolvedConfig | config} for WorkSpacesThinClientClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The server encountered an internal error and is unable to complete the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the specified constraints.</p>
 *
 * @throws {@link WorkSpacesThinClientServiceException}
 * <p>Base exception class for all service exceptions from WorkSpacesThinClient service.</p>
 *
 */
export class GetSoftwareSetCommand extends $Command<
  GetSoftwareSetCommandInput,
  GetSoftwareSetCommandOutput,
  WorkSpacesThinClientClientResolvedConfig
> {
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
  constructor(readonly input: GetSoftwareSetCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WorkSpacesThinClientClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetSoftwareSetCommandInput, GetSoftwareSetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetSoftwareSetCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "WorkSpacesThinClientClient";
    const commandName = "GetSoftwareSetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "ThinClient",
        operation: "GetSoftwareSet",
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
  private serialize(input: GetSoftwareSetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetSoftwareSetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetSoftwareSetCommandOutput> {
    return de_GetSoftwareSetCommand(output, context);
  }
}
