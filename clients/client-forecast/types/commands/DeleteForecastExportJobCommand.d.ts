import { ServiceInputTypes, ServiceOutputTypes, forecastClientResolvedConfig } from "../forecastClient";
import { DeleteForecastExportJobRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteForecastExportJobCommandInput = DeleteForecastExportJobRequest;
export declare type DeleteForecastExportJobCommandOutput = __MetadataBearer;
export declare class DeleteForecastExportJobCommand extends $Command<DeleteForecastExportJobCommandInput, DeleteForecastExportJobCommandOutput, forecastClientResolvedConfig> {
    readonly input: DeleteForecastExportJobCommandInput;
    constructor(input: DeleteForecastExportJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: forecastClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteForecastExportJobCommandInput, DeleteForecastExportJobCommandOutput>;
    private serialize;
    private deserialize;
}
