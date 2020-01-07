import { ServiceInputTypes, ServiceOutputTypes, forecastClientResolvedConfig } from "../forecastClient";
import { ListPredictorsRequest, ListPredictorsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListPredictorsCommandInput = ListPredictorsRequest;
export declare type ListPredictorsCommandOutput = ListPredictorsResponse & __MetadataBearer;
export declare class ListPredictorsCommand extends $Command<ListPredictorsCommandInput, ListPredictorsCommandOutput, forecastClientResolvedConfig> {
    readonly input: ListPredictorsCommandInput;
    constructor(input: ListPredictorsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: forecastClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListPredictorsCommandInput, ListPredictorsCommandOutput>;
    private serialize;
    private deserialize;
}
