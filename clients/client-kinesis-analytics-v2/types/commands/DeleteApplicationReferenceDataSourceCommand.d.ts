import { KinesisAnalyticsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisAnalyticsV2Client";
import { DeleteApplicationReferenceDataSourceRequest, DeleteApplicationReferenceDataSourceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteApplicationReferenceDataSourceCommandInput = DeleteApplicationReferenceDataSourceRequest;
export declare type DeleteApplicationReferenceDataSourceCommandOutput = DeleteApplicationReferenceDataSourceResponse & __MetadataBearer;
export declare class DeleteApplicationReferenceDataSourceCommand extends $Command<DeleteApplicationReferenceDataSourceCommandInput, DeleteApplicationReferenceDataSourceCommandOutput, KinesisAnalyticsV2ClientResolvedConfig> {
    readonly input: DeleteApplicationReferenceDataSourceCommandInput;
    constructor(input: DeleteApplicationReferenceDataSourceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisAnalyticsV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteApplicationReferenceDataSourceCommandInput, DeleteApplicationReferenceDataSourceCommandOutput>;
    private serialize;
    private deserialize;
}
