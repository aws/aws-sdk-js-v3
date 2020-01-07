import { Route53ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53Client";
import { ListQueryLoggingConfigsRequest, ListQueryLoggingConfigsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListQueryLoggingConfigsCommandInput = ListQueryLoggingConfigsRequest;
export declare type ListQueryLoggingConfigsCommandOutput = ListQueryLoggingConfigsResponse & __MetadataBearer;
export declare class ListQueryLoggingConfigsCommand extends $Command<ListQueryLoggingConfigsCommandInput, ListQueryLoggingConfigsCommandOutput, Route53ClientResolvedConfig> {
    readonly input: ListQueryLoggingConfigsCommandInput;
    constructor(input: ListQueryLoggingConfigsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListQueryLoggingConfigsCommandInput, ListQueryLoggingConfigsCommandOutput>;
    private serialize;
    private deserialize;
}
