import { KinesisAnalyticsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KinesisAnalyticsV2Client";
import { DeleteApplicationOutputRequest, DeleteApplicationOutputResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteApplicationOutputCommandInput = DeleteApplicationOutputRequest;
export declare type DeleteApplicationOutputCommandOutput = DeleteApplicationOutputResponse & __MetadataBearer;
export declare class DeleteApplicationOutputCommand extends $Command<DeleteApplicationOutputCommandInput, DeleteApplicationOutputCommandOutput, KinesisAnalyticsV2ClientResolvedConfig> {
    readonly input: DeleteApplicationOutputCommandInput;
    constructor(input: DeleteApplicationOutputCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KinesisAnalyticsV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteApplicationOutputCommandInput, DeleteApplicationOutputCommandOutput>;
    private serialize;
    private deserialize;
}
