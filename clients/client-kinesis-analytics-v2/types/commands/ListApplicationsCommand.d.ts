import { KinesisAnalyticsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisAnalyticsV2Client";
import { ListApplicationsRequest, ListApplicationsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListApplicationsCommandInput = ListApplicationsRequest;
export declare type ListApplicationsCommandOutput = ListApplicationsResponse & __MetadataBearer;
export declare class ListApplicationsCommand extends $Command<ListApplicationsCommandInput, ListApplicationsCommandOutput, KinesisAnalyticsV2ClientResolvedConfig> {
    readonly input: ListApplicationsCommandInput;
    constructor(input: ListApplicationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisAnalyticsV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListApplicationsCommandInput, ListApplicationsCommandOutput>;
    private serialize;
    private deserialize;
}
