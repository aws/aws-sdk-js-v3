import { KinesisAnalyticsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisAnalyticsV2Client";
import { DeleteApplicationInputProcessingConfigurationRequest, DeleteApplicationInputProcessingConfigurationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteApplicationInputProcessingConfigurationCommandInput = DeleteApplicationInputProcessingConfigurationRequest;
export declare type DeleteApplicationInputProcessingConfigurationCommandOutput = DeleteApplicationInputProcessingConfigurationResponse & __MetadataBearer;
export declare class DeleteApplicationInputProcessingConfigurationCommand extends $Command<DeleteApplicationInputProcessingConfigurationCommandInput, DeleteApplicationInputProcessingConfigurationCommandOutput, KinesisAnalyticsV2ClientResolvedConfig> {
    readonly input: DeleteApplicationInputProcessingConfigurationCommandInput;
    constructor(input: DeleteApplicationInputProcessingConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisAnalyticsV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteApplicationInputProcessingConfigurationCommandInput, DeleteApplicationInputProcessingConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
