import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { ListBonusPaymentsRequest, ListBonusPaymentsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListBonusPaymentsCommandInput = ListBonusPaymentsRequest;
export declare type ListBonusPaymentsCommandOutput = ListBonusPaymentsResponse & __MetadataBearer;
export declare class ListBonusPaymentsCommand extends $Command<ListBonusPaymentsCommandInput, ListBonusPaymentsCommandOutput, MTurkClientResolvedConfig> {
    readonly input: ListBonusPaymentsCommandInput;
    constructor(input: ListBonusPaymentsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MTurkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListBonusPaymentsCommandInput, ListBonusPaymentsCommandOutput>;
    private serialize;
    private deserialize;
}
