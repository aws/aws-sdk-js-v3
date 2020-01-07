import { KinesisAnalyticsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisAnalyticsV2Client";
import { StartApplicationRequest, StartApplicationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartApplicationCommandInput = StartApplicationRequest;
export declare type StartApplicationCommandOutput = StartApplicationResponse & __MetadataBearer;
export declare class StartApplicationCommand extends $Command<StartApplicationCommandInput, StartApplicationCommandOutput, KinesisAnalyticsV2ClientResolvedConfig> {
    readonly input: StartApplicationCommandInput;
    constructor(input: StartApplicationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisAnalyticsV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartApplicationCommandInput, StartApplicationCommandOutput>;
    private serialize;
    private deserialize;
}
