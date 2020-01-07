import { KinesisAnalyticsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisAnalyticsV2Client";
import { AddApplicationOutputRequest, AddApplicationOutputResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AddApplicationOutputCommandInput = AddApplicationOutputRequest;
export declare type AddApplicationOutputCommandOutput = AddApplicationOutputResponse & __MetadataBearer;
export declare class AddApplicationOutputCommand extends $Command<AddApplicationOutputCommandInput, AddApplicationOutputCommandOutput, KinesisAnalyticsV2ClientResolvedConfig> {
    readonly input: AddApplicationOutputCommandInput;
    constructor(input: AddApplicationOutputCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisAnalyticsV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AddApplicationOutputCommandInput, AddApplicationOutputCommandOutput>;
    private serialize;
    private deserialize;
}
