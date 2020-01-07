import { KinesisAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisAnalyticsClient";
import { ListApplicationsRequest, ListApplicationsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListApplicationsCommandInput = ListApplicationsRequest;
export declare type ListApplicationsCommandOutput = ListApplicationsResponse & __MetadataBearer;
export declare class ListApplicationsCommand extends $Command<ListApplicationsCommandInput, ListApplicationsCommandOutput, KinesisAnalyticsClientResolvedConfig> {
    readonly input: ListApplicationsCommandInput;
    constructor(input: ListApplicationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisAnalyticsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListApplicationsCommandInput, ListApplicationsCommandOutput>;
    private serialize;
    private deserialize;
}
