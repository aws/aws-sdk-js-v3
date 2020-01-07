import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { ListDashboardsInput, ListDashboardsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListDashboardsCommandInput = ListDashboardsInput;
export declare type ListDashboardsCommandOutput = ListDashboardsOutput & __MetadataBearer;
export declare class ListDashboardsCommand extends $Command<ListDashboardsCommandInput, ListDashboardsCommandOutput, CloudWatchClientResolvedConfig> {
    readonly input: ListDashboardsCommandInput;
    constructor(input: ListDashboardsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDashboardsCommandInput, ListDashboardsCommandOutput>;
    private serialize;
    private deserialize;
}
