import { ServiceInputTypes, ServiceOutputTypes, forecastClientResolvedConfig } from "../forecastClient";
import { ListDatasetsRequest, ListDatasetsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListDatasetsCommandInput = ListDatasetsRequest;
export declare type ListDatasetsCommandOutput = ListDatasetsResponse & __MetadataBearer;
export declare class ListDatasetsCommand extends $Command<ListDatasetsCommandInput, ListDatasetsCommandOutput, forecastClientResolvedConfig> {
    readonly input: ListDatasetsCommandInput;
    constructor(input: ListDatasetsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: forecastClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDatasetsCommandInput, ListDatasetsCommandOutput>;
    private serialize;
    private deserialize;
}
