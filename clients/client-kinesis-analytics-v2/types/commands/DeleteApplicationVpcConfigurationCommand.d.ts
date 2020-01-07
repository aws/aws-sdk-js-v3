import { KinesisAnalyticsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisAnalyticsV2Client";
import { DeleteApplicationVpcConfigurationRequest, DeleteApplicationVpcConfigurationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteApplicationVpcConfigurationCommandInput = DeleteApplicationVpcConfigurationRequest;
export declare type DeleteApplicationVpcConfigurationCommandOutput = DeleteApplicationVpcConfigurationResponse & __MetadataBearer;
export declare class DeleteApplicationVpcConfigurationCommand extends $Command<DeleteApplicationVpcConfigurationCommandInput, DeleteApplicationVpcConfigurationCommandOutput, KinesisAnalyticsV2ClientResolvedConfig> {
    readonly input: DeleteApplicationVpcConfigurationCommandInput;
    constructor(input: DeleteApplicationVpcConfigurationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisAnalyticsV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteApplicationVpcConfigurationCommandInput, DeleteApplicationVpcConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
