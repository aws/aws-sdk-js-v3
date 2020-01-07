import { ServiceInputTypes, ServiceOutputTypes, forecastClientResolvedConfig } from "../forecastClient";
import { DeleteForecastRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteForecastCommandInput = DeleteForecastRequest;
export declare type DeleteForecastCommandOutput = __MetadataBearer;
export declare class DeleteForecastCommand extends $Command<DeleteForecastCommandInput, DeleteForecastCommandOutput, forecastClientResolvedConfig> {
    readonly input: DeleteForecastCommandInput;
    constructor(input: DeleteForecastCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: forecastClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteForecastCommandInput, DeleteForecastCommandOutput>;
    private serialize;
    private deserialize;
}
