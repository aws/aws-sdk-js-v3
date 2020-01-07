import { KinesisAnalyticsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisAnalyticsV2Client";
import { UpdateApplicationRequest, UpdateApplicationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateApplicationCommandInput = UpdateApplicationRequest;
export declare type UpdateApplicationCommandOutput = UpdateApplicationResponse & __MetadataBearer;
export declare class UpdateApplicationCommand extends $Command<UpdateApplicationCommandInput, UpdateApplicationCommandOutput, KinesisAnalyticsV2ClientResolvedConfig> {
    readonly input: UpdateApplicationCommandInput;
    constructor(input: UpdateApplicationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisAnalyticsV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateApplicationCommandInput, UpdateApplicationCommandOutput>;
    private serialize;
    private deserialize;
}
