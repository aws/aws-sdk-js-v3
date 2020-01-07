import { KinesisAnalyticsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisAnalyticsV2Client";
import { StopApplicationRequest, StopApplicationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StopApplicationCommandInput = StopApplicationRequest;
export declare type StopApplicationCommandOutput = StopApplicationResponse & __MetadataBearer;
export declare class StopApplicationCommand extends $Command<StopApplicationCommandInput, StopApplicationCommandOutput, KinesisAnalyticsV2ClientResolvedConfig> {
    readonly input: StopApplicationCommandInput;
    constructor(input: StopApplicationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisAnalyticsV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopApplicationCommandInput, StopApplicationCommandOutput>;
    private serialize;
    private deserialize;
}
