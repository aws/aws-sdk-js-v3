import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { ListHealthChecksRequest, ListHealthChecksResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListHealthChecksCommandInput = ListHealthChecksRequest;
export declare type ListHealthChecksCommandOutput = ListHealthChecksResponse & __MetadataBearer;
export declare class ListHealthChecksCommand extends $Command<ListHealthChecksCommandInput, ListHealthChecksCommandOutput, Route53ClientResolvedConfig> {
    readonly input: ListHealthChecksCommandInput;
    constructor(input: ListHealthChecksCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListHealthChecksCommandInput, ListHealthChecksCommandOutput>;
    private serialize;
    private deserialize;
}
