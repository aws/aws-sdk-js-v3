import { Cloud9ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Cloud9Client";
import { ListEnvironmentsRequest, ListEnvironmentsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListEnvironmentsCommandInput = ListEnvironmentsRequest;
export declare type ListEnvironmentsCommandOutput = ListEnvironmentsResult & __MetadataBearer;
export declare class ListEnvironmentsCommand extends $Command<ListEnvironmentsCommandInput, ListEnvironmentsCommandOutput, Cloud9ClientResolvedConfig> {
    readonly input: ListEnvironmentsCommandInput;
    constructor(input: ListEnvironmentsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Cloud9ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListEnvironmentsCommandInput, ListEnvironmentsCommandOutput>;
    private serialize;
    private deserialize;
}
