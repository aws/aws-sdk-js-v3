import { KinesisAnalyticsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisAnalyticsV2Client";
import { DeleteApplicationRequest, DeleteApplicationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteApplicationCommandInput = DeleteApplicationRequest;
export declare type DeleteApplicationCommandOutput = DeleteApplicationResponse & __MetadataBearer;
export declare class DeleteApplicationCommand extends $Command<DeleteApplicationCommandInput, DeleteApplicationCommandOutput, KinesisAnalyticsV2ClientResolvedConfig> {
    readonly input: DeleteApplicationCommandInput;
    constructor(input: DeleteApplicationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisAnalyticsV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteApplicationCommandInput, DeleteApplicationCommandOutput>;
    private serialize;
    private deserialize;
}
