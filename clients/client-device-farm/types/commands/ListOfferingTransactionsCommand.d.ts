import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { ListOfferingTransactionsRequest, ListOfferingTransactionsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListOfferingTransactionsCommandInput = ListOfferingTransactionsRequest;
export declare type ListOfferingTransactionsCommandOutput = ListOfferingTransactionsResult & __MetadataBearer;
export declare class ListOfferingTransactionsCommand extends $Command<ListOfferingTransactionsCommandInput, ListOfferingTransactionsCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: ListOfferingTransactionsCommandInput;
    constructor(input: ListOfferingTransactionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListOfferingTransactionsCommandInput, ListOfferingTransactionsCommandOutput>;
    private serialize;
    private deserialize;
}
