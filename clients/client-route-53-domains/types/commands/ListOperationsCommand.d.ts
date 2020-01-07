import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";
import { ListOperationsRequest, ListOperationsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListOperationsCommandInput = ListOperationsRequest;
export declare type ListOperationsCommandOutput = ListOperationsResponse & __MetadataBearer;
export declare class ListOperationsCommand extends $Command<ListOperationsCommandInput, ListOperationsCommandOutput, Route53DomainsClientResolvedConfig> {
    readonly input: ListOperationsCommandInput;
    constructor(input: ListOperationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53DomainsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListOperationsCommandInput, ListOperationsCommandOutput>;
    private serialize;
    private deserialize;
}
