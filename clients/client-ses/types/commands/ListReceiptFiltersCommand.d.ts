import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { ListReceiptFiltersRequest, ListReceiptFiltersResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListReceiptFiltersCommandInput = ListReceiptFiltersRequest;
export declare type ListReceiptFiltersCommandOutput = ListReceiptFiltersResponse & __MetadataBearer;
export declare class ListReceiptFiltersCommand extends $Command<ListReceiptFiltersCommandInput, ListReceiptFiltersCommandOutput, SESClientResolvedConfig> {
    readonly input: ListReceiptFiltersCommandInput;
    constructor(input: ListReceiptFiltersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListReceiptFiltersCommandInput, ListReceiptFiltersCommandOutput>;
    private serialize;
    private deserialize;
}
