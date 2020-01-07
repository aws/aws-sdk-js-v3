import { KinesisAnalyticsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisAnalyticsV2Client";
import { AddApplicationReferenceDataSourceRequest, AddApplicationReferenceDataSourceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AddApplicationReferenceDataSourceCommandInput = AddApplicationReferenceDataSourceRequest;
export declare type AddApplicationReferenceDataSourceCommandOutput = AddApplicationReferenceDataSourceResponse & __MetadataBearer;
export declare class AddApplicationReferenceDataSourceCommand extends $Command<AddApplicationReferenceDataSourceCommandInput, AddApplicationReferenceDataSourceCommandOutput, KinesisAnalyticsV2ClientResolvedConfig> {
    readonly input: AddApplicationReferenceDataSourceCommandInput;
    constructor(input: AddApplicationReferenceDataSourceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisAnalyticsV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AddApplicationReferenceDataSourceCommandInput, AddApplicationReferenceDataSourceCommandOutput>;
    private serialize;
    private deserialize;
}
