import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { ListRecordHistoryInput, ListRecordHistoryOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListRecordHistoryCommandInput = ListRecordHistoryInput;
export declare type ListRecordHistoryCommandOutput = ListRecordHistoryOutput & __MetadataBearer;
export declare class ListRecordHistoryCommand extends $Command<ListRecordHistoryCommandInput, ListRecordHistoryCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: ListRecordHistoryCommandInput;
    constructor(input: ListRecordHistoryCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListRecordHistoryCommandInput, ListRecordHistoryCommandOutput>;
    private serialize;
    private deserialize;
}
