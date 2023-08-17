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

import { GetJourneyRunsRequest, GetJourneyRunsResponse } from "../models/models_1";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { de_GetJourneyRunsCommand, se_GetJourneyRunsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetJourneyRunsCommand}.
 */
export interface GetJourneyRunsCommandInput extends GetJourneyRunsRequest {}
/**
 * @public
 *
 * The output of {@link GetJourneyRunsCommand}.
 */
export interface GetJourneyRunsCommandOutput extends GetJourneyRunsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Provides information about the runs of a journey.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetJourneyRunsCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetJourneyRunsCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const input = { // GetJourneyRunsRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   JourneyId: "STRING_VALUE", // required
 *   PageSize: "STRING_VALUE",
 *   Token: "STRING_VALUE",
 * };
 * const command = new GetJourneyRunsCommand(input);
 * const response = await client.send(command);
 * // { // GetJourneyRunsResponse
 * //   JourneyRunsResponse: { // JourneyRunsResponse
 * //     Item: [ // ListOfJourneyRunResponse // required
 * //       { // JourneyRunResponse
 * //         CreationTime: "STRING_VALUE", // required
 * //         LastUpdateTime: "STRING_VALUE", // required
 * //         RunId: "STRING_VALUE", // required
 * //         Status: "SCHEDULED" || "RUNNING" || "COMPLETED" || "CANCELLED", // required
 * //       },
 * //     ],
 * //     NextToken: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetJourneyRunsCommandInput - {@link GetJourneyRunsCommandInput}
 * @returns {@link GetJourneyRunsCommandOutput}
 * @see {@link GetJourneyRunsCommandInput} for command's `input` shape.
 * @see {@link GetJourneyRunsCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for PinpointClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PayloadTooLargeException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PinpointServiceException}
 * <p>Base exception class for all service exceptions from Pinpoint service.</p>
 *
 * @example To get the runs of a journey
 * ```javascript
 * // The following example gets the runs of a journey.
 * const input = {
 *   "ApplicationId": "11111111112222222222333333333344",
 *   "JourneyId": "aaaaaaaaaabbbbbbbbbbccccccccccdd"
 * };
 * const command = new GetJourneyRunsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "JourneyRunsResponse": {
 *     "Item": [
 *       {
 *         "RunId": "99999999998888888888777777777766",
 *         "CreationTime": "2000-01-01T00:00:00.000Z",
 *         "LastUpdateTime": "2000-01-01T00:00:05.000Z",
 *         "Status": "COMPLETED"
 *       },
 *       {
 *         "RunId": "ffffffffffeeeeeeeeeeddddddddddcc",
 *         "CreationTime": "2000-01-01T00:00:10.000Z",
 *         "LastUpdateTime": "2000-01-01T00:00:10.000Z",
 *         "Status": "SCHEDULED"
 *       }
 *     ]
 *   }
 * }
 * *\/
 * // example id: to-get-the-runs-of-a-journey
 * ```
 *
 */
export class GetJourneyRunsCommand extends $Command<
  GetJourneyRunsCommandInput,
  GetJourneyRunsCommandOutput,
  PinpointClientResolvedConfig
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
  constructor(readonly input: GetJourneyRunsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetJourneyRunsCommandInput, GetJourneyRunsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetJourneyRunsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointClient";
    const commandName = "GetJourneyRunsCommand";
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
  private serialize(input: GetJourneyRunsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetJourneyRunsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetJourneyRunsCommandOutput> {
    return de_GetJourneyRunsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
