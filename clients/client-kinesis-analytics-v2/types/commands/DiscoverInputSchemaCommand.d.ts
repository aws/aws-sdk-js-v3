import { KinesisAnalyticsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisAnalyticsV2Client";
import { DiscoverInputSchemaRequest, DiscoverInputSchemaResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DiscoverInputSchemaCommandInput = DiscoverInputSchemaRequest;
export declare type DiscoverInputSchemaCommandOutput = DiscoverInputSchemaResponse & __MetadataBearer;
export declare class DiscoverInputSchemaCommand extends $Command<DiscoverInputSchemaCommandInput, DiscoverInputSchemaCommandOutput, KinesisAnalyticsV2ClientResolvedConfig> {
    readonly input: DiscoverInputSchemaCommandInput;
    constructor(input: DiscoverInputSchemaCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisAnalyticsV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DiscoverInputSchemaCommandInput, DiscoverInputSchemaCommandOutput>;
    private serialize;
    private deserialize;
}
