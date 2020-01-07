import { KinesisAnalyticsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisAnalyticsClient";
import { StopApplicationRequest, StopApplicationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StopApplicationCommandInput = StopApplicationRequest;
export declare type StopApplicationCommandOutput = StopApplicationResponse & __MetadataBearer;
export declare class StopApplicationCommand extends $Command<StopApplicationCommandInput, StopApplicationCommandOutput, KinesisAnalyticsClientResolvedConfig> {
    readonly input: StopApplicationCommandInput;
    constructor(input: StopApplicationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisAnalyticsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopApplicationCommandInput, StopApplicationCommandOutput>;
    private serialize;
    private deserialize;
}
