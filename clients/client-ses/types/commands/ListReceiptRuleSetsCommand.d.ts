import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { ListReceiptRuleSetsRequest, ListReceiptRuleSetsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListReceiptRuleSetsCommandInput = ListReceiptRuleSetsRequest;
export declare type ListReceiptRuleSetsCommandOutput = ListReceiptRuleSetsResponse & __MetadataBearer;
export declare class ListReceiptRuleSetsCommand extends $Command<ListReceiptRuleSetsCommandInput, ListReceiptRuleSetsCommandOutput, SESClientResolvedConfig> {
    readonly input: ListReceiptRuleSetsCommandInput;
    constructor(input: ListReceiptRuleSetsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListReceiptRuleSetsCommandInput, ListReceiptRuleSetsCommandOutput>;
    private serialize;
    private deserialize;
}
